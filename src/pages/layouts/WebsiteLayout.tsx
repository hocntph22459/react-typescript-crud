import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Icategory } from '../../interfaces/Category'
type IProps = {
    cate: Icategory[]
}
const WebsiteLayout = (props: IProps) => {
    const [data, setdata] = useState<Icategory[]>([])
    useEffect(() => {
        setdata(props.cate)
    }, [props])
    const Logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            {/*Nav*/}
            <nav id="header" className="w-full z-30 top-0 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
                    <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </label>
                    <div>
                        <input className="hidden" type="checkbox" id="menu-toggle" />
                        <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                            <nav>
                                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/">Home</a></li>
                                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/product">Product</a></li>
                                    {localStorage.getItem('user') ? <button className="hover:text-gray-200 hover:underline px-4" onClick={() => Logout()} >logout</button> : <Link to={'/signin'}>signin</Link>}
                                    <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="/signup">signup</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="order-2 md:order-3 flex items-center" id="nav-content">
                        <a className="inline-block no-underline hover:text-black" href="#">
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <circle fill="none" cx={12} cy={7} r={3} />
                                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                            </svg>
                        </a>
                        <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                                <circle cx="10.5" cy="18.5" r="1.5" />
                                <circle cx="17.5" cy="18.5" r="1.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="carousel relative container mx-auto" style={{ maxWidth: 1600 }}>
                <div className="carousel-inner relative overflow-hidden w-full">
                    {/*Slide 1*/}
                    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
                    <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
                        <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80")' }}>
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                                    <p className="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</p>
                                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                    {/*Slide 2*/}
                    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
                    <div className="carousel-item absolute opacity-0 bg-cover bg-right" style={{ height: '50vh' }}>
                        <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80")' }}>
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                                    <p className="text-black text-2xl my-4">Real Bamboo Wall Clock</p>
                                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                    {/*Slide 3*/}
                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
                    <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
                        <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80")' }}>
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                                    <p className="text-black text-2xl my-4">Brown and blue hardbound book</p>
                                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                    {/* Add additional indicators for each slide*/}
                    <ol className="carousel-indicators">
                        <li className="inline-block mr-3">
                            <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                        </li>
                        <li className="inline-block mr-3">
                            <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                        </li>
                    </ol>
                </div>
            </div>

            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                                Store
                            </a>
                            <div className="xl:ml-[90px] w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <h6 aria-current="true" className="w-full px-4 py-2 font-medium text-left text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600">
                                    tất cả
                                </h6>
                                {data.map((list: any, index) => {
                                    return (
                                        <li className="xl:block w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" key={index}>
                                            <a href={`/category/${list.id}`}>
                                                {list.name}
                                            </a>
                                        </li>
                                    )
                                })}
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            </section>
            <section className="bg-white py-8">
                <div className="container py-8 px-6 mx-auto">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">
                        About
                    </a>
                    <p className="mt-8 mb-8">This template is inspired by the stunning nordic minamalist design - in particular:
                        <br />
                        <a className="text-gray-800 underline hover:text-gray-900" href="http://savoy.nordicmade.com/" target="_blank">Savoy Theme</a> created by <a className="text-gray-800 underline hover:text-gray-900" href="https://nordicmade.com/">https://nordicmade.com/</a> and <a className="text-gray-800 underline hover:text-gray-900" href="https://www.metricdesign.no/" target="_blank">https://www.metricdesign.no/</a></p>
                    <p className="mb-8">Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae congue eu consequat ac.</p>
                </div>
            </section>
            <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
                <div className="container flex px-3 py-8 ">
                    <div className="w-full mx-auto flex flex-wrap">
                        <div className="flex w-full lg:w-1/2 ">
                            <div className="px-3 md:px-0">
                                <h3 className="font-bold text-gray-900">About</h3>
                                <p className="py-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                            <div className="px-3 md:px-0">
                                <h3 className="font-bold text-gray-900">Social</h3>
                                <ul className="list-reset items-center pt-3">
                                    <li>
                                        <a className="inline-block no-underline hover:text-black hover:underline py-1" href="#">Add social links</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>



    )
}

export default WebsiteLayout