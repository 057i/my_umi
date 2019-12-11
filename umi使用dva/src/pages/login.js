// title: 这是注释
// 


import React from 'react'
import { useRef } from "react"

export default function login(props) {
    console.log(props)
    const userRef = useRef()
    return (
        <div>

            用户名:<input type="text" ref={userRef} />


            密码:<input type="password" />


            <button onClick={() => {
                localStorage.setItem("userName", userRef.current.value)
                console.log(userRef.current.value)
                props.history.push("/")
            }}>登录</button>


        </div>
    )
}
