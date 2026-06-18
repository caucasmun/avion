import cn from './Third.module.css'

const Third = (props) => {
    return (
        <section className={cn.third}>
            <div className="container">
                <p className={cn.top}>{props.title}</p>
                <div className={cn.row}>
                    <div className={cn.item}>
                        <img src={`${import.meta.env.BASE_URL}third/Item1.png`} alt="" className={cn.image} />  
                        <p className={cn.title}>The Dandy chair</p>
                        <p className={cn.price}>£250</p>
                    </div>
                    <div className={cn.item}>
                        <img src={`${import.meta.env.BASE_URL}third/Item2.png`} alt="" className={cn.image} />
                        <p className={cn.title}>Rustic Vase Set</p>
                        <p className={cn.price}>£155</p>
                    </div>
                    <div className={cn.item}>
                        <img src={`${import.meta.env.BASE_URL}third/Item3.png`} alt="" className={cn.image} />
                        <p className={cn.title}>The Silky Vase</p>
                        <p className={cn.price}>£125</p>
                    </div>
                    <div className={cn.item}>   
                        <img src={`${import.meta.env.BASE_URL}third/Item4.png`}alt="" className={cn.image} />
                        <p className={cn.title}>The Lucy Lamp</p>
                        <p className={cn.price}>£399</p>
                    </div>
                </div>
                <button className={cn.button}>View collection</button>
            </div>
        </section>
    )
}
export default Third;