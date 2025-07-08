import { useState, type FormEvent } from "react";
import type { Language, LanguageFormData } from "../../types/types";


type LanguageFormType={

onSubmit: (formData: LanguageFormData) => Promise<void>
initialData?: Language | undefined
}
function LanguageForm({onSubmit, initialData} : LanguageFormType) {
  const [name, setName] = useState(initialData?.name || "");
  const [code, setCode] = useState(initialData?.code || "");


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {

      // const result = await createLanguage({name, code}).unwrap()
      onSubmit({code, name})
      setName("");
      setCode("");
      
    } catch (error) {
      console.log("error al guardar un lenguaje", error)
    }

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
