import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BudgetContext = createContext();
const productsAPI = 'https://fakestoreapi.com/products';

export function BudgetProvider({ children }) {

    const [budget, setBudget] = useState(30);
    const [budgetMode, setBudgetMode] = useState(false);

    const [productsBelowBudget, setProductsBelowBudget] = useState([]);

    const fetchProducts = () => {
        axios.get(productsAPI)
            .then((res) => {
                setProductsBelowBudget(res.data.filter(
                    product => product.price < budget


                ));
            })
            .catch((err) => {
                console.log('error: ', err.message);
            });
    };

    useEffect(fetchProducts, [budget])

    return (
        <>
            <BudgetContext.Provider
                value={{
                    budgetMode,
                    setBudgetMode,
                    productsBelowBudget,
                    setProductsBelowBudget,
                    budget,
                    setBudget
                }}
            >
                {children}

            </BudgetContext.Provider>
        </>
    )

}

export function useBudget() {
    const context = useContext(BudgetContext);
    return context;
}