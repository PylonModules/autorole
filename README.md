# Autorole Module

> Made by **[proudparrot2](https://github.com/proudparrot2)**
>
> If you haven't used Pylon Modules before, or are confused by what's in this README, please read our [guide repository](https://github.com/pylonmodules/guide)

A module that adds a role to a user after they join the server

## Installation
1. Make a new file in the Pylon Studio Editor called `modules/autorole.ts`, and add the contents of `module.ts` to it.
2. Add this configuration to your config.ts file:
```ts
const autorole = {
  role: '<role id here>'
  enabled: true
}; export { autorole };
```
Replace `<role id here>` with the role that you want to be added to new users.

3. Append this to your `main.ts` file
```ts
import 'modules/autorole' 
 ```
 
 When you save (CTRL/CMD + S), the module should be enabled!
 
 > If you need help with this module, please join our [support server](https://discord.gg/85Jmh74ePB)!
