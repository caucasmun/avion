import cn from './First.module.css'

const First = () => {
    return (
        <section className={cn.first}>
            <div className="container">
                <div className={cn.row}>
                    <div className={cn.left}>
                        <p className={cn.top}>
                            The furniture brand for the future, with timeless designs
                        </p>
                        <button className={cn.button}>View collection</button>
                        <p className={cn.bot}>
                            A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally 
                                    using modern web technologies.
                        </p>
                    </div>
                    <img src="/first/stul.png" alt="" className={cn.right} />
                </div>
            </div>
        </section>
    )
}

export default First;