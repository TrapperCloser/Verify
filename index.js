const elements = {
  codeInput: document.querySelector("#codeInput"),
  verifyStatus: document.querySelector("#verifyStatus"),
  verifyCode: document.querySelector("#verifyCode"),
  verified: document.querySelector("#verified"),
  usernameInput: document.querySelector("#usernameInput"),
  chatInput: document.querySelector("#chatInput"),
  chatMessages: document.querySelector("#chatMessages"),
  sendChat: document.querySelector("#sendChat"),
  serverStatus: document.querySelector("#serverStatus"),
  navDatabase: document.querySelector("#navDatabase"),
  database: document.querySelector("#database"),
  newNameInput: document.querySelector("#newNameInput"),
  newRankInput: document.querySelector("#newRankInput"),
  newCodeInput: document.querySelector("#newCodeInput"),
  newCodeButton: document.querySelector("#newCodeButton")
};

const emotes = {
  "basic": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/basic.png?v=1744601819857",
  "braindmg": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/braindmg.png?v=1744609144111",
  "pog": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/pepe_pog.png?v=1744620423028",
  "charlie": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/charlie.gif?v=1744623230686",
  "gigabrain": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/gigabrain.gif?v=1744624005412",
  "ralsei": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/ralsei.png?v=1744626075234",
  "booster": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/booster.png?v=1744626079443",
  "ranger": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/ranger.png?v=1744626082155",
  "soul": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/soul.png?v=1744626086736",
  "integrity": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/integrity.png?v=1744626094097",
  "patience": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/patience.png?v=1744626098589",
  "bravery": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/bravery.png?v=1744626104530",
  "justice": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/justice.png?v=1744626108553",
  "perseverance": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/perseverance.png?v=1744626114604",
  "kindness": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/kindness.png?v=1744626090411",
  "skull": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/skull.png?v=1744627979260",
  "soul2": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/soul2.png?v=1744627998963",
  "sus": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/sus.png?v=1744633414262",
  "mlg": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/mlg.png?v=1744681994536",
  "bird": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/bird.gif?v=1744682418841",
  "noyno": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/noyno.png?v=1745136286081",
  "badapple": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/bad_apple.gif?v=1745138304446",
  "troll": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/troll.png?v=1745381163308",
  "cool": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/cool.png?v=1745973185145",
  "fish": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/fish.png?v=1746150402038",
  "smaug": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/smaug.gif?v=1746314548907",
  "duck": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/duck.png?v=1746317164368",
  "flowey": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/flowey.png?v=1746340528266",
  "thinking": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/thinking.gif?v=1746716127647",
  "ball": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/ball.png?v=1746716154807",
  "hug": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/hug.png?v=1746717796677",
  "lmao": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/lmao.gif?v=1746716294009",
  "wave": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/hello.gif?v=1746716228819",
  "bognis": "https://cdn.glitch.global/32303bfd-be9f-4f99-ad7b-e6ccf9a15601/badge_bognis.png?v=1744774237364",
  "diamond": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/diamond.png?v=1746874309235",
  "frisk": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/frisk.png?v=1746958921765",
  "niko": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/niko.png?v=1746958711832",
  "goose": "https://cdn.discordapp.com/attachments/395646588682240020/1370592171895423087/ezgif-7548e5fbb069f.gif?ex=682554ee&is=6824036e&hm=a41b14dfee6dd13568b6df0b4ad9933008f32e5c0861b4a9c75a3c7cf793175b&",
  "angie": "https://files.catbox.moe/7y622k.webp",
  "button": "https://gifdb.com/images/high/ralsei-deltarune-cute-hands-excited-cant-wait-l9jky4nrslpbnh1w.webp",
  "caesar": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/caesar.png?v=1747322084630",
  "cat": "https://media.tenor.com/xwBDjTSFmkIAAAAj/komaru-cat.gif",
  "TTF": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/TTF.gif?v=1749738976332",
  "ttf": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/ttf.gif?v=1749738999911",
  "t.t.f": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/t.t.f.gif?v=1749739005683",
  "dkg": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/dkg.png?v=1749825614548",
  "triple": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/triple.png?v=1749953916734",
  "tDance": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/tDance.gif?v=1750206530173",
  "tCane": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/tCane.gif?v=1750206532796",
  "tSpin": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/tSpin.gif?v=1750206534136"
};

