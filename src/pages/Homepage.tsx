import { useEffect, useState } from 'react'
import { Iproduct } from '../interfaces/product'
import { Icategory } from '../interfaces/Category'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
type IProps = {
  products: Iproduct[]
  cate: Icategory[]
}

const Homepage = (props: IProps) => {
  const [data, setdata] = useState<Iproduct[]>([])

  useEffect(() => {
    setdata(props.products)
  }, [props])

  const [cate, setcate] = useState<Icategory[]>([])
  useEffect(() => {
    setcate(props.cate)
  }, [props])
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const [search, setsearch] = useState({})
  const onSearch = (value: string) => {
    setsearch(value)
  }

  return (
    <>
      <Space style={{ marginLeft: 24 }} direction="vertical">
        <Search style={{ backgroundColor: 'blue' }}
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </Space>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:grid-cols-3 gap-8 px-8">
        {data.map((list, index) => {
          if (list.name === search) {
            return (
              <div key={index}>
                <a className='' href={'/product/' + list.id}>
                  <img className="mx-auto hover:grow hover:shadow-lg" src={list.image} />
                </a>
                <div className="pt-3 flex items-center justify-between">
                  <p className='font-bold'>{list.name}</p>
                </div>
                <p className="pt-1 text-gray-900 text-[red] font-bold">{list.price}$</p>
              </div>

            )
          } else {
            <div>không tìm thấy</div>
          }
        })}
      </div>
    </>
  )
}

export default Homepage