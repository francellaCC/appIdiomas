import React, { useState, type FormEvent } from 'react'
import type { Module } from '../../types/types';
import { useNavigate } from 'react-router-dom';



function ModuleForm() {
   const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState(1);
  
const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newModule: Module = {
      id: Date.now(), // simula un ID único
      title,
      description,
      order,
    };
    console.log("Submitted module:", newModule);
   
    setTitle("");
    setDescription("");
    setOrder(order + 1);

    navigate("/admin/modules")
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
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Module
      </button>
    </form>
  );
}

export default ModuleForm