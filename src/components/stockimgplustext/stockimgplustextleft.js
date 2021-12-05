import { Component } from "react";
import './stockimgplustextleft.css';

class StockImgPlusTextLeft extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="containerleft">
                <img src={this.props.src} className="imageleft"></img>
                <div className='textContainerleft'>
                    <label className="textleft">{this.props.text}</label>
                </div>
                
            </div>
        );
    }
}

export default StockImgPlusTextLeft;