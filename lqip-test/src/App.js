/*
 * @Author: jihongyu3 jihongyu3@tuhu.cn
 * @Date: 2024-10-16 15:20:58
 * @LastEditors: jihongyu3 jihongyu3@tuhu.cn
 * @LastEditTime: 2024-10-16 16:18:19
 * @FilePath: /lqip-loader-demo/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import './App.css';
import LqImg from './LqImg'

function App() {
  return (
    <div className="App">
      {/* <img src={require('./images/1.jpg').preSrc} alt="img"></img>
      <img src={require('./images/2.jpg').preSrc} srcSet={require('./images/2.jpg').src} alt="img"></img>
      <img src={require('./images/3.jpg').preSrc} alt="img"></img>
      <img src={require('./images/4.jpg').preSrc} alt="img"></img> */}
      <LqImg img={require('./images/aa.png')} />
      <LqImg img={require('./images/bb.png')} />
      
    </div>
  );
}

export default App;
