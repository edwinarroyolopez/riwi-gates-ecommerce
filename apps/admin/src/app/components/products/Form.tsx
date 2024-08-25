"use client";
import React, { FormEvent, MouseEvent, useState, useEffect } from "react";
import { Product, Category, Kid, Woman, KidSubCategory, WomanSubCategory } from "../../interfaces/Iecommerce";

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
  categories: [
    { men: [], women: [], kids: [] } // Asegúrate de que esto sea correcto según la estructura que esperas
  ],
};


const CreateForm: React.FC<CreateFormProps> = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState<Product>(initialForm);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    let updatedCategory: Category = { men: [], women: [], kids: [] };

    if (selectedCategory === "men") {
      updatedCategory.men = [{ subCategories: [{ jeans: [], shirts: [] }] }];
  } else if (selectedCategory === "women") {
      updatedCategory.women = [{ subCategories: [{ jeans: [], shirts: [], clothes: [] }] }];
  } else if (selectedCategory === "kids") {
      updatedCategory.kids = [{ subCategories: [{ jeans: [], shirts: [] }] }];
  }
  

    setForm({
      ...form,
      categories: [updatedCategory],
    });
  };


  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubCategory = e.target.value;
    const category = form.categories[0] as Category;

    if (selectedCategory === "men" && category.men) {
        const updatedSubCategories = { ...category.men[0], [selectedSubCategory]: [] as Size[] };
        setForm({
            ...form,
            categories: [{ ...category, men: [updatedSubCategories] }],
        });
    } else if (selectedCategory === "women" && category.women) {
        const updatedSubCategories = { ...category.women[0], [selectedSubCategory]: [] as Size[] };
        setForm({
            ...form,
            categories: [{ ...category, women: [updatedSubCategories] }],
        });
    } else if (selectedCategory === "kids" && category.kids) {
        const updatedSubCategories = { ...category.kids[0], [selectedSubCategory]: [] as Size[] };
        setForm({
            ...form,
            categories: [{ ...category, kids: [updatedSubCategories] }],
        });
    }
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

  const handleReset = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <main>
      <h1>{dataToEdit ? "Editar Producto" : "Agregar Producto"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe el nombre del producto"
          onChange={handleChange}
          value={form.name}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Escribe la descripción del producto"
          onChange={handleChange}
          value={form.description}
          required
        />
        <select name="category" onChange={handleCategoryChange} required>
          <option value="">Selecciona una categoría</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        {selectedCategory && form.categories.length > 0 && (
    <select onChange={handleSubCategoryChange} required>
        <option value="">Selecciona una subcategoría</option>
        {selectedCategory === "men" && form.categories[0].men[0]?.subCategories.map((subCategory, index) => (
            Object.keys(subCategory).map((key) => (
                <option key={key + index} value={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
            ))
        ))}
        {selectedCategory === "women" && form.categories[0].women[0]?.subCategories.map((subCategory, index) => (
            Object.keys(subCategory).map((key) => (
                <option key={key + index} value={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
            ))
        ))}
        {selectedCategory === "kids" && form.categories[0].kids[0]?.subCategories.map((subCategory, index) => (
            Object.keys(subCategory).map((key) => (
                <option key={key + index} value={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
            ))
        ))}
    </select>
)}


        {/* Agrega inputs adicionales para tallas, imágenes, etc. */}
        <div>
          <button type="submit">Enviar</button>
          <button type="reset" onClick={handleReset}>
            Limpiar
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateForm;