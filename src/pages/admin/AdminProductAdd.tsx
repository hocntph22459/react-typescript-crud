import {useForm,SubmitHandler} from "react-hook-form"
import { Iproduct } from "../../interfaces/product"
interface IFormInput {
    id: number,
    name: string,
    price: number
}
interface IProps {
    onAdd: (product: Iproduct) => void
}
const AdminProductAdd = (props:IProps) => {
  const { register, handleSubmit } = useForm<IFormInput>()
    const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
        props.onAdd(data);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />
                <button type="submit">Add New Product</button>
            </form>
        </div>
    )
}

export default AdminProductAdd