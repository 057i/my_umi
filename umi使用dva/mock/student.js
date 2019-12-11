//利用mockjs模拟数据
import Mock from "mockjs"
//模拟数据，用于后端数据还未完成时，前端可以自行模拟
let result = Mock.mock({
    msg: "查询成功",
    status: "success",
    "data|10": [{
        name: "@cname",
        address: "@city",
        "birth|1990-2000": 0,
        email: "@email",
        "sex|1": [0, 1],

    }]

})

console.log(result)

//导出为一个对象，配置如下。
// 如果将来数据开发完成，只要将接口替换即可
export default {
    "GET /api/student/findAll": result
}
