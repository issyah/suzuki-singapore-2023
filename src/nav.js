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
      sx: {
        bgcolor: "primary.main",
        color: "white",
        "&:hover": {
          bgcolor: "secondary.main",
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
                  typography: "h6",
                  fontFamily: "Oswald",
                  ml: 1,
                  ...item?.sx,
                }}
                key={index}
                component={Link}
                href={item.href}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
