import { defineEventHandler } from 'h3';

const testFunction = defineEventHandler((e) => {
  return [1, 2, 3, 4, 5];
});

export { testFunction as default };
//# sourceMappingURL=testFunction.mjs.map
