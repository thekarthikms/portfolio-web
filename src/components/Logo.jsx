const Logo = ({ bgcolor, textcolor }) => {
  return (
    <svg
      className="logo"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H11.1111L50 50H38.8889L0 0Z" fill={textcolor} />
      <path d="M40 0H50L30 25H20L40 0Z" fill={textcolor} />
      <path d="M0 25.7021V14L28.443 50H19.5L0 25.7021Z" fill={textcolor} />
    </svg>
  );
};

export default Logo;
