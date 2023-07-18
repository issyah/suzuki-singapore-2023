/**
 * Suzuki news page*/
import {
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
  Box,
  Divider
} from "@mui/material";
import Public from "templates/public";
import { useEffect, useState } from "react";
import Link from "@/src/Link";
export default function News(props) {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(true);
  const fetchNews = async () => {
    try {
      const res = await fetch("/api/globalnews");
      const result = await res.json();
      setNews(result?.data?.newslist?.year);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filterNewsByYear = () => {
    if (news.length) {
      let prefixYear = `ad${year}`;
      const filteredNews = news.find((i) => i?.$?.id === prefixYear);
      setFilteredNews(filteredNews.article);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    console.log(filterNewsByYear());
  }, [news]);

  return (
    <Public>
      <Container maxWidth="xl">
        <Typography gutterBottom variant="h3" component="h1">
          GLOBAL NEWS {year}
        </Typography>
        {loading && (
          <Box textAlign="center" my="4">
            <CircularProgress size={24} />
          </Box>
        )}
        <List sx={{
          width: {
            md: '80%',
          }
        }}>
          {filteredNews?.map((item, index) => (
            <ListItem key={index} sx={{
              borderBottom: '1px solid transparent',
              borderColor: 'grey.3w00'
            }}>
              <ListItemButton
                target={"_blank"}
                component={Link}
                href={`https://www.globalsuzuki.com/${item?.link[0]}`}
              >
                <ListItemText>
                  <Typography variant="body2">{item?.date[0]}</Typography>
                  <Typography variant="h6">{item?.message[0]}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Public>
  );
}
