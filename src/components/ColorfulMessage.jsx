import React from "react";

export const ColorfulMessage = (props) => {
  //console.log("カラフル");
  const { color, children } = props; //propsを分割代入
  const contentStyle = {
    color, //属性名とプロパティ変数が同じ場合は属性名を省略できる。
    fonSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
