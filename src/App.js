import Navbar from "./componens/Navbar";
import Feed from "./componens/Feed";
import Footer from "./componens/Footer";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box> 
      <Navbar/>

      <Stack direction='row' spacing={2} justifyContent="center">
        <Feed/>
      </Stack>

      <Footer/>
    
    </Box>
  );
}

export default App;
