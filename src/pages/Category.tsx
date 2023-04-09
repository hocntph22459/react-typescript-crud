import React, { useState, useEffect } from 'react'
import { getOneCategory } from '../api/category'
import { Iproduct } from '../interfaces/product'
import { useParams } from 'react-router-dom'

const Category = () => {
    const { id } = useParams()
    // cate lọc theo danh mục
    const [cateone, setcateone] = useState<Iproduct[]>([])
    useEffect(() => {
        getOneCategory(id).then(({ data }) => setcateone(data))
    }, [])
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:grid-cols-4 gap-8 px-8">
                    {cateone.map((list, index) => {
                        return (
                            <div key={index}>
                                <a className='' href={'/product/' + list.id}>
                                    <img className="mx-auto hover:grow hover:shadow-lg" src={list.image} />
                                </a>
                                <div className="pt-3 flex items-center justify-between">
                                    <p className='font-bold'>{list.name}</p>
                                </div>
                                <p className="pt-1  text-[red] font-bold">{list.price}$</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Category