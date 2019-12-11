import React from 'react'
import Index from "./index"

export default function _layout(props) {
    return (
        <div>
            <Index />
            {props.children}
        </div>
    )
}
