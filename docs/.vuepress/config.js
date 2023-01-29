module.exports = {
    theme: '@vuepress/blog',
    title: 'PhilNote',
    description: '前端小笔记',
    // base: '/vue_press_ss/' /* DEV基础虚拟路径 */,
    base: '/' /* PROD 虚拟路径 */,
    dest: './dist',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'logo.png' }
        ]
    ],
    themeConfig: {
        logo: './logo.png',
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/vuejs/vuepress',
                },
                // {
                //     type: 'twitter',
                //     link: 'https://github.com/vuejs/vuepress',
                // },
            ],
            copyright: [
                // {
                //     text: 'Privacy Policy',
                //     link: 'https://policies.google.com/privacy?hl=en-US',
                // },
                {
                    text:"粤ICP备2023006132号",
                    link:"https://beian.miit.gov.cn/",
                },
                {
                    text: 'MIT Licensed | Copyright © 2023-present Phil',
                },
            ],
        },
    },
}
