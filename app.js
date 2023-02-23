var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
// console.log(getli);
var getsortbtn = document.getElementById('sort');

// Sorting Method1
getsortbtn.addEventListener('click', getsortazm1);

function getsortazm1(){
    console.log('i am working');
}

// Input Filter
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

