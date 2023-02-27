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
        // console.log(getli[x].querySelector('a').innerText.toLowerCase());
        // console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());

        var getavalue = getli[x].querySelector('a').innerText.toLowerCase();

        if(getavalue.indexOf(inputfilter) > -1){
            getli[x].style.display = '';
        }else{
            getli[x].style.display = 'none';
        }
    }
}



// create array -> li -> text -> insert to array -> sort -> make ul blank -> create newli -> insert newli to ul
getsortazm1btn.addEventListener('click', sortazm1);
getsortzam1btn.addEventListener('click', sortzam1);
getsortazm2btn.addEventListener('click', sortazm2);

// Method2
function sortazm2(){
    console.log('i am working');

    var shouldswitch = true;
    var switching = true;
}

// Method1
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
    


