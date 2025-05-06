import { Link, Outlet } from "react-router-dom"


function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold">Mi Sitio</h1>
          <div className="space-x-4">
            <Link to='/' className="hover:underline">Home</Link>
          </div>
      </nav>

      <main className="flex-grow p-6 bg-gray-50">
        <Outlet/>
      </main>
    </div>

    
  )
}

export default MainLayout