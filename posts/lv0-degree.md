---
teaser: /programmers-logo-lv0.png
category: ⌨️ 프로그래머스
title: Lv.0 각도기 (JavaScript)
date: 2023-08-29T00:00:00+00:00
time: 19:12
description: 각도기 문제에 대한 풀이입니다.
---

## 문제 설명

---

각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 `angle` 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

- 예각 : 0 < `angle` < 90

- 직각 : `angle` = 90

- 둔각 : 90 < `angle` < 180

- 평각 : `angle` = 180

### 제한 사항

- 0 < `angle` ≤ 180

- `angle`은 정수입니다.

### 입출력 예

- `angle`: 70, result: 1

- `angle`: 91, result: 3

- `angle`: 180, result: 4

### 입출력 예 설명

입출력 예 #1

- `angle`이 70이므로 예각입니다. 따라서 1을 return합니다.

입출력 예 #2

- `angle`이 91이므로 둔각입니다. 따라서 3을 return합니다.

입출력 예 #2

- `angle`이 180이므로 평각입니다. 따라서 4를 return합니다.

### 나의 풀이

```JavaScript
function solution(angle) {
   if (angle === 180) {
       return 4
   } else if (angle > 90) {
       return 3
   } else if (angle === 90) {
       return 2
   } else {
       return 1
   }
}
```

### 다른 사람 풀이

```JavaScript
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}
```

저는 생각 나는대로 if문으로 여러번 분기를 시켰는데 역시 코딩에는 정답이 없다고... 다른 사람들은 저마다의 창의력으로 풀었더군요.. 그저 신기합니다...ㅋㅋㅋ
