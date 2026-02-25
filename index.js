/*
Created by enekopreis22
*/
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Thank you enekopreis22!'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "1336142839985213542", //put your guild id here
  categoryID: "1336510193462153226", //put your category id here
  staffRole: "1336142839985213545", //put your staff role id here
  embedColor: "#002bff", //change the hax color code if you want
  anonymousReply: false, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "Ticket closed!",
  closedMessage: "Your ticket has been closed. Thank you for contacting support!",
  staffOpenedTitle: "New ticket has been opened!",
  staffOpenedMessage: "New ticket has been opened. Contact the user as soon as possible.",
  userOpenedTitle: "Ticket opened!",
  userOpenedMessage: "Your ticket has been opened! A support agent will be with you as soon as possible.",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});
