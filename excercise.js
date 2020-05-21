
function matchDressCode(top, bottom) {
    // Complete the code here. Return true/false
    // console.log(top.type)
    // console.log(bottom.color)

    if (top.type === 'tshirt' ){
      return false; 
    }
    if ((top.type === 'shirt') && (top.color !== 'white' || top.color !== 'black' || top.color !== 'blue')){
      return false;
    }     
    if (bottom.length === 'short'){
      return false;
    }


    if (top.color === bottom.color){
      return false;
    }
    
    if (bottom.color === 'black' ||  bottom.color ===  'blue'){
      return true;
    } else {
      return false;
    }
          console.log('hello')

return true;
   
}
