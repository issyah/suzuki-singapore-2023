// gsx-r150

import Public from "templates/public";
import BannerImg from "@/public/images/gsx-r150/GSX-R150_YSF_Diagonal.jpeg";
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
      content: "2,020mm",
    },
    {
      title: "Overall width",
      content: "700mm",
    },
    {
      title: "Overall height",
      content: "1,075mm",
    },
    {
      title: "Wheelbase",
      content: "1,300mm",
    },
    {
      title: "Seat height",
      content: "785mm",
    },
    {
      title: "Ground clearance",
      content: "160mm",
    },
    {
      title: "Curb mass",
      content: "131kg",
    },
  ];

  const engine = [
    {
      title: "Engine type",
      content: "Water-cooled, 4 stroke",
    },
    {
      title: "Valve system",
      content: "DOHC 4-valve",
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
    "/images/gsx-r150/GSX-R150_YSF_Diagonal.jpg",
    "/images/gsx-r150/GSX-R150_YSF_Front.jpg",
    "/images/gsx-r150/GSX-R150_YSF_Left.jpg",
    "/images/gsx-r150/GSX-R150_YSF_Rear.jpg",
    "/images/gsx-r150/GSX-R150_YSF_Right.jpg",
    "/images/gsx-r150/GSX-R150_YSF_Top.jpg",
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
                src={Logo}
                fill
                alt={"gsx-r150"}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography sx={{ mb: 4 }}>
              The Suzuki GSX-R has defined sportbike performance for over 30
              years, with more than a million sold worldwide. So the dedicated
              Suzuki engineers who have devoted their lives to the GSX-R take
              their responsibilities very seriously: Every GSX-R must be very
              light and the best performer in its class, in an unbeatable
              package
            </Typography>
            <Typography>
              Meet the revolutionary Suzuki GSX-R150, with the best
              power-to-weight ratio and acceleration in its class, plus nimble
              handling and great fuel economy in the 150 cm3 class. It is
              specifically designed for Indonesia and proudly built at Suzuki’s
              assembly plant in Tambun.
            </Typography>
          </Grid>
        </Grid>
        <Box position="relative" height={550} width="100%">
          <Image
            src={BannerImg}
            fill
            alt={"GSX-R150"}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item md={3} xs={6} textAlign="center">
            <Box position="relative" height={250} mb={2}>
              <Image
                src={"/images/gsx-r150/gsxr150_engine.jpeg"}
                fill
                className="object-contain"
              />
            </Box>
            <Typography variant="body2">Science of Engine Design</Typography>
          </Grid>
          <Grid item md={3} xs={6} textAlign="center">
            <Box position="relative" height={250} mb={2}>
              <Image
                src={"/images/gsx-r150/gsxr150_headlight.jpeg"}
                fill
                className="object-contain"
              />
            </Box>
            <Typography variant="body2">
              Vertical Stacked LED Headlights
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box position="relative" height={250} mb={2}>
              <Image
                src={"/images/gsx-r150/gsxr150_exhaust.jpeg"}
                fill
                className="object-contain"
              />
            </Box>
            <Typography variant="body2">Dual-exit Exhaust Muffler</Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Box position="relative" height={250} mb={2}>
              <Image
                src={"/images/keyless_ignition.jpeg"}
                fill
                className="object-contain"
              />
            </Box>
            <Typography variant="body2">Key-Less Ignition System</Typography>
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
                "With aerodynamic bodywork. A lower seat height. A multi-function LCD instrument. Vertically stacked LED headlights. And a key-less* 1 , one-touch electric starting system.",
                "It is a dependable, comfortable motorcycle designed to handle city traffic jams while commuting to work or school during the week. And it is also an exciting motorcycle ready for fun rides into the countryside—or even a track day—on weekends",
                "The GSX-R150 is a prestige motorcycle that’s easy to ride and easy to be proud of. It has high-quality fit and finish, beautiful paint and graphics, and the look of a MotoGP racebike.",
              ],
            },
            {
              title: "Engine Features",
              content: [
                "The liquid-cooled, four-valve, bucket-tappet double-overhead-camshaft (DOHC) engine contributes to class-leading power-to-ratio in 150 cm3 sport bike class. This achieves superb acceleration and the maximum speed and improves the pleasure of the best speed feel.",
                "Utilizing the analysis technology of GSX-R series, the bore×stroke ratio, valve setting angle, valve diameter, and compression ratio are optimized to be eligible for the name of “GSX-R”. It gives GSX-R150 high performance. In addition to high power output, the engine pick-up realizes the pleasure of awesome acceleration feeling.",
                "Advanced fuel electronic injection system and fuel efficiency GSX-R150 utilizes a fuel injection system works with *16 sensors. It realizes optimal control under various road or weather conditions, achieving both power output and fuel efficiency. The injector has 10 holes to inject directly to 2 intake ports and it improves fuel intake efficiency.",
              ],
            },
            {
              title: "Chasis Features",
              content: [
                "Thanks to the know-how from GSX-R development, the compact and lightweight body layout is achieved. While having both sporty looks and high power output, the great controllability with agile response and stability is maximized.",
                "Utilizing the know-how of GSX-R series, the lightest body in 150cm3 backbone class is achieved. Thanks to the lightweight design, nimble handling which deliver fun of sport riding and easy maneuverability which is convenient in city riding are realized.",
                "Based on the analysis technology of torsion, longitudinal direction, and lateral direction, the frame is compatible with high rigidity and lightweight. The steel-tube frame is light and the rigidity is intensified by adjusting the position of suspension. Thanks to the sophisticated balance, GSX-R150 is compatible with stability and superior maneuverability inherited from GSX-R.",
              ],
            },
            {
              title: "Electrical Features",
              content: [
                "To make GSX-R150 is eligible as the fastest sport model, the advanced electric items are installed. The convenience of 150cm3 class-new key-less system*1, Suzuki easy start system, Multi-function, full LCD instrument and LED headlights makes your daily motorcycle use comfortable.",
                "The GSX-R150 features a convenient key-less ignition system, and the rider can start the engine as long as the compact key is close enough to the motorcycle. Which means the rider does not have to fumble to retrieve the compact key from a pocket or backpack.",
                "GSX-R150 inherited the traditional vertically stacked LED headlights of the GSX-R series. The brightness and compactness of the LED lights greatly contribute to the sharp and sporty looks of GSX-R150. LED is also used for the position lights and license plate light. Tail light is not LED, but the way of lens-cut makes the looks shiny. Moreover, its compact design contributes to the sharp and sporty looks of rearview.",
                "GSX-R150 has a full LCD instrument panel set in a modern dashboard, framed by turn signal, neutral, coolant temperature, malfunction indicator lamp (MIL),Hi-beam, and programmable engine-RPM indicator lights. The bright LCD panel includes a segmented-bar tachometer across the to a digital speedometer; a gear position indicator; a digital clock; a digital odometer with dual trip meters; an average fuel consumption meter; a fuel gauge; and an oil change timing indicator.",
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
          <Grid item md="6" xs={12}>
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
          <Grid item md="6" xs={12}>
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
          <Grid item md="6" xs={12}>
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
        >
          <Grid item md={6} xs={12}>
            <Box>
              <Image
                src={
                  color == "blue"
                    ? "/images/gsx-r150/GSX-R150_YSF_Diagonal.jpeg"
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
                <FormControlLabel
                  value="yellow"
                  control={<Radio />}
                  label="Champion Yellow / Gloss Black"
                />
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
        <Box sx={{ my: 4 }}>
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
                  <Image src={item} fill style={{ objectFit: "cover" }} />
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
        <DialogTitle textAlign={'right'}>
          {" "}
          <IconButton onClick={() => setOpenPhoto(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <Box sx={{ position: "relative", height: "500px", width: "100%" }}>
          <Image src={photoSelected} fill style={{ objectFit: "contain" }} />
        </Box>
      </Dialog>
    </Public>
  );
}
