/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0); //分割代入 ステート変数名,ステート更新関数名,(state初期値)
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1); //下のuseStateで取っている関数名
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);
  //useEffectで変更しているステートは[]内に全部書いたほうがいいんじゃない？っていう助言が出る
  //1行目を書くことで警告が出ないようにできる。
  //こんかいはfaceFlagはみないのでこれでOK。
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^O^)</p>}
    </>
    //＆＆左辺がtrueなら表示
  );
};

export default App;
