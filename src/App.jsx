import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { HeaderMain } from './components/HeaderMain'
import { HomePage } from './components/HomePage'
import { BudgetProvider } from './components/BudgetProvider';
import { WhoWeArePage } from './components/WhoWeArePage'
import { ProductsPage } from './components/ProductsPage'

function App() {
  return (
    <>
      <BudgetProvider>
        <HeaderMain />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="who-we-are" element={<WhoWeArePage />} />
          <Route path="products" element={<ProductsPage />} />
        </Routes>
      </BudgetProvider>
    </>

  )
}

export default App
