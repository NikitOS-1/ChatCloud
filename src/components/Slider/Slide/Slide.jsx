export const Slide = ({ img, title, text }) => {
  return (
    <div>
      <img src={img} alt="picture" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};
