import Link from 'next/link';
import React from "react";

function Header({data, loading}) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    {!loading &&
                    (data && data.viewer ? (
                        <>
                            <li>
                                <Link href="/blog">
                                    <a>Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/signout">
                                    <a>Sign out</a>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/signin">
                                    <a>Sign In</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/signup">
                                    <a>Sign up</a>
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>
            </nav>

            <style jsx>{`
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:nth-child(2) {
          margin-right: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
        </header>
    )
}

export default Header;
