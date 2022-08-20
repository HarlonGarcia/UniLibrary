import React from "react";

const Loading = ({ width, height, background, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{margin: '2rem auto', borderRadius: '50%', background, display: 'block', 
      shapeRendering: 'auto'}}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="translate(80,50)">
        <g transform="rotate(0)">
          <circle cx="0" cy="0" r="6" fill={color} fillOpacity="1">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.6249999999999999s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.6249999999999999s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,71.21320343559643)">
        <g transform="rotate(45)">
          <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.875">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5357142857142857s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5357142857142857s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(50,80)">
        <g transform="rotate(90)">
          <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.75">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.4464285714285714s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.4464285714285714s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(28.786796564403577,71.21320343559643)">
        <g transform="rotate(135)">
          <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.625">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.3571428571428571s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.3571428571428571s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(20,50.00000000000001)">
        <g transform="rotate(180)">
          <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.5">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.26785714285714285s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.26785714285714285s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(28.78679656440357,28.786796564403577)">
        <g transform="rotate(225)">
          <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.375">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.17857142857142855s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.17857142857142855s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(49.99999999999999,20)">
        <g transform="rotate(270)">
          <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.25">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.08928571428571427s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.08928571428571427s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,28.78679656440357)">
        <g transform="rotate(315)">
          <circle cx="0" cy="0" r="6" fill={color} fillOpacity="0.125">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="0.7142857142857142s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            ></animate>
          </circle>
        </g>
      </g>
    </svg>
  );
};

export default Loading;
