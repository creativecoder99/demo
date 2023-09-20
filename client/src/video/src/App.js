import {Routes, Route} from "react-router-dom";
import "./App.css";
import lobbyscreen from "../screens/lobby";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<lobbyscreen />} />
      </Routes>
      
    </div>
  );
}

export default App;
