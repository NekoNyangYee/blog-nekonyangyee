---
teaser: /JavaScript-Lexical-Scope/thumbnail.avif
category: JavaScript
title: JavaScript 렉시컬 스코프 알아보기
date: 2024-08-06T00:00:00+00:00
time: 22:48
description: JavaScript의 핵심 렉시컬 스코프에 대해 설명합니다.
---

![thumbnail](/JavaScript-Lexical-Scope/thumbnail.avif)

안녕하세요. NekoNyangYee입니다.

저번 글에서 클로져에 대해 설명했었습니다만. 클로져를 알기 전에 먼저 렉시컬 스코프라는 개념을 먼저 알고 갔어야 했는데 이 부분을 미쳐 설명하지 못했습니다. 그래서 오늘은 렉시컬 스코프에 대해 설명해보려합니다.

## 1. 렉시컬 스코프(Lexical Scope)란?

---

함수가 어디서 호출되었는지가 아닌, `어디서 선언되었는지에 따라 결정되는 것`을 말합니다.

- 즉, 함수가 어디서 선언되었는지에 따라 상위 스코프가 결정되는 것을 말합니다.

> - 중요한 점은 함수의 호출이 아닌 선언을 어떻게 어디에 했느냐에 따라 결정된다는 것입니다.

- 다른 말로 정적 스코프(Static Scope)라고 부릅니다.

```javascript
function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable); // innerFunction이 선언된 위치에서 outerVariable을 참조
  }

  return innerFunction;
}

const myInnerFunction = outerFunction();
myInnerFunction(); // "I am from the outer function" 출력
```

위 코드를 예시로 설명하겠습니다.

코드 구조를 보시면 `outerFunction`함수가 선언되어있고, 내부에는 `outerVariable` 변수와 `innerFunction` 함수가 선언되어있는 것을 볼 수 있습니다.

### 실행 순서

1. 먼저 `outerFunction`함수가 실행되어 안에 `outerVariable` 변수가 선언된 후 초기화가 됩니다.

2. 그 후 바로 및에 있는 `innerFunction` 함수가 선언이 됩니다.

> 이 때 `innerFunction`함수는 본인이 어디에 선언되었는지 렉시컬 환경 즉, 자기 자신이 어디서 태어났는지를 알 수 있습니다.

3. `innerFunction` 함수를 반환합니다.

4. 리턴한 `innerFunction` 함수를 `myInnerFunction` 변수에 할당하고 호출합니다.

5. 호출되면 `innerFunction` 이 자신이 기억하는 환경에서 outerVariable 변수를 찾아 출력합니다.

## 추가 궁금증

---

여기서 궁금해할만한게 return innerFunction;부분에 `innerFunction` 은 함수인데 return innerFunction(); 이렇게 해야 하는거 아닌가? 라는 생각이 들 수 있다. 이 둘의 차이점은 다음과 같습니다.

- `return innerFunction;` : 이 친구는 함수 자체를 반환하는 코드입니다. 이렇게 하면 외부에서 `innerFunction` 을 접근이 가능하고, 자신이 선언된 환경의 변수에 접근이 가능해집니다. 이거는 나중에 클로져하고도 연관이 있습니다.(클로져는 지난번에 설명드렸습니다.)

- `return innerFunction();` : 이 친구는 함수의 결과를 반환하는 코드입니다

- 그래서 함수가 아닌 그 안에 값만 얻을 수 있습니다.
