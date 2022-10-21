let allDays = [
  { day: "mon", amount: 17.45 },
  { day: "tue", amount: 34.91 },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];



let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

let cHeight = canvas.height;
let cWidth = canvas.width;
let marLeft = 60;
let ctxWidth = 40;
let padding = 10;
let paddleft = 0;
let paddinleft = 0;
let addinleft = 0;

ctx.fillStyle = " hsl(10, 79%, 65%)";
for(let i = 0;i < allDays.length;i++){
    if(allDays[i].amount > 50){
        ctx.fillStyle = " hsl(186, 34%, 60%)";
    }else{
        ctx.fillStyle = " hsl(10, 79%, 65%)";
    }
    ctx.fillRect(paddleft, cHeight - allDays[i].amount * 3 - 30,ctxWidth,allDays[i].amount * 3);
    paddleft += marLeft;
};

ctx.fillStyle = "hsl(28, 10%, 53%)";
ctx.font = "18px DM Sans";
for(let i = 0;i < allDays.length;i++){
    ctx.fillText(allDays[i].day,padding,cHeight);
    padding += marLeft;
};
ctx.fillStyle = "hsl(25, 47%, 15%)";
for(let i = 0;i < allDays.length;i++){
    ctx.fillRect(paddinleft,cHeight - (allDays[i].amount * 3) - 60,ctxWidth,25);
    paddinleft += marLeft;
};

ctx.fillStyle = "hsl(33, 100%, 98%)";
ctx.font = "12px DM Sans";
for(let i = 0;i < allDays.length;i++){
    ctx.fillText(`$${allDays[i].amount}`,addinleft + 3,cHeight - (allDays[i].amount * 3) - 45);
    addinleft += marLeft;
};
