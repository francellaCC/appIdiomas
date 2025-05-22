import { useState,type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addLanguage } from "../../features/languages/languageSlice";

function LanguageForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addLanguage({ id: Date.now(), name, code }));
    setName("");
    setCode("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <h2 className="text-xl font-bold">Add Language</h2>
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="English"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Code</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="en"
          required
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Language
      </button>
    </form>
  );
}

export default LanguageForm;
