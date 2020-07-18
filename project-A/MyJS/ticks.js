console.log('hello');
//restart button
var restart = document.querySelector("#butts");
//grabbing all squares
var squares = document.querySelectorAll('td');
//clear all squares
function clearboard(){
for (var i =0;i<squares.length;i++){
        squares[i].textContent = '';
    }
}

restart.addEventListener('click',clearboard);
    
//check thesquare mark()
function changeMarker(){
    if(this.textContent=== ''){
        this.textContent='X';
    }else if(this.textContent==='X'){
        this.textContent= "O";
    }else{
        this.textContent ="";
    }
}

for(var i=0; i<squares.length;i++){
    squares[i].addEventListener('click',changeMarker)
}

//event listeners