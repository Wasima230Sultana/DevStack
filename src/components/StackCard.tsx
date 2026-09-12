import type { Dispatch, SetStateAction } from "react";
import type { devStackTypes } from "../types/type";
import { MdOutlineCancel } from "react-icons/md";

export interface IStackCard {
    stack: devStackTypes,
    selectedStack: devStackTypes[],
    setSelectedStack: Dispatch<SetStateAction<devStackTypes[]>>
 
}

const StackCard = ({ stack, selectedStack, setSelectedStack }: IStackCard) => {

    const handleDelete = (stackId: string) => {
        const remainingStack = selectedStack.filter((st) => st.id !== stackId)
        setSelectedStack(remainingStack);
        

    }

    return (
        <div className="flex justify-between items-center my-4  border-1 border-gray-400 p-4 rounded-2xl">
            <div className="flex items-center">
                <img className="w-[40px] h-[40px] mr-4 object-contain" src={stack.icon} alt="" />
                <div>
                    <h3 className="font-bold text-lg ">{stack.name}</h3>
                    <h5 className="text[#94A3B8] text-sm">{stack.category}</h5>
                </div>
            </div>
            <div>
                <button onClick={() => handleDelete(stack.id)} className="text-4xl">
                    <MdOutlineCancel />
                </button>
            </div>
        </div>
    );
};

export default StackCard;