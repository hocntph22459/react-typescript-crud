import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import ProductDeltailPage from './pages/ProductDeltailPage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import { useEffect, useState } from 'react'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/products'
import AdminLayout from './pages/layouts/AdminLayout'
import NotFoundPage from './pages/NotFoundPage'
import { Iproduct } from './interfaces/product'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import { Iusers } from './interfaces/users'
import { getAllUser } from './api/users'
import { Icategory } from './interfaces/Category'
import { addCategory, deleteCategory, getAllCategory, getOneCategory, updateCategory } from './api/category'
import Category from './pages/Category'
import AdminProduct from './pages/admin/Products/AdminProduct'
import AdminProductAdd from './pages/admin/Products/AdminProductAdd'
import AdminProductUpdate from './pages/admin/Products/AdminProductUpdate'
import AdminCategoryAdd from './pages/admin/Categories/AdminCategoryAdd'
import AdminCategoryUpdate from './pages/admin/Categories/AdminCategoryUpdate'
import AdminCategory from './pages/admin/Categories/AdminCategory'
import AdminUsers from './pages/admin/users/AdminUsers'
function App() {
  // product
  const [products, setProduct] = useState<Iproduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])

  const onHandleRemove = (id: number) => {
    deleteProduct(id)
      .then(() => setProduct(products.filter((item: Iproduct) => item.id !== id)))
  }
  const onHandleAdd = (product: Iproduct) => {
    addProduct(product)
      .then(() => setProduct([...products, product]))
  }
  const onHandleUpdate = (product: Iproduct) => {
    updateProduct(product)
      .then(() => setProduct(products.map((item) => item.id == product.id ? product : item)))
  }
  //categories
  const [cate, setcate] = useState<Icategory[]>([])
  useEffect(() => {
    getAllCategory().then(({ data }) => setcate(data))
  }, [])
  const onHandleRemoveCategories = (id: number) => {
    deleteCategory(id)
      .then(() => setcate(cate.filter((item: Icategory) => item.id !== id)))
  }
  const onHandleAddCategories = (data: Iproduct) => {
    addCategory(data)
      .then(() => setcate([...cate, data]))
  }
  const onHandleUpdateCategories = (data: Iproduct) => {
    updateCategory(data)
      .then(() => setcate(cate.map((item) => item.id == data.id ? data : item)))
  }
  // user
  const [user, setuser] = useState<Iusers[]>([])
  useEffect(() => {
    getAllUser().then(({ data }) => setuser(data))
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WebsiteLayout cate={cate} />}>
          <Route index element={<Homepage products={products} cate={cate} />} />
          <Route path='product' >
            <Route index element={<ProductPage products={products} cate={cate}/>} />
            <Route path=':id' element={<ProductDeltailPage products={products} />} />
          </Route>
          <Route path='category/:id' >
            <Route index element={<Category />} />
          </Route>
        </Route>
        <Route path='signup' element={<SignupPage />}></Route>
        <Route path='signin' element={<SigninPage />}></Route>
        <Route path='/admin' element={<AdminLayout />}>
          {/* product */}
          <Route path='product'>
            <Route index element={<AdminProduct products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AdminProductAdd cate={cate} onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<AdminProductUpdate products={products} onUpdate={onHandleUpdate} />} />
          </Route>
          {/* categories */}
          <Route path='categories'>
            <Route index element={<AdminCategory cate={cate} onRemove={onHandleRemoveCategories} />} />
            <Route path='add' element={<AdminCategoryAdd onAdd={onHandleAddCategories} />} />
            <Route path=':id/update' element={<AdminCategoryUpdate cate={cate} onUpdate={onHandleUpdateCategories} />} />
          </Route>
          {/* users */}
          <Route path='users'>
            <Route index element={<AdminUsers user={user} onRemove={onHandleRemoveCategories} />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
