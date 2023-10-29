---
teaser: /programmers-logo-lv2.jpg
category: 프로그래머스
title: Lv.2 JadenCase 문자열 만들기 (JavaScript)
date: 2023-10-29T00:00:00+00:00
time: 18:32
description: JadenCase 문자열 만들기 문제에 대한 풀이입니다.
---

## 문제 설명

---

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한사항

- s는 길이 1 이상 200 이하인 문자열입니다.

- s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.

  - 숫자는 단어의 첫 문자로만 나옵니다.

  - 숫자로만 이루어진 단어는 없습니다.

  - 공백문자가 연속해서 나올 수 있습니다.

### 입출력 예

- s: "3people unFollowed me"

- return: "3people Unfollowed Me"

- s: "for the last week"

- return: "For The Last Week"

### 나의 풀이

```javascript
function solution(s) {
  return s
    .split(" ")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join(" ");
}
```

### 나의 풀이 설명

> **s라는 문자열을 받은 후에 배열로 단어별로 분리하고 `map`메서드로 각 요소를 순회하면서 각 단어의 0번째 요소를 대문자로 바꾼거랑 각 단어의 1번째 요소 이후로 모두 소문자로 바꾼거랑 합친다.**

### 다른 사람 풀이

```javascript
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
```

저랑 풀이과정이 비슷하지만 어떤 분은 `substring` 메서드를 이용해 풀었더군요! 지식 하나 얻어갑니다!!
