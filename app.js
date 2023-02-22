var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
// console.log(getli);

getinput.addEventListener('keyup', filter);

function filter(){
    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter);

    for(var x = 0 ; x < getli.length; x++){
        // console.log(getli[x].querySelector('a').innerText.toLowerCase());
        console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());
    }
}

