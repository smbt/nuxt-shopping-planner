import colors from 'vuetify/es5/util/colors'

export default {
    ssr: false,
    target: 'static',
    head: {
        titleTemplate: '%s',
        title: 'Einkaufsplaner',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    css: [],
    plugins: [{ src: '~/plugins/persistedState.client.ts' }],
    components: true,
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify',
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/onesignal',
        '@nuxtjs/pwa',
    ],
    axios: {},
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },
    build: {},
    pwa: {
        manifest: {
            name: 'Einkaufsplaner',
            short_name: 'Einkaufsplaner',
            shortcuts: [
                {
                    'name': 'Go to sandbox',
                    'short_name': 'Sandbox',
                    'description': '-',
                    'url': '/sandbox',
                },
            ],
            icons: [{
                'src': 'static/icon.png',
                'sizes': '225x225',
                'type': 'image/png',
            }],
        },
    },
    oneSignal: {
        init: {
            appId: 'YOUR_APP_ID',
            allowLocalhostAsSecureOrigin: true,
            welcomeNotification: {
                disable: true,
            },
        },
    },
}
