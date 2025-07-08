import { useState, type FormEvent } from 'react'
import type { Language, TypeModuleForm } from '../../types/types';
import { useGetLanguagesQuery } from '../../services/languageApi';

type ModuleFormType = {
  onSubmit: (formData: TypeModuleForm) => Promise<void>
  initialData?: TypeModuleForm | undefined
}

function ModuleForm({ onSubmit, initialData }: ModuleFormType) {
  const { data: languages = [] } = useGetLanguagesQuery();
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [order, setOrder] = useState(initialData?.order || 1);
  const [selectedLanguageId, setSelectedLanguageId] = useState<number>(initialData?.language.id || 0);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newModule: TypeModuleForm = {
      title,
      description,
      order,
      language: { id: selectedLanguageId! }
    };
    try {
      console.log("Submitted module:", newModule);
      onSubmit(newModule)
    } catch (error) {
      console.log(error)
    }
    setTitle("");
    setDescription("");
    setOrder(order + 1);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
      <h2 className="text-xl font-bold">Create Module</h2>
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          className="w-full border px-3 py-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Order</label>
        <input
          type="number"
          className="w-full border px-3 py-2 rounded"
          value={order}
          onChange={(e) => setOrder(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Lenguaje</label>
        <select
          value={selectedLanguageId ?? ''}
          onChange={(e) => setSelectedLanguageId(Number(e.target.value))}
          className="w-full border px-3 py-2 rounded"
          required
        >
          <option value="" >--Seleccione el lenguaje--</option>
          {languages.map((lang: Language) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Module
      </button>
    </form>
  );
}

export default ModuleForm