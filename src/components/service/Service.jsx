import cn from "./Service.module.css"

const Service = () => {
    return (
        <>
            <section className={cn.service}>
                    <div className="container">
                        <div className={cn.row}>
                            <img src={`${import.meta.env.BASE_URL}service/Image.png`} alt="" className={cn.left} />
                            <div className={cn.left}>
                                <div className={cn.texts}>
                                    <p className={cn.title}>Our service isn’t just personal, it’s actually
                                                hyper personally exquisite
                                    </p>
                                    <p className={cn.description}>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
                                        <br></br><br></br>
                                        Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                                    </p>
                                </div>
                                <button className={cn.button}>Get in touch</button>
                            </div>
                        </div>
                </div>    
            </section>

        </>
    )
}

export default Service;