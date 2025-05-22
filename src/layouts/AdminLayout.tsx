import { Outlet, NavLink } from "react-router-dom";

const navItems = [
  { path: "/admin", label: "Dashboard" },
  { path: "/admin/languages", label: "Languages" },
  { path: "/admin/modules", label: "Modules" },
  { path: "/admin/lessons", label: "Lessons" },
  { path: "/admin/exercises", label: "Exercises" },
  { path: "/admin/users", label: "Users" },
  
];

export default function AdminLayout() {
  return (
    <div className="grid grid-cols-[240px_1fr] min-h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white p-4 space-y-6">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg hover:bg-gray-700 ${
                  isActive ? "bg-gray-700 font-semibold" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="p-6">
        
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
