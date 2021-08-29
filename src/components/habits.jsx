import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
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

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
