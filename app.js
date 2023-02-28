var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
// var getsortbtn = document.getElementById('sort');

var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');

// Input Filter
// keyup -> tolowercase -> getvalue -> striped -> input in style
getinput.addEventListener('keyup', filter);

function filter(){
    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter);

    for(var x = 0 ; x < getli.length; x++){
        // console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());
        var getavalue = getli[x].querySelector('a').innerText.toLowerCase();
        if(getavalue.indexOf(inputfilter) > -1){
            getli[x].style.display = '';
        }else{
            getli[x].style.display = 'none';
        }
    }
}
// ---------------------------------

getsortazm1btn.addEventListener('click', sortazm1);
getsortzam1btn.addEventListener('click', sortzam1);
getsortazm2btn.addEventListener('click', sortazm2);
getsortzam2btn.addEventListener('click', sortzam2);

// Method1
// create array -> li -> text -> insert to array -> sort -> make ul blank -> create newli -> insert newli to ul
function sortazm1(){
    var lis = [];
    for(var i = 0; i < getli.length; i++){
        // console.log(getli[i].textContent);
        lis.push(getli[i].textContent);
    }
    // console.log(lis.sort()); 
    // console.log(lis.sort().reverse());

    var azlis = lis.sort();
    getul.innerHTML = '';

    azlis.forEach(function(azli){
        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = `javascript:void(0);`;
        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        getul.appendChild(newli);
        // console.log(newli);
    })
    
    }

function sortzam1(){
    var lis= [];
    for(var i = 0; i < getli.length; i++){
        console.log(getli[i].textContent)
        lis.push(getli[i].textContent);
    }

    var zalis = lis.sort().reverse();
    getul.innerHTML="";

    zalis.forEach(function(zali){
        var newli = document.createElement('li');
        var newlink = document.createElement('a');
        newlink.href= `'javascript:void(0);'`;
        newlink.appendChild(document.createTextNode(zali));
        newli.appendChild(newlink);
        getul.appendChild(newli);
        console.log(getul);
    })
}
    
// Method2
// switching -> switching=false -> shouldswitch=false -> for loop(compare) -> shouldswitch=true  -> getli(changeplace) up&down -> switching=true
function sortazm2(){
    var shouldswitch = true; // asking should change places?
    var switching = true;  // changing place

    // can loop limitless so we use
    do{
        switching = false;

        var i;
        // we sub 1 from getli.length bez can occur error in the end
        for(i = 0; i < getli.length-1; i++ ){
            shouldswitch = false;
            // we compare existing index and next index number
            if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
            shouldswitch = true;
            break;
            }
        }

        if(shouldswitch){
            // parentElement.insertBefore(new,existing), parentNode.insertBefore(new,existing)
            getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
            switching = true;
        }
    }while(switching);
}


function sortzam2(){
    var shouldswitch = true;
    var switching = true;

    do{
        switching = false;
        var i;
        for(i = 0; i < getli.length-1; i++){
            shouldswitch = false;
           if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
           }
        }

        if(shouldswitch){
            getli[i].parentNode.insertBefore(getli[i+1],getli[i]);
            switching = true;
        }
    }while(switching);
}
// firstly subtract value from array
// console.log(getli[0].textContent.toLowerCase());
// console.log(getli[1].textContent.toLowerCase());

//                 // Wint Thanda Moe         Aye Thandar Myint
// if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
//     console.log('true'); // W > A
// }else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
//     console.log('equal');
// }else{
//     console.log('false');
// }

