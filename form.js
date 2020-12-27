class Form{

    constructor(){
        this.title= createElement("h1");
        this.input= createInput("name");
        this.button= createButton("play");
        this.greeting= createElement("h3");

        this.resetButton = createButton("reset");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }


    display(){
        
       this.title.html("CAR RACING GAME");
        this.title.position(width/2-100,100);
        this.input.position(width/2-100,250);
       this.resetButton.position(width-300, 40);
        this.button.position(width/2-100,350);
       
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount+=1;
            player.index= playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello! "+ player.name);
            this.greeting.position(width/2-100,500);
        });

        this.resetButton.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        }

        )

    }


}



