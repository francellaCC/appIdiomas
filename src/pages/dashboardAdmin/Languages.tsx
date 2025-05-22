import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguages } from "../../features/languages/languageSlice";
import type { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

function Languages() {
  const dispatch = useDispatch();
  const languages = useSelector((state: RootState) => state.languages.languages);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setLanguages([
      { id: 1, name: "English", code: "en" },
      { id: 2, name: "Spanish", code: "es" },
    ]));
  }, [dispatch]);

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
          </tr>
        </thead>
        <tbody>
          {languages.map(lang => (
            <tr key={lang.id} className="border-t hover:bg-gray-50">
              <td className="p-2">{lang.id}</td>
              <td className="p-2">{lang.name}</td>
              <td className="p-2">{lang.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Languages;
