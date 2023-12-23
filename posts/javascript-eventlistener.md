---
teaser: /JavaScript-eventListener/thumbnail.jpg
category: JavaScript
title: addEventListener()와 removeEventListener()
date: 2023-12-23T00:00:00+00:00
time: 19:26
description: addEventListener()와 removeEventListener()메서드에 대해 알아봅니다.
---

![thumbnail](/JavaScript-eventListener/thumbnail.jpg)

안녕하세요 NekoNyangYee입니다.

오늘은 이벤트 추가/제거 메서드인 `addEventListener()`와 `removeEventListener()`에 대해 알아보겠습니다.

## 1. addEventListener()

---

해당 객체에 이벤트를 추가하려면 `addEventListener()`를 사용하고, 괄호안에는 2개의 파라미터를 입력받습니다.

```javascript
window.addEventListener(type, eventListener);
```

- `type`: 이벤트 종류가 들어갈 이벤트 타입입니다.

- `eventListener` : 이벤트가 발생했을 때 실행할 함수입니다.

### 1-1 type 종류

개발하면서 자주 쓰이는 종류들만 모아봤습니다.

**1. UI 이벤트**

- `load`: 웹 페이지의 로드가 완료되었을 때 동작하는 타입입니다.

- `unload`: 웹페이지가 새로운 페이지를 요청한 경우 동작하는 타입입니다.

- `error`: 브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 없는 경우 동작하는 타입입니다.

- `resize`: 브라우저의 창 크기를 조절했을 때 동작하는 타입입니다.

- `scroll`: 사용자가 브라우저 페이지를 위 아래로 스크롤 할 때 동작하는 타입입니다.

---

**2. 키보드 이벤트**

- `keydown`: 사용자가 키를 처음 눌렀을 때 동작하는 타입입니다.

- `keyup`: 반대로 사용자가 키를 땔 때 동작하는 타입입니다.

- `keypress`: 사용자가 눌렀던 키의 문자가 입력되었을 때 동작하는 타입입니다.

---

**3. 마우스 이벤트**

- `click`: 사용자가 동일한 요소 위에서 마우스 버튼을 **눌렀다 땔 때** 동작하는 타입입니다.

- `dbclick`: 두 번 눌렀다 땔 때 동작하는 타입입니다.

- `mousedown`: 마우스를 누르고 있을 때 동작하는 타입입니다.

- `mouseup`: 눌렀던 마우스 버튼을 땔 때 동작하는 타입입니다.

- `mousemove`: 마우스를 움직였을 때 동작하는 타입입니다.

- `mouseover`: 요소 위로 마우스를 움직였을 때 동작하는 타입입니다.

- `mouseout`: 요소 바깥으로 마우스를 움직였을 때 동작하는 타입입니다.

## 2. removeEventListener()

---

말그대로 이벤트를 삭제할 때는 removeEventListener() 메소드를 사용합니다. 얘도 `addEventListener()`와 마찬가지로 2개의 파라미터를 갖습니다.

```javascript
window.removeEventListener(type, eventListener);
```

- `type`: 이벤트 종류가 들어갈 이벤트 타입입니다.

- `eventListener` : 이벤트가 발생했을 때 실행할 함수입니다.

`type` 종류는 `addEventListener()`와 같습니다.

> **주의 : `removeEventListener()` 메소드를 사용해서 이벤트를 삭제하기 위해서는 `addEventListener()` 메소드를 사용하여 이벤트를 등록할 때, 2번째 파라미터로 전달하는 `eventListener`를 익명함수로 전달하면 안됩니다. `removeEventListener()` 메소드를 호출할 때 2번째 파라미터로 넣어주어야 하기 때문입니다.**

EX) 동작하는 경우

```javascript
const btn = document.getElementsByClassName("my_btn")[0];

function clickHandler() {
  console.log("이건 정상 동작합니다");
}

btn.addEventListener("click", clickHandler); // <= 두번 째 파라미터에 콜백함수 자리에 일반 함수를 써도 문제 없다
btn.removeEventListener("click", clickHandler);
```

## 3. addEventListener()를 사용하고 removeEventListener()안쓰면 안되나요?

---

**<u>결론적으로 말씀드리면 써야합니다.</u>** `addEventListener()`를 호출하면, 시스템 내부에 해당 이벤트 호출이 발생한 경우, `listener`목록을 순회하면서 이벤트를 각 `listener`에게 투사해줘서 함수가 호출되는 것인데, 이 `addEventListener()`를 사용하고 `removeEventListener()`를 안쓰게 되면 내부에 `listener`목록이 남아 있게되어 호출할 때마다 목록들이 계속 증가하게 되어 브라우저의 성능 저하의 원인이 될 수 있습니다.
