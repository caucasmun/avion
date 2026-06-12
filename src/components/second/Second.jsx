import cn from './Second.module.css'

const Second = () => {
    return (
        <section className={cn.second}>
            <div className="container">
                <p className={cn.top}>What makes our brand different</p>
                <div className={cn.row}>
                    <div className={cn.item}>
                        <img src={`${import.meta.env.BASE_URL}second/Delivery.png`} alt="" className={cn.logo} />
                        <p className={cn.title}>Next day as standard</p>
                        <p className={cn.text}>Order before 3pm and get your order
                        the next day as standard</p>
                    </div>
                    <div className={cn.item}>
                        <img src={`${import.meta.env.BASE_URL}second/Checkmark.png`} alt="" className={cn.logo} />
                        <p className={cn.title}>Made by true artisans</p>
                        <p className={cn.text}>Handmade crafted goods made with
                        real passion and craftmanship</p>
                    </div>
                    <div className={cn.item}>
                        <img src={`${import.meta.env.BASE_URL}second/Purchase.png`} alt="" className={cn.logo} />
                        <p className={cn.title}>Unbeatable prices</p>
                        <p className={cn.text}>For our materials and quality you won’t find better prices anywhere</p>
                    </div>
                    <div className={cn.item}>
                        <img src={`${import.meta.env.BASE_URL}second/Sprout.png`} alt="" className={cn.logo} />
                        <p className={cn.title}>Recycled packaging</p>
                        <p className={cn.text}>We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Second;