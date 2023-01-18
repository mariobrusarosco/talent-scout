import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import DashboardScreen from "../../dashboard/screen/Dashboard";
import AppLayout from "../components/AppLayout";
import PostsScreen, { postsLoader } from "../Posts/Posts";
import HomeScreen from "../screens/Home";

const TournamentLayout = () => (
  <section>
    <header>Tournaments</header>
    <Outlet />
  </section>
);

const ActiveScreen = () => <div>active</div>;
const UnactiveScreen = () => <div>unactive</div>;

const CatchAllRoute = () => <div>Ops, we could not find your page</div>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="tournaments" element={<TournamentLayout />}>
          <Route path="active" element={<ActiveScreen />} />
          <Route path="inactive" element={<UnactiveScreen />} />
        </Route>

        <Route path="posts" element={<PostsScreen />} loader={postsLoader} />

        {/* Catch All Approach. Can be used for 404 pages*/}
        <Route path="*" element={<CatchAllRoute />} />
      </Route>
      {/* Catch All Approach but without AppLayout. Can be used for 404 pages*/}
      {/* <Route path="*" element={<CatchAllRoute />} /> */}
    </>
  )
);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
