const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});   

client.on('ready', () => {
    client.user.setActivity("+invite || +support",{type: 'streaming'})
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField('» السيرفر :', `${message.guild.name}`)
           .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
         const AziRo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| جاري ارسال رسالتك ')
      .addBlankField(true)
      .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)
      .addField('📝| الرسالة ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});
    
client.on('message', message => {
    if (message.content.startsWith("+bot")) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setColor('RED')
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};
















client.on('message', message => {
     if (message.content === "+servers") {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM") 
  .addField("**سيرفرات يلي البوت موجود فيها: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});






client.on('message', message => {
  if (true) {
if (message.content === '+support') {
      message.author.send(' https://discord.gg/D6FHAtU|  رابط السيرفر ').catch(e => console.log(e.stack));
    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "+support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | 😉تــــم" , "||   شيك على الخاص ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if (true) {
if (message.content === '+invite') {
      message.author.send(' رابط البوت |  https://discordapp.com/api/oauth2/authorize?client_id=490091768860377088&permissions=2146958583&scope=bot p').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "+invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | 😉تــــم" , "||   شيك على الخاص ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


                            }
  
       
  

client.on('message', message => {
  if (message.content === 'help') {
   const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setFooter('By NAWAF')
       .setThumbnail(message.author.avatarURL)
       .setDescription(`

   **✨اوامر البوت✨**
+bc | لي عمل برودكاست
+invite | لي دعوة البوت الى سيرفرك
+support | لي دخول سيرفر السبورت
  __اوامر جديده بأذن الله__
 `)
 message.author.send(embed);
}  
});















bl

































client.login(process.env.BOT_TOKEN); 
