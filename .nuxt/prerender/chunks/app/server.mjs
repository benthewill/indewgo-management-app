import { getCurrentInstance, toRef, isRef, inject, toRaw, isReactive, defineAsyncComponent, version, defineComponent, watch, watchEffect, reactive, h, ref, computed, provide, Suspense, nextTick, Transition, resolveComponent, shallowRef, useSSRContext, createApp, effectScope, markRaw, withCtx, createVNode, createTextVNode, onErrorCaptured, unref, getCurrentScope, onScopeDispose, triggerRef, toRefs, mergeProps } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue/index.mjs';
import { $fetch } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unctx/dist/index.mjs';
import { hasProtocol, isEqual, parseURL, joinURL } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ufo/dist/index.mjs';
import { createError as createError$1, sendRedirect } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/h3/dist/index.mjs';
import { useHead, createHead as createHead$1 } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@unhead/vue/dist/index.mjs';
import { renderDOMHead, debouncedRenderDOMHead } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@unhead/dom/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue-router/dist/vue-router.node.mjs';
import { error, createNode, createMessage, resetCount, warn, getNode, watchRegistry, isNode, createConfig, clearErrors, setErrors, submitForm, reset, createClasses, generateClassList, sugar, isDOM, isComponent, isConditional, compile } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@formkit/core/dist/index.mjs';
import { cloneAny, extend, camel, kebab, nodeProps, only, except, slugify, isObject as isObject$1, has, isPojo, token, empty, eq, shallowClone, undefine } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@formkit/utils/dist/index.mjs';
import { createLibraryPlugin, inputs } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@formkit/inputs/dist/index.mjs';
import * as defaultRules from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@formkit/rules/dist/index.mjs';
import { createValidationPlugin } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@formkit/validation/dist/index.mjs';
import { createI18nPlugin, en, fr } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@formkit/i18n/dist/index.mjs';
import { createIconHandler, createThemePlugin } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@formkit/themes/dist/index.mjs';
import { createObserver } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@formkit/observer/dist/index.mjs';
import { defu } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/defu/dist/defu.mjs';
import { GraphQLClient } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/graphql-request/dist/index.js';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue/server-renderer/index.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/destr/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/scule/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ohash/dist/index.mjs';
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

