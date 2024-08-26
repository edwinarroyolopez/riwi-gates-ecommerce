// components/Form.tsx

"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from 'react';
import { Product, Category, Subcategory } from "../../interfaces/Iecommerce";

interface CreateFormProps { 
    createData: (product: Product) => void;
    updateData: (product: Product) => void;
    dataToEdit: Product | null;
    setDataToEdit: (data: Product | null) => void;
}

const initialForm: Product = {
    id: "",  
    name: "",
    description: "",
    price: 0,
    stock: 0,
    size: [], 
    thumbnail: "https://example.com/image.jpg",
    images: [{ id: 1, url: "https://example.com/image.jpg" }],  
    categories: [],
};

const CreateForm: React.FC<CreateFormProps> = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState<Product>(initialForm);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  const categories: Category[] = [
    {
      id: 1,
      name: "Men",
      subcategories: [
        { id: 1, name: "jeans" },
        { id: 2, name: "shirts" },
      ],
    },
    {
      id: 2,
      name: "Women",
      subcategories: [
        { id: 3, name: "jeans" },
        { id: 4, name: "shirts" },
        { id: 5, name: "clothes" },
      ],
    },
    {
      id: 3,
      name: "Kids",
      subcategories: [
        { id: 6, name: "jeans" },
        { id: 7, name: "shirts" },
      ],
    },
  ];

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
      setSelectedCategory(dataToEdit.categories[0]?.name || "");
      const category = categories.find(cat => cat.name === dataToEdit.categories[0]?.name);
      setSubcategories(category?.subcategories || []);
    } else {
      setForm(initialForm);
      setSelectedCategory("");
      setSubcategories([]);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSizeChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newSize = form.size.map((size, i) => i === index ? { ...size, [name]: value } : size);
    setForm({ ...form, size: newSize });
  };

  const handleImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newImages = form.images.map((image, i) => i === index ? { ...image, [name]: value } : image);
    setForm({ ...form, images: newImages });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);
    const category = categories.find(cat => cat.name === categoryName);
    setSubcategories(category?.subcategories || []);
    setForm({ ...form, categories: [{ ...category!, name: categoryName }] });
  };

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subcategoryName = e.target.value;
    setForm(prevForm => ({
      ...prevForm,
      categories: [{
        ...prevForm.categories[0],
        subcategories: [{ id: Date.now(), name: subcategoryName }],
      }]
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.id) {
        form.id = Date.now().toString(); 
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
    setSelectedCategory("");
    setSubcategories([]);
  };

  return (
    <main>
      <h1>{dataToEdit ? "Editar Producto" : "Agregar Producto"}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Product:</label>
          <input
            type="text"
            name="name"
            placeholder="Escribe el nombre del producto"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.name}
            required
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Escribe la descripción del producto"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.description}
            required
          />
          <label>Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Precio"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.price}
            required
          />
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            onBlur={handleChange}
            onChange={handleChange}
            value={form.stock}
            required
          />
          <label>Stock:</label>
          {form.size.map((size, index) => (
            <input
              key={index}
              type="text"
              name="name"
              placeholder="Tamaño"
              onBlur={(e) => handleSizeChange(index, e)}
              onChange={(e) => handleSizeChange(index, e)}
              value={size.name}
            />
          ))}
          <label>Imagenes:</label>
          {form.images.map((image, index) => (
            <input
              key={index}
              type="text"
              name="url"
              placeholder="URL de la imagen"
              onBlur={(e) => handleImageChange(index, e)}
              onChange={(e) => handleImageChange(index, e)}
              value={image.url}
            />
          ))} <br />
          <label>Categorie:</label>
          {/* Selector de categorías */}
          <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Seleccione una categoría</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>
          <label>Subcategorie:</label>
          {/* Selector de subcategorías */}
          <select name="subcategory" value={form.categories[0]?.subcategories[0]?.name || ""} onChange={handleSubcategoryChange}>
            <option value="">Seleccione una subcategoría</option>
            {subcategories.map(subcategory => (
              <option key={subcategory.id} value={subcategory.name}>{subcategory.name}</option>
            ))}
          </select>

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
