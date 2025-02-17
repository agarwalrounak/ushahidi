import Head from 'next/head';
import Header from './header';
import React from "react";

function Layout({data, loading = false, children}) {
    return (
        <div>
            <Head>
                <title>Ushahidi</title>
            </Head>

            <Header data={data} loading={loading}/>

            <main>
                <div className="container">{children}</div>
            </main>

            <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
            <style jsx global>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
        </div>
    )
}

export default Layout;
