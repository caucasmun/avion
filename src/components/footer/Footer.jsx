import cn from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={cn.footer}>
            <div className={cn.rowInfo}>
                <div className={cn.columns}>
                    <div className={cn.column}>
                        <p className={cn.title}>Menu</p>
                        <a href="" className={cn.link}>New arrivals</a>
                        <a href="" className={cn.link}>Best sellers</a>
                        <a href="" className={cn.link}>Recently viewed</a>
                        <a href="" className={cn.link}>Popular this week</a>
                        <a href="" className={cn.link}>All products</a>
                    </div>
                    <div className={cn.column}>
                        <p className={cn.title}>Categories</p>
                        <a href="" className={cn.link}>Crockery</a>
                        <a href="" className={cn.link}>Furniture</a>
                        <a href="" className={cn.link}>Homeware</a>
                        <a href="" className={cn.link}>Plant pots</a>
                        <a href="" className={cn.link}>Chairs</a>
                        <a href="" className={cn.link}>Crockery</a>
                    </div>
                    <div className={cn.column}>
                        <p className={cn.title}>Our company</p>
                        <a href="" className={cn.link}>About us</a>
                        <a href="" className={cn.link}>Vacancies</a>
                        <a href="" className={cn.link}>Contact us</a>
                        <a href="" className={cn.link}>Privacy</a>
                        <a href="" className={cn.link}>Returns policy</a>
                    </div>
                </div>

                <div className={cn.newsletter}>
                    <p className={cn.title}>Join our mailing list</p>
                    <form className={cn.form}>
                        <input type="email" placeholder="your@email.com" className={cn.input} />
                        <button className={cn.button}>Sign up</button>
                    </form>
                </div>
            </div>

            <hr className={cn.divider} />

            <div className={cn.rowBottom}>
                <p className={cn.copyright}>Copyright 2022 Avion LTD</p>
                <div className={cn.socials}>
                    <a href="" className={cn.socialLink}><img src={`${import.meta.env.BASE_URL}footer/Linkedin.png`} alt="" className={cn.icon} /></a>
                    <a href="" className={cn.socialLink}><img src={`${import.meta.env.BASE_URL}footer/Facebook.png`} alt="" className={cn.icon} /></a>
                    <a href="" className={cn.socialLink}><img src={`${import.meta.env.BASE_URL}footer/Instagram.png`} alt="" className={cn.icon} /></a>
                    <a href="" className={cn.socialLink}><img src={`${import.meta.env.BASE_URL}footer/Skype.png`}alt="" className={cn.icon} /></a>
                    <a href="" className={cn.socialLink}><img src={`${import.meta.env.BASE_URL}footer/Twitter.png`} alt="" className={cn.icon} /></a>
                    <a href="" className={cn.socialLink}><img src={`${import.meta.env.BASE_URL}footer/Pinterest.png`} alt="" className={cn.icon} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
