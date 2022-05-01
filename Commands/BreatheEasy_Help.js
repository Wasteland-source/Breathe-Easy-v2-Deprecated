//A help block showing all the avaible commands and helping users to properly utilise the bot

module.exports = async function(tag, guild, channel) {
  const time = new Date();
  try {
    const discord = require('discord.js'),
      help = new discord.MessageEmbed();
    //Creating a new help block

    help.setColor(0x06b890);
    help.setFooter('Breathe Easy');
    help.addField('Commands', 'Prefix /\n\nWelcome\n\nPing\n\nInvite\n\nPrompt\n\nBreathe\n\nCount\n\nHappy\n\nHug\n\nReddit\n\nFeedback\n\nRequest\n\nHelp\n\nUpdates', true);
    help.addField('Description', 'Currently the prefix is fixed\n\nAn introduction to Breathe Easy\n\nShows the current ping of Breathe Easy\n\nSends and invite link so you can add Breathe Easy to your server\n\nSends a guided visualtion prompt\n\nSends a breathing exercise gif\n\nSends a counting exercise gif\n\nGives you words of encouragement\n\nSends a hug\n\nRandom cute + wholesome posts\n\nReporting issues and mistakes\n\nRequests for features and changes\n\nBrings up this block\n\nUpcoming features and changes', true);
    //help.addBlankField();
    help.addField('Support', 'Feel free to message me directly for any help or support you need with Breathe Easy:\nWasteland Doctrine#9303');
    channel.send(help);
    console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Help command success\n`);
    return;
  } catch {
    channel.send('*Breathe Easy is carefully bringing the help block over to you when she lets out a small sneeze and drops it*\n\nI think i dropped the help block i\'m so sorry! You can always get my list of commands here instead:');
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} Help command fail\n`);
    return;
  }
}
