import { use } from "react";
import type { devStackTypes } from "../types/type";
import Category from "./Category";

export interface ICategories{
    categoriesPromise : Promise<devStackTypes[]>,
}

const Categories = ({categoriesPromise}:ICategories) => {
            const categoriesData  = use(categoriesPromise);
// console.log(categoriesData)
    return (
        <div className="my-6">
            <h2 className="font-bold text-5xl mb-3">Explore the <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Technologies</span> </h2>
            <p className="text-[#64748B] text-lg mb-3">Pick one technology per category to build your ideal stack.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {
                categoriesData.map((category)=>
                <Category
                key={category.id}
                category = {category}
                ></Category>)
            }
        </div>
        </div>
  
    );
};

export default Categories;