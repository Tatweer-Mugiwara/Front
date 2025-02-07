import Loading from "../Loading"
import Navbar from "../Home/Navbar"

const Layout = ({ children, isLoading }) => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex items-center justify-center">
                {
                    isLoading ? <Loading /> : children
                }
            </main>
            <div className="bg-mainColor font-unbounded font-bold text-center py-3 text-white">
                2024 BuildHub.All Rights Reserved.
            </div>
        </div>
    )
}

export default Layout