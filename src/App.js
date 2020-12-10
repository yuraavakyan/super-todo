import "./App.css";
import Demo from "./components/mainPage/Demo";
import Navbar from "./components/navbar/Navbar";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Demo />
      </div>
    </div>
  );
}

export default App;
