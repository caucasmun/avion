import cn from './Header.module.css'
const Header = () => {
    return (
        <header className={cn.header}>
            <div className={cn.row}>
                <img src="/header/Search.png" alt="" className={cn.left} />
                <a href=""><img src="/header/Avion.png" alt="" className={cn.logo} /></a>
                <div className={cn.right}>
                    <img src="/header/Cart.png" alt="" className={cn.cart} />
                    <img src="/header/User.png" alt="" className={cn.user} />
                </div>
            </div>
        </header>
    )
}

export default Header