import React from 'react';
import cn from './ProductCatalog.module.css';

const ProductCatalog = () => {
    const filters = {
        categories: ['Furniture', 'Homeware', 'Sofas', 'Light fittings', 'Accessories'],
        prices: ['0 - 100', '101 - 250', '250 +'],
        designers: ['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke']
    };

    const products = [
    { id: 1, title: 'The Dandy chair', price: '£250', img: 'product-catalog/Parent.png' },
    { id: 2, title: 'Rustic Vase Set', price: '£155', img: 'product-catalog/Parent (1).png' },
    { id: 3, title: 'The Silky Stool', price: '£125', img: 'product-catalog/Parent (2).png' },
    { id: 4, title: 'The Lucy Vase', price: '£95', img: 'product-catalog/Parent (3).png' },
    { id: 5, title: 'The Hanging Pendant', price: '£175', img: 'product-catalog/Parent (4).png' },
    { id: 6, title: 'The Vintage Chair', price: '£210', img: 'product-catalog/Parent (5).png' },
    { id: 7, title: 'Triple Brass Lamp', price: '£320', img: 'product-catalog/Parent (6).png' },
    { id: 8, title: 'Minimalist Ceramic Vase', price: '£85', img: 'product-catalog/Parent (7).png' },
    { id: 9, title: 'Modern Yellow Chairs', price: '£399', img: 'product-catalog/Parent (8).png' }
    ];



    return (
        <div className={cn.catalogContainer}>
            <aside className={cn.sidebar}>
                <div className={cn.filterGroup}>
                    <h3 className={cn.filterTitle}>Product type</h3>
                    {filters.categories.map((item, index) => (
                        <label key={index} className={cn.checkboxLabel}>
                            <input type="checkbox" className={cn.checkbox} />
                            <span className={cn.checkboxText}>{item}</span>
                        </label>
                    ))}
                </div>

                <div className={cn.filterGroup}>
                    <h3 className={cn.filterTitle}>Price</h3>
                    {filters.prices.map((item, index) => (
                        <label key={index} className={cn.checkboxLabel}>
                            <input type="checkbox" className={cn.checkbox} />
                            <span className={cn.checkboxText}>{item}</span>
                        </label>
                    ))}
                </div>

                <div className={cn.filterGroup}>
                    <h3 className={cn.filterTitle}>Designer</h3>
                    {filters.designers.map((item, index) => (
                        <label key={index} className={cn.checkboxLabel}>
                            <input type="checkbox" className={cn.checkbox} />
                            <span className={cn.checkboxText}>{item}</span>
                        </label>
                    ))}
                </div>
            </aside>

            <main className={cn.mainContent}>
                <div className={cn.productsGrid}>
                    {products.map((product) => (
                        <div key={product.id} className={cn.productCard}>
                            <div className={cn.imageWrapper}>
                                <img src={product.img} alt={product.title} className={cn.productImg} />
                            </div>
                            <h4 className={cn.productTitle}>{product.title}</h4>
                            <p className={cn.productPrice}>{product.price}</p>
                        </div>
                    ))}
                </div>

                <div className={cn.buttonWrapper}>
                    <button className={cn.loadMoreBtn}>Load more</button>
                </div>
            </main>
        </div>
    );
};

export default ProductCatalog;
