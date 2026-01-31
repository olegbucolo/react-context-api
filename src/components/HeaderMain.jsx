import { NavLink } from 'react-router-dom';
import { useBudget } from './BudgetProvider';
import { useEffect, useState } from 'react';
import './HeaderMain.css'

export function HeaderMain() {

    const { budget, setBudget, setBudgetMode, budgetMode } = useBudget();

    const handleBudget = () => {
        setBudgetMode(prev => !prev)
    }

    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
    }

    useEffect(() => {
        console.log("budgetMode: ", budgetMode);
        console.log("budget: ", budget);

    }, [budgetMode, budget])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" >Logo@</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link" >Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/who-we-are" className="nav-link" >Who we are</NavLink>
                        </li>


                    </ul>
                    <form className="d-flex" >
                        <input
                            value={budget}
                            onChange={handleBudgetChange}
                            className="form-control me-2"
                            type="search"
                            placeholder="Inserisci il tuo budget"
                            aria-label="Search" />
                        <button
                            onClick={handleBudget}
                            className={budgetMode ? "btn btn-outline-success budget-active" : "btn btn-outline-success"}
                            type="button">Modalita' budget</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}