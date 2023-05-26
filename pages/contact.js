/**
 * Main contact us page for suzuki singapore*/
import Public from "templates/public";
import { Container, Typography, Grid, Box, Divider, Stack, Button } from "@mui/material";
import Link from "@/src/Link";
import { Email, Phone } from "@mui/icons-material";

export default function Contact() {
  return (
    <Public>
      <Container maxWidth="xl">
        <Typography variant="h3" component={"h2"} sx={{ mb: 4 }}>
          CONTACT US
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <Link
              href="https://www.google.com/maps/place/Suzuki+Motorcycles+Singapore/@1.3345122,103.8987725,17z/data=!3m2!4b1!5s0x31da112b8b3e2f97:0xa87524244af544f9!4m6!3m5!1s0x31da19c503d3621d:0x95cc03a7e77ec4af!8m2!3d1.3345122!4d103.9009665!16s%2Fg%2F1ptxynty0"
              target="_blank"
            >
              <Typography gutterBottom variant="h4">
                SUZUKI MOTORCYLES SINGAPORE
              </Typography>
            </Link>

            <Typography >
              9 Kaki Bukit Road 1, #01-01, Eunos Techolink
            </Typography>
            <Typography gutterBottom variant="body2" fontWeight="bold">
              Singapore 415938
            </Typography>
            <Typography variant="body2">Opening Hours: </Typography>
            <Typography variant="body2" fontWeight={"bold"}>
              Monday to Friday (09:30am - 5:30pm)
            </Typography>
            <Typography variant="body2" fontWeight={"bold"}>
              Closed on Saturday, Sunday and public holidays
            </Typography>
            <Divider sx={{my:2}}/>
            <Box>
              <Typography variant="h4" gutterBottom>SALES</Typography>
              <Stack spacing={2} direction='row' flexWrap={'wrap'}>
                <Button startIcon={<Phone/>} component={Link} href='tel:+6562997939' variant='outlined' size='large'>+65 62997939</Button>
                <Button target="_blank" startIcon={<Email/>} component={Link} href='mailto:suzuki@guanhoe.com.sg' variant='outlined' size="large">suzuki@guanhoe.com.sg</Button>
              </Stack>
            </Box>
            <Divider sx={{my:2}}/>
            <Box>
              <Typography variant="h4" gutterBottom>SERVICE</Typography>
              <Stack spacing={2} direction='row' flexWrap={'wrap'}>
                <Button startIcon={<Phone/>} component={Link} href='tel:+6565160016' variant='outlined' size='large'>+65 65160016</Button>
                <Button target="_blank" startIcon={<Email/>} component={Link} href='mailto:service@guanhoe.com.sg' variant='outlined' size="large">service@guanhoe.com.sg</Button>
              </Stack>
            </Box>
            <Divider sx={{my:2}}/>
            <Box>
              <Typography variant="h4" gutterBottom>PARTS</Typography>
              <Stack spacing={2} direction='row' flexWrap={'wrap'}>
                <Button startIcon={<Phone/>} component={Link} href='tel:+6565160018' variant='outlined' size='large'>+65 65160018</Button>
                <Button target="_blank" startIcon={<Email/>} component={Link} href='mailto:parts@guanhoe.com.sg' variant='outlined' size="large">parts@guanhoe.com.sg</Button>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <iframe
              width="100%"
              height="800"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.736050548145!2d103.89875916475397!3d1.3345616990266451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c503d3621d%3A0x95cc03a7e77ec4af!2sSuzuki%20Motorcycles%20Singapore!5e0!3m2!1sen!2ssg!4v1684810946953!5m2!1sen!2ssg"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Public>
  );
}