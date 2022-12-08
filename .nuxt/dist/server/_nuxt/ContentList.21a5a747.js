import { defineComponent, useSlots, h, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./ContentQuery.0635b07b.js";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@vue/devtools-api";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
import "graphql-request";
import "vue/server-renderer";
import "ohash";
import "cookie-es";
import "./utils.f30c7f16.js";
const _sfc_main = defineComponent({
  name: "ContentList",
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = useSlots();
    const { path, query } = ctx;
    const contentQueryProps = {
      ...query || {},
      path: path || (query == null ? void 0 : query.path) || "/"
    };
    const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
    return h(
      _sfc_main$1,
      contentQueryProps,
      {
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => slots == null ? void 0 : slots.default({ list: data, refresh, isPartial, ...this.$attrs }) : ({ data }) => emptyNode("default", data),
        empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", bindings == null ? void 0 : bindings.data),
        "not-found": (bindings) => {
          var _a;
          return (slots == null ? void 0 : slots["not-found"]) ? (_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings) : emptyNode("not-found", bindings == null ? void 0 : bindings.data);
        }
      }
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContentList.21a5a747.js.map
