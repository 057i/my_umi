import React from 'react'

export default function HandleTitle(props) {

    console.log(props.route.title, 888)
    document.title = props.route.title
    return (
        <div>
            {props.children}
        </div>
    )
}
