import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class ModalComponent extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <Modal show={true} onHide={this.props.onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
