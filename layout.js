const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const bdy = document.querySelector('body');
bodyClass.split(" ").forEach((cls) => bdy.classList.add(cls));

//For the body background of our HTML, the code above turns our string in line 1 into an array, the space in " " for each element in our string, creates a new element.


//The code below this line is for the calculator appearance
const calcBodyClass = "max-w-xlg rounded-2xl border-4 border-black overflow-hideen shadow-2xl bg-white bg-opacity-75 bg-gradient-to-tl from-gray-800 rounded-2xl flex";
const calcBody = document.querySelector('.calcBody');
calcBodyClass.split(" ").forEach((cls) => calcBody.classList.add(cls));

//output function
const outputClass = "flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-slate-900 shadow-inner text-green-200 font-semibold-mono px-2 border border-black hover:border-gray-500 rounded";
const output = document.querySelector(".output");
outputClass.split(" ").forEach((cls) => output.classList.add(cls));


const previousNumClass = "flex max-w-lg h-1/3 pb-5 pt-1 text-green-200 font-mono text-xs";
const previousNum = document.querySelector(".prevNum");
previousNumClass.split(" ").forEach((cls) => previousNum.classList.add(cls));


const currentNumClass = "flex max-w-lg h-2/3 pb-2 text-xl";
const currentNum = document.querySelector(".currNum");
currentNumClass.split(" ").forEach((cls) => currentNum.classList.add(cls));


const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    addClasses(btn);
});

function addClasses(button) {
    const btnNumberClass = "hover:bg-blue-500 border-blue-500 bg-sky-500 rounded-xl shadow-2xl";
    const btnClearClass = "hover:bg-yellow-500 border-yellow-500 bg-amber-500 rounded-xl shadow-2xl";
    const btnDelClass = "hover:bg-yellow-500 border-yellow-500 bg-amber-500 rounded-xl shadow-2xl";  
    const bntOpClass = "hover:bg-green-500 border-green-500 bg-green-700 rounded-xl shadow-2xl";
    const btnEquClass = "hover:bg-green-500 border-green-500 bg-green-700 rounded-xl shadow-2xl";
    const btnDecClass = "hover:bg-gray-400 border-gray-500 bg-slate-500 rounded-xl shadow-2xl";
    const btnExtClass = "hover:bg-red-500 border-red-500 bg-red-700 rounded-xl shadow-2xl";
    const btnNegClass = "hover:bg-red-500 border-red-500 bg-red-700 rounded-xl shadow-2xl";
    const btnPctClass = "hover:bg-gray-400 border-gray-500 bg-slate-500 rounded-xl shadow-2xl";

    if (button.classList.value === "number") {
        btnNumberClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "operator") {
        bntOpClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "clear") {
        btnClearClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "equals") {
        btnEquClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "decimal") {
        btnDecClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "squareroot") {
        btnExtClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "percent") {
        btnPctClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "negative") {
        btnNegClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "delete") {
        btnDelClass.split(" ").forEach((cls) => button.classList.add(cls));
    }

    
    const baseClass = "number flex w-12 h-12 justify-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl";
    baseClass.split(" ").forEach((cls) => button.classList.add(cls));
}





