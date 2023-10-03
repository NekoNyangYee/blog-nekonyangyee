---
teaser: /programmers-logo-lv1.jpeg
category: ⌨️ 프로그래머스
title: Lv.1 가운데 글자 가져오기 (JavaScript)
date: 2023-09-30T00:00:00+00:00
time: 20:28
description: 가운데 글자 가져오기에 대한 풀이입니다.
---

## 문제 설명

---

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

### 제한사항

s는 길이가 1 이상, 100이하인 스트링입니다.

### 입출력 예

- s: "abcde"

- return: "c"

- s: "qwer"

- return: "we"

### 나의 풀이

```javascript
function solution(s) {
  let answer = "";
  s.length % 2 == 0
    ? (answer = s[s.length / 2 - 1] + s[s.length / 2])
    : (answer = s[Math.floor(s.length / 2)]);
  return answer;
}
```

### 나의 풀이 설명

> **만약 s의 길이를 2로 나눈 나머지가 0이라면, answer라는 변수에 (s배열의 s의길이 / 2 - 1) + (s배열의 s의길이 / 2)번째 인덱스를 할당하고 그것을 return 해주고 나머지가 0이 아닌 경우 answer에 s 배열의 s길의 / 2번째 인덱스값 뒤에 소숫점 있으면 소숫점 버려서 해당 인덱스 값을 return 한다.**

### 다른 사람 풀이

```javascript
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```

Math.ceil을 미쳐 생각 못했네요... 앞으로 Math 메소드 더 애용해야겠습니다ㅋㅋㅋ
