function star()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/W4ePtHhth/model.json",modelLoaded);
}
function modelLoaded()
{
    classifier.classify(gotResults);
    console.log("model loaded")
}
function gotResults(error,results)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        document.getElementById("voi").innerHTML= "Detected voice is of - "+results[0].label;
        p = Math.floor(results[0].confidence * 100);
        document.getElementById("dect").innerHTML = "Accuracy - "+p;
        a = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;
        c = Math.floor(Math.random()*255) + 1;
        document.getElementById("voi").style.color = 'rgba('+a+','+b+','+c+')';
        document.getElementById("dect").style.color = 'rgba('+a+','+b+','+c+')';
        if(results[0].label == "Background Noise")
        {
            document.getElementById("imag").src = "ear.png";
        }
        else if(results[0].label == "wolf")
        {
            document.getElementById("imag").src = "https://t4.ftcdn.net/jpg/03/26/63/53/360_F_326635341_X68XzOoky1QiXipWpovxPQHPbA91MCsj.jpg";
        }
        else if(results[0].label == "cow")
        {
            document.getElementById("imag").src = "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80";
        }
        else if(results[0].label == "dog")
        {
            document.getElementById("imag").src = "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80";
        }
        else if(results[0].label == "cat")
        {
            document.getElementById("imag").src = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg";
        }
    }
}