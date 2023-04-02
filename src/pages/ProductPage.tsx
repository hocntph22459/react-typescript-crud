import { useEffect, useState } from 'react'
import { Iproduct } from '../interfaces/product'
interface Iprops {
  products: Iproduct[],
}
const ProductPage = (props: Iprops) => {
  const [data, setdata] = useState<Iproduct[]>([])
  useEffect(() => {
    setdata(props.products)
  }, [props])
  return (
    <div>
      {
        data.map((item) => {
          return (
            <div key={item.id}>
              <a href={'/product/' + item.id}>
                <h3 >{item.name}</h3>
              </a>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductPage