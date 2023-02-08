import { useSSRContext, resolveComponent, mergeProps, ref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$5 = {
  props: ["address", "index", "contacts"]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "column is-three-quarters-widescreen is-full-desktop is-full-tablet" }, _attrs))}><div class="columns"><div class="column"><p><span class="heading"> Gated:<br></span>`);
  if ($props.address.node.gated) {
    _push(`<span> True </span>`);
  } else {
    _push(`<!---->`);
  }
  if (!$props.address.node.gated) {
    _push(`<span> False </span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</p></div><div class="column"><p><span class="heading"> Lot Type:<br></span><!--[-->`);
  ssrRenderList($props.address.node.parking_lot_type, (n) => {
    _push(`<span>${ssrInterpolate(n)}\u200A </span>`);
  });
  _push(`<!--]--></p></div><div class="column"><p><span class="heading"> Hours:<br></span>`);
  if ($props.address.node.gate_hour_from === null && $props.address.node.gate_hour_to === null) {
    _push(`<span>Open 24/7</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.address.node.gate_hour_from && $props.address.node.gate_hour_to) {
    _push(`<span>${ssrInterpolate($props.address.node.gate_hour_from)} to ${ssrInterpolate($props.address.node.gate_hour_to)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</p></div><div class="column"><p><span class="heading"> Lot Contacts:<br></span><!--[-->`);
  ssrRenderList($props.contacts.curatedExternalContacts, (ext) => {
    _push(`<span>${ssrInterpolate(ext.node.external_contacts.first_name)} ${ssrInterpolate(ext.node.external_contacts.last_name)}<br></span>`);
  });
  _push(`<!--]--></p></div><div class="column"><p><span class="heading"> Lot Managers:<br></span><!--[-->`);
  ssrRenderList($props.contacts.curatedInternalContacts, (ext) => {
    _push(`<span>${ssrInterpolate(ext.node.internal_members.first_name)} ${ssrInterpolate(ext.node.internal_members.last_name)}<br></span>`);
  });
  _push(`<!--]--></p></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tables/SimpleDetails.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SimpleDetails = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const SimpleDetails$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SimpleDetails
}, Symbol.toStringTag, { value: "Module" }));
const currencyConvert = (amount) => {
  let localString = amount.toLocaleString();
  let split = localString.split(".");
  let num = split[0];
  let dec = split[1] ? split[1] : "00";
  dec = dec.length > 1 ? dec : dec += "0";
  dec = dec.length > 2 ? dec.split("")[0] + dec.split("")[1] : dec;
  return num + "." + dec;
};
function splitting(amount) {
  let localString = amount.toLocaleString();
  let split = localString.split(".");
  let num = split[0];
  let dec = split[1] ? split[1] : "00";
  dec = dec.length > 1 ? dec : dec += "0";
  dec = dec.length > 2 ? dec.split("")[0] + dec.split("")[1] : dec;
  return num + "." + dec;
}
let testContent = splitting(162.18);
console.log(testContent);
const grouping = (arr, comp) => {
  let compItems = [];
  for (let x of arr) {
    x.node[comp].forEach((i) => compItems.push(i));
  }
  compItems = [...new Set(compItems)];
  let output = compItems.map((x) => {
    return { [comp]: x, contents: [] };
  });
  for (let c of compItems) {
    let z = arr.filter((n) => n.node[comp].includes(c));
    let a = output.filter((o) => o[comp] === c)[0];
    a.contents = z;
  }
  return output;
};
const capitalize = (text, config) => {
  let textArr = text.split(" ");
  let newArr = [];
  for (let tx of textArr) {
    let newTx = tx[0].toUpperCase() + tx.slice(1);
    newArr.push(newTx);
  }
  return newArr.join(" ");
};
const durationCalculation = (time) => {
  function timeToDuration(item) {
    let regexDays = new RegExp(/\d\d:\d\d:\d\d/);
    let check = item.match(regexDays);
    let spl = item;
    let dayCheck = "";
    let hourOutput, minuteOutput, finalOutput;
    if (check !== null && item.match(/day/) !== null) {
      spl = check[0];
      dayCheck = item.split(" ").slice(0, 2).join(" ");
      spl = spl.split(":");
      hourOutput = output(String(spl[0]), "hr");
      minuteOutput = output(String(spl[1]), "min");
      finalOutput = `${dayCheck} ${hourOutput} ${minuteOutput}`;
    } else if (item.match(/day/) !== null && check === null) {
      finalOutput = item;
    } else {
      spl = spl.split(":");
      hourOutput = output(String(spl[0]), "hr");
      minuteOutput = output(String(spl[1]), "min");
      finalOutput = `${hourOutput} ${minuteOutput}`;
    }
    function output(timeElement, unit) {
      if (isNaN(Number(timeElement))) {
        throw new Error(`${timeElement} is not an actual Number.`);
      }
      if (timeElement.length > 2) {
        throw new Error(`${timeElement} is not a valid Number.`);
      }
      let timeOutput = timeElement !== "00" ? timeElement : null;
      if (timeOutput) {
        timeOutput = timeOutput[0] === "0" ? timeOutput.slice(1) : timeOutput;
        let unitOutput = Number(timeOutput) > 1 ? unit += "s" : unit;
        return `${timeOutput} ${unitOutput}`;
      }
      return "";
    }
    return finalOutput;
  }
  return timeToDuration(time);
};
const taxCalculation = (amount, taxes) => {
  let finalPrice = Number(amount);
  for (let tax of taxes) {
    finalPrice += finalPrice * tax;
  }
  return finalPrice;
};
const daysOfWeek = (arr) => {
  let dow = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7
  };
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (n, i) => start + i * step);
  const arrFill = range(arr[0], arr[arr.length - 1], 1);
  function seq(check, start) {
    let param = { status: true, ends: 0 };
    for (let i = start, j = check[start]; i < check.length; i++) {
      console.log(check[i]);
      console.log(j);
      if (check[i] !== j) {
        param.status = false;
        param.ends = i;
        break;
      } else {
        param.ends = i;
      }
      j++;
    }
    return param;
  }
  let details = [];
  let getDay = (i) => Object.keys(dow).find((key) => dow[key] === arr[i]);
  let period = `${getDay(0)} to ${getDay(arr.length - 1)}`;
  let totalDays = arr.length;
  if (JSON.stringify(arrFill) !== JSON.stringify(arr)) {
    console.log(arr);
    let done = false;
    let startingPoint = 0;
    while (done === false) {
      let checking = seq(arr, startingPoint);
      console.log(checking);
      if (checking.status === false) {
        startingPoint = checking.ends;
        details.push(checking.ends);
      } else {
        done = true;
      }
    }
    period = `${getDay(0)} to ${getDay(details[0] - 1)}, and ${getDay(details[0])} to ${getDay(arr.length - 1)}`;
    return { period, totalDays };
  }
  if (arr.length === 7) {
    period = "Everyday";
  }
  return {
    period,
    totalDays
  };
};
const nameRate = (hourFrom, hourTo, verbalizedDays, dayLength) => {
  let conv = (x) => {
    let getNum = x === 0 ? "12 AM" : x > 12 ? x - 12 + " PM" : x + " AM";
    return getNum;
  };
  if (hourFrom === 0 && hourTo === 24 && dayLength.length === 7) {
    return `24/7`;
  } else if ((hourFrom !== 0 || hourTo !== 24) && dayLength.length === 7) {
    return `${conv(hourFrom)} to ${conv(hourTo)}, ${verbalizedDays}`;
  } else {
    return `${conv(hourFrom)} to ${conv(hourTo)}, ${verbalizedDays}`;
  }
};
const _sfc_main$4 = {
  props: ["content", "taxes"],
  setup() {
    const durationConvert = (x) => durationCalculation(x);
    const currencyZeros = (x) => currencyConvert(x);
    const taxesCalculation = (x, y) => taxCalculation(x, y);
    const capitalizeText = (x) => capitalize(x);
    const verbalizeDays = (x) => daysOfWeek(x);
    const namingRate = (x, y, z, a) => nameRate(x, y, z, a);
    return {
      durationConvert,
      currencyZeros,
      capitalizeText,
      taxesCalculation,
      namingRate,
      verbalizeDays
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($props.content, (rateItem) => {
    _push(`<div class="list pt-0 px-1 has-hoverable-list-items"><div class="list-item"><div class="list-item-content"><div class="columns is-narrow pl-1"><div class="column"><p><span class="heading">Duration</span><span class="subtitle is-6">${ssrInterpolate($setup.durationConvert(rateItem.node.duration))}</span></p></div><div class="column"><p><span class="heading">Price</span><span class="subtitle is-6">$ ${ssrInterpolate($setup.currencyZeros(rateItem.node.base_price))}</span></p></div><div class="column"><p><span class="heading">Availability</span>`);
    if (rateItem.node.daily_rates_availabilityCollection.edges.length === 0) {
      _push(`<span class="subtitle is-6"> N/A </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p><div class="tags are-small"><!--[-->`);
    ssrRenderList(rateItem.node.daily_rates_availabilityCollection.edges, (item) => {
      _push(`<span class="tag is-success is-light">`);
      if (item) {
        _push(`<span>${ssrInterpolate($setup.verbalizeDays(item.node.days_of_the_week).period)}\u200A </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    });
    _push(`<!--]--></div></div><div class="column"><p><span class="heading">Clearance</span><span class="subtitle is-6">SU UG</span></p></div><div class="column"><p><span class="heading">Placeholder</span><span class="subtitle is-6">true</span></p></div></div></div></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tables/row/DailyRow.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DailyRow = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const DailyRow$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DailyRow
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: { DailyRow },
  props: ["daily", "index", "cityDetails"],
  setup() {
    const durationConvert = (x) => durationCalculation(x);
    const currencyZeros = (x) => currencyConvert(x);
    const groupContents = (x, y) => grouping(x, y);
    return {
      durationConvert,
      currencyZeros,
      groupContents
    };
  },
  data() {
    return {
      groupingMethod: ref("rate_allowance")
    };
  },
  methods: {
    capitalize(text, config) {
      let textArr = text.split(" ");
      let newArr = [];
      for (let tx of textArr) {
        let newTx = tx[0].toUpperCase() + tx.slice(1);
        newArr.push(newTx);
      }
      return newArr.join(" ");
    },
    alterGroupingMethod(method) {
      this.groupingMethod = method;
    }
  },
  computed: {
    getMethods() {
      let paymentMethods = [];
      this.daily.forEach((item) => {
        let method = item.node.daily_rate_payment_methodsCollection.edges;
        if (method.length) {
          let methodName = method.map((n) => n.node.daily_rate_payment_method_types.payment_method_type_name);
          paymentMethods.push(methodName);
        }
      });
      let flattenPM = paymentMethods.flat();
      let pmSet = [...new Set(flattenPM)];
      return pmSet;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_daily_row = resolveComponent("daily-row");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "column mx-3" }, _attrs))}><div class="is-narrow"><div class="level is-mobile"><div class="level-left"><div class="level-item"><p class="subtitle is-5 pl-2 has-text-weight-semibold"> Daily Parking <span class="is-size-6 has-text-weight-light">(${ssrInterpolate($props.daily.length)})</span></p></div></div><div class="level-right"><div class="level-item"><p class="button is-small is-info">Function</p></div><div class="level-item"><p class="button is-small is-info">Process</p></div></div></div>`);
  if (!$props.daily.length) {
    _push(`<div><div class="block p-2"><p class="title is-5">No daily parking available.</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.daily.length) {
    _push(`<div><div class="block px-2 is-hidden-mobile"><div class="columns"><div class="column"><p class="heading"> Payment </p><div class="tags are-small"><!--[-->`);
    ssrRenderList($options.getMethods, (method) => {
      _push(`<span class="tag is-warning is-light">${ssrInterpolate(method)}</span>`);
    });
    _push(`<!--]--></div></div><div class="is-divider-vertical addingPadd"></div><div class="column"><p class="heading"> Areas </p><!--[-->`);
    ssrRenderList($options.getMethods, (method) => {
      _push(`<div><p class="is-size-7">${ssrInterpolate(method)}</p></div>`);
    });
    _push(`<!--]--></div><div class="is-divider-vertical addingPadd"></div><div class="column"><p class="heading"> Details </p><div><p class="is-size-7"> Additional Details Here. Maybe stuff currently not befitting other locations. </p></div></div></div></div><!--[-->`);
    ssrRenderList($setup.groupContents($props.daily, $data.groupingMethod), (rate) => {
      _push(`<div class="block px-2 py-5 cleanBordering"><p class="subtitle is-5 has-text-weight-semibold pl-3 pb-0 has-text-grey">${ssrInterpolate($options.capitalize(rate[$data.groupingMethod]))} Rates </p>`);
      _push(ssrRenderComponent(_component_daily_row, {
        content: rate.contents,
        taxes: $props.cityDetails
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tables/SimpleDailyRates.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SimpleDailyRates = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const SimpleDailyRates$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SimpleDailyRates
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  props: ["content", "taxes"],
  setup() {
    const currencyZeros = (x) => currencyConvert(x);
    const taxesCalculation = (x, y) => taxCalculation(x, y);
    const groupContents = (x, y) => grouping(x, y);
    const verbalizeDays = (x) => daysOfWeek(x);
    const capitalizeText = (x) => capitalize(x);
    const namingRate = (x, y, z, a) => nameRate(x, y, z, a);
    return {
      currencyZeros,
      taxesCalculation,
      groupContents,
      verbalizeDays,
      capitalizeText,
      namingRate
    };
  },
  methods: {}
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($props.content, (rateItem) => {
    _push(`<div class="list pt-0 px-1 has-hoverable-list-items"><div class="list-item"><div class="list-item-content"><div class="list-item-title"><div class="level"><div class="level-left"><div class="level-item"><p class="subtitle is-6">${ssrInterpolate($setup.capitalizeText(rateItem.node.monthly_rates_type.rate_name))} - ${ssrInterpolate($setup.namingRate(
      rateItem.node.rate_hour_from,
      rateItem.node.rate_hour_to,
      $setup.verbalizeDays(rateItem.node.rate_days).period,
      rateItem.node.rate_days
    ))}</p></div></div><div class="level-right"><div class="level-item"><p class="button is-small is-inverted is-info">Functions</p></div></div></div></div><div class="list-item-description"><div class="columns is-narrow pt-1 pl-1"><div class="column"><p><span class="heading">Pre-Tax</span><span class="subtitle is-6">$ ${ssrInterpolate($setup.currencyZeros(rateItem.node.base_price))}</span></p></div><div class="column"><p><span class="heading">Price</span><span class="subtitle is-6">$ ${ssrInterpolate($setup.currencyZeros($setup.taxesCalculation(rateItem.node.base_price, [$props.taxes.provincial_transport_tax, $props.taxes.goods_and_services_tax, $props.taxes.additional_tax])))}</span></p></div><div class="column"><p><span class="heading">Clearance</span><!--[-->`);
    ssrRenderList(rateItem.node.clearance_lot_types, (n) => {
      _push(`<span class="subtitle is-6">${ssrInterpolate(n)}\xA0</span>`);
    });
    _push(`<!--]--></p></div><div class="column"><p><span class="heading">Access</span>`);
    if (rateItem.node.monthly_rates_accessCollection.edges.length) {
      _push(`<!--[-->`);
      ssrRenderList(rateItem.node.monthly_rates_accessCollection.edges, (n) => {
        _push(`<span class="subtitle is-6">${ssrInterpolate($setup.capitalizeText(n.node.parking_lots_access_methods.method_name))}\xA0</span>`);
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    if (!rateItem.node.monthly_rates_accessCollection.edges.length) {
      _push(`<span class="subtitle is-6">No Access Required</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p></div></div></div></div></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tables/row/MonthlyRow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MonthlyRow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const MonthlyRow$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MonthlyRow
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  components: { MonthlyRow },
  props: ["monthly", "cityDetails"],
  setup() {
    const groupContents = (x, y) => grouping(x, y);
    const capitalizeText = (x) => capitalize(x);
    return {
      groupContents,
      capitalizeText
    };
  },
  data() {
    return {
      groupingMethod: ref("rate_allowance")
    };
  },
  methods: {
    alterGroupingMethod(method) {
      this.groupingMethod = method;
    }
  },
  computed: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_monthly_row = resolveComponent("monthly-row");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "column mx-3" }, _attrs))}><div class="level is-mobile"><div class="level-left"><div class="level-item"><p class="subtitle is-5 pl-2 has-text-weight-semibold"> Monthly Parking </p></div></div><div class="level-right"><div class="level-item"><p class="button is-small is-info">Function</p></div><div class="level-item"><p class="button is-small is-info">Process</p></div></div></div>`);
  if (!$props.monthly.length) {
    _push(`<div><div class="block p-2"><p class="title is-5">No monthly parking available.</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.monthly.length) {
    _push(`<div><div class="block px-2 is-hidden-mobile"><div class="columns"><div class="column"><p class="heading"> Details </p><div><p class="is-size-7"> Additional Details Here. Maybe stuff currently not befitting other locations. </p></div></div><div class="is-divider-vertical addingPadd"></div><div class="column"><p class="heading"> Details 2 </p><div><p class="is-size-7"> Maybe this part of the detail is related to something else. </p></div></div><div class="is-divider-vertical addingPadd"></div><div class="column"><p class="heading"> Details 3 </p><div><p class="is-size-7"> Maybe this part of the detail is related to something else. </p></div></div></div></div><!--[-->`);
    ssrRenderList($setup.groupContents($props.monthly, $data.groupingMethod), (rate) => {
      _push(`<div class="block px-2 py-5 cleanBordering"><p class="subtitle is-5 has-text-weight-semibold pl-3 pb-0 has-text-grey">${ssrInterpolate($setup.capitalizeText(rate[$data.groupingMethod]))} Rates </p>`);
      _push(ssrRenderComponent(_component_monthly_row, {
        content: rate.contents,
        taxes: $props.cityDetails
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tables/SimpleMonthlyRates.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SimpleMonthlyRates = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const SimpleMonthlyRates$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SimpleMonthlyRates
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  components: { SimpleMonthlyRates, SimpleDailyRates, SimpleDetails },
  props: ["lotDetails"],
  computed: {
    addressColl() {
      const getEdges = this.lotDetails.parking_lots_addressCollection;
      const curatedAddresses = [...getEdges.edges];
      const getLength = { ...getEdges };
      const cityNames = () => {
        let cityDetails = curatedAddresses[0];
        cityDetails = { ...cityDetails };
        cityDetails = { ...cityDetails.node };
        cityDetails = { ...cityDetails.city_details };
        cityDetails = cityDetails.city_name;
        return cityDetails;
      };
      const addressesList = () => {
        return curatedAddresses.map((item) => {
          let addrDetailed = {
            streetNum: item.node.street_number,
            streetName: item.node.street_name,
            streetPostal: item.node.street_postal_code
          };
          return `${addrDetailed.streetNum} ${addrDetailed.streetName} St, ${addrDetailed.streetPostal}`;
        });
      };
      return {
        curatedAddresses,
        city: cityNames(),
        addressesList: addressesList(),
        getLength
      };
    },
    contactsColl() {
      const getEdgesExternal = this.lotDetails.parking_lots_external_contactsCollection;
      const curatedExternalContacts = [...getEdgesExternal.edges];
      const getEdgesInternal = this.lotDetails.parking_lots_internal_contactsCollection;
      const curatedInternalContacts = [...getEdgesInternal.edges];
      return {
        curatedExternalContacts,
        curatedInternalContacts
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SimpleDetails = resolveComponent("SimpleDetails");
  const _component_SimpleDailyRates = resolveComponent("SimpleDailyRates");
  const _component_SimpleMonthlyRates = resolveComponent("SimpleMonthlyRates");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card py-3 px-4 mt-5 mb-6 rounding is-shadowless" }, _attrs))}><div class="sticky has-background-white"><div class="card-header pt-2 is-shadowless is-inline-tablet-only is-inline-touch"><div class="card-header-title"><p class="title is-5 has-text-weight-semibold">Lot ${ssrInterpolate($props.lotDetails.parking_lot_number)} - ${ssrInterpolate($props.lotDetails.parking_lot_name)}</p></div><div style="${ssrRenderStyle({ "align-self": "center" })}" class="pl-4 is-inline-flex-tablet is-inline-flex-widescreen is-inline-flex-desktop"><p style="${ssrRenderStyle({ "align-self": "center" })}" class="mr-4 is-size-7">Additional details about this parking lot here.</p><div style="${ssrRenderStyle({ "align-self": "center" })}"><p class="button m-1 is-small is-info">Progress</p></div></div></div><div class="is-divider removeMargin"></div></div><div class="card-content px-5 py-0"><!--[-->`);
  ssrRenderList($options.addressColl.curatedAddresses, (addr, index) => {
    _push(`<div class="block p-0 bordering mb-6"><div class="columns is-multiline px-2 py-3 topBordering has-background-white-bis"><div class="column">`);
    if ($options.addressColl.getLength.edges.length > 1) {
      _push(`<div><p class="heading"> Address ${ssrInterpolate(index + 1)}: </p><p>${ssrInterpolate(addr.node.street_number)} ${ssrInterpolate(addr.node.street_name)} Street <br> ${ssrInterpolate(addr.node.city_details.city_name)} BC ${ssrInterpolate(addr.node.street_postal_code)}</p></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.addressColl.getLength.edges.length === 1) {
      _push(`<div><p class="heading"> Address: </p><p>${ssrInterpolate(addr.node.street_number)} ${ssrInterpolate(addr.node.street_name)} Street <br> ${ssrInterpolate(addr.node.city_details.city_name)} BC ${ssrInterpolate(addr.node.street_postal_code)}</p></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    _push(ssrRenderComponent(_component_SimpleDetails, {
      address: addr,
      index,
      contacts: $options.contactsColl
    }, null, _parent));
    _push(`</div><div class="columns is-multiline px-1 py-4 bottomBordering has-background-white">`);
    _push(ssrRenderComponent(_component_SimpleDailyRates, {
      daily: addr.node.daily_ratesCollection.edges,
      index,
      cityDetails: addr.node.city_details
    }, null, _parent));
    _push(`<div class="is-divider-vertical addingPadd is-hidden-touch"></div><div class="is-divider is-hidden-tablet mx-5"></div>`);
    _push(ssrRenderComponent(_component_SimpleMonthlyRates, {
      monthly: addr.node.monthly_ratesCollection.edges,
      cityDetails: addr.node.city_details
    }, null, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tables/Rows.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const Rows = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1
}, Symbol.toStringTag, { value: "Module" }));

export { DailyRow$1 as D, MonthlyRow$1 as M, Rows as R, SimpleDetails$1 as S, __nuxt_component_1 as _, SimpleDailyRates$1 as a, SimpleMonthlyRates$1 as b };
//# sourceMappingURL=Rows.8a9d55c8.mjs.map
