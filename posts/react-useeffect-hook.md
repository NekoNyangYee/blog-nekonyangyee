---
teaser: /ReactuseEffect/react-useEffect-hook.png
category: 💻 개발 일기
title: React | React Hooks => useEffect()에 대해 알아보기
date: 2023-08-05T20:12:00+00:00
description: 리액트의 useEffect Hooks에 대해 설명합니다.
---

안녕하세요! NekoNyangYee입니다! <br />
오늘 소개할 것은 바로 `React Hooks` 중 하나죠. 바로 `useEffect`에 대해 알아보도록 하겠습니다!

# useEffect()

---

- 리액트 컴포넌트가 <u>**렌더링이 될 때마다**</u> 특정 작업을 실행할 수 있도록 하는 `Hooks`입니다.

- 컴포넌트가 `mount` 됐을 때

- 컴포넌트가 `unmount` 됐을 때

- 컴포넌트가 `update` 됐을 때 특정 처리가 가능합니다.

> ### 페이지가 처음 렌더링 되고 난 후 `useEffect`는 <u>**무조건 한번만 실행**</u>된다. <br /> `useEffect`에 배열로 저장한 `useState`의 값이 변경되면 실행하게 된다.

- 즉 <u>**렌더링 혹은 변수의 값 또는 오브젝트가 달라지게 되면 그것을 감지하고 업데이트 해주는 함수**</u>입니다.

- useEffect는 **콜백함수를 부르게 되며**, 렌더링 혹은 값, 오브젝트의 변경에 따라 어떤 함수 혹은 여러개의 함수들을 동작시킬 수 있습니다.

# useEffect() 사용법

---

```typescript
useEffect( function, deps )
```

_기본 형태_

- `fumction`: 수행하고자 하는 작업

- `deps` 배열 형태이며, 배열 안에는 검사하고자하는 특정 값 혹은 빈 배열을 집어넣는다.

```typescript
import React, { useEffect } from "react";

useEffect(() => {
  console.log("마운트 될 때만 실행된다");
}, []);
```

_간단한 예시_

```typescript
import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  // useState로 number 변수 값을 0으로 초기화
  const [number, setNumber] = useState(0);

  // useState로 name 변수 값을 'Josh'으로 초기화
  const [name, setName] = useState("josh");

  useEffect(() => {
    console.log("hello");
  });

  const counter = () => setNumber(number + 1);
  const nameChanger = () => {
    setName("Mike");
  };

  return (
    <div>
      <button onClick={counter}>click</button>
      <button onClick={nameChanger}>change Name</button>
      <div>{number}</div>
      <div>{name}</div>
    </div>
  );
};

export default App;
```

![useEffect-result](/ReactuseEffect/useeffect-result-01.png)

- `click` 버튼을 누르면 아래의 숫자가 올라간다.

- `change Name` 버튼을 누르면 이름이 변경된다.

- 렌더링이 끝난 후 `hello`라는 문자가 콘솔에 출력된 것을 알 수 있다.

## click 버튼을 눌러보자 (1)

```typescript
# useEffect( () => {}) 사용

  useEffect(() => {
    console.log('hello');
  })
```

_어떤 값이든 변하게 되면 `useEffect`는 실행될 것이다._

![useEffect-result](/ReactuseEffect/useeffect-result-02.png)
_`click` 버튼을 눌렀을 때, `console`창에 `hello`가 한번 더 출력 되었다._

> 그렇다. `Dependency`와 상관없이 어떤 값이든 변화하기만 하면 `useEffect()`가 실행된다.

## click 버튼을 눌러보자 (2)

```typescript
# useEffect( () => {} , [] ); 사용

  useEffect(() => {
    console.log('hello');
  },[])
```

_deps 추가_

![useEffect-result](/ReactuseEffect/useeffect-result-03.png)

> `useEffect`에 대괄호[]를 사용하면, 렌더링 후 무조건 한번만 실행된 후 브라우저가 재렌더링이 되기전까지 더 이상 실행되지 않는다.

## click 버튼을 눌러보자 (3)

```typescript
# useEffect( () => {} , [name] ); 사용, Dependency가 들어간 경우

  useEffect(() => {
    console.log('hello');
  },[name])
```

_렌더링 후 무조건 한 번은 `useEffect()`가 실행된다 <br />즉, 렌더링 후 무조건 한 번은 `hello`가 출력된다._

✅ **click 버튼을 눌렀을 때 ?**

![useEffect-result](/ReactuseEffect/useeffect-result-04.png)

- 이론상 `number`의 상태(`state`)가 변하더라도 `useEffect`는 실행되지 않는다.

- 즉, `click` 버튼을 눌러 `number`의 `state`가 변하더라도 `useEffect`가 실행되지 않으므로 `hello`는 출력되지 않는다.

✅ **change Name 버튼을 눌렀을 때 ?**

![useEffect-result](/ReactuseEffect/useeffect-result-05.png)

> **`Dependency` 안에 변수들을 지정하게 되면 다른값들과 상관없이 지정된 값이 변해야만 `useEffect()`가 실행된다. <br />`Dependency`는 배열로 이루어져 여러 변수를 `Dependency`로 사용할 수 있다.**
