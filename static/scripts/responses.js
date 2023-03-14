function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "hii") {
        return "A warm welcome!!...how can i help you??";
    }
    else if (input == "hi") {
        return "A warm welcome!!...how can i help you??";
    }
    else if (input == "Hi") {
        return "A warm welcome!!...how can i help you??";
    }
        else if (input == "Courses") {
            return "We are providing Networking, Software and Management!";
    } 
    else if (input == "How are you?") {
        return "Yup!! I'm Good";
}
else if (input == "how r u") {
    return "Yup!! I'm Good";
}
else if (input == "courses") {
    return "We are providing Networking, Software and Management!";
}
else if (input == "How about your day") {
    return "A little bit boring";
}
else if (input == "How abt ur day") {
    return "A little bit boring!!";
}
else if (input == "can you say something") {
    return "we are south India's no.1 training company and we provides you lot of courses related...both hardware and software";
}
else if (input == "can u say something") {
    return "we are south India's no.1 training company and we provides you lot of courses related...both hardware and software";
}
    else {
        return "Try asking something else!";
    }
}
