---
teaser: /JavaScript-How-Works/thumbnail.jpg
category: JavaScript
title: JavaScript는 어떻게 동작할까? 1편
date: 2023-11-12T00:00:00+00:00
time: 20:19
description: 초심으로 돌아가 JavaScript는 어떻게 동작하는지에 대해 알아봅니다.
---

![thumbnail](/JavaScript-How-Works/thumbnail.jpg)

안녕하세요. NekoNynagYee입니다.

요즘 공부를 하고 있는 와중에 그런 생각이 들었습니다.

> **자바스크립트는 어떻게 동작하더라?**

순간 이 생각이 드니까 이것도 제대로 모르면서 자바스크립트 메서드 관련 글만 쓰려고 했으니 넥스트를 얼마전에 입문한 저로써 자신을 다시 돌아보는 시간이었습니다...

자 그래서!!ㅋㅋㅋㅋ 오늘 주제는 다시 초심으로 돌아가서 자바스크립트는 어떤 언어이며 어떻게 동작하는지를 알아보려 합니다!!

이번 게시물은 <a href="https://tristy.tistory.com/51">참고</a> 여기서 참고해서 제가 이해한 것을 바탕으로 작성하였습니다.

## 1. 자바스크립트의 전체적인 동작 구조

---

`NodeJS`를 설명할 때 제가 `JavaScript`는 웹 페이지에 글 넣고, 그림 넣는 HTML이라는 언어를 조작해서 동적으로 바꿔주게 하는 언어입니다. 라고 설명드린 부분이 있었습니다. 그럼 이 자바스크립트가 어떻게 동작을 해서 이렇게 사이트를 동적으로 움직이게 하는지 전체적인 구조를 알아보려합니다.

![js-heap-stack](/JavaScript-How-Works/js-heap-stack.png)

먼저 자바스크립트를 실행하기 위해서는 **자바스크립트 엔진**이 필요합니다.

자바스크립트 엔진의 종류에는 `V8`, `Rhino`, `SpiderMonkey`등 여러 엔진이 있지만
그 중에서 대표적인 것은 구글에서 제작한 `V8`엔진입니다. 위 사진은 자바스크립트를 실행할 수 있게 해주는 V8 엔진을 간략하게 표현한 그림입니다.

엔진은 크게 `Memory Heap`, `Call Stack` 2가지로 구성되어있습니다. `Memory Heap`(메모리 힙)은 메모리가 할당되는 곳이고, `Call Stack`(호출 스택)은 코드 실행에 따라 스택이 하나씩 차곡차곡 쌓이는 곳입니다.

### 여기서 용어 정리!!

- `Stack`: 후입선출(LIFO)로 마지막에 들어간 것이 먼저 나가는 방식입니다.

그리고 자바스크립트를 사용하다 보면 `setTimeOut()`이나 `setinterval()`과 같은 타이머 생성자 함수 외에도 여러 API를 사용합니다.

> **그럼 과연 이 API들은 자바스크립트 엔진에서 자체적으로 지원하는 걸까요?**

아닙니다. 이러한 API들은 웹 브라우저 혹은 `NodeJS`와 같은 **자바스크립트 런타임**에서 지원 해주는 **WEB API**입니다. 이 API는 브라우저마다 지원될수도 안될수도 있기 때문에 항상 사용하기전에 지원여부를 따져보고 써야 합니다.

![event-loop-callback-queue](/JavaScript-How-Works/event-loop-callback-queue.png)

한가지 더, 자바스크립트는 아까도 그렇고 전에 설명한 `setTimeOut()`이나 `setinterval()`과 같은 비동기 코드 작성이 가능함에도 불구하고, 자바스크립트는 비동기 코드를 처리한다라는 개념이 없습니다. 그런데도 어떻게 비동기 코드를 처리할 수 있었을까요?

바로 `WEB API`와 더불어 웹 브라우저나 런타임에서 `Event Loop`와 `Callback Queue`로 인해 가능했던 거였습니다. 즉, 위와 같은 동작 구조가 탄생할 수 있게 된 것입니다.

