import React from "react";
import CategorieCart from "./CategorieCart";
import { useGetCategoryQuery } from "../../../features/category/categoryApi";

const Categories = () => {
  const { data } = useGetCategoryQuery();
  const categories = data?.all_category;

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
            Browse Category
          </h2>
          <p className="text-natural text-sm font-bold py-1">
            Most popular categories of portal, sorted by popularity
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {categories?.map((categorie) => (
            <CategorieCart
              key={categorie._id}
              categorie={categorie}
            ></CategorieCart>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
