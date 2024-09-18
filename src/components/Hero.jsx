import { useHomepage } from '../contexts/NewsHomepageProvider'
import Button from './Button'
import styles from './Hero.module.css'

function Hero() {

    const {isMobile} = useHomepage()

    return (
        <div className={styles.hero}>
            <img src={isMobile ? "./images/image-web-3-mobile.jpg" : "./images/image-web-3-desktop.jpg"} alt="" />
            <div className={styles.heroContent}>
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
            <p>We dive into the next evolution of the web that claims to put the power to the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <Button>read more</Button>
            </div>
            </div>
        </div>
    )
}

export default Hero
