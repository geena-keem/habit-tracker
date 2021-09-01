import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  // PureComponent는 props와 state안에 들어 있는 데이터가 최상위에 있는 데이터가 변하지 않으면
  //                 render함수가 호출되지 않는다. 즉, re-rendering을 하지 않는다!
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();

    // console.log('submit');
    // 페이지가 리로딩되는 이유는 기본적으로 submit이 발생하면
    // 페이지가 리프레시가 되거나 다른 페이지로 가는걸 예상하기 때문이다.

    // console.log(this.inputRef.current.value);

    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);

    // input입력 후 초기화
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    console.log('habitAddForm');
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          placeholder="Habit"
        />
        <button className="add-button">ADD</button>
      </form>
    );
  }
}

export default HabitAddForm;
