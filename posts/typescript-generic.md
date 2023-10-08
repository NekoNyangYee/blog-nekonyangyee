---
teaser: /TypeScript-Generic/thumbnail.jpg
category: TypeScript
title: TypeScript Genric에 대해 알아보기 (기본)
date: 2023-10-08T00:00:00+00:00
time: 10:20
description: TypeScript Genric에 대해 알아봅니다.
---

![thumbnail](/TypeScript-Generic/thumbnail.jpg)

## 타입스크립트 제네릭이란?

---

- **타입을 마치 함수의 파라미터처럼 사용하는 것**을 의미한다.

- 정적 type 언어는 클래스나 함수를 정의할 때 type을 선언해야 한다.

- 제네릭은 코드를 작성할 때가 아니라 <u>코드를 수행될 때(런타임) 타입을 명시</u>한다.

- 코드를 작성할 때 식별자를 써서 아직 정해지지 않은 타입을 표시한다.

  - 일반적으로 식별자는 <u>**T, U, V…**</u>를 사용한다.

  - 필드 이름의 첫 글자를 사용하기도 한다.

## generic 사용 이유

---

- 한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용된다.

- 재사용성이 높은 함수와 클래스를 생성할 수 있다.

  - 여러타입에서 동작이 가능하다. (한 번의 선언으로 다양한 타입에 재사용할 수 있다.)

  - 코드의 가독성이 높아진다.

- 오류를 쉽게 포착할 수 있다.

  - any타입을 사용하면 컴파일 시 타입을 체크하지 않는다.

  - 타입을 체크하지 않아 관련 메서드의 힌트를 사용할 수 있다.

  - 컴파일 시에 컴파일러가 오류를 찾지 못한다.

- 제네릭도 any처럼 타입을 지정하지 않지만, 타입을 체크해 컴파일러가 오류를 찾을 수 있다.

## generic을 함수에서 사용하기

---

```typescript
function sort<T>(item: T[]): T[] {
  return item.sort();
}

const nums: number[] = [1, 2, 3, 4];
const chars: string[] = ["a", "b", "c", "d", "e", "f", "g"];

sort<number>(nums);
sort<string>(chars);
```

```typescript
function logText<T>(text: T): T {
  return text;
}
// 1과 2는 같은 의미
// #1
let str: <T>(text: T) => T = logText;
// #2
let str: { <T>(text: T): T } = logText;
```

_함수를 호출할 때 함수 안에서 사용할 타입을 넘겨줄 수 있다._

### 제네릭 인터페이스

```typescript
interface GenericLogTextFn {
  <T>(text: T): T;
}
function logText<T>(text: T): T {
  return text;
}
let myString: GenericLogTextFn = logText; // Okay

// 인터페이스에 인자 타입을 강조
interface GenericLogTextFn<T> {
  (text: T): T;
}
function logText<T>(text: T): T {
  return text;
}
let myString: GenericLogTextFn<string> = logText;
```

### Union Type

```typescript
// any를 사용하는 경우
function getAge(age: any) {
  age.toFixed(); // 에러 발생, age의 타입이 any로 추론되기 때문에 숫자 관련된 API를 작성할 때 코드가 자동 완성되지 않는다.
  return age;
}

// 유니온 타입을 사용하는 경우
function getAge(age: number | string) {
  if (typeof age === "number") {
    age.toFixed(); // 정상 동작, age의 타입이 `number`로 추론되기 때문에 숫자 관련된 API를 쉽게 자동완성 할 수 있다.
    return age;
  }
  if (typeof age === "string") {
    return age;
  }
  return new TypeError("age must be number or string");
}
```

- | 를 사용해 두 개 이상의 타입을 선언하는 방식

- Union과 Generic 모두 여러 타입을 다룰 수 있다.

- Union은 선언한 공통된 메서드만 사용할 수 있다.

- 리턴 값이 하나의 타입이 아닌 선언된 Union 타입으로 지정된다.
