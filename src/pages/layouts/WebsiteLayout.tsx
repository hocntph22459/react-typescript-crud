import React from 'react'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                        <li>Menu</li>
                    </ul>
                </nav>
                <div className="banner">
                    banner
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="banner">
                    footer
                </div>
            </footer>
        </div>
    )
}

export default WebsiteLayout