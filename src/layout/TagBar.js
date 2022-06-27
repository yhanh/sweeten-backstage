import { motion } from "framer-motion";
import { useState } from "react";

const TagBar = (props) => {
  const [x, setX] = useState(0);
  // const {isOn, setIsOn} = props;

  // <Tabs value="html" className="2xl:container 2xl:mx-auto mt-10 bg-slate-400">

  return (
    <>
      <div className="grid grid-cols-2 px-6 p">
        <div
          className="pb-2 text-center"
          onClick={() => {
            setX(0);
            // setIsOn(1);
          }}
        >
          <p>收藏</p>
        </div>
        <div
          onClick={() => {
            setX("100%");
            // setIsOn(2);
          }}
        >
          <p className="pb-2 text-center">評論</p>
        </div>
        <motion.div
          className="border border-dark w-50"
          initial={{ x: 0 }}
          animate={{ x }}
        ></motion.div>
      </div>
    </>
  );
};

export default TagBar;
