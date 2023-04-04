/**
 * An array of feature list that is collapsible*/
import { Circle } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Collapsible from "./Collapsible";

 

export default function FeatureListCollapsible(props){
  const {
    list
  } = props;

  return (
    <Stack spacing={2}>
      {list.map((item,index) => (
        <Collapsible 
          key={index}
          title={<Typography variant='h5'>{item.title}</Typography>}
          content={
            <List>
              {item?.content?.map((list,i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    -
                  </ListItemIcon>
                  <ListItemText>{list}</ListItemText>
                </ListItem>
              ))}
            </List>
          }
        />
      ))}
    </Stack>
  )

}