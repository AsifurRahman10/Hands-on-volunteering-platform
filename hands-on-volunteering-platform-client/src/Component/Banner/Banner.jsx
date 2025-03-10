import bannerImg from "../../assets/banner-img.jpg";
import { PrimaryBtn } from "../Button/PrimaryBtn";
export const Banner = () => {
  return (
    <section
      className="min-h-screen w-full flex justify-center items-center text-white relative"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div className="bg-black/20 absolute w-full h-full inset-0"></div>
      <div className="w-11/12 lg:w-9/12 mx-auto text-center relative z-10">
        <h3 className="text-5xl md:text-6xl font-bold">
          Be the <span className="text-main">Change</span> <br /> Build the
          Future
        </h3>
        <p className="md:text-lg mt-2">
          Join HandsOn to discover, collaborate, and create meaningful change in
          your community
        </p>
        <div className="mt-4">
          <PrimaryBtn text={"Learn more"} />
        </div>
      </div>
    </section>
  );
};
