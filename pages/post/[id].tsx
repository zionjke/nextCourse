import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import {useEffect, useState} from "react";
// @ts-ignore
import {MyPost} from "../../interfaces/post";
import {NextPageContext} from "next";

interface PostPageProps {
    post: MyPost
}

const Post = ({post: serverPost}:PostPageProps) => {

    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:3004/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data)
        }

        if (!serverPost) load()
    }, []);


    return (
        <MainLayout title={'Post'}>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            <Link href={'/posts'}>Back to all posts</Link>
        </MainLayout>
    )
};

interface PostNextPageContent extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({query}: PostNextPageContent) => {

    const response = await fetch(`http://localhost:3004/posts/${query.id}`);
    const post: MyPost = await response.json();

    return {
        post
    }
};
// export async function getServerSideProps({query,req}) {
//     const response = await fetch(`http://localhost:3004/posts/${query.id}`);
//     const post = await response.json();
//
//     return  {
//         props: post
//     }
// }
//
export default Post
