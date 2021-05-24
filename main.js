function preload(){
    sunglass_both_eye = loadImage("Sunglass.png");
    }
    function setup(){
        canvas = createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300,300);
        video.hide();
    
        poseNet = ml5.poseNet(video,modelLoaded);
        poseNet.on("pose",gotPoses);
    }
    function modelLoaded(){
        console.log("Posenet is Initialized")
    }
    function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftEyeX = results[0].pose.leftEye.x-55;
        leftEyeY = results[0].pose.leftEye.y-15;
        console.log("left eye x = " + leftEyeX);
        console.log("left eye y = " + leftEyeY);
    }
    }
    function draw(){
    image(video,0,0,300,300);
    image(sunglass_both_eye, leftEyeX, leftEyeY, 75, 40);
    }
    function take_snapshot(){
        save("myFilterImage.png");
    }
    leftEyeX = 0;
    leftEyeY = 0;