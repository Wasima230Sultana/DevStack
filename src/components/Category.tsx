import type { Dispatch, SetStateAction } from "react";
import type { devStackTypes } from "../types/type";
import CategoryCard from "./CategoryCard";

export interface ICategory {
    categoriesData: devStackTypes[],
    selectedStack: devStackTypes[],
    setSelectedStack: Dispatch<SetStateAction<devStackTypes[]>>,
 isRemove : boolean,
 setIsRemove : Dispatch<SetStateAction<boolean>>

}

const Category = ({ categoriesData, selectedStack, setSelectedStack,isRemove,setIsRemove }: ICategory) => {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {
                    categoriesData.map((category) =>
                        <CategoryCard
                            key={category.id}
                            category={category}
                            selectedStack={selectedStack}
                            setSelectedStack={setSelectedStack}
                           isRemove={isRemove}
                      setIsRemove={setIsRemove}
                        ></CategoryCard>)
                }
            </div>

        </div>

    );
};

export default Category;