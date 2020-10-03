import Router from 'next/router'
import MainLayout from "../../components/MainLayout";
import {AboutI} from "../../interfaces/about";

interface AboutPageProps {
    data: AboutI
}

const About = ({data}:AboutPageProps) => {

    const linkClickHandler = () => {
        Router.push('/')
    };

    const linkClickToPostsHandler = () => {
        Router.push('/posts')
    };

    return (
        <MainLayout title={'About page'}>
            <h1>{data.title}</h1>
            <button onClick={linkClickHandler}>Go back to Home</button>
            <button style={{display:"block",marginTop:"15px"}} onClick={linkClickToPostsHandler}>Go to Posts</button>
        </MainLayout>
    )
};

About.getInitialProps = async () => {
    const response = await fetch('http://localhost:3004/about');
    const data = await response.json();

    return {
        data
    }
};

export default About
