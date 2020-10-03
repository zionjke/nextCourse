import Link from "next/link";
import MainLayout from "../components/MainLayout";

const IndexPage = () => {
    return (
        <MainLayout title={'Home page'}>
            <h1>Hello NextJS</h1>
            <div>
                <Link href="/about">About</Link>
            </div>
            <div>
                <Link href="/posts">Posts</Link>
            </div>
        </MainLayout>
    )
};

export default IndexPage
