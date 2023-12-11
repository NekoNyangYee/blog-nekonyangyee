---
teaser: /JavaScript-callback-function/thumbnail.png
category: JavaScript
title: JavaScript 콜백함수 알아보기
date: 2023-12-12T00:00:00+00:00
time: 00:09
description: JavaScript 콜백함수의 개념과 콜백 지옥에 대해 알아봅니다.
---

안녕하세요. NekoNyangYee입니다.

오늘은 자바스크립트를 쓰시는 분들이라면 무조건 쓰게 되는 것 중 하나인 자바스크립트 콜백함수(`Callback Function`)에 대해 알아보려 합니다.

## 1. 콜백 함수란?

---

> 콜백함수는 함수의 인자로 전달하는 함수입니다.

위 설명은 제가 자바스크립트 관련 게시물을 다룰 때마다 종종 설명했었습니다.

콜백함수(`Callback Function`)란 **파라미터로 함수를 전달**받아, 함수의 내부에서 실행하는 함수입니다.

```javascript
let arrNum = [1, 2, 3, 4, 5];

arrNum.forEach(x => {
    console.log(x * 2);
});

<output>
2
4
6
8
10
```

위 예시 코드는 `forEach`라는 함수를 사용해 배열 내 원소를 순회하면서 모든 원소에 \* 2를 하는 코드입니다. `forEach`라는 함수는 괄호안에 익명함수를 넣어서 `forEach`를 동작시키는데 이 괄호안에 들어가있는 함수를 콜백함수라고 부릅니다.

## 2. 콜백지옥

---

비동기 호출이 계속 되는 경우 일명 '콜백 지옥'이 펼쳐지게 됩니다.

함수의 파라미터로 넘겨지는 콜백 함수가 무한 반복되면서 코드 들여쓰기가 어려울 정도로 깊어지게 되는 현상입니다.

```javascript
//콜백 지옥 예시
function add(x, callback) {
  let sum = x + x;
  console.log(sum);
  callback(sum);
}

add(2, function (result) {
  add(result, function (result) {
    add(result, function (result) {
      console.log("finish!!");
    });
  });
}) <
  output >
  4;
8;
16;
```

이러한 콜백 지옥을 해결할 수 있는 방법은 `Promise`객체를 사용하여 콜백 니족에서 탈출시킬 수 있습니다.

```javascript
function add(x) {
    return new Promise((resolve, reject) => {
        let sum = x + x;
        console.log(sum);
        resolve(sum);
    })
}

add(2).then(result => {
    return add(result);
}).then(result => {
    return add(result);
}).then(result => {
    console.log('finish!!');
})

<output>
4
8
16
finish!!
```

`Promise`객체에 대해 간략히 설명하자면 `Promise`안에 성공적으로 수행한경우 `resolve`, 실패인 경우는 `reject`를 전달하는 함수가 있습니다.

`MDN`에 따르면..

> **프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다. 다만 최종 결과를 반환하지는 않고, 대신 프로미스를 반환해서 미래의 어떤 시점에 결과를 제공합니다.**

프로미스는 비동기 호출 시, 마치 동기 호출 처럼 값을 반환할 수 있다는 문구에 집중해보자.
즉, `resolve`를 통해 전달 받은 값을 반환하여 사용해야 합니다.

## 마무리

---

평소에 프로젝트하면서 콜백함수를 굉장히 많이 사용했던 거 같은데 그 당시에는 뭣도 모르고 사용했었습니다. 하지만 이렇게 개념을 제대로 다뤄보니 이해가 가는 것도 있었고 아닌 것도 있었습니다. 나중에 콜백함수를 사용하다가 까먹은 부분이 있으면 다시 글 보면서 공부해야겠습니다ㅋㅋㅋ

`Promise`객체 관련 설명은 추후 비동기 함수와 같이 정리해보겠습니다!!
