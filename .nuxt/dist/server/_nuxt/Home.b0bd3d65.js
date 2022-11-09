import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "ohmyfetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@vueuse/shared";
import "vue-router";
import "defu";
const _sfc_main = {
  data() {
    return {
      isActive: false,
      checkData: [1, 2, 3, 4, 5]
    };
  },
  computed: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "background-color": "#ededf0" })}" class="block px-3 py-3 is-transparent is-rounded is-shadowless sticky-top"><div class="level"><div class="level-left"><div class="level-item"><p><span class="title is-5 is-align-content-center"> Parking Lots Management </span><span class="is-size-7"><br>Details about the app here or other important news. </span></p></div></div><div class="level-right"><div class="level-item is-hidden-desktop"><div class="control"><input class="input is-small is-light" type="text" placeholder="\u{1F50E} Search Here"></div><div class="${ssrRenderClass([{ "is-active": $data.isActive }, "dropdown is-right mx-3"])}"><div class="dropdown-trigger"><button class="button is-small is-info" aria-haspopup="true" aria-controls="dropdown-menu2"><span class="is-size-7">...</span></button></div><div class="dropdown-menu" role="menu"><div class="dropdown-content"><a class="dropdown-item"> Filter </a><a class="dropdown-item"> Sort </a><a class="dropdown-item"> Func </a><hr class="dropdown-divider"><a class="dropdown-item">Edit Mode</a></div></div></div></div><div class="level-item is-hidden-touch"><div class="control mx-1"><input class="input is-small is-light" type="text" placeholder="\u{1F50E} Search Here"></div></div><div class="level-item is-hidden-touch"><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Filter</a><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Sort</a><a class="button is-info is-small has-text-link-dark is-inverted mx-1">Func</a></div></div></div></div>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  if ($data.checkData) {
    _push(`<div class="section px-1 pt-0 is-shadowless"><!--[-->`);
    ssrRenderList($data.checkData, (item) => {
      _push(`<p>${ssrInterpolate(item)}</p>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ParkingLots/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Home as default
};
//# sourceMappingURL=Home.b0bd3d65.js.map
