
import { type Dispatch, type SetStateAction } from "react";
import type { devStackTypes } from "../types/type";
import { Bounce, toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

export interface ICategoryCArd {
    category: devStackTypes;
    selectedStack: devStackTypes[];
    setSelectedStack: Dispatch<SetStateAction<devStackTypes[]>>;
}

const CategoryCard = ({
    category,
    selectedStack,
    setSelectedStack,
}: ICategoryCArd) => {


    const isSelected = selectedStack.some(
        (stack) => stack.id === category.id
    );

    const handleStack = () => {

        if (isSelected) {
            return;
        }
        setSelectedStack([...selectedStack, category]);

        toast.success(`${category.name} added to the stack successfully!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div>
            <div
                className={`border ${isSelected
                    ? "border-red-400"
                    : "border-gray-300"
                    } p-5 rounded-3xl shadow-sm hover:shadow-lg transition duration-300`}
            >

                {/* Header */}
                <div className="flex justify-between items-start my-2">

                    <div className="flex items-center">
                        <img
                            className="w-[60px] h-[60px] mr-4 object-contain"
                            src={category.icon}
                            alt={category.name}
                        />

                        <h2 className="text-xl font-bold">
                            {category.name}
                        </h2>
                    </div>

                    <button className="btn btn-sm rounded-full text-green-700 bg-green-200 border-none">
                        {category.badge}
                    </button>

                </div>

                {/* Description */}
                <div className="my-4">
                    <p className="text-gray-600 line-clamp-2">
                        {category.description}
                    </p>
                </div>

                {/* Information */}
                <div className="flex flex-wrap justify-between items-center gap-2 my-4">

                    <button className="btn btn-sm rounded-2xl">
                        {category.category}
                    </button>

                    <span className="text-sm text-gray-500">
                        {category.difficulty}
                    </span>

                    <button className="btn btn-sm rounded-2xl">
                        ⭐ {category.rating}
                    </button>

                </div>

                {/* Button */}
                <div className="mt-5">

                    <button
                        onClick={handleStack}
                        disabled={isSelected}
                        className={`btn w-full rounded-2xl border ${isSelected
                                ? "bg-gray-500 border-red-400 cursor-not-allowed text-amber-50"
                                : "bg-black text-white hover:bg-gray-800 border-gray-300"
                            }`}
                    >
                        {isSelected && <FaCheck />}

                        {isSelected
                            ? "Added to Stack"
                            : "Add to Stack"
                        }
                    </button>

                </div>

            </div>
        </div>
    );
};

export default CategoryCard;
