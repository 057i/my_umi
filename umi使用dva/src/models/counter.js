//全局模型
// dva中有关仓库的都交给模型来处理和管理
import { put, call } from "dva"

export default {
    state: 0,
    reducers: {
        increase: state => state + 1,
        decrease: state => state - 1,
    },
    effects: {
        //effect接受两个参数，一个是action,第二个参数是封装好了的saga/effect对象（没有delay方法),不需要再导入
        *asyncIncrease(state, { put, call }) {
            yield call(delay, 1000)
            console.log("一秒钟过去了")
            yield put({ type: "increase" })

        },

        *asyncDecrease(state, { put, call }) {
            yield call(delay, 1000)
            console.log("一秒钟过去了")
            yield put({ type: "decrease" })
        }
    }
}

function delay(time) {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, time)
    })
}