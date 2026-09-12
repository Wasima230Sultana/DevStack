
const ChooseStack = () => {
    return (
        <div className="w-full">
            <div className="border border-gray-300 p-5 rounded-3xl shadow-sm hover:shadow-lg transition duration-300">

                {/* Left */}
                <div>
                    <h2 className="font-bold text-lg">
                        Your Stack
                    </h2>

                    <h5 className="text-[#94A3B8]">
                        2 Technology Selected
                    </h5>
                </div>

                {/* Right */}
                <button className="btn font-bold text-[#D82C20] border-red-400 w-full rounded-2xl mt-3">
                    Remove All
                </button>

            </div>
        </div>
    );
};

export default ChooseStack;