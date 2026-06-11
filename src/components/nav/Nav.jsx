import cn from './Nav.module.css'

const Nav = () => {
    const navItems = [
        {
            title: 'Plant pots',
            href: ''
        },
        {
            title: 'Ceramics',
            href: ''
        },
        {
            title: 'Tables',
            href: ''
        },
        {
            title: 'Chairs',
            href: ''
        },
        {
            title: 'Crockery',
            href: ''
        },
        {
            title: 'Tableware',
            href: ''
        },
        {
            title: 'Cutlery',
            href: ''
        },
    ]
    return(
        <nav className={cn.nav}>
            <ul className={cn.list}>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a href={item.href} className={cn.link}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;