const main=document.getElementById('main');
const addUserBtn=document.getElementById('add_user');
const doubleBtn=document.getElementById('double');
const showMillionaries=document.getElementById('show_millionare');
console.log(showMillionaries);
const sortBTn=document.getElementById('sort');
const calculateWealthBtn=document.getElementById('calculate_wealth');


let data=[];
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();


async function getRandomUser(){
    console.log("khatushyam");
    const res=await fetch('https://randomuser.me/api');
    const data=await res.json();
    const user=data.results[0];
    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random()*1000000)
    };
    addData(newUser);
}
// Add new obj to data arr
function addData(obj){
    data.push(obj);
    updateDOM();
}
// update DOM
function updateDOM(providedData=data){
    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>';
    providedData.forEach(item=>{
        const element=document.createElement('div');
        element.classList.add('person');
        element.innerHTML=`<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}
// Format money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
//   Double Money of user
function doubleMoney(){
    console.log("Bholenath");
    data= data.map((item)=>{
        return {...item,money:item.money*2};
    })
    updateDOM();
}
// sort Method
function sortByRichest(){
    data=data.sort((a,b)=>{
        return b.money-a.money;
    })
    updateDOM();

}
// filter method
function showMillionaries1(){
   data=data.filter(user=>user.money>400000);
   updateDOM();
}
// reduce Method
function wealthCalculate(){
   const wealth= data.reduce((acc,currentValue)=>{
        return acc+currentValue.money;
    },0);
    console.log(wealth);
    const wealthEl=document.createElement('div');
    wealthEl.innerHTML=`<h2>Total Wealth :<strong>${wealth}</strong></h2>`;
    main.appendChild(wealthEl);
    
}
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBTn.addEventListener('click',sortByRichest);
showMillionaries.addEventListener('click',showMillionaries1);
calculateWealthBtn.addEventListener('click',wealthCalculate);
