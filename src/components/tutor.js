import { Component } from "react";
import StockImgPlusTextLeft from "./stockimgplustext/stockimgplustextleft";
import StockImgPlusTextRight from "./stockimgplustext/stockimgplustextright";
import StockImgPlusTextCenter from "./stockimgplustext/stockimgplustextcenter";
import './tutor.css'

function Tutor(){
    return(
        <ul className='stockImageContainer'>
            <li className='stockplustext'>
                <StockImgPlusTextCenter src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Tutor!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextRight src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextLeft src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextRight src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextLeft src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextCenter src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextRight src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextLeft src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextCenter src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextRight src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextLeft src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextRight src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
            <li className='stockplustext'>
                <StockImgPlusTextCenter src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' text='Hello!'/>
            </li>
        </ul>
    )
}

export default Tutor