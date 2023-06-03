import { useLocation } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
  const { location } = useLocation();
  console.log(location);
  return (
    <div className="App">
      <h1>Movie List</h1>
      <AppRoutes />
    </div>
  );
}

export default App;
