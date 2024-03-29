import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  useRouteError,
} from "react-router-dom";
import ReactQueryCourse from "../../study-and-validation/react-query-udemy-course/ReactQueryCourse";
import DashboardScreen from "../../dashboard/screen/Dashboard";
import PlayerScreen, { playerLoader } from "../../player/screen/Player/Player";
import AppLayout from "../components/AppLayout";
import PostsScreen, { postsLoader } from "../Posts/Posts";
import HomeScreen from "../../home";

const TournamentLayout = () => (
  <section>
    <header>Tournaments</header>
    <Outlet />
  </section>
);

const ActiveScreen = () => <div>active</div>;
const UnactiveScreen = () => <div>unactive</div>;

const CatchAllRoute = () => <div>Ops, we could not find your page</div>;

const PlayerErrorScreen = () => {
  const error = useRouteError();

  return <div>Error: {error?.message ?? "N/A"}</div>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route path="react-query" element={<ReactQueryCourse />} />
        <Route index element={<HomeScreen />} />
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="tournaments" element={<TournamentLayout />}>
          <Route path="active" element={<ActiveScreen />} />
          <Route path="inactive" element={<UnactiveScreen />} />
        </Route>

        <Route path="tournaments" element={<TournamentLayout />}>
          <Route path="active" element={<ActiveScreen />} />
          <Route path="inactive" element={<UnactiveScreen />} />
        </Route>

        <Route path="player">
          <Route
            path=":id"
            element={<PlayerScreen />}
            loader={playerLoader}
            errorElement={<PlayerErrorScreen />}
          />
        </Route>

        <Route path="posts" element={<PostsScreen />} loader={postsLoader} />

        {/* Catch All Approach. Can be used for 404 pages*/}
        <Route path="*" element={<CatchAllRoute />} />
      </Route>
    </>
  )
);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
