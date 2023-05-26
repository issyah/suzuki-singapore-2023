// v-strom

import Public from "templates/public";
import BannerImg from "@/public/images/vstrom-800de/DL800DERCM3_action_67.jpg";
import Logo from "@/public/images/vstrom-800de/logo.jpg";
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
export default function VStrom800De(props) {
  const [openPhoto, setOpenPhoto] = useState(false);
  const [photoSelected, setPhotoSelected] = useState();
  const [color, setColor] = useState("blue");
  const dimensions = [
    {
      title: "Overall length",
      content: "2,345 mm",
    },
    {
      title: "Overall width",
      content: "975 mm",
    },
    {
      title: "Overall height",
      content: "1,310 mm",
    },
    {
      title: "Wheelbase",
      content: "1,570 mm",
    },
    {
      title: "Seat height",
      content: "855 mm",
    },
    {
      title: "Ground clearance",
      content: "220 mm",
    },
    {
      title: "Curb mass",
      content: "230 kg",
    },
  ];

  const engine = [
    {
      title: "Engine type",
      content: "4-stroke, 2-cylinder, liquid-cooled, DOHC",
    },
    {
      title: "Engine displacement",
      content: "776 cm3",
    },
    {
      title: "Fuel system",
      content: "FI",
    },
    {
      title: "Transmission",
      content: "6-speed constant mesh",
    },
    {
      title: "Start system",
      content: "Electric",
    },
  ];
  const chassis = [
    {
      title: "Brakes",
      content: "Front: 	Disc, twin, Rear: Disc",
    },
    {
      title: "Suspension",
      content:
        "Front: 	Inverted telescopic, coil spring, oil damped, Rear: Link type, coil spring, oil damped",
    },
    {
      title: "Tires",
      content:
        "Front: 90/90-21M/C 54H tube type, Rear: 	150/70R17M/C 69H tube type",
    },
    {
      title: "Fuel tank capacity",
      content: "20.0 L",
    },
  ];

  const photo = [
    "/images/vstrom-800de/DL800DERCM3_YU1_diagonal.jpg",
    "/images/vstrom-800de/DL800DERCM3_YU1_front.jpg",
    "/images/vstrom-800de/DL800DERCM3_YU1_left.jpg",
    "/images/vstrom-800de/DL800DERCM3_YU1_rear.jpg",
    "/images/vstrom-800de/DL800DERCM3_YU1_right.jpg",
    "/images/vstrom-800de/DL800DERCM3_YU1_top.jpg",
    "/images/vstrom-800de/DL800DERCM3_action_67.jpg"
  ];

  const handleModalImage = (src) => {
    setOpenPhoto(true);
    setPhotoSelected(src);
  };

  return (
    <Public>
      <Head>
        <title>V-STROM-800-DE | Suzuki Singapore</title>
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
              The new V-STROM 800DE was born to bring a sense of adventure and
              riding pleasure into your every day, on every outing. Perhaps you
              wish to commute to work or run an errand in town. Perhaps you want
              to head out for the day and enjoy an exhilarating ride on the
              highway or through some winding mountain roads. Or, maybe you are
              eager to take a long trip, camp out, and explore some natural
              scenery. Whatever your purpose, the all-round capabilities of the
              V-STROM 800DE are engineered to faithfully respond to your command
              and deliver a satisfying riding experience wherever you decide to
              go.
            </Typography>
          </Grid>
        </Grid>
        <Box position="relative" mb={1}>
          <Image
            src={BannerImg}
            height={3840}
            width={2246}
            alt={"V-STROM-800DE"}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item md={3} xs={6} textAlign="center">
            <Box position="relative" height={250} mb={2}>
              <Image
                src={"/images/vstrom-800de/detail_ph01.jpeg"}
                width={750}
                height={584}
                alt="Front and rear suspension with long stroke and travel"
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">
              Front and Rear Suspension with Long Stroke and Travel
            </Typography>
          </Grid>
          <Grid item md={3} xs={6} textAlign="center">
            <Box position="relative" height={250} mb={2}>
              <Image
                src={"/images/vstrom-800de/detail_ph02.jpeg"}
                width={750}
                height={584}
                alt="21-inch Wire Spoked Front Wheel"
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">
              21-inch Wire Spoked Front Wheel
            </Typography>
          </Grid>
          <Grid item md={3} xs={6} textAlign="center">
            <Box position="relative" height={250} mb={2}>
              <Image
                src={"/images/vstrom-800de/detail_ph03.jpeg"}
                width={750}
                height={584}
                alt="20L Fuel Tank"
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">20L Fuel Tank</Typography>
          </Grid>
          <Grid item md={3} xs={6} textAlign="center">
            <Box position="relative" height={250} mb={2}>
              <Image
                src={"/images/vstrom-800de/detail_ph04.jpeg"}
                width={750}
                height={584}
                alt="Rear ABS off Mode & G (Gravel) Mode"
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">
              Rear ABS off Mode & G (Gravel) Mode
            </Typography>
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
                  Slim, compact and powerful, the Suzuki’s new 776cm3 parallel
                  twin DOHC engine delivers a fi ne balance of smooth,
                  controllable power from low rpm and pleasant free-revving
                  performance across the high end.
                </div>,
                <div>
                  The engine’s 270-degree crankshaft layout delivers a pleasant
                  feeling and note reminiscent of Suzuki’s V-twin engines, while
                  Suzuki Cross Balancer contributes to smooth operation and a
                  compact, lightweight engine design.
                </div>,
                <div>
                  Longer front suspension stroke (220mm) and longer rear
                  suspension travel (220mm), together with 21-inch wirespoked
                  rims, realize higher ground clearance (220mm) and provide
                  enhanced rideability on unpaved surfaces.
                </div>,
                <div>
                  With a capacity of 20L, the fuel tank extends your riding
                  range to provide greater reassurance when touring for long
                  distances.
                </div>,
                <div>
                  Adopts the Suzuki Intelligent Ride System (S.I.R.S.) with
                  Suzuki Drive Mode Selector (SDMS), the Bi-directional Quick
                  Shift System, Ride-by-Wire Electronic Throttle System, and
                  Suzuki Traction Control System with G (Gravel) mode and Rear
                  ABS Cancel mode settings suited for riding on unpaved
                  surfaces.
                </div>,
                <div>
                  A custom 5-inch color TFT LCD multifunction instrument panel
                  features a clearly legible display with a rich variety of
                  information
                </div>,
                <div>
                  While staying true to its V-STROM heritage and the Suzuki
                  design ethos of creating unique styling expressions, the
                  V-STROM 800DE offers the appeal of a thoroughly modern new
                  look.
                </div>,
              ],
            },
            {
              title: "Engine Features",
              content: [
                <div>
                  Suzuki’s new parallel twin 776cm3 DOHC, 4-valve-percylinder
                  engine combines smooth, controllable power from low rpm with
                  the pleasant feeling of free-revving performance through to
                  the high end. It is torquey and powerful, but also easy to
                  control, with smooth throttle response and an inviting nature
                  that provides a satisfying riding experience, whether enjoying
                  a solo run or carrying a passenger.
                </div>,
                <div>
                  It is a slim powerplant with compact front-rear dimensions
                  that help achieve the most eff ective chassis geometry for
                  performance gains.
                </div>,
                <div>
                  Its 270-degree crankshaft design delivers a smooth ride,
                  plenty of torque, positive traction, and a pleasing rumble and
                  engine note similar to that of a V-twin engine.
                </div>,
                <div>
                  It also introduces the Suzuki Cross Balancer. The fi rst
                  biaxial primary balancer on a production motorcycle to
                  position its two balancers at 90° to the crankshaft*, this
                  patented** mechanism suppresses vibration to contribute to
                  smooth operation, while its design also helps realize a
                  lighter powerplant that is more compact from front to rear.
                </div>,
                <div>
                  Cooling system inlet control helps maintain consistent engine
                  temperature and eliminate rough idle while warming the engine
                  in cold weather.
                </div>,
                <div>
                  The Suzuki Clutch Assist System (SCAS) helps reduce fatigue on
                  long rides and contributes to smoother shifting.
                </div>,
                <div>
                  The 2-into-1 exhaust system features a dual-stage catalytic
                  converter inside the collector that helps satisfy Euro 5
                  emissions standards, as well as a long, upswept muffl er
                  design.
                </div>,
              ],
            },
            {
              title: "Suzuki Intelligence Ride System (S.I.R.S) Features",
              content: [
                <div>
                  The advanced electronic systems of the Suzuki Intelligent Ride
                  System (S.I.R.S.) featured on the V-STROM 800DE assist and
                  help you optimize performance characteristics to match your
                  changing riding needs and preferences. By making the V-STROM
                  800DE feel more controllable, predictable, and less tiring to
                  operate, these systems help you ride with greater peace of
                  mind.
                </div>,
                <div>
                  Suzuki Drive Mode Selector (SDMS) lets you freely choose among
                  three diff erent power output characteristic modes to best
                  match varying riding conditions or your preferences. While all
                  three ultimately deliver maximum engine output, fi ner control
                  over response and torque characteristics as you open the
                  throttle to accelerate empowers you to ride with greater confi
                  dence and pleasure.
                </div>,
                <div>
                  Mode A (Active) Delivers the sharpest throttle response as you
                  open the throttle. Torque characteristics are fi nely tuned to
                  deliver exciting acceleration as the throttle is opened.
                </div>,
                <div>
                  Mode B (Basic) Features softer throttle response and a more
                  linear power delivery curve as you open the throttle. Settings
                  are tuned to help make the bike more controllable and a good
                  fi t for everyday riding.
                </div>,
                <div>
                  Mode C (Comfort) Off ers yet softer throttle response and more
                  gentle torque characteristics. This mode is useful when riding
                  on wet or slippery surfaces.
                </div>,
                <div>
                  Designed to help prevent the rear wheel from slipping, the
                  Suzuki Traction Control System (STCS)* reduces stress and
                  fatigue while instilling greater confidence in controlling
                  your ride. You can select from a total of four modes,
                  including G (Gravel) mode, to control how quickly the system
                  takes eff ect and how proactive it is in limiting wheel spin,
                  or you can opt to run with it turned off .
                </div>,
                <div>
                  In addition to the three on-road traction control modes (+
                  OFF), the V-STROM 800DE features G (Gravel) mode**, a setting
                  that retards ignition timing and allows a limited amount of
                  tire slip when riding on unpaved surfaces. As a result, the
                  bike remains controllable and you still get the consistent
                  power output you want to explore unpaved roads and country
                  trails with greater confi dence.
                </div>,
                <div>
                  The two-mode Antilock Brake System (ABS)*** contributes to
                  more stable braking by helping prevent the wheels from locking
                  up, even under hard braking. Mode 1 provides minimal
                  intervention, so is well suited to riding on gravel roads.
                  Mode 2 is ideal for city riding and regular road conditions.
                </div>,
              ],
            },
            {
              title: "Chassis Features",
              content: [
                <div>
                  Every aspect of the chassis is designed to promote great
                  handling and control in a wide range of real-world riding
                  conditions, and to place priority on comfort and minimizing
                  fatigue on long rides, even when carrying a passenger and
                  loaded with gear.
                </div>,
                <div>
                  The highly rigid new steel frame for the V-STROM 800DE was
                  engineered to provide all the strength needed for negotiating
                  rougher trails, to provide excellent straight-line stability,
                  to contribute to nimble handling, and to perform well at
                  highway speeds when touring for long distances.
                </div>,
                <div>
                  The seat rails are engineered to withstand the rigors of
                  riding on unpaved surfaces and feature a narrow profile that
                  helps you better control the bike with your legs.
                </div>,
                <div>
                  The dedicated chassis geometry features a long wheelbase, long
                  rake, tall ground clearance and a wide handlebar grip. It is
                  engineered to provide maximum stability and controllability
                  when riding on unpaved surfaces, and to offer a riding
                  position that effectively distributes weight to the front and
                  rear. This enables you to more easily shift your weight and
                  control the bike when traversing trails and other unpaved
                  surfaces, or when negotiating tight corners at speed. It also
                  enhances handling stability when carrying a passenger and with
                  the top and side cases mounted on your V-STROM 800DE.
                </div>,
                <div>
                  To provide sure stopping power and controllable braking
                  performance, Suzuki chose front brake calipers that best match
                  for the V-STROM 800DE’s fork pitch and wire-spoked tires mated
                  with 310mm outer diameter dual discs. The rear brake has a
                  260mm outer diameter disc and uses a single-piston pin-slide
                  caliper
                </div>,
                <div>
                  Hitachi Astemo (SHOWA) inverted front forks deliver a smooth,
                  controllable ride and feature stable damping characteristics
                  that make them suitable for adventure touring. Spring preload
                  and compression/ rebound damping can be adjusted to best match
                  your preference or the usage conditions
                </div>,
                <div>
                  The Hitachi Astemo (SHOWA) mono-shock rear suspension with a
                  piggyback remote gas reservoir contributes to agility and
                  stability. Spring preload can be adjusted by simply turning
                  the dial by hand, which is particularly beneficial when
                  preparing to ride tandem or carry a load.
                </div>,
                <div>
                  The custom-tuned spring rate, valve, and piston settings for
                  both the front and rear suspension maximize performance and
                  comfort when riding on all surfaces, paved or gravel. The
                  suspension’s long 220mm front fork stroke and 220mm of rear
                  wheel travel realizes the longest amount of travel ever
                  available on a member of the V-STROM family, and contributes
                  to realizing the tallest ground clearance (220mm) of any
                  V-STROM model to date.
                </div>,
                <div>
                  The V-STROM 800DE rides on wire-spoked wheels and adopts a
                  21-inch aluminum front rim for greater stability and better
                  control when tearing up gravel roads.
                </div>,
                <div>
                  Dunlop TRAILMAX MIXTOUR adventure tires featuring a new
                  semi-block pattern and customengineered internal structure
                  provide solid traction on unpaved surfaces while reducing
                  pattern noise on paved roads. Wider, deeper grooves achieve
                  the optimal balance between on-road handling and longevity,
                  and positive grip and nimble handling when exploring gravel
                  roads and trails.
                </div>,
                <div>
                  The V-STROM 800DE adopts a tough-looking, lightweight aluminum
                  swingarm with a unique shape that enhances vertical, lateral,
                  and torsional rigidity to support straight-line stability in
                  keeping with the model’s chassis geometry and long suspension
                  travel.
                </div>,
                <div>
                  from a strong yet flexible aluminum absorb shock when riding
                  on unpaved surfaces. Not only does this provide greater
                  comfort, but the wide grip and positioning also provide
                  positive control, particularly when standing on the pegs to
                  run through rough surfaces.
                </div>,
                <div>
                  The solid-mount seat is designed for comfort on long touring
                  runs and to stand up well to input when exploring unpaved
                  roads and trails. At the same time, it allows you freedom of
                  movement and affords your passenger plenty of space, even when
                  the optional top and side cases are mounted.
                </div>,
                <div>
                  Wide rubber-covered steel footpegs offer greater stability
                  when standing on them and feature a textured surface that
                  prevents your boots from slipping
                </div>,
                <div>
                  Solid grab bars on each side provide your passenger with a
                  firm grip and add an attractive, tough-looking design accent.
                  These extend from the integrated rear carrier*, which is handy
                  for carrying extra gear or mounting one of the top cases
                  available as genuine accessories.
                </div>,
                <div>
                  The small windscreen with 3-step height adjustment is designed
                  to maximize visibility when adventuring down country trails
                  and on gravel roads.
                </div>,
                <div>
                  The V-STROM 800DE adopts a unique three-piece front fender
                  construction, which employs a pair of vertical skirt sections
                  flanking the front fender. This structure forms a stronger,
                  more rigid mount to the forks that is better capable of
                  withstanding a pounding on gravel roads and other unpaved
                  surfaces.
                </div>,
                <div>
                  Knuckle covers help protect your hands from the elements,
                  including rain, wind and cold, as well as objects such as
                  flying stones.
                </div>,
                <div>
                  The V-STROM 800DE is fitted with a radiator guard designed to
                  protect against flying stones and other objects when riding on
                  trails.
                </div>,
                <div>
                  A plastic under cover protects the engine and complements the
                  model’s tough image.
                </div>,
              ],
            },
            {
              title: "Electrical Features",
              content: [
                <div>
                  The vertically stacked pair of distinctive hexagonal LED
                  headlights provide a clear view of the road ahead. The
                  vertical orientation of the thin, compact headlight assembly
                  topped by an LED position light creates a sharp look with
                  unique character that makes the front end look light and ready
                  for action.
                </div>,
                <div>
                  LED turn signals and an LED tail light ensure clear visibility
                  and practical durability.
                </div>,
                <div>
                  The custom 5-inch color TFT LCD multifunction instrument panel
                  features clearly legible displays that keep you fully aware of
                  all the bike’s systems and settings in real time, and now adds
                  a function that lets you display large pop-up alerts and
                  warnings. Manual or automatic switching between day and night
                  display modes lets you maximize visibility at any hour and in
                  any riding situation.
                </div>,
                <div>
                  A USB port* is built into the left side of the meter cluster.
                  It can provide up to 5V output and 2A maximum current.
                </div>,
                <div>
                  The ergonomic handlebar switch layout maximizes operating ease
                  and efficiency so you can intuitively access all controls
                  while focusing on the road ahead. Select modes and make
                  settings and adjustments for each S.I.R.S. control system by
                  simply operating the MODE and UP/DOWN switches on the left
                  handlebar.
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
                    ? "/images/vstrom-800de/DL800DERCM3_YU1_diagonal.jpg"
                    : color == "blue2"
                    ? "/images/gsx-s1000gt/GSX-S1000GT_M3_QT8_Diagonal.jpeg"
                    : "/images/gsx-s1000gt/GSX-S1000GT_M3_YVB_Diagonal.jpeg"
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
                  value="blue2"
                  control={<Radio />}
                  label="Metallic Reflective Blue"
                />
                <FormControlLabel
                  value="black"
                  control={<Radio />}
                  label="Gloss Sparkle Black"
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
        maxWidth="full"
        open={openPhoto}
        onClose={() => setOpenPhoto(false)}
      >
        <DialogTitle textAlign={"right"}>
          {" "}
          <IconButton onClick={() => setOpenPhoto(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <Box sx={{ position: "relative", height: "800px", width: "100%", mb:4 }}>
          <Image src={photoSelected} fill style={{ objectFit: "contain" }} />
        </Box>
      </Dialog>
    </Public>
  );
}
