import React from 'react'
import Image from 'next/image'

type InstagramProductType = {
  id: string;
  image: string;
}

const Subscribe = ({ instagramProducts }: { instagramProducts: InstagramProductType[] }) => {
  return (
    <div>
         {/* Newsletter Section */}
      <div className="bg-[#1E28320D] flex flex-col items-center mt-20 mx-auto py-10">
        <div className="max-w-[760px] text-center">
          <h1 className="md:text-xl xl:text-2xl 2xl:text-4xl text-center font-medium pb-10">
            Or Subscribe To The Newsletter
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Email Address..."
              className="bg-transparent w-2/3 mr-3 border-b-2 pb-1 border-black"
            />
            <button className="bg-transparent border-b-2 pb-1 border-black">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
       <div className="flex flex-col items-center text-center mx-auto py-20">
        <h1 className="md:text-xl xl:text-2xl 2xl:text-4xl font-medium mb-10">
          Follow Products And Discounts on Instagram
        </h1>
        <div className='flex flex-col flex-wrap md:flex-row justify-center items-center gap-4'>
             {instagramProducts.map((product: InstagramProductType) => (
              <Image
                key={product.id}
                src={product.image}
                alt="Instagram Product"
                width={187}
                height={187}
              />
            ))}
        </div>
      </div>   
    </div>
  )
}

export default Subscribe