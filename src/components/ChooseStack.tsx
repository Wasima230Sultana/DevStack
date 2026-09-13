import type { Dispatch, SetStateAction } from "react";
import type { devStackTypes } from "../types/type";
import StackCard from "./StackCard";
import { Bounce, toast } from "react-toastify";

export interface IChooseStack {
    selectedStack: devStackTypes[],
    setSelectedStack: Dispatch<SetStateAction<devStackTypes[]>>

}

const ChooseStack = ({ selectedStack, setSelectedStack }: IChooseStack) => {
    const handleAllRemove = () => {
        toast.warning('All stacks removed from the stack', {
            position: "top-center",
            autoClose: 3000,
            theme: "light",
            transition: Bounce,
        });
        setSelectedStack([]);
    }
    return (
        <div className="w-full">
            <div className="border border-gray-300 p-5 rounded-3xl shadow-sm hover:shadow-lg transition duration-300">


                <div>
                    <h2 className="font-bold text-lg">
                        Your Stack
                    </h2>
                    {
                        selectedStack.length === 0 ?
                            <div className="text-[#94A3B8]">
                                <p>No technologies selected yet.</p>

                            </div>
                            :
                            <div>
                                <h5 className="text-[#94A3B8]">
                                    {selectedStack.length} Technology Selected
                                </h5>
                            </div>
                    }


                </div>

                <div className="my-3 mb-5">
                    {
                        selectedStack.map((stack) =>
                            <StackCard
                                key={stack.id}
                                stack={stack}
                                selectedStack={selectedStack}
                                setSelectedStack={setSelectedStack}

                            />)
                    }
                </div>

                <div>
                    {
                        selectedStack.length === 0 ?
                            <div>
                                <button className="btn font-bold text-[#94A3B8] w-full rounded-2xl mt-3">
                                    Your stack is empty.
                                </button>
                            </div>
                            :
                            <div>
                                <button onClick={() => handleAllRemove()} className="btn font-bold text-[#D82C20] border-red-400 w-full rounded-2xl mt-3">
                                    Remove All
                                </button>
                            </div>
                    }
                </div>


            </div>
        </div>
    );
};

export default ChooseStack;