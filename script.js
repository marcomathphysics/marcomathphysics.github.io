var List=["","Te","amo","mucho","muucho"]
let  count=0;
function changeMe() {
    var div = document.getElementById('divd').innerHTML;
    count++;
    if (count === 4) {
       count=1;
        document.getElementById('divd').innerHTML = List[count];
    } else {
          document.getElementById('divd').innerHTML = List[count];
    }
 
    
}
