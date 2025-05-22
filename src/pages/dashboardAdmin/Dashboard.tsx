
import { useEffect, useState } from "react";



function Dashboard() {
  const [stats, setStats] = useState({ users: 0, lessons: 0, modules: 0 });

  // useEffect(() => {
  //   // Simular llamada a API
  //   setTimeout(() => {
  //     setStats({ users: 120, lessons: 45, modules: 10 });
  //   }, 500);
  // }, []);

  return (
    <div>
      <header className="mb-6">
          <h1 className="text-2xl font-bold">Admin Section</h1>
        </header>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <div className="bg-blue-100 p-4 rounded-xl shadow">
          <h3 className="text-sm text-gray-600">Users</h3>
          <p className="text-2xl font-bold">{stats.users}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow">
          <h3 className="text-sm text-gray-600">Lessons</h3>
          <p className="text-2xl font-bold">{stats.lessons}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl shadow">
          <h3 className="text-sm text-gray-600">Modules</h3>
          <p className="text-2xl font-bold">{stats.modules}</p>
        </div>
      </div>
    </div>
  );
}



export { Dashboard };
