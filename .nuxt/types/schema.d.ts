import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["graphql-client"]?: typeof import("nuxt-graphql-client").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    content: {
        cacheVersion: number,

        cacheIntegrity: string,

        transformers: Array<any>,

        base: string,

        watch: {
             ws: {
                   port: number,

                   hostname: string,

                   showURL: boolean,
             },
        },

        sources: any,

        ignores: Array<string>,

        locales: Array<any>,

        defaultLocale: any,

        highlight: boolean,

        markdown: {
             tags: {
                   p: string,

                   a: string,

                   blockquote: string,

                   "code-inline": string,

                   code: string,

                   em: string,

                   h1: string,

                   h2: string,

                   h3: string,

                   h4: string,

                   h5: string,

                   h6: string,

                   hr: string,

                   img: string,

                   ul: string,

                   ol: string,

                   li: string,

                   strong: string,

                   table: string,

                   thead: string,

                   tbody: string,

                   td: string,

                   th: string,

                   tr: string,
             },

             anchorLinks: {
                   depth: number,

                   exclude: Array<number>,
             },

             remarkPlugins: any,

             rehypePlugins: any,
        },

        yaml: any,

        csv: {
             delimeter: string,

             json: boolean,
        },

        navigation: {
             fields: Array<any>,
        },

        documentDriven: boolean,

        experimental: {
             clientDB: boolean,
        },
    },

    "graphql-client": {
        clients: any,
    },
  }
  interface PublicRuntimeConfig {
     "graphql-client": {
        clients: {
             default: {
                   token: {
                          type: string,

                          name: string,
                   },

                   proxyCookies: boolean,

                   tokenStorage: {
                          mode: string,

                          cookieOptions: {
                                  maxAge: number,

                                  secure: boolean,
                          },

                          name: string,
                   },

                   preferGETQueries: boolean,

                   host: string,

                   headers: {
                          apiKey: string,

                          authorization: string,
                   },
             },
        },
    },

    content: {
        clientDB: {
             isSPA: boolean,

             integrity: number,
        },

        navigation: {
             fields: Array<any>,
        },

        base: string,

        tags: {
             p: string,

             a: string,

             blockquote: string,

             "code-inline": string,

             code: string,

             em: string,

             h1: string,

             h2: string,

             h3: string,

             h4: string,

             h5: string,

             h6: string,

             hr: string,

             img: string,

             ul: string,

             ol: string,

             li: string,

             strong: string,

             table: string,

             thead: string,

             tbody: string,

             td: string,

             th: string,

             tr: string,
        },

        highlight: boolean,

        wsUrl: string,

        documentDriven: boolean,

        anchorLinks: {
             depth: number,

             exclude: Array<number>,
        },
    },
  }
}