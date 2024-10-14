import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PipboyContainer from "../PipboyContainer/PipboyContainer";
import PipScreen from "../PipboyContainer/PipboyScreen";
import MiscScreen from "../Misc/Misc";
import RadioScreen from "../Radio/Radio";

const PipRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PipboyContainer>
              <PipScreen />
            </PipboyContainer>
          } />
          <Route path="/misc" element={
            <PipboyContainer>
              <MiscScreen />
            </PipboyContainer>
          } />
          <Route path="/radio" element={
            <PipboyContainer>
              <RadioScreen />
            </PipboyContainer>
          } />
        </Routes>
      </BrowserRouter>
    )
  }

export default PipRoutes;