class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    Tank1 = createSprite(100,200);
    Tank1.addImage("Tank1",Tank1_img);
    Tank2 = createSprite(300,200);
    Tank2.addImage("Tank2",Tank2_img);
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      //index of the array
      var index =0;

      //x and y position of the cars
      var x =200;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = 200 + (index*200) + allPlayers[plr].xPos;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        Tanks[index-1].x = x;
        Tanks[index-1].y = y;

        textSize(20);
        text(allPlayers[plr].name, x, y+75);

        if (index === player.index){
          Tanks[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    if(player.index !== null){
      if(keyIsDown(38)){
        player.yPos = player.yPos - 1;
        player.update();
      }
      if(keyIsDown(40)){
        player.yPos = player.yPos + 1;
        player.update();
      }
      if(keyIsDown(37)){
        player.xPos = player.xPos - 1;
        player.update();
      }
      if(keyIsDown(39)){
        player.xPos =player.xPos + 1;
      }
    }   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
