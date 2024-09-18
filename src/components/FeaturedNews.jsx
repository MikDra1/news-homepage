import FeaturedNew from './FeaturedNew'
import styles from './FeaturedNews.module.css'

function FeaturedNews() {
    return (
        <div className={styles.featuredNews}>
            <FeaturedNew number='1' image='./images/image-retro-pcs.jpg' title='Reviving Retro PCs' >What happens when old PCs are given modern upgrades?</FeaturedNew>
            <FeaturedNew number='2' image='./images/image-top-laptops.jpg' title='Top 10 Laptops of 2022' >Our best picks for various needs and budgets</FeaturedNew>
            <FeaturedNew number='3' image='./images/image-gaming-growth.jpg' title='The Growth of Gaming' >How the pandemic has sparked fresh opportunities.</FeaturedNew>
        </div>
    )
}

export default FeaturedNews
