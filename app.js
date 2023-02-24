var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
var getsortbtn = document.getElementById('sort');

// Sorting Method1
// li -> text -> insert to array -> sort -> make ul blank -> recrete newli -> insert newli to ul
getsortbtn.addEventListener('click', getsortazm1);

function getsortazm1(){
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

