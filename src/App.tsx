import "./App.css";
import HomeScreen from "./domain/global/screens/Home";
import DashboardScreen from "./domain/dashboard/screen/Dashboard";
import AppRouter from "./domain/global/routing/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
