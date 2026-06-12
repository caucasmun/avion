import cn from './Header.module.css'
const Header = () => {
    return (
        <header className={cn.header}>
            <div className={cn.row}>
                <img src={`${import.meta.env.BASE_URL}header/Search.png`} alt="" className={cn.left} />
                <a href=""><img src={`${import.meta.env.BASE_URL}header/Avion.png`} alt="" className={cn.logo} /></a>
                <div className={cn.right}>
                    <img src={`${import.meta.env.BASE_URL}header/Cart.png`} alt="" className={cn.cart} />
                    <img src={`${import.meta.env.BASE_URL}header/User.png`} alt="" className={cn.user} />
                </div>
            </div>
        </header>
    )
}

export default Header