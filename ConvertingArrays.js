//Task 1: Decode the Following Reversed Message

let message_1 = `!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC`;

let message_2 = `!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB`;

let message_3 = `!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI.lanoisseforp a ekil leef ot evah t'nod uoY`;

let message_4 = `.rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ`;

let all_reversed_messages =[message_1,message_2,message_3,message_4];
let correct_messages = [];
for (reversed_message_arr of all_reversed_messages)
    {
        let content = reversed_message_arr.split(" ");
        let decoded_message = [];
        for (word of content){
            let new_word = word.split('').reverse().join('');
            decoded_message.push(new_word);
        }
        
       correct_messages.push(decoded_message.reverse().join(' '));
        
    }

for (message of correct_messages)
    {
        console.log(message);
    }


// Task 2
let msg_1 = "All work and no play makes Jack a dull boy";
let msg_2 = "They may take our lives, but they’ll never take our freedom!";
let msg_3 = "Success consists of going from failure to failure without loss of enthusiasm.";
let msg_4 = "It does not matter how slowly you go so long as you do not stop.";

let all_messages =[msg_1,msg_2,msg_3,msg_4];
let reversed_messages = [];
for (msg of all_messages)
    {
        let reversed_msg = msg.split('').reverse().join('');
        reversed_messages.push(reversed_msg);
    }
for (reversedMsg of reversed_messages)
    {
        console.log(reversedMsg);
    }

/*
OUTPUT

Coding may seem hard at first, but if you persist, you'll get it! You can also use coding skills in a variety of settings! Keep going, and you'll be okay!
But code writing will feel hard at first. Take time, you‘ll get better with practice!
You don't have to feel like a professional.If you have trouble, you are no different from other people!
Just start today. Don't wait for the perfect moment. If you can only write small programs, they still matter.
yob llud a kcaJ sekam yalp on dna krow llA
!modeerf ruo ekat reven ll’yeht tub ,sevil ruo ekat yam yehT
.msaisuhtne fo ssol tuohtiw eruliaf ot eruliaf morf gniog fo stsisnoc sseccuS
.pots ton od uoy sa gnol os og uoy ylwols woh rettam ton seod tI

*/