// import Image from "next/image";
// import { FC } from "react";

// const Product = () => {
//   return (
//     <section id="Portofolio" className="flex flex-col items-center justify-center m-10 p-6 gap-10">
//       <div>
//         <div className="flex justify-center items-center my-10">
//           <h1 className="text-4xl font-[500]">Our Product</h1>
//         </div>
//         <div className="text-center">
//           <p>
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//             sint. <br />
//             Velit officia consequat duis enim velit mollit. lorem ipsum
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-3 gap-20">
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//         <div>
//           <Card1
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa
//     interdum, rhoncus ex dignissim, ultricies tellus. Proin convallis mauris ut
//     est pulvinar aliquet. Nulla facilisi."
//             image="/product.jpeg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Product;

// interface PortoProps {
//   description: string;
//   image: string;
// }

// export const Card1: FC<PortoProps> = ({ description, image }) => {
//   return (
//     <article className="w-72 bg-white shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300">
//       <Image
//         src={image}
//         alt="icon1"
//         width={68}
//         height={68}
//         className="w-full h-full bg-white border-none  group-hover:scale-50 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
//       />
//       <p className="text-sm w-full ">{description}</p>
//     </article>
//   );
// };

import Image from "next/image";
import { FC } from "react";

const Product = () => {
  return (
    <section id="Portofolio" className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-10 gap-10">
      <div>
        <div className="flex justify-center items-center my-10">
          <h1 className="text-3xl md:text-4xl font-semibold">Our Product</h1>
        </div>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-700">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. <br />
            Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
      </div>

      {/* Grid Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array(9).fill("").map((_, index) => (
          <Card1
            key={index}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget massa interdum, rhoncus ex dignissim, ultricies tellus."
            image="/product.jpeg"
          />
        ))}
      </div>
    </section>
  );
};

export default Product;

interface PortoProps {
  description: string;
  image: string;
}

export const Card1: FC<PortoProps> = ({ description, image }) => {
  return (
    <article className="max-w-sm bg-white shadow-lg p-4 space-y-4 rounded-md hover:-translate-y-2 transition-all duration-300">
      <Image
        src={image}
        alt="Product"
        width={300}
        height={200}
        className="w-full h-auto rounded-md"
      />
      <p className="text-sm text-gray-700">{description}</p>
    </article>
  );
};
