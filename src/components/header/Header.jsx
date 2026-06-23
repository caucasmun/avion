import { Link } from 'react-router-dom';
import cn from './Header.module.css';

const Header = () => {
    return (
        <header className={cn.header}>
            <div className={cn.row}>
                <img src={`${import.meta.env.BASE_URL}header/Search.png`} alt="" className={cn.left} />
                <Link to="/">
                    <img src={`${import.meta.env.BASE_URL}header/Avion.png`} alt="" className={cn.logo} />
                </Link>
                <div className={cn.right}>
                    <Link to="/shopping">
                        <img src={`${import.meta.env.BASE_URL}header/Cart.png`} alt="" className={cn.cart} />
                    </Link>
                    <img src={`${import.meta.env.BASE_URL}header/User.png`} alt="" className={cn.user} />
                </div>
            </div>
        </header>
    );
};

export default Header;
