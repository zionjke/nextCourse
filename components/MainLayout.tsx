import Link from "next/link";
import Head from "next/head";


type Props = {
    title: string
    children: any
}

const MainLayout = ({children,title = 'Next App'}:Props) => {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="next,javascript,react"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav style={{display:"flex",width:"200px",justifyContent:"space-between"}}>
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/about">About</Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
};

export default MainLayout
