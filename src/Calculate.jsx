import React from "react";
import add from './Calc';
import {sub,mul,div} from './Calc';

function Calculate(){
    return(<>
            <ul>
            <li>sum:      {add(1,1)}</li>
            <li>subtract: {sub(2,2)}</li>
            <li>multiply: {mul(3,3)}</li>
            <li>division: {div(4,4)}</li>
            </ul>
           </>
    );
}

export default Calculate;