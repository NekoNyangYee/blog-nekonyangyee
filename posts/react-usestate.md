---
teaser: /React-useState/thumbnail.png
category: React
title: (React) useState() Hooks 기본편
date: 2023-10-22T00:00:00+00:00
time: 22:43
description: useState() Hooks 기초와 간단한 응용을 알아봅니다.
---

![thumbnail](/React-useState/thumbnail.png)

안녕하세요. NekoNyangYee입니다.

지금 이 글을 보고 계시다면 `HTML`, `CSS3`, `JavaScript`를 적어도 기초는 하고 이제 막 리액트라는 UI 라이브러리를 입문 하셨을거라 생각됩니다.

그래서 오늘 주제는 리액트를 입문하셨으면 가장 처음 마주하게 되는 `React Hooks` 중 하나인 `useState()`에 대해 알아보겠습니다.

## 1. useState()란?

---

> **컴포넌트의 상태를 간편하게 생성하고 업데이트 해주는 훅스입니다.**

_\*여기서 state란?:_ 쉽게 말해 컴포넌트의 상태입니다.

### 1-1 구조

```javascript
const [state, setState] = useState(초기값);
```

`state`를 생성과 동시에 가져야할 초기값을 `useState()`안에 넣어주면 `state`, `setState`를 배열로 반환해줍니다.

- `state`: 현재 상태입니다.

- `setState`: 변경 할 상태입니다.

`setState`와 `state`는 마음대로 이름을 바꿀 수 있으며, `setState`를 이용해서 `state`를 변경하면 해당 컴포넌트는 화면에 다시 렌더링이 됩니다.

> `setState`쓰실 때는 camelCase로 쓰는게 원칙입니다!

예시를 통해 알아보겠습니다.

```javascript
import { useState } from "react";

export default function useStatePage() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span> 현재 누른 횟수: {count} </span>
      <button onClick={handleClick}>Up</button>
    </div>
  );
}
```

이렇게 작성하고 `Up`버튼을 누를 때 마다 `handleClick`함수가 작동하게 되고, `count`라는 사태에 + 1을 하게 됩니다.

예시 하나 더 보겠습니다.

```javascript
import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((preNum) => preNum + 1);
  };

  const onDecrease = () => {
    setNumber((preNum) => preNum - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

위 코드 같은 경우는 초기값이 0인 `Counter`함수입니다. `+1`버튼을 누르면 `onIncrease`함수가 실행되어 현재 상태의 `+ 1`을, 반대로 `-1` 버튼을 누르게 되면 `onDecrease`라는 함수가 실행되어 현재 상태의 `- 1`을 해주게 됩니다.

다음에 기회가 된다면 좀 더 깊게 파헤쳐보도록 하겠습니다. 감사합니다😄
