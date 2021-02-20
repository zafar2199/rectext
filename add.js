


document.getElementById('text-btn').addEventListener("click",() =>{
    decir(document.getElementById("text").value);
});

function decir(text){
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}























// let text = "What do you want to know?";
// speechSynthesis.getVoices().forEach(function(v){
//     if(/^en-/.test(v.lang) ){
//         let utterance = new SpeechSynthesisUtterance(text);
//         utterance.onstart = function(event) { // SpeechSynthesisEvent
//             console.dir(event.utterance.voice.name);
//         }
//         utterance.voice = v;
//         window.speechSynthesis.speak(utterance);
//     }
// });