### 여기서 용어 정리!!

- `Callback Queue`: `Callback Queue`는 비동기 함수들을 보관하는 장소로 `Event Loop`에서 비동기 함수를 꺼내기 전까지는 계속 `Queue`방식으로 보관하게 됩니다.

  - `Queue`: 선입선출(FIFO)로 먼저 들어간 것이 먼저 나가는 방식입니다.

- `Event Loop`: `Call Stack`과 `Callback Queue`를 상태를 계속 감시하며 `Call Stack`에 함수들이 존재하지 않는다면 `Callback Queue`에 있는 비동기 함수들을 `Call Stack`에 밀어 넣고 그 후 `Call Stack`에서 비동기 함수를 실행시키게 됩니다.

## 2. 자바스크립트는 그래서 무슨 언어인가요?

---

아까 위에서 V8 엔진의 구조를 간단하게 봤을 때 하나의 `Call Stack`(호출 스택)과 하나의 `Memory Heap`(메모리 힙)으로 이루어진 것을 확인할 수 있었습니다.

`Call Stack`은 기본적으로 자바스크립트 코드를 위에서부터 한줄 한줄 해석해가며 우리가 짠 코드를 순서대로 돌아갈 수 있도록 보장하는 데이터 구조입니다.

`Stack`을 사용하기 때문에 위에서 용어 정리 했듯이 `LIFO`(후입 선출)의 구조입니다.

`Call Stack`에 쌓이는 하나의 사각형을 스택 프레임(`Stack Frame`)이라고 하는데, 만약 함수가 실행이 된다면은 스택의 맨 위에 있던 스택 프레임을 가리키는 중이며, 함수의 실행이 끝날 때 해당 스택 프레임을 `Call Stack`에서 제거하게 됩니다.

예시로 아래 코드는 사각형 넓이 구하는 코드입니다.

```javascript
function multiply(x, y) {
  return x * y;
}
function printSquare(x) {
  var s = multiply(x, x);
  console.log(s);
}
printSquare(5);
```

![callstack](/JavaScript-How-Works/callstack.png)

맨 처음에는 자바스크립트 코드가 실행되지 않았기에 첫번째 콜 스택에는 아무것도 없었지만 코드를 실행하며 가장 먼저 `printSquare`를 호출하기 때문에 `printSquare`를 `Push` 해서 스택에 쌓고 읽어가다 그 ㄴ다음에 만난 `multiply`를 `Push` 해서 스택에 쌓습니다. 더 이상 쌓을 함수가 존재하지 않는다면 맨 위의 스택 프레임부터 하나씩 처리하며 출력하게 됩니다.

그런데 만약에 스택을 무한대로 호출해서 초과시킨다면 어떻게 될까요? 결과는 Maximum call stack size 에러가 발생하게 됩니다.

![Maximum-call-stack-size](/JavaScript-How-Works/Maximum-call-stack-size.png)

![Stack-Overflow](/JavaScript-How-Works/Stack-Overflow.png)

무한 루프가 될 때를 그림으로 표현하면 위의 그림처럼 표현할 수 있습니다. `Call Stack`은 <u>정해진 스택 사이즈가 존재</u>하고, 하나씩 쌓이기 스택 프레임(`Stack Frame`) 때문에 `Call Stack`의 정해진 용량을 초과하게 되면 에러가 발생하게 됩니다. 이것을 **Stack Overflow**(스텍이 흘러넘침)라고 말합니다.

> 이처럼 자바스크립트는 <u>**하나의 `Call Stack`을 가지고 코드를 순차적으로 처리하기 때문에 한 번에 하나의 명령어만 실행될 수밖에 없습니다.**</u> 때문에 자바스크립트는 **단일 스레드**이며 **동기식 언어**라고 할 수 있습니다.

나머지 내용은 2편에서 다루겠습니다.