var _a, _b, _c, _d, _e, _f;
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a2;
      if (prop === "public") {
        return target.public;
      }
      return (_a2 = target[prop]) != null ? _a2 : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin2, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin2 of plugins2) {
    await applyPlugin(nuxtApp, plugin2);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin2) => {
    if (typeof plugin2 !== "function") {
      return null;
    }
    if (plugin2.length > 1) {
      return (nuxtApp) => plugin2(nuxtApp, nuxtApp.provide);
    }
    return plugin2;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin2) {
  plugin2[NuxtPluginIndicator] = true;
  return plugin2;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error2 = useError();
    error2.value = error2.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function useRequestHeaders(include) {
  var _a2, _b2;
  const headers = (_b2 = (_a2 = useNuxtApp().ssrContext) == null ? void 0 : _a2.event.node.req.headers) != null ? _b2 : {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a2;
  return (_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.event;
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props2, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props2.to || props2.href || "";
      });
      const isExternal = computed(() => {
        if (props2.external) {
          return true;
        }
        if (props2.target && props2.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a2, _b2, _c2;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props2.custom ? { class: props2.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props2.activeClass || options.activeClass,
              exactActiveClass: props2.exactActiveClass || options.exactActiveClass,
              replace: props2.replace,
              ariaCurrentValue: props2.ariaCurrentValue,
              custom: props2.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b2 = (_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) != null ? _b2 : null : to.value || null;
        const target = props2.target || null;
        const rel = props2.noRel ? null : firstNonUndefined(props2.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props2.replace });
        if (props2.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_c2 = slots.default) == null ? void 0 : _c2.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = defineNuxtLink({ componentName: "NuxtLink" });
const nuxtLink = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defineNuxtLink,
  default: __nuxt_component_0$1
}, Symbol.toStringTag, { value: "Module" }));
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defuFn = createDefu((object, key, currentValue, _namespace) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const inlineConfig = {};
defuFn(inlineConfig);
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
const isVue2 = false;
/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol("pinia") ;
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol("pinia:skipHydration") ;
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!hot)) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = hot ? toRefs(ref(state ? state() : {}).value) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (name in localState) {
        console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if (!pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
  };
  {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!hot)) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = () => {
    throw new Error(`\u{1F34D}: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
  } ;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error2) {
        triggerSubscriptions(onErrorCallbackList, error2);
        throw error2;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error2) => {
          triggerSubscriptions(onErrorCallbackList, error2);
          return Promise.reject(error2);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
    },
    partialStore
  ) );
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? options.getters[key] : prop;
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? computed(() => {
          setActivePinia(pinia);
          return getter.call(store, store);
        }) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = (pinia) || currentInstance && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    if (!activePinia) {
      throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    store = toRaw(store);
    const refs = {};
    for (const key in store) {
      const value = store[key];
      if (isRef(value) || isReactive(value)) {
        refs[key] = toRef(store, key);
      }
    }
    return refs;
  }
}
const node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq = defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const components = {
  ContentDoc: defineAsyncComponent(() => import('./_nuxt/ContentDoc.e6fe8562.mjs').then((c) => c.default || c)),
  ContentList: defineAsyncComponent(() => import('./_nuxt/ContentList.86a0e348.mjs').then((c) => c.default || c)),
  ContentNavigation: defineAsyncComponent(() => import('./_nuxt/ContentNavigation.aee114c4.mjs').then((c) => c.default || c)),
  ContentQuery: defineAsyncComponent(() => import('./_nuxt/ContentQuery.475092fd.mjs').then((n) => n.C).then((c) => c.default || c)),
  ContentRenderer: defineAsyncComponent(() => import('./_nuxt/ContentRenderer.1f5e8ba5.mjs').then((c) => c.default || c)),
  ContentRendererMarkdown: defineAsyncComponent(() => import('./_nuxt/ContentRendererMarkdown.12bc62b4.mjs').then((c) => c.default || c)),
  ContentSlot: defineAsyncComponent(() => import('./_nuxt/ContentSlot.a30a52f7.mjs').then((c) => c.default || c)),
  DocumentDrivenEmpty: defineAsyncComponent(() => import('./_nuxt/DocumentDrivenEmpty.b1426f16.mjs').then((c) => c.default || c)),
  DocumentDrivenNotFound: defineAsyncComponent(() => import('./_nuxt/DocumentDrivenNotFound.b4d3af5a.mjs').then((c) => c.default || c)),
  Markdown: defineAsyncComponent(() => import('./_nuxt/Markdown.e38d4f5f.mjs').then((c) => c.default || c)),
  ProseA: defineAsyncComponent(() => import('./_nuxt/ProseA.d30712a3.mjs').then((c) => c.default || c)),
  ProseBlockquote: defineAsyncComponent(() => import('./_nuxt/ProseBlockquote.d5487f9b.mjs').then((c) => c.default || c)),
  ProseCode: defineAsyncComponent(() => import('./_nuxt/ProseCode.dcd5c990.mjs').then((c) => c.default || c)),
  ProseCodeInline: defineAsyncComponent(() => import('./_nuxt/ProseCodeInline.69d96efe.mjs').then((c) => c.default || c)),
  ProseEm: defineAsyncComponent(() => import('./_nuxt/ProseEm.77221f9e.mjs').then((c) => c.default || c)),
  ProseH1: defineAsyncComponent(() => import('./_nuxt/ProseH1.33071886.mjs').then((c) => c.default || c)),
  ProseH2: defineAsyncComponent(() => import('./_nuxt/ProseH2.8efa56bf.mjs').then((c) => c.default || c)),
  ProseH3: defineAsyncComponent(() => import('./_nuxt/ProseH3.e1001b8b.mjs').then((c) => c.default || c)),
  ProseH4: defineAsyncComponent(() => import('./_nuxt/ProseH4.6b3bc1ab.mjs').then((c) => c.default || c)),
  ProseH5: defineAsyncComponent(() => import('./_nuxt/ProseH5.d1055c80.mjs').then((c) => c.default || c)),
  ProseH6: defineAsyncComponent(() => import('./_nuxt/ProseH6.8550f035.mjs').then((c) => c.default || c)),
  ProseHr: defineAsyncComponent(() => import('./_nuxt/ProseHr.4db2187c.mjs').then((c) => c.default || c)),
  ProseImg: defineAsyncComponent(() => import('./_nuxt/ProseImg.4debdb73.mjs').then((c) => c.default || c)),
  ProseLi: defineAsyncComponent(() => import('./_nuxt/ProseLi.c4f79706.mjs').then((c) => c.default || c)),
  ProseOl: defineAsyncComponent(() => import('./_nuxt/ProseOl.39391bc8.mjs').then((c) => c.default || c)),
  ProseP: defineAsyncComponent(() => import('./_nuxt/ProseP.515147bf.mjs').then((c) => c.default || c)),
  ProseStrong: defineAsyncComponent(() => import('./_nuxt/ProseStrong.34d5478a.mjs').then((c) => c.default || c)),
  ProseTable: defineAsyncComponent(() => import('./_nuxt/ProseTable.04548425.mjs').then((c) => c.default || c)),
  ProseTbody: defineAsyncComponent(() => import('./_nuxt/ProseTbody.a132ddff.mjs').then((c) => c.default || c)),
  ProseTd: defineAsyncComponent(() => import('./_nuxt/ProseTd.814f5506.mjs').then((c) => c.default || c)),
  ProseTh: defineAsyncComponent(() => import('./_nuxt/ProseTh.3bd1ec97.mjs').then((c) => c.default || c)),
  ProseThead: defineAsyncComponent(() => import('./_nuxt/ProseThead.50a983d4.mjs').then((c) => c.default || c)),
  ProseTr: defineAsyncComponent(() => import('./_nuxt/ProseTr.04dba9e2.mjs').then((c) => c.default || c)),
  ProseUl: defineAsyncComponent(() => import('./_nuxt/ProseUl.359b5e11.mjs').then((c) => c.default || c))
};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
function createHead(initHeadObject) {
  const unhead = createHead$1();
  const legacyHead = {
    unhead,
    install(app) {
      if (app.config.globalProperties)
        app.config.globalProperties.$head = unhead;
      app.provide("usehead", unhead);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options) {
      return unhead.push(input, options);
    },
    addEntry(input, options) {
      return unhead.push(input, options);
    },
    addHeadObjs(input, options) {
      return unhead.push(input, options);
    },
    addReactiveEntry(input, options) {
      const api = useHead(input, options);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document2, force) {
      if (force)
        renderDOMHead(unhead, { document: document2 });
      else
        debouncedRenderDOMHead(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document: document2 });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
version.startsWith("2.");
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [{ "src": "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" }], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = useHead;
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const { renderSSRHead } = await import('file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@unhead/ssr/dist/index.mjs');
      const meta = await renderSSRHead(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
const __nuxt_page_meta$2 = {};
const __nuxt_page_meta$1 = {};
const __nuxt_page_meta = {};
const _routes = [
  {
    name: (_a = __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) != null ? _a : "ParkingLots-Home",
    path: (_b = __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) != null ? _b : "/ParkingLots/Home",
    file: "/Users/benthewill/Library/Mobile Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/pages/ParkingLots/Home.vue",
    children: [],
    meta: __nuxt_page_meta$2,
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./_nuxt/Home.32e3ab57.mjs').then((m) => m.default || m)
  },
  {
    name: (_c = __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) != null ? _c : "ParkingLots-functions-addNewLot",
    path: (_d = __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) != null ? _d : "/ParkingLots/functions/addNewLot",
    file: "/Users/benthewill/Library/Mobile Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/pages/ParkingLots/functions/addNewLot.vue",
    children: [],
    meta: __nuxt_page_meta$1,
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./_nuxt/addNewLot.dfbc33e2.mjs').then((m) => m.default || m)
  },
  {
    name: (_e = __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) != null ? _e : "index",
    path: (_f = __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) != null ? _f : "/",
    file: "/Users/benthewill/Library/Mobile Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/pages/index.vue",
    children: [],
    meta: __nuxt_page_meta,
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/index.7c3e3652.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => {
      var _a2;
      return !!((_a2 = route.meta.pageTransition) != null ? _a2 : appPageTransition);
    };
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (typeof result === "boolean") {
    return result;
  }
  return createError(result);
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  var _a2, _b2, _c2, _d2;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = (_b2 = (_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) != null ? _b2 : createMemoryHistory(routerBase);
  const routes = (_d2 = (_c2 = routerOptions.routes) == null ? void 0 : _c2.call(routerOptions, _routes)) != null ? _d2 : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a3, _b3, _c3, _d3;
    if (((_b3 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b3.default) === ((_d3 = (_c3 = from.matched[0]) == null ? void 0 : _c3.components) == null ? void 0 : _d3.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a3, _b3;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a3 = initialLayout.value) != null ? _a3 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? void 0 : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          await callWithNuxt(nuxtApp, showError, [error2]);
          return false;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const memo = {};
let instanceKey;
const instanceScopes = /* @__PURE__ */ new Map();
const raw = "__raw__";
const isClassProp = /[a-zA-Z0-9\-][cC]lass$/;
function getRef(token2, data) {
  const value = ref(null);
  if (token2 === "get") {
    const nodeRefs = {};
    value.value = get$1.bind(null, nodeRefs);
    return value;
  }
  const path = token2.split(".");
  watchEffect(() => value.value = getValue(data, path));
  return value;
}
function getValue(set2, path) {
  if (Array.isArray(set2)) {
    for (const subset of set2) {
      const value = subset !== false && getValue(subset, path);
      if (value !== void 0)
        return value;
    }
    return void 0;
  }
  let foundValue = void 0;
  let obj = set2;
  for (const i2 in path) {
    const key = path[i2];
    if (typeof obj !== "object" || obj === null) {
      foundValue = void 0;
      break;
    }
    const currentValue = obj[key];
    if (Number(i2) === path.length - 1 && currentValue !== void 0) {
      foundValue = typeof currentValue === "function" ? currentValue.bind(obj) : currentValue;
      break;
    }
    obj = currentValue;
  }
  return foundValue;
}
function get$1(nodeRefs, id) {
  if (typeof id !== "string")
    return warn(650);
  if (!(id in nodeRefs))
    nodeRefs[id] = ref(void 0);
  if (nodeRefs[id].value === void 0) {
    nodeRefs[id].value = null;
    const root = getNode(id);
    if (root)
      nodeRefs[id].value = root.context;
    watchRegistry(id, ({ payload: node }) => {
      nodeRefs[id].value = isNode(node) ? node.context : node;
    });
  }
  return nodeRefs[id].value;
}
function parseSchema(library, schema) {
  function parseCondition(library2, node) {
    const condition = provider(compile(node.if), { if: true });
    const children = createElements(library2, node.then);
    const alternate = node.else ? createElements(library2, node.else) : null;
    return [condition, children, alternate];
  }
  function parseConditionAttr(attr, _default) {
    var _a2, _b2;
    const condition = provider(compile(attr.if));
    let b = () => _default;
    let a = () => _default;
    if (typeof attr.then === "object") {
      a = parseAttrs(attr.then, void 0);
    } else if (typeof attr.then === "string" && ((_a2 = attr.then) === null || _a2 === void 0 ? void 0 : _a2.startsWith("$"))) {
      a = provider(compile(attr.then));
    } else {
      a = () => attr.then;
    }
    if (has(attr, "else")) {
      if (typeof attr.else === "object") {
        b = parseAttrs(attr.else);
      } else if (typeof attr.else === "string" && ((_b2 = attr.else) === null || _b2 === void 0 ? void 0 : _b2.startsWith("$"))) {
        b = provider(compile(attr.else));
      } else {
        b = () => attr.else;
      }
    }
    return () => condition() ? a() : b();
  }
  function parseAttrs(unparsedAttrs, bindExp, _default = {}) {
    const explicitAttrs = new Set(Object.keys(unparsedAttrs || {}));
    const boundAttrs = bindExp ? provider(compile(bindExp)) : () => ({});
    const setters = [
      (attrs) => {
        const bound = boundAttrs();
        for (const attr in bound) {
          if (!explicitAttrs.has(attr)) {
            attrs[attr] = bound[attr];
          }
        }
      }
    ];
    if (unparsedAttrs) {
      if (isConditional(unparsedAttrs)) {
        const condition = parseConditionAttr(unparsedAttrs, _default);
        return condition;
      }
      for (let attr in unparsedAttrs) {
        const value = unparsedAttrs[attr];
        let getValue2;
        const isStr = typeof value === "string";
        if (attr.startsWith(raw)) {
          attr = attr.substring(7);
          getValue2 = () => value;
        } else if (isStr && value.startsWith("$") && value.length > 1 && !(value.startsWith("$reset") && isClassProp.test(attr))) {
          getValue2 = provider(compile(value));
        } else if (typeof value === "object" && isConditional(value)) {
          getValue2 = parseConditionAttr(value, void 0);
        } else if (typeof value === "object" && isPojo(value)) {
          getValue2 = parseAttrs(value);
        } else {
          getValue2 = () => value;
        }
        setters.push((attrs) => {
          attrs[attr] = getValue2();
        });
      }
    }
    return () => {
      const attrs = Array.isArray(unparsedAttrs) ? [] : {};
      setters.forEach((setter) => setter(attrs));
      return attrs;
    };
  }
  function parseNode(library2, _node) {
    let element = null;
    let attrs = () => null;
    let condition = false;
    let children = null;
    let alternate = null;
    let iterator = null;
    let resolve = false;
    const node = sugar(_node);
    if (isDOM(node)) {
      element = node.$el;
      attrs = node.$el !== "text" ? parseAttrs(node.attrs, node.bind) : () => null;
    } else if (isComponent(node)) {
      if (typeof node.$cmp === "string") {
        if (has(library2, node.$cmp)) {
          element = library2[node.$cmp];
        } else {
          element = node.$cmp;
          resolve = true;
        }
      } else {
        element = node.$cmp;
      }
      attrs = parseAttrs(node.props, node.bind);
    } else if (isConditional(node)) {
      [condition, children, alternate] = parseCondition(library2, node);
    }
    if (!isConditional(node) && "if" in node) {
      condition = provider(compile(node.if));
    } else if (!isConditional(node) && element === null) {
      condition = () => true;
    }
    if ("children" in node && node.children) {
      if (typeof node.children === "string") {
        if (node.children.startsWith("$slots.")) {
          element = element === "text" ? "slot" : element;
          children = provider(compile(node.children));
        } else if (node.children.startsWith("$") && node.children.length > 1) {
          const value = provider(compile(node.children));
          children = () => String(value());
        } else {
          children = () => String(node.children);
        }
      } else if (Array.isArray(node.children)) {
        children = createElements(library2, node.children);
      } else {
        const [childCondition, c, a] = parseCondition(library2, node.children);
        children = (iterationData) => childCondition && childCondition() ? c && c(iterationData) : a && a(iterationData);
      }
    }
    if (isComponent(node)) {
      if (children) {
        const produceChildren = children;
        children = (iterationData) => {
          return {
            default(slotData2, key) {
              var _a2, _b2, _c2, _d2;
              const currentKey = instanceKey;
              if (key)
                instanceKey = key;
              if (slotData2)
                (_a2 = instanceScopes.get(instanceKey)) === null || _a2 === void 0 ? void 0 : _a2.unshift(slotData2);
              if (iterationData)
                (_b2 = instanceScopes.get(instanceKey)) === null || _b2 === void 0 ? void 0 : _b2.unshift(iterationData);
              const c = produceChildren(iterationData);
              if (slotData2)
                (_c2 = instanceScopes.get(instanceKey)) === null || _c2 === void 0 ? void 0 : _c2.shift();
              if (iterationData)
                (_d2 = instanceScopes.get(instanceKey)) === null || _d2 === void 0 ? void 0 : _d2.shift();
              instanceKey = currentKey;
              return c;
            }
          };
        };
        children.slot = true;
      } else {
        children = () => ({});
      }
    }
    if ("for" in node && node.for) {
      const values = node.for.length === 3 ? node.for[2] : node.for[1];
      const getValues = typeof values === "string" && values.startsWith("$") ? provider(compile(values)) : () => values;
      iterator = [
        getValues,
        node.for[0],
        node.for.length === 3 ? String(node.for[1]) : null
      ];
    }
    return [condition, element, attrs, children, alternate, iterator, resolve];
  }
  function createSlots(children, iterationData) {
    const slots = children(iterationData);
    const currentKey = instanceKey;
    return Object.keys(slots).reduce((allSlots, slotName) => {
      const slotFn = slots && slots[slotName];
      allSlots[slotName] = (data) => {
        return slotFn && slotFn(data, currentKey) || null;
      };
      return allSlots;
    }, {});
  }
  function createElement(library2, node) {
    const [condition, element, attrs, children, alternate, iterator, resolve] = parseNode(library2, node);
    let createNodes = (iterationData) => {
      if (condition && element === null && children) {
        return condition() ? children(iterationData) : alternate && alternate(iterationData);
      }
      if (element && (!condition || condition())) {
        if (element === "text" && children) {
          return createTextVNode(String(children()));
        }
        if (element === "slot" && children)
          return children(iterationData);
        const el = resolve ? resolveComponent(element) : element;
        const slots = (children === null || children === void 0 ? void 0 : children.slot) ? createSlots(children, iterationData) : null;
        return h(el, attrs(), slots || (children ? children(iterationData) : []));
      }
      return typeof alternate === "function" ? alternate(iterationData) : alternate;
    };
    if (iterator) {
      const repeatedNode = createNodes;
      const [getValues, valueName, keyName] = iterator;
      createNodes = () => {
        const _v = getValues();
        const values = !isNaN(_v) ? Array(Number(_v)).fill(0).map((_, i2) => i2) : _v;
        const fragment = [];
        if (typeof values !== "object")
          return null;
        const instanceScope = instanceScopes.get(instanceKey) || [];
        const isArray = Array.isArray(values);
        for (const key in values) {
          if (isArray && key in Array.prototype)
            continue;
          const iterationData = Object.defineProperty({
            ...instanceScope.reduce((previousIterationData, scopedData) => {
              if (previousIterationData.__idata) {
                return { ...previousIterationData, ...scopedData };
              }
              return scopedData;
            }, {}),
            [valueName]: values[key],
            ...keyName !== null ? { [keyName]: isArray ? Number(key) : key } : {}
          }, "__idata", { enumerable: false, value: true });
          instanceScope.unshift(iterationData);
          fragment.push(repeatedNode.bind(null, iterationData)());
          instanceScope.shift();
        }
        return fragment;
      };
    }
    return createNodes;
  }
  function createElements(library2, schema2) {
    if (Array.isArray(schema2)) {
      const els = schema2.map(createElement.bind(null, library2));
      return (iterationData) => els.map((element2) => element2(iterationData));
    }
    const element = createElement(library2, schema2);
    return (iterationData) => element(iterationData);
  }
  const providers = [];
  function provider(compiled, hints = {}) {
    const compiledFns = {};
    providers.push((callback, key) => {
      compiledFns[key] = compiled.provide((tokens) => callback(tokens, hints));
    });
    return () => compiledFns[instanceKey]();
  }
  return function createInstance(providerCallback, key) {
    const memoKey = JSON.stringify(schema);
    const [render, compiledProviders] = has(memo, memoKey) ? memo[memoKey] : [createElements(library, schema), providers];
    memo[memoKey] = [render, compiledProviders];
    compiledProviders.forEach((compiledProvider) => {
      compiledProvider(providerCallback, key);
    });
    return () => {
      instanceKey = key;
      return render();
    };
  };
}
function useScope(token2, defaultValue) {
  const scopedData = instanceScopes.get(instanceKey) || [];
  let scopedValue = void 0;
  if (scopedData.length) {
    scopedValue = getValue(scopedData, token2.split("."));
  }
  return scopedValue === void 0 ? defaultValue : scopedValue;
}
function slotData(data, key) {
  return new Proxy(data, {
    get(...args) {
      let data2 = void 0;
      const property = args[1];
      if (typeof property === "string") {
        const prevKey = instanceKey;
        instanceKey = key;
        data2 = useScope(property, void 0);
        instanceKey = prevKey;
      }
      return data2 !== void 0 ? data2 : Reflect.get(...args);
    }
  });
}
function createRenderFn(instanceCreator, data, instanceKey2) {
  return instanceCreator((requirements, hints = {}) => {
    return requirements.reduce((tokens, token2) => {
      if (token2.startsWith("slots.")) {
        const slot = token2.substring(6);
        const hasSlot = data.slots && has(data.slots, slot);
        if (hints.if) {
          tokens[token2] = () => hasSlot;
        } else if (data.slots && hasSlot) {
          const scopedData = slotData(data, instanceKey2);
          tokens[token2] = () => data.slots[slot](scopedData);
          return tokens;
        }
      }
      const value = getRef(token2, data);
      tokens[token2] = () => useScope(token2, value.value);
      return tokens;
    }, {});
  }, instanceKey2);
}
let i = 0;
const FormKitSchema = defineComponent({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: true
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props2, context) {
    const instance = getCurrentInstance();
    let instanceKey2 = Symbol(String(i++));
    instanceScopes.set(instanceKey2, []);
    let provider = parseSchema(props2.library, props2.schema);
    let render;
    let data;
    watch(() => props2.schema, (newSchema, oldSchema) => {
      var _a2;
      instanceKey2 = Symbol(String(i++));
      provider = parseSchema(props2.library, props2.schema);
      render = createRenderFn(provider, data, instanceKey2);
      if (newSchema === oldSchema) {
        ((_a2 = instance === null || instance === void 0 ? void 0 : instance.proxy) === null || _a2 === void 0 ? void 0 : _a2.$forceUpdate)();
      }
    }, { deep: true });
    watchEffect(() => {
      data = Object.assign(reactive(props2.data), {
        slots: context.slots
      });
      render = createRenderFn(provider, data, instanceKey2);
    });
    return () => render();
  }
});
const nativeProps = {
  config: {
    type: Object,
    default: {}
  },
  classes: {
    type: Object,
    required: false
  },
  delay: {
    type: Number,
    required: false
  },
  errors: {
    type: Array,
    default: []
  },
  inputErrors: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    required: false
  },
  id: {
    type: String,
    required: false
  },
  modelValue: {
    required: false
  },
  name: {
    type: String,
    required: false
  },
  parent: {
    type: Object,
    required: false
  },
  plugins: {
    type: Array,
    default: []
  },
  sectionsSchema: {
    type: Object,
    default: {}
  },
  type: {
    type: [String, Object],
    default: "text"
  },
  validation: {
    type: [String, Array],
    required: false
  },
  validationMessages: {
    type: Object,
    required: false
  },
  validationRules: {
    type: Object,
    required: false
  },
  validationLabel: {
    type: [String, Function],
    required: false
  }
};
const props = nativeProps;
const parentSymbol = Symbol("FormKitParent");
const FormKit = defineComponent({
  props,
  emits: {
    input: (_value, _node) => true,
    inputRaw: (_value, _node) => true,
    "update:modelValue": (_value) => true,
    node: (node) => !!node,
    submit: (_data, _node) => true,
    submitRaw: (_event, _node) => true,
    submitInvalid: (_node) => true
  },
  inheritAttrs: false,
  setup(props2, context) {
    const node = useInput(props2, context);
    if (!node.props.definition)
      error(600, node);
    if (node.props.definition.component) {
      return () => {
        var _a2;
        return h((_a2 = node.props.definition) === null || _a2 === void 0 ? void 0 : _a2.component, {
          context: node.context
        }, { ...context.slots });
      };
    }
    const schema = ref([]);
    const generateSchema = () => {
      var _a2, _b2;
      const schemaDefinition = (_b2 = (_a2 = node.props) === null || _a2 === void 0 ? void 0 : _a2.definition) === null || _b2 === void 0 ? void 0 : _b2.schema;
      if (!schemaDefinition)
        error(601, node);
      schema.value = typeof schemaDefinition === "function" ? schemaDefinition({ ...props2.sectionsSchema }) : schemaDefinition;
    };
    generateSchema();
    node.on("schema", generateSchema);
    context.emit("node", node);
    const library = node.props.definition.library;
    context.expose({ node });
    return () => h(FormKitSchema, { schema: schema.value, data: node.context, library }, { ...context.slots });
  }
});
function createPlugin(app, options) {
  app.component(options.alias || "FormKit", FormKit).component(options.schemaAlias || "FormKitSchema", FormKitSchema);
  return {
    get: getNode,
    setLocale: (locale) => {
      var _a2;
      if ((_a2 = options.config) === null || _a2 === void 0 ? void 0 : _a2.rootConfig) {
        options.config.rootConfig.locale = locale;
      }
    },
    clearErrors,
    setErrors,
    submit: submitForm,
    reset
  };
}
const optionsSymbol = Symbol.for("FormKitOptions");
const configSymbol = Symbol.for("FormKitConfig");
const plugin = {
  install(app, _options) {
    const options = Object.assign({
      alias: "FormKit",
      schemaAlias: "FormKitSchema"
    }, typeof _options === "function" ? _options() : _options);
    const rootConfig = createConfig(options.config || {});
    options.config = { rootConfig };
    app.config.globalProperties.$formkit = createPlugin(app, options);
    app.provide(optionsSymbol, options);
    app.provide(configSymbol, rootConfig);
  }
};
const invalidGet = Symbol();
function watchVerbose(obj, callback) {
  const watchers = {};
  const applyWatch = (paths) => {
    for (const path of paths) {
      if (path.__str in watchers)
        watchers[path.__str]();
      watchers[path.__str] = watch(touch.bind(null, obj, path), dispatcher.bind(null, path), { deep: false });
    }
  };
  const clearWatch = (path) => {
    if (!path.length)
      return;
    for (const key in watchers) {
      if (`${key}`.startsWith(`${path.__str}.`)) {
        watchers[key]();
        delete watchers[key];
      }
    }
  };
  const dispatcher = createDispatcher(obj, callback, applyWatch, clearWatch);
  applyWatch(getPaths(obj));
}
function createDispatcher(obj, callback, applyWatch, clearChildWatches) {
  return (path) => {
    const value = get(obj, path);
    if (value === invalidGet)
      return;
    if (path.__deep)
      clearChildWatches(path);
    if (typeof value === "object")
      applyWatch(getPaths(value, [path], ...path));
    callback(path, value, obj);
  };
}
function touch(obj, path) {
  const value = get(obj, path);
  return value && typeof value === "object" ? Object.keys(value) : value;
}
function get(obj, path) {
  if (isRef(obj)) {
    if (path.length === 0)
      return obj.value;
    obj = obj.value;
  }
  return path.reduce((value, segment) => {
    if (value === invalidGet)
      return value;
    if (value === null || typeof value !== "object") {
      return invalidGet;
    }
    return value[segment];
  }, obj);
}
function getPaths(obj, paths = [], ...parents) {
  if (obj === null)
    return paths;
  if (!parents.length) {
    const path = Object.defineProperty([], "__str", {
      value: ""
    });
    obj = isRef(obj) ? obj.value : obj;
    if (obj && typeof obj === "object") {
      Object.defineProperty(path, "__deep", { value: true });
      paths.push(path);
    } else {
      return [path];
    }
  }
  if (obj === null || typeof obj !== "object")
    return paths;
  for (const key in obj) {
    const path = parents.concat(key);
    Object.defineProperty(path, "__str", { value: path.join(".") });
    const value = obj[key];
    if (isPojo(value) || Array.isArray(value)) {
      paths.push(Object.defineProperty(path, "__deep", { value: true }));
      paths = paths.concat(getPaths(value, [], ...path));
    } else {
      paths.push(path);
    }
  }
  return paths;
}
function useRaw(obj) {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (isReactive(obj)) {
    obj = toRaw(obj);
  } else if (isRef(obj)) {
    obj = isReactive(obj.value) ? useRaw(obj.value) : obj.value;
  }
  return obj;
}
const pseudoProps = [
  "help",
  "label",
  "ignore",
  "disabled",
  "preserve",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
];
function classesToNodeProps(node, props2) {
  if (props2.classes) {
    Object.keys(props2.classes).forEach((key) => {
      if (typeof key === "string") {
        node.props[`_${key}Class`] = props2.classes[key];
        if (isObject$1(props2.classes[key]) && key === "inner")
          Object.values(props2.classes[key]);
      }
    });
  }
}
function onlyListeners(props2) {
  if (!props2)
    return {};
  const knownListeners = ["Submit", "SubmitRaw", "SubmitInvalid"].reduce((listeners, listener) => {
    const name = `on${listener}`;
    if (name in props2) {
      if (typeof props2[name] === "function") {
        listeners[name] = props2[name];
      }
    }
    return listeners;
  }, {});
  return knownListeners;
}
function useInput(props2, context, options = {}) {
  const config2 = Object.assign({}, inject(optionsSymbol) || {}, options);
  const instance = getCurrentInstance();
  const listeners = onlyListeners(instance === null || instance === void 0 ? void 0 : instance.vnode.props);
  const isVModeled = props2.modelValue !== void 0;
  const value = props2.modelValue !== void 0 ? props2.modelValue : cloneAny(context.attrs.value);
  function createInitialProps() {
    const initialProps2 = {
      ...nodeProps(props2),
      ...listeners
    };
    const attrs = except(nodeProps(context.attrs), pseudoProps);
    if (!attrs.key)
      attrs.key = token();
    initialProps2.attrs = attrs;
    const propValues = only(nodeProps(context.attrs), pseudoProps);
    for (const propName in propValues) {
      initialProps2[camel(propName)] = propValues[propName];
    }
    const classesProps = { props: {} };
    classesToNodeProps(classesProps, props2);
    Object.assign(initialProps2, classesProps.props);
    if (typeof initialProps2.type !== "string") {
      initialProps2.definition = initialProps2.type;
      delete initialProps2.type;
    }
    return initialProps2;
  }
  const initialProps = createInitialProps();
  const parent = initialProps.ignore ? null : props2.parent || inject(parentSymbol, null);
  const node = createNode(extend(config2 || {}, {
    name: props2.name || void 0,
    value,
    parent,
    plugins: (config2.plugins || []).concat(props2.plugins),
    config: props2.config,
    props: initialProps,
    index: props2.index
  }, false, true));
  if (!node.props.definition)
    error(600, node);
  const lateBoundProps = ref(new Set(node.props.definition.props || []));
  node.on("added-props", ({ payload: lateProps }) => {
    if (Array.isArray(lateProps))
      lateProps.forEach((newProp) => lateBoundProps.value.add(newProp));
  });
  const pseudoPropNames = computed(() => pseudoProps.concat([...lateBoundProps.value]).reduce((names, prop) => {
    if (typeof prop === "string") {
      names.push(camel(prop));
      names.push(kebab(prop));
    } else {
      names.push(prop);
    }
    return names;
  }, []));
  watchEffect(() => classesToNodeProps(node, props2));
  const passThrough = nodeProps(props2);
  for (const prop in passThrough) {
    watch(() => props2[prop], () => {
      if (props2[prop] !== void 0) {
        node.props[prop] = props2[prop];
      }
    });
  }
  const attributeWatchers = /* @__PURE__ */ new Set();
  const possibleProps = nodeProps(context.attrs);
  watchEffect(() => {
    watchAttributes(only(possibleProps, pseudoPropNames.value));
  });
  function watchAttributes(attrProps) {
    attributeWatchers.forEach((stop) => {
      stop();
      attributeWatchers.delete(stop);
    });
    for (const prop in attrProps) {
      const camelName = camel(prop);
      attributeWatchers.add(watch(() => context.attrs[prop], () => {
        node.props[camelName] = context.attrs[prop];
      }));
    }
  }
  watchEffect(() => {
    const attrs = except(nodeProps(context.attrs), pseudoPropNames.value);
    node.props.attrs = Object.assign({}, node.props.attrs || {}, attrs);
  });
  watchEffect(() => {
    const messages = props2.errors.map((error2) => createMessage({
      key: slugify(error2),
      type: "error",
      value: error2,
      meta: { source: "prop" }
    }));
    node.store.apply(messages, (message) => message.type === "error" && message.meta.source === "prop");
  });
  if (node.type !== "input") {
    const sourceKey = `${node.name}-prop`;
    watchEffect(() => {
      const keys = Object.keys(props2.inputErrors);
      if (!keys.length)
        node.clearErrors(true, sourceKey);
      const messages = keys.reduce((messages2, key) => {
        let value2 = props2.inputErrors[key];
        if (typeof value2 === "string")
          value2 = [value2];
        if (Array.isArray(value2)) {
          messages2[key] = value2.map((error2) => createMessage({
            key: error2,
            type: "error",
            value: error2,
            meta: { source: sourceKey }
          }));
        }
        return messages2;
      }, {});
      node.store.apply(messages, (message) => message.type === "error" && message.meta.source === sourceKey);
    });
  }
  watchEffect(() => Object.assign(node.config, props2.config));
  if (node.type !== "input") {
    provide(parentSymbol, node);
  }
  let inputTimeout;
  const mutex = /* @__PURE__ */ new WeakSet();
  node.on("modelUpdated", () => {
    var _a2, _b2;
    context.emit("inputRaw", (_a2 = node.context) === null || _a2 === void 0 ? void 0 : _a2.value, node);
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(context.emit, 20, "input", (_b2 = node.context) === null || _b2 === void 0 ? void 0 : _b2.value, node);
    if (isVModeled && node.context) {
      const newValue = useRaw(node.context.value);
      if (isObject$1(newValue) && useRaw(props2.modelValue) !== newValue) {
        mutex.add(newValue);
      }
      context.emit("update:modelValue", newValue);
    }
  });
  if (isVModeled) {
    watchVerbose(toRef(props2, "modelValue"), (path, value2) => {
      var _a2;
      const rawValue = useRaw(value2);
      if (isObject$1(rawValue) && mutex.has(rawValue)) {
        return mutex.delete(rawValue);
      }
      if (!path.length)
        node.input(value2, false);
      else
        (_a2 = node.at(path)) === null || _a2 === void 0 ? void 0 : _a2.input(value2, false);
    });
    if (node.value !== value) {
      node.emit("modelUpdated");
    }
  }
  return node;
}
const vueBindings = function vueBindings2(node) {
  node.ledger.count("blocking", (m) => m.blocking);
  const isValid = ref(!node.ledger.value("blocking"));
  node.ledger.count("errors", (m) => m.type === "error");
  const hasErrors = ref(!!node.ledger.value("errors"));
  let hasTicked = false;
  nextTick(() => {
    hasTicked = true;
  });
  const availableMessages = reactive(node.store.reduce((store, message) => {
    if (message.visible) {
      store[message.key] = message;
    }
    return store;
  }, {}));
  const validationVisibility = ref(node.props.validationVisibility || "blur");
  node.on("prop:validationVisibility", ({ payload }) => {
    validationVisibility.value = payload;
  });
  const hasShownErrors = ref(validationVisibility.value === "live");
  const validationVisible = computed(() => {
    if (context.state.submitted)
      return true;
    if (!hasShownErrors.value && !context.state.settled) {
      return false;
    }
    switch (validationVisibility.value) {
      case "live":
        return true;
      case "blur":
        return context.state.blurred;
      case "dirty":
        return context.state.dirty;
      default:
        return false;
    }
  });
  const isComplete = computed(() => {
    return hasValidation.value ? isValid.value && !hasErrors.value : context.state.dirty && !empty(context.value);
  });
  const hasValidation = ref(Array.isArray(node.props.parsedRules) && node.props.parsedRules.length > 0);
  node.on("prop:parsedRules", ({ payload: rules }) => {
    hasValidation.value = Array.isArray(rules) && rules.length > 0;
  });
  const messages = computed(() => {
    const visibleMessages = {};
    for (const key in availableMessages) {
      const message = availableMessages[key];
      if (message.type !== "validation" || validationVisible.value) {
        visibleMessages[key] = message;
      }
    }
    return visibleMessages;
  });
  const ui = reactive(node.store.reduce((messages2, message) => {
    if (message.type === "ui" && message.visible)
      messages2[message.key] = message;
    return messages2;
  }, {}));
  const cachedClasses = reactive({});
  const classes = new Proxy(cachedClasses, {
    get(...args) {
      const [target, property] = args;
      let className = Reflect.get(...args);
      if (!className && typeof property === "string") {
        if (!has(target, property) && !property.startsWith("__v")) {
          const observedNode = createObserver(node);
          observedNode.watch((node2) => {
            const rootClasses = typeof node2.config.rootClasses === "function" ? node2.config.rootClasses(property, node2) : {};
            const globalConfigClasses = node2.config.classes ? createClasses(property, node2, node2.config.classes[property]) : {};
            const classesPropClasses = createClasses(property, node2, node2.props[`_${property}Class`]);
            const sectionPropClasses = createClasses(property, node2, node2.props[`${property}Class`]);
            className = generateClassList(node2, property, rootClasses, globalConfigClasses, classesPropClasses, sectionPropClasses);
            target[property] = className;
          });
        }
      }
      return className;
    }
  });
  const describedBy = computed(() => {
    const describers = [];
    if (context.help) {
      describers.push(`help-${node.props.id}`);
    }
    for (const key in messages.value) {
      describers.push(`${node.props.id}-${key}`);
    }
    return describers.length ? describers.join(" ") : void 0;
  });
  const value = ref(node.value);
  const _value = ref(node.value);
  const context = reactive({
    _value,
    attrs: node.props.attrs,
    disabled: node.props.disabled,
    describedBy,
    fns: {
      length: (obj) => Object.keys(obj).length,
      number: (value2) => Number(value2),
      string: (value2) => String(value2),
      json: (value2) => JSON.stringify(value2),
      eq
    },
    handlers: {
      blur: (e) => {
        node.store.set(createMessage({ key: "blurred", visible: false, value: true }));
        if (typeof node.props.attrs.onBlur === "function") {
          node.props.attrs.onBlur(e);
        }
      },
      touch: () => {
        node.store.set(createMessage({ key: "dirty", visible: false, value: true }));
      },
      DOMInput: (e) => {
        node.input(e.target.value);
        node.emit("dom-input-event", e);
      }
    },
    help: node.props.help,
    id: node.props.id,
    label: node.props.label,
    messages,
    node: markRaw(node),
    options: node.props.options,
    state: {
      blurred: false,
      complete: isComplete,
      dirty: false,
      submitted: false,
      settled: node.isSettled,
      valid: isValid,
      errors: hasErrors,
      rules: hasValidation,
      validationVisible
    },
    type: node.props.type,
    family: node.props.family,
    ui,
    value,
    classes
  });
  node.on("created", () => {
    if (!eq(context.value, node.value)) {
      _value.value = node.value;
      value.value = node.value;
      triggerRef(value);
      triggerRef(_value);
    }
    node.props._init = cloneAny(node.value);
  });
  node.on("settled", ({ payload: isSettled }) => {
    context.state.settled = isSettled;
  });
  function observeProps(observe) {
    observe.forEach((prop) => {
      prop = camel(prop);
      if (!has(context, prop) && has(node.props, prop)) {
        context[prop] = node.props[prop];
      }
      node.on(`prop:${prop}`, ({ payload }) => {
        context[prop] = payload;
      });
    });
  }
  const rootProps = () => {
    const props2 = [
      "help",
      "label",
      "disabled",
      "options",
      "type",
      "attrs",
      "preserve",
      "preserveErrors",
      "id"
    ];
    const iconPattern = /^[a-zA-Z-]+(?:-icon|Icon)$/;
    const matchingProps = Object.keys(node.props).filter((prop) => {
      return iconPattern.test(prop);
    });
    return props2.concat(matchingProps);
  };
  observeProps(rootProps());
  function definedAs(definition) {
    if (definition.props)
      observeProps(definition.props);
  }
  node.props.definition && definedAs(node.props.definition);
  node.on("added-props", ({ payload }) => observeProps(payload));
  node.on("input", ({ payload }) => {
    if (node.type !== "input" && !isRef(payload) && !isReactive(payload)) {
      _value.value = shallowClone(payload);
    } else {
      _value.value = payload;
      triggerRef(_value);
    }
  });
  node.on("commit", ({ payload }) => {
    if (node.type !== "input" && !isRef(payload) && !isReactive(payload)) {
      value.value = _value.value = shallowClone(payload);
    } else {
      value.value = _value.value = payload;
      triggerRef(value);
    }
    node.emit("modelUpdated");
    if (!context.state.dirty && node.isCreated && hasTicked && !eq(value.value, node.props._init))
      context.handlers.touch();
    if (isComplete && node.type === "input" && hasErrors.value && !undefine(node.props.preserveErrors)) {
      node.store.filter((message) => {
        var _a2;
        return !(message.type === "error" && ((_a2 = message.meta) === null || _a2 === void 0 ? void 0 : _a2.autoClear) === true);
      });
    }
  });
  const updateState = async (message) => {
    if (message.type === "ui" && message.visible && !message.meta.showAsMessage) {
      ui[message.key] = message;
    } else if (message.visible) {
      availableMessages[message.key] = message;
    } else if (message.type === "state") {
      context.state[message.key] = !!message.value;
    }
  };
  node.on("message-added", (e) => updateState(e.payload));
  node.on("message-updated", (e) => updateState(e.payload));
  node.on("message-removed", ({ payload: message }) => {
    delete ui[message.key];
    delete availableMessages[message.key];
    delete context.state[message.key];
  });
  node.on("settled:blocking", () => {
    isValid.value = true;
  });
  node.on("unsettled:blocking", () => {
    isValid.value = false;
  });
  node.on("settled:errors", () => {
    hasErrors.value = false;
  });
  node.on("unsettled:errors", () => {
    hasErrors.value = true;
  });
  watch(validationVisible, (value2) => {
    if (value2) {
      hasShownErrors.value = true;
    }
  });
  node.context = context;
  node.emit("context", node, false);
};
const defaultConfig = (options = {}) => {
  const { rules = {}, locales = {}, inputs: inputs$1 = {}, messages = {}, locale = void 0, theme: theme2 = void 0, iconLoaderUrl = void 0, iconLoader = void 0, icons = {}, ...nodeOptions } = options;
  const validation = createValidationPlugin({
    ...defaultRules,
    ...rules || {}
  });
  const i18n = createI18nPlugin(extend({ en, ...locales || {} }, messages));
  const library = createLibraryPlugin(inputs, inputs$1);
  const themePlugin = createThemePlugin(theme2, icons, iconLoaderUrl, iconLoader);
  return extend({
    plugins: [library, themePlugin, vueBindings, i18n, validation],
    ...!locale ? {} : { config: { locale } }
  }, nodeOptions || {}, true);
};
defineComponent({
  name: "FormKitIcon",
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconLoader: {
      type: Function,
      default: null
    },
    iconLoaderUrl: {
      type: Function,
      default: null
    }
  },
  setup(props2) {
    var _a2, _b2;
    const icon = ref(void 0);
    const config2 = inject(optionsSymbol, {});
    const parent = inject(parentSymbol, null);
    let iconHandler = void 0;
    if (props2.iconLoader && typeof props2.iconLoader === "function") {
      iconHandler = createIconHandler(props2.iconLoader);
    } else if (parent && ((_a2 = parent.props) === null || _a2 === void 0 ? void 0 : _a2.iconLoader)) {
      iconHandler = createIconHandler(parent.props.iconLoader);
    } else if (props2.iconLoaderUrl && typeof props2.iconLoaderUrl === "function") {
      iconHandler = createIconHandler(iconHandler, props2.iconLoaderUrl);
    } else {
      const iconPlugin = (_b2 = config2 === null || config2 === void 0 ? void 0 : config2.plugins) === null || _b2 === void 0 ? void 0 : _b2.find((plugin2) => {
        return typeof plugin2.iconHandler === "function";
      });
      if (iconPlugin) {
        iconHandler = iconPlugin.iconHandler;
      }
    }
    if (iconHandler && typeof iconHandler === "function") {
      const iconOrPromise = iconHandler(props2.icon);
      if (iconOrPromise instanceof Promise) {
        iconOrPromise.then((iconValue) => {
          icon.value = iconValue;
        });
      } else {
        icon.value = iconOrPromise;
      }
    }
    return () => {
      if (icon.value) {
        return h("span", {
          class: "formkit-icon",
          innerHTML: icon.value
        });
      }
      return null;
    };
  }
});
const config = {
  locales: { fr },
  locale: "fr",
  theme: "genesis"
};
const _nuxt_formkitPlugin_mjs_pZqjah0RUG = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:rendered", () => {
    resetCount();
  });
  nuxtApp.vueApp.use(plugin, defaultConfig(config));
});
const node_modules_nuxt_graphql_client_dist_runtime_plugin_mjs_jBToDIZpFa = defineNuxtPlugin((nuxtApp) => {
  var _a2, _b2, _c2, _d2, _e2, _f2;
  if (!(nuxtApp == null ? void 0 : nuxtApp._gqlState)) {
    nuxtApp._gqlState = ref({});
    const config2 = useRuntimeConfig();
    const { clients } = defu(config2 == null ? void 0 : config2["graphql-client"], (_a2 = config2 == null ? void 0 : config2.public) == null ? void 0 : _a2["graphql-client"]);
    const cookie = ((_b2 = useRequestHeaders(["cookie"])) == null ? void 0 : _b2.cookie) || void 0;
    for (const [name, v] of Object.entries(clients || {})) {
      const host = v.host;
      const proxyCookie = (v == null ? void 0 : v.proxyCookies) && !!cookie;
      const serverHeaders = typeof ((_c2 = v == null ? void 0 : v.headers) == null ? void 0 : _c2.serverOnly) === "object" && ((_d2 = v == null ? void 0 : v.headers) == null ? void 0 : _d2.serverOnly) || void 0;
      if ((_e2 = v == null ? void 0 : v.headers) == null ? void 0 : _e2.serverOnly) {
        delete v.headers.serverOnly;
      }
      const opts = {
        ...(proxyCookie || ((_f2 = v == null ? void 0 : v.token) == null ? void 0 : _f2.value) || (v == null ? void 0 : v.headers)) && {
          headers: {
            ...(v == null ? void 0 : v.headers) && { ...v.headers, ...serverHeaders },
            ...proxyCookie && { cookie }
          }
        },
        ...v == null ? void 0 : v.corsOptions
      };
      nuxtApp._gqlState.value[name] = {
        options: opts,
        instance: new GraphQLClient(host, {
          ...(v == null ? void 0 : v.preferGETQueries) && {
            method: "GET",
            jsonSerializer: { parse: JSON.parse, stringify: JSON.stringify }
          },
          requestMiddleware: async (req) => {
            var _a3, _b3, _c3, _d3, _e3, _f3, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
            const token2 = ref();
            await nuxtApp.callHook("gql:auth:init", { token: token2, client: name });
            const reqOpts = defu(((_b3 = (_a3 = nuxtApp._gqlState.value) == null ? void 0 : _a3[name]) == null ? void 0 : _b3.options) || {}, { headers: {} });
            if (!token2.value) {
              token2.value = (_c3 = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _c3.value;
            }
            if (token2.value === void 0 && typeof v.tokenStorage === "object") {
              if (((_d3 = v.tokenStorage) == null ? void 0 : _d3.mode) === "cookie") {
                if (cookie) {
                  const cookieName = `${v.tokenStorage.name}=`;
                  token2.value = (_f3 = (_e3 = cookie.split(";").find((c) => c.trim().startsWith(cookieName))) == null ? void 0 : _e3.split("=")) == null ? void 0 : _f3[1];
                }
              }
            }
            if (token2.value === void 0) {
              token2.value = (_g = v == null ? void 0 : v.token) == null ? void 0 : _g.value;
            }
            if (token2.value) {
              token2.value = token2.value.trim();
              const tokenName = token2.value === ((_h = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _h.value) ? ((_i = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _i.name) || ((_j = v == null ? void 0 : v.token) == null ? void 0 : _j.name) : (_k = v == null ? void 0 : v.token) == null ? void 0 : _k.name;
              const tokenType = token2.value === ((_l = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _l.value) ? ((_m = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _m.type) === null ? null : ((_n = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _n.type) || ((_o = v == null ? void 0 : v.token) == null ? void 0 : _o.type) : (_p = v == null ? void 0 : v.token) == null ? void 0 : _p.type;
              const authScheme = !!((_r = (_q = token2.value) == null ? void 0 : _q.match(/^[a-zA-Z]+\s/)) == null ? void 0 : _r[0]);
              if (authScheme) {
                reqOpts.headers[tokenName] = token2.value;
              } else {
                reqOpts.headers[tokenName] = !tokenType ? token2.value : `${tokenType} ${token2.value}`;
              }
            }
            if (reqOpts == null ? void 0 : reqOpts.token) {
              delete reqOpts.token;
            }
            return defu(req, reqOpts);
          }
        })
      };
    }
  }
});
const node_modules__64nuxt_content_dist_runtime_plugins_ws_mjs_JuoSZH52OQ = defineNuxtPlugin(() => {
  useRuntimeConfig().public;
});
const _plugins = [
  node_modules__64pinia_nuxt_dist_runtime_plugin_vue3_mjs_A0OWXRrUgq,
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  _nuxt_formkitPlugin_mjs_pZqjah0RUG,
  node_modules_nuxt_graphql_client_dist_runtime_plugin_mjs_jBToDIZpFa,
  node_modules__64nuxt_content_dist_runtime_plugins_ws_mjs_JuoSZH52OQ
];
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><nav class="navbar" role="navigation"><div class="navbar-brand"><div class="navbar-item">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><strong${_scopeId}>indewgo.</strong></p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("strong", null, "indewgo.")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="navbar-menu"><div class="navbar-item">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/parkingLots/Home" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Lots-Table`);
      } else {
        return [
          createTextVNode("Lots-Table")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></nav></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const Header = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a2;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a3;
    return ((_a3 = m.components) == null ? void 0 : _a3.default) === routeProps.Component.type;
  });
  const source = (_a2 = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a2 : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props2, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a2;
      return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    };
  }
});
const _wrapIf = (component, props2, slots) => {
  return { default: () => props2 ? h(component, props2 === true ? {} : props2, slots) : h(Fragment, {}, slots) };
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props2, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props2.name, route: props2.route, ...attrs }, {
        default: (routeProps) => {
          var _a2, _b2, _c2, _d2;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props2.pageKey, routeProps);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!((_b2 = (_a2 = props2.transition) != null ? _a2 : routeProps.route.meta.pageTransition) != null ? _b2 : appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props2.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              (_d2 = (_c2 = props2.keepalive) != null ? _c2 : routeProps.route.meta.keepalive) != null ? _d2 : appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props2) {
    const previousKey = props2.pageKey;
    const previousRoute = props2.routeProps.route;
    const route = {};
    for (const key in props2.routeProps.route) {
      route[key] = computed(() => previousKey === props2.pageKey ? props2.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props2.routeProps.Component);
    };
  }
});
const page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-wrapper" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="section p-5">`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.975f6b22.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error2 = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error2)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error2) }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { Header as H, _export_sfc as _, useNuxtApp as a, useRequestEvent as b, createError as c, useRuntimeConfig as d, entry$1 as default, appLayoutTransition as e, _wrapIf as f, useState as g, __nuxt_component_0$1 as h, defineStore as i, nuxtLink as n, page as p, storeToRefs as s, useRoute as u };
//# sourceMappingURL=server.mjs.map
