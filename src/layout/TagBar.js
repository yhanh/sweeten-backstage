import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";

const TagBar = (props) => {
  const [x, setX] = useState(0);
  // const {isOn, setIsOn} = props;

  let navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-4 px-6 py-10 2xl:container 2xl:mx-auto">
        <div
          className="pb-2 text-center"
          onClick={() => {
            setX(0);
            // setIsOn(1);

            navigate(`/main/product`)
          }}
        >
          <p>商品管理</p>
        </div>
        <div
          onClick={() => {
            setX("233%");
            // setIsOn(2);

            navigate(`/main/lesson`)
          }}
        >
          <p className="pb-2 text-center">課程管理</p>
        </div>
        <div
          onClick={() => {
            setX("465%");
            // setIsOn(2);
            
            navigate(`/main/user`)
          }}
        >
          <p className="pb-2 text-center">使用者管理</p>
        </div>
        <div
          onClick={() => {
            setX("700%");
            // setIsOn(2);

            navigate(`/main/coupon`)
          }}
        >
          <p className="pb-2 text-center">優惠卷管理</p>
        </div>

        <motion.div
          className="border-b-2 border-dark w-40 pb-2 mx-auto"
          initial={{ x: 0 }}
          animate={{ x }}
        ></motion.div>
      </div>
    </>
  );
};

export default TagBar;
