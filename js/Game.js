class Game
{
    constructor()
    {

    }

    getState()
    {
        var gameStateRef = db.ref("gameState");
        gameStateRef.on("value" , function(data){gameState = data.val()});
    }

    updateState(state)
    {
        db.ref("/").update({gameState:state});
    }

    start()
    {
        if(gameState===0)
        {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        player1=createSprite(250,530);
        player1.addImage(player1Image);
        player1.scale = 0.3

        player2 = createSprite(750,530);
        player2.addImage(player2Image);
        player2.scale = 0.4

        players=[player1,player2];
    }

    play()
    {
        form.hideForm();
        text("Game Start",500,200);

        player.getPlayerInfo();

        if(allPlayers !== undefined)
        {
            var index = 0; 
            var x;
            var y = 530;
            for(var plr in allPlayers) 
            {
                index = index + 1;
                x = allPlayers[plr].positionX; 
                
                players[index - 1].x = x; 
                players[index - 1].y = y; 
            }
        }
        if(keyIsDown(LEFT_ARROW))
        {
            player.positionX = player.positionX - 10;  
            player.updatePlayerInfo(); 
        }
        if(keyIsDown(RIGHT_ARROW))
        {
            player.positionX = player.positionX + 10;
            player.updatePlayerInfo();    
        }
        drawSprites();
    }

}