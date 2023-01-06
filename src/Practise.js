
let Lab1=90;
let Lab2=180;
let Lab3=700
let count=0;
function logLabTime()
{
    let sumofLabs=Lab1+Lab2+Lab3;
    console.log(sumofLabs);
    IncrementCount()
    save()
}
logLabTime()

function IncrementCount()
{
    
    count=count+100;
    console.log(count);
}
function save()
{

console.log(count+200)
}
function  Save1()
{
    return(
        <div>
            <p>I am here on practise </p>
            <button id="save-btn"onClick={logLabTime()}>SAVE</button>
        </div>
    )
}
export default Save1