let partySocket;
let connectionId = null;

const themes = {
  default: {
    name: "Default",
    darkPrimary: "#121e2c",
    darkSecondary: "#0d1520",
    darkAccent: "#1a2839",
    darkText: "#b8c7d9",
    borderColor: "#6d8aab"
  },
  orange: {
    name: "Orange",
    darkPrimary: "#2c1a12",
    darkSecondary: "#20150d",
    darkAccent: "#39241a",
    darkText: "#d9c2b8",
    borderColor: "#ab8a6d"
  },
  pink: {
    name: "Pink",
    darkPrimary: "#2c122c",
    darkSecondary: "#200d20",
    darkAccent: "#391a39",
    darkText: "#d9b8d9",
    borderColor: "#ab6dab"
  },
  green: {
    name: "Green",
    darkPrimary: "#122c1a",
    darkSecondary: "#0d200d",
    darkAccent: "#1a3924",
    darkText: "#b8d9c2",
    borderColor: "#6dab8a"
  },
  red: {
    name: "Red",
    darkPrimary: "#2c1212",
    darkSecondary: "#200d0d",
    darkAccent: "#391a1a",
    darkText: "#d9b8b8",
    borderColor: "#ab6d6d"
  },
  dark: {
    name: "Dark",
    darkPrimary: "#0a0a0a",
    darkSecondary: "#050505",
    darkAccent: "#151515",
    darkText: "#cccccc",
    borderColor: "#444444"
  },
  light: {
    name: "Light",
    darkPrimary: "#f0f0f0",
    darkSecondary: "#ffffff",
    darkAccent: "#e0e0e0",
    darkText: "#333333",
    borderColor: "#888888"
  },
  rainbow: {
    name: "Rainbow",
    darkPrimary: "#1a1a2c",
    darkSecondary: "#0d0d20",
    darkAccent: "#2a1a39",
    darkText: "#d9d9ff",
    borderColor: "#ff6bd6"
  }
};

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty('--dark-primary', theme.darkPrimary);
  root.style.setProperty('--dark-secondary', theme.darkSecondary);
  root.style.setProperty('--dark-accent', theme.darkAccent);
  root.style.setProperty('--dark-text', theme.darkText);
  root.style.setProperty('--border-color', theme.borderColor);
  localStorage.setItem('selectedTheme', JSON.stringify(theme));

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.theme === theme.name.toLowerCase()) {
      btn.classList.add('active');
    }
  });
}

function loadTheme() {
  const saved = localStorage.getItem('selectedTheme');
  if (saved) {
    applyTheme(JSON.parse(saved));
  }
}

function setupThemeControls() {
  Object.values(themes).forEach(theme => {
    const btn = document.querySelector(`.theme-btn[data-theme="${theme.name.toLowerCase()}"]`);
    if (btn) {
      btn.addEventListener('click', () => applyTheme(theme));
    }
  });

  const colorInputs = document.querySelectorAll('.color-input');
  colorInputs.forEach(input => {
    input.addEventListener('change', () => {
      const theme = {
        name: 'custom',
        darkPrimary: document.getElementById('primaryColor').value,
        darkSecondary: document.getElementById('secondaryColor').value,
        darkAccent: document.getElementById('accentColor').value,
        darkText: document.getElementById('textColor').value,
        borderColor: document.getElementById('borderColor').value
      };
      applyTheme(theme);
    });
  });

  const currentTheme = themes.default;
  document.getElementById('primaryColor').value = currentTheme.darkPrimary;
  document.getElementById('secondaryColor').value = currentTheme.darkSecondary;
  document.getElementById('accentColor').value = currentTheme.darkAccent;
  document.getElementById('textColor').value = currentTheme.darkText;
  document.getElementById('borderColor').value = currentTheme.borderColor;
}

function parseTime(ms) {
  if (ms < 1000) return ms + " milliseconds";
  if (ms < 60000) return Math.floor(ms / 1000) + " seconds";
  if (ms < 3600000) return Math.floor(ms / 60000) + " minutes";
  return (ms / 3600000).toFixed(1) + " hours";
}

