import React, { Component } from "react";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDay: new Date(),
    };
  }

  render() {
    const { currentDay } = this.state;
    return <div>{currentDay.toString()}</div>;
  }
}

export default Calendar;
