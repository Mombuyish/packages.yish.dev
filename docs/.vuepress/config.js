module.exports = {
    title: 'Yish\'s Packages',
    description: 'Yish develop and contribute packages and open source.',

    serviceWorker: true,

    plugins: [
      '@vuepress/pwa',
      require('./plugins/metaVersion.js')
    ],

    head: [
        // Used for PWA
        [
          "link",
          {
            rel: 'manifest',
            href: '/manifest.json'
          }
        ],
        [
          "link",
          {
            rel: 'icon',
            href: '/icon.png'
          }
        ]
      ],

    themeConfig: {
        logo: "/img/logo.svg",
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Packages', link: '/packages/' },
        ],
        sidebar: {
            '/packages/': [
                {
                    title: 'Packages',
                    collapsable: false,
                    children: [
                        '',
                        '/packages/laravel-oh-generator',
                        '/packages/laravel-imgur',
                        '/packages/laravel-curlftp',
                        '/packages/sybase-notification-channel',
                        '/packages/laravel-googlespreadsheet',
                        '/packages/laravel-accessible-IPs',
                        '/packages/laravel-scaffold',
                        '/packages/laravel-auto-page',
                        '/packages/laravel-facebook-ads-sdk',
                        '/packages/laravel-batch-migration',
                        '/packages/php-snippets-for-vscode',
                        '/packages/sublime-fast-snippets-with-php',
                    ]
                }
            ],
        }
    }
}