function addText(button) {
    var buttonText = button.textContent;
    var labelText = document.getElementById("Display");
    labelText.value += buttonText.trim();
}


function cleartext(){
    var labelText = document.getElementById("Display");
    labelText.value="";

    firstdigit="";
    seconddigit="";
    operand="";
}

var firstdigit="";
var seconddigit="";
var operand="";

function handleop(button){
    operand = button.textContent;
    var labelText = document.getElementById("Display");
    
    if(firstdigit===""){
    firstdigit=labelText.value.trim();
    labelText.value="";
    }
    else{
        seconddigit=labelText.value.trim();
        labelText.value="";
        
    }

    if(seconddigit!==""){

        if(operand.trim()==="+"){
            var result =parseInt(firstdigit)+parseInt(seconddigit);
           firstdigit=result;
         }
         else if(operand.trim()==="-"){
             var result =parseInt(firstdigit) - parseInt(seconddigit);
             firstdigit=result;
         }
     
         else if(operand.trim()==="*"){
            var result =parseInt(firstdigit) * parseInt(seconddigit);
            firstdigit=result;
        }
     
        else if(operand.trim()==="/"){
            var result =parseFloat(firstdigit) / parseFloat(seconddigit);
            firstdigit=result; 
        }
    }
}

function equal(){


    var labelText = document.getElementById("Display");
    seconddigit=labelText.value.trim();
    
    if(operand.trim()==="+"){
       var result =parseInt(firstdigit)+parseInt(seconddigit);
       labelText.value=result;
    }
    else if(operand.trim()==="-"){
        var result =parseInt(firstdigit) - parseInt(seconddigit);
        labelText.value=result;
    }

    else if(operand.trim()==="*"){
       var result =parseInt(firstdigit) * parseInt(seconddigit);
       labelText.value=result;
    }

   else if(operand.trim()==="/"){
       var result =parseFloat(firstdigit) / parseFloat(seconddigit);
       labelText.value=result;
    }

    firstdigit="";
    seconddigit="";
    operand="";

}