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

