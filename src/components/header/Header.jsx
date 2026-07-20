import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from './Header.module.css';
import { selectCartTotalCount } from '../../store/cartSlice';

const Header = () => {
    const cartCount = useSelector(selectCartTotalCount);

    return (
        <header className={cn.header}>
            <div className={cn.row}>
                <Link to="/all-products">
                    <img src={`${import.meta.env.BASE_URL}header/Search.png`} alt="Search products" className={cn.left} />
                </Link>
                <Link to="/">
                    <img src={`${import.meta.env.BASE_URL}header/Avion.png`} alt="" className={cn.logo} />
                </Link>
                <div className={cn.right}>
                    <Link to="/shopping" className={cn.cartLink}>
                        <img src={`${import.meta.env.BASE_URL}header/Cart.png`} alt="" className={cn.cart} />
                        {cartCount > 0 && (
                            <span className={cn.cartBadge}>{cartCount}</span>
                        )}
                    </Link>
                    <img src={`${import.meta.env.BASE_URL}header/User.png`} alt="" className={cn.user} />
                </div>
            </div>
        </header>
    );
};

export default Header;
