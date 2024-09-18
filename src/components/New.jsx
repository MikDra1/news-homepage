/* eslint-disable react/prop-types */
import styles from './New.module.css'

function New({title, children}) {
    return (
        <div className={styles.new}>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}

export default New
