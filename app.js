const weight=document.querySelector("#weight");
const height=document.querySelector("#height");
const calculate=document.querySelector("#calculate");
const reset=document.querySelector("#reset");
const BMI=document.querySelector("#BMI");


// function to calculateBMI
const calculateBMI=(w,h)=>
{
    const Bmi=(w/((h/100)*(h/100)));
    BMI.innerHTML=`BMI: ${Bmi}`;
}

// reset function 
const Reset=()=>
{
    weight.value="0 kg";
    height.value="0 cm";
}

reset.addEventListener("click",Reset);

calculate.addEventListener("click",()=>
{
    const w=weight.value;
    const h=height.value;

    calculateBMI(w,h);
});




