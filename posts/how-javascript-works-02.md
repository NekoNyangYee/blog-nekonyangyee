---
teaser: /JavaScript-How-Works-02/thumbnail.jpg
category: JavaScript
title: JavaScript는 어떻게 동작할까? 2편
date: 2023-12-02T00:00:00+00:00
time: 23:38
description: 초심으로 돌아가 JavaScript는 어떻게 동작하는지에 대해 알아봅니다.
---

![thumbnail](/JavaScript-How-Works-02/thumbnail.jpg)

지난 시간에 이어서 자바스크립트는 어떻게 동작하는지에 대해 알아보겠습니다.

이번 글은 전편 게시물을 보고 오면 좀 수월하게 보실 수 있을겁니다.

<a href="https://taehyun-blog.vercel.app/how-javascript-works">JavaScript는 어떻게 동작할까? 1편</a>

## 3. 자바스크립트는 비동기 처리 가능한가요?

---

우리가 쓰고 있는 자바스크립트는 제대로 다뤄보신 분이 아니면 대부분 웹에서만 쓰일거라 생각할겁니다. 저도 그랬었죠..ㅎㅎ 하지만 웹에서도 사용하지만 `Node js`같은 각종 런타임 환경에서도 사용됩니다.

자바스크립트는 `Event loop` & `Callback Queue` 특징을 가지고 있습니다.

> **1편에서 용어 정리한 바 있지만 까먹으셨거나 보기 좀 귀찮다 하시는 분 들을 위해 쉽게 비유해서 `Callback Queue`는 무대 올라가기 전 머무는 대기실, `Event loop`는 `Call Stack`이라는 무대에 아무도 없는지 확인하고 대기실에 있는 `Callback Queue`들을 하나 둘씩 차례대로 `Call Stack`이라는 무대로 보낸다고 보심 될것 같습니다.**

예시를 보도록 하겠습니다

```javascript
function foo() {
  console.log("1");
}

function foo2() {
  console.log("2");
}

foo();
setTimeout(function () {
  console.log("3");
}, 2000);
foo2();
```

자 퀴즈를 내도록 하겠습니다. 위 코드가 실행될 때 나오게 되는 숫자는 1, 3, 2 순서대로 나올까요?

그렇게 생각하셨다면 오답입니다. 정답은 1, 2, 3 순서대로 나오게 됩니다 왜 그러는지 아래 순서로 풀이하겠습니다.

1.  제일 먼저 `foo()`라는 함수가 `Call Stack`에 쌓이게 됩니다.

2.  그다음 `foo()` 함수 안에 있는 `console.log()`가 `Call Stack`에 쌓이게 됩니다.

3.  콘솔 창에 1을 출력합니다.

4.  `foo()` 함수는 종료되었으니 `Call Stack`에서 빠지게 되고, `setTimeOut()`이 `Call Stack`으로 들어옵니다.

5.  `setTimeOut()`은 비동기 함수이기 때문에 Web API에서 처리하도록 보냅니다. 그리고 그다음 함수인 foo2() 함수를 불러옵니다.

6.  `foo2()` 함수 안에 있는 `console.log()`가 `Call Stack`에 쌓이게 됩니다.

7.  콘솔 창에 2를 출력합니다.

8.  `foo2()`함수는 종료되었으니 `Call Stack`에서 빠지게 됩니다. 이제 들어올 함수가 없네요. 그런데 아직 비동기 함수를 처리하고 있는게 있습니다. `setTimeOut()`의 시간을 2초로 설정해 두었으니 2초간은 `Web API`에서 처리하게 됩니다. 2초가 지난 후에는 `setTimeOut()`의 콜백 함수를 `Callback Queue`로 보내게 됩니다.

> **주의: `Call Stack`에 있던` foo2()` 함수가 종료되고 나서야 `Web API`를 처리하는 게 아니고 `setTimeOut()`이 `Web API`로 넘어간 시점부터 처리되고 있는 것입니다. 즉, `Call Stack`에서는 `foo2()` 함수를 처리하고 있었고, `Web API`에서는 `setTimeOut()`을 2초 동안 돌리고 있었다는 겁니다.**

9. 이제 `Event Loop`는 `Callback Queue`에 있는 콜백 함수를 `Call Stack`으로 보내서 처리하기 위해 `Call Stack`이 비어있는지를 검사합니다. 만약 `Call Stack`이 비어 있다면 `Callback Queue`에 있던 함수를 `Call Stack`으로 보내서 처리하게 됩니다.

10. `Call Stack`에 있던 `console.log()`를 콘솔에 출력하는 것으로 프로그램이 종료됩니다.

## 마무리

---

이렇게 자바스크립트가 어떻게 동작하는지에 대해 작성해보았습니다. 아직 배우는 입장이다보니 이곳저곳 돌아다니면서 참고하며 글을 썼습니다. 다음에는 개념이 익숙해지면 좀더 깊게 파서 글을 작성해보도록 하겠습니다.
