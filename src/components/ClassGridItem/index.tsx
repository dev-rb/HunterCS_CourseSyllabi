import * as React from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Class } from '../../redux/slices';
import styles from './classGridItem.module.css';

interface Props {
    index: number;
}

type AllProps = Class & Props;

const ClassGridItem = ({ id, description, syllabi, index }: AllProps) => {

    const ref = React.useRef<HTMLDivElement>(null)

    const outsideClicked = useOutsideClick(ref);

    const [expand, setExpand] = React.useState(false);

    const [error, setError] = React.useState('');

    React.useEffect(() => {
        if (expand && outsideClicked) {
            setExpand(false);
        }
    }, [outsideClicked])

    const getPdf = (idx: number) => {
        fetch(`https://hunter-cs-syllabi-a.herokuapp.com/classes/${id.replace(' ', '_')}/${idx}`).then((res) =>
            res.blob()
        ).then((res: any) => {
            var blob = new Blob([res], { type: 'application/pdf' })
            var url = URL.createObjectURL(blob);
            window.open(url);
        }).catch((err: Error) => {
            setError(err.message);
        });
    }

    return (
        <div ref={ref} className={`${styles.container} ${expand && !outsideClicked ? styles.expand : ''}`} style={{ left: expand && !outsideClicked ? ref.current?.offsetLeft! - ref.current?.scrollLeft! : 0, top: expand && !outsideClicked ? ref.current?.offsetTop! - ref.current?.parentElement?.scrollTop! : 0, ['--delay' as any]: index }} onClick={() => setExpand(true)}>

            <div className={styles.infoContainer}>
                <h1>{id}</h1>
                <p>{description}</p>
            </div>

            {error && <div> {error} </div>}

            {expand && !error && <div className={styles.syllabiList}>
                {syllabi.map((item, index) =>
                    <a onClick={() => getPdf(index)} key={item + Math.random()}> {item} </a>
                )}
            </div>}
        </div>
    );
}

export default ClassGridItem;