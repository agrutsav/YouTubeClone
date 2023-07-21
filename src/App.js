import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";
import ChannelDetail from "./components/ChannelDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
