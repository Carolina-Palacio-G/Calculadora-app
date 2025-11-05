import Calculadora from "./Calculadora";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculadora Web</h1>
      <div className="calculadora-wrapper">
        <Calculadora />
      </div>
    </div>
  );
}

export default App;