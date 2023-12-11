---
teaser: /programmers-logo-lv0.png
category: 프로그래머스
title: Lv.0 배열의 평균값 (JavaScript)
date: 2023-08-29T00:00:00+00:00
time: 19:12
description: 배열의 평균값 문제에 대한 풀이입니다.
---

## 문제 설명

---

정수 배열 `numbers`가 매개변수로 주어집니다. `numbers`의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

### 제한 사항

- 0 ≤ numbers의 원소 ≤ 1,000

- 1 ≤ numbers의 길이 ≤ 100

- 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

### 입출력 예

- `numbers`: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result: 5.5

- `numbers`: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99], result: 94.0

### 입출력 예 설명

입출력 예 #1

- `numbers`의 원소들의 평균 값은 5.5입니다.

입출력 예 #2

- `numbers`의 원소들의 평균 값은 94.0입니다.

### 나의 풀이

```javaScript
function solution(numbers) {
    let answer = 0;
    let sum = 0;

    for (let i = 0; i < numbers.length; i ++) {
        sum += numbers[i]
    }
    return answer = sum / numbers.length;
}
```

### 다른 사람 풀이

```javaScript
function solution(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}
```
