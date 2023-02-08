import { _ as __nuxt_component_0, a as _sfc_main$2, b as _sfc_main$1, c as _sfc_main$1$1 } from './step-two.a57ece87.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import 'defu';
import 'graphql-request';
import '../../nitro/stormkit.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'html-tags';
import 'graphql-tag';

const __default__ = {
  data() {
    return {
      step: 1
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "addNewLot",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_general_card = __nuxt_component_0;
      const _component_FormKit = resolveComponent("FormKit");
      const _component_mutation_insert_step_one = _sfc_main$2;
      const _component_mutation_insert_step_two = _sfc_main$1;
      const _component_mutation_insert_step_three = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block px-3 py-3 is-transparent is-rounded is-shadowless" }, _attrs))}><section class="hero is-small"><div class="container has-text-centered"><div class="hero-body"><p class="title has-text-link-dark"> Insert New Parking Lot </p><p class="subtitle"> Details about the application and whatnot. </p></div><div class="hero-foot"><div class="buttons is-centered"><button class="${ssrRenderClass([{ " is-link": _ctx.step === 1 }, "button is-small"])}"></button><button class="${ssrRenderClass([{ " is-link": _ctx.step === 2 }, "button is-small"])}"></button><button class="${ssrRenderClass([{ " is-link": _ctx.step === 3 }, "button is-small"])}"></button></div></div></div></section><section class="section"><div class="container is-max-desktop px-5">`);
      _push(ssrRenderComponent(_component_general_card, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Basic Information `);
          } else {
            return [
              createTextVNode(" Basic Information ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              label: "Parking Lot Name",
              type: "text"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                label: "Parking Lot Name",
                type: "text"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="section"><div class="container is-max-desktop px-5">`);
      if (_ctx.step === 1) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_mutation_insert_step_one, {
          onNextStep: ($event) => _ctx.step++
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step === 2) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_mutation_insert_step_two, {
          onNextStep: ($event) => _ctx.step++
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.step === 3) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_mutation_insert_step_three, {
          onNextStep: ($event) => _ctx.step++
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ParkingLots/functions/addNewLot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=addNewLot.dfbc33e2.mjs.map
