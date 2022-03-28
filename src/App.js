import logo from "./logo.svg";
import "./App.css";
import MyLineChart from "./Component/MyLineChart/MyLineChart";
import SpecalChart from "./Component/SpeicalChart/SpecalChart";

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <SpecalChart></SpecalChart>
    </div>
  );
}

export default App;
