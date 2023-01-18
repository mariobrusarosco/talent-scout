import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardScreen from "../../dashboard/screen/Dashboard";
import Header from "../components/Header";
import HomeScreen from "../screens/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<HomeScreen />} /> */}
          {/* Passing the 'index' prop has the effect that passing the 'path="/"' prop */}
          <Route index element={<HomeScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default AppRouter;
