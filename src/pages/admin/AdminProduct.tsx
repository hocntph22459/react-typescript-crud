import React, { useEffect, useState } from 'react'
import { Iproduct } from '../../interfaces/product'
interface Iprops {
  products: Iproduct[],
  onRemove: (id: number) => void
}
const AdminProduct = (props:Iprops) => {
  const [data,setdata] = useState<Iproduct[]>([])
  useEffect(()=>{
    setdata(props.products)
  },[props])
  const handleRemove = (id: number) => {
    props.onRemove(id)
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
            <th>
              <a href="product/add">thêm</a>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(list=>{
            return (
              <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.price}</td>
                <td>
                  <a href={`product/${list.id}/update`}>edit</a>
                  <button onClick={()=>handleRemove(list.id)}>xóa</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AdminProduct