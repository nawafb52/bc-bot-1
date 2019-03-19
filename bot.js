const Discord = require('discord.js');  
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); 
client.user.setGame(`Clan End The Best`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


      
client.on('message', async msg => {
    if(msg.content.startsWith(prefix + 'bc')) {
      let roleW = msg.mentions.roles.first();
      let args2 = msg.content.split(" ").slice(2).join(" ");
       if(!msg.guild.members.get(msg.author.id).hasPermission('ADMINISTRATOR')) return msg.channel.send('Required Administrator Permission') 
       let role = msg.guild.roles.find(`name`, roleW.name);
       if(!role) return msg.reply(`Could't find \`${roleW.name}\` role.`).then( msgs => msgs.delete(3000)); 
       let nomsg = 0;
         msg.channel.send(`**- [ :mailbox_closed:  :: ${nomsg} ] ・عدد الرسائل المرسلة**`).then(msgs => {
         role.members.forEach(m =>{
        m.send(args2.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', msg.author.username)).then( () =>{
          nomsg++;
                  if(!msgs) return;
                  msgs.edit(`**- [ :mailbox_closed:  :: ${nomsg} ] ・عدد الرسائل المرسلة**`);
        }).catch(e => {
          nomsg++;
                  if(!msgs) return;
          msgs.edit(`**- [ :mailbox_closed:  :: ${nomsg} ] ・عدد الرسائل المرسلة**`);
        });
        }); 
      });
      }})


    





client.login(process.env.BOT_TOKEN);
