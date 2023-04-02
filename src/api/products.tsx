import config from "./config";

import { Iproduct } from "../interfaces/product";
const getAllProduct = () => {
    return config.get('/products');
}
const getOneProduct = (id:number) => {
    return config.get('/products/' + id);
}
const addProduct = (product:Iproduct) => {
    return config.post('/products', product);
}
const deleteProduct = (id:number) => {
    return config.delete('/products/' + id);
}
const updateProduct = (product:Iproduct) => {
    return config.put('/products/' + product.id, product);
}

export { getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct }