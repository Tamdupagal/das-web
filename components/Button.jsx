import Link from 'next/link';
import styles from './Button.module.scss';

function Button(props) {
    const {href, ...newProps} = props
    
    return (
        href ? <Link href={href}><a {...newProps} className={styles.button}>{props.children}</a></Link> :
            <button {...newProps} className={styles.button}>{props.children}</button>
    )
}

export default Button
