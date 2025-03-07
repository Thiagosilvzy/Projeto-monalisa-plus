function setup() {
    createCanvas(600, 600);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("lightgreen");
    fill("red");
    circle(200, 200, 300); // rosto
    fill("white");
    circle(150, 170, 60); // olho esquerdo
    circle(250, 150, 60); // olho direito
    line(150, 270, 220, 235); // boca
    fill("yellow");
    triangle(200, 180, 10, 220, 220, 220); // nariz
    line(123, 15, 178, 113); // sobrancelha esquerda
    line(225, 116, 279, 16); // sobrancelha direita
    // circle(120,120,10); // pupila esquerda
    //circle(250,150,10); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 10); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 10); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  