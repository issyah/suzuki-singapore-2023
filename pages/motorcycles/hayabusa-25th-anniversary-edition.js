// HAYABUSA 25TH ANNIVERSARY EDITION

import Public from "templates/public";
import BannerImg from "@/public/images/hayabusa-25th/GSX1300RRQM4_action_3.jpeg";
import Logo from "@/public/images/hayabusa-25th/logo.jpg";
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
  DialogTitle,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import Link from "@/src/Link";
import Head from "next/head";
import Collapsible from "@/src/Collapsible";
import FeatureListCollapsible from "@/src/FeatureListCollapsible";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useState } from "react";
import { Close } from "@mui/icons-material";
export default function Page(props) {
  const [openPhoto, setOpenPhoto] = useState(false);
  const [photoSelected, setPhotoSelected] = useState();
  const [color, setColor] = useState("black");
  const dimensions = [
    {
      title: "Overall length",
      content: "2,180mm",
    },
    {
      title: "Overall width",
      content: "735mm",
    },
    {
      title: "Overall height",
      content: "1,165mm",
    },
    {
      title: "Wheelbase",
      content: "1,480mm",
    },
    {
      title: "Seat height",
      content: "800mm",
    },
    {
      title: "Ground clearance",
      content: "125mm",
    },
    {
      title: "Curb mass",
      content: "264kg",
    },
  ];

  const engine = [
    {
      title: "Engine type",
      content: "Four-stroke, liquid-cooled, DOHC, in-line four",
    },
    {
      title: "Valve system",
      content: "DOHC 4-valve",
    },
    {
      title: "Engine displacement",
      content: "1,340cm3",
    },
    {
      title: "Fuel system",
      content: "FI",
    },
    {
      title: "Transmission",
      content: "6-speed, constant mesh",
    },
    {
      title: "Start system",
      content: "Electric",
    },
  ];
  const chassis = [
    {
      title: "Brakes",
      content:
        "Front: Brembo Stylema, 4-piston, twin disc, ABS-equipped, Rear: Nissin, 1-piston, single disc",
    },
    {
      title: "Suspension",
      content:
        "Front: Inverted Telescopic, Rear: Link type, coil spring, oil damped",
    },
    {
      title: "Fuel tank capacity",
      content: "20.0 L",
    },
  ];

  const photo = [
    "/images/hayabusa-25th/GSX1300RRQM4_side_cowl.jpeg",
    "/images/hayabusa-25th/GSX1300RRQM4_B9E_diagonal.jpeg",
    "/images/hayabusa-25th/GSX1300RRQM4_B9E_front.jpeg",
    "/images/hayabusa-25th/GSX1300RRQM4_B9E_left.jpeg",
    "/images/hayabusa-25th/GSX1300RRQM4_B9E_rear.jpeg",
    "/images/hayabusa-25th/GSX1300RRQM4_B9E_top.jpeg",
    "/images/hayabusa-25th/GSX1300RRQM4_action_3.jpeg",
    "/images/hayabusa-25th/GSX1300RRQM4_action_13.jpeg",
  ];

  const detailFeatures = [
    {
      label: "25th anniversary glass enamel emblem on the fuel tank",
      src: "detail_ph01.jpeg",
    },
    {
      label: "Black molding on the cowl",
      src: "detail_ph02.jpeg",
    },
    {
      label: "Special V-shaped decal",
      src: "detail_ph03.jpeg",
    },
    {
      label:
        "Single seat cowling as standard equipment (except for Japanese specs)",
      src: "detail_ph04.jpeg",
    },
    {
      label: "Suzuki thick logo decal on the fuel tank",
      src: "detail_ph05.jpeg",
    },
    {
      label: "Hayabusa Kanji logo on the drive chain",
      src: "detail_ph06.jpeg",
    },
    {
      label: "Gold anodized brake inner roter",
      src: "detail_ph07.jpeg",
    },
    {
      label: "25th anniversary logo on the muffler",
      src: "detail_ph08.jpeg",
    },
    {
      label: "Special V-shaped decal",
      src: "detail_ph09.jpeg",
    },
    {
      label: "Gold anodized chain adjuster",
      src: "detail_ph10.jpeg",
    },
  ];

  const handleModalImage = (src) => {
    setOpenPhoto(true);
    setPhotoSelected(src);
  };

  return (
    <Public>
      <Head>
        <title>Hayabusa 2th Anniversary Edition | Suzuki Singapore</title>
      </Head>
      <Box position="relative" mb={1} data-aos="fade-up" mt={-2}>
        <Image
          src={BannerImg}
          height={3840}
          width={2246}
          alt={"Hayabusa"}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      </Box>
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
            <Box position="relative" height={200} width={"100%"} mb={4}>
              <Image
                src={Logo}
                fill
                alt={"gsx-r150"}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography sx={{ mb: 4 }}>
              Famed for its abundant power, agility and majestic presence.
              Legendary for establishing levels of ultimate sport performance
              and retaining its position atop the class it created for over two
              decades. The latest generation provides even smoother power
              delivery, nimbler handling, and a collection of electronic assist
              systems that make the Hayabusa more controllable, predictable and
              reliable. And all this wrapped in a package with breathtaking
              style and grace.
            </Typography>
            <Typography>
              The motorcycling world has changed in those years, while the
              Hayabusa remains firmly on its perch as motorcycling’s Ultimate
              Sportbike. The 25th Anniversary Model of Suzuki’s flagship
              sportbike continues to be propelled by a muscular, refined inline
              four-cylinder engine housed in a proven, yet modernized chassis
              with incomparable manners, managed by an unequaled suite of
              electronic rider aids within stunning aerodynamic bodywork that is
              distinctly Hayabusa.
            </Typography>
            <Box mb={4}>
              <Image
                src={"/images/hayabusa-25th/GSX1300RRQM4_B9E_right.jpeg"}
                height={3840}
                width={2246}
                alt={"Hayabusa"}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {detailFeatures.map((item, index) => (
            <Grid item md={3} xs={6} textAlign="center" data-aos="fade-up">
              <Box position="relative" mb={2}>
                <Image
                  src={`/images/hayabusa-25th/${item.src}`}
                  width={750}
                  height={584}
                  alt="Suzuki intelligence"
                  className="img-responsive"
                />
              </Box>
              <Typography variant="body2">{item.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          my: 4,
          position: "relative",
          height: {
            xs: "250px",
            md: "800px",
          },
          width: "100%",
          img: {
            objectFit: "cover",
          },
        }}
      >
        <Image src={"/images/hayabusa-25th/GSX1300RRQM4_action_13.jpeg"} fill />
      </Box>
      <Container maxWidth="lg">
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
                "The Hayabusa employs an advanced version of the Suzuki Intelligent Ride System (S.I.R.S.); a comprehensive collection of electronic rider aids, such as the Cruise Control and Bi-directional Quick Shift systems. Only the Hayabusa off ers this premium suite of aids that simultaneously boosts performance and comfort.",
                "The latest iteration of the Hayabusa’s legendary 1340cm³,four-cylinder, DOHC engine is fed by Ride-by-Wire electronic throttle bodies with dual fuel injectors feeding each cylinder, mixing with pressurized air from the Suzuki Ram Air Direct (SRAD) intakes in the nose of the aerodynamic fairing.",
                "Optimized aerodynamics and wind protection provide comfort while improved braking performance inspires rider confidence.",
                "The Hayabusa is instantly recognizable for its wind-cutting body and styling cues inspired by the peregrine falcon – the world’s fastest animal. To bring a sophisticated appearance to the iconic Hayabusa, Suzuki’s design team incorporated distinct lines and shapes to achieve an expression of refi nement and ultimate performance.",
                "The Hayabusa’s familiar instrument cluster skillfully blends large analog gauges flanking a multifunction TFT LCD display to offer outstanding functionality and premium styling in a familiar layout you are sure to love",
              ],
            },
            {
              title: "Engine Features",
              content: [
                "The powerful 1,340cm³ liquidcooled, inline-four-cylinder, DOHC engine has been fully revised to supply a seamless surge of torque for effortless acceleration.",
                "Using techniques developed for the supersport GSX-R1000, the redesigned crankcase features lubrication passages that provide 54% more oil flow to the crankshaft for increased durability.",
                "U-shaped cutouts in cylinder’s bores, Suzuki Composite Electrochemical Material (SCEM), and Physical Vapor Deposition (PVD), are all engineered for reducing friction and improving strength and durability.",
                "The lightweight design of the crankshaft, connecting rods and pistons reduces internal vibration, which in turn contributes to greater engine durability.",
                "Changes to the design of the Twin Swirl Combustion Chamber (TSCC) promote faster and more effi cient burning of the fuel-air mixture.",
              ],
            },
            {
              title: "Chasis Features",
              content: [
                <Typography>
                  The Hayabusa’s twin-spar aluminum frame and swingarm
                  incorporate aluminum castings along with extruded aluminum
                  sections that provide the right amount of suppleness and
                  strength to its overall rigid alloy frame structure.
                </Typography>,
                <Typography>
                  The lightweight, redesigned sub-frame is made of longer
                  rectangular steel tubing for ample weight-carrying capacity
                </Typography>,
                <Typography>
                  Fully -adjustable KYB inverted forks, featuring a revised
                  internal structure that improves shock absorption, provide a
                  smoother ride with optimum grip.
                </Typography>,
                <Typography>
                  The forks’ 43mm inner tubes feature Diamond-Like Carbon (DLC)
                  coating to reduce friction and improve reaction to small road
                  surface irregularities.
                </Typography>,
                <Typography>
                  The rear shock absorber has threaded spring preload adjustment
                  collars plus rebound and compression damping force adjusters.
                </Typography>,
                <Typography>
                  A steering damper attached to the frame and the lower fork
                  bracket suppresses unwanted vibration and steering forces to
                  provide a light steering feel at lower speeds.
                </Typography>,
                <Typography>
                  The 7-spoke cast aluminum alloy wheels help improve grip and
                  feel.
                </Typography>,
                <Typography>
                  Bridgestone’s BATTLAX HYPERSPORT S22 tires use a compound and
                  construction that help improve grip on dry roads and
                  performance in wet conditions, and provide greater all-round
                  agility, as well as excellent straight-line stability and
                  braking grip to deliver a more exciting and
                  confidence-inspiring ride.
                </Typography>,
                <Typography>
                  Innovative Brembo Stylema 4-piston front brake calipers
                  feature a light, compact and carefully sculpted design that is
                  intended for use on highperformance motorcycles. They increase
                  air flow around the brake pads to cool more quickly and
                  deliver immediate response.
                </Typography>,
                <Typography>
                  The Stylema front brake calipers grasp a pair of 320mm
                  stainlesssteel full-floating discs with a hole pattern that
                  further helps optimize cooling efficiency.
                </Typography>,
                <Typography>
                  The handlebars are mounted 12mm closer to the rider. This
                  vastly improves comfort and reduces fatigue when touring,
                  while also enhancing control.
                </Typography>,
              ],
            },
            {
              title: "Body & Styling Features",
              content: [
                <div>
                  The styling of the bodywork vividly conveys a modern image of
                  advanced performance and features, the wind-cutting silhouette
                  and overall quality look
                </div>,
                <div>
                  These lines trace from the front fairing and fuel tank through
                  to the tail section, projecting the aura of high quality and
                  luxury, yet with an aggressive performance stance.
                </div>,
                <div>
                  Adding cleanliness and flair to the bold tail design is a
                  sharp, wide LED rear combination light that incorporates
                  running, brake and turn signal functions.
                </div>,
                <div>
                  Extensive wind tunnel testing to ensure the bodywork offers
                  superb wind protection, both for normal and completely
                  tucked-in seating positions, helps achieve the necessary top
                  speed potential and stability by realizing one of the best
                  drag coe fficients found on any street legal motorcycles.
                </div>,
                <div>
                  The vertically stacked headlight is a bold styling feature
                  contributes to performance as its location between the large
                  Suzuki Ram Air Direct (SRAD) intake ducts provides high
                  pressure air at speed that boosts engine power.
                </div>,
                <div>
                  Complementing the slippery styling is an aerodynamic
                  windscreen that is shaped to reduce wind blast while
                  permitting a good view of the instrument cluster.
                </div>,
                <div>
                  The black plastic accent pieces that extend from the sides of
                  the upper cowl near the handlebars deflect air away from your
                  elbows and knuckles.
                </div>,
                <div>
                  The streamlined mirrors are positioned low and wide to provide
                  you with a clear rear view.
                </div>,
                <div>
                  Small, tasteful versions of the Hayabusa’s Japanese logo are
                  incorporated on the ignition key fob and within the LED
                  headlight housing.
                </div>,
              ],
            },
            {
              title: "Electrical Features",
              content: [
                <div>
                  Riders adore the outstanding functionality and familiar layout
                  of the Hayabusa’s instantly recognizable instrument cluster
                </div>,
                <div>
                  An update to the large analog tachometer and speedometer give
                  them a fresher, more attractive appearance with larger and
                  bolder numbering that improves readability
                </div>,
                <div>
                  An exceptional feature of the instrument cluster is the TFT
                  LCD panel centrally mounted between the speedometer and
                  tachometer, which displays a variety of information such as
                  the current SDMS-α systems settings, an Active Data display
                  that shows lean angle (with a peak-hold function), front and
                  rear brake pressure, rate of vehicle acceleration or
                  deceleration, and the current accelerator position, as well as
                  the time, gear position, odometer, dual trip meter, ambient
                  air temperature, instantaneous fuel consumption, riding range,
                  trip time, average fuel consumption, and battery voltage
                  displays.
                </div>,
                <div>
                  Key to the operation of S.I.R.S. and other electrical features
                  is a Computer Area Network (CAN) style wire harness that
                  functions as an interconnected information network rather than
                  using a more complex and slower conventional wiring harness.
                </div>,
                <div>
                  The 400W charging system uses a durable, oil-cooled
                  three-phase stator. A high-capacity, maintenance-free style
                  battery and fuses under the rider’s seat are easily
                  accessible.
                </div>,
                <div>
                  Another component supporting S.I.R.S. and other Hayabusa
                  technology is the Inertial Measurement Unit (IMU) supplied by
                  Bosch.
                </div>,
                <div>
                  The IMU measures six directions of movement along three axes,
                  detecting pitch, roll, and yaw movement based on the
                  motorcycle’s position, movement, and acceleration.
                </div>,
                <div>
                  The Hayabusa is equipped with the latest compact Antilock
                  Brake System (ABS) unit from Bosch. Working in conjunction
                  with the IMU, the ABS-unit realizes features such as the
                  Motion Track Brake System, Slope Dependent Control System and
                  Hill Hold Control System.
                </div>,
                <div>
                  Highly functional and attractive lighting befits the
                  Hayabusa’s premium sportbike status.
                </div>,
                <div>
                  The two upper and two lower LEDs for the low-beam are mounted
                  in the corners where they shine across a reflector panel and
                  fill the light assembly with attractive illumination.
                </div>,
                <div>
                  Hayabusa’s front turn signals are incorporated in the position
                  lights, a first for a Suzuki motorcycle.
                </div>,
                <div>
                  An illumination scheme using white lighting for the position
                  light with the turn signals flashing in orange when signaling
                  creates a unique overall effect that heightens the sense of a
                  luxurious riding experience.
                </div>,
                <div>
                  The bold LED taillight and rear turn signal design creates a
                  single wide, sharp accent running horizontally across the
                  bottom of the Hayabusa’s tail section.
                </div>,
              ],
            },
            {
              title: "Suzuki Intelligent Ride System (S.I.R.S) Features",
              content: [
                <div>
                  <Typography fontWeight="bold">
                    Control over engine output characteristics
                  </Typography>
                </div>,
                <div>
                  The Suzuki Drive Mode Selector Alpha (SDMS-α) system provides
                  you with a choice of three factory preset (A, B & C) and three
                  rider-defined mode settings for the Power Mode Selector,
                  Motion Track Traction Control, Anti-lift Control, Engine Brake
                  Control and Bi-directional Quick Shift systems.
                </div>,
                <div>
                  Factory preset mode A is for active, sporty use, mode B is for
                  general, all-around riding, and mode C is for comfort and
                  touring.
                </div>,
                <div>
                  You can also create three user-defined settings (U1, U2, and
                  U3). These unique settings allow you to quickly and easily
                  tune S. I.R.S. to match your riding style or favorite road.
                </div>,
                <div>
                  The Power Mode Selector (PW) permits selection between three
                  different engine output characteristic modes (1,2 & 3) to
                  match the riding conditions or your preferences.
                </div>,
                <div>
                  Mode 1 provides the sharpest throttle response up to maximum
                  engine power for experienced riders for riding on good road
                  conditions.
                </div>,
                <div>
                  Mode 2 provides a softer throttle response with a more linear
                  power delivery up to maximum engine power for most riders
                  riding on average road conditions.
                </div>,
                <div>
                  Mode 3 provides the softest throttle response and a gentler
                  power curve with reduced maximum output for riders with less
                  experience, or for any rider facing poor road conditions (wet
                  or dirty surfaces with limited traction).
                </div>,
                <div>
                  <Typography fontWeight="bold">
                    Control over engine acceleration characteristics
                  </Typography>
                </div>,
                <div>
                  Adopted directly from the system developed for Suzuki’s MotoGP
                  racing machines, the Motion Track Traction Control System (TC)
                  was designed to provide greater stability and help you
                  confidently control the Hayabusa in varying riding conditions
                  by limiting rear wheel spin.
                </div>,
                <div>
                  The TC system offers 10 mode settings and can also be switched
                  off. The higher the mode number the more the system is
                  sensitive to rear wheel spin and the faster it will intervene
                  to limit spinning.
                </div>,
                <div>
                  The ECM continually monitors front and rear wheel speed,
                  engine RPM, plus throttle position and gear position, and lean
                  angle data from the IMU. When the system determines that loss
                  of traction is imminent, the ECM adjusts engine power to
                  prevent wheel spin.
                </div>,
                <div>
                  The Anti-lift Control System (LF) adds control reassurance by
                  helping prevent the front wheel from lifting off the ground
                  when accelerating.
                </div>,
                <div>
                  The Launch Control System (LC) helps ensure e fficient launch
                  and acceleration from a standing start. Launch Control for the
                  Hayabusa offers three modes (1, 2 & 3) from which you can
                  choose to match your level of experience or confidence.
                </div>,
                <div>
                  LC Mode 1 limits engine speed on launch to 4,000 RPM for
                  softer acceleration, LC Mode 2 revs to 6,000 RPM for a
                  stronger acceleration, and LC Mode 3 lets the engine rev to
                  8,000 RPM for the strongest and quickest acceleration
                </div>,
                <div>
                  <Typography fontWeight="bold">
                    Control over engine deceleration characteristics
                  </Typography>
                </div>,
                <div>
                  The Engine Brake Control System (EB) offers a selection of
                  three modes (plus an OFF setting) that provide control over
                  the effective strength of engine braking to match your riding
                  preferences. The higher the setting, the smoother and more
                  controllable behavior becomes as the effect of engine braking
                  is diminished to help eliminate rear tire sliding or skipping
                  when decelerating after releasing the throttle grip or
                  downshifting. The system can also be switched off when you
                  wish to experience the full effect of engine braking during
                  deceleration.
                </div>,
                <div>
                  <Typography fontWeight="bold">
                    Control over the engine at steady speeds
                  </Typography>
                </div>,
                <div>
                  The Cruise Control System maintains the selected road speed
                  without having to hold the throttle open
                </div>,
                <div>
                  Cruising speed can be set from approximately 31 km/h to 200
                  km/ h while riding at 2,000 to 7,000 RPM in second gear or
                  higher.
                </div>,
                <div>
                  Suzuki’s Active Speed Limiter is a first in the motorcycle
                  industry, as this highly practical system allows you to set a
                  speed limit you do not wish to exceed, which helps lessen
                  concerns about speeding or driving faster than intended.
                </div>,
                <div>
                  <Typography fontWeight="bold">
                    Control over engine operations
                  </Typography>
                </div>,
                <div>
                  The dual mode Bi-directional Quick Shift System (QS) allows
                  you to shift up or down quickly and easily, without operating
                  the clutch or throttle.
                </div>,
                <div>
                  QS Mode 1 reacts quickly, like a racing style response, while
                  QS Mode 2 offers a lighter reaction for casual riding.
                </div>,
                <div>
                  The assist & slipper clutch functions of SCAS help ensure even
                  smoother up and down shifts when using QS or manual clutch
                  operation.
                </div>,
                <div>
                  The Suzuki Easy Start System lets you start the motorcycle
                  with a short press of the starter button.
                </div>,
                <div>
                  The Low RPM Assist System seamlessly increases engine speed
                  when launching from a standing start or riding at low speeds
                  to help ensure smoother power delivery and better control in
                  stop-and-go traffic.
                </div>,
                <div>
                  <Typography fontWeight={"bold"}>
                    Control over braking
                  </Typography>
                </div>,
                <div>
                  The Combined Brake System lets you brake more confidently, as
                  operating the front brake lever provides braking power to both
                  the front and rear brakes.
                </div>,
                <div>
                  Using the brake pedal (with the right foot) operates the rear
                  brake only.
                </div>,
                <div>
                  The Motion Track Antilock Brake System (MT-ABS)** uses vehicle
                  posture data from the IMU to not only activate in a straight
                  line but also when the vehicle is leaning or turning.
                </div>,
                <div>
                  By reducing the impact of sudden braking force, the Hayabusa
                  is less likely to try to push itself upright or lose traction,
                  instead maintaining the turning radius and lean angle to
                  better follow your intended line through the corner.
                </div>,
                <div>
                  Even if you are startled and brake heavily in a corner, MT-ABS
                  assists in helping maintain stability while stopping or
                  slowing the motorcycle.
                </div>,
                <div>
                  The MT-ABS system cannot be switched off – it is always
                  active.
                </div>,
                <div>
                  The Slope Dependent Control System prevents rear wheel lift
                  when braking when travelling downhill. The ABS unit
                  continually measures brake pressure while the IMU constantly
                  monitors vehicle posture, even as the Hayabusa is traveling
                  downhill. When you operate the brake lever or pedal when
                  riding downhill, the system adjusts brake pressure to prevent
                  rear wheel lift and provide more stable braking.
                </div>,
                <div>
                  The Hill Hold Control System helps hold the Hayabusa still
                  when it is stopped on an incline, providing confidence so you
                  can focus on pulling away more smoothly to proceed up the
                  hill. When stopping upward on a hill and applying the brakes,
                  the system automatically operates the rear brake for around 30
                  seconds to prevent the motorcycle from rolling backward, even
                  if you release the brake lever or pedal.
                </div>,
                <div>
                  Another first on a Suzuki motorcycle, the Emergency Stop
                  Signal*** rapidly flashes the front and rear turn signals to
                  alert following vehicles if you brake suddenly at speeds of 55
                  km/h or higher.
                </div>,
                <div>
                  ** ABS is not designed to shorten the braking distance. ABS
                  cannot prevent wheel skidding caused by braking while
                  cornering. Please ride carefully and do not overly rely on
                  ABS.
                </div>,
                <div>
                  *** Emergency Stop Signal is not available on North American,
                  Indian or Canadian specification units.
                </div>,
              ],
            },
          ]}
        />
      </Container>
      <Box
        sx={{
          my: 4,
          position: "relative",
          height: "500px",
          width: "100%",
          img: {
            objectFit: "cover",
          },
        }}
      >
        <Image src={"/images/hayabusa-25th/GSX1300RRQM4_side_cowl.jpeg"} fill />
      </Box>
      <Container maxWidth="lg">
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
        <DialogTitle textAlign={"right"}>
          {" "}
          <IconButton onClick={() => setOpenPhoto(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <Box
          sx={{ position: "relative", height: "800px", width: "100%", mb: 4 }}
        >
          <Image src={photoSelected} fill style={{ objectFit: "contain" }} />
        </Box>
      </Dialog>
    </Public>
  );
}
