var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+62895345600004'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>0895345600004</label></div> </a> <a href='mailto:cs@hobi.my.id'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href=''> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/+62895345600004'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href=''> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href=''> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>.pdf</label></div><a href='assets/Bot&#39;s Resume.pdf' download='.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.542539287912!2d109.085069!3d0.278256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e2931c141bf067%3A0x9aa79a5d9ae0f784!2sHOBI!5e0!3m2!1sid!2sid!4v1695362894398!5m2!1sid!2sid' class='map'></iframe></div><label class='add'><address>4 'Sungai Pinyuh'<br>Kalimantan</address>";



var repliesfForHowAreYou = ["I'm fine.", "I'm good. And yourself?", "Not bad. How are you?", "I'm doing well, and you?", "Good, how about you?", "I'm great!", "Everything is fine when you are around.", "The best I can be. I hope you are at your best too.", "I'm still learning and eagerly waiting to grasp new things."];
var repliesForHello = ["Hello there!", "Hey!", "Hola!", "Nice to meet you!", "I'm here!", "Hey! How's it going?", "What's up?", "Hey! What a pleasant surprise!"];
var repliesForBye = ["Catch you on the flip side!", "Bye-bye, butterfly.", "See you soon!", "Catch you later!", "Bye for now", "See you on the internet!"];
var repliesfForLove = ["I get that a lot!", "You are day-dreaming again!", "I love You........Tube! LOL!", "Are you sure you aren't sick or something?", "I love you too!", "You are not my type!", "❤️"]
var repliesForCommandUnknown = ["Hey I couldn't catch you....<br>Send 'help' to know more about usage.", "I didn't get it.", "Please can you repeat it?", "I'm still learning...please use approriate keywords in your phrase.", "I'm still working on it.<br>"];
var repliesForVoiceAssistants = ["Yes! I know her.", "Of-cource! Who don't know her?", "I'm teching lessions from her!", "She is my BFF!", "My childhood friend!"];



function getRandom(arrayOfReplies) {
    var sizeOfArray = arrayOfReplies.length;
    return arrayOfReplies[Math.floor(Math.random() * sizeOfArray)];
}




function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hi kak 👋🏻,<br><br>Saat ini <span class='bold'><a class='alink'>hobi.my.id</a> Sedang Maintenance.</span><br><br>Harap bersabar ya kak atau dapat menghubungi kami di <span class='bold'>cs@hobi.my.id</span><br><br>Terima Kasih.<br><br>Ketik <span class='bold'>'bantuan'</span> untuk perintah<br>");
            }, 2000);
            break;
        case "bantuan":
            sendTextMessage("<span class='sk'>pilih kata kunci berikut ini kak<br>e.g<br><span class='bold'>'alamat'</span> - untuk mengetahui alamat server kami<br><span class='bold'>'clear'</span> - untuk membersihkan isi chat ini<br><span class='bold'>'tentang'</span> - untuk mengetahui tentang web Hobi<br><span class='bold'>'hubungi'</span> - untuk menghubungi kami</span>");
            break;
        case "alamat":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "tentang":
            sendTextMessage("🛠️💻 Silahkan kakak buka web ini ya<br><br>👨🏻‍💻 https://hobi.my.id/static/about <a class='alink' target='_blank' href='https://hobi.my.id/static/about'><span class='bold'>Hobi.My.ID</a> ❤️</span>");
            break;
        case "hubungi":
            sendTextMessage(contactString);
            break;
        case "new":
            sendTextMessage(addressString);
            break;
            default:
                ifElseThinkAndExecute(inputText.toLowerCase().trim());
                break;
    }

}



function ifElseThinkAndExecute(textString) {
    if (textString.includes("hii") || textString.includes("hi") || textString.includes("hello") || textString.includes("hola") || textString.includes("hey")) {
        // reply for hi message
        sendTextMessage(getRandom(repliesForHello));
    } else if (textString.includes("i need break") || textString.includes("leave me") || textString.includes("bye") || textString.includes("see you soon") || textString.includes("bye bye") || textString.includes("goodbye")) {
        // reply for bye message
        sendTextMessage(getRandom(repliesForBye));
    } else if (textString.includes("i love you") || textString.includes("love you") || textString.includes("you are hot") || textString.includes("i like you")) {
        // reply for i love you
        sendTextMessage(getRandom(repliesfForLove));
    } else if (textString.includes("how are you") || (textString.includes("hows going") || textString.includes("how its going" || textString.includes("how it's going") || textString.includes("what are you doing")))) {
        // reply for 'how are you' request
        sendTextMessage(getRandom(repliesfForHowAreYou));
    } else if (textString.includes("you know") && (textString.includes("bixby") || textString.includes("siri" || textString.includes("alexa") || textString.includes("cortana")))) {
        // reply for 'you know other chattingBots' request
        sendTextMessage(getRandom(repliesForVoiceAssistants));
    } else {
        setTimeout(() => {
            sendTextMessage(getRandom(repliesForCommandUnknown));
        }, 2000);
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
