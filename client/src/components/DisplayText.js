import React from "react";


const DisplayText = () =>{
    const fun = () =>{
        var selectedText = '';
        
        // window.getSelection
        if (window.getSelection) {
            selectedText = window.getSelection();
        }
        else return;
        //console.log(selectedText);
        var a=selectedText.baseOffset;
        var b=selectedText.extentOffset;
        var test = document.getElementById("annotationPreview");
        //console.log(a);
        console.log(test.innerHTML);
        console.log(selectedText.toString());
        var list = document.getElementById("lables");
        var currentColor = list.getElementsByClassName("active");
        if(currentColor.length>0)
            var color =currentColor[0].id;
        else return alert("Please select the category");
            var newText = test.innerHTML.substring(0,a);
        newText+=" <span class='highLight "+color+"'>"+test.innerHTML.substring(a,b)+"</span> ";
        newText+=test.innerHTML.substring(b,);
        document.getElementById("annotationPreview").innerHTML=newText;

    
    }

    return(
        <div id="mainTextarea" onMouseUp={()=>fun()}>
            <div id="annotationPreview"></div>
            <p>Please selece document form section on left side to preform annotation</p>
            
        </div>
    )
}

export default DisplayText