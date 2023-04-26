const AnimatedLoader = () => {
  return (
    <svg
      className="spinner-container"
      width="65px"
      height="65px"
      viewBox="0 0 52 52"
    >
      <circle
        className="path"
        cx="26px"
        cy="26px"
        r="20px"
        fill="none"
        strokeWidth="4px"
      />
    </svg>
  );
};
export default AnimatedLoader;
