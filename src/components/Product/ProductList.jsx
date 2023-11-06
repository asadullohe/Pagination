import React from 'react'

const ProductList = ({ products }) => {
    return (
        <div className='grid gap-4 md:grid-cols-3 pb-[100px]'>
            {!!products && products.products.map((product) => (
                <div key={product.id} className="card w-full shadow-xl">
                    <div className="card-body">
                        <p>#post{product.id}</p>
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.body}</p>
                    </div>
                </div>
            ))}
        </div>
    ) 
}

export default ProductList