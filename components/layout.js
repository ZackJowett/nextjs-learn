import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export const siteTitle = "Zack's NEXT";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Experimental application for learning nextjs"
				/>
				<meta name="og:title" content={siteTitle} />
			</Head>
			<header className={styles.header}>
				{home ? <h1>Home</h1> : null}
			</header>
			<main>{children}</main>

			{/* Return to home */}
			{!home ? (
				<Link href="/">
					<p>Back to home</p>
				</Link>
			) : null}
		</div>
	);
}
