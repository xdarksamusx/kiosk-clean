import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import { WelcomePage } from "./pages/WelcomePage";
import { ServiceOptionsPage } from "./pages/ServiceOptionsPage";
import { WeightPage } from "./pages/WeightPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { DatePage } from "./pages/DatePage";
import { ReceiptPage } from "./pages/ReceiptPage";
import { TimePage } from "./pages/TimePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />

      <Route path="/options" element={<ServiceOptionsPage />} />
      <Route path="/weight" element={<WeightPage />} />
      <Route path="/confirmation" element={<ThankYouPage />} />
      <Route path="/date" element={<DatePage />} />
      <Route path="/time" element={<TimePage />} />

      <Route path="/receipt" element={<ReceiptPage />} />
    </Routes>
  );
}

export default App;
