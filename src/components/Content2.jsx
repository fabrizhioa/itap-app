import React from "react";

const rowClassName =
  "flex-auto h-full border tr  bg-black bg-opacity-50  to-transparent";

const Content2 = () => {
  return (
    <section className="text-white bg-Hero-new bg-cover  bg-fixed">
      <div className="h-96 flex">
        <div className={rowClassName}> 1</div>
        <div className={rowClassName}>2</div>
        <div className={rowClassName}>3</div>
        <div className={rowClassName}>4</div>
      </div>
    </section>
  );
};

export default Content2;
