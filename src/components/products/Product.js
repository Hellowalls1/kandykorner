import React from "react"

export default ({product, productType}) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__address">{productType.name}</div>
    </section>
)