import { _ as _export_sfc } from "../server.mjs";
import { computed, unref, reactive, useSSRContext } from "vue";
import { u as useAsyncData } from "./asyncData.b13700b2.js";
import "destr";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "ohmyfetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@vueuse/shared";
import "vue-router";
import "@vue/devtools-api";
import "defu";
import "graphql-request";
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    initialCache,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    initialCache,
    immediate,
    watch: [
      _fetchOptions,
      _request,
      ...watch || []
    ]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    return $fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _sfc_main = {
  setup() {
    const { data: hello } = useFetch("/api/testFunction", "$PslAyef5YX");
    return {
      hello
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>This is Router Test. I&#39;m an Index Page</p><p>Version 2.0: </p><p>${ssrInterpolate($setup.hello)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index.5d1761b5.js.map
