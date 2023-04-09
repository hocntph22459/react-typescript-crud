import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Iproduct } from "../../../interfaces/product"
import axios from "axios"
interface IFormInput {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  category: string,
}
interface IProps {
  products: Iproduct[],
  onUpdate: (product: Iproduct) => void
}
const AdminProductUpdate = (props: IProps) => {
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const product = props.products.find((item: any) => item.id == id)
    reset(product)
  }, [props])

  const [Image, SetImage] = useState("");
  const { register, handleSubmit, reset } = useForm<IFormInput>()
  const onHandleSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    data.image = await SubmitImage();
    props.onUpdate(data);
    navigate('/admin/product')
    alert('cập nhật thành công')
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
    <form className='my-[64px] ml-[64px] w-[800px]' onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
        <input {...register("name", {
          required: true,
        })} type="text" id="title" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" />
      </div>
      <div className="mb-6">
        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
        <input {...register("price", {
          required: true,
        })} type="text" id="price" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" />
      </div>
      <div className="mb-6">
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image</label>
        <input {...register("image", {
          required: true,
        })} type="file" onChange={(e: any) => SetImage(e.target.files[0])} name='image' id="exampleInputPassword1" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="author" />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
        <input {...register("description", {
          required: true,
        })} type="text" id="description" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="author" />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập Nhật</button>
    </form>
  )
}

export default AdminProductUpdate