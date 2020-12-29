import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CoursesState, selectCourse } from '../../redux/slices';
import styles from './courseNavigation.module.css';

const names: { [key: string]: string } = {
    'Math Classes': 'cs-math-collateral',
    'Major Classes': 'cs-major-core-courses',
    'Major Electives': 'cs-electives',
    'Non-Major Electives': 'cs-non-major-electives'
}

const CourseNavigation = () => {

    const dispatch = useDispatch();

    const [selected, setSelected] = React.useState(0);

    const handleCourseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(selectCourse(names[event.currentTarget.innerHTML.trim()]));
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchBarContainer}>

            </div>

            <div className={styles.navigationContainer}>
                <button className={`${selected === 0 ? styles.active : ''}`} onClick={(e) => { handleCourseClick(e); setSelected(0); }}> Major Classes </button>
                <button className={`${selected === 1 ? styles.active : ''}`} onClick={(e) => { handleCourseClick(e); setSelected(1); }}> Math Classes </button>
                <button className={`${selected === 2 ? styles.active : ''}`} onClick={(e) => { handleCourseClick(e); setSelected(2); }}> Major Electives </button>
                <button className={`${selected === 3 ? styles.active : ''}`} onClick={(e) => { handleCourseClick(e); setSelected(3); }}> Non-Major Electives </button>
            </div>
        </div>
    );
}

export default CourseNavigation;