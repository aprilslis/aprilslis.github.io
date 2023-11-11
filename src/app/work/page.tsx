import Header from "@/components/header";
import styles from "./page.module.scss";
import chrome from "@/../public/chrome.png";
import cruise from "@/../public/cruise.png";
import cae from "@/../public/cae.jpeg";
import dino from "@/../public/dino.png";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.body}>
                <div className={styles.experience}>Work Experience</div>
                <Job
                    logo={chrome}
                    company="Google"
                    position="Software Engineer Intern"
                    description="Researched efficiency improvements for Chrome's 2D Graphic Library SKIA."
                    divider
                />
                <Job
                    logo={cruise}
                    company="Cruise Automation"
                    position="Software Engineer Intern"
                    description="Member of the Remote Assitance Team, assisting vehicles that get stuck."
                    divider
                />
                <Job
                    logo={dino}
                    company="Google"
                    position="STEP Intern"
                    description="Built metrics to analyze website performance on Chrome."
                    divider
                />
                <Job
                    logo={cae}
                    company="CAE Aviation"
                    position="Cybersecurity Development Intern"
                    description="Created internal tooling for pre-release security checks."
                    divider
                />
            </div>
        </div>
    );
}

interface JobProps {
    logo: any;
    company: string;
    position: string;
    description: string; // could make this an array so that it make bullet pts
    divider?: boolean;
}

function Job({
    logo,
    company,
    position,
    description,
    divider = false,
}: JobProps) {
    return (
        <div className={styles.job}>
            {divider && <div className={styles.line} />}
            <div className={styles.title}>
                <img className={styles.logo} src={logo.src} />
                <div>
                    <label>
                        <b>{company}</b>
                        <div className={styles.position}>
                            <b>{position}</b>
                        </div>
                    </label>
                </div>
            </div>

            <div className={styles.description}>{description}</div>
        </div>
    );
}
