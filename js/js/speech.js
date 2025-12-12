function speak(text){
    if('speechSynthesis' in window){
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    }
}
