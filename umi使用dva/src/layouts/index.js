import React from 'react'
import NavLink from "umi/navlink"
import Route from "umi/route"
import Index from "../pages/index"
import login from "../pages/login"
import welcome from "../pages/welcome"
import linkStyle from "@/assets/css/link.css"
import fetchAll from "@/fetchAll.js"

export default function (props) {
    //根路由下嵌套的子路由，在默认样式配置的props中可以找到props.route.routes子路由数组，
    //这个数组大有用处
    // let flag = props.route.routes.filter((elm, index) => {
    //     if (elm.path === props.location.pathname) {
    //         document.title = elm.title
    //     }
    // })
    fetchAll().then(res => { console.log(res.data) })


    return (
        <div>
            <div>
                <NavLink to="/" exact activeClassName={linkStyle.active}>主页</NavLink>
                <NavLink to="/welcome" activeClassName={linkStyle.active}>欢迎页</NavLink>
                <NavLink to="/login" activeClassName={linkStyle.active}>登录页</NavLink>
                <NavLink to="/counter" activeClassName={linkStyle.active}>计算页</NavLink>
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
