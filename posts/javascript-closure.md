---
teaser: /JavaScript-Closure/thumbnail.png
category: JavaScript
title: JavaScript 클로져 알아보기
date: 2024-08-05T00:00:00+00:00
time: 23:00
description: JavaScript의 핵심 클로져에 대해 설명합니다.
---

![thumbnail](/JavaScript-Closure/thumbnail.png)

안녕하세요. NekoNyangYee입니다.

오늘은 자바스크립트를 쓰시는 분들이라면 무조건 알고 가셔야 할 개념 중 하나인 클로져에 대해 정리해보려합니다.

## 1. 클로져(closure)란?

---

> - 공식문서를 보면 함수와 함수가 선언된 렉시컬 환경의 조합미라고 나옵니다.
>
> - 내부함수가 외부함수의 컨텍스트에 접근이 가능합니다.

### 특징

1. 개념에서도 요약했지만 외부함수 스코프에서 내부함수로 접근이 불가능합니다.

2. 그와 반대로 내부함수에서 외부함수로 접근이 가능합니다.

3. 외부함수가 종료된 후에도 클로져함수는 외부함수의 스코프로, 즉 함수가 선언된 렉시컬 환경에 접근이 가능합니다.

> 외부함수의 스코프가 내부함수에 의해 언제든지 접근될 수 있기 때문에 클로져를 남발하는 것은 브라우저 성능에 영향이 가기에 지양하는 편이 좋습니다.

### 장점

1. 전역변수의 최소화

   - 전역변수가 많으면 어디에서든 접근이 가능한 상황이 발생하기에 클로져로 최소한 사용해서 실수나 예외적인 상황을 방지해야합니다.

2. 데이터 보존 가능

   - 클로져 함수는 외부 함수의 실행이 종료되어도 외부함수에 존재하는 변수는 사용이 가능합니다. 이것은 클로져가 가지고 있는 `폐쇄성` 때문에 가능한 것입니다.

3. 모듈화를 통한 코드 재사용에 편리

   - 클로져 함수를 각각의 변수에 할당하면 각자 독립적으로 값을 사용하고 보존 가능합니다. 이와 같이 함수의 재사용성을 극대화하고 함수 하나를 독립적인 부품의 형태로 분리하는 것을 `모듈화`라고 합니다

4. 정보 접근 제한 (캡슐화)
   - `클로저 모듈 패턴`을 사용해 객체에 담아 여러 개의 함수를 리턴하도록 만들어 정보의 접근을 제한할 수 있는데, 이를 `캡슐화`라고 한다.
