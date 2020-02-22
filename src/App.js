import React, { Component } from 'react';

import DatePicker from './DatePicker';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.onDayClick = this.onDayClick.bind(this);
    this.state = {
      selectedDate: new Date(),
    };
  }

  onDayClick(newDay) {
    const { selectedDate } = this.state;

    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        newDay,
      ),
    });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <div className="App">
        <div className="MainContent">
          <DatePicker fullDate={selectedDate} onDayClick={this.onDayClick} />
        </div>
      </div>
    );
  }
}
