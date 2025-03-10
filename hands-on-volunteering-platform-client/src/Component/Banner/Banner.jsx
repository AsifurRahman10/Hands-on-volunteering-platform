import bannerImg from "../../assets/banner-img.jpg";
export const Banner = () => {
  return (
    <section
      className="h-[300px]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    ></section>
  );
};
