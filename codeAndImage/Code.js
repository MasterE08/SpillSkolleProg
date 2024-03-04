//Varibles 🪺
let arrayWithSprites=[];
const body = document.getElementById("body");
const screenDiv = document.getElementById("Screen");
const outp= document.getElementById("out");
const scratchScreenHeightPixels=360;
const scratchScreenWidthPixels=480;
//Controls

//Key 🔑
class Key
{
    constructor()
    {
        this.up= false
        this.down= false
        this.left= false
        this.right= false
    }
}
//Screen 🖥️
class Screen 
{
    constructor()
    {
        this.vekst=480/360;
        this.isHeightWidthCorect;
        this.CheckWindowProportions();
        this.CreateScreen();
        
    }
    CheckWindowProportions()
    {
        if(window.innerWidth<=window.innerHeight*this.vekst)
        {
            this.isHeightWidthCorect=true;
        }
        else
        {
            this.isHeightWidthCorect=false;
        }
    }
    CreateScreen()
    {
        this.ReSizeScreen();
        screenDiv.style.position="absolute"
        screenDiv.style.border="solid";
        screenDiv.style.border="black";
        screenDiv.style.border="1px solid black";
        screenDiv.style.left="50%"
        screenDiv.style.transform="translate(-50%, 0)"
    }
    ReSizeScreen()
    {
        if(this.isHeightWidthCorect)
        {
            screenDiv.style.width=`${window.innerWidth-window.innerWidth/100*25}px`;
            screenDiv.style.height=`${(window.innerWidth-window.innerWidth/100*25)/this.vekst}px`;
        }
        else
        {
            screenDiv.style.width=`${(window.innerHeight-window.innerHeight/100*25)*this.vekst}px`;
            screenDiv.style.height=`${window.innerHeight-window.innerHeight/100*25}px`;
        }
    }

}

//Images 🖼️
class imageList
{
    #imageIndex
    constructor(arrayWithImages)
    {
        this.images=arrayWithImages;
        this.#imageIndex=0;
    }
    GetIndex()
    {
        return this.#imageIndex;
    }
    ChangeIndex(x=1)
    {
        this.#imageIndex+=x;
        if (this.#imageIndex>=this.images.length)
        {
            this.#imageIndex=0
        }
    }
}




//  Sprite 🤖
class Sprite
{
    constructor(Name, Image, WidthAndHeight, pos=[100,100], index = 0, size = 100) 
        {
        this.name = Name;
        this.visibility = true;
        this.imageFoleder = Image;
        this.ImageIndex = index;
        this.size = size;
        this.heightAndWidth=WidthAndHeight;
        this.x = pos[0];
        this.y = pos[1];
        arrayWithSprites.push(this);
        }
    Hide(){
        this.visibility = false;
    }
    Show()
    {
        this.visibility = true;
    }
    ChangeX(movment = 10)
    {
        this.x+=movment;
        this.SetPosition();
    }
    SetPosition()
    {
        this.image.style.left=`${this.ConvertPixelToPrecentagesX(this.x)}%`;
        this.image.style.top=`${this.ConvertPixelToPrecentagesY(this.y)}%`;
    }
    ConvertPixelToPrecentagesX(pixel)
    {
        return 100/scratchScreenWidthPixels*pixel;
    }
    ConvertPixelToPrecentagesY(pixel)
    {
        return 100/scratchScreenHeightPixels*pixel;
    }
    ChangeY(Movment)
    {
        this.y+=Movment;
        this.SetPosition();
    }
    CreateChild()
    {
        this.image = document.createElement("img");
        this.SetImageToChild();
        this.image.style.position="relative"
        this.image.classList.add("Spirte")
        screenDiv.appendChild(this.image)
        this.SetSize();
        this.SetPosition()

    }
    SetSize()
    {
        this.image.style.width=`${this.ConvertPixelToPrecentagesX(this.heightAndWidth[1]*(this.size/100))}%`;
        this.image.style.height=`${this.ConvertPixelToPrecentagesY(this.heightAndWidth[0]*(this.size/100))}%`;
    }
    SetImageToChild()
    {
        this.image.src=frogRun.images[frogRun.GetIndex()];
    }
}

class background
{
    constructor()
    {
        
    }
}
class Level
{

}
class Tile extends Sprite
{
    constructor()
    {
  
    }
}
//Player 🎮
class Player extends Sprite
{
    Images(Images)
    {
        this
    }   
}


// Create objects
let key = new Key();
const screen = new Screen();
const player = new Player("Player", "Images\\NinjaFrog", [32,32], [100,100]);
const frogRun = new imageList([
    "Images\\NinjaFrog\\row-1-column-1.png", 
    "Images\\NinjaFrog\\row-1-column-2.png",
    "Images\\NinjaFrog\\row-1-column-3.png", 
    "Images\\NinjaFrog\\row-1-column-4.png",  
    "Images\\NinjaFrog\\row-1-column-5.png",
    "Images\\NinjaFrog\\row-1-column-6.png",
    "Images\\NinjaFrog\\row-1-column-7.png",
    "Images\\NinjaFrog\\row-1-column-8.png",
    "Images\\NinjaFrog\\row-1-column-9.png",
    "Images\\NinjaFrog\\row-1-column-10.png",
    "Images\\NinjaFrog\\row-1-column-11.png",
    "Images\\NinjaFrog\\row-1-column-12.png"])

player.CreateChild();



let int=0;



body.addEventListener("keydown", function(e) {
  if (e.key === 'd') 
  {
    key.right=true;

  }
  if (e.key==='a')
  {
    key.left=true;
  }
});
body.addEventListener("keyup",function(e)
{
    if(e.key==='d')
    {
        key.right=false;
    }
    if(e.key==='a')
    {
        key.left=false;
    }
})
body.addEventListener("keydown",function(e)
{

});
body.addEventListener("keydown",function(e)
{
    if (e.key==='k')
    {
        player.SetImageToChild();
        player.ChangeY(-10)
    }
});

//loop ♻️
const walkingLoop= ()=>
{
    if(key.right){    
        frogRun.ChangeIndex();
        player.SetImageToChild();
        player.ChangeX(3)
    }
    if(key.left){    
        frogRun.ChangeIndex();
        player.SetImageToChild();
        player.ChangeX(-3)
    }
    

}
setInterval(walkingLoop,15)
