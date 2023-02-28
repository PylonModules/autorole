import config from '../config';
var role = config.autorole.role;

if (config.autorole.enabled) {
  discord.on(discord.Event.GUILD_MEMBER_ADD, async (member) => {
    member.addRole(config.autorole.role);
  });
}
