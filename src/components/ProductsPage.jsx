import { useState, useEffect } from 'react';
import axios from 'axios';
import { useBudget } from './BudgetProvider'

const productsAPI = 'https://fakestoreapi.com/products';

export function ProductsPage() {

    const { productsBelowBudget, budgetMode, budget } = useBudget();
    const [productData, setProductData] = useState([])

    useEffect(() => {
        axios.get(productsAPI)
            .then((res) => {
                setProductData(res.data);
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    useEffect(() => {
        budgetMode ? console.log('budget mode enabled') : console.log('budget mode DISABLED')
    }, [budgetMode])

    return (
        <>
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {

                    }
                    {(!budgetMode || budget < 1) && productData.map(product => {
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
                    })}
                    {
                        budgetMode && productsBelowBudget.map(product => {
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