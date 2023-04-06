import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
interface formData {
    name: string,
    price: number,
    description: string,
    image: string,
    categoryId: number
}
const AdminProductAdd = (props: any) => {
    const navigate = useNavigate()
    const [cate, setcate] = useState([])
    useEffect(() => {
        setcate(props.cate)
    }, [props])

    const [Image, SetImage] = useState("");
    const { register, handleSubmit } = useForm<formData>();
    const OnHandSubmit: SubmitHandler<formData> = async (data: formData) => {
        data.image = await SubmitImage();
        props.onAdd(data)
        navigate('/admin/product')
    }
    const SubmitImage = async () => {
        const data = new FormData();
        const cloud_name = "dpy2w5vus";
        const upload_preset = "demo_upload";
        data.append("file", Image);
        data.append("upload_preset", upload_preset);
        data.append("cloud_name", cloud_name)
        data.append("folder", "ecma")
        const takeData = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, data)
            .then((data: any) => data);
        return takeData.data.secure_url
    }
    return (
        <div>
            <form onSubmit={handleSubmit(OnHandSubmit)}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                    <input {...register("name", {
                        required: true,
                    })} type="text" id="title" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name product" />
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
                    <input {...register("price", {
                        required: true,
                    })} type="text" id="price" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price" />
                </div>
                <div className="mb-6">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image</label>
                    <input {...register("image", {
                        required: true,
                    })} type="file" onChange={(e: any) => SetImage(e.target.files[0])} name='image' id="exampleInputPassword1" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="author" />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                    <textarea cols={30} rows={5} {...register("description", {
                        required: true,
                    })} id="description" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="desc" />
                </div>
                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danh mục</label>
                    <select {...register("categoryId", { required: true, })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option></option>
                        ${cate.map((list:any, index) => {
                            return (
                                <option key={index} value={list.id}>{list.name}</option>
                            )
                        })}
                    </select>
                </div>
                <button type="submit" className="mt-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm sản phẩm</button>
            </form>

        </div>
    )
}

export default AdminProductAdd