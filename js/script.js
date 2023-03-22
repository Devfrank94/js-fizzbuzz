//Dichiaro una variabile 
let counter= document.getElementById('counter-element');

// Apro il ciclo for dichiarando un contatore 
for(i=1; i<=100; i++){
    
    // Creo un div 
    let box= document.createElement('div');

    // Aggiungo stile (generico) classe al div creato
    box.classList.add('fm_box');
    
    
    // Associo al counter il box
    counter.append(box);





}