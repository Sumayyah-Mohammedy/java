let count =0;
function increasecount(){
    count++;
     displaycount();
     checkCountVAlue();
}
function displaycount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountVAlue(){
    if(count === 10){
        alert("Your instagram has gained 10 followers");
    }else if(count === 50){
        alert("Congratulations! You are on a role.");
    }
}