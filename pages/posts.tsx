import MainLayout from "../components/MainLayout";
import Router from "next/router";
import {useEffect, useState} from "react";
import Link from "next/link";
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";

interface PostsPageProps {
    posts: MyPost[]
}

const Posts = ({posts: serverPosts}:PostsPageProps) => {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:3004/posts');
            const data = await response.json();
            setPosts(data)
        }

        if (!serverPosts) {
            load()
        }

    }, []);

    const linkClickHandler = () => {
        Router.push('/')
    };


    return (
        <MainLayout title={'Posts page'}>
            <h1>Posts Page</h1>
            <ul>
                {
                    posts
                        ? posts.map(post => (
                            <li key={post.id}>
                                <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                                    {post.title}
                                </Link>
                            </li>
                        ))
                        : <p>Loading...</p>
                }
            </ul>
            <button onClick={linkClickHandler}>Go back to Home</button>
        </MainLayout>

    )
};

Posts.getInitialProps = async ({req}:NextPageContext) => {
    if (!req) {
        return {
            posts: null
        }
    }
    const response = await fetch('http://localhost:3004/posts');
    const posts = await response.json();

    return {
        posts
    }
};

export default Posts
