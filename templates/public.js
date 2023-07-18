/**
 * Main default public page
 **/
import Footer from "@/src/footer";
import Nav from "@/src/nav";
import { WhatsApp } from "@mui/icons-material";
import { Toolbar, Box, Fab, Menu, MenuItem } from "@mui/material";
import Aos from "aos";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Public(props) {
  const { children } = props;
  const whatsappLink = [
    {
      label: "Talk to sales",
      contact: "6562997939",
      message: "Hi, I got this number from suzukisingapore.com.sg, I want to talk to sales"
    },
    {
      label: "Enquire about services/repair",
      contact: "6565160016",
      message: "Hi, I got this number from suzukisingapore.com.sg, I want to enquire about services"
    },
    {
      label: "Enquire about spare parts",
      contact: "6565160018",
      message: "Hi, I got this number from suzukisingapore.com.sg, I want to enquire about spare parts"
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  useEffect(() => {
    if(typeof window !== undefined) {
      Aos.init();
    }
  }, [])
  return (
    <div>
      <Nav />
      <Toolbar />
      <Box my={2}>{children}</Box>
      <Footer />
      <Box
        sx={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
        }}
      >
        <Fab color="primary" onClick={handleClick}>
          <WhatsApp />
        </Fab>
      </Box>
      <Menu
        onClose={handleClose}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        {whatsappLink.map((item,index) => (
          <MenuItem target={'_blank'} component={Link} href={`https://api.whatsapp.com/send?phone=${item?.contact}&text=${item?.message}`} key={index}>{item.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
