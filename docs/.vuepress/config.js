module.exports = {
    title: 'PhilNote',
    description: '前端小笔记',
    base: '/vue_press_ss/' /* DEV基础虚拟路径 */,
    // base: '../' /* PROD 虚拟路径 */,
    dest: './dist',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'logo.png' }
        ]
    ],
    themeConfig: {
        logo: './logo.png',
        sidebar: [
            {
                title: '产品经理',
                collapsable: false,
                children: [
                    '/chapter1/1.自我介绍',
                    '/chapter1/2.产品思维',
                    '/chapter1/3.如何从0到1实现产品',
                    '/chapter1/4.产品经理需要具备的基本素质',
                    '/chapter1/5.产品经理面试常见问题',
                    '/chapter1/6.产品经理的日常工作',
                    '/chapter1/7.为什么要当产品经理',
                    '/chapter1/产品分析报告模版',
                    '/chapter1/产品经理的分类',
                    '/chapter1/竞品分析-模版',
                    '/chapter1/客户地图',
                    '/chapter1/客户概况和价值图',
                    '/chapter1/启示录-打造用户喜爱的产品',
                    '/chapter1/商业模式',
                    '/chapter1/商业模式画布',
                    '/chapter1/数据产品经理修炼手册',
                    '/chapter1/长尾理论-为什么商业的未来是小众市场',
                    '/chapter1/PRD—模版',
                ]
            },
            {
                title: '读书笔记',
                collapsable: false,
                children: [
                    '/chapter2/神策分析',
                    '/chapter2/启示录',
                ]
            },
            // {
            //     title: '二级', // 标题
            //     children: [
            //         '/chapter1/自我介绍',
            //     ]
            // },
            //   {
            //     title: 'TypeScript 常用语法',
            //     children: ['chapter2/1_type', 'chapter2/2_interface', 'chapter2/3_class', 'chapter2/4_function', 'chapter2/5_generic', 'chapter2/6_other']
            //   }
        ]
    },
}
