import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from './ProductCatalog.module.css';
import productsData from '../data/products.json';

const CATEGORIES = ['Furniture', 'Homeware', 'Sofas', 'Light fittings', 'Accessories'];

const ProductCatalog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const filteredProducts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return productsData.filter((product) => {
            const matchesSearch =
                !query ||
                product.title.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query);

            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.includes(product.category);

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategories]);

    return (
        <div className={cn.catalogContainer}>
            <aside className={cn.sidebar}>
                <div className={cn.filterGroup}>
                    <h3 className={cn.filterTitle}>Product type</h3>
                    {CATEGORIES.map((item) => (
                        <label key={item} className={cn.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={cn.checkbox}
                                checked={selectedCategories.includes(item)}
                                onChange={() => toggleCategory(item)}
                            />
                            <span className={cn.checkboxText}>{item}</span>
                        </label>
                    ))}
                </div>
            </aside>

            <main className={cn.mainContent}>
                <div className={cn.searchBar}>
                    <input
                        type="text"
                        className={cn.searchInput}
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {(searchQuery || selectedCategories.length > 0) && (
                        <button
                            type="button"
                            className={cn.clearBtn}
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategories([]);
                            }}
                        >
                            Clear filters
                        </button>
                    )}
                </div>

                {filteredProducts.length === 0 ? (
                    <p className={cn.noResults}>No products found. Try adjusting your search or filters.</p>
                ) : (
                    <div className={cn.productsGrid}>
                        {filteredProducts.map((product) => (
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
                )}
            </main>
        </div>
    );
};

export default ProductCatalog;
