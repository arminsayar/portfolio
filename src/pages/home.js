import * as React from 'react'
import { Link } from 'gatsby'

const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/about">About me</Link>
        </>
    )
}

const Head = () => {
    <title>Home</title>
}

export default HomePage