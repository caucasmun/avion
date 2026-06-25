import cn from './AllProductsHeading.module.css';

const AllProductsHeading = () => {
    const bannerStyle = {
        backgroundImage: `url('${import.meta.env.BASE_URL}all-products-heading/banner.jpg')`
    };

    return (
        <section className={cn.banner} style={bannerStyle}>
            <div className={cn.container}>
                <h1 className={cn.title}>All products</h1>
            </div>
        </section>
    );
};

export default AllProductsHeading;
