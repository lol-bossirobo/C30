class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  } 
  display () {
    var p =this.body.position;
    if(this.body.speed >= 15) {
      //this.body.speed = 0;
      World.remove(world,this.body);
      push();
      tint(255,this.visibility-=5);
      image(this.image,p.x,p.y,55,50);
      pop();
    } else {
      super.display()
    }
    
    console.log(this.body.speed);



  }

};