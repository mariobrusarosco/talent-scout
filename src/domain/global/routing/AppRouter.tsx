import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import DashboardScreen from "../../dashboard/screen/Dashboard";
import AppLayout from "../components/AppLayout";
import HomeScreen from "../screens/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomeScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
    </Route>
  )
);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
