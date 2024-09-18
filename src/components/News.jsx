import New from './New'
import styles from './News.module.css'

function News() {
    return (
        <div className={styles.news}>
            <h2>New</h2>
            <New title='Hydrogen VS Electric Cars' >Will hydrogen-fueled cars ever catch up to EVs?</New>
            <New title='The Downsides of AI Artistry' >What are the possible adverse effects of on-demand AI image generation?</New>
            <New title='Is VC Funding Drying Up?' >Private funding by VC firms is down 50% YOY. We take a look at what that means.</New>
        </div>
    )
}

export default News
