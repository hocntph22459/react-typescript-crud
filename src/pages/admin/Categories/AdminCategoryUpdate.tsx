import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { Icategory } from "../../../interfaces/Category"
interface IFormInput {
  id: number,
  name: string,
}
interface IProps {
  cate: Icategory[],
  onUpdate: (cate: any) => void
}
const AdminCategoryUpdate = (props: IProps) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { register, handleSubmit, reset } = useForm<IFormInput>()

  useEffect(() => {
    const product = props.cate.find((item: any) => item.id == id)
    reset(product)
  }, [props])
  const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    props.onUpdate(data);
    navigate('/admin/categories')
    alert('cập nhật thành công')
  }

  return (
        <form className='my-[64px] ml-[64px] w-[800px]' onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
            <input {...register("name", {
                required: true,
            })} type="text" id="title" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập Nhật</button>
    </form>
  )
}

export default AdminCategoryUpdate