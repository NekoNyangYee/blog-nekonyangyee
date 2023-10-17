---
teaser: /Nextjs-ServerComponents/thumbnail.png
category: Next.js
title: Next.js 13 Server Components가 무엇일까? 1편
date: 2023-10-03T00:00:00+00:00
time: 21:34
description: Next.js 13 Server Components에 관한 이야기입니다.
---

![thumbnail](/Nextjs-ServerComponents/thumbnail.png)

작년에 Nextjs 13 버전이 발표되면서 앱 디렉토리, 서버 컴포넌트, 스트리밍 등등 다양하게 변화되었습니다. 그중에서 오늘은 Server Components에 대해서 작성해보려고 합니다.

## Server Components가 뭔가요?

---

**Server Components**는 말그대로 서버에서 렌더링이 이루어지는 컴포넌트입니다.

- 이는 대부분의 컴포넌트가 서버에서 렌더링되고, 작은 인터랙티브 UI 요소만 클라이언트에서 렌더링 되는 방식입니다.

- 이 작은 인터랙티브 UI요소들을 클라이언트 컴포넌트라고 지칭할 수 있습니다.

- 서버 단에서 렌더링 되므로, 아래와 같은 브라우저 환경의 코드는 사용 불가합니다.
  - Event Listener(onClick 등) 사용 불가
  - React Hooks(useState 등) 사용 불가
  - Browser API(webStorage 등) 사용 불가

**Client Components**는 클라이언트에서 렌더링되는 컴포넌트입니다.

- 이 컴포넌트는 사용자와 상호작용을 하며, 애플리케이션의 인터렉티브를 담당합니다.

- 클라이언트 컴포넌트는 next.js 같은 프레임워크에서의 서버에서 미리 렌더링을 하고 클라이언트에서는 **\*Hydrate**되어 초기 렌더링 성능을 개선할 수 있습니다.

> **\*Hydrate** : Server Side 단에서 렌더링 된 정적 페이지와 번들링된 JS파일을 클라이언트에게 보낸 뒤, 클라이언트 단에서 HTML 코드와 React인 JS코드를 서로 매칭 시키는 과정을 말합니다.

![ServerAndClientCompinents](/Nextjs-ServerComponents/ServerAndClientCompinents.png)
_next.js 공식문서_

저는 이 부분이 헷갈렸습니다(지금도 여전히 헷갈립니다ㅋㅋㅋㅋ)

## 서버 컴포넌트랑 SSR(Server Side Rendering)이랑 무슨 차이지?

---

서버에서 렌더링을 한다는 것이 유사하다는 점에서 서버 컴포넌트와 서버 사이드 렌더링이 헷갈렸습니다. 하지만 따지고 보니 해결하고자 하는 문제점이 다른거 같았습니다.

- 서버 컴포넌트에서의 렌더링된 코드는 클라이언트로 전달되지 않습니다. 반면에 서버 사이드 렌더링(SSR)의 모든 컴포넌트의 코드는 자바스크립트 번들에 포함되어 클라이언트로 전송됩니다.

- 서버 컴포넌트는 페이지 레벨에 상관없이 모든 컴포넌트에서 서버에 접근 가능합니다. 하지만 Next.js의 경우 가장 top level의 페이지에서만 `getServerProps()`나 `getInitialProps()`로 서버에 접근 가능합니다. ( `getServerProps()`, `getInitialProps()`는 아직 제가 next.js를 입문한지 얼마 안되어 써보지를 못했지만 일단 나중에 개념 확인 겸 올려보도록 하겠습니다.)

- 서버 컴포넌트는 클라이언트 상태를 유지하며 refetch 될수 있습니다. 서버 컴포넌트는 HTML이 아닌 특별한 형태로 컴포넌트를 전달하기 때문에 필요한 경우 포커스, 인풋 입력값 같은 클라이언트 상태를 유지하며 여러 번 데이터를 가져오고 리렌더링하여 전달할 수 있다. 하지만 서버 사이드 렌더링(SSR)의 경우 HTML로 전달되기 때문에 새로운 refetch가 필요한 경우 HTML 전체를 리렌더링 해야 하며 이로 인해 클라리언트 상태를 유지할 수 없습니다.

## 그럼 Client Components는?

---

### 지시어가 있다는게 그게 뭘까?

아래는 제 블로그 코드 중 게시물 버튼 구현하는 코드 중 일부입니다.

```typescript
"use client" <= 바로 이 부분

import styled from "@emotion/styled";
import { useState } from "react";

...Emotion 코드 생략...

const CopiedUrl = () => {
    const [copied, setCopied] = useState(false);

    const copyUrlToClipboard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        const fullUrl = window.location.href;
        navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <StyledCopyURL onClick={copyUrlToClipboard} copied={copied}>
            {copied ?
                (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                            <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                        </svg>
                        <span>게시물 링크 복사완료!</span>
                    </>
                )
                : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                            <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                        </svg>
                        <span>게시물 공유하기</span>
                    </>
                )}
        </StyledCopyURL>
    );
}

export default CopiedUrl;
```

![useClient](/Nextjs-ServerComponents/useClient.png)

아래에 사진에서는 `'use client'` 지시어가 서버 전용 코드와 클라이언트 코드 사이에 있는데 이 지시어가 파일에 정의되면 자식 구성 요소를 포함하여 파일로 가져온 다른 모든 모듈은 클라이언트 번들의 일부로 간주됩니다.

즉, nest.js 13부터는 서버 컴포넌트가 기본값이므로 `use client` 지시문을 모듈의 시작부분에 정의하거나 가져오지 않는 한 모든 컴포넌트는 서버 컴포넌트 모듈 그래프의 일부이게 됩니다.

그래서 그 위에 있는 제 코드를 보시면 맨 윗 줄에 'use client' 지시어가 있는 것을 확인하실 수 있습니다.

---

**주의:
모든 파일에서 "use client" 지시문을 정의할 필요는 없다. 클라이언트 모듈 경계는 "진입점"에서 한 번만 정의하면 클라이언트 컴포넌트로 간주되는 모든 모듈을 가져올 수 있다.**

---

> TMI: 원래 `use client` 지시어를 사용안하고 서버 컴포넌트는 파일명.server.js, 클라이언트 컴포넌트는 파일명.client.js였으나 개발자 분들이 오랜 회의하고 피드백 받은 끝에 `use client`라는 지시어를 쓰기로 했답니다. <a href="https://github.com/reactjs/server-components-demo/pull/62">관련 자료</a>

뒷내용은 2편에서 진행하겠습니다.
