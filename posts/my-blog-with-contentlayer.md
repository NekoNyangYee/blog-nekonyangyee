---
teaser: /My-project-with-Contentlayer/thumbnail.png
category: ✏️ 기타
title: ContentLayer로 나의 블로그가 만들어지기 까지의 과정...
date: 2023-09-02T00:00:00+00:00
description: 이 블로그가 탄생하기까지의 과정을 쭉 나열하는 글입니다.
---

안녕하세요! NekoNyangYee입니다!! <br />
오늘은 이 블로그가 어떻게 탄생했는지에 대해 과정을 쭉 나열해보려 합니다.

먼저 올해 7월말 저는 어느때와 다름없이 자바스크립트 개념공부와 피그마 디자인 하는 법을 익힐 때였습니다. 저는 제 지인이 만든 블로그를 볼 기회가 생겨 한번 쭉 훑어보았는데 되게 블로그같이 잘 만들어놓았더라고요? 그래서 지인한테 어떻게 만들었냐고 물어보니 그 유명한 `NextJS`와 `NextJS`와 함께 사용할 수 있는 정적 콘텐츠 관리 도구인 `Contentlayer`를 이용해 만들었다고 합니다.

제가 생각했던 풀스택 기반의 블로그가 아닌 오직 프론트엔드만으로도 쉽게 정적 블로그를 만들 수 있다는 얘기에 안 신기할 수가 없었습니다.

어차피 예전부터 나만의 블로그 하나는 만들어야겠다는 생각도 있었기 때문에 바로 도전해보기로 합니다.

그러면 이쯤에서 의문점이 하나 들겁니다.

> **아니 블로그라면 네이버 블로그, 티스토리 등등 이미 플랫폼들이 있는데 굳이 만들어야 해요?🤔**

그래서 대표적인 블로그들인 네이버 블로그와, 티스토리를 가지고 비교를 해보았습니다.

## 네이버 블로그

---

![naver-blog-logo](/My-project-with-Contentlayer/naver-blog-logo.jpg)

### 장점

1. 국내 1위 검색 플랫폼 네이버 서비스입니다.

2. 만들기 쉽습니다. html 편집 같은 건 몰라도 가능합니다.

3. 블로그 이웃들간의 소통이 수월합니다.

4. 블로그 활동을 열심히 하면 경우에 따라 네이버 인플루언서(Naver Influencer)에 선정될 수 있습니다.

5. 블로그에 적당히 컨텐츠만 있다면 애드포스트 광고 노출 설정 방법이 쉽습니다.

6. 서치어드바이저(웹 마스터 도구)에 등록을 안해도 네이버에서 검색이 됩니다.

### 단점

1. 키워드 경쟁이 심합니다.. 일반 블로그 게시물 같은 경우에는 상위 노출이 쉽지 않습니다.

2. 애드포스트만으로 고수익을 노리기는 어렵습니다.

3. 네이버가 싫어하는 행위를 하면 저품질로 바뀔 수 있습니다.

4. 구글 서치 콘솔에는 등록을 못하여 구글 검색 노출이 불가능합니다.

## Tistory

---

![tistory-logo](/My-project-with-Contentlayer/tistory-logo.jpg)

### 장점

1. 키워드 경쟁이 심하지 않습니다. 일반 게시물도 양질의 포스팅을 하면 상위 노출이 어렵지 않습니다.

2. 구글 에드센스를 쓰기 때문에 승인만 나도 광고로 고수익도 노려볼 수 있습니다.

3. 네이버 블로그에 비해 훨씬 자유롭게 포스팅이 가능합니다. (광고, 홍보, 협찬 등등)

4. 구글 서치 콘솔에 등록이 가능해 구글에 검색 노출시킬 수 있습니다.

## 단점

1. 검색 기반이 카카오 서비스입니다.

2. 만들기 어렵습니다. (적어도 html에 대한 개념은 알고 있으셔야 합니다.)

3. 소통이 쉽지 않습니다.

4. 네이버 인플루언서 같은 제도가 없습니다.

5. 애드센스 승인 받기 어렵습니다.

6. 네이버에 검색되려면 서치어드바이저(웹 마스터 도구)에 등록을 해야 합니다.

라는 겁니다.

저는 티스토리 쪽으로 약간 기울뻔했으나 애드센스 승인부터 한정 된 틀에서 꾸미는 것이 싫어서 그냥 **_저만의 자체 블로그를 만들기로 결심_**합니다.😏

