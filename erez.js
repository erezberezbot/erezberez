const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Erez bot started');
});

let msgCount = 0;


client.on('message', msg => {

  let user = msg.author.username;

  if(user == 'Erez Berez')
    return false;
  /*if(msg.author.username == 'Pecan')
    msg.reply('תחזרי למטבח');*/

  let testChannel = msg.channel;

  	if(user == 'Electro Power') {
  		msg.reply('צא מהשרת ילד זין');
  		return false;
  	}


  if(msg.toString().includes('תודה מוריד'))
    msg.reply('יש קראק?');

  msgCount++;
  if(msgCount % 30 == 0)
    msg.reply(user == 'Pecan' ? ' תחזרי למטבח' :
    'עכשיו מור תתן ירידה מעפנה ותנעל את האשכול');

  if(msg.toString().includes('חמור'))
    testChannel.send(user == 'Pecan' ? `מור יזונה
https://www.youtube.com/watch?v=JSgeAFTwg0U`:
    `מור, קו-קו-קו-קו-קוראים לי מור
https://www.youtube.com/watch?v=JSgeAFTwg0U`);

  if(msg.toString().includes('חרמן')) {
    msg.reply('', {
      file: "https://cdn.discordapp.com/attachments/347742914127986699/349680339817463808/dCrb1JO.png"
    });
  }

  let random = Math.floor(Math.random() * 40);
  console.log('random:', random);
  if(random == 3) {
    msg.reply(user == 'Pecan' ? 'קחי את הקרשים שלך את לא עושה איתנו לג בעומר':
    'קח את הקרשים שלך אתה לא עושה איתנו לג בעומר');
  }

  if(msg.toString().includes('פמיניסט'))
    msg.reply('תחזרי למטבח');

  if(msg.toString().includes('ניקו ניקו ני'))
    msg.reply('https://www.youtube.com/watch?v=latV0YAR-0s');

  if(msg.toString().substr(0, 5) == 'ארז י')
    msg.reply(`אמאשך ${msg.toString().substr(5)}`);


  let msgs = msg.toString().split(' ');
  let curses =
  'זין&הומו&קוקסינל&בתול&ילד כספ&מוצץ זין&עומו&חמאר&ילד אנימה גיי&תתאבד'
  .split('&');

  function curse() {
    let curse = '';
    for(i = 0; i < 3; i++) {
      let rand = curses[Math.floor(Math.random() * curses.length)];
      if(curse.includes(rand)) {
        i--;
        continue;
      }
      curse += rand + ' ';
    }
    return curse;
  }

  if(msg.toString().startsWith('ארז תקלל את ')) {
    testChannel.send(`${msgs[3]} יא ${curse()}`);
  }
  
  if(msg.toString().startsWith('ארז תגיד ')) {
    testChannel.send(msg.toString().substr(9));
  }

  if(msg.toString() == 'ארז אתה אוהב אותי?')
    msg.reply(`לא כי אתה ${curse()}`);

  if(msg.toString().startsWith('ארז אתה אוהב את ')) {
    console.log(msgs[3]);
    msg.reply(`לא כי ${msgs[3]} ${curse()}`);
  }

  console.log('msgs:', msgCount);
});

client.login('MzQ5Njc0MzY1NzYxMDkzNjM0.DH47MA.MuODI2P8lJ2-JdXsbn3eJ0yk7w0');
