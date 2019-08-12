module.exports = {
    title: 'Yish\'s Packages',
    description: 'Yish develop and contribute packages and open source.',

    themeConfig: {
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
                        '/packages/laravel-accessible-IPs',
                        '/packages/laravel-batch-migration',
                    ]
                }
            ],
        }
    }
}