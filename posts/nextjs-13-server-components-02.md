---
teaser: /Nextjs-ServerComponents2/thumbnail.png
category: Next.js
title: Next.js 13 Server Components가 무엇일까? 2편
date: 2023-10-17T00:00:00+00:00
time: 23:14
description: Next.js 13 Server Components에 관한 이야기 2번째 입니다.
---

![thumbnail](/Nextjs-ServerComponents2/thumbnail.png)

지난 1편에 이어 Next.js 13 Server Components 2편 시작하도록 하겠습니다. 1편을 아직 못 보신 분들은 아래 링크로 이동하여 읽어보고 오시길 바랍니다.

<a href="https://taehyun-blog.vercel.app/nextjs-13-server-components">👉👉1편 보러가기👈👈</a>

## 그럼 서버 컴포넌트랑 클라이언트 컴포넌트는 언제 써요?

---

![WhenTheUseComponents](/Nextjs-ServerComponents2/WhenTheUseComponents.png)

1편에서 잠깐 클라이언트 컴포넌트 특징에 대해 잠깐 설명한 적이 있습니다.

### 요약하자면..

서버 컴포넌트는 데이터 패칭, 백엔드 자원을 다이렉트로 접근할 때, 엑세스 토큰이나, API 키와 같은 예민한 정보를 서버에 저장할 때, 서버에 큰 의존성을 저장하거나, 클라이언트 측에 자바스크립트를 줄일 때 사용됩니다.

반대로 클라이언트 컴포넌트는 상호작용 및 `onClick()`, `onChange()` 와같은 이벤트 리스너를 추가할 때, 상태랑 `useState()`, `useEffect()`, `useReducer()`등 생명주기 이팩트를 사용하거나, 브라우저 전용 API를 사용하는 경우, 상태, 이팩트 또는 브라우저 전용 API에 의존하는 커스텀 훅스인 경우, 리액트 클래스 컴포넌트를 사용하는 경우에 사용됩니다.

## 서드파티 패키지

---

`Next.js 13`부터 `useState()`, `useEffect()`, `useReducer()`등 클라이언트 전용 기능들을 사용하기 위해서는 `use client`라는 지시문을 맨 위에 추가하고 시작했었습니다.

하지만 현재 많이 사용하는 클라이언트 기능들이 담긴 npm 패키지는 해당 지시문이라는게 없다고 합니다...(얼른 추가해줘요ㅠ)

이러한 third-party 컴포넌트들은 자체적으로 `use client` 지시문이 있으므로 내부의 클라이언트 컴포넌트에서는 예상대로 작동하지만, 서버 컴포넌트 내에서는 작동하지 않을 것입니다.

이를 해결할 수 있는 방법은, 해당 클라이언트 전용 기능을 사용하는 서드파티 컴포넌트를 따로 `client component`를 만들어서 `import`한 다음에 그걸 다시 `export` 시켜주는 것입니다.

```typescript
// app/carousel.jsx

"use client";

import { AcmeCarousel } from "acme-carousel";

export default AcmeCarousel;
```

```typescript
// app/page.js

import Carousel from "./carousel";

export default function Page() {
  return (
    <div>
      <p>View pictures</p>

      {/* 🟢 Works, since Carousel is a Client Component */}
      <Carousel />
    </div>
  );
}
```

## 마무리

---

저는 이번 `Next.js`를 13부터 입문했기에 `Server Components`가 뭐지 하고 찾아보다가 이렇게 1, 2편으로 나눠서 정리해봤습니다. 사실 글을 다 쓴 시점에서도 완벽하게 이해가 된 것은 아니었지만 그래도 정리하면서 아 이래서 안됐던거구나~ 라고 깨닫고 오류를 하나씩 줄여갈 수 있을거 같습니다.
