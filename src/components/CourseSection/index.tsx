import * as React from 'react';
import { Class } from '../../data';
import ClassDropdown from '../ClassDropdown';
import styles from './courseSection.module.css';

interface CourseProps {
    classType: string,
    courseClasses?: Class[],
    index: number
}

// const colors = ['#DCAA33', '#AA33DC', '#33DCA3', '#313131']

const names: { [key: string]: string } = {
    'Math Classes': 'cs-math-collateral',
    'Major Classes': 'cs-major-core-courses',
    'Major Electives': 'cs-electives',
    'Non-Major Electives': 'cs-non-major-electives'
}

const CourseSection = ({ classType, courseClasses, index }: CourseProps) => {
    return (
        <div id={names[classType]} className={styles.courseContainer}>
            {/* <div id="svgg" style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', width: '100%', height: '40rem', position: 'absolute', zIndex: -1 }}>
                <svg className={styles.svg} width="800" height='800' viewBox='0 0 100 100' style={{ position: 'relative', top: '-18rem', left: index % 2 === 0 ? '-10%' : '10%' }}>
                    <circle cx="50" cy="50" r="40" fill={colors[index]} fillOpacity="0.5" ></circle>
                </svg>
            </div> */}
            <details className={styles.headerDetails}>
                <summary className={styles.headerName}> {classType} </summary>

                <div className={styles.classList}>
                    {courseClasses?.map((item) =>
                        <ClassDropdown key={index + Math.random()} classTitle={item.title} classDescription={item.description} />
                    )}
                </div>
            </details>
        </div>
    );
}

export default CourseSection;