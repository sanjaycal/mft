import { Component } from "react";
import './stockimgplustextright.css';

class StockImgPlusTextRight extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <img src={this.props.src} className="image"></img>
                <div className='textContainer'>
                    <label className="text">{this.props.text}</label>
                </div>
                
            </div>
        );
    }
}

export default StockImgPlusTextRight;