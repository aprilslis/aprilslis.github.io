import Header from "@/components/header";
import styles from "./page.module.scss";
import chat from "@/../public/chat.png";
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
                <div className={styles.experienceBox}>
                    <Job
                        logo={chat}
                        company="Google"
                        position="Software Engineer Intern"
                        description="Developing machine learning features for Google Chat."
                        timeline="Jul 2024 - Sep 2024"
                        divider
                    />
                    <Job
                        logo={chrome}
                        company="Google"
                        position="Software Engineer Intern"
                        description="Researched efficiency improvements for Chrome's 2D Graphic Library SKIA."
                        timeline="May 2023 - Aug 2023"
                        divider
                    />
                    <Job
                        logo={cruise}
                        company="Cruise Automation"
                        position="Software Engineer Intern"
                        description="Member of the Remote Assitance Team, assisting vehicles that get stuck."
                        timeline="Jan 2023 - Apr 2023"
                        divider
                    />
                    <Job
                        logo={dino}
                        company="Google"
                        position="STEP Intern"
                        description="Built metrics to analyze website performance on Chrome."
                        timeline="May 2022 - Aug 2022"
                        divider
                    />
                    <Job
                        logo={cae}
                        company="CAE Aviation"
                        position="Cybersecurity Development Intern"
                        description="Created internal tooling for pre-release security checks."
                        timeline="Sep 2021 - Dec 2021"
                        divider
                    />
                </div>
            </div>
        </div>
    );
}

interface JobProps {
    logo: any;
    company: string;
    position: string;
    description: string; // could make this an array so that it make bullet pts
    timeline: string;
    divider?: boolean;
}

function Job({
    logo,
    company,
    position,
    description,
    timeline,
    divider = false,
}: JobProps) {
    return (
        <div className={styles.job}>
            {divider && <div className={styles.line} />}
            <div className={styles.title}>
                <img className={styles.logo} src={logo.src} />
                <div>
                    <label className={styles.jobInfo}>
                        <div className={styles.position}>
                            <b>{company}</b>
                            <b>{position}</b>
                        </div>
                        <div className={styles.date}>{timeline}</div>
                        <div className={styles.description}>{description}</div>
                    </label>
                </div>
            </div>

        </div>
    );
}
