import * as React from 'react';
import styles from './home.module.css';
import { IoLogoGithub } from 'react-icons/io5';

const Home = () => {

    const goToCourses = () => {
        document.querySelector("#coursesNew")?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className={styles.homeContainer}>

            <div className={styles.descriptionContainer}>
                <h1 className={styles.heading}> CUNY Hunter College's CS Syllabi Directory </h1>

                <h3 className={styles.description}> All Syllabi for Computer Science courses at Hunter College. </h3>

                <p className={styles.details}> Most of the syllabi here are for undergraduate courses. Hopefully through crowdsourcing, we can get the syllabi for all undergraduate and graduate CS courses. </p>

                <div className={styles.buttons}>
                    <button onClick={goToCourses} className={styles.exploreButton}> Explore </button>
                    <button onClick={() => window.open('https://github.com/dev-rb/HunterCS_CourseSyllabi')} className={styles.githubButton}> <IoLogoGithub size={35} /> View on Github </button>
                </div>

            </div>
            {/* 
            <div className={styles.contributeContainer}>
                <h1> Contributors </h1>

                <div className={styles.contributorsList}>

                </div>
            </div> */}
        </div>
    );
}

export default Home;