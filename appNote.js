


    //demmander à utilisateur de saisire
function setChanp(){
    matier = prompt("Saisissez vos Matiers ici !!")
     note1 = prompt("Saisissez vos notes !!")
     note2 = prompt("Saisissez vos notes !!")
     note3 = prompt("Saisissez vos notes !!")
     note4 = prompt("Saisissez vos notes !!")
     note5 = prompt("Saisissez vos notes !!")
     note6 = prompt("Saisissez vos notes !!")
     note7 = prompt("Saisissez vos notes !!")
     note8 = prompt("Saisissez vos notes !!")
     note9  = prompt("Saisissez vos notes !!")
     note10 = prompt("Saisissez vos notes !!")
     note11 = prompt("Saisissez vos notes !!")
     note12 = prompt("Saisissez vos notes !!")
     note13 = prompt("Saisissez vos notes !!")
     note14 = prompt("Saisissez vos notes !!")
     note15 = prompt("Saisissez vos notes !!")
     note16 = prompt("Saisissez vos notes !!")
     note17 = prompt("Saisissez vos notes !!")
     note18 = prompt("Saisissez vos notes !!")
           // premier traitement
        sommeNote = Number(note1) + Number(note2) +Number(note3)+Number(note4)+Number(note5) +Number(note6)+Number(note7)+Number(note8)+Number(note9)+Number(note10)+Number(note11)+Number(note12)+Number(note13)+Number(note14)+Number(note15)+Number(note16)+Number(note17)+Number(note18);
        moyene = sommeNote/matier;


        
      }
      
       //traitement  et affichage 
      
      function showNote(){
         if (moyene >=17) {
            document.getElementById("demo").innerHTML = " La totale de vos notes est de " + sommeNote + " donc vous avez une mation trée bien avec une moyene de " + moyene;
            
         }
         else
         if (moyene >= 14) {
            document.getElementById("demo").innerHTML = " La totale de vos notes est de " + sommeNote + " donc vous avez une mation bien avec une moyene de " + moyene;
        
         }
         else
          if(moyene >= 12){
            document.getElementById("demo").innerHTML = " La totale de vos notes est de " + sommeNote + " donc vous avez une mation assiz bien avec une moyene de " + moyene;

          }
          else
          if(moyene >= 10){
            document.getElementById("demo").innerHTML = " La totale de vos notes est de " + sommeNote + " donc vous avez une mation passable avec une moyene de " + moyene;

          }
          else{
            document.getElementById("demo").innerHTML = " La totale de vos notes est de " + sommeNote + " donc vous avez une redouble avec une moyene de " + moyene;

          }
         
      }
           //Supprime l'affichage
         function ofNotes(){
            if (moyene >=17) {
               document.getElementById("demo").innerHTML = " les notes et moyene sont en masquée";
               
            }
            else
            if (moyene >= 14) {
               document.getElementById("demo").innerHTML = " les notes et moyene sont en masquée ";
         
            }
            else
            if(moyene >= 12){
               document.getElementById("demo").innerHTML = " les notes et moyene sont en masquée " ;

            }
            else
            if(moyene >= 10){
               document.getElementById("demo").innerHTML = " les notes et moyene sont en masquée " ;

            }
            else{
               document.getElementById("demo").innerHTML = " les notes et moyene sont en masquée ";

            }
   
   
   }