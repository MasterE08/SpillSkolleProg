let arrayWithSprites=[];
const body = document.getElementById("body");
const screenDiv = document.getElementById("Screen");

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

class Sprite
{
    constructor(Name, Image, x = 1, y = 1, index = 0, size = 100) 
        {
        this.name = Name;
        this.visibility = true;
        this.imageFoleder = Image;
        this.ImageIndex = index;
        this.size = size;
        this.x = x;
        this.y = y;
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
    }/*
    SetPosition()
    {
        this.image.style.left=`${x}px`;
        this.image.style.top=`${y}px`;
    }*/
    ChangrY(Movment)
    {
        this.y+=Movment;
    }
    CreateChild()
    {
        this.image = document.createElement("img");
        this.SetImageToChild();
        this.image.classList.add("Spirte")
        //this.SetPosition()
        document.body.appendChild(this.image)
    }
    SetImageToChild()
    {
        this.image.src=frogRun.images[frogRun.GetIndex()];
    }
}
const player = new Sprite("Player","Images\\NinjaFrog");
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

function event()
{
    if(event.key==='d')
    {
        frogRun.ChangeIndex();
        player.SetImageToChild();
        player.ChangeX()
    }
}


body.addEventListener("keydown",event);
const input = document.getElementById("myInput");
input.addEventListener("keydown", function(event) {
  if (event.key === "w") {
    console.log("The 'w' key was pressed.");
    console.log("Input value: " + input.value);
  }
});