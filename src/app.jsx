import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // console.log(`hadleIncrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);

    habits[index].count++;

    // this.setState({ habits: habits });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // console.log(`hadleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;

    habits[index].count = count < 0 ? 0 : count;

    // if (habits[index].count <= 0) {
    //   return;
    // } else {
    //   habits[index].count--;
    // }

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // console.log(`handleDelete ${habit.name}`);

    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    // filter를 사용해서 this.state에 있는 habits을 빙글빙글 돌면서 item을 전달 받은 후
    // item.id와 삭제하고자 하는 habit.id가 동일하지 않은 것들만 골라내서 새로운 배열로 반환한다.

    this.setState({ habits });
  };

  HandleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];

    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });

    this.setState({ habits });
  };

  render() {
    return (
      <>
        {/* totalCount: this.state에 있는 habits배열 중에 
        item.count가 0이상인 것들만 배열을 새로 만든 후 그 길이를 전달해준다. */}
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.HandleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
