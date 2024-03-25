const btns=document.querySelectorAll('.input');
const backbtn=document.getElementById('backbtn');
const newgame=document.getElementById('newgame');
const title=document.getElementById('title');
let svg=document.querySelector('.svgicon path');
const btns2=document.getElementsByClassName('btn'); 
const resumebtn=document.getElementById('resumebtn');
const newgamebtn=document.getElementById('newgamebtn');
const optionsbtn=document.getElementById('optionsbtn');
const restart=document.getElementById('restartbtn');
const optcon=document.getElementById('optcon');
const checkbox=document.getElementById('box');
const checkbox2=document.getElementById('box2');
const darksvg=document.getElementById('dark');
const optback=document.getElementById('backbtn1');
const settings=document.getElementById('settings');
const section=document.getElementById('optcontainer');
const backgrounds=document.getElementsByClassName('background');
const lightsvg= document.getElementById('light');
const inputcontainer=document.getElementById('inputcontainer');
const playerinput=document.getElementById('playerinput');
const inputcontainer2=document.getElementById('inputcontainer2');
const playerinput2=document.getElementById('playerinput2');
const playername1=document.getElementById('player1name');
const playername2=document.getElementById('player2name');
const playerwins1=document.getElementById('player1wins');
const player1con=document.getElementById('malecon');
const player2con=document.getElementById('femalecon');
const playerwins2=document.getElementById('player2wins');
const player1option=document.getElementById('playeroptions');
const player2option=document.getElementById('playeroptions2');
const winlabel1=document.getElementById('winlabel1');
const winlabel2=document.getElementById('winlabel2');
const drawlabel1=document.getElementById('drawlabel');
let playerturn1=document.getElementById('player1turn');
let playerturn2=document.getElementById('player2turn');
let wins1=0;
let wins2=0;
let winstatus=false;
let drawstatus=false;
let robostatus=false;
let btnsound=new Audio("buttonclick.mp3");
let winsound=new Audio("winsound.mp3");
let drawsound=new Audio("drawsound.mp3");
let buttonclick=new Audio("turnsound.mp3");
let switchsound=new Audio("switch.mp3");
let iterations=0;
let flag=false;
let wins=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let [pos1,pos2,pos3]=[0,0,0];
/* let count=Math.floor(Math.random()*2);
let player1name=(count%2==0)?"X":"O";
let player2name=(count%2==0)?"O":"X"; */
let count=0;
let player1name='';
let player2name='';
checkbox.addEventListener('click',()=>{
    switchsound.play();
         if(checkbox.checked)
         {
            dark();
         }
         else{
            light();
         }
});
checkbox2.addEventListener('click',()=>{
    switchsound.play();
    iterations=0;
    flag=false;
    Array.from(btns).forEach(btn=>{
        btn.style.backgroundColor="white";
        btn.style.color="black";
        btn.textContent='';
        btn.style.transform="scale(1)";
    });
    drawlabel.style.display="none";
    winlabel1.style.display="none";
    player1con.style.display="none";
    player2con.style.display="none";
    player1con.classList.remove("shakeicon");
    player1con.classList.add("slideicon2");
    winlabel2.style.display="none";
    player2con.classList.remove("shakeicon");
    player2con.classList.add("slideicon2");
    playerturn1.style.display="none";
    playerturn2.style.display="none";
    playerwins1.textContent = `wins:0`;
    playerwins2.textContent = `wins:0`;
    wins1=0;
    wins2=0;
         if(checkbox2.checked)
         {
           robostatus=false;
           inputcontainer.style.display="flex"; 
         }
         else{
            playername1.textContent='';
            robostatus=true;
            inputcontainer.style.display="flex";
            document.getElementById("maleicon2").style.display="none";
            document.getElementById("femaleicon2").style.display="none";
            inputcontainer2.style.display="none";
            playerturn2.textContent="COMPUTER";

         }
});
optionsbtn.onclick=()=>{
    buttonclick.play();
    optcon.style.display="flex";
}
resumebtn.onclick=()=>{
    buttonclick.play();
    newgame.style.display="flex";
    if(playername1.textContent=="")
    {
       inputcontainer.style.display="flex";
    }
    else{
        if(playername2.textContent=="")
        {
            inputcontainer2.style.display="flex";
        }
    }
}
function clear(btns){
      btns.forEach((e)=>{
             e.textContent="";
      })
}
restart.onclick=()=>{
    flag=false;
    winstatus=false;
    drawstatus=false;
    iterations=0;
   count=Math.floor(Math.random()*2);
   player1name=(count%2==0)?"X":"O";
   player2name=(count%2==0)?"O":"X";
   buttonclick.play();
   clear(btns);
   winlabel1.style.display="none";
   winlabel2.style.display="none";
   drawlabel1.style.display="none";
   player2con.classList.remove("shakeicon");
   player2con.classList.add("slideicon1");
   player1con.classList.remove("shakeicon");
   player1con.classList.add("slideicon1");
   playerturn1.style.display="none";
   playerturn2.style.display="none";
   if(checkbox.checked)
   {
    btns[pos1].style.backgroundColor="white";
    btns[pos2].style.backgroundColor="white";
    btns[pos3].style.backgroundColor="white";
   }
   else{
    btns[pos1].style.backgroundColor="black";
    btns[pos2].style.backgroundColor="black";
    btns[pos3].style.backgroundColor="black";
   }
   btns[pos1].style.transform="scale(1,1)";
   btns[pos2].style.transform="scale(1,1)";
   btns[pos3].style.transform="scale(1,1)";
/*    Array.from(btns).forEach(btn=>{
    btn.style.transform="scale(1,1)";
});
Array.from(btns).forEach(btn=>{
    btn.classList.remove("winbtn");
}); */
}
newgamebtn.onclick=function(){
    flag=false;
    count=Math.floor(Math.random()*2);
    player1name=(count%2==0)?"X":"O";
    player2name=(count%2==0)?"O":"X";
    drawstatus=false;
    winstatus=false;
    clear(btns);
    playername1.textContent="";
    playername2.textContent="";
    buttonclick.play();
    player1con.style.display="none";
    player2con.style.display="none";
    newgame.style.display="flex";
    inputcontainer.style.display="flex"; 
    winlabel1.style.display="none";
    winlabel2.style.display="none";
    player1con.classList.remove("shakeicon");
    player1con.classList.add("slideicon1"); 
    player2con.classList.remove("shakeicon");
    player2con.classList.add("slideicon1");
    playerwins1.textContent=`wins:0`;
    playerwins2.textContent=`wins:0`;
    playerturn1.style.display="none";
    playerturn2.style.display="none"; 
    btns[pos1].style.transform="scale(1,1)";
    btns[pos2].style.transform="scale(1,1)";
    btns[pos3].style.transform="scale(1,1)";
    if(checkbox.checked)
    {
     btns[pos1].style.backgroundColor="white";
     btns[pos2].style.backgroundColor="white";
     btns[pos3].style.backgroundColor="white";
    }
    else{
     btns[pos1].style.backgroundColor="black";
     btns[pos2].style.backgroundColor="black";
     btns[pos3].style.backgroundColor="black";
    }

}
function optdisable(){
    buttonclick.play();
        optcon.style.display="none";
}
function disable(){
    if(playerinput.value!=""){
        if(player1option.value=="f")
        {
       document.getElementById("maleicon1").style.display="none";
       document.getElementById("femaleicon1").style.display="flex";
        }
        else{
            document.getElementById("maleicon1").style.display="flex";
            document.getElementById("femaleicon1").style.display="none";
        }
    playername1.textContent=playerinput.value;
    player1con.style.display="flex";
    inputcontainer.style.display="none";
    playerinput.value="";
    if(robostatus==false){
    inputcontainer2.style.display="flex";
    }
    else{
        player2con.style.display="flex";
        playername2.textContent="COMPUTER";
      document.getElementById("robosvg").style.display="flex";
    }
}
}
function disable2(){
    if(playerinput2.value!=""){
        document.getElementById("robosvg").style.display="none";
        if(player2option.value=="f")
        {

            document.getElementById("maleicon2").style.display="none";
            document.getElementById("femaleicon2").style.display="flex";
        }
        else{
            document.getElementById("maleicon2").style.display="flex";
            document.getElementById("femaleicon2").style.display="none";
        }
        playerturn2.textContent="YOUR TURN";
        player2con.style.display="flex";
        playername2.textContent=playerinput2.value;
        inputcontainer2.style.display="none";
        playerinput2.value="";
    }
}
backbtn.onclick=()=>{
    buttonclick.play();
    inputcontainer.style.display="none";
    inputcontainer2.style.display="none";
    newgame.style.display="none";
   /*  Array.from(btns).forEach(btn=>{
        btn.style.transform="scale(1,1)";
    });
    Array.from(btns).forEach(btn=>{
        btn.classList.remove("winbtn");
    }); */
}
function turndecide(){
    if(playername1.textContent !="" && playername2.textContent !="" && winstatus==false && drawstatus==false){
    if(iterations%2==0)
    {
        playerturn2.style.display="none";
        playerturn1.style.display="flex";
    }
    else{
        playerturn1.style.display="none";
        playerturn2.style.display="flex";
    }
}
    else{
        playerturn1.style.display="none";
        playerturn2.style.display="none";
    }
}
setInterval(turndecide,700);
Array.from(btns).forEach(element => {
    element.addEventListener("click",(e)=>{
        /* e.target.classList.add("activated"); */
        if(robostatus===false){
        if(e.target.textContent=="")
            {
            btnsound.play();
        if(count%2==0){
            e.target.textContent="X";
        }
        else{
            e.target.textContent='O';
        }
        count++;
        iterations++;
        setTimeout(checkwin,400);
    }
}
     else{
        flag=true;
       if(e.target.textContent=="")
            {
            btnsound.play();
            if(count%2==0)
            {
                e.target.textContent="X";   
            }
            else{
                e.target.textContent='O';
            }
            count++;
            iterations++;
            setTimeout(checkwin,400);
            setTimeout(roboturn,1000);
}}
    });
});
function roboturn(){
    if(flag==true && winstatus==false && drawstatus==false){
    let i=Math.floor(Math.random()*9);
    while(btns[i].textContent!="")
    {
        i=Math.floor(Math.random()*9);
    }
    if(count%2==0)
    {
        console.log("perfect");
        btns[i].textContent="X";
    }
    else{
        console.log("perfect2");
        btns[i].textContent="O";
    }
    count++;
    iterations++;
    setTimeout(checkwin,400);
    flag=false;
}}
/* setInterval(roboturn,2000); */
function dark(){
      lightsvg.style.display="none";
      darksvg.style.display="flex";
      title.style.color="white";
      settings.style.color="black";
      section.style.backgroundColor="rgb(190,188,188)";
      player2con.style.backgroundColor="rgba(255,255,255,0.77)";
      player1con.style.backgroundColor="rgba(255,255,255,0.77)";
      winlabel1.style.color="white";
      winlabel2.style.color="white";
      drawlabel.style.color="white";
      playerturn1.style.color="white";
      playerturn2.style.color="white";
      Array.from(document.getElementsByClassName("icons")).forEach(ele=>{
          ele.style.color="black";
      })
      Array.from(btns).forEach((e)=>{
        e.style.backgroundColor="white";
        e.style.color="black"
    })
      Array.from(btns2).forEach((e)=>{
       e.classList.remove("lightmode"); 
      });
      Array.from(backgrounds).forEach((e)=>{
        e.style.backgroundColor="rgb(38,38,38)";
        newgame.style.backgroundColor="rgb(28, 28, 28)";
      });
      document.body.style.backgroundColor="rgb(38, 38, 38)";
}
function light(){

    lightsvg.style.display="flex";
    darksvg.style.display="none";
    title.style.color="black";
    section.style.backgroundColor="rgb(38,38,38)";
    lightsvg.style.color="white";
    settings.style.color="white";
    player2con.style.backgroundColor="black";
    player1con.style.backgroundColor="black";
    winlabel1.style.color="black";
    winlabel2.style.color="black";
    drawlabel.style.color="black";
    playerturn1.style.color="black";
    playerturn2.style.color="black";
    Array.from(document.getElementsByClassName("icons")).forEach(ele=>{
        ele.style.color="white";
    })
    Array.from(btns).forEach((e)=>{
        e.style.backgroundColor="black";
        e.style.color="white";
    })
  Array.from(backgrounds).forEach((e)=>{
    e.style.backgroundColor="rgb(190,188,188)";
  });
    Array.from(btns2).forEach((e)=>{
        e.classList.add("lightmode"); 
       });
       document.body.style.backgroundColor="rgb(190, 188, 188)";
}
function checkwin(){
    for(let states of wins)
    { 
        [pos1, pos2, pos3]=states;
        if(btns[pos1].textContent!=='' && btns[pos1].textContent===btns[pos2].textContent && btns[pos1].textContent===btns[pos3].textContent)
        {
            playerturn1.style.display="none";
            playerturn2.style.display="none";
            winstatus=true;
            btns[pos1].style.transform="scale(1.1,1.1)";
            btns[pos2].style.transform="scale(1.1,1.1)";
            btns[pos3].style.transform="scale(1.1,1.1)";
            btns[pos1].style.backgroundColor="blue";
            btns[pos2].style.backgroundColor="blue";
            btns[pos3].style.backgroundColor="blue";
            winsound.play();
            /* setTimeout(()=>{
               btns[pos1].style.transform="scale(1,1)";
                btns[pos2].style.transform="scale(1,1)";
                btns[pos3].style.transform="scale(1,1)"; 
                clear(btns); 
                },1000); */
            iterations=0;
           if(btns[pos1].textContent===player1name)
           {
            wins1++;
            playerwins1.textContent=`wins:${wins1}`;
            winlabel1.style.display="flex";
            player1con.classList.add("shakeicon");
            player1con.classList.remove("slideicon1");

           }
          else{
            wins2++;
            playerwins2.textContent=`wins:${wins2}`;
            winlabel2.style.display="flex";
          player2con.classList.add("shakeicon");
          player2con.classList.remove("slideicon2");
           }
           count=Math.floor(Math.random()*2);
           player1name=(count%2==0)?"X":"O";
           player2name=(count%2==0)?"O":"X";
           return;
        }

    }
    if(iterations==9)
    {
        drawstatus=true;
        drawlabel.style.display="flex";
        drawsound.play();
       /*  window.alert("match draw"); */
        /* clear(btns); */
        iterations=0;
    }
    
}
