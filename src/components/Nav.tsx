import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <nav>
            <ul>
                <Link
                    href={"/"}
                >Videos</Link>
                <Link
                    href={"/"}
                >Recipe's</Link>
                <Link
                    href={"/"}
                >Say G'day</Link>
            </ul>
                
    </nav>
    )
}

export default Nav