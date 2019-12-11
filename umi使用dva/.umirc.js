export default {
    routes: [
        {
            path: "/",
            component: "../layouts/",
            title: "首页",
            exact: false,
            routes: [
                {
                    path: "/",
                    component: "./index.js",
                    title: "首页"
                },

                {
                    path: "/login",
                    component: "./login.js",
                    title: "登录页"
                },
                {
                    path: "/welcome",
                    component: "./welcome.js",
                    title: "欢迎页"
                },
                {
                    path: "/counter",
                    component: "./counter.js",
                    title: "计算页"
                }
            ]
        },

    ],

    plugins: [
        [
            'umi-plugin-react',
            {
                dva: true,//开启dva插件
                title: true,//开启title插件

                //批量处理路由
                routes: {
                    // 用于忽略某些路由
                    exclude: [/.*model.*/]
                }
            },
        ],
    ],
    //proxy相当于webpack下的devServer(服务器代理)下的proxy,因为跨域只发生在浏览器，
    //所以使用代理服务器向服务器请求资源

    // proxy: {
    //     //匹配到以api打头的就用代理服务器去访问下面的服务器
    //     "/api": {
    //         target: "http://open.duyiedu.com",//请求的服务器地址，要注意的是，在浏览器中显示的还是请求本地服务器
    //         changeOrigin: true//修改源
    //     }

    // }


    
}