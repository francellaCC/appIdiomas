import React, { useEffect, useState } from 'react'
import type { Module } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetModulesQuery } from '../../services/moduleApi';



function Modules() {
  const [modules, setModules] = useState<Module[]>([]);

  const navigate = useNavigate();
   const dispatch = useDispatch();
   const {data : module = [] } = useGetModulesQuery();

  // useEffect(() => {
  //   dispatch(setModules([
  //     { id: 1, title: "Basic English", description: "Intro", order: 1 },
  //     { id: 2, title: "Intermediate", description: "Grammar", order: 2 },
  //   ]));
  // }, [dispatch]);

  console.log(module)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Modules</h2>
      <button
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => navigate("/admin/modules/create")}
      >
        + Add Module
      </button>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Order</th>
            <th className="p-2">Lenguaje</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {module.map((mod) => (
            <tr key={mod.id} className="border-t hover:bg-gray-50">
              <td className="p-2">{mod.id}</td>
              <td className="p-2">{mod.title}</td>
              <td className="p-2">{mod.description}</td>
              <td className="p-2">{mod.order}</td>
              <td className="p-2">{mod.language.name}</td>
              <td>
                <button onClick={() => navigate(`/admin/modules/edit/${mod.id}`)}
                  className="mr-2 text-blue-600 hover:underline">Edititar</button>
                <button onClick={() => console.log(mod.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Modules