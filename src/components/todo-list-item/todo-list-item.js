import React, { Component } from "react";

import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onDeleted}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.onMarkImportant}
        >
          <i className="fas fa-exclamation"></i>
        </button>
      </span>
    );
  }
}
