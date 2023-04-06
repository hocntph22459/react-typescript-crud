
import { Icategory } from "../interfaces/Category";
import config from "./config";
// http://localhost:3000/products?categoryId=1&_expand=category
const getAllCategory = () => {
    return config.get('/Category');
}
const getOneCategory = (id:number) => {
    return config.get(`/products?categoryId=${id}&_expand=category/`);
}
const addCategory = (Category:Icategory) => {
    return config.post('/Category', Category);
}
const deleteCategory = (id:number) => {
    return config.delete('/Category/' + id);
}
const updateCategory = (Category:Icategory) => {
    return config.put('/Category/' + Category.id, Category);
}

export { getAllCategory, getOneCategory, addCategory, deleteCategory, updateCategory }