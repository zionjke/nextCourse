import Link from "next/link";
import MainLayout from "../components/MainLayout";
import styles from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <MainLayout title={'Error 404'}>
            <h1 className={styles.error}>Error 404</h1>
            <p>Please <Link href="/">go back</Link> to safety</p>
        </MainLayout>
    )
}