이 블로그를 만들기 위해 `NextJS`, `Contentlayer`, `Emotion`을 새롭게 써보게 되었습니다.

사실 `NextJS`, `Emotion`는 예전부터 써 볼 생각이 있어서 큰 문제는 없었지만 Contentlayer는 어떤 구조인지를 몰랐기에 공식 문서, 구글링을 통해 알아가며 써보았습니다.

아래는 만드는 과정을 코드와 함깨 설명하였습니다!

> ### ‼️ 주의: _아래부터 나오는 코드와 설명들은 모두 2023년 9월 기준으로 작성되는 것이며, 향후 코드들은 업데이트 될 수 있습니다. 빠르게 업데이트된 코드들로 확인 하고 싶으시면 제 깃허브 레포지토리를 확인 해주시면 되겠습니다._

## 1. 새 프로젝트 생성

---

먼저 새 프로젝트부터 생성해야겠죠? 이번 프로젝트는 `NextJS`기반이지만 그렇다고 프로젝트 설치 명령어가 바뀌거나 그렇지 않습니다. 최소한 리액트를 해보신 분들이라면 금방 따라 오실겁니다.🤗

```bash
yarn create next-app 프로젝트명

or

npx create-next-app 프로젝트명
```

## 2. 패키지 설치

---

이제 프로젝트에 필요한 패키지를 다운 받아 볼겁니다. 저는 `emotion`과 `Contentlayer`를 쓸거기 때문에 아래와 같이 작성 후 다운받았습니다. 이외에는 프로젝트 제작에 도움을 주는 `CSS in JS`를 할 수 있게 해주고 코드 블록들을 예쁘게 꾸며주는 것들입니다.

```bash
npm install contentlayer next-contentlayer rehype-highlight rehype-pretty-code shiki next-sitemap @emotion/styled @emotion/css @emotion/react

혹은

yarn add contentlayer next-contentlayer rehype-highlight rehype-pretty-code shiki next-sitemap @emotion/styled @emotion/css @emotion/react
```

## 3. 기본 파일 수정

---

이제 패키지를 다 다운 받았으면 프로젝트에 맞게 기본 파일들을 수정을 해야 합니다. 따라하시는 분들은 아래와 같이 하시면 됩니다.

```typescript
//next.config.js

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
```

```json
//tsconfig.json

....

 "paths": {
      "@/*": ["./*"],
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".contentlayer/generated",
    "next-sitemap.config.js"
  ],
  "exclude": ["node_modules"]
}
```

## 4. contentlayer.config.ts 파일 생성 후 작성

---

이제 `contentlayer.config.ts` 파일을 하나 생성 후에 아래와 같이 작성합니다. 이부분은 공식문서에도 나와있는 부분입니다.

```typescript
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    category: { type: "string", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    teaser: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

const contentSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
      highlight,
    ],
  },
});

export default contentSource;
```

## 5. next-sitemap.config.js 파일 생성 후 작성

---

다 만들고 배포까지 온료한 사이트를 그냥 그대로 둘 수는 없겠죠? 다른 사이트에서도 검색 노출이 될 수 있게 `next-sitemap.config.js` 파일 하나 만들어서 아래처럼 작성하면 됩니다. 이 때 주의해야할 점이 블로그 주소는 `localhost`가 아닌 본인이 배포를 하고 나온 도메인 주소여야 합니다. 그래서 패키지 설치까지 마치고 바로 배포 먼저 하고 진행하시는 걸 추천드립니다.

```javascript
//next-sitemap.config.js

module.exports = {
  siteUrl: "본인 블로그 주소",
  generateRobotsTxt: true,
};
```

## 6. 마크다운 파일 렌더링하기

이번 `NextJS 13`부터는 폴더로 라우팅이 가능해졌습니다. 저는 지인이 쓰는 방식인 도메인 주소 뒤에 아이디가 오는 형식으로 구성하였기에 `app/[...slug]`경로에 `page.tsx` 파일을 만들었습니다. 맘에 안들다 싶으시면 공식문서 보시는 것도 방법입니다.

