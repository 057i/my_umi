import React from 'react'

//动态路由的写法
export default function $id(props) {
    console.log(props)
    return (
        <div>
            当前动态路由位置指向{props.match.params.id}
        </div>
    )
}
