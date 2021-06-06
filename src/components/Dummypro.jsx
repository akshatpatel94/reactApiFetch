import React from "react";
import { useParams } from "react-router-dom";

const Dummypro = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <>
      <h1>This is {id}</h1>
    </>
  );
};
export default Dummypro;
