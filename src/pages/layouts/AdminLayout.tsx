import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminLayout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.getItem('role') === 'admin' ? console.log('đã đến trang quản trị') : navigate('/signin')
    }, [])
    const Logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="w-full bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
            <div className="w-64 px-4">
                <div className="h-16 flex items-center">
                    <a href="/admin" className="w-48 mx-auto bg-blue-500 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>admin</span>
                    </a>
                </div>
                <div className="px-2 pt-4 pb-8 border-r border-gray-300">
                    <ul className="space-y-2">
                        <li>
                            <a href='/admin/product' className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <span>quản lý sản phẩm</span>
                            </a>
                        </li>
                        <li>
                            <a href='/admin/categories' className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>quản lý danh mục</span>
                            </a>
                        </li>
                        <li>
                            <a href='/admin/users' className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                                <span>quản lý người dùng</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 px-2">
                <Outlet />
            </div>
        </div>

    )
}

export default AdminLayout