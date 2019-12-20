import React from "react";
import Flower from "../images/lotus.svg";

function Lotus() {
  return (
    <div className="w-full mx-auto my-8 py-5">
      <img
        src={Flower}
        alt="Flor de loto"
        style={{ maxWidth: "30px" }}
        className="text-center mx-auto"
      />
    </div>
  );
}

export default Lotus;
