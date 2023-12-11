---
teaser: /setTimeOut-setInterval/thumbnail.jpeg
category: JavaScript
title: setTimeout, setInterval 타이머 생성 함수 기초편
date: 2023-11-03T00:00:00+00:00
time: 19:29
description: setTimeout, setInterval 타이머 생성 함수에 대해 설명합니다.
---

이번 포스트에서는 자바스크립트의 타이머 함수인 `setTimeout`이랑 `setInterval`에 대해 알아보겠습니다.

## 0. 타이머 함수란?

---

자바스크립트 빌트인 함수가 아닌, 브라우저/`Node.js`환경에서 제공하는 전역 객체의 메서드로 제공하는 호스트 객체입니다.

- 타이머 **생성** 함수: `setTimeout`, `setInterval`

- 타이머 **제거** 함수: `clearTimeout`, `clearInterval`

## 1. setTimeout

---

`setTimeout`은 일정 시간이 지난 후에 함수를 실행해주는 타이머 생성 함수입니다.

```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

### 1-1 매개변수

- `func|code`: 실행하고자 하는 코드로, 대부분 함수가 들어갑니다.

- `delay`: 실행 전 대기 시간으로, 단위는 밀리초, 기본값은 0입니다. 대부분 여기까지 많이 씁니다.

- `arg1`, `arg2…`: 함수에 전달할 인수들로, IE9 이하에선 지원하지 않습니다.

EX)

```javascript
function sayHi() {
  alert("안녕하세요.");
}

setTimeout(sayHi, 1000);
```

`setTimeout`함수의 기본 구조입니다. 위와 같이 입력하고 컴파일 할 경우 `sayHi`함수가 1000m/s(1초)뒤에 `안녕하세요.`라는 문구가 뜰 것입니다.

이 외에도 함수에 인자를 넘겨 줄 수도 있습니다.

```javascript
function sayHi(who, phrase) {
  alert(who + " 님, " + phrase);
}

setTimeout(sayHi, 1000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요.
```

위와 같이 작성하고 실행해주면 1초 뒤에 `who`자리에 `"홍길동"`, `phrase`에 `"안녕하세요."`가 담긴 `sayHi`함수가 실행되게 됩니다.

## 2. setIntertval

---

```javascript
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

기본 구조는 `setTimeout`과 동일합니다. 다만 차이점이라고 하면 `setIntertval`는 함수를 **주기적**으로 실행합니다.

함수 호출을 중단하려면 `clearInterval(timerId)`을 사용하면 됩니다.

EX)

```javascript
// 2초 간격으로 메시지를 보여줌
let timerId = setInterval(() => alert("째깍"), 2000);

// 5초 후에 정지
setTimeout(() => {
  clearInterval(timerId);
  alert("정지");
}, 5000);
```

위 코드를 실행해보면 2초에 한번씩 `alert("째깍")`이 실행되며 이러한 함수가 5초뒤 `clearInterval(timerId);`라는 생성자 제거 함수로 인해 멈추게 됩니다.

## 마무리

---

여기까지 `setTimeout`, `setInterval` 타이머 생성 함수 기초에 대해 알아보았습니다. 다음에는 타이머 제거 함수인 `clearTimeout`, `clearInterval`에 대해 알아보겠습니다. 그리고 한가지 더, `setTimeout`, `setInterval`는 완벽한 시간을 보장하지 않는다는 사실을 알고 있습니까? 제가 이 부분을 나눠서 설명하는 이유가 이것 때문입니다. 그 부분은 다음에 심화편에서 알아보겠습니다.