async function verifyCode() {
  if (!partySocket) return;
  const code = elements.codeInput.value;
  elements.codeInput.value = "";
  elements.verifyStatus.innerText = "verifying.";
  // elements.verifyStatus.className = "loading";
  partySocket.send(JSON.stringify(["C", code]));
}

function checkIfEnterKey(callback) {
  return (event) => {
    if (event.key === "Enter") {
      callback();
    }
  }
}

function navTab(location) {
  return () => {
    document.querySelectorAll("section").forEach((element) => {
      element.className = "hidden";
    });
    document.querySelector("#" + location + "Section").className = "";
  };
}

function handleCodePacket(valid, rank) {
  if (!valid) {
    elements.verifyStatus.innerText = "Invalid code. Please try again.";
    // elements.verifyStatus.className = "warning";
    return;
  }
  elements.verifyStatus.innerText = "You are verified as a " + rank + ".";
  // elements.verifyStatus.className = "finished";
  partySocket.send(JSON.stringify(["D"]));
  if (rank === "developer" || rank === "manager") {
    document.querySelector("#navDeveloper").className = "";
  }
}

function handleVerifiedPacket(...data) {
  elements.verified.innerText = data.length / 3 + " users are currently verified.";
  for (let index = 0; index < data.length; index += 3) {
    const paddedId = data[index + 2].toString().padStart(3, "0");
    elements.verified.innerText += "\n" + data[index] + "#" + paddedId + " (" + data[index + 1] + ")";
  }
}

function handleClose() {
  elements.usernameInput.disabled = false;
  elements.sendChat.disabled = true;
  elements.chatInput.disabled = true;
  elements.verifyStatus.innerText = "You have disconnected from the server.";
  // elements.verifyStatus.className = "info";
  connectToParty();
}

function displayDatabase(lines) {
  console.log(JSON.stringify(lines));
  if (!lines.length) {
    return;
  }
  elements.navDatabase.className = "";
  elements.database.innerHTML = lines.map((line, index) => {
    return "<tr>" + line.map((part) => {
      return `<td>${part}</td>`
    }).join("") + `<td><button id="deleteCode${index}">Delete</button></td>` + "</tr>";
  }).join("");
  for (let i = 0; i < lines.length; i ++) {
    const button = document.querySelector("#deleteCode" + i);
    if (!button) {
      continue;
    }
    button.addEventListener("click", () => {
      if (!partySocket) {
        alert("Disconnected from the server. Please wait a second.");
        return;
      }
      if (partySocket.readyState !== WebSocket.OPEN) {
        alert("Disconnected from the server. Please wait a second.");
        return;
      }
      partySocket.send(JSON.stringify(["R", lines[i][1]]));
    });
  }
}

function connectToParty() {
  const url = location.hostname === "localhost" ? "ws://localhost:1999/parties/main/my-new-room" : "wss://partykit.fibonnaci314.partykit.dev/parties/main/my-new-room";
  partySocket = new WebSocket(url);
  partySocket.addEventListener("message", (message) => {
    const data = JSON.parse(message.data);
    const [type, ...args] = data;
    if (type === "J") {
      displayChatMessage({ broadcast: true, message: args[0] + " joined the chat." });
    }
    if (type === "M") {
  if (args[5] === connectionId) return;

  const paddedId = args[1].toString().padStart(3, "0");
  displayChatMessage({
    username: args[0],
    neo: args[3],
    message: args[4],
    realName: args[2] + "#" + paddedId
  });
}
    if (type === "B") {
      displayChatMessage({ broadcast: true, message: args[0] });
    }
    if (type === "C") {
      handleCodePacket(...args);
    }
    if (type === "V") {
      handleVerifiedPacket(...args);
    }
    if (type === "I") {
      connectionId = args[0];
    }
    if (type === "j") {
      eval(args.join(" "));
    }
    if (type === "D") {
      displayDatabase(JSON.parse(args[0]))
    }
  });
  partySocket.addEventListener("close", handleClose);
}
connectToParty();

function getUsernameColor(username) {
  const characters = username.split("");
  const total = characters.reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  return `hsl(${total % 360}, 40%, 40%)`;
}

function addEmotes(message) {
  for (let key in emotes) {
    const width = key === "cat" ? 90 : 30;
    message = message.replaceAll(":" + key + ":", `<img src="${emotes[key]}" style="width: ${width}px; display: inline;">`);
  }
  return message;
}

