//Sending updates to users

module.exports = function(tag, guild, channel) {
  const time = new Date();
  try {
    const discord = require('discord.js');

    channel.send('I tried to do database stuff but i\'m just too inept to get it done so i\'m putting that on hold to do other stuff with the bot in the mean time');
    console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Update command success\n`);
    return;
  } catch {
    channel.send('Uhhhhhhmmmmmmm, I can\'t seem to remember how Wasteland was planning to update me at the moment but i may remember later! Try again then');
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Update command fail\n`);
    return;
  }
}
