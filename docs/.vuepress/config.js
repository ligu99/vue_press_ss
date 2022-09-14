module.exports = {
    title: 'Hello VP',
    description: 'VuePress_SS',
    base: '/vue_press_ss/' /* 基础虚拟路径 */,
    themeConfig: {
        sidebar: [
            {
                title: '一.面试技巧',
                collapsable: false,
                children: [
                    '/chapter1/自我介绍',
                    '/chapter1/产品思维',
                    '/chapter1/为什么要当产品经理',
                    '/chapter1/如何从0到1实现产品',
                    '/chapter1/产品经理面试常见问题',
                    '/chapter1/产品经理的日常工作'
                //   {
                //     // title: '二级', // 标题
                //     children: [
                //       // 下级列表
                //       'chapter1/01_初识TS',
                //       'chapter1/02_安装TS',
                //       'chapter1/03_HelloWorld',
                //       'chapter1/04_webpack打包'
                //     ]
                //   },
                //   {
                //     title: 'TypeScript 常用语法',
                //     children: ['chapter2/1_type', 'chapter2/2_interface', 'chapter2/3_class', 'chapter2/4_function', 'chapter2/5_generic', 'chapter2/6_other']
                //   }
                ]
            },
        ]
    }
}