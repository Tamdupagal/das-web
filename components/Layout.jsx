import styles from './Layout.module.scss'

import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
    return (
        <>
            <Header/>
            <main className={styles.container}>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout
