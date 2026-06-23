import React from 'react';
import { Link } from 'react-router-dom';
import cn from './ProductCatalog.module.css';
import productsData from '../data/products.json';

const ProductCatalog = () => {
    const filters = {
        categories: ['Furniture', 'Homeware', 'Sofas', 'Light fittings', 'Accessories'],
        prices: ['0 - 100', '101 - 250', '250 +'],
        designers: ['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke']
    };

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
                    {productsData.map((product) => (
                        <Link 
                            key={product.id} 
                            to={`/product/${product.id}`} 
                            className={cn.productCardLink}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className={cn.productCard}>
                                <div className={cn.imageWrapper}>
                                    <img 
                                        src={`${import.meta.env.BASE_URL}${product.image}`} 
                                        alt={product.title} 
                                        className={cn.productImg} 
                                    />
                                </div>
                                <h4 className={cn.productTitle}>{product.title}</h4>
                                <p className={cn.productPrice}>{product.currency}{product.price}</p>
                            </div>
                        </Link>
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
