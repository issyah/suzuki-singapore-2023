/**
 * Main default public page
 **/
import Footer from "@/src/footer";
import Nav from "@/src/nav";
import { Toolbar, Box } from "@mui/material";

export default function Public(props) {
  const { children } = props;

  return (
    <div>
      <Nav />
      <Toolbar />
      <Box my={2}>{children}</Box>
      <Footer/>
    </div>
  );
}
