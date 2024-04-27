import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routing } from "./Routing";
import { IndexPage } from "./pages/overview/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
export default App;
