/**
 * Collapsible content
 **/

import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Typography, Collapse, Card, CardContent } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

export default function Collapsible(props) {
  const { title, content } = props;
  const [isShow, setIsShow] = useState(false);
  const handleClickCollapsible = () => {
    setIsShow(!isShow);
  };
  return (
    <Box>
      <Card
        elevation={0}
        sx={{
          borderColor: grey[300],
          borderWidth: 1,
          borderStyle: "solid",
          bgcolor: grey[100],
        }}
      >
        <CardContent>
          <Box
            display={"flex"}
            justifyContent="space-between"
            onClick={handleClickCollapsible}
            sx={{
              cursor: "pointer",
            }}
          >
            {title}
            <KeyboardArrowDown
              sx={{
                transition: "all 250ms ease-in-out",
                ...(isShow && {
                  transform: "rotate(180deg)",
                }),
              }}
            />
          </Box>
          <Collapse in={isShow}>
            <Box>{content}</Box>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  );
}
