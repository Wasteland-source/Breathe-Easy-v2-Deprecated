//Changes the prefix to whatever the user inputs

module.exports = async function(tag, guild, channel, db, mysql, pre, id) {
  const time = new Date();
  try {
    async function updatePrefix(pre, id) {
      return db('servers').where('server_id', '=', `${id}`).update({
        prefix: `${pre}`
      })
    };
    await updatePrefix(pre, id); //Creating a calling a function that actually runs the sql query

    channel.send(`*Breathe Easy jots down the new prefix in her notebook*\n\nOkay I'll make sure to respond to ${pre} from now on.\n\nRemember you'll always be able to use my default prefix '/' to run my commands, Just incase you forget your custom prefix or anything goes wrong`);
    console.log('\x1b[32m%s\x1b[0m', `${time}:\n${guild}:\n${tag} prefix update success\n`);
  } catch {
    channel.send('*Breathe Easy drops her pencil while noting down your new prefix and seems to forget what she was writing*\n\nI\'m sorry i failed to update your prefix!, I\'ll do better next time i promise');
    console.log('\x1b[31m%s\x1b[0m', `${time}:\n${guild}:\n${tag} prefix update fail\n`);
  }
}
