import { Component } from "react";
import './stockimgplustextcenter.css';

class StockImgPlusTextCenter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="containercenter">
                <img src={this.props.src} className="imagecenter"></img>
                <div className='textContainercenter'>
                    <label className="textcenter">{this.props.text}</label>
                </div>
                
            </div>
        );
    }
}

export default StockImgPlusTextCenter;