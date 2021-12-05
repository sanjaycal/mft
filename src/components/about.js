import { Component } from "react";
import StockImgPlusTextLeft from "./stockimgplustext/stockimgplustextleft";
import StockImgPlusTextRight from "./stockimgplustext/stockimgplustextright";
import './about.css'
import StockImgPlusTextCenter from "./stockimgplustext/stockimgplustextcenter";

function About(){
    return(
        <ul className='stockImageContainer'>
            <li className='stockplustext'>
                <StockImgPlusTextCenter src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='About!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextLeft src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='About!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextRight src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='About!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextLeft src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='About!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextRight src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='About!'/>
            </li>
        </ul>
    )
}

export default About