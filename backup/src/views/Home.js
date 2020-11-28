import React from "react";
/* Parts */
import Carousel from '../components/Carousel';
/* Redux */
import { connect } from 'react-redux'

class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Carousel />
        <main style={{padding:8}}>
          <h1>ペット保険ってなに？</h1>
          <h2>手術・入院をすると</h2>
          <p>約50万円かかることも</p>
          <h2>ペットの治療費は</h2>
          <p>100%自己負担</p>
          <h2>ペット保険商品</h2>
          <h3>月々730円から入れる!</h3>
          <img src="https://www.rakuten-ssi.co.jp/img/pet/top/img-top01_pc.png" width="100%" />
          <h3>ずっといっしょ[もっと]</h3>
          <p>"いつも"から"もしも"まで使えるペット保険。身近な通院から入院・手術まで幅広く補償！ 日々の暮らしをお得にする契約者限定サービス付き。</p>
          <ul>
            <li>全国の病院で補償OK</li>
            <li>免責金額なし！ちょっとした通院でも補償</li>
            <li>体調不良のときにはいつでも獣医師に相談</li>
            <li>楽天市場で使える割引クーポンがもらえる</li>
          </ul>
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  article: state.data.article
})

export default connect(
  mapStateToProps,
)(Home);

//export default Home;