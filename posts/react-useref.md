---
teaser: /ReactuseRef/thumbnail.png
category: React
title: (React) useRef() Hooks 기본편
date: 2023-11-06T00:00:00+00:00
time: 15:08
description: useRef() Hooks 기초와 간단한 응용을 알아봅니다.
---

![thumbnail](/ReactuseRef/thumbnail.png)

안녕하세요 NekoNynagYee 입니다.

오늘은 직접 객체에 접근을 해주는 `useRef()` 훅스에 대해 알아보려 합니다.

제 설명에 좀 더 보충해서 알고 싶다 하시면 아래 공식문서 링크로 가셔서 보시면 될 거 같습니다.

<a href="https://ko.reactjs.org/docs/hooks-reference.html#useref">`useRef` 공식문서</a>

## 1. useRef()

---

먼저 공식문서에 나와있는 설명입니다.

> **`useRef` 는 `.current` 프로퍼티로 전달된 인자(`initialValue`)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.**

여기서 `Ref`는 참조하다의 뜻으로 `useRef` 는 저장공간 또는 DOM 요소에 접근하기 위해 사용하는 `React Hooks`입니다.

## 2. 예시 1 - 버튼 클릭 시 텍스트 변경

---

<iframe src="https://codesandbox.io/embed/silly-bessie-sg9dl2?fontsize=14&hidenavigation=1&theme=dark"
    style={{
    width: '100%',
    height: '500px',
    border: '0',
    borderRadius: '4px',
    overflow: 'hidden'
    }}
     title="silly-bessie-sg9dl2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

위 예시는 버튼을 클릭했을 때 버튼의 텍스트를 변경하는 코드입니다.

`useRef` 훅스를 사용하여 버튼 요소에 접근할 수 있는 `ref`인 `buttonRef`를 생성합니다. 그러고나서 버튼을 클릭할 때 `changeText`함수가 호출되어 `텍스트가 변경되었습니다!`라고 버튼의 텍스트를 바꾸게 합니다.

여기까지 이해하셨다면 의문점이 하나 듭니다.

> **그럼 `useState`랑 다를게 없어보이는데? 무슨 차이가 있죠?**

언뜻보면 둘이 같은 기능을 하는것처럼 보이지만 `useState`는 컴포넌트의 상태를 변경해주는 훅스이고 `useRef`는 위에서도 언급했지만, **컴포넌트의 상태를 변경하지 않고 DOM 요소에 접근하여 참조하는거에 포커스되어 있습니다.**

`useState`를 아직 모른다면? <a href="https://taehyun-blog.vercel.app/react-usestate">`useState` 기본편 보러가기</a>

참고하고 오시면 도움 될 것입니다.

## 3. 예제 2 - 버튼 클릭 횟수 상태 관리

---

예시를 하나 더 들어서 이번에는 `useRef`와 `useState`를 같이 섞어서 버튼 클릭 횟수 보는 코드입니다.

<iframe src="https://codesandbox.io/embed/silly-bessie-sg9dl2?fontsize=14&hidenavigation=1&theme=dark"
     style={{
    width: '100%',
    height: '500px',
    border: '0',
    borderRadius: '4px',
    overflow: 'hidden'
    }}
     title="silly-bessie-sg9dl2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

이번 예제는 `useState`로 버튼 클릭 횟수 상태를 관리해주고 `useRef`로 버튼 클릭 횟수를 추적하는 코드입니다. 버튼을 클릭할 때 `handleButtonClick` 함수에서 `useRef`를 사용하여 `buttonClickCount` 값을 증가시키고, `useState`를 사용하여 상태를 업데이트하여 화면에 표시합니다.

## 마무리

---

저에게 `useState`는 익숙하지만 `useRef`는 아직 프로젝트에서 많이 써보지를 못해서 가끔가다가 다시금 찾아보게 만드는 훅스입니다...ㅋㅋㅋ 이번에 정리하면서 개념 정리는 확실하게 된거 같습니다. 다만 앞으로 응용하면서 제 것으로 만들어야하는 과정이 남아있죠.
