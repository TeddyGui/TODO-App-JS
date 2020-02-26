

let submit = document.getElementById('button-addon2');
submit.addEventListener('click', newElement);



function newElement() {
    var inputValue= document.querySelector('.form-control');
    var h1 = document.createElement('h1'); // <h1></h1>
    var section = document.createElement('div');
    var t = document.createTextNode(inputValue.value);
    var complete = document.createElement('button');
    var remove = document.createElement('button')

    h1.appendChild(t); // h1 text h1
    //h1.setAttribute("class" ,"my-title") // <h1 class="my-title">text</h1>
    section.appendChild(h1);   
     document.body.appendChild(section);

   
    
    if (inputValue.value === '') {
     return  alert("You must write something!");
    }
    complete.innerHTML='Complete'
    remove.innerHTML='Delete'
section.appendChild(complete);


  complete.addEventListener("click",function(event){
  var completed = event.target;

  if(complete.innerHTML === "undo") {
    h1.style.cssText="text-decoration: none"
    complete.innerHTML="complete";}
    else {

      h1.style.cssText="text-decoration: line-through"
      complete.innerHTML="undo";  
    }
  })

  section.appendChild(remove)


 remove.addEventListener("click",function(event){
 var removed = event.target;

 removed.parentElement.remove();
 

 })

 inputValue.value =""
  }

 
  
