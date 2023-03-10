function getBotResponse(input) {
    if(input == 001){
        return "What is your Problem?";
    }
    else if(input == "missing accessories"){
        return "Add More Description"
    } else if (input=="missing earphones"){
        return "OK. How Can We help you ?"
    } else if(input == "can i return?"){
        return "Enter Your Product Id"
    }
    else if(input == 002){
        return "Return Product or Cancel Request"
    }
    else if(input == "return product"){
        return "Return Order Placed Successfully!!!"
    }
    
    else if(input=="ThankYou"){
        window.onload=function(){
            location.href="https://amazon.com"
        }
        // window.postMessage("https://amazon.com");
    }
   
    else{
        return "Enter Proper Details.."
    }

    
}
    

    // Simple responses
    // if (input == "hello") {
    //     return "Hello there!";
    // } else if (input == "goodbye") {
    //     return "Talk to you later!";
    // } else {
    //     return "Try asking something else!";
    // }
