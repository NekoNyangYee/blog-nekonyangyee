// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    category: { type: "string", required: true },
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    teaser: { type: "string", required: true },
    description: { type: "string", required: true },
    time: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    }
  }
}));
var contentSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
        }
      ],
      highlight
    ]
  }
});
var contentlayer_config_default = contentSource;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-OC5NFE5S.mjs.map
