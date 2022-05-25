import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import MiCustomProvider from "./components/MiCustomProvider";

function App() {
  return (
    <BrowserRouter>
      <MiCustomProvider>
        <Header />
        <Main />
      </MiCustomProvider>
    </BrowserRouter>
  );
}

export default App;
