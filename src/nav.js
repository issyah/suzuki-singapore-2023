/**
 * Main navbar for suzuki singapore 2023
 * Created by Issyah Ismail
 **/
import {
  AppBar,
  Box,
  Container,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Collapse,
  MenuList,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import SuzukiLogo from "@/public/suzuki-logo.webp";
import Image from "next/image";
import Link from "./Link";
import { red } from "@mui/material/colors";
import { Menu, PinDrop } from "@mui/icons-material";
import { useState } from "react";
export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const pages = [
    {
      label: "MOTORCYLES",
      href: "/motorcycles",
    },
    {
      label: "NEWS",
      href: "/news",
    },
    {
      label: "CONTACT",
      href: "/contact",
    },
    {
      label: "LOCATE A DEALER",
      href: "/locate-a-dealer",
      startIcon: <PinDrop />,
      sx: {
        bgcolor: "primary.main",
        color: "white",
        mt: -1,
        mb: -1,
        transform: "skewX(-10deg)",
        span: {
          transform: "skewX(10deg)",
        },
        "&:hover": {
          bgcolor: red[800],
          color: "white",
        },
      },
    },
  ];
  return (
    <AppBar position="fixed" color="default" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box position="relative" height={45} width={70} my={1}>
            <Link href="/">
              <Image src={SuzukiLogo} fill style={{ objectFit: "contain" }} />
            </Link>
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              ml: "auto",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              ml: "auto",
            }}
          >
            {pages.map((item, index) => (
              <Button
                size="large"
                sx={{
                  fontFamily: "Oswald",
                  ml: 1,
                  ...item?.sx,
                }}
                key={index}
                component={Link}
                href={item.href}
                startIcon={item.startIcon}
              >
                <span>{item.label}</span>
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Collapse in={isOpen}>
          <MenuList sx={{
            height: 'calc(100vh - 61px)'
          }}>
            {pages.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton component={Link} href={item.href} sx={item.sx} onClick={() => setIsOpen(false)}>
                  <ListItemText>{item.label}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </MenuList>
        </Collapse>
      </Container>
    </AppBar>
  );
}
