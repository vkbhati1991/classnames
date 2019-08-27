import React from 'react';
import CS from "./index";


function HowToUse() {
    return (
        <div className={CS("stringClass", ["array1", "array2"], { "objectClass": true })}></div>
    );

}

export default HowToUse;
