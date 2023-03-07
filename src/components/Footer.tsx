import React from 'react'
import Link from 'next/link'
import { TfiYoutube } from 'react-icons/tfi'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'


function Footer() {
    return (
        <footer>
            <Link
                href="/"
            >
                <TfiYoutube />
            </Link>
            <AiFillInstagram/>
            <FaTiktok/>
    </footer>
    )
}

export default Footer