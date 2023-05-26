/**
 * Main footer*/
import {
  Facebook,
  FacebookOutlined,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Link from "./Link";

export default function Footer(props) {
  const reachLinks = [
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Locate a Dealer",
      href: "/locate-a-dealer",
    },
  ];
  const socialMedia = [
    {
      icon: <FacebookOutlined />,
      href: "https://www.facebook.com/SuzukiSingapore",
    },
    {
      icon: <Instagram />,
      href: "https://instagram.com/suzukisingapore",
    },
    {
      icon: <YouTube />,
      href: "https://www.youtube.com/channel/UCAZse9zWm9RvEwefR_qwRhg?view_as=subscriber",
    },
  ];

  const links = [
    {
      label: 'Motorcycles',
      href: '/motorcycles'
    },
    {
      label: 'News',
      href: '/news',
    },
    {
      label: 'Hayabusa',
      href: '/motorcycles/hayabusa'
    },
    {
      label: 'GSX-S1000GT',
      href: '/motorcycles/gsx-s1000gt'
    },
    {
      label: 'V-STROM 800DE',
      href: '/motorcycles/v-strom-800de'
    },
    {
      label: 'GSX-R150',
      href: '/motorcycles/gsx-r150'
    },
    {
      label: 'GSX-S150',
      href: '/motorcycles/gsx-s150'
    }
  ]

  return (
    <footer>
      <Box sx={{ py: 8, bgcolor: grey[800], color: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item md={4} sx={6}>
              
            </Grid>
            <Grid item md={4} xs={6}>
              <Typography variant="h5" gutterBottom>LINKS</Typography>
              <Stack spacing={1}>
                {links.map((item,index) => (
                  <Link color='inherit' underline='hover' key={index} href={item.href}>{item.label}</Link>
                ))}
              </Stack>
            </Grid>
            <Grid item md={4} xs={6}>
              <Typography variant="h5" gutterBottom>
                HOW TO REACH US
              </Typography>
              <Stack spacing={1}>
                {reachLinks.map((item, index) => (
                  <Link
                    color="inherit"
                    underline="hover"
                    key={index}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                SOCIAL MEDIA
              </Typography>
              <Stack spacing={1} direction="row">
                {socialMedia.map((item, index) => (
                  <Link
                    target={"_blank"}
                    color="inherit"
                    underline="hover"
                    key={index}
                    href={item.href}
                  >
                    {item.icon}
                  </Link>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="caption">
              Copyright © {new Date().getFullYear()} All rights are reserved by
              Guan Hoe Co. (M) Pte. Ltd.
            </Typography>
            <Typography variant="caption">
              9 Kaki Bukit Road 1, #01-01 Eunos Technolink
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
