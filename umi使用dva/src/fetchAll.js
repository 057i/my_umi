
const appkey = "demo13_1545210570249"
export default function fetchAll () {
    console.log(123)
    const list = fetch(`/api/student/findAll?appkey=${appkey}`).then(res => res.json())

    return list
}