/**
 * title: 首页
 * 
 * 
 */


import React from 'react'
export default function index(props) {
    console.log(props)
    return (
        <div>
            主页
            <h1>用户名为{localStorage.getItem("userName")}</h1>
            <>{localStorage.getItem("userName") ? <button onClick={() => {
                localStorage.removeItem("userName")
                props.history.push("/login")
            }}>注销</button> : ""}</>
        </div>
    )
}