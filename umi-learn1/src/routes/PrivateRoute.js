import React from 'react'
import Link from "umi/link"

export default function PrivateRoute(props) {
    console.log(props, 999)
    let user = localStorage.getItem("userName");

    //判断登录状态
    if (user) {
        //已经登陆的话，展示下一个Routes数组中的下一项
        return (
            <>
                {props.children}
            </>
        )
    } else {
        //还未登陆的话，显示跳转链接，不再显示后续的Routes
        return (
            <div>
                你还没有登录，请先<Link to="/login">登录</Link>后再操作
            </div>
        )
    }

}