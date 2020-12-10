import React, { Component } from "react";
import "./styles.css";
class Tasks extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  state = {
    checked: false,
  };

  handleCheck = (event) => {
    if (this.state.checked == false) {
      this.setState({
        checked: true,
      });
    } else {
      this.setState({
        checked: false,
      });
    }
  };

  render() {
    return (
      <div
        className={`list-item ${this.state.checked ? "checked" : ""}`}
        id={this.props.data.id}
      >
        <input
          type="checkbox"
          className="checkbox"
          onClick={this.handleCheck}
        ></input>
        <div className="text">{this.props.data.value}</div>
        <div className="btns">
          <div className="del" onClick={this.props.handleDelete}>
            -
          </div>
          <div className="edit">edit</div>
        </div>
      </div>
    );
  }
}

export default Tasks;
