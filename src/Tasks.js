import React from "react";

function Tasks(props) {
  const handleDelete = (event) => {
    event.target.parentNode.style = "display: none";
  };

  const handleCheck = (event) => {
    event.target.nextSibling.style = "text-decoration: line-through";
  };
  return (
    <div className="list-item">
      <input type="checkbox" className="checkbox" onClick={handleCheck}></input>
      <p className="text">{props.data}</p>

      <div className="del" onClick={handleDelete}>
        -
      </div>
    </div>
  );
}

export default Tasks;
