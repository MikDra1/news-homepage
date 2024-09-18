/* eslint-disable react/prop-types */
import styles from './FeaturedNew.module.css'

function FeaturedNew({image, number, title, children}) {
    console.log(image)
    return (
        <div className={styles.featuredNew}>
            <img src={image} alt="" />
            <div>
                <h2>0{number}</h2>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </div>
    )
}

export default FeaturedNew
