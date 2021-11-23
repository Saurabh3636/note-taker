
let note=[]

let noteEl=document.getElementById("fnote")
let btnEl=document.getElementById("btn")
let abc=document.getElementById("noteid")
let clearln=document.getElementById("clear")
let windowln=document.getElementById("window")



let  saving = JSON.parse(localStorage.getItem("note"));
if(saving)
{
    note=saving;
    display();
}

btnEl.addEventListener("click", function(){
    if(noteEl.value==="")
    {
        return ;
    }
    note.push(noteEl.value);
       
           
           localStorage.setItem("note", JSON.stringify(note));
           noteEl.value="";
           display();

console.log(note)
})

function display(){
    let add="";
    for(let i=0; i<note.length;i++)
    {
        add += `<div><p class="listA">${note[i]}</p><button class="details" onclick="myFunction(${i}) ">details</button>
        <button class="x" onclick="fdelete(${i}) ">x</button>
        </div>`

    }

    abc.innerHTML=add;
}
clearln.addEventListener("click", function()
{
    localStorage.clear();
    note=[];

    display();
})

function myFunction(i){

    let a="";
    a =`<div class="modal-content">
    <button onclick="closeWindow()" class="">close</button>
    <p class="noteDetail">${note[i]}</p>
  </div>
`
    windowln.innerHTML=a;
    windowln.style.display = "block";
}
function closeWindow(){
    console.log("hello")
    windowln.style.display = "none";
}
function fdelete(i)
{
    note.splice(i,1);
    localStorage.setItem("note", JSON.stringify(note));
    display();

}

