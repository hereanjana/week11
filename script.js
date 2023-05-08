document.getElementById("parent").innerHTML=("Something else");

document.getElementById("parent").style.cssText=("background-color:red; color:white; text-aligh:center");

document.getElementsByClassName("exercise")[0].innerHTML=("I am index 0.");

document.getElementsByTagName("h1")[0].innerHTML=("I am change");

document.querySelector("h1").style.cssText=("background-color:pink; color:blue;");

document.querySelector("#ram").style.cssText=("background-color:brown; color:white;");

document.querySelector("h2")[0].innerHTML=("Hope you change.");

// const change=document.querySelectorAll("h2"); 
// for (i=0; i<=change.length;i++){
//     change[i].innerHTML=("I AM SMART.");
// }

function myFunction(){
    const element=document.body;
    element.classList.toggle("dark-mode");
}




