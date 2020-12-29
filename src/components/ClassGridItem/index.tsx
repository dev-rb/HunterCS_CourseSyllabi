import * as React from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Class } from '../../redux/slices';
import styles from './classGridItem.module.css';

const ClassGridItem = ({ id, description, syllabi }: Class) => {

    const ref = React.useRef<HTMLDivElement>(null)

    const outsideClicked = useOutsideClick(ref);

    const [expand, setExpand] = React.useState(false);

    React.useEffect(() => {
        if (expand && outsideClicked) {
            setExpand(false);
        }
    }, [outsideClicked])

    const getPdf = (idx: number) => {
        fetch(`http://localhost:3001/classes/${id.replace(' ', '_')}/${idx}`).then((res) =>
            res.blob()
        ).then((res: any) => {
            var blob = new Blob([res], { type: 'application/pdf' })
            var url = URL.createObjectURL(blob);
            window.open(url);
        });
    }

    return (
        <div ref={ref} className={`${styles.container} ${expand && !outsideClicked ? styles.expand : ''}`} style={{ left: expand && !outsideClicked ? ref.current?.offsetLeft : 0, top: expand && !outsideClicked ? ref.current?.offsetTop : 0 }} onClick={() => setExpand(true)}>

            <div className={styles.infoContainer}>
                <h1>{id}</h1>
                <p>{description}</p>
            </div>

            {expand && <div className={styles.syllabiList}>
                {syllabi.map((item, index) =>
                    <a onClick={() => getPdf(index)} key={item + Math.random()}> {item} </a>
                )}
            </div>}
        </div>
    );
}

export default ClassGridItem;