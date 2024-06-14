/**
 * @author 蔡翔宇 <b11117048@gemail.yuntech.edu.tw>
 */
import Image from "next/image";

export default function Card({item}){
    return (
        <div class="border">
            <img src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}/>
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}