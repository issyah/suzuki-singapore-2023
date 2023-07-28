/**
 * Motorcycles sections
 * Created by Issyah Ismail*/
import Public from "templates/public";
import {
  Container,
  Divider,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  CardActionArea,
} from "@mui/material";
import Image from "next/image";
import Link from "@/src/Link";
import { useRouter } from "next/router";
export default function Motorcycles(props) {
  const router = useRouter();
  const motorcycles = [
    {
      name: "SUPERSPORT",
      products: [
        {
          label: "GSX-R150 ABS",
          img: "/images/gsx-r150/GSX-R150_YSF_Right.jpg",
          href: "/motorcycles/gsx-r150",
          view360Href: "/motorcycles/360-viewer/gsx-r150",
        },
      ],
    },
    {
      name: "ULTIMATE SUPERSPORT",
      products: [
        {
          label: 'HAYABUSA 25th ANNIVERSARY',
          img: '/images/hayabusa-25th/GSX1300RRQM4_B9E_right.jpeg',
          href: '/motorcycles/hayabusa-25th-anniversary-edition'
        },
        {
          label: "HAYABUSA",
          img: "/images/GSX1300RRQM3_CJH_right_single_seat_cowl.jpeg",
          href: "/motorcycles/hayabusa",
          view360Href: '/motorcycles/360-viewer/hayabusa'
        },
      ],
    },
    {
      name: "STREET",
      products: [
        {
          label: "GSX-S1000GT",
          img: "/images/gsx-s1000gt/GSX-S1000GT_M3_YSF_Right.jpg",
          href: "/motorcycles/gsx-s1000gt",
        },
        {
          label: "GSX-S150 ABS",
          img: "/images/gsx-s150/GSX-S150_YSF_Right.jpg",
          href: "/motorcycles/gsx-s150",
        },
      ],
    },
    {
      name: "SPORT ADVENTURER TOURER",
      products: [
        {
          label: "V-STROM 800DE",
          img: "/images/vstrom-800de/DL800DERCM3_YU1_right.jpeg",
          href: "/motorcycles/v-strom-800de",
        },
      ],
    },
  ];

  return (
    <Public>
      <Container maxWidth="xl">
        <Typography variant="h3" component={"h1"} sx={{ mb: 4 }}>
          MOTORCYCLES
        </Typography>
        <Stack spacing={4}>
          {motorcycles.map((item, index) => (
            <Box key={index}>
              <Divider textAlign="left" sx={{ my: 2, ":before": { width: 0 } }}>
                <Typography variant="h5" component="h3">
                  {item.name}
                </Typography>
              </Divider>
              <Grid container spacing={4}>
                {item?.products?.map((product, i) => (
                  <Grid item key={i} md={3} xs={12}>
                    <Card elevation={0}>
                      <CardContent sx={{ textAlign: "center" }}>
                        <CardActionArea component={Link} href={product.href}>
                          <Box
                            position="relative"
                            height={200}
                            width={"100%"}
                            mb={2}
                          >
                            <Image
                              src={product.img}
                              fill
                              style={{ objectFit: "contain" }}
                            />
                          </Box>
                          <Typography
                            variant="body1"
                            fontWeight="bold"
                            sx={{ mb: 2 }}
                          >
                            {product.label}
                          </Typography>
                        </CardActionArea>
                        <Divider sx={{ my: 2 }} />
                        <Button
                          fullWidth
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 1 }}
                          component={Link}
                          href={product.href}
                        >
                          Detail
                        </Button>
                        {product.view360Href && (
                          <Button variant="text" color='secondary' fullWidth component={Link} href={product.view360Href} target='_blank'>
                            360 viewer
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Stack>
      </Container>
    </Public>
  );
}
