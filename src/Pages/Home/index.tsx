import * as React from 'react';
import styles from './home.module.css';
import { IoLogoGithub } from 'react-icons/io5';

const Home = () => {

    return (
        <div className={styles.homeContainer}>

            <div className={styles.descriptionContainer}>
                <h1 className={styles.heading}> CUNY Hunter College's CS Syllabi Directory </h1>

                <h3 className={styles.description}> All Syllabi for Computer Science courses at Hunter College. </h3>

                <p className={styles.details}> Most of the syllabi here are for undergraduate courses. Hopefully through crowdsourcing, we can get the syllabi for all undergraduate and graduate CS courses. </p>

                <div className={styles.buttons}>
                    <button className={styles.exploreButton}> Explore </button>
                    <button className={styles.githubButton}> <IoLogoGithub size={35} /> View on Github </button>
                </div>

            </div>
        </div>
    );
}

export default Home;