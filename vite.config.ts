import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import Markdown from "vite-plugin-md";
import path from "path";
import { compressText } from "./src/sites/doc/components/demo-block/basedUtil";
const hljs = require("highlight.js"); // https://highlightjs.org/
import config from "./package.json";
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: "/bingo/",
  server: {
    port: 2022,
    proxy: {
      "/devServer": {
        target: "https://nutui.jd.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, ""),
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/packages/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`,
      },
    },
    postcss: {
      plugins: [
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("autoprefixer")({
          overrideBrowserslist: [
            "> 0.5%",
            "last 2 versions",
            "ie > 11",
            "iOS >= 10",
            "Android >= 5",
          ],
        }),
      ],
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    Markdown(),
    // Markdown({
    //   // default options passed to markdown-it
    //   // see: https://markdown-it.github.io/markdown-it/
    //   markdownItOptions: {
    //     highlight: function (str, lang) {
    //       if (lang && hljs.getLanguage(lang)) {
    //         try {
    //           return hljs.highlight(lang, str).value;
    //         } catch (__) {}
    //       }

    //       return ""; // 使用额外的默认转义
    //     },
    //   },
    //   markdownItSetup(md) {
    //     md.use(require("markdown-it-container"), "demo", {
    //       validate: function (params) {
    //         return params.trim().match(/^demo\s*(.*)$/);
    //       },

    //       render: function (tokens, idx) {
    //         const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
    //         if (tokens[idx].nesting === 1) {
    //           // opening tag
    //           const contentHtml = compressText(tokens[idx + 1].content);

    //           return (
    //             `<demo-block data-type="vue" data-value="${contentHtml}">` +
    //             md.utils.escapeHtml(m[1]) +
    //             "\n"
    //           );
    //         } else {
    //           // closing tag
    //           return "</demo-block>\n";
    //         }
    //       },
    //     });
    //   },
    // }),
  ],
  build: {
    target: "es2015",
    outDir: "./dist/bingo/",
    assetsDir: config.version,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        doc: resolve(__dirname, "index.html"),
        mobile: resolve(__dirname, "demo.html"),
      },
    },
  },
});
