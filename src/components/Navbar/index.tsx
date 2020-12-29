import * as React from 'react';
import styles from './navbar.module.css';
import logo from '../../images/cscn-logo-final.svg';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('resize', () => { setOpen(false); })
    }, [])

    const themeToggle = () => {
        if (document.documentElement.attributes.getNamedItem('data-theme')?.value === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light')
        } else {
            document.documentElement.setAttribute('data-theme', 'dark')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>

            <div className={styles.menuButton} onClick={() => setOpen(true)}>
                <MdMenu size={'2.5rem'} />
            </div>
            {open ? <div className={styles.menuOverlay} onClick={() => setOpen(false)} /> : null}
            <div className={`${styles.linksContainer}${open ? ' + ' + styles.active : ''}`}>
                <a> Home </a>
                <a> About </a>
                <a> Explore </a>
                <a> Contribute </a>
                <div className={styles.switchContainer}>
                    <input id="themeSwitch" type="checkbox" />
                    <label htmlFor="themeSwitch" className={styles.round} onClick={themeToggle} />
                </div>
            </div>


        </div>
    );
}

export default Navbar;