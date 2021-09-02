import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  }, [count]);
  // count가 변경될 때마다 함수가 호출된다.
  // [] 빈 배열을 전달하면 처음에만 호출된다.

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

// 클래스형 컴포넌트에서 멤버변수는 클래스가 만들어질 때 한번만 만들어지고 render 함수만 반복적으로 호출된다.

// 함수형 컴포넌트는 컴포넌트가 변경이 되면 코드블럭 전체가 계속 반복적으로 호출된다.
//  => props나 state가 변경이 되면 반복적으로 호출!

// onClick에 전달한 콜백함수는 처음 불려질 때 새로운 함수(오브젝트)가 만들어지고
// 다음 state가 변경이 되어서 콜백함수가 호출되면 새로운 오브젝트가 만들어진다.

// useState: 리액트 훅에서 제공하는 API 중에 하나로 useState를 사용하면 리액트가 알아서 자동으로 기억하고 있다.
//           => useState를 아무리 많이 호출해도 컴포넌트에 연결된 state는 따로 저장이 되어 있어 계속 동일한 값을 받아올 수 있다.

// useRef: createRef처럼 매번 호출할 때마다 새로운 레퍼런스를 만들지 않고
//         한번만 만들고 메모리에 저장 후 재사용한다.

// useCallback: useCallback을 사용하게 되면 콜백함수가 계속 반복해서 호출이 되어도 동일한 콜백함수를 전달한다.
//               => 계속 업데이트되는 사이드 이펙트를 방지할 수 있다!

// useEffect: componentDidMount와 componentDidUpdate를 결합한 것이다.
//            컴포넌트가 마운트 되었을 때 업데이트가 될 때마다 호출된다.
