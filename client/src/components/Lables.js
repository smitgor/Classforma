import React from "react";

const Lables = () =>{
    return (
        <>
            <div class="category">
                <input type="radio" name="category" value="red" align="middle"/>
                <div class="colorPreview" style={{backgroundColor:'red'}}></div>
                <div class="CategoryName">Category 1</div>
            </div>
            <div class="category">
                <input type="radio" name="category" value="blue"/>
                <div class="colorPreview" style={{backgroundColor:'blue'}}></div>
                <div class="CategoryName">Category 2</div>
            </div>
            <div class="category">
                <input type="radio" name="category" value="yellow"/>
                <div class="colorPreview" style={{backgroundColor:'yellow'}}></div>
                <div class="CategoryName">Category 3</div>
            </div>
            <div class="category">
                <input type="radio" name="category" value="green"/>
                <div class="colorPreview" style={{backgroundColor:'green'}}></div>
                <div class="CategoryName">Category 4</div>
            </div>
        </>
    );
};

export default Lables