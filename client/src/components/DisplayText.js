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
        //console.log(b);
        if(a>b){
            a=a+b;
            b=a-b;
            a=a-b;
        }
        console.log(test.innerHTML);
        console.log(test.innerText);
        console.log(selectedText.toString());
        var htmlContent = test.innerHTML;
        var textContent = test.innerText;
        var idx=0;
        console.log(a);
        for(var temp = 0;temp<htmlContent.length;temp++)
        {
            console.log("/////");
            console.log(htmlContent[temp].charCodeAt(0), htmlContent[temp]);
            console.log(textContent[idx].charCodeAt(0), textContent[idx]);
            if(htmlContent[temp]===textContent[idx])
            {
                idx++;
            }
            else if(textContent[idx].charCodeAt(0)==10)
            {
                idx++;
                temp--;
            }
            if(a===idx-1)
            {
                idx=temp;
                console.log(idx);
                var diff=idx-a;
                a+=diff;
                b+=diff;
                break;
            }
        }
        console.log(diff);
        console.log(a);
        console.log(b);
        var list = document.getElementById("lables");
        var currentColor = list.getElementsByClassName("active");
        if(currentColor.length>0)
            var color =currentColor[0].id;
        else return alert("Please select the category");
            var newText = test.innerHTML.substring(0,a);
        newText+="<span class='highLight "+color+"'>"+test.innerHTML.substring(a,b)+"</span>";
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