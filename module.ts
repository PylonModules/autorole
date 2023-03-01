import * as config from '../config';

discord.on(discord.Event.GUILD_MEMBER_ADD, async (member) => {
  var channel = await discord.getGuildTextChannel(config.joinleave.channel);
  if (!channel)
    return console.log(
      "[JOINLEAVE] You set an incorrect channel ID in your configuration. Please ensure it's valid."
    );
  channel.sendMessage(`<@${member.user.id}>\n${config.joinleave.joinmessage}`);
});

discord.on(discord.Event.GUILD_MEMBER_REMOVE, async (member) => {
  var channel = await discord.getGuildTextChannel(config.joinleave.channel);
  if (!channel)
    return console.log(
      "[JOINLEAVE] You set an incorrect channel ID in your configuration. Please ensure it's valid."
    );
  channel.sendMessage(
    `**${member.user.username}**\n${config.joinleave.leavemessage}`
  );
});
