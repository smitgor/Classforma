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
            var test = document.getElementsByClassName("annotationPreview");
            console.log(a);
            console.log(b);
            var newText = test[0].innerHTML.substring(0,a);
            newText+="<div class='highLight'>"+test[0].innerHTML.substring(a,b)+"</div>";
            newText+=test[0].innerHTML.substring(b,);
            document.getElementsByClassName("annotationPreview").innerHTML=newText;
            console.log(newText);

    
    }

    return(
        <div id="mainTextarea" onMouseUp={()=>fun()}>
            <p>Please selece document form section on left side to preform annotation</p>
            
        </div>
    )
}

export default DisplayText