import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='my-16'>
            <footer>
                <div className='grid gris-cols-1 md:grid-cols-5 my-16'>
                    <div className='col-span-2'>
                        <div className='text-center md:text-start my-4'>
                            <div className="flex justify-center md:justify-start">
                                <img src={logo} alt="" />
                            </div>

                            <p className='my-4 text-sm text-[#64748B]'>Curated tools, technologies, and resources for developers building
                                modern software.</p>
                            <div className='my-4'>
                                <button className='mr-6 border-1 border-gray-300 p-1 rounded-4xl'>GitHub</button>
                                <button className='mr-6 border-1 border-gray-300 p-1 rounded-4xl'>Twitter</button>
                                <button className='mr-6 border-1 border-gray-300 p-1 rounded-4xl'>LinkedIn</button>

                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block md:col-span-3">
                        <div className="grid grid-cols-3 gap-8">

                            {/* PRODUCT */}
                            <div>
                                <h4 className="font-medium mb-3">
                                    PRODUCT
                                </h4>

                                <div className="space-y-2">
                                    <p className="text-[#64748B] text-sm">
                                        Home
                                    </p>

                                    <p className="text-[#64748B] text-sm">
                                        Technologies
                                    </p>

                                    <p className="text-[#64748B] text-sm">
                                        Projects
                                    </p>
                                </div>
                            </div>


                            {/* COMPANY */}
                            <div>
                                <h4 className="font-medium mb-3">
                                    COMPANY
                                </h4>

                                <div className="space-y-2">
                                    <p className="text-[#64748B] text-sm">
                                        About
                                    </p>

                                    <p className="text-[#64748B] text-sm">
                                        Contact
                                    </p>

                                    <p className="text-[#64748B] text-sm">
                                        Careers
                                    </p>
                                </div>
                            </div>


                            {/* LEGAL */}
                            <div>
                                <h4 className="font-medium mb-3">
                                    LEGAL
                                </h4>

                                <div className="space-y-2">
                                    <p className="text-[#64748B] text-sm">
                                        Privacy Policy
                                    </p>

                                    <p className="text-[#64748B] text-sm">
                                        Terms of Service
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                <div className='flex justify-between items-center p-1'>
                    <div>
                        <p className='text-[#94A3B8]'>© 2026 Dev Stack. All rights reserved.</p>
                    </div>
                    <div>
                        <button className='text-[#64748B] text-sm mr-2'>Privacy</button>
                        <button className='text-[#64748B] text-sm'>Terms</button>

                    </div>
                </div>


            </footer>

        </div>
    );
};

export default Footer;