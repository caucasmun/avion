import cn from './Sixth.module.css'

const Sixth = () => {
  return (
    <section className={cn.sixth}>
      <div className="container">
        <div className={cn.row}>
                <div className={cn.left}>
                    <p className={cn.top}>From a studio in London to a global brand with over 400 outlets</p>
                    <p className={cn.text}>
                            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                            <br /><br />
                            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                    </p>   
                <button className={cn.button}>Get in touch</button>
                </div>
                <img src="sixth/Image.png" alt="" className={cn.right} />
        </div>
      </div>
    </section>
  )
}

export default Sixth;
