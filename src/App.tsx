import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <h1>你好 這是曾若嬅的自我介紹</h1>
    <h2>關於我:</h2>
    <p>我來自新竹，目前就讀淡江大學資訊管理學系三年級</p>
    <p>如果還有興趣更了解我的話，下面連結有我的IG~</p>
    <img src="ig.jpg" alt="ig-logo"/>
    <a href="https://www.instagram.com/hua_0731_?igsh=MTh0cWNzNzdua3Q2cw%3D%3D&utm_source=qr">點我前往IG頁面</a>

    <div>
        <h3>以表格方式介紹我自己</h3>
        <table>
            <tr>
                <th>名稱</th>
                <th>年齡</th>
                <th>興趣</th>
            </tr>
            <tr>
                <td>曾若嬅</td>
                <td>20</td>
                <td>唱歌</td>
            </tr>
        </table>
        <strong>接下來要介紹我的家庭成員</strong>
        <ul>
            <li>爸爸</li>
            <li>媽媽</li>
            <li>我(曾若嬅)</li>
        </ul>
        <span>是非常平凡的一家三口~</span>
    </div>

    <strong>接下來要介紹我喜歡吃的</strong> <em>水果</em>
    <ol>
        <li>荔枝</li>
        <li>草莓</li>
        <li>櫻桃</li>
    </ol>
    </>
  )
}

export default App
