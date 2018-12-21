import React ,{Component} from 'react';
import './ImageGrid.css'

class ImageGrid extends Component {
    render() {
        return (
            <div className="imageGridContainer">
                <div className="row imageGrid">
                    <div class="column">
                        <div className="imgContainer"><img src="/images/1.jpg" alt=" img"></img></div>
                        <div className="imgContainer"> <img src="/images/2.jpg" alt=" img"></img></div>
                        <div className="imgContainer"> <img src="/images/3.jpg" alt=" img"></img></div>
                    </div>
                    <div class="column">
                        <div className="imgContainer"> <img src="/images/4.jpg" alt=" img"></img></div>
                        <div className="imgContainer">  <img src="/images/5.jpg" alt=" img"></img></div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default ImageGrid; 