```typescript
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";

import { StyledPost } from "./style";
import Giscus from "@/Components/Giscus";
import ScrollProgressBar from "@/Components/ScrollProgressBar";
import ContentHeader from "@/Components/ContentHeader";
import CopiedUrl from "@/Components/CopiedURL";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    params: { slug: post._raw.flattenedPath.split("/") },
  }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const slug = params.slug.join("/");
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "website",
      url: "https://blog-nekonyangyee.vercel.app",
      title: post.title,
      description: post.description,
      siteName: "nekonyangyee-blog",
    },
    twitter: {
      card: "summary_large_image",
      site: "https://blog-nekonyangyee.vercel.app",
      title: post.title,
      description: post.description,
    },
  };
};

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug.join("/");
  const sortedPosts = allPosts.sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );
  const currentIndex = sortedPosts.findIndex(
    (p) => p._raw.flattenedPath === slug
  );
  const post = sortedPosts[currentIndex];

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  const previousPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  return (
    <StyledPost>
      <ContentHeader {...post} />
      <ScrollProgressBar />
      <div className="post-container">
        <article>
          <p className="category-state">{post.category}</p>
          <h1 className="post-title">{post.title}</h1>
          <time dateTime={post.date}>
            게시 날짜: {format(new Date(post.date), "yyyy-MM-dd")}
          </time>
          <hr />
          <Content />
          <CopiedUrl />
          {previousPost && (
            <Link href={`/${previousPost._raw.flattenedPath}`}>
              <div className="next-prev-container">
                <img src={previousPost.teaser} alt={previousPost.title} />
                <span>
                  이전글
                  <p>{previousPost.title}</p>
                  {previousPost.description}
                </span>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link href={`/${nextPost._raw.flattenedPath}`}>
              <div className="next-prev-container">
                <img src={nextPost.teaser} alt={nextPost.title} />
                <span>
                  다음글
                  <p>{nextPost.title}</p>
                  {nextPost.description}
                </span>
              </div>
            </Link>
          )}
          <Giscus />
        </article>
      </div>
    </StyledPost>
  );
};

export default PostLayout;
```

저는 현재 인덱스에서 +1, -1을 해서 다음글과 이전글 코드도 같이 넣었기 때문에 좀 깁니다...ㅋㅋㅋ 이 기능이 필요없으시면 지우시고 따로 커스텀 하시면 됩니다.

이제 posts라는 폴더를 만들고 안에 `원하는-이름.md`를 작성하시고 아래와 같이 작성해주세요. 참고로 마크다운 파일 이름은 공백을 허용하지 않습니다.

```markdown
//posts/example.md

---

category: 기타 //원하는 카테고리
title: 예시 글
date: 2023-09-02 //오늘 날짜
description: 블로그 설명을 적습니다.

---

아무렇게 쓴 글씨
```

그러고 터미널에 아래와 같이 명령어를 입력후 중간에 나오는 `localhost:3000` 뭐시기 뜨는데 그 주소를 Ctrl + 클릭하시면 브라우저 창 하나가 뜰겁니다. 주소 뒤에 `/원하는-이름`을 작성 후 들어가보면 정상적으로 뜨는걸 확인할 수 있습니다.

## 7. 글 목록 가져오기

---

이제 글 표시하는 것 까지 확인을 했으니 목록 형식으로 만들어보겠습니다. `app`폴더 밑에 `page.tsx` 파일에 아래와 같이 작성해주세요.

```typescript
import PostList from "@/Components/PostList";
import StyledContent from "./style";
import { allPosts } from "contentlayer/generated";
import Header from "@/Components/Header";

const Home = () => {
  return (
    <StyledContent>
      <Header />
      <div className="contents-container">
        <div className="articles">
          <PostList allPosts={allPosts} />
        </div>
      </div>
    </StyledContent>
  );
};

export default Home;
```

여기에 바로 목록 관련 로직을 짜도 되지만 나중에 기능이 많이 추가될 것을 고려해 그 로직 부분은 `PostList.tsx`로 따로 분리하였습니다. 자세한 코드 내용은 저의 깃허브 레포지토리에서 확인해주세요.

<a href="https://github.com/NekoNyangYee/blog-nekonyangyee">👉 깃허브 바로가기</a>

## 마무리

---

이렇게 짧지만 긴 글을 작성해 저의 블로그가 만들어지는 과정을 얘기해보았습니다. 확실히 다 만들고 나니 애착이 가는 프로젝트가 되어서 지금 이순간에도 계속 게시물 작성이랑 UI 수정 등 계속 만져보고 있습니다ㅋㅋㅋ 여러분들도 멋진 블로그 만들어보시길 바랍니다. 감사합니다😄😄
