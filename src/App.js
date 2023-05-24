import Dashboard from "./Components/Dadshboard/Dashboard";
import Nave from "./Components/Navbarr/Navbar" ;
import Side from "./Components/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css' ;

function App() {
  return (
    <div className="App">
        <Nave />
        <Side />
        <Dashboard />
    </div>
  );
}
export default App;