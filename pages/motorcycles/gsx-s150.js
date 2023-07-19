// gsx-s150

import Public from "templates/public";
import BannerImg from "@/public/images/gsx-s150/GSX-S150_YSF_Diagonal.jpg";
import Logo from "@/public/images/gsx-r150/GSX-R150_Logo_1.jpeg";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  DialogContent,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  IconButton,
  DialogTitle,
} from "@mui/material";
import Image from "next/image";
import Link from "@/src/Link";
import Head from "next/head";
import Collapsible from "@/src/Collapsible";
import FeatureListCollapsible from "@/src/FeatureListCollapsible";
import { Close, KeyboardArrowLeft } from "@mui/icons-material";
import { useState } from "react";
export default function GsxR150(props) {
  const [openPhoto, setOpenPhoto] = useState(false);
  const [photoSelected, setPhotoSelected] = useState();
  const [color, setColor] = useState("blue");
  const dimensions = [
    {
      title: "Overall length",
      content: "2,020 mm",
    },
    {
      title: "Overall width",
      content: "745 mm",
    },
    {
      title: "Overall height",
      content: "1,040 mm",
    },
    {
      title: "Wheelbase",
      content: "1,300 mm",
    },
    {
      title: "Seat height",
      content: "785 mm",
    },
    {
      title: "Ground clearance",
      content: "155 mm",
    },
    {
      title: "Curb mass",
      content: "130 kg",
    },
  ];

  const engine = [
    {
      title: "Engine type",
      content: "Water-cooled, 4-stroke DOHC 4-valve",
    },
    {
      title: "Engine displacement",
      content: "147.3cm3",
    },
    {
      title: "Fuel system",
      content: "FI",
    },
    {
      title: "Transmission",
      content: "6-speed, return",
    },
    {
      title: "Start system",
      content: "Electric",
    },
  ];
  const chassis = [
    {
      title: "Frame type",
      content: "Diamond",
    },
    {
      title: "Brakes",
      content: "Front: Disc (petal), Rear: Disc (petal)",
    },
    {
      title: "Suspension",
      content: "Front: Telescopic, Rear: Swingarm",
    },
    {
      title: "Wheels",
      content: "Cast",
    },
    {
      title: "Tires",
      content: "Front: 90/80-17M/C, Rear: 130/70-17M/C",
    },
  ];

  const photo = [
    "/images/gsx-s150/GSX-S150_YSF_Diagonal.jpg",
    "/images/gsx-s150/GSX-S150_YSF_Front.jpg",
    "/images/gsx-s150/GSX-S150_YSF_Left.jpg",
    "/images/gsx-s150/GSX-S150_YSF_Rear.jpg",
    "/images/gsx-s150/GSX-S150_YSF_Right.jpg",
    "/images/gsx-s150/GSX-S150_YSF_Top.jpg",
  ];

  const handleModalImage = (src) => {
    setOpenPhoto(true);
    setPhotoSelected(src);
  };

  return (
    <Public>
      <Head>
        <title>GSX-R150 | Suzuki Singapore</title>
      </Head>
      <Container sx={{ my: 6 }} maxWidth="lg">
        <Button
          component={Link}
          href="/motorcycles"
          size="large"
          startIcon={<KeyboardArrowLeft />}
        >
          Motorcycles
        </Button>
        {/* <Breadcrumbs>
          <Link href="/motorcycles">Motorcycles</Link>
          <Typography color="text.primary">GSX-R150</Typography>
        </Breadcrumbs> */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item md="8" xs={12}>
            <Box position="relative" height={50} width={"100%"} mb={4}>
              <Image
                priority
                src={Logo}
                fill
                alt={"gsx-r150"}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography sx={{ mb: 4 }}>
              Suzuki has defined sportbike performance for over 30 years. It
              started with the legendary GSX-R line, with more than a million
              sold worldwide. And the dedicated Suzuki engineers behind the
              GSX-R line take their responsibilities very seriously: Every
              Suzuki GSX-R must be very light and the best performer in its
              class, in an unbeatable package. Now, Suzuki engineers have
              applied their expertise and design philosophy to an exciting new
              street sport 150 cm3 -class motorcycle, based on the revolutionary
              GSX-R150.
            </Typography>
            <Typography>
              Meet the new king of the 150 cm3 street sport class, the Suzuki
              GSX-S150. It has the best power-to-weight ratio and acceleration
              in its class, plus nimble handling and great fuel economy. It also
              has exciting, modern, innovative bodywork, with traditional
              handlebars and a lower seat height for a comfortable ride. Along
              with a multi-function LCD instrument and vertically stacked LED
              headlights in a stylish cowl.
            </Typography>
          </Grid>
        </Grid>
        <Box position="relative" height={550} width="100%" data-aos="fade-up">
          <Image
            priority
            src={BannerImg}
            fill
            alt={"GSX-R150"}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item md={3} xs={6} textAlign="center" data-aos="fade-up">
            <Box position="relative" mb={2}>
              <Image
                priority
                width={750}
                height={584}
                src={"/images/gsx-r150/gsxr150_engine.jpeg"}
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">Science of Engine Design</Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <Box position="relative" mb={2}>
              <Image
                priority
                width={750}
                height={584}
                src={"/images/gsx-s150/detail_ph02.jpeg"}
                className="img-responsive"
                alt="Advanced Electronic Fuel Injection"
              />
            </Box>
            <Typography variant="body2">
              Advanced Electronic Fuel Injection
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              position="relative"
              mb={2}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Image
                priority
                width={750}
                height={584}
                alt="Multi-function, Full LCD Instrument Cluster"
                src={"/images/gsx-s150/detail_ph03.jpeg"}
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">
              Multi-Function, Full LCD Instrument Cluster
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box
              position="relative"
              mb={2}
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <Image
                priority
                width={750}
                height={584}
                src={"/images/gsx-s150/detail_ph04.jpeg"}
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">Shutter-key Lock System</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }}>
          <Typography variant="h3" component="h2">
            FEATURES
          </Typography>
        </Divider>
        <FeatureListCollapsible
          list={[
            {
              title: "Key Features",
              content: [
                <div>
                  The 125cm³ DOHC engine is a textbook example of how to make a
                  lot of power out of a highly efficient and compact powerplant
                  that achieves an optimal balance of sporty character and fuel
                  economy.
                </div>,
                <div>
                  The multifunction LCD instrument panel is optimized for quick
                  and easy recognition to keep you fully informed of the bike's
                  status.
                </div>,
                <div>
                  Suzuki's Easy Start System lets you start the engine with one
                  quick touch of a button.
                </div>,
                <div>
                  The shuttered key lock system enhances security and features
                  easy operation.
                </div>,
              ],
            },
            {
              title: "Engine Features",
              content: [
                <div>
                  The liquid-cooled, 4-valve, bucket-tappet DOHC engine
                  contributes to a 125cm³ class-leading power-to-weight ratio
                  and to realizing superb acceleration.
                </div>,
                <div>
                  Suzuki's GSX-R technology optimizes piston weight, achieving a
                  balance of durability and the strength to withstand high power
                  output.
                </div>,
                <div>
                  Utilizing the analysis technology of the GSX-R series, the
                  bore x stroke ratio, valve setting angle, valve diameter, and
                  compression ratio are optimized to give the GSX-S125 its high
                  performance. High power output and the engine's pick-up
                  provide an awesome feeling to acceleration.
                </div>,
                <div>
                  GSX-S125 utilizes a fuel injection system with 6 sensors for
                  optimal control under various road and weather conditions.
                  This combines with a dual-spray, 4-hole injector that improves
                  fuel intake by aiming its spray directly at the 2 intake
                  valves to deliver both excellent power output and combustion
                  efficiency.
                </div>,
                <div>
                  The GSX-S125 features a large 32mm diameter throttle body for
                  great intake efficiency at high rpm.
                </div>,
                <div>
                  A 4.3L large-capacity air cleaner box, engineered to fit in
                  the compact body, enhances optimal power output.
                </div>,
                <div>
                  The high-performance exhaust system includes a dual-exit
                  muffler housing a catalytic converter that helps limit CO2
                  emissions to 55g/km and contributes to achieving Euro 5
                  compliance.
                </div>,
                <div>
                  The Suzuki Composite Electrochemical Material (SCEM)–coated
                  cylinder not only weighs much less than an aluminum cylinder
                  fitted with a conventional cast iron sleeve, it reduces
                  friction and improves durability, heat transfer, and the
                  engine's ability to maintain consistent high-power output.
                </div>,
                <div>
                  Thin, low tension piston rings achieve excellent tracking
                  performance at high revolutions, and piston ring tension is
                  tuned to reduce friction loss.
                </div>,
              ],
            },
            {
              title: "Chasis Features",
              content: [
                <div>
                  Thanks to the know-how from GSX-R development, the compact and
                  lightweight body layout is achieved. While having both sporty
                  looks and high power output, the great controllability with
                  quick response and stability is maximized.
                </div>,
                <div>
                  Utilizing the know-how of GSX-R series, the lightest body in
                  150 cm3 backbone class is achieved. Thanks to the lightweight
                  design, nimble handling which deliver easy maneuverability
                  which is convenient in city riding are realized.
                </div>,
                <div>
                  Based on the analysis technology of torsion, longitudinal
                  direction, and lateral direction, the frame is compatible with
                  high rigidity and lightweight. The steel-tube frame is light
                  and the rigidity is intensified by adjusting the position of
                  suspension. Thanks to the sophisticated balance, GSX-S150 is
                  compatible with stability and superior maneuverability
                  inherited from GSX-R.
                </div>,
                <div>
                  The compact chassis inherited from GSX-R series achieves short
                  wheelbase and slim body. It enables agile handling and the
                  great maneuverability in traffic.
                </div>,
                <div>
                  GSX-S150’s seat height is the lowest in the 150cm3 street
                  sport class and the straddle part on the seat is slim. Those
                  factors contribute to great feet reach. Moreover, the compact
                  body achieves to raise the freedom of the riding position, and
                  make all riders to be able to take appropriate riding
                  position. The comfortable riding position realizes smooth and
                  fast riding.
                </div>,
                <div>
                  The seat shape of GSX-S150 and GSX-R150 is designed
                  separately. Customer can enjoy more comfortable riding
                  position with GSX-S150’s seat and more sporty riding position
                  with GSX-R150’s seat.
                </div>,
                <div>
                  Braking performance is the important factor for fast lap time.
                  The efficient brakes include a sporty-looking petal-design
                  290mm front disc is significantly larger than the front disc
                  mounted on competing 150 cm3 machines, for strong braking
                  performance.
                </div>,
              ],
            },
            {
              title: "Electrical Features",
              content: [
                <div>
                  To make GSX-S150 is eligible as the fastest street model, the
                  advanced electric items are installed. The convenience of
                  Suzuki easy start system, Multi-function, full LCD instrument
                  and LED headlights makes your daily motorcycle use
                  comfortable.
                </div>,
                <div>
                  GSX-S150 inherited the traditional vertically stacked LED
                  headlights of the GSX-R series. The brightness and compactness
                  of the LED lights greatly contribute to the sharp and sporty
                  looks of GSX-S150. LED is also used for the position lights
                  and license plate light. Tail light is not LED, but the way of
                  lens-cut makes the looks shiny. Moreover, the serrated and
                  compact design contributes to the sharp and sporty looks of
                  rearview.
                </div>,
                <div>
                  GSX-S150 has a full LCD instrument panel set in a modern
                  dashboard, framed by turn signal, neutral, coolant
                  temperature, malfunction indicator lamp (MIL), Hi-beam, and
                  programmable engine-RPM indicator lights. The bright LCD panel
                  includes a segmented-bar tachometer across the top; a digital
                  speedometer; a gear position indicator; a digital clock; a
                  digital odometer with dual trip meters; an average fuel
                  consumption meter; a fuel gauge; and an oil change required
                  indicator.
                </div>,
                <div>
                  The convenient easy start system automatically starts the
                  engine with one touch of a button mounted on the handlebar;
                  there is no need to hold the button down until the engine
                  fires.
                </div>,
              ],
            },
          ]}
        />

        <Divider sx={{ my: 4 }}>
          <Typography variant="h3" component="h2">
            SPECIFICATIONS
          </Typography>
        </Divider>
        <Grid container spacing={4}>
          <Grid item md="6" xs={12} data-aos="fade-up">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>DIMENSIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dimensions.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.content}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item md="6" xs={12} data-aos="fade-up">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>ENGINE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {engine.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.content}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item md="6" xs={12} data-aos="fade-up">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>CHASSIS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chassis.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.content}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }}>
          <Typography variant="h3" component="h2">
            COLORS
          </Typography>
        </Divider>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent={"center"}
          data-aos="fade-up"
        >
          <Grid item md={6} xs={12}>
            <Box>
              <Image
                priority
                src={
                  color == "blue"
                    ? "/images/gsx-s150/GSX-S150_YSF_Diagonal.jpg"
                    : "/images/gsx-r150/GSX-R150_YSF_Diagonal_yellow.png"
                }
                width={3840}
                height={2560}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <RadioGroup
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <FormControlLabel
                  value="blue"
                  control={<Radio />}
                  label="Metallic Triton Blue"
                />
                {/* <FormControlLabel
                  value="yellow"
                  control={<Radio />}
                  label="Champion Yellow / Gloss Black"
                /> */}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        {/* show 2 color bikes */}
        <Divider sx={{ my: 4 }}>
          <Typography variant="h3" component={"h2"}>
            PHOTO GALLERY
          </Typography>
        </Divider>
        <Box sx={{ my: 4 }} data-aos="fade-up">
          <Grid container spacing={2}>
            {photo.map((item, index) => (
              <Grid item key={index} md={2} xs={6}>
                <Box
                  sx={{
                    position: "relative",
                    height: "250px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => handleModalImage(item)}
                >
                  <Image
                    priority
                    src={item}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Dialog
        fullWidth
        maxWidth="lg"
        open={openPhoto}
        onClose={() => setOpenPhoto(false)}
      >
        <DialogTitle textAlign={"right"}>
          {" "}
          <IconButton onClick={() => setOpenPhoto(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <Box sx={{ position: "relative", height: "500px", width: "100%" }}>
          <Image
            priority
            src={photoSelected}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Dialog>
    </Public>
  );
}
