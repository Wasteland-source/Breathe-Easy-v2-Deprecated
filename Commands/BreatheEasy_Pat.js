//A command to pat someone mentioned

module.exports = async function(mention, tag, guild, username, channel, breatheID) {

  try { //Sends a random pat gif if someone has been mentioned
    if (mention !== undefined) {
      const discord = require('discord.js'),
        pats = [];

      channel.send(`${username} has patted ${mention} softly`, );
      console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} & ${mention} Pat command success`);
      return;
    } else {
      throw error
    }
  } catch {
    channel.send(`*Breathe Easy looks at you with confusion*\n\nI\'m sorry i\'m having trouble understanding you. Please follow pat with a mention, For example \"/pat <@${breatheID}>\"`);
    console.log('\x1b[31m%s\x1b[0m', `${guild}:${tag} Pat command fail`);
    return;
  }
}
