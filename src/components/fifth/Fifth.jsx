import cn from './Fifth.module.css'

const Fifth = () => {
  return (
    <section className={cn.fifth}>
      <div className="container">
        <div className={cn.content}>
          <p className={cn.top}>Join the club and get the benefits</p>
          <p className={cn.text}>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          
          <div className={cn.form}>
            <input type="email" name="" id="" className={cn.input} placeholder="your@email.com" />
            <button className={cn.button}>Sign up</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Fifth;
