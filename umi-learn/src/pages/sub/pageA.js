import React from 'react'
import router from "umi/router"

export default function pageA(props) {
    console.log(router)//这里的router就是简易版的history对象
    return (
        <div>
            <h1>sub/pageA</h1>
            <button onClick={() => {
                router.push("/sub/pageB")//使用push进行跳转
            }}>跳转到B页面</button>
    

        </div>
    )
}
