import { Routes, Route } from "react-router-dom";
import CallScreen from "./CallScreen";
import HomeScreen from "./HomeScreen";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/call/:username/:room" element={<CallScreen />} />
    </Routes>
  );
}

export default RouteList;
