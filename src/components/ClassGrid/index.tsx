import * as React from 'react';
import { useSelector } from 'react-redux';
import { CoursesState } from '../../redux/slices';
import ClassGridItem from '../ClassGridItem';
import styles from './classGrid.module.css';

const ClassGrid = () => {


    const course = useSelector((state: CoursesState) => state.selected);


    return (
        <div className={styles.container}>

            <div className={styles.gridContainer}>
                {course.classes.map((item) =>
                    <ClassGridItem key={item.description} id={item.id} description={item.description} syllabi={item.syllabi} />
                )}
            </div>
        </div>
    );
}

export default ClassGrid;