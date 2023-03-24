/**
 * Locate a dealer page with google map and filter function
 * created by Issyah Ismail*/
import Nav from "@/src/nav";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
  Button,
  Autocomplete,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DealerList from "@/src/dealer_list.json";
import StockistList from "@/src/stockist_list.json";
import { grey } from "@mui/material/colors";
import Link from "@/src/Link";
import { Phone, PinDrop } from "@mui/icons-material";
import { useState, useEffect } from "react";
export default function LocateADealer(props) {
  const [selectedDealer, setSelectedDealer] = useState(0);
  const [region, setRegion] = useState("all");

  const [dealers, setDealers] = useState([]);

  useEffect(() => {
    setDealers(DealerList);
  }, []);

  const filterByRegion = () => {
    if (region == "all") {
      setDealers(DealerList);
    } else {
      const filteredDealers = DealerList.filter((i) => i.region == region);
      setDealers(filteredDealers);
    }
  };

  useEffect(() => {
    filterByRegion();
  }, [region]);

  useEffect(() => {
    if (selectedDealer) {
      const filteredDealers = dealers.filter(
        (i) => i.name === selectedDealer?.label
      );
      setDealers(filteredDealers);
    } else {
      filterByRegion();
    }
  }, [selectedDealer]);

  return (
    <div>
      <Nav />
      <Toolbar />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Typography variant="h3" component={"h1"}>
          LOCATE A DEALER
        </Typography>
        <Stack
          spacing={2}
          mt={2}
          flexWrap={"wrap"}
          direction={{
            md: "row",
            xs: "column",
          }}
        >
          <FormControl
            sx={{
              width: {
                xs: "100%",
                md: "20%",
              },
            }}
          >
            <InputLabel>Select region</InputLabel>
            <Select
              value={region}
              onChange={(event) => setRegion(event.target.value)}
              label={"Select region"}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"north"}>North</MenuItem>
              <MenuItem value={"south"}>South</MenuItem>
              <MenuItem value={"east"}>East</MenuItem>
              <MenuItem value={"west"}>West</MenuItem>
            </Select>
          </FormControl>

          <Autocomplete
            sx={{
              width: {
                xs: "100%",
                md: "40%",
              },
            }}
            options={dealers.map((item) => {
              return {
                label: item.name,
              };
            })}
            onChange={(event, newValue) => {
              setSelectedDealer(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label={"Search for dealers"} />
            )}
          />
        </Stack>
        <Grid
          container
          sx={{
            mt: 4,
            height: {
              md: "calc(74vh)",
              xs: "100%",
            },
            overflowY: "hidden",
          }}
        >
          <Grid item md={4} sx={{ height: "100%", overflowY: "auto" }}>
            <Stack spacing={2} sx={{ p: 1 }}>
              {dealers.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    bgcolor: grey[100],
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    {/* <Typography variant='body1'>{item.address}</Typography> */}
                    <Link
                      target="_blank"
                      href={`https://google.com/maps?q=${item?.address?.replace(
                        " ",
                        "+"
                      )}`}
                    >
                      {item.address}
                    </Link>
                    <Typography variant="body1" fontWeight={700}>
                      {item.postal_code}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "end" }}>
                    <Button
                      component={Link}
                      href={`tel: ${item.tel}`}
                      startIcon={<Phone />}
                      variant="outlined"
                    >
                      {item.tel}
                    </Button>
                    <Button
                      href={`https://google.com/maps?q=${item?.address?.replace(
                        " ",
                        "+"
                      )}`}
                      component={Link}
                      startIcon={<PinDrop />}
                      variant="contained"
                    >
                      Directions
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            md={8}
            sx={{
              height: "100%",
              width: "100%",
              display: {
                xs: "none",
                md: "flex",
              },
              iframe: {
                height: "calc(100% + 70px)",
                width: "100%",
                position: "relative",
                top: "-70px",
              },
            }}
          >
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1nttloD0lcnDayP2ycS6jsgSKSNDEZ0Y&ehbc=2E312F"
              width="100%"
              height="100%"
              border={0}
            ></iframe>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Typography variant="h3" component={"h2"}>
          LOCATE SPARE PARTS STOCKIST
        </Typography>
        <Grid container spacing={2} sx={{ my: 4 }}>
          {StockistList.map((item, index) => (
            <Grid item md={4} xs={12} key={index}>
              <Card
                elevation={1}
                sx={{
                  bgcolor: grey[100],
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  {/* <Typography variant='body1'>{item.address}</Typography> */}
                  <Link
                    target="_blank"
                    href={`https://google.com/maps?q=${item?.address?.replace(
                      " ",
                      "+"
                    )}`}
                  >
                    {item.address}
                  </Link>
                  <Typography variant="body1" fontWeight={700}>
                    {item.postal_code}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "end" }}>
                  <Button
                    component={Link}
                    href={`tel: ${item.tel}`}
                    startIcon={<Phone />}
                    variant="outlined"
                  >
                    {item.tel}
                  </Button>
                  <Button
                    href={`https://google.com/maps?q=${item?.address?.replace(
                      " ",
                      "+"
                    )}`}
                    component={Link}
                    startIcon={<PinDrop />}
                    variant="contained"
                  >
                    Directions
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
