import Navbar from "./Components/Layout/Navbar";
import Start from "./Components/Layout/Start";
import Reason from "./Components/Layout/Reason";
import './App.css'
function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <Start />
      <Reason />
    </div>
  );
}

export default App;
