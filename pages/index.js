import { withApollo } from '../apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import React from "react";

import Layout from "../components/layout";

const ViewerQuery = gql`
    query ViewerQuery {
        viewer {
            id
            email
        }
    }
`;

const Index = () => {
    const router = useRouter();
    const { data, loading } = useQuery(ViewerQuery);

    if (
        loading === false &&
        data.viewer === null &&
        typeof window !== 'undefined'
    ) {
        router.push('/signin');
    }

    return (
        <Layout data={data} loading={loading}>
            {data && data.viewer ? (
                <div>
                    <p>
                        You're signed in as {data.viewer.email}.
                    </p>
                    <p>
                        Go to your{' '}
                        <Link href="/blog">
                            <a>blog</a>
                        </Link>
                    </p>
                    <p>
                        Go to{' '}
                        <Link href="/about">
                            <a>static</a>
                        </Link>{' '}
                        page or{' '}
                        <Link href="/signout">
                            <a>signout</a>
                        </Link>
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </Layout>
    )
};

export default withApollo(Index)
