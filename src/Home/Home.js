import React , { Component} from 'react';
import ImageSlider from '../plugins/ImageSlider/ImageSlider';
import ImageGrid from '../plugins/ImageGrid/ImageGrid';
import './Home.css';

class Home extends Component {
render() {
    return(
        <div className="homePage"> 
            <ImageSlider></ImageSlider>
            <ImageGrid></ImageGrid>
        </div>
    )
}
}

export default Home;