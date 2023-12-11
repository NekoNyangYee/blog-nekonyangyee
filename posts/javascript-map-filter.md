---
teaser: /JavascriptMapAndFilter/thumbnail.png
category: JavaScript
title: (Javascript) map()과 filter() 차이와 응용하기
date: 2023-10-19T00:00:00+00:00
time: 20:56
description: JavaScript map()과 filter()메서드에 대해 알아봅니다.
---

![thumbnail](/JavascriptMapAndFilter/thumbnail.png)

안녕하세요. NekoNyangYee입니다.

오늘은 자바스크립트내에서 필수적으로 쓰이는 메서드 중 `map()`, `filter()`메서드에 대해 작성해보려합니다.

## map()

---

- 배열 내의 모든 요소를 순회하면서 주어진 함수의 결과를 모아 <u>**새로운 배열**</u>을 반환합니다.

- 일반적으로는 `return 어쩌구` 값으로 반환합니다.

- 예외적으로 실행문이 한개만 반환될 경우 return 키워드와 `{}`를 생략 가능합니다.

### map() 구조

```javascript
array.map(callback(current value, index, array), thisArg)
```

- `current value`: 배열 내 현재 값입니다.

- `index`: 배열 내 현재 값의 인덱스입니다.

- `array`: 현재 배열

- `thisArg` : `callback` 내에서 this로 사용될 값입니다.

아래에 예시로 제 파일 중 `PostList.tsx`중 카테고리 관련 코드입니다.

```javascript
//PostList.tsx

const categories: { title: string, keyword: string }[] = [
  { title: "전체", keyword: "" },
  { title: "JavaScript", keyword: "JavaScript" },
  //생략
];

{
  categories.map((category) => (
    <button
      type="button"
      onClick={() => handleCategoryChange(category.keyword)}
      key={category.keyword}
      className={selectCategory === category.keyword ? "active" : ""}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="54"
        viewBox="0 0 54 54"
      >
        <path
          d="M32.5772 12.7782L48.7904 28.9914C50.3525 30.5535 50.3525 33.0861 48.7904 34.6482L34.6482 48.7904C33.0861 50.3525 30.5535 50.3525 28.9914 48.7904L12.7782 32.5771C12.028 31.827 11.6066 30.8096 11.6066 29.7487L11.6066 15.6066C11.6066 13.3975 13.3975 11.6066 15.6066 11.6066L29.7487 11.6066C30.8096 11.6066 31.827 12.028 32.5772 12.7782Z"
          stroke-width="2"
        />
        <circle cx="24" cy="23" r="5" fill="none" stroke-width="2" />
      </svg>
      {category.title}
    </button>
  ));
}
```

`categories`라는 배열을 순회하면서 `category`라는 인자를 넘겨 함수가 실행되어서 버튼이 쭉 생성되는 구조입니다.

## filter()

---

- 기본 문법은 `map()`과 비슷합니다.

- 배열에서 `filter()`를 이용해 `callback`함수에 충족된 값들만 따로 모아 새로운 배열로 반환하는 메서드입니다.

### filter() 구조

```javascript
arr.filter(callback(element[, index[, array]])[, thisArg])
```

- `callback` : 각 요소를 시험할 함수. `true`를 반환하면 요소를 유지하고, `false`를 반환하면 버립니다.

- `element` : 처리할 현재 요소입니다.

- `index` : 처리할 현재 요소의 인덱스입니다.

- `array` : `filter()`를 호출할 배열입니다.

- `thisArg` : `callback`을 실행할 때 this로 사용할 값입니다.

아래는 `PostList.tsx`중 게시물 정렬, 검색 관련 코드입니다.

```javascript
const Posts = allPosts
  .sort(
    (a: { date: Date }, b: { date: Date }) =>
      Number(new Date(b.date)) - Number(new Date(a.date))
  )
  .filter((post: { category: string | string[] }) =>
    selectCategory ? post.category.includes(selectCategory) : true
  )
  .filter((post: { title: string, description: string }) =>
    searchTerm === ""
      ? true
      : post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
```

간략히 설명하자면 모든 게시물이 담겨 있는 `allPost`라는 배열을 순회하며 `sort()`라는 메서드로 날짜 최신순으로 정렬하고, 첫 번째 `filter()`안에는 위 코드에서 해당 카테고리 버튼을 눌렀을 때, 그에 해당하는 게시물만 보이게 하는 코드이고, 두 번째 `filter()`는 검색창에 키워드를 입력 시 그에 해당하는 제목 혹은 설명이 필터링이 되어 보여주는 코드입니다.

## map(), filter() 차이

---

EX)

```javascript
var testArray = [0, 1, 2, 3, 4, 5];

testArray.filter(function (c) {
  return c <= 2;
}); // [0, 1, 2]

testArray.map(function (c) {
  return c <= 2;
});

testArray.map(function (c) {
  if (c <= 2) return c;
}); // [0, 1, 2, undefined, undefined, undefined] 빈값을 제거하기위해선 아이러니하게도 filter을 써야한다.
```

그래서 이 둘의 차이는 뭘까요?

> 먼저 `map()`의 경우는 **산술된 인자를 받아 배열을 만들고**, `filter()`의 경우에는 콜백함수로 **반환 값의 불리언이 `true`에 해당하는 값만 가지고 배열을 만듭니다.**
