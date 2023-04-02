import { useForm, SubmitHandler } from "react-hook-form"
import { Iproduct } from "../../interfaces/product"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
interface IFormInput {
  id: number,
  name: string,
  price: number
}
interface IProps {
  products: Iproduct[],
  onUpdate: (product: Iproduct) => void
}
const AdminProductUpdate = (props: IProps) => {
  const { id } = useParams()
  const { register, handleSubmit, reset } = useForm<IFormInput>()

  useEffect(() => {
    const product = props.products.find((item:any) => item.id == id)
    reset(product)
  },[props])
  const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    props.onUpdate(data);
  }
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} />
        <input type="number" {...register("price")} />
        <button type="submit">edit product</button>
      </form>
    </div>
  )
}

export default AdminProductUpdate