const MainIllustrationFirst = "/static/Illustaration/MainIllustrationFirst.svg";
const MainIllustrationSecond =
  "/static/Illustaration/MainIllustrationSecond.svg";
const MainIllustrationThird = "/static/Illustaration/MainIllustrationThird.svg";

const Slider = () => {
  return (
    <div>
      <img src={MainIllustrationFirst} alt="picture" />
      <img src={MainIllustrationSecond} alt="picture" />
      <img src={MainIllustrationThird} alt="picture" />
    </div>
  );
};
export default Slider;