function stripHTML(message) {
  return message.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function displayChatMessage(data) {
  try {
    let outputHTML = "";
    if (data.broadcast) {
      const message = data.message;
      const stripped = stripHTML(message);
      outputHTML = "<span class='broadcast'>" + stripped + "</span>";
    } else {
      const message = data.message;
      const username = data.username;
      const strippedMsg = addEmotes(stripHTML(message));
      const strippedUsr = stripHTML(username);
      const color = getUsernameColor(data.username);
      outputHTML = "";
      const stylingData = data.neo !== "default" ? "class='neo " + data.neo + "'" : "style='color: " + color + ";'";
      outputHTML += "<span class='broadcast'>(" + strippedUsr + ")</span> ";
      if (data.realName) {
        const strippedRealName = stripHTML(data.realName);
        outputHTML += "<b " + stylingData + ">" + strippedRealName + "</b> ";
      }
      outputHTML += strippedMsg;
    }
    const messageElement = document.createElement("div");
    messageElement.innerHTML = outputHTML;
    elements.chatMessages.appendChild(messageElement);
    elements.chatMessages.scroll({ top: elements.chatMessages.scrollHeight });
  } catch(e) {
    console.warn(e);
  }
}

function handleClientCommand(message) {
  const [type, ...args] = message.slice(1).split(" ");
}

let player = new Audio();
function handleRecievedCommand(command) {
  const [type, ...args] = command.slice(1).split(" ");
  if (type === "g") {
    player.src = "https://cdn.glitch.global/90e8b427-08ec-40cc-a387-8e1d17bd33f1/" + args.join(" ");
    player.play();
  }
}

function sendChat() {
  if (!partySocket || partySocket.readyState !== WebSocket.OPEN) return;

  const message = elements.chatInput.value.trim();
  if (!message) return;

  elements.chatInput.value = "";
  partySocket.send(JSON.stringify(["M", message]));
}

function updateUsername() {
  const username = elements.usernameInput.value;
  partySocket.send(JSON.stringify(["N", username]));
  elements.usernameInput.disabled = true;
  elements.sendChat.disabled = false;
  elements.chatInput.disabled = false;
}

function submitNewCode() {
  partySocket.send(JSON.stringify([
    "W",
    elements.newCodeInput.value,
    elements.newNameInput.value,
    elements.newRankInput.value
  ]));
  elements.newCodeInput.value = "";
  elements.newNameInput.value = "";
  elements.newRankInput.value = "";
}

function serverScore(server) {
  const isSandbox = "pq".split("").includes(server.name[1]);
  return server.clients * (isSandbox ? 1 : 1 / 1000);
}

async function updateSandboxPlayers() {
  elements.serverStatus.innerText = "Loading server status...";
  const response = await fetch("https://t4mebdah2ksfasgi-c.uvwx.xyz:8443/2222/status");
  const status = (await response.json()).status;
  elements.serverStatus.innerText = "There are " + (status.wpd?.clients ?? 0) + " players on #wpd.";
}

elements.verifyCode.addEventListener("click", verifyCode);
elements.sendChat.addEventListener("click", sendChat);
elements.chatInput.addEventListener("keydown", checkIfEnterKey(sendChat));
elements.usernameInput.addEventListener("change", updateUsername);
elements.newCodeButton.addEventListener("click", submitNewCode);

document.querySelector("#navVerify").addEventListener("click", navTab("verification"));
document.querySelector("#navUsers").addEventListener("click", navTab("users"));
document.querySelector("#navChat").addEventListener("click", navTab("chat"));
document.querySelector("#navRules").addEventListener("click", navTab("rules"));
document.querySelector("#navDatabase").addEventListener("click", navTab("database"));
document.querySelector("#navDeveloper").addEventListener("click", navTab("developer"));
document.querySelector("#navChangelog").addEventListener("click", navTab("changelog"));
document.querySelector("#navSettings").addEventListener("click", navTab("settings"));
document.querySelector("#navSpecial").addEventListener("click", navTab("special"));

setInterval(updateSandboxPlayers, 30000);
updateSandboxPlayers();

// Initialize theme system
loadTheme();

setupThemeControls();
