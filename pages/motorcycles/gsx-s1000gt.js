// gsx-s1000gt

import Public from "templates/public";
import BannerImg from "@/public/images/gsx-s1000gt/GSX-S1000GT_M2_Action_5.jpg";
import Logo from "@/public/images/gsx-s1000gt/logo.jpg";
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
export default function GsxS1000gt(props) {
  const [openPhoto, setOpenPhoto] = useState(false);
  const [photoSelected, setPhotoSelected] = useState();
  const [color, setColor] = useState("blue");
  const dimensions = [
    {
      title: "Overall length",
      content: "2,140 mm",
    },
    {
      title: "Overall width",
      content: "825 mm",
    },
    {
      title: "Overall height",
      content: "1,215 mm",
    },
    {
      title: "Wheelbase",
      content: "1,460 mm",
    },
    {
      title: "Seat height",
      content: "810 mm",
    },
    {
      title: "Ground clearance",
      content: "140 mm",
    },
    {
      title: "Curb mass",
      content: "226 kg",
    },
  ];

  const engine = [
    {
      title: "Engine type",
      content: "4-stroke, 4-cylinder, liquid-cooled, DOHC",
    },
    {
      title: "Engine displacement",
      content: "999 cm3",
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
        "Front: 120/70ZR17M/C (58W), tubeless, Rear: 	190/50ZR17M/C (73W), tubeless",
    },
    {
      title: "Fuel tank capacity",
      content: "19.0 L",
    },
  ];

  const photo = [
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_1.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_2.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_3.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_5.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_7-QT8.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_8-QT8.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_9-QT8.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_11-QT8.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_13-QT8.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_17-QT8.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M2_Action_25.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M3_QT8_Diagonal.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M3_YSF_Diagonal.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M3_YSF_Front.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M3_YSF_Rear_Diagonal.jpg",
    "/images/gsx-s1000gt/GSX-S1000GT_M3_YSF_Rear.jpg",
  ];

  const handleModalImage = (src) => {
    setOpenPhoto(true);
    setPhotoSelected(src);
  };

  return (
    <Public>
      <Head>
        <title>GSX-S1000GT | Suzuki Singapore</title>
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
              The GSX-S1000GT intelligently combines the championship
              performance of its GSX-R1000-based engine with a nimble,
              lightweight chassis to provide riders with an exciting and
              comfortable GT riding experience. Here is a Grand Tourer with
              sportbike level functionality, avantgarde styling and an extensive
              selection of optional equipment features.
            </Typography>
          </Grid>
        </Grid>
        <Box position="relative" mb={1} data-aos="fade-up">
          <Image
            priority
            src={BannerImg}
            height={3840}
            width={2246}
            alt={"GSX-S1000GT"}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item md={3} xs={6} textAlign="center" data-aos="fade-up">
            <Box position="relative" mb={2}>
              <Image
                priority
                src={"/images/gsx-s1000gt/detail_ph01.jpeg"}
                width={750}
                height={584}
                alt="Suzuki intelligence"
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">
              Suzuki Intelligent Ride System (S.I.R.S)
            </Typography>
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
                src={"/images/gsx-s1000gt/detail_ph02.jpeg"}
                width={750}
                height={584}
                alt="Liquid-cooled inline-four engine"
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">
              6.5-inch Full-color TFT Display
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Box position="relative" mb={2}>
              <Image
                priority
                src={"/images/gsx-s1000gt/detail_ph03.jpeg"}
                width={750}
                height={584}
                alt="Aerodynamic bodywork"
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">
              Aerodynamic and Wind Protection
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={6}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <Box position="relative" mb={2}>
              <Image
                priority
                src={"/images/gsx-s1000gt/detail_ph04.jpeg"}
                width={750}
                height={584}
                alt="The beauty of fine instrumentation"
                className="img-responsive"
              />
            </Box>
            <Typography variant="body2">Minimize Vibration</Typography>
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
                  The GSX-S1000GT fulfi lls the transformation in what
                  performance-minded touring enthusiasts desire. Whether heading
                  out on a long trip with a passenger on board, or enjoying a
                  sporty solo romp up a twisty ribbon of asphalt, the
                  GSXS1000GT’s performance is a revelation, its appearance
                  breathtaking, and the Suzuki mySPIN connectivity application
                  integrated into the full-color TFT instrument panel provides
                  easy access to contacts, maps, music, calendar and phone
                  communication.
                </div>,
                <div>
                  Using long-stroke, GSX-R engine architecture, the Euro 5
                  compliant 999cm³ four-stroke, liquid-cooled DOHC in-line four
                  engine delivers smooth, consistent power throughout its wide
                  power band. This enhances the riding experience both at the
                  low- to mid-range engine speeds commonly used in daily riding,
                  and through the mid- to high-range used when travelling long
                  distances on the highway
                </div>,
                <div>
                  Refi ned and controlled performance is managed by Suzuki
                  Intelligent Ride System (S.I.R.S.) technology, including
                  electronic cruise control, traction control* and clutchless
                  quick shifting, so passing slower traffi c is an opportunity,
                  never a challenge.
                </div>,
                <div>
                  The twin-spar aluminum frame and superbike-braced swingarm
                  help deliver agile handling and great road-holding ability
                  that will go the distance. Visually stunning, the
                  trellis-style sub-frame design creates secure attachment
                  points for the optional, high capacity 36L side cases, while
                  allowing for a thick, more comfortable passenger seat.
                </div>,
                <div>
                  The dual, ABS-equipped**, radial-mounted, four-piston, Brembo
                  front brake calipers and 310mm fl oating rotors provide the
                  controlled stopping performance needed to travel two-up with
                  confidence.
                </div>,
                <div>
                  The cast-aluminum handlebar is wider than the prior
                  GSX-S1000F’s bars, and is shaped and positioned for a
                  comfortable reach, delivering the proper leverage to guide the
                  GSX-S1000GT on any road. The handlebar’s special rubber mount
                  damps vibration to the rider’s hands, while all the footrests
                  have durable rubber inserts to damp vibration to the rider’s
                  and passenger’s boots.
                </div>,
                <div>
                  The GSX-S1000GT puts a new face on sport touring performance
                  and comfort. The striking and original face of the GT begins
                  with a raked nose, while a pair of horizontally arranged LED
                  headlights, V-shaped position light, mirror design, and
                  side-mounted LED turn signals fashion a unique Grand Touring
                  appearance that is distinctively Suzuki.
                </div>,
                <div>
                  Its Euro 5 compliant 999cm³ engine produces greater peak
                  power, with strong torque in the low- to mid-range that’s
                  smoothly controlled by Suzuki’s Ride-byWire Electronic
                  Throttle System for an extraordinary Grand Touring experience.
                </div>,
              ],
            },
            {
              title: "Engine Features",
              content: [
                <div>
                  The GSX-S1000GT’s long-stroke engine produces a broad, smooth
                  torque curve through the full rev-range and features increased
                  peak horsepower.
                </div>,
                <div>
                  The camshaft profiles decrease lift and valve overlap to
                  improve emissions and balance the engine’s performance and
                  drivability to enhance rider control.
                </div>,
                <div>
                  Suzuki’s legendary Twin Swirl Combustion Chamber (TSCC) design
                  is machined into the cylinder head that, along with the
                  flat-top pistons, achieves an optimal 12.2:1 compression
                  ratio, helping to deliver a broad spread of power throughout
                  the entire rev range.
                </div>,
                <div>
                  Aluminum pistons, engineered with use of Finite Element Method
                  (FEM) analysis, are cast for optimal rigidity and weight.
                </div>,
                <div>
                  Ventilation holes between the cylinders reduce pumping loss
                  within the crankcase so the engine can deliver more power and
                  torque.
                </div>,
                <div>
                  Electronic throttle bodies contribute to smooth and more
                  controlled response, especially when you are applying the
                  throttle to accelerate out of a corner.
                </div>,
                <div>
                  These Ride-by-Wire throttle bodies provide precise control for
                  the Suzuki Drive Mode Selector (SDMS), Suzuki Traction Control
                  System (STCS), and Bi-directional Quick Shift System.
                </div>,
                <div>
                  The air cleaner adopts an internal structure that contributes
                  to engine performance while maintaining the exciting intake
                  sound.
                </div>,
                <div>
                  The GSX-S1000GT’s stainless steel, 4-2-1 exhaust system is
                  completely redesigned and tuned while retaining the
                  under-chassis design, sharp looks, and exciting note of the
                  GSX-S1000F’s system.
                </div>,
                <div>
                  Behind the header pipes, the redesigned mid-chamber contains a
                  second catalytic converter to help ensure emissions
                  compliance, a low center-ofgravity, and good exhaust flow to
                  help the engine deliver strong low- to mid-range punch, with
                  an exciting rush to redline.
                </div>,
                <div>
                  The Suzuki Exhaust Tuning (SET) valve manages flow from the
                  mid-chamber into the sculpted muffler, with its pleasing
                  appearance uncommon to under-chassis exhausts and its
                  exciting, distinctive sound that won't overpower your senses
                  or those of your passenger.
                </div>,
                <div>
                  The digital ignition fires iridiumtype spark plugs which
                  increase spark strength and combustion efficiency,
                  contributing to higher power, a more linear throttle response,
                  easier engine start-up, and a more stable idle. These quality
                  components also last longer than conventional spark plugs.
                </div>,
                <div>
                  The lower cowl and radiatorshroud efficiently guide cooling
                  air to the high-capacity curved radiator. A thermostatically
                  controlled cooling fan helps ensure lower coolant temperatures
                  when riding in slow-moving traffic. The design also deflects
                  hot air away from the rider at speed.
                </div>,
              ],
            },
            {
              title: "Chasis Features",
              content: [
                <div>
                  Connected to the swingarm, which comes straight from the
                  GSXR1000, is a link-type rear suspension, with a single shock
                  absorber that features seven-way adjustable spring preload and
                  rebound-damping force adjustment.
                </div>,
                <div>
                  The 43mm inverted KYB forks offer a generous 120mm of front
                  wheel travel and adjustable spring preload, compression and
                  rebound damping.
                </div>,
                <div>
                  Dunlop’s SPORTMAX Roadsport 2 radial tires (120/70ZR17 front
                  and 190/50ZR17 rear) are customengineered to perform optimally
                  on the GSX-S1000GT and provide great grip in dry or wet
                  conditions, faster warm-up, and long tread life.
                </div>,
                <div>
                  Dual front brakes with fully floating 310mm discs and Brembo
                  radial mount monobloc calipers, with four 32mm opposed
                  pistons, provide strong and consistent stopping power when
                  riding solo or two-up.
                </div>,
                <div>
                  In contrast to the GSX-S1000F, the GSX-S1000GT features a more
                  upright riding position for even greater comfort and control.
                  This practical sport touring riding position is the result of
                  a carefully crafted relationship between the handlebar,
                  footrests, and seat.
                </div>,
                <div>
                  The matte black tapered aluminum handlebars contribute to the
                  excellent riding ergonomics and performance-oriented style.
                </div>,
                <div>
                  Securely clamped in a floating mount, the handlebars
                  effectively damp vibration to the rider’s hands.
                </div>,
                <div>
                  The handlebars are 23 mm wider than on the GSXS-S1000F and are
                  rotated slightly upward to raise the grip height.
                </div>,
                <div>
                  The aluminum footpegs for both the rider and passenger are
                  covered with vibration-absorbing rubber. This reduces the
                  amount of vibration transmitted to the feet, which improves
                  comfort, especially on long rides.
                </div>,
                <div>
                  Both pairs of footpegs are positioned lower reducing bend at
                  the rider’s and passenger’s knees and ankles, further
                  improving comfort.
                </div>,
                <div>
                  The rear footrest location provides ample clearance for the
                  passenger’s legs when the optional side cases are installed
                </div>,
                <div>
                  The rider and pillion seats feature a sporty design that
                  maximizes comfort on long rides. Both have a weather-resistant
                  cover material that balances grip with freedom of movement
                </div>,
                <div>
                  The pillion seat is set 60 mm higher than the rider’s seat to
                  provide a good view over the rider’s shoulder.
                </div>,
                <div>
                  Rider’s seat height: 810 cm; approximate pillion seat height
                  870 cm
                </div>,
                <div>
                  The black finish on the shifter, rear brake, and both hand
                  levers matches the performance nature of the motorcycle.
                </div>,
                <div>
                  The front brake lever features a multi-step adjuster that
                  permits quick adjustment of the lever’s distance from the
                  grip.
                </div>,
              ],
            },
            {
              title: "Body & Styling Features",
              content: [
                <div>
                  The shape of the upper and lower fairing effectively moves the
                  wind flow away from the rider, reducing direct pressure to the
                  helmet, shoulders, and knees.
                </div>,
                <div>
                  Wind-tunnel testing and test-rider feedback yielded a special
                  lower-fork bracket cover that extends up into the fairing to
                  deflect air flow that would otherwise whirl up around the
                  instrument panel.
                </div>,
                <div>
                  Developed to maximize wind protection for both the rider and
                  passenger, the windscreen contributes greatly to the
                  GSX-S1000GT’s aerodynamic effectiveness and further enhances
                  the Grand Touring experience. Folded edges along the sides
                  enhance comfort by reducing air flow that would otherwise
                  press against your shoulders.
                </div>,
                <div>
                  An optional, taller Touring Windscreen is available (70 mm
                  taller than the standard screen). This screen arches upward,
                  further reducing air flow to the rider and passenger, while
                  also providing optimized optical quality.
                </div>,
                <div>
                  Aerodynamic performance and wind protection influenced the
                  design of the fairing-mounted mirrors and mirror stalks. Head
                  and stalks were shaped to streamline the flow of air across
                  the mirrors, reducing the amount of wind that reaches your
                  knuckles.
                </div>,
                <div>
                  The GT’s optional, large capacity side cases feature a compact
                  design that integrates seamlessly with the motorcycle’s
                  styling. Designed to clip on and off in seconds, these 36L
                  cases with a 5kg weight capacity can hold most full-face
                  helmets. Painted lid panels are also available, which
                  coordinate beautifully with the GSX-S1000GT body colors.
                </div>,
                <div>
                  A generous 19L fuel tank capacity reduces the frequency of gas
                  stops while touring or commuting
                </div>,
                <div>
                  The uniquely styled “GT” logos on the fairing sides lend an
                  intelligent and sophisticated look that befits a grand tourer.
                  Understated SUZUKI logos on the fuel tank further contribute
                  to the sophisticated appearance.
                </div>,
                <div>
                  The custom-designed ignition key sports the GT logo in gold
                  lettering on its grip to add a luxurious touch
                </div>,
              ],
            },
            {
              title: "Electrical Features",
              content: [
                <div>
                  The compact, dual LED headlight assembly complements the
                  GSX-S1000GT’s aerodynamic styling, and its independent high-
                  and low-beams feature mono-focus LED technology, which
                  brightly illuminates the road ahead. A wide, V-shaped LED
                  position light positioned above makes the GSX-S1000GT clearly
                  visible to others and creates an illuminated face unlike that
                  on any other motorcycle.
                </div>,
                <div>
                  Suzuki’s innovative multifunction handlebar switches are laid
                  out to maximize operating ease and efficiency.
                </div>,
                <div>
                  The 32-bit ECM provides precise engine management that
                  contributes to the operation and optimization of the
                  electrical and S.I.R.S. components. The ECM and all other
                  electronics on the GSX-S1000GT were rigorously tested in an
                  anechoic chamber to help ensure they are not susceptible to
                  magnetic interference from external sources.
                </div>,
              ],
            },
            {
              title: "TFT LCD Multi-information Display Features",
              content: [
                <div>
                  The GSX-S1000GT’s instrument panel uses a new-generation
                  6.5-inch, full-color TFT LCD screen. Developed specifically
                  for use on motorcycles, this TFT display is the first of its
                  kind on a Suzuki motorcycle.
                </div>,
                <div>
                  This high-quality instrument panel is set into the inner
                  fairing above the handlebars, for good visibility and
                  protection from road debris. The panel itself features a
                  scratch-resistant surface, and an anti-reflective coating that
                  improves visibility in bright light.
                </div>,
                <div>
                  The display can be set for manual or automatic switching
                  between Day Mode (white background) and Night Mode (black
                  background). The display’s general brightness can be set to
                  automatically adjust to the ambient light-level, or manually
                  set to suit your preference.
                </div>,
                <div>
                  The display uses exclusive graphics, including blue background
                  lines that add an extra artistic touch to help convey Suzuki
                  spirit and brand identity.
                </div>,
                <div>
                  An additional feature of the TFT LCD display is a brief custom
                  animation that plays when the ignition key is switched on.
                  This playful presentation is pleasing to the eye and builds
                  excitement for the ride to come.
                </div>,
                <div>
                  The display format provides operational information in an
                  easily recognizable way:
                </div>,
                <div>
                  Status icons are displayed in the upper right portion of the
                  TFT LCD panel for the clock, smartphone battery level, and
                  wireless connection status for smartphones and other Bluetooth
                  devices. This includes independent status icons for two sets
                  of wireless headsets
                </div>,
                <div>
                  The brightness adjustable TFT LCD display delivers a wide
                  range of useful information, keeping you fully aware of all
                  the bike’s systems, settings and real-time operating status.
                  When connected to your smartphone, it can also display maps,
                  incoming and outgoing phone calls, contacts, music and
                  calendar for even greater convenience, functionality and fun.
                </div>,
                <div>
                  Two alternative screen views allow you to choose and adjust
                  the settings on certain motorcycle and mySPIN features.
                </div>,
                <div>
                  The MENU screen can access mySPIN connection options, trip
                  information, service reminders and general options.
                </div>,
                <div>
                  The SETTING screen permits adjustments to the panel
                  brightness, backlighting mode, SAE or metric measurement,
                  date, and time adjustments, and more.
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
            {
              title: "Additional Features",
              content: [
                <div>
                  A variety of Genuine Suzuki Accessories are available, with
                  nearly three dozen designed for the GSX-S1000GT.
                </div>,
                <div>
                  The accessory off erings include a set of quick-release, 36L
                  side cases that accept color matched lid panels, a taller
                  touring screen, heated hand grips, billet clutch and brake
                  levers, fuel tank and engine cover protectors, stylish rider
                  seat, plus a unique selection of GT logo apparel.
                </div>,
                <div>
                  The Traction Control System is not a substitute for the
                  rider's throttle control, and traction control cannot prevent
                  loss of traction due to excessive speed when entering turns,
                  or while braking, and it does not control front wheel
                  traction.
                </div>,
                <div>
                  ABS is not designed to shorten the braking distance. ABS
                  cannot prevent wheel skidding caused by braking while
                  cornering. Please ride carefully and do not overly rely on
                  ABS.
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
                    ? "/images/gsx-s1000gt/GSX-S1000GT_M3_YSF_Diagonal.jpg"
                    : color == "blue2"
                    ? "/images/gsx-s1000gt/GSX-S1000GT_M3_QT8_Diagonal.jpg"
                    : "/images/gsx-s1000gt/GSX-S1000GT_M3_YVB_Diagonal.jpg"
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
                  value="blue2"
                  control={<Radio />}
                  label="Metallic Reflective Blue"
                />
                <FormControlLabel
                  value="black"
                  control={<Radio />}
                  label="Gloss Sparkle Black"
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
        <Box
          sx={{ position: "relative", height: "100vh", width: "100%" }}
          pb={2}
        >
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
