import bannerImg from "../../assets/banner-img.jpg";
export const Banner = () => {
  return (
    <section
      className="min-h-screen object-center object-cover w-full"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></section>
  );
};
