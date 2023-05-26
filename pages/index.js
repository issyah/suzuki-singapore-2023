import * as React from "react";
import Head from "next/head";
import Public from "templates/public";
import Banner1 from "@/public/images/index_banner_1.jpeg";
import Banner2 from "@/public/images/index_banner_2.jpeg";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { grey } from "@mui/material/colors";
export default function Index() {
  return (
    <Public>
      <Head>
        <title>Suzuki Motorocycles Singapore</title>
      </Head>
      <Container maxWidth="lg">
        <Box mb={2}>
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <Link href={"/motorcycles/hayabusa"}>
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Image
                    className="img-responsive"
                    src={Banner2}
                    alt="hayabusa"
                  />
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/motorcycles/v-strom-800de"}>
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Image
                    className="img-responsive"
                    src={Banner1}
                    alt="v-strom"
                  />
                </Box>
              </Link>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item md={6} xs={6}>
            <Image src={Banner2} alt="hayabusa" className="img-responsive" />
          </Grid>
          <Grid item md={6} xs={6}>
            <Image src={Banner1} alt="v-strom" className="img-responsive" />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          bgcolor: grey[200],
          py: 4,
          mb: -2,
        }}
      >
        <Container maxWidth="lg">
          <Divider align="center" sx={{ mb: 4 }}>
            <Typography variant="h3">MOTORCYCLES</Typography>
          </Divider>
          <Grid container spacing={4}>
            <Grid item md={4}>
              <Card elevation={0}>
                <CardContent>
                  <Image
                    src={"/images/GSX1300RRQM3_CJH_right_single_seat_cowl.jpeg"}
                    height={350}
                    width={525}
                    alt="hayabusa"
                    className="img-responsive"
                  />
                  <Typography variant="h5" align="center" gutterBottom>
                    HAYABUSA
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item md={6} xs={12}></Grid>
                    <Grid item md={6} xs={12}></Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    component={Link}
                    href="/motorcycles/hayabusa"
                  >
                    Detail
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    component={Link}
                    href="/motorcycles/360-viewer/hayabusa"
                  >
                    360 viewer
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4} xs={6}>
              <Card elevation={0}>
                <CardContent>
                  <Image
                    src={"/images/gsx-s1000gt/GSX-S1000GT_M3_YSF_Right.jpeg"}
                    height={350}
                    width={525}
                    alt="gsx-s1000gt"
                    className="img-responsive"
                  />
                  <Typography variant="h5" align="center" gutterBottom>
                    GSX-S1000GT
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item md={6} xs={12}></Grid>
                    {/* <Grid item md={6} xs={12}>
                      <Button variant="outlined" fullWidth>
                        360 viewer
                      </Button>
                    </Grid> */}
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    component={Link}
                    href="/motorcycles/gsx-s1000gt"
                  >
                    Detail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4} xs={6}>
              <Card elevation={0}>
                <CardContent>
                  <Image
                    src={"/images/vstrom-800de/DL800DERCM3_YU1_right.jpeg"}
                    height={350}
                    width={525}
                    alt="V-STROM 800DE"
                    className="img-responsive"
                  />
                  <Typography variant="h5" align="center" gutterBottom>
                    V-STROM 800DE
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item md={12} xs={12}></Grid>
                    {/* <Grid item md={6} xs={12}>
                      <Button variant="outlined" fullWidth>
                        360 viewer
                      </Button>
                    </Grid> */}
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    component={Link}
                    href="/motorcycles/v-strom-800de"
                  >
                    Detail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Box textAlign="center" mt={4}>
            <Button
              component={Link}
              href="/motorcycles"
              size="large"
              variant="contained"
            >
              VIEW MORE
            </Button>
          </Box>
        </Container>
      </Box>
      {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSuzukiSingapore%2F&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=628176207284837" width="340" height="331"  frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
    </Public>
  );
}
