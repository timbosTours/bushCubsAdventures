import Link from 'next/link'
import React from 'react'
import { Amatic_SC } from 'next/font/google'


const amatic = Amatic_SC({
    weight: ['700', '400'],
    subsets: ['latin']
})

function Nav() {
    return (
        <nav>
                <a href="/"><h1 className={amatic.className}>BushCub's Adventure's</h1></a>
            <ul>
                <Link
                    href={"/BushTuckerRecipes"}
                >Bush Tucker Recipe's</Link>
                <Link
                    href={"/Contact"}
                >Say G'day</Link>
            </ul>
                
    </nav>
    )
}

export default Nav