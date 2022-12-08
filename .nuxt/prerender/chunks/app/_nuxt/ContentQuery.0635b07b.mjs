import { ref, onServerPrefetch, defineComponent, toRefs, computed, watch, useSlots, useSSRContext, unref, h } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue/index.mjs';
import { a as useNuxtApp, c as createError, b as useRequestEvent } from '../server.mjs';
import { hash, isEqual } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ohash/dist/index.mjs';
import destr from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/destr/dist/index.mjs';
import { withLeadingSlash, joinURL, withoutTrailingSlash } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ufo/dist/index.mjs';
import { parse, serialize } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/cookie-es/dist/index.mjs';
import { appendHeader } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/h3/dist/index.mjs';
import { w as withContentBase, a as addPrerenderPath, s as shouldUseClientDB } from './utils.f30c7f16.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/hookable/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unctx/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/defu/dist/defu.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/graphql-request/dist/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/scule/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/radix3/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/pathe/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unified/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark-util-character/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-emoji/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-slug/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-external-links/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-gfm/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/rehype-raw/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-parse/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/remark-rehype/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/detab/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unist-builder/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/mdurl/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/slugify/slugify.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unist-util-position/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/html-tags/index.js';

const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e, _f, _g;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_g = (_f = getCachedData()) != null ? _f : (_e = options.default) == null ? void 0 : _e.call(options)) != null ? _g : null),
      pending: ref(!hasCachedData()),
      error: ref(nuxt.payload._errors[key] ? createError(nuxt.payload._errors[key]) : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2, _b2;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref((_b2 = (_a2 = options.default) == null ? void 0 : _a2.call(options)) != null ? _b2 : null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const createQueryFetch = (path) => async (query) => {
  var _a;
  if (path) {
    if (query.params().first && (query.params().where || []).length === 0) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!((_a = query.params().sort) == null ? void 0 : _a.length)) {
    query.sort({ _file: 1, $numeric: true });
  }
  const params = query.params();
  const apiPath = withContentBase(`/query/${hash(params)}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const db = await import('./client-db.9105d9bb.mjs').then((m) => m.useContentDatabase());
    return db.fetch(query);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    return createQuery(createQueryFetch(withLeadingSlash(joinURL(query, ...pathParts))));
  }
  return createQuery(createQueryFetch(), query);
}
const _sfc_main = defineComponent({
  name: "ContentQuery",
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = toRefs(props);
    const isPartial = computed(() => {
      var _a;
      return (_a = path.value) == null ? void 0 : _a.includes("/_");
    });
    const { data, refresh } = await useAsyncData(
      `content-query-${hash(props)}`,
      () => {
        let queryBuilder;
        if (path.value) {
          queryBuilder = queryContent(path.value);
        } else {
          queryBuilder = queryContent();
        }
        if (only.value) {
          queryBuilder = queryBuilder.only(only.value);
        }
        if (without.value) {
          queryBuilder = queryBuilder.without(without.value);
        }
        if (where.value) {
          queryBuilder = queryBuilder.where(where.value);
        }
        if (sort.value) {
          queryBuilder = queryBuilder.sort(sort.value);
        }
        if (limit.value) {
          queryBuilder = queryBuilder.limit(limit.value);
        }
        if (skip.value) {
          queryBuilder = queryBuilder.skip(skip.value);
        }
        if (locale.value) {
          queryBuilder = queryBuilder.where({ _locale: locale.value });
        }
        if (find.value === "one") {
          return queryBuilder.findOne();
        }
        if (find.value === "surround") {
          if (!path.value) {
            console.warn("[Content] Surround queries requires `path` prop to be set.");
            console.warn("[Content] Query without `path` will return regular `find()` results.");
            return queryBuilder.find();
          }
          return queryBuilder.findSurround(path);
        }
        return queryBuilder.find();
      }
    );
    watch(() => props, () => refresh(), { deep: true });
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find
    };
    if (props.find === "one") {
      if (!data && (slots == null ? void 0 : slots["not-found"])) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if ((slots == null ? void 0 : slots.empty) && (data == null ? void 0 : data._type) === "markdown" && !((_a = data == null ? void 0 : data.body) == null ? void 0 : _a.children.length)) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots == null ? void 0 : slots["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentQuery = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { ContentQuery as C, _sfc_main as _, useAsyncData as a, assertArray as b, apply as c, withKeys as d, ensureArray as e, createQuery as f, get as g, jsonStringify as j, sortList as s, useCookie as u, withoutKeys as w };
//# sourceMappingURL=ContentQuery.0635b07b.mjs.map
