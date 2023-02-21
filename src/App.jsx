import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Search from "./pages/Search";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ height: "100vh", overflowY: "scroll" }}>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" exact element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<TvSeries />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </ErrorBoundary>
      </Box>
    </BrowserRouter>
  );
};

export default App;
