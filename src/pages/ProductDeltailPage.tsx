import { useParams } from 'react-router-dom'
import { Iproduct } from '../interfaces/product'
interface Iprops {
  products: Iproduct[]
}
const ProductDeltailPage = (props: Iprops) => {
  const { id } = useParams()
  const data = props.products.find((item: any) => item.id == id)

  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div>
          <img src={data?.image} alt="Product 1" className="w-full rounded-md shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{data?.name}</h2>
          <p className="text-gray-700 text-lg mb-4">{data?.price}</p>
          <p className="text-justify text-gray-700 mb-4">{data?.description}</p>
          <form>
            <div className="mb-4">
              <label htmlFor="size" className="block font-medium text-sm text-gray-700 mb-2">Kích cỡ:</label>
              <select name="size" id="size" className="px-4 py-2 border border-gray-400 rounded-lg w-full focus:outline-none focus:shadow-outline-blue">
                <option value="small">Nhỏ</option>
                <option value="medium">Vừa</option>
                <option value="large">Lớn</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="color" className="block font-medium text-sm text-gray-700 mb-2">Màu sắc:</label>
              <select name="color" id="color" className="px-4 py-2 border border-gray-400 rounded-lg w-full focus:outline-none focus:shadow-outline-blue">
                <option value="red">Đỏ</option>
                <option value="blue">Xanh</option>
                <option value="green">Lục</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block font-medium text-sm text-gray-700 mb-2">Số lượng:</label>
              <input type="number" name="quantity" id="quantity" min={1} defaultValue={1} className="px-4 py-2 border border-gray-400 rounded-lg w-full focus:outline-none focus:shadow-outline-blue" />
            </div>
            <div className="mb-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Thêm vào giỏ hàng</button>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default ProductDeltailPage