import React from 'react'
import withRouter from "umi/withRouter"


//如果是普通组件的话，上下文中没有history对象，所以就不能够使用history属性上的方法
//解决方案是withRouter,在react-router中有withRouter，在umi里面也有withRouter
function CompA(props) {
    return (
        <div>
            <h1>CompA</h1>
            <button onClick={() => {
                props.history.push("/")
            }}>
                跳转首页
            </button>
        </div>
    )
}
export default withRouter(CompA)
