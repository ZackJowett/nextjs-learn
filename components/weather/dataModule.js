import styles from "./dataModule.module.scss";

export default function DataModule({ title, desc, metric }) {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{desc}</p>
			</div>
			<div className={styles.content}>
				<p className={styles.data}>{metric}</p>
			</div>
		</div>
	);
}
