// vite.config.ts
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/vite@5.2.11_c9f3cec9eb4369b988d97a1c6bf1a61c/node_modules/vite/dist/node/index.js";
import { isProduction, isDebug, env } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/std-env@3.7.0/node_modules/std-env/dist/index.mjs";
import Vue from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11+vue@3.4.26/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/unplugin-vue-router@0.8.6_vue-router@4.3.2+vue@3.4.26/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/unplugin-vue-router@0.8.6_vue-router@4.3.2+vue@3.4.26/node_modules/unplugin-vue-router/dist/index.mjs";
import Components from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.26/node_modules/unplugin-vue-components/dist/vite.js";
import Imports from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import I18n from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_vue-i18n@9.13.1/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/vite-plugin-pwa@0.20.0_vite@5.2.11/node_modules/vite-plugin-pwa/dist/index.js";
import PurgeCSS from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/rollup-plugin-purgecss@6.0.0/node_modules/rollup-plugin-purgecss/lib/rollup-plugin-purgecss.js";
import Unhead from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/@unhead+addons@1.9.9/node_modules/@unhead/addons/dist/vite.mjs";
import DevTools from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/vite-plugin-vue-devtools@7.6.8_vite@5.2.11+vue@3.4.26/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import { unheadVueComposablesImports } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/@unhead+vue@1.9.9_vue@3.4.26/node_modules/@unhead/vue/dist/index.mjs";

// vite-plugin/vuero-doc/index.ts
import { join, basename } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs";
import { compileTemplate, parse } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/@vue+compiler-sfc@3.4.26/node_modules/@vue/compiler-sfc/dist/compiler-sfc.cjs.js";
import MagicString from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/magic-string@0.30.10/node_modules/magic-string/dist/magic-string.es.mjs";

// vite-plugin/vuero-doc/markdown.ts
import yaml from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs";
import rehypeExternalLinks from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/index.js";
import rehypeRaw from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/index.js";
import rehypeSlug from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/rehype-slug@6.0.0/node_modules/rehype-slug/index.js";
import rehypeAutolinkHeadings from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/rehype-autolink-headings@7.1.0/node_modules/rehype-autolink-headings/index.js";
import rehypeStringify from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/rehype-stringify@10.0.0/node_modules/rehype-stringify/index.js";
import remarkParse from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/index.js";
import remarkGfm from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/remark-gfm@4.0.0/node_modules/remark-gfm/index.js";
import remarkRehype from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/index.js";
import remarkFrontmatter from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/remark-frontmatter@5.0.0/node_modules/remark-frontmatter/index.js";
import rehypeShiki from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/@shikijs+rehype@1.4.0/node_modules/@shikijs/rehype/dist/index.mjs";
import { unified } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/unified@11.0.4/node_modules/unified/index.js";
var langs = [
  "vue",
  "vue-html",
  "typescript",
  "bash",
  "scss"
];
async function createProcessor(themes) {
  return unified().use(remarkParse).use(remarkFrontmatter).use(() => (tree, file) => {
    if ("children" in tree) {
      const parent = tree;
      if (parent.children[0].type === "yaml") {
        const value = parent.children[0].value;
        file.data.frontmatter = typeof value === "string" ? yaml.load(value) : void 0;
      }
    }
  }).use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeShiki, {
    themes,
    langs
  }).use(rehypeExternalLinks, { rel: ["nofollow"], target: "_blank" }).use(rehypeSlug).use(rehypeAutolinkHeadings, {
    behavior: "append",
    content: {
      type: "element",
      tagName: "iconify-icon",
      properties: {
        className: ["iconify toc-link-anchor"],
        icon: "lucide:link"
      },
      children: []
    },
    test: (node) => {
      if (Array.isArray(node.properties?.className) && node.properties?.className?.includes("toc-ignore")) {
        return false;
      }
      return Boolean(node.properties?.id);
    }
  }).use(rehypeStringify);
}

// vite-plugin/vuero-doc/transform.ts
import { kebabCase } from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs";
var SELF_CLOSING_TAG_REGEX = /<([^\s></]+)([^>]+)\/>/g;
var OPEN_TAG_REGEX = /<([^\s></]+)/g;
var CLOSE_TAG_REGEX = /<\/([^\s></]+)/g;
function transformExampleMarkup(raw) {
  let output = raw;
  let content = null;
  if (content = raw.match(/<!--example-->([\s\S]*?)<!--\/example-->/)) {
    const kebabContent = content[1].replaceAll(SELF_CLOSING_TAG_REGEX, (substring, tag) => {
      return substring.replace("/>", `></${tag.trim()}>`);
    }).replaceAll(OPEN_TAG_REGEX, (substring) => {
      return `<${kebabCase(substring.substring(1).trim())}`;
    }).replaceAll(CLOSE_TAG_REGEX, (substring) => {
      return `</${kebabCase(substring.substring(2).trim())}`;
    }).replaceAll("&#x27;", "'");
    output = output.replace(content[1], kebabContent);
  }
  return output;
}
function transformSlots(source, condition = "") {
  if (source.includes("<!--code-->") && source.includes("<!--example-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--code-->`,
      `</template><template ${condition} #code>
<slot name="code"><div v-pre>`
    ).replace(`<!--/code-->`, `</div></slot>
</template>`).replace(
      `<!--example-->`,
      `<template ${condition} #example>
<slot name="example">`
    ).replace(`<!--/example-->`, `</slot>
</template>`);
  }
  if (source.includes("<!--code-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--code-->`,
      `</template><template ${condition} #code>
<slot name="code"><div v-pre>`
    ).replace(
      `<!--/code-->`,
      `</div></slot>
</template>
<template ${condition} #example><slot name="example"></slot></template>`
    );
  }
  if (source.includes("<!--example-->")) {
    return `<template ${condition} #default>${source}`.replace(
      `<!--example-->`,
      `</template><template ${condition} #example>
<slot name="example">`
    ).replace(
      `<!--/example-->`,
      `</slot>
</template>
<template ${condition} #code><slot name="code"></slot></template>`
    );
  }
  return `<template ${condition} #default>${source}</template><template ${condition} #example><slot name="example"></slot></template><template ${condition} #code><slot name="code"></slot></template>`;
}

// vite-plugin/vuero-doc/index.ts
function parseId(id) {
  const index = id.indexOf("?");
  if (index < 0)
    return id;
  else
    return id.slice(0, index);
}
function VueroMarkdownDoc(options) {
  let config;
  let processor;
  const cwd = process.cwd();
  const pathPrefix = options.pathPrefix ? join(cwd, options.pathPrefix) : cwd;
  async function markdownToVue(id, raw) {
    const path = parseId(id);
    const input = transformExampleMarkup(raw);
    if (!processor)
      processor = await createProcessor(options.shiki.themes);
    const vFile = await processor?.process(input);
    const content = vFile.toString();
    const frontmatter = vFile.data?.frontmatter ?? {};
    const slot = transformSlots(content);
    const sfc = [
      `<template>`,
      `  <${options.wrapperComponent} :frontmatter="frontmatter" :source-meta="sourceMeta">`,
      `    ${slot}`,
      `  </${options.wrapperComponent}>`,
      `</template>`
    ].join("\n");
    const result = parse(sfc, {
      filename: path,
      sourceMap: Boolean(config?.build?.sourcemap),
      templateParseOptions: {
        isCustomElement: (tag) => ["iconify-icon"].includes(tag)
      }
    });
    if (result.errors.length || result.descriptor.template === null) {
      console.error(result.errors);
      throw new Error(`Markdown: unable to parse virtual file generated for "${id}"`);
    }
    const isSSR = Boolean(config?.build?.ssr);
    const { code, errors } = compileTemplate({
      filename: path,
      id: path,
      ast: result.descriptor.template.ast,
      source: result.descriptor.template.content,
      preprocessLang: result.descriptor.template.lang,
      ssr: isSSR,
      ssrCssVars: result.descriptor?.cssVars,
      transformAssetUrls: false,
      isProd: config?.isProduction,
      compilerOptions: {
        isCustomElement: (tag) => ["iconify-icon"].includes(tag)
      }
    });
    if (errors.length) {
      console.error(errors);
      throw new Error(`Markdown: unable to compile virtual file "${id}"`);
    }
    let sourceMeta = "undefined";
    if (options.sourceMeta?.enabled) {
      sourceMeta = JSON.stringify({
        relativePath: path.substring(cwd.length),
        basename: basename(path),
        path: config?.isProduction ? "" : path,
        editProtocol: config?.isProduction ? "" : options.sourceMeta.editProtocol
      });
    }
    const s = new MagicString(code, {
      filename: path
    });
    s.prepend(`import { reactive } from 'vue'
`);
    s.prepend(`import { useDarkmode } from '/@src/composables/darkmode'
`);
    if (isSSR) {
      s.replace("export function ssrRender", "function ssrRender");
    } else {
      s.replace("export function render", "function render");
    }
    s.append(`const __frontmatter = ${JSON.stringify(frontmatter)};
`);
    s.append(`const setup = () => ({
`);
    s.append(`  frontmatter: reactive(__frontmatter),
`);
    s.append(`  darkmode: useDarkmode(),
`);
    s.append(`  sourceMeta: ${sourceMeta},
`);
    s.append(`});
`);
    if (isSSR) {
      s.append(`const __script = { ssrRender, setup };
`);
    } else {
      s.append(`const __script = { render, setup };
`);
    }
    if (!config?.isProduction) {
      s.append([
        `__script.__hmrId = ${JSON.stringify(path)};`,
        "if (import.meta.hot) {",
        '  typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(__script.__hmrId, __script);',
        "  import.meta.hot.accept((mod) => {",
        "    if (!mod)",
        "      return;",
        "    const { default: updated, _rerender_only: _rerender_only2 } = mod;",
        "    if (_rerender_only2) {",
        "      __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);",
        "    } else {",
        "      __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);",
        "    }",
        "  });",
        "}",
        ""
      ].join("\n"));
    }
    s.append(`export default __script;
`);
    return {
      code: s.toString(),
      map: config?.build?.sourcemap ? s.generateMap() : null
    };
  }
  return {
    name: "vite-plugin-vuero-doc",
    enforce: "pre",
    configResolved(_config) {
      config = _config;
    },
    transform(raw, id) {
      if (id.endsWith(".md") && id.startsWith(pathPrefix)) {
        return markdownToVue(id, raw);
      }
    }
  };
}

