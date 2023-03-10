

import React from 'react'
import Link from 'next/link'

export default function GoHome(props) {
    return (
        <div className="pb-5">
            <Link href="/">{props.name}</Link>
        </div>
    );
}

