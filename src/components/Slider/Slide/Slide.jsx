import "./style.scss";

export const Slide = ({ img, title, text }) => {
  return (
    <div className="slide-main">
      <div className="slide-main-img">
        <img src={img} alt="logo" />
      </div>
      <div className="slide-main-title">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
