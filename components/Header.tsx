import headertyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headertyles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={headertyles.description}>Keep up to Date</p>
    </div>
  );
};

export default Header;
