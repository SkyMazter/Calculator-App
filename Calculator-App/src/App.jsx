import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CalcRow from "./components/CalcRow.jsx";

import { useState } from "react";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("0");

  return (
    <>
    <Container fluid className="bg-primary d-flex flex-column justify-content-center">
      <Row>
        <Col>
          <h1 className="text-center">Hello World</h1>
        </Col>
      </Row>
    </Container>

    <Container>

      
    </Container>
    </>
    // <Container className="">
    //   <Row>
    //     <Col xs={12} className="text-center">
    //       <h1>My Calculator App</h1>
    //     </Col>
    //   </Row>

    //   <Row className="d-flex justify-content-center align-items-center">
    //     <Col xs={12} md={6}>
    //       <Container>
    //         <Row>
    //           <Col>
    //             <input disabled="all" value={inputValue} className="w-100 my-3 text-end p-3" placeholder="" type="text" />
    //           </Col>
    //         </Row>
    //         <CalcRow icons={["AC",'+/-','%','/']}/>
    //         <CalcRow icons={["7",'8','9','*']}/>
    //         <CalcRow icons={["4",'5','6','-']}/>
    //         <CalcRow icons={["1",'2','3','+']}/>
    //         <CalcRow icons={["?",'0','.','=']}/>
    //       </Container>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
