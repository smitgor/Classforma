import React from "react";

const Lables = (color) =>{
    const selectColor = (color) =>{
        var currentColor = document.getElementsByClassName("active");
        if (currentColor.length > 0) { 
            currentColor[0].className = currentColor[0].className.replace("active", "");
        }
        var x = document.getElementById(color);
        x.className+=" "+"active";
        x.querySelector("INPUT").checked=true;    
    }


    return (
        <>
            <div class="category" id="red" onClick={()=>selectColor("red")}>
                <input type="radio" name="category" value="red" align="middle"/>
                <div class="colorPreview" style={{backgroundColor:'red'}}></div>
                <div class="CategoryName">Category 1</div>
            </div>
            <div class="category" id="blue" onClick={()=>selectColor("blue")}>
                <input type="radio" name="category" value="blue"/>
                <div class="colorPreview" style={{backgroundColor:'blue'}}></div>
                <div class="CategoryName">Category 2</div>
            </div>
            <div class="category" id="yellow" onClick={()=>selectColor("yellow")}>
                <input type="radio" name="category" value="yellow"/>
                <div class="colorPreview" style={{backgroundColor:'yellow'}}></div>
                <div class="CategoryName">Category 3</div>
            </div>
            <div class="category" id="green" onClick={()=>selectColor("green")}>
                <input type="radio" name="category" value="green"/>
                <div class="colorPreview" style={{backgroundColor:'green'}}></div>
                <div class="CategoryName">Category 4</div>
            </div>
        </>
    ); 
};

export default Lables