import Header from "@/components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.scss";
import circleRim from "../../public/circleRim2.png";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.home}>
                <div className={styles.nameContainer}>
                    <img src={circleRim.src} className={styles.circle} />
                    <div className={styles.centerContent}>
                        <div className={styles.top}>
                            <label className={styles.name}>APRIL LI</label>
                            <div className={styles.line} />
                        </div>
                        <label className={styles.subtext}>
                            Welcome to my website!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
