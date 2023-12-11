---
teaser: /programmers-logo-lv1.jpeg
category: 프로그래머스
title: Lv.1 내적 (JavaScript)
date: 2023-08-31T00:00:00+00:00
time: 21:37
description: 내적 문제에 대한 풀이입니다.
---

## 문제 설명

---

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 `a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]` 입니다. (n은 a, b의 길이)

### 제한 사항

- a, b의 길이는 1 이상 1,000 이하입니다.

- a, b의 모든 수는 -1,000 이상 1,000 이하입니다

### 입출력 예

- a: `[1,2,3,4]`, b: `[-3,-1,0,2]`, result: 3

- a: `[-1,0,1]`, b: `[1,0,-1]`, result: -2

### 입출력 예 설명

입출력 예 #1

- a와 b의 내적은 `1*(-3) + 2*(-1) + 3*0 + 4*2 = 3` 입니다.

입출력 예 #2

- a와 b의 내적은 `(-1)*1 + 0*0 + 1*(-1) = -2` 입니다.

### 나의 풀이

```javaScript
function solution(a, b) {
    var answer = 0;
    for (let i = 0; i < a.length; i++) {
        answer += a[i]*b[i]
    }
    console.log(answer)
    return answer;
}
```

### 다른 사람 풀이

```JavaScript
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
```

와... 다른 사람 풀이는 보자마자 소름이 돋았습니다.. 분명 평소에 사용하는 메서드 중 하나임에도 불구하고 막상 문제를 풀 때는 저 것을 쓸 생각을 안했다니... 자바스크립트의 메서드는 무조건 써야합니다... 꼭...
