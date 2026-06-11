import cn from './Fourth.module.css'

const Fourth = () => {
    return (
        <section className={cn.fourth}>
            <div className="container">
                <p className={cn.top}>Our popular products</p>
                <div className={cn.row}>
                    <div className={cn.item1}>
                        <img src="/fourth/Item1.png" alt="" className={cn.image1} />
                        <p className={cn.title}>The Poplar suede sofa</p>
                        <p className={cn.price}>£980</p>
                    </div>
                    <div className={cn.item}>
                        <img src="/fourth/Item2.png" alt="" className={cn.image} />
                        <p className={cn.title}>The Dandy chair</p>
                        <p className={cn.price}>£250</p>
                    </div>
                    <div className={cn.item}>
                        <img src="/fourth/Item3.png" alt="" className={cn.image} />
                        <p className={cn.title}>The Dandy chair</p>
                        <p className={cn.price}>£250</p>
                    </div>
                </div>
                <button className={cn.button}>View collection</button>
            </div>
        </section>
    )
}
export default Fourth;