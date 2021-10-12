import React from 'react';
import TextFiles from './textFiles';

const List = () => {
   const showText = (i) => {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) { 
         current[0].querySelector("INPUT").checked=false;
         current[0].className = current[0].className.replace("active", "");
      }
      var x = document.getElementById(i);
      x.className+=" "+"active";
      x.querySelector("INPUT").checked=true;
      document.getElementById("annotation").innerHTML="<div class='annotationPreview'>"+TextFiles.text[i]+"</div>";
      
   }
   
   return (
       <div>
         {
            TextFiles.text.map(function(data,i){
               return (
                  <div class="previewBox" id={i} onClick={()=>showText(i)}>
                     <div class="numbering">
                        {i+1}
                     </div>
                     <div class="content">
                        {data}
                     </div>
                     <div class="numbering">
                        <input type="checkbox"/>
                     </div>

                  </div>
               )   
         })
         }
       </div>
    ); 
   };

export default List