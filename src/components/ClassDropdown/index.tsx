import * as React from 'react';
import styles from './classDropdown.module.css';

interface ClassProps {
    classType?: string,
    classNum?: string | number,
    classTitle: string,
    classDescription: string,
    classSyllabi?: string[]
}

const ClassDropdown = ({ classTitle, classSyllabi, classDescription }: ClassProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.classTitle}> {classTitle} </h1>
                <h2 className={styles.classDescription}> {classDescription} </h2>
            </div>

            <div className={styles.syllabiList}>
                <ul>

                    <li> <a href="www.google.com"> Google </a> </li>
                </ul>
            </div>

            <h3 className={styles.syllabiAmount}> 2 Syllabi </h3>
        </div>
    );
}

export default ClassDropdown;