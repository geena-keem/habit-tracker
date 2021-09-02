import React, { memo } from 'react';

// memo: PureComponent와 비슷하다
const HabitAddForm = memo((props) => {
  // PureComponent는 props와 state안에 들어 있는 데이터가 최상위에 있는 데이터가 변하지 않으면
  //                 render함수가 호출되지 않는다. 즉, re-rendering을 하지 않는다!
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log('submit');
    // 페이지가 리로딩되는 이유는 기본적으로 submit이 발생하면
    // 페이지가 리프레시가 되거나 다른 페이지로 가는걸 예상하기 때문이다.
    // console.log(this.inputRef.current.value);

    const name = inputRef.current.value;
    name && props.onAdd(name);

    // input입력 후 초기화
    // this.inputRef.current.value = '';
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="add-input"
        type="text"
        placeholder="Habit"
      />
      <button className="add-button">ADD</button>
    </form>
  );
});

export default HabitAddForm;
