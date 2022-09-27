import React from "react";
// const Hero = ({ text }) => {
//   return (
//     <header className="bg-dark text-white p-5">
//       <h1>{text}</h1>
//     </header>
//   );
// };

const Hero = ({ text }) => {
  return (
    <header className="bg-dark text-white p-5 hero-container">
      <h1 className="hero-text">{text}</h1>
      {/* {backdrop && (
        <div
          className="hero-backdrop"
          style={{ backgroundImage: `url(${backdrop})` }}
        ></div>
      )} */}
    </header>
  );
};

export default Hero;
