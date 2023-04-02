import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import ProductDeltailPage from './pages/ProductDeltailPage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import { useEffect, useState } from 'react'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/products'
import AdminLayout from './pages/layouts/AdminLayout'
import AdminProduct from './pages/admin/AdminProduct'
import AdminProductAdd from './pages/admin/AdminProductAdd'
import AdminProductUpdate from './pages/admin/AdminProductUpdate'
import NotFoundPage from './pages/NotFoundPage'
import { Iproduct } from './interfaces/product'
function App() {
  const [products, setProduct] = useState<Iproduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProduct(products.filter((item: Iproduct) => item.id !== id)))
  }
  const onHandleAdd = (product:Iproduct) => {
    addProduct(product).then(() => setProduct([...products, product]))
  }
  const onHandleUpdate = (product:Iproduct) => {
    updateProduct(product).then(() => setProduct(products.map((item) => item.id == product.id ? product : item)))
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path='product' >
            <Route index element={<ProductPage products={products}/>} />
            <Route path=':id' element={<ProductDeltailPage products={products}/>} />
          </Route>
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='product'>
            <Route index element={<AdminProduct products={products} onRemove={onHandleRemove}/>} />
            <Route path='add' element={<AdminProductAdd onAdd={onHandleAdd}/>} />
            <Route path=':id/update' element={<AdminProductUpdate products={products} onUpdate={onHandleUpdate}/>} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
