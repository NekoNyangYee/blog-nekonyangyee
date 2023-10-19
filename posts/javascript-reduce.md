---
teaser: /JavascriptReduce/my-blog-thumbnail.jpg
category: JavaScript
title: (JavaScript) reduce메서드에 대해 이해하기
date: 2023-08-04T00:00:00+00:00
time: 17:53
description: 자바스크립트의 reduce메서드에 대해 설명합니다.
---

안녕하세요. NekoNyangYee입니다! 오늘은 JavaScript의 `reduce` 메서드에 대해 알아보려 합니다.

<br />

## Reduce 메서드란?

---

배열의 요소들을 순회하면서 반복적인 연산을 하는 메서드입니다

### 문법

```javascript
// reduce
const numbers = [1, 2, 3, 4];

numbers.reduce((누산값, 현재요소값, 현재요소의index, 현재배열) => {
  return 다음누산값;
}, 초기누산값);
```

`reduce` 메서드는 위 코드와 같이 2개의 파라미터를 가지고 있습니다.

<br />

# 1. 콜백함수: 쉽게말하면 함수안에 함수입니다.

---

- `reduce` 메서드가 특별한 이유는 바로 콜백함수의 펏 번째 파라미터인데, `reduce` 메서드에서 **이 콜백함수가 동작할 때 `return`하는 값이 다음 콜백함수의 첫 번째 파라미터로 전달**되는 것입니다.

- 그러고 <u>**마지막 콜백함수가 동작한 이후의 `return`값이 `reduce`메서드의 `return`값**이 되는 것입니다.</u>

- <u>**`reduce`메서드의 두번째 파라미터에, 첫 번째 콜백함수에서 동작할 누산값을 전달해주는 것입니다.**</u>

### 예시코드

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, el, i) => {
  console.log(`${i}번째 콜백함수`);
  console.log(`acc: ${acc}`);
  console.log(`el: ${el}`);

  return el + acc;
}, 0);

console.log(`-----------`);
console.log(`sum: ${sum}`);
```

![reduce result](/JavascriptReduce/javascript-reduce-01.png)

### 참고

---

- 초기값이라고 불리는 **두 번째 파라미터는 생략 가능**합니다.

- 두 번째 파라미터를 생략하고 콜백 함수만 전달할 경우, **배열의 첫 번째 요소(0번 인덱스)가 초기값이 되어 동작**하게 됩니다.
