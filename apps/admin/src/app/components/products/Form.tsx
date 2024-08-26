"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from 'react';
import { Product } from "../../interfaces/Iecommerce";

interface CreateFormProps { 
    createData: (product: Product) => void;
    updateData: (product: Product) => void;
    dataToEdit: Product | null;
    setDataToEdit: (data: Product | null) => void;
}

const initialForm: Product = {
    id: "",  // El ID se generará en handleSubmit si es necesario
    name: "",
    description: "",
    price: 0,
    stock: 0,
    size: [], // Placeholder for sizes, adjust according to actual logic
    thumbnail: "https://example.com/image.jpg",
    images: [{ id: 1, url: "https://example.com/image.jpg" }],  // Placeholder
    categories: [],
};

const CreateForm: React.FC<CreateFormProps> = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState<Product>(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.id) {
        form.id = Date.now().toString(); // Genera un ID si es un nuevo producto
        createData(form);
    } else {
        updateData(form);
    }
    handleReset(e);
  };

  const handleReset = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <main>
      <h1>{dataToEdit ? "Editar Producto" : "Agregar Producto"}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Escribe el nombre del producto"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Escribe la descripción del producto"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.description}
            required
          />
          <div>
            <button type="submit">Enviar</button>
            <button type="reset" value="Limpiar" onClick={handleReset}>Limpiar</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateForm;

