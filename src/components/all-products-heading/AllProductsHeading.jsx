import cn from './AllProductsHeading.module.css';

const AllProductsHeading = () => {
    return (
        <section className={cn.banner}>
            <div className={cn.container}>
                <h1 className={cn.title}>All products</h1>
            </div>
        </section>
    );
};

export default AllProductsHeading;
