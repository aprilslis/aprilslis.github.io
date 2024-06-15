import styles from "./header.module.scss";

export default function Header() {
    return (
        <div className={styles["body"]}>
            <div className={styles.top} />
            <div className={styles.nav}>
                <div className={styles["nav-font"]}>
                    <a className={styles.link} href="/">
                        <div className={styles["nav-font-inner"]}>HOME</div>
                    </a>
                </div>
                <div className={styles["nav-font"]}>
                    <a className={styles.link} href="/work">
                        <div className={styles["nav-font-inner"]}>Work</div>
                    </a>
                </div>
                {false && (
                    <div className={styles["nav-font"]}>
                        <a className={styles.link} href="/projects">
                            <div className={styles["nav-font-inner"]}>
                                Projects
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
