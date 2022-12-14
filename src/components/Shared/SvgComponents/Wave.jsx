import React from "react";

const HomeWave = ({style, color}) => {
  return (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={color}
        fill-opacity="1"
        d="M0,256L48,234.7C96,213,192,171,288,160C384,149,480,171,576,186.7C672,203,768,213,864,218.7C960,224,1056,224,1152,234.7C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default HomeWave;
