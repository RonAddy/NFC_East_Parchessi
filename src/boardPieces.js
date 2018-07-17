const board = {
     output : document.getElementById('dice-Output'),
     dice : document.getElementById('dice'),
    
    //////////////////////////////////////
    // Top right
   //////////////////////////////////////
    
    // Pieces
     topRight_1 : document.getElementById("eagle_1"),
     topRight_2 : document.getElementById("eagle_2"),
     topRight_3 : document.getElementById("eagle_3"),
     topRight_4 : document.getElementById("eagle_4"),
    
    // Sideline
     topRight_sideline : document.getElementById("eagles"),
    
     // Home Square
     topRight_landing : document.getElementById('b1'),
    
    //////////////////////////////////////
    //Top left
    //////////////////////////////////////
  
    // Pieces
     topLeft_1 : document.getElementById('redskin_1'),
     topLeft_2 : document.getElementById("redskin_2"),
     topLeft_3: document.getElementById("redskin_3"),
     topLeft_4 : document.getElementById(" redskin_4"),
    
    // Sideline
     topLeft_sideline : document.getElementById("eagles"),
    
     // Home Square
     topLeft_landing : document.getElementById('redskins'),
    
     ///////////////////////////
     //Bottom Left
     //////////////////////////
     //Pieces
     dak : document.getElementById("cowboy_1"),
     eli : document.getElementById("giants_1"),
     redskins_square : document.getElementById("b12"),
     giants_square : document.getElementById("b24"),
     cowboys_square : document.getElementById("b35")

} 

export default board