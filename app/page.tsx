import Image from "next/image";
import data from "./data/data.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex sm:flex-row sm:w-10/12 mt-10  items-center flex-col w-full">
        <div className="sm:w-1/3 w-full flex justify-center">
          <Image
            priority={false}
            src="/images/_.jpeg"
            width={640}
            height={960}
            alt="my image"
            className="profileImage"
          />
        </div>
        <div className="p-10 sm:w-2/3 w-full mt-6 sm:mt-10">
          <h2>{data.aboutMeData.title}</h2>
          <p className="text-base">{data.aboutMeData.body}</p>
        </div>
      </section>
      <section className="w-full  shadow-footer p-10 h-full mt-10">
        <p>{data.aboutMeData.body2}</p>
      </section>
      <section className="flex sm:flex-row mt-16 sm:w-10/12 items-center w-full flex-col ">
        <div className=" flex flex-colum sm:w-7/12  sm:mb-0 w-full p-10 ">
          <p>{data.aboutMeData.body3}</p>
        </div>
        <div className="sm:w-5/12 sm:ml-10 w-full ml-0">
          <Image
            src="/images/PackagingDesignShutterstock.jpeg"
            width={640}
            height={960}
            alt="my image"
            className="h-250 object-cover w-500"
          />
        </div>
      </section>
    </div>
  );
}
