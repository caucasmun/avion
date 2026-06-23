import cn from './Nav.module.css';
import { Link } from 'react-router-dom'; 

const Nav = () => {
  const navItems = [
    { title: 'Home', href: '/avion' },
    { title: 'Product List', href: '/avion/product-list' },
    { title: 'About', href: '/avion/about' },
    { title: 'Shopping', href: '/avion/shopping' },
    { title: 'All Products', href: '/avion/all-products' },
  ];

  return (
    <nav className={cn.nav}>
      <ul className={cn.list}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link to={item.href} className={cn.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
