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
} from "@mui/material";
import SuzukiLogo from "@/public/suzuki-logo.webp";
import Image from "next/image";
import Link from "./Link";
import {red} from '@mui/material/colors';
import { PinDrop } from "@mui/icons-material";
export default function Nav(props) {
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
      startIcon: <PinDrop/>,
      sx: {
        bgcolor: "primary.main",
        color: "white",
        mt:-1,
        mb:-1,
        transform: 'skewX(-10deg)',
        'span' : {
          transform: 'skewX(10deg)'
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
      </Container>
    </AppBar>
  );
}
