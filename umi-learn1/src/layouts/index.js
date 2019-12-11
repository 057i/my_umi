import React from 'react'
import NavLink from "umi/navlink"
import Route from "umi/route"
import Index from "../pages/index"
import login from "../pages/login"
import welcome from "../pages/welcome"

export default function (props) {
    console.log(props)
    //根路由下嵌套的子路由，在默认样式配置的props中可以找到props.route.routes子路由数组，
    //这个数组大有用处
    // let flag = props.route.routes.filter((elm, index) => {
    //     if (elm.path === props.location.pathname) {
    //         document.title = elm.title
    //     }
    // })




    return (
        <div>
            <div>
                <NavLink to="/" >主页</NavLink>
                <NavLink to="/welcome">欢迎页</NavLink>
                <NavLink to="/login">登录页</NavLink>
            </div>

            <div>
                {/* <Route path="/" exact component={Index}></Route>
                <Route path="/welcome" component={welcome}></Route>
                <Route path="/login" component={login}></Route> */}
                {props.children}
            </div>

        </div >
    )
}
