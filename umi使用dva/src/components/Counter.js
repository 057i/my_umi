import React from 'react'
import { connect } from "dva"//因为在umi中引入了dva，所以可以在dva中引入connect
import styles from "./Counter.css"  //样式导入的时候是一个对象，要记得写文件后缀
import btnStyles from "@/assets/css/button.css"


function Counter(props) {
    // console.log(btnStyles)
    return (

        // 这里注意，umijs赋予样式的时候，导出的是对象，
        // 用webpack加载器加载css_modules然后拼接随机字符串生成的类名
        // 所以在umi中赋予类样式的时候不可以把类名写死，要使用动态类名styles.xxx 

        <div className={styles.counter}>
            <h4 className={styles.num}>{props.num}</h4>
            <button className={btnStyles.btn} onClick={props.onIncrease}>加</button>
            <button className={btnStyles.btn} onClick={props.onDecrease}>减</button>
            <button className={btnStyles.btn} onClick={props.onAsyncIncrease}>异步加</button>
            <button className={btnStyles.btn} onClick={props.onAsyncDecrease}>异步减</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        num: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease() {
            dispatch({ type: "counter/increase" })
        },
        onDecrease() {
            dispatch({
                type: "counter/decrease"
            })
        },
        onAsyncIncrease() {
            dispatch({ type: "counter/asyncIncrease" })

        },
        onAsyncDecrease() {
            dispatch({ type: "counter/asyncDecrease" })

        }
    }
}

const hoc = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default hoc

