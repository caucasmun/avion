import cn from './AboutEmail.module.css';

const AboutEmail = () => {
  const bgStyle = {
    backgroundImage: `url(${import.meta.env.BASE_URL}about-email/AboutBg.jpg)`
  };

  return (
    <section className={cn.aboutEmail} style={bgStyle}>
      <div className="container">
        <div className={cn.content}>
          <p className={cn.top}>Join the club and get the benefits</p>
          <p className={cn.text}>
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <div className={cn.benefits}>
            <ul className={cn.listAbout}>
                <li>Exclusive offers</li>
                <li>Free events</li>
                <li>Large discounts</li>
            </ul>
          </div>
          <div className={cn.form}>
            <input type="email" className={cn.input} placeholder="your@email.com" />
            <button className={cn.button}>Sign up</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutEmail;
