import "./App.css";
import Areachart from "./components/Areachart";
import Barchart from "./components/Barchart";
import Linechart from "./components/Linechart";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Linechart />
      <Areachart />
      <Barchart />
      <Table />
    </>
  );
}

export default App;
