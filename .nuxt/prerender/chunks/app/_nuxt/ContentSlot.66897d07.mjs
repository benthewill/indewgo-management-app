import { defineComponent, getCurrentInstance, useSlots, computed, h, useSSRContext } from 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue/index.mjs';
import { b as useUnwrap } from './utils.0e544d66.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ufo/dist/index.mjs';
import '../server.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/hookable/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/unctx/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/h3/dist/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/@vueuse/shared/index.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/defu/dist/defu.mjs';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/graphql-request/dist/index.js';
import 'file:///Users/benthewill/Library/Mobile%20Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
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

const _sfc_main = defineComponent({
  name: "ContentSlot",
  functional: true,
  props: {
    use: {
      type: Function,
      default: void 0
    },
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  },
  render({ use, unwrap, fallbackSlot, between, tags, parent }) {
    var _a;
    try {
      let slot = use;
      if (typeof use === "string") {
        slot = (parent == null ? void 0 : parent.slots[use]) || ((_a = parent == null ? void 0 : parent.parent) == null ? void 0 : _a.slots[use]);
        console.warn(`Please set :use="$slots.${use}" in <ContentSlot> component to enable reactivity`);
      }
      if (!slot) {
        return fallbackSlot ? fallbackSlot() : h("div");
      }
      if (!unwrap) {
        return [slot()];
      }
      const { flatUnwrap } = useUnwrap();
      const unwrapped = flatUnwrap(slot(), tags);
      if (between) {
        return unwrapped.flatMap(
          (vnode, index) => index === 0 ? [vnode] : [between(), vnode]
        );
      }
      return unwrapped.reduce((acc, item) => {
        if (typeof item.children === "string") {
          if (typeof acc[acc.length - 1] === "string") {
            acc[acc.length - 1] += item.children;
          } else {
            acc.push(item.children);
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    } catch (e) {
      return h("div");
    }
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentSlot.66897d07.mjs.map
