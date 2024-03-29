// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-graphql-client',
        ['@pinia/nuxt', {
            autoImports: [
                'defineStore'
            ]
        }]
    ],
    app: {
        head: {
            script: [
                // <script src="https://myawesome-lib.js"></script>
                {
                    src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                }
            ]
        }
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ['ion-icon'].includes(tag)
        }
    }
    ,
    runtimeConfig: {
        public: {
            'graphql-client': {
                clients: {
                    default: {
                        host: 'https://rlwhlhzwqjpgcskfmeik.supabase.co/graphql/v1',
                        headers: {
                            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8",
                            authorization: "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsd2hsaHp3cWpwZ2Nza2ZtZWlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTIwMjk2MywiZXhwIjoxOTc2Nzc4OTYzfQ.3ogB3rHmLDlbWL7lkTzlcRrxtDzy7AIcjxfmwhg-pw8"
                        }
                    }
                }
            }
        }
    },
    css: [
        '~/assets/stylesheets/main.sass'
    ],
})
