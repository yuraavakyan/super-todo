import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Container,
  Card,
} from "react-bootstrap";

class BootStrap extends Component {
  constructor() {
    super();
  }

  state = {
    tasks: [],
    changedValue: "",
  };

  handleChange = (e) => {
    this.setState({
      changedValue: e.target.value,
    });

    console.log(this.state);
  };

  handleClick = () => {
    const tasks = [...this.state.tasks];
    const { changedValue } = this.state;
    tasks.push(changedValue);
    this.setState({
      tasks,
      changedValue: "",
    });
  };

  handleEnter = (e) => {};

  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <div className="bootstrap-container">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(event) => this.handleChange(event)}
            value={this.state.changedValue}
          />

          <Button
            variant="outline-secondary"
            className="inpbtn"
            onClick={this.handleClick}
          >
            Button
          </Button>
        </InputGroup>
        <Container>
          <Row>
            <Col xl={3}>{tasks}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BootStrap;
