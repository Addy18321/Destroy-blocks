class Bird extends BaseClass {
  constructor(x,y){
    var options ={
      'density': 100.0 ,
      'friction': -11 ,
      'restitution': 20 
    }
    super(x,y,100,50);
    //this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
