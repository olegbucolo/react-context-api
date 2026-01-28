import { useState, useEffect } from 'react';
import axios from 'axios';

const productsAPI = 'https://fakestoreapi.com/products';

export function ProductsPage() {
    const [productData, setProductData] = useState([])
    useEffect(() => {
        axios.get(productsAPI)
            .then((res) => {
                setProductData(res.data);
                console.log(productData)

            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <>
            <div className="container">
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">

                    {productData.map(product => {
                        return (
                            <div key={product.id}
                                className="card col"
                            >
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">${product.price}</p>
                                    <a href="#" className="btn btn-primary">Buy Now</a>
                                </div>
                            </div>

                        )
                    })

                    }
                </div>
            </div>

        </>
    )
}