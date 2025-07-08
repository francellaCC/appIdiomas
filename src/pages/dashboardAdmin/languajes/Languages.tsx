
import { useNavigate } from "react-router-dom";
import { useDeleteLanguajeMutation, useGetLanguagesQuery } from "../../../services/languageApi";
import { retry } from "@reduxjs/toolkit/query";

function Languages() {


  const navigate = useNavigate()
  const { data: languages = [], error, isLoading } = useGetLanguagesQuery();
  const [deleteLanguaje] = useDeleteLanguajeMutation();

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este lenguaje? Esta acción no se puede deshacer.')

    if (!confirmed) return

    try {
      await deleteLanguaje(id).unwrap();
      alert('Lenguaje actualizado correctamente');
    } catch (error) {
      alert("Ocurrio un error")
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Languages</h2>
      <button
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => navigate("/admin/languages/create")}
      >
        + Add Language
      </button>

      <table className="w-full border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Code</th>
            <th className="p-2">Accion</th>
          </tr>
        </thead>
        <tbody>
          {languages.map(lang => (
            <tr key={lang.id} className="border-t hover:bg-gray-50">
              <td className="p-2">{lang.id}</td>
              <td className="p-2">{lang.name}</td>
              <td className="p-2">{lang.code}</td>
              <td>
                <button onClick={() => navigate(`/admin/languages/edit/${lang.id}`)}
                  className="mr-2 text-blue-600 hover:underline">Edititar</button>
                <button onClick={() => handleDelete((lang.id))}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Languages;
