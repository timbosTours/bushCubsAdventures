import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <nav>
            <ul>
                <Link
                    href={"/Recipes"}
                >Recipe's</Link>
                <Link
                    href={"/Contact"}
                >Say G'day</Link>
            </ul>
                
    </nav>
    )
}

export default Nav