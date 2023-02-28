import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.png'
import { useSelector } from 'react-redux';

export function Header() {
    const count = useSelector((state) => state.counter.value)

    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo" />
            <span style={{ position: 'absolute', right: 0, marginRight: 20 }}>Letras digitadas: {count}</span>
        </header>
    );
}