import { useParams } from 'react-router-dom'
import { Iproduct } from '../interfaces/product'
interface Iprops {
  products: Iproduct[]
}
const ProductDeltailPage = (props: Iprops) => {
  const { id } = useParams()
  const data = props.products.find((item: any) => item.id == id)

  return (
    <div>
      <h3>{data?.name}</h3>
      <p>{data?.price}</p>
    </div>
  )
}

export default ProductDeltailPage