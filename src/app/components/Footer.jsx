import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='px-16 py-10 bg-gray-700 mt-5'>
                <div className='flex justify-between pb-5'>
                    <div className=' text-4xl sm:text-6xl text-white'>
                        <p>Book your</p>
                        <p>ride now</p>
                    </div>
                    <div>
                        <img src='/QR.png' />
                    </div>

                </div>
                <hr />
                <div className='grid sm:grid-cols-4 gap-5 my-10'>
                    {/* first col */}
                    <div className='flex-col gap-5 text-gray-400'>
                        <p className='font-bold text-white'>PRODUCT</p>
                        <p>Rider App</p>
                        <p>Driver App</p>
                    </div>


                    {/* second col */}
                    <div className='flex-col gap-5 text-gray-400'>
                        <p className='font-bold text-white'>ABOUT US</p>
                        <p>Who We are</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>


                    {/* third col */}
                    <div className='flex-col gap-5 text-gray-400'>
                        <p className='font-bold text-white'>CONTACT US</p>
                        <p>For any complaints or concerns, please reach out to us at nammayatri.support@juspay.in or +91 80 68501060</p>
                        <p>For redressal of grievances, please refer to Privacy Policy</p>
                    </div>

                    {/* fourth col */}
                    <div className='flex-col gap-5 text-gray-400'>
                        <p className='font-bold text-white'>Registered Address</p>
                        <p>Juspay Technologies Private Limited</p>
                        <p>Stallion Business Centre, No. 444, 3rd & 4th Floor, 18th Main, 6th Block, Koramangala Bengaluru, Karnataka- 560095, India</p>
                        <p>Corporate Address</p>
                        <p>Juspay Technologies Private Limited</p>
                        <p>Girija Building, Number 817, Ganapathi Temple Rd, 8th Block, Koramangala, Bengaluru, Karnataka 560095, India.</p>
                    </div>
                </div>
                <hr />
                <div className='text-white text-center p-5'>
                    <Link href="https://github.com/neerajpanchal004">Made with ❤️ by<span className='text-blue-600 underline'> Neeraj panchal </span></Link>
                </div>
            </div>
        </>
    )
}

export default Footer