import React from 'react'
import Top from "../pages/top"
import Footer from "../pages/footer"
import Link from "umi/link"
import NavLink from "umi/navlink"

export default function index(props) {
    return (
        <div>
            <>
                {/* <Link to="/sub/pageA">跳转到A页面</Link>
                <Link to="/sub/pageB">跳转到B页面</Link> */}
                <NavLink to="/sub/pageA">跳转到A页面</NavLink>
                <NavLink to="/sub/pageB">跳转到B页面</NavLink>
            </>
            <>{props.children}</>
            <Footer />

        </div>
    )
}
