window.onload = function(){
      
    // Create a color selector section
  let colorchooser = document.createElement('div');
  colorchooser.style.height = '20px';
  colorchooser.style.width = '40px';
  colorchooser.style.backgroundColor = 'yellow';
  colorchooser.style.margin = 'auto';
  colorchooser.style.display = 'grid';
  colorchooser.style.gridTemplate = 'repeat(1, 1fr) / repeat(5, 1fr)';
  colorchooser.style.border = '5px dotted black';
  document.body.appendChild(colorchooser);

let ColorChoice = 'blue'; 
 
for(let j = 0; j < 5; j++) {
    let color = document.createElement('span');
    let possiblecolors = ['red', 'green', 'blue', 'black', 'pink'];
    color.style.border = '2px solid black';
    color.style.backgroundColor = possiblecolors[j];
    color.addEventListener('click', function(event){
      color.style.border = '3px dotted red';
       ColorChoice = possiblecolors[j];
    });
    colorchooser.appendChild(color);
  }
    
    
    
    // Create the thing to hold our 400 elements. 
  let container = document.getElementById("canvas");
  
  container.style.display = 'grid';
  container.style.gridTemplate = 'repeat(20, 8px) / repeat(20, 8px)'

  for(let i = 0; i < 400; i++) {
    let box = document.createElement('span');
    box.style.border = '1px solid black';
    box.style.backgroundColor = 'white';
    box.addEventListener('click', function(event){
        box.style.backgroundColor = ColorChoice;
      });
    container.appendChild(box);
  }

  }