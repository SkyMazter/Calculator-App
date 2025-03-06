import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CalcRow = ({icons})=> {

    return(
        <Row className="my-3">
    <Col
      xs={3}
      className="d-flex justify-content-center align-items-center"
    >
      <button className="calc-button">
        <p>{icons[0]}</p>
      </button>
    </Col>
    <Col
      xs={3}
      className="d-flex justify-content-center align-items-center"
    >
      <button className="calc-button">
        <p>{icons[1]}</p>
      </button>
    </Col>
    <Col
      xs={3}
      className="d-flex justify-content-center align-items-center"
    >
      <button className="calc-button">
        <p>{icons[2]}</p>
      </button>
    </Col>
    <Col
      xs={3}
      className="d-flex justify-content-center align-items-center"
    >
      <button className="calc-button">
        <p>{icons[3]}</p>
      </button>
    </Col>
  </Row>
    )
}

export default CalcRow