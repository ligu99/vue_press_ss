module.exports = {
    title: 'Hello 十三',
    description: 'VuePress_SS',
    base: '/vue_press_ss/' /* 基础虚拟路径 */,
    dest: './dist',
    themeConfig: {
        sidebar: [
            {
                title: '产品经理',
                collapsable: false,
                children: [
                    '/chapter1/1.自我介绍',
                    '/chapter1/2.产品思维',
                    '/chapter1/7.为什么要当产品经理',
                    '/chapter1/3.如何从0到1实现产品',
                    '/chapter1/5.产品经理面试常见问题',
                    '/chapter1/6.产品经理的日常工作',
                    '/chapter1/4.产品经理需要具备的基本素质',
                    '/chapter1/8.什么样的产品才算是一个好产品',
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
    // sidebar: {
    //     '/chapter1/': [{
    //         title: "面试",
    //         children: ["自我介绍"]
    //     }]
}
