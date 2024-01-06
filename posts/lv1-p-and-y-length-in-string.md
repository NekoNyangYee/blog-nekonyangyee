---
teaser: /programmers-logo-lv1.jpeg
category: 프로그래머스
title: Lv.1 문자열 내 p와 y의 개수 (JavaScript)
date: 2024-01-06T00:00:00+00:00
time: 13:05
description: 문자열 내 p와 y의 개수 문제에 대한 풀이입니다.
---

## 문제 설명

---

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

### 제한사항

- 문자열 s의 길이 : 50 이하의 자연수

- 문자열 s는 알파벳으로만 이루어져 있습니다.

### 입출력 예

- "pPoooyY" => true

- "Pyy": false

### 나의 풀이

```javascript
function solution(s) {
  let a = s.toLowerCase();
  let arr = a.split("");
  return arr.filter((e) => "p" === e).length ==
    arr.filter((a) => "y" === a).length
    ? true
    : false;
}
```

### 나의 풀이 설명

> **a라는 변수에 s로 들어오는 모든 문자열을 소문자로 바꾼 후 배열로 글자 하나하나 분리 시켜넣은 걸 arr 라는 변수에 넣은 다음 filter 메서드를 사용하여 p와 y의 갯수만 따로 출력하여 갯수를 비교한 다음 true/false로 나누었습니다.**

### 다른 사람 풀이

```javascript
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
```

이 풀이과정을 보니 저와 전반적으로 구조는 비슷하지만 대문자로 먼저 바꾸고, P와 Y로 `split` 메서드로 분리후 길이 비교를 한 코드였습니다... `filter()`는 굳이 쓸 필요는 없었던거 같네요ㅋㅋㅋ
