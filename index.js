const qrcode = require("qrcode-terminal");
const fs = require("fs");

const { Client, LocalAuth } = require("whatsapp-web.js");

// Path where the session data will be stored
const SESSION_FILE_PATH = "./session.json";

// Load the session data if it has been previously saved
const contact = [
  {
    name: "Deepak",
    number: "9328027580",
  },
];

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", async () => {
  console.log("Client is ready!");
  const chat = await client.getChats();

  // client.sendMessage("916352201170@c.us", "Hello  Your Whatsapp is Hacked");

  client.sendMessage(
    `91${contact[0].number}@c.us`,
    "Hello , aapki tution hamare area me bahot popular he hamne ek software banaya he jo aapki tution ko easily manage kar dena to free trial use karna chah "
  );

  console.log(chat[0]);
});

client.on("message", (m) => {
  if (m.body === "wellbenix") {
    m.reply("Hello");
    console.log(m);
  }

  if (m.body === "Wellbenix") {
    m.reply("Hello");
  }
});

// Save session values to the file upon successful auth
client.on("authenticated", (session) => {
  console.log("Whatsapp => Authentication ");
});

client.initialize();
