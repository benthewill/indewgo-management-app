import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/benthewill/Library/Mobile Documents/com~apple~CloudDocs/Indewgo/indewgo-management-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}