// vite-plugin/purge-comments/index.ts
import MagicString2 from "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/node_modules/.pnpm/magic-string@0.30.10/node_modules/magic-string/dist/magic-string.es.mjs";
var commentRe = /<!--(?:.{2,}?)-->/sg;
function PurgeComments() {
  let sourcemap;
  return {
    name: "purge-comments",
    enforce: "pre",
    configResolved(config) {
      sourcemap = config.build.sourcemap;
    },
    transform: (code, id) => {
      if (!(id.endsWith(".vue") || id.endsWith(".html") || id.endsWith(".svg"))) {
        return;
      }
      if (!code.includes("<!--")) {
        return;
      }
      const s = new MagicString2(code);
      s.replace(commentRe, "");
      if (s.hasChanged()) {
        return {
          code: s.toString(),
          map: sourcemap ? s.generateMap() : null
        };
      }
    }
  };
}

// vite.config.ts
var __vite_injected_original_import_meta_url = "file:///home/dev/Music/NewFolder/MyWorkSpace/StockManagerFrontend/vite.config.ts";
var vite_config_default = defineConfig(({ isSsrBuild }) => ({
  // Project root directory (where index.html is located).
  root: process.cwd(),
  // Base public path when served in development or production.
  // You also need to add this base like `history: createWebHistory('my-subdirectory')`
  // in ./src/router.ts
  // base: '/my-subdirectory/',
  base: "/",
  publicDir: "public",
  logLevel: "info",
  resolve: {
    alias: [
      {
        find: "/@src/",
        replacement: `/src/`
      },
      {
        find: "/@server/",
        replacement: `/server/`
      }
    ]
  },
  // development server configuration
  server: {
    port: 3e3
  },
  ssr: {
    // adding those dependencies to the ssr build allow to use compile time flags
    noExternal: isProduction ? ["vue", "vue-i18n", "vue-router"] : ["vue-i18n", "vue-router"]
  },
  define: {
    // compile time flags - allow to tree shake ssr code if not needed
    __VUERO_SSR_BUILD__: env.SSR_BUILD ? "true" : "false",
    // https://vuejs.org/api/compile-time-flags.html
    __VUE_OPTIONS_API__: "true",
    __VUE_PROD_DEVTOOLS__: isDebug ? "true" : "false",
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: isDebug ? "true" : "false"
  },
  build: {
    target: "esnext",
    cssMinify: isDebug ? false : "esbuild",
    minify: isDebug ? false : "terser",
    sourcemap: isDebug,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: isSsrBuild ? "[name].mjs" : "[name]-[hash].js",
        // Using only hash to prevent adblockers from blocking assets that match their patterns.
        chunkFileNames: isDebug ? `assets/_/[name].${isSsrBuild ? "mjs" : "js"}` : `assets/_/[hash].${isSsrBuild ? "mjs" : "js"}`,
        assetFileNames: isDebug ? "assets/[name][extname]" : "assets/[hash][extname]",
        // Using manualChunks to group layout scss in one chunk to avoid Cumulative Layout Shift (CLS)
        manualChunks(id) {
          if (id.endsWith("scss/main.scss")) {
            return "layouts";
          }
          if (id.endsWith(".scss") && id.match(/components\/layouts\/(?:.*?)scss$/)) {
            return "layouts";
          }
        }
      }
    }
  },
  plugins: [
    /**
     * Shows a quick overview of your app, including the Vue version, pages and components.
     *
     * @see https://devtools-next.vuejs.org/
     */
    DevTools(),
    /**
     * unplugin-vue-router plugin generate routes based on file system
     * allow to use typed routes and usage of defineLoader
     *
     * @see https://uvr.esm.is/rfcs/data-loaders/
     */
    VueRouter({
      routesFolder: "src/pages",
      dts: "./types/router.d.ts"
    }),
    /**
     * plugin-vue plugin inject vue library and allow sfc files to work (*.vue)
     *
     * @see https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md
     */
    Vue({
      include: [/\.vue$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["iconify-icon"].includes(tag)
        }
      }
    }),
    /**
     * unplugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
     *
     * @see https://github.com/intlify/bundle-tools/blob/main/packages/unplugin-vue-i18n/README.md
     */
    I18n({
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src/locales/**"),
      fullInstall: false,
      compositionOnly: true
    }),
    /**
     * Unhead provides a Vite plugin to optimise your builds, by removing composables that aren't needed and simplifying your code.
     *
     * @see https://unhead.harlanzw.com/guide/getting-started/vite-plugin
     */
    Unhead(),
    /**
     * unplugin-auto-import allow to automaticaly import modules/components
     *
     * @see https://github.com/antfu/unplugin-auto-import
     */
    Imports({
      dts: "./types/imports.d.ts",
      imports: [
        "vue",
        "@vueuse/core",
        "vue-i18n",
        VueRouterAutoImports,
        unheadVueComposablesImports
      ],
      dirs: ["src/composables", "src/stores", "src/utils"]
    }),
    /**
     * This is an internal vite plugin that load markdown files as vue components.
     *
     * @see /documentation
     * @see /vite-plugin/vuero-doc
     * @see /src/components/partials/documentation/DocumentationItem.vue
     * @see /src/composable/useMarkdownToc.ts
     */
    VueroMarkdownDoc({
      pathPrefix: "documentation",
      wrapperComponent: "DocumentationItem",
      shiki: {
        themes: {
          light: "min-light",
          dark: "github-dark"
        }
      },
      sourceMeta: {
        enabled: true,
        editProtocol: "vscode://vscode-remote/wsl+Ubuntu"
        // or 'vscode://file'
      }
    }),
    /**
     * This is an internal vite plugin that remove html comments from code.
     *
     * @see /vite-plugin/purge-comments
     */
    PurgeComments(),
    /**
     * unplugin-vue-components plugin is responsible of autoloading components
     * documentation and md file are loaded for elements and components sections
     *
     * @see https://github.com/antfu/unplugin-vue-components
     */
    Components({
      dirs: ["documentation", "src/components"],
      extensions: ["vue", "md"],
      dts: "./types/components.d.ts",
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    /**
     * vite-plugin-pwa generate manifest.json and register services worker to enable PWA
     *
     * @see https://github.com/antfu/vite-plugin-pwa
     */
    VitePWA({
      base: "/",
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Vuero - A complete Vue 3 design system",
        short_name: "Vuero",
        start_url: "/?utm_source=pwa",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      mode: isProduction ? "production" : "development",
      workbox: {
        /**
         * precache files that match the glob pattern
         *
         * @see https://vite-pwa-org.netlify.app/guide/service-worker-precache.html
         */
        globPatterns: ["**/*.{js,mjs,css,ico,png,svg,webp,jpg,jpeg,html}"]
      }
    }),
    /**
     * rollup-plugin-purgecss plugin is responsible of purging css rules
     * that are not used in the bundle
     *
     * @see https://github.com/FullHuman/purgecss/tree/main/packages/rollup-plugin-purgecss
     */
    PurgeCSS({
      output: false,
      content: [`./src/**/*.vue`],
      variables: false,
      safelist: {
        standard: [
          /(autv|lnil|lnir|fas?)/,
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/
        ]
      },
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      }
    })
  ],
  // Predefine dependencies in order to prevent reloading them in the browser during development.
  optimizeDeps: {
    include: [
      "@ckeditor/ckeditor5-vue",
      "@ckeditor/ckeditor5-build-classic",
      "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js",
      "@shikijs/rehype",
      "@vee-validate/zod",
      "@vueuse/core",
      "@vueuse/router",
      "@vueuse/integrations/useCookies",
      "@vueform/multiselect",
      "@vueform/slider",
      "billboard.js",
      "dayjs",
      "dropzone",
      "dragula",
      "defu",
      "filepond",
      "filepond-plugin-file-validate-size",
      "filepond-plugin-file-validate-type",
      "filepond-plugin-image-exif-orientation",
      "filepond-plugin-image-crop",
      "filepond-plugin-image-edit",
      "filepond-plugin-image-preview",
      "filepond-plugin-image-resize",
      "filepond-plugin-image-transform",
      "focus-trap-vue",
      "imask",
      "nprogress",
      "notyf",
      "mapbox-gl",
      "ofetch",
      "photoswipe/lightbox",
      "photoswipe",
      "plyr",
      "ufo",
      "v-calendar",
      "vee-validate",
      "vue",
      "vue-scrollto",
      "vue3-apexcharts",
      "vue-tippy",
      "vue-i18n",
      "vue-router",
      "unplugin-vue-router/runtime",
      "scule",
      // 'simplebar',
      "tiny-slider/src/tiny-slider",
      "vue-accessible-color-picker",
      "zod",
      "rehype-external-links",
      "rehype-raw",
      "rehype-sanitize",
      "rehype-stringify",
      "rehype-slug",
      "rehype-autolink-headings",
      "remark-gfm",
      "remark-parse",
      "remark-rehype",
      "unified",
      "workbox-window",
      "textarea-markdown-editor/dist/esm/bootstrap"
    ]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS1wbHVnaW4vdnVlcm8tZG9jL2luZGV4LnRzIiwgInZpdGUtcGx1Z2luL3Z1ZXJvLWRvYy9tYXJrZG93bi50cyIsICJ2aXRlLXBsdWdpbi92dWVyby1kb2MvdHJhbnNmb3JtLnRzIiwgInZpdGUtcGx1Z2luL3B1cmdlLWNvbW1lbnRzL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9kZXYvTXVzaWMvTmV3Rm9sZGVyL015V29ya1NwYWNlL1N0b2NrTWFuYWdlckZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSwgZGlybmFtZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBpc1Byb2R1Y3Rpb24sIGlzRGVidWcsIGVudiB9IGZyb20gJ3N0ZC1lbnYnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBJbXBvcnRzIGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCBQdXJnZUNTUyBmcm9tICdyb2xsdXAtcGx1Z2luLXB1cmdlY3NzJ1xuaW1wb3J0IFVuaGVhZCBmcm9tICdAdW5oZWFkL2FkZG9ucy92aXRlJ1xuaW1wb3J0IERldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCB7IHVuaGVhZFZ1ZUNvbXBvc2FibGVzSW1wb3J0cyB9IGZyb20gJ0B1bmhlYWQvdnVlJ1xuXG4vLyBsb2NhbCB2aXRlIHBsdWdpblxuaW1wb3J0IHsgVnVlcm9NYXJrZG93bkRvYyB9IGZyb20gJy4vdml0ZS1wbHVnaW4vdnVlcm8tZG9jJ1xuaW1wb3J0IHsgUHVyZ2VDb21tZW50cyB9IGZyb20gJy4vdml0ZS1wbHVnaW4vcHVyZ2UtY29tbWVudHMnXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgbWFpbiBjb25maWd1cmF0aW9uIGZpbGUgZm9yIHZpdGVqc1xuICpcbiAqIEBzZWUgaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZ1xuICovXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgaXNTc3JCdWlsZCB9KSA9PiAoe1xuICAvLyBQcm9qZWN0IHJvb3QgZGlyZWN0b3J5ICh3aGVyZSBpbmRleC5odG1sIGlzIGxvY2F0ZWQpLlxuICByb290OiBwcm9jZXNzLmN3ZCgpLFxuICAvLyBCYXNlIHB1YmxpYyBwYXRoIHdoZW4gc2VydmVkIGluIGRldmVsb3BtZW50IG9yIHByb2R1Y3Rpb24uXG4gIC8vIFlvdSBhbHNvIG5lZWQgdG8gYWRkIHRoaXMgYmFzZSBsaWtlIGBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCdteS1zdWJkaXJlY3RvcnknKWBcbiAgLy8gaW4gLi9zcmMvcm91dGVyLnRzXG4gIC8vIGJhc2U6ICcvbXktc3ViZGlyZWN0b3J5LycsXG4gIGJhc2U6ICcvJyxcbiAgcHVibGljRGlyOiAncHVibGljJyxcbiAgbG9nTGV2ZWw6ICdpbmZvJyxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICcvQHNyYy8nLFxuICAgICAgICByZXBsYWNlbWVudDogYC9zcmMvYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICcvQHNlcnZlci8nLFxuICAgICAgICByZXBsYWNlbWVudDogYC9zZXJ2ZXIvYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgLy8gZGV2ZWxvcG1lbnQgc2VydmVyIGNvbmZpZ3VyYXRpb25cbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgfSxcbiAgc3NyOiB7XG4gICAgLy8gYWRkaW5nIHRob3NlIGRlcGVuZGVuY2llcyB0byB0aGUgc3NyIGJ1aWxkIGFsbG93IHRvIHVzZSBjb21waWxlIHRpbWUgZmxhZ3NcbiAgICBub0V4dGVybmFsOiBpc1Byb2R1Y3Rpb25cbiAgICAgID8gWyd2dWUnLCAndnVlLWkxOG4nLCAndnVlLXJvdXRlciddXG4gICAgICA6IFsndnVlLWkxOG4nLCAndnVlLXJvdXRlciddLFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICAvLyBjb21waWxlIHRpbWUgZmxhZ3MgLSBhbGxvdyB0byB0cmVlIHNoYWtlIHNzciBjb2RlIGlmIG5vdCBuZWVkZWRcbiAgICBfX1ZVRVJPX1NTUl9CVUlMRF9fOiBlbnYuU1NSX0JVSUxEXG4gICAgICA/ICd0cnVlJ1xuICAgICAgOiAnZmFsc2UnLFxuICAgIC8vIGh0dHBzOi8vdnVlanMub3JnL2FwaS9jb21waWxlLXRpbWUtZmxhZ3MuaHRtbFxuICAgIF9fVlVFX09QVElPTlNfQVBJX186ICd0cnVlJyxcbiAgICBfX1ZVRV9QUk9EX0RFVlRPT0xTX186IGlzRGVidWdcbiAgICAgID8gJ3RydWUnXG4gICAgICA6ICdmYWxzZScsXG4gICAgX19WVUVfUFJPRF9IWURSQVRJT05fTUlTTUFUQ0hfREVUQUlMU19fOiBpc0RlYnVnXG4gICAgICA/ICd0cnVlJ1xuICAgICAgOiAnZmFsc2UnLFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgY3NzTWluaWZ5OiBpc0RlYnVnXG4gICAgICA/IGZhbHNlXG4gICAgICA6ICdlc2J1aWxkJyxcbiAgICBtaW5pZnk6IGlzRGVidWdcbiAgICAgID8gZmFsc2VcbiAgICAgIDogJ3RlcnNlcicsXG4gICAgc291cmNlbWFwOiBpc0RlYnVnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBmb3JtYXQ6ICdlc20nLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogaXNTc3JCdWlsZCA/ICdbbmFtZV0ubWpzJyA6ICdbbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgLy8gVXNpbmcgb25seSBoYXNoIHRvIHByZXZlbnQgYWRibG9ja2VycyBmcm9tIGJsb2NraW5nIGFzc2V0cyB0aGF0IG1hdGNoIHRoZWlyIHBhdHRlcm5zLlxuICAgICAgICBjaHVua0ZpbGVOYW1lczogaXNEZWJ1Z1xuICAgICAgICAgID8gYGFzc2V0cy9fL1tuYW1lXS4ke2lzU3NyQnVpbGQgPyAnbWpzJyA6ICdqcyd9YFxuICAgICAgICAgIDogYGFzc2V0cy9fL1toYXNoXS4ke2lzU3NyQnVpbGQgPyAnbWpzJyA6ICdqcyd9YCxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGlzRGVidWdcbiAgICAgICAgICA/ICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJ1xuICAgICAgICAgIDogJ2Fzc2V0cy9baGFzaF1bZXh0bmFtZV0nLFxuICAgICAgICAvLyBVc2luZyBtYW51YWxDaHVua3MgdG8gZ3JvdXAgbGF5b3V0IHNjc3MgaW4gb25lIGNodW5rIHRvIGF2b2lkIEN1bXVsYXRpdmUgTGF5b3V0IFNoaWZ0IChDTFMpXG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIGlmIChpZC5lbmRzV2l0aCgnc2Nzcy9tYWluLnNjc3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdsYXlvdXRzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaWQuZW5kc1dpdGgoJy5zY3NzJykgJiYgaWQubWF0Y2goL2NvbXBvbmVudHNcXC9sYXlvdXRzXFwvKD86Lio/KXNjc3MkLykpIHtcbiAgICAgICAgICAgIHJldHVybiAnbGF5b3V0cydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICAvKipcbiAgICAgKiBTaG93cyBhIHF1aWNrIG92ZXJ2aWV3IG9mIHlvdXIgYXBwLCBpbmNsdWRpbmcgdGhlIFZ1ZSB2ZXJzaW9uLCBwYWdlcyBhbmQgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZ0b29scy1uZXh0LnZ1ZWpzLm9yZy9cbiAgICAgKi9cbiAgICBEZXZUb29scygpLFxuXG4gICAgLyoqXG4gICAgICogdW5wbHVnaW4tdnVlLXJvdXRlciBwbHVnaW4gZ2VuZXJhdGUgcm91dGVzIGJhc2VkIG9uIGZpbGUgc3lzdGVtXG4gICAgICogYWxsb3cgdG8gdXNlIHR5cGVkIHJvdXRlcyBhbmQgdXNhZ2Ugb2YgZGVmaW5lTG9hZGVyXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vdXZyLmVzbS5pcy9yZmNzL2RhdGEtbG9hZGVycy9cbiAgICAgKi9cbiAgICBWdWVSb3V0ZXIoe1xuICAgICAgcm91dGVzRm9sZGVyOiAnc3JjL3BhZ2VzJyxcbiAgICAgIGR0czogJy4vdHlwZXMvcm91dGVyLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogcGx1Z2luLXZ1ZSBwbHVnaW4gaW5qZWN0IHZ1ZSBsaWJyYXJ5IGFuZCBhbGxvdyBzZmMgZmlsZXMgdG8gd29yayAoKi52dWUpXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92aXRlanMvdml0ZS1wbHVnaW4tdnVlL2Jsb2IvbWFpbi9wYWNrYWdlcy9wbHVnaW4tdnVlL1JFQURNRS5tZFxuICAgICAqL1xuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvXSxcbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogdGFnID0+IFsnaWNvbmlmeS1pY29uJ10uaW5jbHVkZXModGFnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvKipcbiAgICAgKiB1bnBsdWdpbi12dWUtaTE4biBwbHVnaW4gZG9lcyBpMThuIHJlc291cmNlcyBwcmUtY29tcGlsYXRpb24gLyBvcHRpbWl6YXRpb25zXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy9ibG9iL21haW4vcGFja2FnZXMvdW5wbHVnaW4tdnVlLWkxOG4vUkVBRE1FLm1kXG4gICAgICovXG4gICAgSTE4bih7XG4gICAgICBpbmNsdWRlOiByZXNvbHZlKGRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKSwgJy4vc3JjL2xvY2FsZXMvKionKSxcbiAgICAgIGZ1bGxJbnN0YWxsOiBmYWxzZSxcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIFVuaGVhZCBwcm92aWRlcyBhIFZpdGUgcGx1Z2luIHRvIG9wdGltaXNlIHlvdXIgYnVpbGRzLCBieSByZW1vdmluZyBjb21wb3NhYmxlcyB0aGF0IGFyZW4ndCBuZWVkZWQgYW5kIHNpbXBsaWZ5aW5nIHlvdXIgY29kZS5cbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly91bmhlYWQuaGFybGFuencuY29tL2d1aWRlL2dldHRpbmctc3RhcnRlZC92aXRlLXBsdWdpblxuICAgICAqL1xuICAgIFVuaGVhZCgpLFxuXG4gICAgLyoqXG4gICAgICogdW5wbHVnaW4tYXV0by1pbXBvcnQgYWxsb3cgdG8gYXV0b21hdGljYWx5IGltcG9ydCBtb2R1bGVzL2NvbXBvbmVudHNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgICovXG4gICAgSW1wb3J0cyh7XG4gICAgICBkdHM6ICcuL3R5cGVzL2ltcG9ydHMuZC50cycsXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gICAgICAgIHVuaGVhZFZ1ZUNvbXBvc2FibGVzSW1wb3J0cyxcbiAgICAgIF0sXG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb3NhYmxlcycsICdzcmMvc3RvcmVzJywgJ3NyYy91dGlscyddLFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhbiBpbnRlcm5hbCB2aXRlIHBsdWdpbiB0aGF0IGxvYWQgbWFya2Rvd24gZmlsZXMgYXMgdnVlIGNvbXBvbmVudHMuXG4gICAgICpcbiAgICAgKiBAc2VlIC9kb2N1bWVudGF0aW9uXG4gICAgICogQHNlZSAvdml0ZS1wbHVnaW4vdnVlcm8tZG9jXG4gICAgICogQHNlZSAvc3JjL2NvbXBvbmVudHMvcGFydGlhbHMvZG9jdW1lbnRhdGlvbi9Eb2N1bWVudGF0aW9uSXRlbS52dWVcbiAgICAgKiBAc2VlIC9zcmMvY29tcG9zYWJsZS91c2VNYXJrZG93blRvYy50c1xuICAgICAqL1xuICAgIFZ1ZXJvTWFya2Rvd25Eb2Moe1xuICAgICAgcGF0aFByZWZpeDogJ2RvY3VtZW50YXRpb24nLFxuICAgICAgd3JhcHBlckNvbXBvbmVudDogJ0RvY3VtZW50YXRpb25JdGVtJyxcbiAgICAgIHNoaWtpOiB7XG4gICAgICAgIHRoZW1lczoge1xuICAgICAgICAgIGxpZ2h0OiAnbWluLWxpZ2h0JyxcbiAgICAgICAgICBkYXJrOiAnZ2l0aHViLWRhcmsnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNvdXJjZU1ldGE6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZWRpdFByb3RvY29sOiAndnNjb2RlOi8vdnNjb2RlLXJlbW90ZS93c2wrVWJ1bnR1JywgLy8gb3IgJ3ZzY29kZTovL2ZpbGUnXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhbiBpbnRlcm5hbCB2aXRlIHBsdWdpbiB0aGF0IHJlbW92ZSBodG1sIGNvbW1lbnRzIGZyb20gY29kZS5cbiAgICAgKlxuICAgICAqIEBzZWUgL3ZpdGUtcGx1Z2luL3B1cmdlLWNvbW1lbnRzXG4gICAgICovXG4gICAgUHVyZ2VDb21tZW50cygpLFxuXG4gICAgLyoqXG4gICAgICogdW5wbHVnaW4tdnVlLWNvbXBvbmVudHMgcGx1Z2luIGlzIHJlc3BvbnNpYmxlIG9mIGF1dG9sb2FkaW5nIGNvbXBvbmVudHNcbiAgICAgKiBkb2N1bWVudGF0aW9uIGFuZCBtZCBmaWxlIGFyZSBsb2FkZWQgZm9yIGVsZW1lbnRzIGFuZCBjb21wb25lbnRzIHNlY3Rpb25zXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgICAqL1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgZGlyczogWydkb2N1bWVudGF0aW9uJywgJ3NyYy9jb21wb25lbnRzJ10sXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgZHRzOiAnLi90eXBlcy9jb21wb25lbnRzLmQudHMnLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIHZpdGUtcGx1Z2luLXB3YSBnZW5lcmF0ZSBtYW5pZmVzdC5qc29uIGFuZCByZWdpc3RlciBzZXJ2aWNlcyB3b3JrZXIgdG8gZW5hYmxlIFBXQVxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gICAgICovXG4gICAgVml0ZVBXQSh7XG4gICAgICBiYXNlOiAnLycsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ2Zhdmljb24uaWNvJywgJ3JvYm90cy50eHQnLCAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdWdWVybyAtIEEgY29tcGxldGUgVnVlIDMgZGVzaWduIHN5c3RlbScsXG4gICAgICAgIHNob3J0X25hbWU6ICdWdWVybycsXG4gICAgICAgIHN0YXJ0X3VybDogJy8/dXRtX3NvdXJjZT1wd2EnLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG1vZGU6IGlzUHJvZHVjdGlvblxuICAgICAgICA/ICdwcm9kdWN0aW9uJ1xuICAgICAgICA6ICdkZXZlbG9wbWVudCcsXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwcmVjYWNoZSBmaWxlcyB0aGF0IG1hdGNoIHRoZSBnbG9iIHBhdHRlcm5cbiAgICAgICAgICpcbiAgICAgICAgICogQHNlZSBodHRwczovL3ZpdGUtcHdhLW9yZy5uZXRsaWZ5LmFwcC9ndWlkZS9zZXJ2aWNlLXdvcmtlci1wcmVjYWNoZS5odG1sXG4gICAgICAgICAqL1xuICAgICAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsbWpzLGNzcyxpY28scG5nLHN2Zyx3ZWJwLGpwZyxqcGVnLGh0bWx9J10sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogcm9sbHVwLXBsdWdpbi1wdXJnZWNzcyBwbHVnaW4gaXMgcmVzcG9uc2libGUgb2YgcHVyZ2luZyBjc3MgcnVsZXNcbiAgICAgKiB0aGF0IGFyZSBub3QgdXNlZCBpbiB0aGUgYnVuZGxlXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9GdWxsSHVtYW4vcHVyZ2Vjc3MvdHJlZS9tYWluL3BhY2thZ2VzL3JvbGx1cC1wbHVnaW4tcHVyZ2Vjc3NcbiAgICAgKi9cbiAgICBQdXJnZUNTUyh7XG4gICAgICBvdXRwdXQ6IGZhbHNlLFxuICAgICAgY29udGVudDogW2AuL3NyYy8qKi8qLnZ1ZWBdLFxuICAgICAgdmFyaWFibGVzOiBmYWxzZSxcbiAgICAgIHNhZmVsaXN0OiB7XG4gICAgICAgIHN0YW5kYXJkOiBbXG4gICAgICAgICAgLyhhdXR2fGxuaWx8bG5pcnxmYXM/KS8sXG4gICAgICAgICAgLy0obGVhdmV8ZW50ZXJ8YXBwZWFyKSh8LSh0b3xmcm9tfGFjdGl2ZSkpJC8sXG4gICAgICAgICAgL14oPyEofC4qPzopY3Vyc29yLW1vdmUpListbW92ZSQvLFxuICAgICAgICAgIC9ecm91dGVyLWxpbmsofC1leGFjdCktYWN0aXZlJC8sXG4gICAgICAgICAgL2RhdGEtdi0uKi8sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgZGVmYXVsdEV4dHJhY3Rvcihjb250ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRXaXRob3V0U3R5bGVCbG9ja3MgPSBjb250ZW50LnJlcGxhY2UoLzxzdHlsZVteXSs/PFxcL3N0eWxlPi9naSwgJycpXG4gICAgICAgIHJldHVybiBjb250ZW50V2l0aG91dFN0eWxlQmxvY2tzLm1hdGNoKC9bQS1aYS16MC05LV8vOl0qW0EtWmEtejAtOS1fL10rL2cpIHx8IFtdXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICAvLyBQcmVkZWZpbmUgZGVwZW5kZW5jaWVzIGluIG9yZGVyIHRvIHByZXZlbnQgcmVsb2FkaW5nIHRoZW0gaW4gdGhlIGJyb3dzZXIgZHVyaW5nIGRldmVsb3BtZW50LlxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAnQGNrZWRpdG9yL2NrZWRpdG9yNS12dWUnLFxuICAgICAgJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYycsXG4gICAgICAnQG1hcGJveC9tYXBib3gtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIubWluLmpzJyxcbiAgICAgICdAc2hpa2lqcy9yZWh5cGUnLFxuICAgICAgJ0B2ZWUtdmFsaWRhdGUvem9kJyxcbiAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgJ0B2dWV1c2Uvcm91dGVyJyxcbiAgICAgICdAdnVldXNlL2ludGVncmF0aW9ucy91c2VDb29raWVzJyxcbiAgICAgICdAdnVlZm9ybS9tdWx0aXNlbGVjdCcsXG4gICAgICAnQHZ1ZWZvcm0vc2xpZGVyJyxcbiAgICAgICdiaWxsYm9hcmQuanMnLFxuICAgICAgJ2RheWpzJyxcbiAgICAgICdkcm9wem9uZScsXG4gICAgICAnZHJhZ3VsYScsXG4gICAgICAnZGVmdScsXG4gICAgICAnZmlsZXBvbmQnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXNpemUnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1maWxlLXZhbGlkYXRlLXR5cGUnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1leGlmLW9yaWVudGF0aW9uJyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtY3JvcCcsXG4gICAgICAnZmlsZXBvbmQtcGx1Z2luLWltYWdlLWVkaXQnLFxuICAgICAgJ2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3JyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtcmVzaXplJyxcbiAgICAgICdmaWxlcG9uZC1wbHVnaW4taW1hZ2UtdHJhbnNmb3JtJyxcbiAgICAgICdmb2N1cy10cmFwLXZ1ZScsXG4gICAgICAnaW1hc2snLFxuICAgICAgJ25wcm9ncmVzcycsXG4gICAgICAnbm90eWYnLFxuICAgICAgJ21hcGJveC1nbCcsXG4gICAgICAnb2ZldGNoJyxcbiAgICAgICdwaG90b3N3aXBlL2xpZ2h0Ym94JyxcbiAgICAgICdwaG90b3N3aXBlJyxcbiAgICAgICdwbHlyJyxcbiAgICAgICd1Zm8nLFxuICAgICAgJ3YtY2FsZW5kYXInLFxuICAgICAgJ3ZlZS12YWxpZGF0ZScsXG4gICAgICAndnVlJyxcbiAgICAgICd2dWUtc2Nyb2xsdG8nLFxuICAgICAgJ3Z1ZTMtYXBleGNoYXJ0cycsXG4gICAgICAndnVlLXRpcHB5JyxcbiAgICAgICd2dWUtaTE4bicsXG4gICAgICAndnVlLXJvdXRlcicsXG4gICAgICAndW5wbHVnaW4tdnVlLXJvdXRlci9ydW50aW1lJyxcbiAgICAgICdzY3VsZScsXG4gICAgICAvLyAnc2ltcGxlYmFyJyxcbiAgICAgICd0aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXInLFxuICAgICAgJ3Z1ZS1hY2Nlc3NpYmxlLWNvbG9yLXBpY2tlcicsXG4gICAgICAnem9kJyxcbiAgICAgICdyZWh5cGUtZXh0ZXJuYWwtbGlua3MnLFxuICAgICAgJ3JlaHlwZS1yYXcnLFxuICAgICAgJ3JlaHlwZS1zYW5pdGl6ZScsXG4gICAgICAncmVoeXBlLXN0cmluZ2lmeScsXG4gICAgICAncmVoeXBlLXNsdWcnLFxuICAgICAgJ3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncycsXG4gICAgICAncmVtYXJrLWdmbScsXG4gICAgICAncmVtYXJrLXBhcnNlJyxcbiAgICAgICdyZW1hcmstcmVoeXBlJyxcbiAgICAgICd1bmlmaWVkJyxcbiAgICAgICd3b3JrYm94LXdpbmRvdycsXG4gICAgICAndGV4dGFyZWEtbWFya2Rvd24tZWRpdG9yL2Rpc3QvZXNtL2Jvb3RzdHJhcCcsXG4gICAgXSxcbiAgfSxcbn0pKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZXYvTXVzaWMvTmV3Rm9sZGVyL015V29ya1NwYWNlL1N0b2NrTWFuYWdlckZyb250ZW5kL3ZpdGUtcGx1Z2luL3Z1ZXJvLWRvY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZC92aXRlLXBsdWdpbi92dWVyby1kb2MvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZC92aXRlLXBsdWdpbi92dWVyby1kb2MvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiwgUmVzb2x2ZWRDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHR5cGUge1xuICBUaGVtZVJlZ2lzdHJhdGlvbixcbiAgVGhlbWVSZWdpc3RyYXRpb25SYXcsXG4gIEJ1aWx0aW5UaGVtZSxcbiAgU3RyaW5nTGl0ZXJhbFVuaW9uLFxufSBmcm9tICdzaGlraSdcblxuaW1wb3J0IHsgam9pbiwgYmFzZW5hbWUgfSBmcm9tICdwYXRoZSdcbmltcG9ydCB7IGNvbXBpbGVUZW1wbGF0ZSwgcGFyc2UgfSBmcm9tICdAdnVlL2NvbXBpbGVyLXNmYydcbmltcG9ydCBNYWdpY1N0cmluZyBmcm9tICdtYWdpYy1zdHJpbmcnXG5cbmltcG9ydCB7IGNyZWF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbWFya2Rvd24nXG5pbXBvcnQgeyB0cmFuc2Zvcm1FeGFtcGxlTWFya3VwLCB0cmFuc2Zvcm1TbG90cyB9IGZyb20gJy4vdHJhbnNmb3JtJ1xuXG5mdW5jdGlvbiBwYXJzZUlkKGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBpZC5pbmRleE9mKCc/JylcbiAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIGlkXG4gIGVsc2UgcmV0dXJuIGlkLnNsaWNlKDAsIGluZGV4KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsdWdpbk9wdGlvbnMge1xuICBwYXRoUHJlZml4Pzogc3RyaW5nXG4gIHdyYXBwZXJDb21wb25lbnQ6IHN0cmluZ1xuICBzaGlraToge1xuICAgIHRoZW1lczogUGFydGlhbDxcbiAgICAgIFJlY29yZDxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICBUaGVtZVJlZ2lzdHJhdGlvbiB8IFRoZW1lUmVnaXN0cmF0aW9uUmF3IHwgU3RyaW5nTGl0ZXJhbFVuaW9uPEJ1aWx0aW5UaGVtZT5cbiAgICAgID5cbiAgICA+XG4gIH1cbiAgc291cmNlTWV0YT86IHtcbiAgICBlbmFibGVkPzogYm9vbGVhblxuICAgIGVkaXRQcm90b2NvbD86IHN0cmluZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWdWVyb01hcmtkb3duRG9jKG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMpIHtcbiAgbGV0IGNvbmZpZzogUmVzb2x2ZWRDb25maWcgfCB1bmRlZmluZWRcbiAgbGV0IHByb2Nlc3NvcjogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVQcm9jZXNzb3I+PiB8IHVuZGVmaW5lZFxuXG4gIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKClcbiAgY29uc3QgcGF0aFByZWZpeCA9IG9wdGlvbnMucGF0aFByZWZpeCA/IGpvaW4oY3dkLCBvcHRpb25zLnBhdGhQcmVmaXgpIDogY3dkXG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFya2Rvd25Ub1Z1ZShpZDogc3RyaW5nLCByYXc6IHN0cmluZykge1xuICAgIGNvbnN0IHBhdGggPSBwYXJzZUlkKGlkKVxuXG4gICAgLy8gdHJhbnNmb3JtIGV4YW1wbGUgbWFya3VwIHRvIHVzZSBrZWJhYi1jYXNlIHdpdGhvdXQgc2VsZi1jbG9zaW5nIGVsZW1lbnRzLlxuICAgIC8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgcmVoeXBlLXJhdyByZXF1aXJlcyB2YWxpZCBodG1sIChvbmx5IHNvbWUgdGFncyBhcmUgc2VsZi1jbG9zYWJsZSlcbiAgICBjb25zdCBpbnB1dCA9IHRyYW5zZm9ybUV4YW1wbGVNYXJrdXAocmF3KVxuXG4gICAgLy8gcHJvY2VzcyBtYXJrZG93biB3aXRoIHJlbWFya1xuICAgIGlmICghcHJvY2Vzc29yKSBwcm9jZXNzb3IgPSBhd2FpdCBjcmVhdGVQcm9jZXNzb3Iob3B0aW9ucy5zaGlraS50aGVtZXMpXG5cbiAgICBjb25zdCB2RmlsZSA9IGF3YWl0IHByb2Nlc3Nvcj8ucHJvY2VzcyhpbnB1dClcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB2RmlsZS50b1N0cmluZygpXG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSB2RmlsZS5kYXRhPy5mcm9udG1hdHRlciA/PyB7fVxuXG4gICAgLy8gcmVwbGFjZSBjb2RlL2V4YW1wbGUgc2xvdHMgcGxhY2Vob2xkZXJzXG4gICAgY29uc3Qgc2xvdCA9IHRyYW5zZm9ybVNsb3RzKGNvbnRlbnQpXG5cbiAgICAvLyB3cmFwIGNvbnRlbnQgaW4gd3JhcHBlciBjb21wb25lbnQgZGVmYXVsdCBzbG90XG4gICAgY29uc3Qgc2ZjID0gW1xuICAgICAgYDx0ZW1wbGF0ZT5gLFxuICAgICAgYCAgPCR7b3B0aW9ucy53cmFwcGVyQ29tcG9uZW50fSA6ZnJvbnRtYXR0ZXI9XCJmcm9udG1hdHRlclwiIDpzb3VyY2UtbWV0YT1cInNvdXJjZU1ldGFcIj5gLFxuICAgICAgYCAgICAke3Nsb3R9YCxcbiAgICAgIGAgIDwvJHtvcHRpb25zLndyYXBwZXJDb21wb25lbnR9PmAsXG4gICAgICBgPC90ZW1wbGF0ZT5gLFxuICAgIF0uam9pbignXFxuJylcblxuICAgIC8vIHBhcnNlIHRlbXBsYXRlIHdpdGggdnVlIHNmYyBjb21waWxlclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlKHNmYywge1xuICAgICAgZmlsZW5hbWU6IHBhdGgsXG4gICAgICBzb3VyY2VNYXA6IEJvb2xlYW4oY29uZmlnPy5idWlsZD8uc291cmNlbWFwKSxcbiAgICAgIHRlbXBsYXRlUGFyc2VPcHRpb25zOiB7XG4gICAgICAgIGlzQ3VzdG9tRWxlbWVudDogdGFnID0+IFsnaWNvbmlmeS1pY29uJ10uaW5jbHVkZXModGFnKSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGlmIChyZXN1bHQuZXJyb3JzLmxlbmd0aCB8fCByZXN1bHQuZGVzY3JpcHRvci50ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQuZXJyb3JzKVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1hcmtkb3duOiB1bmFibGUgdG8gcGFyc2UgdmlydHVhbCBmaWxlIGdlbmVyYXRlZCBmb3IgXCIke2lkfVwiYClcbiAgICB9XG5cbiAgICAvLyBjb21waWxlIHRlbXBsYXRlIHdpdGggdnVlIHNmYyBjb21waWxlclxuICAgIGNvbnN0IGlzU1NSID0gQm9vbGVhbihjb25maWc/LmJ1aWxkPy5zc3IpXG4gICAgY29uc3QgeyBjb2RlLCBlcnJvcnMgfSA9IGNvbXBpbGVUZW1wbGF0ZSh7XG4gICAgICBmaWxlbmFtZTogcGF0aCxcbiAgICAgIGlkOiBwYXRoLFxuICAgICAgYXN0OiByZXN1bHQuZGVzY3JpcHRvci50ZW1wbGF0ZS5hc3QsXG4gICAgICBzb3VyY2U6IHJlc3VsdC5kZXNjcmlwdG9yLnRlbXBsYXRlLmNvbnRlbnQsXG4gICAgICBwcmVwcm9jZXNzTGFuZzogcmVzdWx0LmRlc2NyaXB0b3IudGVtcGxhdGUubGFuZyxcbiAgICAgIHNzcjogaXNTU1IsXG4gICAgICBzc3JDc3NWYXJzOiByZXN1bHQuZGVzY3JpcHRvcj8uY3NzVmFycyxcbiAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczogZmFsc2UsXG4gICAgICBpc1Byb2Q6IGNvbmZpZz8uaXNQcm9kdWN0aW9uLFxuICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgIGlzQ3VzdG9tRWxlbWVudDogdGFnID0+IFsnaWNvbmlmeS1pY29uJ10uaW5jbHVkZXModGFnKSxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9ycylcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNYXJrZG93bjogdW5hYmxlIHRvIGNvbXBpbGUgdmlydHVhbCBmaWxlIFwiJHtpZH1cImApXG4gICAgfVxuXG4gICAgLy8gc291cmNlIGlzIHVzZWQgdG8gZGlzcGxheSBlZGl0IHNvdXJjZSBsaW5rIGluIHRoZSBkb2NzXG4gICAgbGV0IHNvdXJjZU1ldGEgPSAndW5kZWZpbmVkJ1xuICAgIGlmIChvcHRpb25zLnNvdXJjZU1ldGE/LmVuYWJsZWQpIHtcbiAgICAgIHNvdXJjZU1ldGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHJlbGF0aXZlUGF0aDogcGF0aC5zdWJzdHJpbmcoY3dkLmxlbmd0aCksXG4gICAgICAgIGJhc2VuYW1lOiBiYXNlbmFtZShwYXRoKSxcbiAgICAgICAgcGF0aDogY29uZmlnPy5pc1Byb2R1Y3Rpb24gPyAnJyA6IHBhdGgsXG4gICAgICAgIGVkaXRQcm90b2NvbDogY29uZmlnPy5pc1Byb2R1Y3Rpb24gPyAnJyA6IG9wdGlvbnMuc291cmNlTWV0YS5lZGl0UHJvdG9jb2wsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHMgPSBuZXcgTWFnaWNTdHJpbmcoY29kZSwge1xuICAgICAgZmlsZW5hbWU6IHBhdGgsXG4gICAgfSlcblxuICAgIHMucHJlcGVuZChgaW1wb3J0IHsgcmVhY3RpdmUgfSBmcm9tICd2dWUnXFxuYClcbiAgICBzLnByZXBlbmQoYGltcG9ydCB7IHVzZURhcmttb2RlIH0gZnJvbSAnL0BzcmMvY29tcG9zYWJsZXMvZGFya21vZGUnXFxuYClcblxuICAgIGlmIChpc1NTUikge1xuICAgICAgcy5yZXBsYWNlKCdleHBvcnQgZnVuY3Rpb24gc3NyUmVuZGVyJywgJ2Z1bmN0aW9uIHNzclJlbmRlcicpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5yZXBsYWNlKCdleHBvcnQgZnVuY3Rpb24gcmVuZGVyJywgJ2Z1bmN0aW9uIHJlbmRlcicpXG4gICAgfVxuXG4gICAgcy5hcHBlbmQoYGNvbnN0IF9fZnJvbnRtYXR0ZXIgPSAke0pTT04uc3RyaW5naWZ5KGZyb250bWF0dGVyKX07XFxuYClcbiAgICBzLmFwcGVuZChgY29uc3Qgc2V0dXAgPSAoKSA9PiAoe1xcbmApXG4gICAgcy5hcHBlbmQoYCAgZnJvbnRtYXR0ZXI6IHJlYWN0aXZlKF9fZnJvbnRtYXR0ZXIpLFxcbmApXG4gICAgcy5hcHBlbmQoYCAgZGFya21vZGU6IHVzZURhcmttb2RlKCksXFxuYClcbiAgICBzLmFwcGVuZChgICBzb3VyY2VNZXRhOiAke3NvdXJjZU1ldGF9LFxcbmApXG4gICAgcy5hcHBlbmQoYH0pO1xcbmApXG5cbiAgICBpZiAoaXNTU1IpIHtcbiAgICAgIHMuYXBwZW5kKGBjb25zdCBfX3NjcmlwdCA9IHsgc3NyUmVuZGVyLCBzZXR1cCB9O1xcbmApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5hcHBlbmQoYGNvbnN0IF9fc2NyaXB0ID0geyByZW5kZXIsIHNldHVwIH07XFxuYClcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZz8uaXNQcm9kdWN0aW9uKSB7XG4gICAgICBzLmFwcGVuZChbXG4gICAgICAgIGBfX3NjcmlwdC5fX2htcklkID0gJHtKU09OLnN0cmluZ2lmeShwYXRoKX07YCxcbiAgICAgICAgJ2lmIChpbXBvcnQubWV0YS5ob3QpIHsnLFxuICAgICAgICAnICB0eXBlb2YgX19WVUVfSE1SX1JVTlRJTUVfXyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfX1ZVRV9ITVJfUlVOVElNRV9fLmNyZWF0ZVJlY29yZChfX3NjcmlwdC5fX2htcklkLCBfX3NjcmlwdCk7JyxcbiAgICAgICAgJyAgaW1wb3J0Lm1ldGEuaG90LmFjY2VwdCgobW9kKSA9PiB7JyxcbiAgICAgICAgJyAgICBpZiAoIW1vZCknLFxuICAgICAgICAnICAgICAgcmV0dXJuOycsXG4gICAgICAgICcgICAgY29uc3QgeyBkZWZhdWx0OiB1cGRhdGVkLCBfcmVyZW5kZXJfb25seTogX3JlcmVuZGVyX29ubHkyIH0gPSBtb2Q7JyxcbiAgICAgICAgJyAgICBpZiAoX3JlcmVuZGVyX29ubHkyKSB7JyxcbiAgICAgICAgJyAgICAgIF9fVlVFX0hNUl9SVU5USU1FX18ucmVyZW5kZXIodXBkYXRlZC5fX2htcklkLCB1cGRhdGVkLnJlbmRlcik7JyxcbiAgICAgICAgJyAgICB9IGVsc2UgeycsXG4gICAgICAgICcgICAgICBfX1ZVRV9ITVJfUlVOVElNRV9fLnJlbG9hZCh1cGRhdGVkLl9faG1ySWQsIHVwZGF0ZWQpOycsXG4gICAgICAgICcgICAgfScsXG4gICAgICAgICcgIH0pOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJycsXG4gICAgICBdLmpvaW4oJ1xcbicpKVxuICAgIH1cblxuICAgIHMuYXBwZW5kKGBleHBvcnQgZGVmYXVsdCBfX3NjcmlwdDtcXG5gKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvZGU6IHMudG9TdHJpbmcoKSxcbiAgICAgIG1hcDogY29uZmlnPy5idWlsZD8uc291cmNlbWFwID8gcy5nZW5lcmF0ZU1hcCgpIDogbnVsbCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICd2aXRlLXBsdWdpbi12dWVyby1kb2MnLFxuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIGNvbmZpZ1Jlc29sdmVkKF9jb25maWcpIHtcbiAgICAgIGNvbmZpZyA9IF9jb25maWdcbiAgICB9LFxuICAgIHRyYW5zZm9ybShyYXcsIGlkKSB7XG4gICAgICBpZiAoaWQuZW5kc1dpdGgoJy5tZCcpICYmIGlkLnN0YXJ0c1dpdGgocGF0aFByZWZpeCkpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtkb3duVG9WdWUoaWQsIHJhdylcbiAgICAgIH1cbiAgICB9LFxuICB9IHNhdGlzZmllcyBQbHVnaW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVnVlcm9NYXJrZG93bkRvY1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZXYvTXVzaWMvTmV3Rm9sZGVyL015V29ya1NwYWNlL1N0b2NrTWFuYWdlckZyb250ZW5kL3ZpdGUtcGx1Z2luL3Z1ZXJvLWRvY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZC92aXRlLXBsdWdpbi92dWVyby1kb2MvbWFya2Rvd24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZC92aXRlLXBsdWdpbi92dWVyby1kb2MvbWFya2Rvd24udHNcIjtpbXBvcnQgeWFtbCBmcm9tICdqcy15YW1sJ1xuaW1wb3J0IHJlaHlwZUV4dGVybmFsTGlua3MgZnJvbSAncmVoeXBlLWV4dGVybmFsLWxpbmtzJ1xuaW1wb3J0IHJlaHlwZVJhdyBmcm9tICdyZWh5cGUtcmF3J1xuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSAncmVoeXBlLXNsdWcnXG5pbXBvcnQgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyBmcm9tICdyZWh5cGUtYXV0b2xpbmstaGVhZGluZ3MnXG5pbXBvcnQgcmVoeXBlU3RyaW5naWZ5IGZyb20gJ3JlaHlwZS1zdHJpbmdpZnknXG5pbXBvcnQgcmVtYXJrUGFyc2UgZnJvbSAncmVtYXJrLXBhcnNlJ1xuaW1wb3J0IHJlbWFya0dmbSBmcm9tICdyZW1hcmstZ2ZtJ1xuaW1wb3J0IHJlbWFya1JlaHlwZSBmcm9tICdyZW1hcmstcmVoeXBlJ1xuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gJ3JlbWFyay1mcm9udG1hdHRlcidcbmltcG9ydCByZWh5cGVTaGlraSBmcm9tICdAc2hpa2lqcy9yZWh5cGUnXG5pbXBvcnQgdHlwZSB7XG4gIFRoZW1lUmVnaXN0cmF0aW9uLFxuICBUaGVtZVJlZ2lzdHJhdGlvblJhdyxcbiAgQnVpbHRpbkxhbmd1YWdlLFxuICBCdWlsdGluVGhlbWUsXG4gIFN0cmluZ0xpdGVyYWxVbmlvbixcbn0gZnJvbSAnc2hpa2knXG5pbXBvcnQgeyB1bmlmaWVkIH0gZnJvbSAndW5pZmllZCdcbmltcG9ydCB0eXBlIHsgTGl0ZXJhbCwgUGFyZW50IH0gZnJvbSAndW5pc3QnXG5cbmNvbnN0IGxhbmdzID0gW1xuICAndnVlJyxcbiAgJ3Z1ZS1odG1sJyxcbiAgJ3R5cGVzY3JpcHQnLFxuICAnYmFzaCcsXG4gICdzY3NzJyxcbl0gc2F0aXNmaWVzIEJ1aWx0aW5MYW5ndWFnZVtdXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9jZXNzb3IoXG4gIHRoZW1lczogUGFydGlhbDxcbiAgICBSZWNvcmQ8XG4gICAgICBzdHJpbmcsXG4gICAgICBUaGVtZVJlZ2lzdHJhdGlvbiB8IFRoZW1lUmVnaXN0cmF0aW9uUmF3IHwgU3RyaW5nTGl0ZXJhbFVuaW9uPEJ1aWx0aW5UaGVtZT5cbiAgICA+XG4gID4sXG4pIHtcbiAgcmV0dXJuIHVuaWZpZWQoKVxuICAgIC51c2UocmVtYXJrUGFyc2UpXG4gICAgLnVzZShyZW1hcmtGcm9udG1hdHRlcilcbiAgICAudXNlKCgpID0+ICh0cmVlLCBmaWxlKSA9PiB7XG4gICAgICBpZiAoJ2NoaWxkcmVuJyBpbiB0cmVlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRyZWUgYXMgUGFyZW50XG4gICAgICAgIGlmIChwYXJlbnQuY2hpbGRyZW5bMF0udHlwZSA9PT0gJ3lhbWwnKSB7XG4gICAgICAgICAgLy8gc3RvcmUgZnJvbnRtYXR0ZXIgaW4gdmZpbGVcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IChwYXJlbnQuY2hpbGRyZW5bMF0gYXMgTGl0ZXJhbCkudmFsdWVcbiAgICAgICAgICBmaWxlLmRhdGEuZnJvbnRtYXR0ZXIgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8geWFtbC5sb2FkKHZhbHVlKSA6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAudXNlKHJlbWFya0dmbSlcbiAgICAudXNlKHJlbWFya1JlaHlwZSwgeyBhbGxvd0Rhbmdlcm91c0h0bWw6IHRydWUgfSlcbiAgICAudXNlKHJlaHlwZVJhdylcbiAgICAudXNlKHJlaHlwZVNoaWtpLCB7XG4gICAgICB0aGVtZXMsXG4gICAgICBsYW5ncyxcbiAgICB9KVxuICAgIC51c2UocmVoeXBlRXh0ZXJuYWxMaW5rcywgeyByZWw6IFsnbm9mb2xsb3cnXSwgdGFyZ2V0OiAnX2JsYW5rJyB9KVxuICAgIC51c2UocmVoeXBlU2x1ZylcbiAgICAudXNlKHJlaHlwZUF1dG9saW5rSGVhZGluZ3MsIHtcbiAgICAgIGJlaGF2aW9yOiAnYXBwZW5kJyxcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgICB0YWdOYW1lOiAnaWNvbmlmeS1pY29uJyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGNsYXNzTmFtZTogWydpY29uaWZ5IHRvYy1saW5rLWFuY2hvciddLFxuICAgICAgICAgIGljb246ICdsdWNpZGU6bGluaycsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH0sXG4gICAgICB0ZXN0OiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShub2RlLnByb3BlcnRpZXM/LmNsYXNzTmFtZSlcbiAgICAgICAgICAmJiBub2RlLnByb3BlcnRpZXM/LmNsYXNzTmFtZT8uaW5jbHVkZXMoJ3RvYy1pZ25vcmUnKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQm9vbGVhbihub2RlLnByb3BlcnRpZXM/LmlkKVxuICAgICAgfSxcbiAgICB9KVxuICAgIC51c2UocmVoeXBlU3RyaW5naWZ5KVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZXYvTXVzaWMvTmV3Rm9sZGVyL015V29ya1NwYWNlL1N0b2NrTWFuYWdlckZyb250ZW5kL3ZpdGUtcGx1Z2luL3Z1ZXJvLWRvY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZC92aXRlLXBsdWdpbi92dWVyby1kb2MvdHJhbnNmb3JtLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Rldi9NdXNpYy9OZXdGb2xkZXIvTXlXb3JrU3BhY2UvU3RvY2tNYW5hZ2VyRnJvbnRlbmQvdml0ZS1wbHVnaW4vdnVlcm8tZG9jL3RyYW5zZm9ybS50c1wiO2ltcG9ydCB7IGtlYmFiQ2FzZSB9IGZyb20gJ3NjdWxlJ1xuXG5jb25zdCBTRUxGX0NMT1NJTkdfVEFHX1JFR0VYID0gLzwoW15cXHM+PC9dKykoW14+XSspXFwvPi9nXG5jb25zdCBPUEVOX1RBR19SRUdFWCA9IC88KFteXFxzPjwvXSspL2dcbmNvbnN0IENMT1NFX1RBR19SRUdFWCA9IC88XFwvKFteXFxzPjwvXSspL2dcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUV4YW1wbGVNYXJrdXAocmF3OiBzdHJpbmcpIHtcbiAgbGV0IG91dHB1dCA9IHJhd1xuICBsZXQgY29udGVudDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBudWxsXG4gIGlmICgoY29udGVudCA9IHJhdy5tYXRjaCgvPCEtLWV4YW1wbGUtLT4oW1xcc1xcU10qPyk8IS0tXFwvZXhhbXBsZS0tPi8pKSkge1xuICAgIGNvbnN0IGtlYmFiQ29udGVudCA9IGNvbnRlbnRbMV1cbiAgICAgIC5yZXBsYWNlQWxsKFNFTEZfQ0xPU0lOR19UQUdfUkVHRVgsIChzdWJzdHJpbmcsIHRhZykgPT4ge1xuICAgICAgICByZXR1cm4gc3Vic3RyaW5nLnJlcGxhY2UoJy8+JywgYD48LyR7dGFnLnRyaW0oKX0+YClcbiAgICAgIH0pXG4gICAgICAucmVwbGFjZUFsbChPUEVOX1RBR19SRUdFWCwgKHN1YnN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gYDwke2tlYmFiQ2FzZShzdWJzdHJpbmcuc3Vic3RyaW5nKDEpLnRyaW0oKSl9YFxuICAgICAgfSlcbiAgICAgIC5yZXBsYWNlQWxsKENMT1NFX1RBR19SRUdFWCwgKHN1YnN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gYDwvJHtrZWJhYkNhc2Uoc3Vic3RyaW5nLnN1YnN0cmluZygyKS50cmltKCkpfWBcbiAgICAgIH0pXG4gICAgICAucmVwbGFjZUFsbCgnJiN4Mjc7JywgJ1xcJycpXG5cbiAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZShjb250ZW50WzFdLCBrZWJhYkNvbnRlbnQpXG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1TbG90cyhzb3VyY2U6IHN0cmluZywgY29uZGl0aW9uOiBzdHJpbmcgPSAnJykge1xuICBpZiAoc291cmNlLmluY2x1ZGVzKCc8IS0tY29kZS0tPicpICYmIHNvdXJjZS5pbmNsdWRlcygnPCEtLWV4YW1wbGUtLT4nKSkge1xuICAgIHJldHVybiBgPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZGVmYXVsdD4ke3NvdXJjZX1gXG4gICAgICAucmVwbGFjZShcbiAgICAgICAgYDwhLS1jb2RlLS0+YCxcbiAgICAgICAgYDwvdGVtcGxhdGU+PHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjY29kZT5cXG48c2xvdCBuYW1lPVwiY29kZVwiPjxkaXYgdi1wcmU+YCxcbiAgICAgIClcbiAgICAgIC5yZXBsYWNlKGA8IS0tL2NvZGUtLT5gLCBgPC9kaXY+PC9zbG90PlxcbjwvdGVtcGxhdGU+YClcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICBgPCEtLWV4YW1wbGUtLT5gLFxuICAgICAgICBgPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZXhhbXBsZT5cXG48c2xvdCBuYW1lPVwiZXhhbXBsZVwiPmAsXG4gICAgICApXG4gICAgICAucmVwbGFjZShgPCEtLS9leGFtcGxlLS0+YCwgYDwvc2xvdD5cXG48L3RlbXBsYXRlPmApXG4gIH1cblxuICBpZiAoc291cmNlLmluY2x1ZGVzKCc8IS0tY29kZS0tPicpKSB7XG4gICAgcmV0dXJuIGA8dGVtcGxhdGUgJHtjb25kaXRpb259ICNkZWZhdWx0PiR7c291cmNlfWBcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICBgPCEtLWNvZGUtLT5gLFxuICAgICAgICBgPC90ZW1wbGF0ZT48dGVtcGxhdGUgJHtjb25kaXRpb259ICNjb2RlPlxcbjxzbG90IG5hbWU9XCJjb2RlXCI+PGRpdiB2LXByZT5gLFxuICAgICAgKVxuICAgICAgLnJlcGxhY2UoXG4gICAgICAgIGA8IS0tL2NvZGUtLT5gLFxuICAgICAgICBgPC9kaXY+PC9zbG90PlxcbjwvdGVtcGxhdGU+XFxuPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZXhhbXBsZT48c2xvdCBuYW1lPVwiZXhhbXBsZVwiPjwvc2xvdD48L3RlbXBsYXRlPmAsXG4gICAgICApXG4gIH1cblxuICBpZiAoc291cmNlLmluY2x1ZGVzKCc8IS0tZXhhbXBsZS0tPicpKSB7XG4gICAgcmV0dXJuIGA8dGVtcGxhdGUgJHtjb25kaXRpb259ICNkZWZhdWx0PiR7c291cmNlfWBcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICBgPCEtLWV4YW1wbGUtLT5gLFxuICAgICAgICBgPC90ZW1wbGF0ZT48dGVtcGxhdGUgJHtjb25kaXRpb259ICNleGFtcGxlPlxcbjxzbG90IG5hbWU9XCJleGFtcGxlXCI+YCxcbiAgICAgIClcbiAgICAgIC5yZXBsYWNlKFxuICAgICAgICBgPCEtLS9leGFtcGxlLS0+YCxcbiAgICAgICAgYDwvc2xvdD5cXG48L3RlbXBsYXRlPlxcbjx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2NvZGU+PHNsb3QgbmFtZT1cImNvZGVcIj48L3Nsb3Q+PC90ZW1wbGF0ZT5gLFxuICAgICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICBgPHRlbXBsYXRlICR7Y29uZGl0aW9ufSAjZGVmYXVsdD4ke3NvdXJjZX08L3RlbXBsYXRlPmBcbiAgICArIGA8dGVtcGxhdGUgJHtjb25kaXRpb259ICNleGFtcGxlPjxzbG90IG5hbWU9XCJleGFtcGxlXCI+PC9zbG90PjwvdGVtcGxhdGU+YFxuICAgICsgYDx0ZW1wbGF0ZSAke2NvbmRpdGlvbn0gI2NvZGU+PHNsb3QgbmFtZT1cImNvZGVcIj48L3Nsb3Q+PC90ZW1wbGF0ZT5gXG4gIClcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZC92aXRlLXBsdWdpbi9wdXJnZS1jb21tZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGV2L011c2ljL05ld0ZvbGRlci9NeVdvcmtTcGFjZS9TdG9ja01hbmFnZXJGcm9udGVuZC92aXRlLXBsdWdpbi9wdXJnZS1jb21tZW50cy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9kZXYvTXVzaWMvTmV3Rm9sZGVyL015V29ya1NwYWNlL1N0b2NrTWFuYWdlckZyb250ZW5kL3ZpdGUtcGx1Z2luL3B1cmdlLWNvbW1lbnRzL2luZGV4LnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJ1xuaW1wb3J0IE1hZ2ljU3RyaW5nIGZyb20gJ21hZ2ljLXN0cmluZydcblxuY29uc3QgY29tbWVudFJlID0gLzwhLS0oPzouezIsfT8pLS0+L3NnXG5cbi8qKlxuICogVGhpcyBwbHVnaW4gcmVtb3ZlcyBIVE1MIGNvbW1lbnRzIGZyb20geW91ciBjb2RlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gUHVyZ2VDb21tZW50cygpIHtcbiAgbGV0IHNvdXJjZW1hcDogYm9vbGVhbiB8ICdpbmxpbmUnIHwgJ2hpZGRlbicgfCB1bmRlZmluZWRcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAncHVyZ2UtY29tbWVudHMnLFxuICAgIGVuZm9yY2U6ICdwcmUnLFxuICAgIGNvbmZpZ1Jlc29sdmVkKGNvbmZpZykge1xuICAgICAgc291cmNlbWFwID0gY29uZmlnLmJ1aWxkLnNvdXJjZW1hcFxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiAoY29kZSwgaWQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIShcbiAgICAgICAgICBpZC5lbmRzV2l0aCgnLnZ1ZScpXG4gICAgICAgICAgfHwgaWQuZW5kc1dpdGgoJy5odG1sJylcbiAgICAgICAgICB8fCBpZC5lbmRzV2l0aCgnLnN2ZycpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghY29kZS5pbmNsdWRlcygnPCEtLScpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBzID0gbmV3IE1hZ2ljU3RyaW5nKGNvZGUpXG4gICAgICBzLnJlcGxhY2UoY29tbWVudFJlLCAnJylcblxuICAgICAgaWYgKHMuaGFzQ2hhbmdlZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29kZTogcy50b1N0cmluZygpLFxuICAgICAgICAgIG1hcDogc291cmNlbWFwID8gcy5nZW5lcmF0ZU1hcCgpIDogbnVsbCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0gc2F0aXNmaWVzIFBsdWdpblxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVyxTQUFTLFNBQVMsZUFBZTtBQUNqWSxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGNBQWMsU0FBUyxXQUFXO0FBQzNDLE9BQU8sU0FBUztBQUNoQixPQUFPLGVBQWU7QUFDdEIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGNBQWM7QUFDckIsU0FBUyxtQ0FBbUM7OztBQ041QyxTQUFTLE1BQU0sZ0JBQWdCO0FBQy9CLFNBQVMsaUJBQWlCLGFBQWE7QUFDdkMsT0FBTyxpQkFBaUI7OztBQ1ZvWSxPQUFPLFVBQVU7QUFDN2EsT0FBTyx5QkFBeUI7QUFDaEMsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sNEJBQTRCO0FBQ25DLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZUFBZTtBQUN0QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLGlCQUFpQjtBQVF4QixTQUFTLGVBQWU7QUFHeEIsSUFBTSxRQUFRO0FBQUEsRUFDWjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FB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RjtBQUFBLE1BQ0EsTUFBTSxlQUNGLGVBQ0E7QUFBQSxNQUNKLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNUCxjQUFjLENBQUMsa0RBQWtEO0FBQUEsTUFDbkU7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFELFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxNQUMxQixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsUUFDUixVQUFVO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsaUJBQWlCLFNBQVM7QUFDeEIsY0FBTSw0QkFBNEIsUUFBUSxRQUFRLDBCQUEwQixFQUFFO0FBQzlFLGVBQU8sMEJBQTBCLE1BQU0sa0NBQWtDLEtBQUssQ0FBQztBQUFBLE1BQ2pGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLE1BRUE7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFsiTWFnaWNTdHJpbmciLCAiTWFnaWNTdHJpbmciXQp9Cg==
