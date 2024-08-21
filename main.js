function preload() {
}

function setup() {
  createCanvas(1380, 500, 780, 500);

  circle(50, 50, 50);

  circle(1320, 50, 50);

  circle(50, 450, 50);

  circle(1320, 450, 50);

  rect(70, 35, 1235, 35);

  rect(35, 65, 35, 370);

  rect(1300, 65, 35, 370);

  rect(70, 435, 1235, 35)
}

function draw() {
   image(video, 0, 0 ,640 ,480);
   tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}