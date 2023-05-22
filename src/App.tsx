import {
  HomePage,
  BusinessSelection,
  Delivery,
  Upload,
  SuccessPage,
} from "./pages/index";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Outline } from "./Layout/Outline";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/businessSelection" element={<BusinessSelection />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/successPage" element={<SuccessPage />} />
      </Routes>
      {/* <Outline></Outline> */}
      {/* <HomePage></HomePage> */}
      {/* <BusinessSelection /> */}
      {/* <Delivery /> */}
      {/* <SuccessPage /> */}
      {/* <Upload /> */}
      {/* <SuccessPage /> */}
    </>
  );
}

export default App;
