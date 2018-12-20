import React , { Component} from 'react';
import ImageSlider from '../plugins/ImageSlider/ImageSlider'
import './Home.css'

class Home extends Component {
render() {
    return(
        <div className="homePage"> 
        <ImageSlider></ImageSlider>
        </div>
    )
}
}

export default Home;