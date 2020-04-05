let friends = ["STANLEY","JENNY","JUSTIN","NEAL","CHRIS"];
//2 for loops if else statement 



    function bars(){
    let letters;
    let lettersLeft;


for(i=0, c=0;i==0;++c){
    if(c==friends.length){
        break;
        }
        else
        {
            console.log(friends[c] + ":");
            }

for(i = 99;  i>=1 ; --i){
    

        if(i==1){

        letters = "line of code";
        lettersLeft = "no more lines of code in the file " 
        console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[c] + " stikes one out, clears it all out, " + lettersLeft);
     
    }else{
        
      
        letters = " lines of code";
        lettersLeft = i - 1 + " lines of code in the file";
        console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[c] + " stikes one out, clears it all out, " + lettersLeft);

         }
             }


        }        
    

    }
 

 
 bars();