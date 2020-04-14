import Link from 'next/link'
import React from "react";

export default () => (
    <div>
        This is a static page goto{' '}
        <Link href="/">
            <a>dynamic</a>
        </Link>{' '}
        page.
    </div>
)
