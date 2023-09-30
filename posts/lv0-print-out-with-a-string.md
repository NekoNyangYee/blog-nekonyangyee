---
teaser: /programmers-logo-lv0.png
category: ⌨️ 프로그래머스
title: Lv.0 문자열 붙여서 출력하기 (JavaScript)
date: 2023-08-30T00:00:00+00:00
time: 20:57
description: 문자열 붙여서 출력하기 문제에 대한 풀이입니다.
---

## 문제 설명

---

두 개의 문자열 `str1`, `str2`가 공백으로 구분되어 입력으로 주어집니다.
입출력 예와 같이 `str1`과 `str2`을 이어서 출력하는 코드를 작성해 보세요.

### 제한 사항

- 1 ≤ `str1`, `str2`의 길이 ≤ 10

### 입출력 예

입력 #1

- `apple pen`

출력 #1

- `applepen`

입력 #2

- `Hello World!`

출력 #2

- `HelloWorld!`

### 나의 풀이

```javaScript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    console.log(str1 + str2)
});
```

### 다른 사람 풀이

```javaScript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const strArr = line.split(' ')
    console.log(strArr.join(''))
})
```
