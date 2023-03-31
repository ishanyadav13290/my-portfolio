
import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Box bg={"rgb(53, 53, 53)"} p={"20px 0"} h="100vh" color={"white"}>
      <Navbar />
      </Box>
    </div>
  );
}

export default App;
