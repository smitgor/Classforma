import React from 'react';
import TextFiles from './textFiles';

const List = () => {
    return (
       <div>
         {
            TextFiles.text.map(function(data,i){
               return (
                  <div class="previewBox">
                     <div class="numbering">
                        {i+1}
                     </div>
                     <div class="containt">
                        {data}
                     </div>
                     <div class="numbering">
                        <input name="" type="checkbox"/>
                     </div>

                  </div>
               )   
         })
         }
       </div>
    ); 
   };

export default List