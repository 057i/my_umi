//配置路由的书写方式会覆盖约定式路由
export default {
    //路由配置routes
    routes: [
        {
            path: "/",
            component: "../layouts/index.js",
            // 这里要设置成false,不然默认会是是匹配首页严格匹配
            exact: false,
            routes: [
                {
                    path: "/",
                    component: "./index.js",
                    title: "首页",
                    //当路由中存在Route属性的时候，只要匹配路径，就不会渲染原本的component下的组件，
                    //转而去渲染Routes数组下的组件，然后将component作为children属性传递给Routes下配置好的的组件
                    //而且要注意的是，数组下的components会按照Routes里面顺序，传递给下一个数组元素，作为它的children
                    //可以作为预处理使用
                    Routes: ["./src/routes/HandleTitle.js"]
                },
                {
                    path: "/login",
                    component: "./login.js",
                    title: "登录页",
                    Routes: ["./src/routes/HandleTitle.js"]
                },
                {
                    path: "/welcome",
                    component: "./welcome.js",
                    title: "欢迎页",
                    //将Routes用作登录跳转
                    Routes: ["./src/routes/PrivateRoute", "./src/routes/HandleTitle.js"]
                }
            ]
        }

    ]
}