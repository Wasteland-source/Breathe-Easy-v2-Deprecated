//Admin commands for Breathe Easy

module.exports = function(adCommand, botBE, token, tag, guild, guildCount, guildNames, guildIDs, userCount, msg, channel) {
  const time = new Date();
  try {
    const discord = require('discord.js');
    //importing discod.js

    switch (adCommand) { //Runs through code based on the keyword inputted
      case 'reload':
        channel.send('Attempting reload...');
        botBE.destroy();
        botBE.login(token);
        channel.send('Successfully reloaded Breathe Easy');
        console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Breathe Easy reload success\n`);
        break;
      case 'guildcount':
        channel.send(`Breathe Easy is currently connected to ${guildCount} guilds`);
        console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Guild count success\n`);
        break;
      case 'guildnames':
        channel.send(`Breathe Easy is connected to these guilds\n${guildNames}`);
        console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Guild list success\n`);
        break;
      case 'guildids':
        channel.send(`These are the id\'s of every guild Breathe Easy is connected to\n${guildIDs}`);
        console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Guild list ids success\n`);
        break;
      case 'usercount':
        channel.send(`Breathe Easy is currently serving ${userCount} users`);
        console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} User count success\n`);
        break;
      case 'repeat':
        channel.send(msg);
        console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Repeat success\n`);
        break;
      default: //Sends a block with all the admin keywords
        const adCommandBlock = new discord.MessageEmbed();

        adCommandBlock.setFooter('Breathe Easy');
        adCommandBlock.addField('Command', '\n\nReload\n\nGuildcount\n\nGuildlist\n\nGuildIDs\n\nGuildfill\n\nUsercount\n\nRepeat', true);
        adCommandBlock.addField('Description', '\n\nReloads Breathe Easy client\n\nSends guild count\n\nLists all the guilds Breathe Easy is in\n\nList all the guild id\'s\n\nAdd\'s all guilds to the database\n\nSends user count\n\nHas Breathe Easy repeat your message', true);
        adCommandBlock.setColor(0x660066);
        channel.send(adCommandBlock);
        console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Admin command block success\n`);
    }
    return;
  } catch {
    channel.send('I\'m sorry Wasteland i failed to complete your admin command');
    console.log('\x1b[35m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Admin command fail\n`);
    return;
  }
}
