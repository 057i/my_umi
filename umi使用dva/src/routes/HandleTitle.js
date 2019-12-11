import React from 'react'

export default function HandleTitle1(props) {

    document.title = props.route.title
    return (
        <div>
            {props.children}
        </div>
    )
}
