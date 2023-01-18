import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import DashboardScreen from "../../dashboard/screen/Dashboard";
import AppLayout from "../components/AppLayout";
import HomeScreen from "../screens/Home";

const TournamentLayout = () => (
  <section>
    <header>Tournaments</header>
    <Outlet />
  </section>
);

const ActiveScreen = () => <div>active</div>;
const UnactiveScreen = () => <div>unactive</div>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomeScreen />} />
      <Route path="dashboard" element={<DashboardScreen />} />
      <Route path="tournaments" element={<TournamentLayout />}>
        <Route path="active" element={<ActiveScreen />} />
        <Route path="inactive" element={<UnactiveScreen />} />
      </Route>
    </Route>
  )
);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
