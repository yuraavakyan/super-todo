import React, { Component } from "react";
import Tasks from "../tasks/Tasks";
import check from "../../images/check.png";
import Navbar from "../navbar/Navbar";
import idGenerator from "react-id-generator";
import Modal from "../modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class ToDo extends Component {
  state = {
    tasks: [],
    inputValue: "",
    toggle: false,
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleReset = (event) => {};

  handleAddTask = () => {
    if (!this.state.inputValue == "") {
      const { inputValue } = this.state;
      const tasks = [...this.state.tasks];
      const newTask = {
        id: idGenerator("task"),
        value: inputValue,
      };

      tasks.push(newTask);
      this.setState({
        tasks: tasks,
        inputValue: "",
      });
    }
  };

  handleDelete = (event) => {
    const { tasks } = this.state;
    const id = event.target.parentNode.parentNode.id;
    const index = tasks.findIndex((element) => element.id == id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
  };

  toggleConfirm = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  handleReset = (event) => {
    this.setState({
      tasks: [],
    });
  };

  render() {
    const { inputValue, tasks } = this.state;
    return (
      <div className="main">
        <div className="container">
          <div className="inputPart">
            <input
              type="text"
              placeholder="Anything ToDo?"
              onChange={this.handleChange}
              value={this.state.inputValue}
              className="inp"
              onKeyPress={(event) => {
                if (event.key == "Enter") {
                  this.handleAddTask();
                }
              }}
            ></input>
            <button onClick={this.handleAddTask} className="button">
              +
            </button>
          </div>
          <div className="resultPart" value={this.state.tasks}>
            {tasks.map((task, index) => {
              return <Tasks data={task} handleDelete={this.handleDelete} />;
            })}
          </div>
        </div>
        <div className="reset" onClick={this.handleReset}>
          Reset
        </div>
        <Modal
          onSubmit={() => {
            console.log("submit");
          }}
          onClose={() => {
            console.log("close");
          }}
        />
      </div>
    );
  }
}

export default ToDo;
