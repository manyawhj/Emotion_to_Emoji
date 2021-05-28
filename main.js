Webcam.set({
height:300,
width:350,
image_format:"png",
png_quality:90
});

cam=document.getElementById("camera");
Webcam.attach("#camera");
    
function take_snapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML="<img id='snapshot' src='"+data_uri+"'>";
    })
}

console.log("Ml5 Version:",ml5.version);
classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eAil1O-MJ/model.json",modelLoaded)

 function modelLoaded(){
    console.log("Model Loaded")
 };

 function speak(){

var Synth= window.speechSynthesis;
speak_data_1="The first prediction is"+Prediction_1;
speak_data_2="The second prediction is"+Prediction_2;
var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
Synth.speak(utterthis)
    
 }

 function check(){
     img=document.getElementById("snapshot");
     classify.classify(img , gotresult);
 }

function gotresult(error, result){
    
    if(error){
    console.error(error);
    } else {
        console.log(result);
        document.getElementById("resul_emotion_name").innerHTML=result[0].label;
        document.getElementById("resul_emotion_name_2").innerHTML=result[1].label;
        Prediction_1=result[0].label;
        Prediction_2=result[1].label;
        speak();

        if (result[0].label=="SAD"){
            document.getElementById("upadate_emoji").innerHTML="&#128577;";
        }

        if (result[0].label=="HAPPY"){
            document.getElementById("upadate_emoji").innerHTML="&#128522;";
        }

        if (result[0].label=="CRYING"){
            document.getElementById("upadate_emoji").innerHTML="&#128557;";
        }

        if (result[0].label=="ANGRY"){
            document.getElementById("upadate_emoji").innerHTML="&#128545;";
        }

        if (result[0].label=="FEAR"){
            document.getElementById("upadate_emoji").innerHTML="&#128560;";
        }

        if (result[0].label=="DISGUSTED"){
            document.getElementById("upadate_emoji").innerHTML="&#129314;";
        }

        if (result[1].label=="DISGUSTED"){
            document.getElementById("upadate_emoji_2").innerHTML="&#129314;";
        }

        if (result[1].label=="FEAR"){
            document.getElementById("upadate_emoji_2").innerHTML="&#128560;";
        }

        if (result[1].label=="ANGRY"){
            document.getElementById("upadate_emoji_2").innerHTML="&#128545;";
        }

        if (result[1].label=="CRYING"){
            document.getElementById("upadate_emoji_2").innerHTML="&#128557;";
        }

        if (result[1].label=="SAD"){
            document.getElementById("upadate_emoji_2").innerHTML="&#128577;";
        }

        if (result[1].label=="HAPPY"){
            document.getElementById("upadate_emoji_2").innerHTML="&#128522;";
        }
    }
}