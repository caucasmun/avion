import cn from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'All Products', href: '/all-products' },
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
