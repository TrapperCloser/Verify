const elements = {
  codeInput: document.querySelector("#codeInput"),
  verifyStatus: document.querySelector("#verifyStatus"),
  verifyCode: document.querySelector("#verifyCode"),
  verified: document.querySelector("#verified"),
  verifiedCount: document.querySelector("#verifiedCount"),
  usernameInput: document.querySelector("#usernameInput"),
  chatInput: document.querySelector("#chatInput"),
  chatMessages: document.querySelector("#chatMessages"),
  sendChat: document.querySelector("#sendChat"),
  uploadChat: document.querySelector("#uploadChat"),
  serverStatus: document.querySelector("#serverStatus"),
  navDatabase: document.querySelector("#navDatabase"),
  database: document.querySelector("#database"),
  newNameInput: document.querySelector("#newNameInput"),
  newRankInput: document.querySelector("#newRankInput"),
  newCodeInput: document.querySelector("#newCodeInput"),
  newCodeButton: document.querySelector("#newCodeButton"),
  themeSelect: document.querySelector("#themeSelect"),
  themeCustomColor: document.querySelector("#themeCustomColor"),
  currentReply: document.querySelector("#currentReply"),
  cancelReply: document.querySelector("#cancelReply"),
  replySection: document.querySelector("#replySection"),
  muteGuestsToggle: document.querySelector("#muteGuestsToggle"),
  jumpToggle: document.querySelector("#jumpToggle"),
  descriptionInput: document.querySelector("#descriptionInput"),
  fileConfirmOverlay: document.querySelector("#fileConfirmOverlay"),
  fileConfirmDarken: document.querySelector("#fileConfirmDarken"),
  fileConfirmContainer: document.querySelector("#fileConfirmContainer"),
  filePreviewImage: document.querySelector("#filePreviewImage"),
  fileInfo: document.querySelector("#fileInfo"),
  fileConfirmContinue: document.querySelector("#fileConfirmContinue"),
  fileConfirmDecline: document.querySelector("#fileConfirmDecline"),
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
  "goose": "https://cdn.discordapp.com/attachments/395646588682240020/1370592171895423087/ezgif-7548e5fbb069f.gif?ex=682554ee&is=6824036e&hm=a41b14dfee6dd13568b6df0b4ad9933008f32e5c0861b4a9c75a3c7cf793175b&", // the link is gone for this lmao
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
  "tSpin": "https://cdn.glitch.global/eac7e4cc-c8c8-4d63-a9f3-3f86fcce8fba/tSpin.gif?v=1750206534136",
  "zlqi": "https://partykit.fibonnaci314.partykit.dev/zlqi.png",
  "d2": "https://partykit.fibonnaci314.partykit.dev/d2.png",
  "untrust": "https://partykit.fibonnaci314.partykit.dev/untrust.png",
  "spin": "https://partykit.fibonnaci314.partykit.dev/spin.gif",
};

let partySocket;
let expectBinary = false;
let binaryHeader = null;
let connectionId = null;
let savedCode = null;
let chatReply = null;
let muteGuests = false;
let jump = true;
let fontSize = parseInt(localStorage.getItem("arrasVerifyFontSize") ?? 16);

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
  partySocket.send(JSON.stringify(["C", code]));
  savedCode = code;
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

function changeFontSize(event) {
  const element = event.target;
  const change = parseInt(element.dataset.change);
  
  if (change === 0) {
    fontSize = 16;
  } else {
    fontSize += change;
  }
  
  fontSize = Math.max(12, fontSize);
  fontSize = Math.min(24, fontSize);

  document.querySelector("#fontSizeValue").innerText = fontSize;
  document.documentElement.style.setProperty('--custom-font-size', fontSize + 'px');
  document.querySelectorAll(".fontSizeButton").forEach((button) => {
    const changeVal = parseInt(button.dataset.change);
    button.disabled = false;
    
    if (changeVal > 0 && fontSize === 24) button.disabled = true;
    if (changeVal < 0 && fontSize === 12) button.disabled = true;
  });

  localStorage.setItem("arrasVerifyFontSize", fontSize);
}

function handleCodePacket(valid, rank, name) {
  if (!valid) {
    elements.verifyStatus.innerText = "Invalid code. Please try again.";
    return;
  }
  elements.verifyStatus.innerText = "You are verified as a " + rank + ".";
  elements.descriptionInput.hidden = false;
  partySocket.send(JSON.stringify(["D"]));
  if (rank === "developer" || rank === "manager") {
    document.querySelector("#navDeveloper").className = "";
    document.querySelector("#navDatabase").className = "";
  }
  elements.usernameInput.value = name;
  elements.muteGuestsToggle.disabled = false;
  document.querySelector("#verificationInputs").hidden = true;
  updateUsername();
}

function handleVerifiedPacket(...data) {
  let html = "";
  for (let index = 0; index < data.length; index += 4) {
    html += `
      <tr>
        <td class="user-name">${data[index]} <span class="verifyId">(${data[index + 2]})</span></td>
        <td class="user-rank rank-${data[index + 1]}">${data[index + 1][0].toUpperCase() + data[index + 1].slice(1)}</td>
        <td class="join-time">${new Date(data[index + 3]).toLocaleTimeString()}</td>
      </tr>
    `;
  }
  elements.verified.innerHTML = html;
  elements.verifiedCount.innerText = (data.length / 4) + " users are currently verified.";
}

function handleClose() {
  elements.usernameInput.disabled = false;
  elements.sendChat.disabled = true;
  elements.uploadChat.disabled = true;
  elements.chatInput.disabled = true;
  elements.muteGuestsToggle.disabled = true;
  elements.descriptionInput.hidden = true;
  elements.verifyStatus.innerText = "You have disconnected from the server.";
  document.querySelector("#verificationInputs").hidden = true;
  document.querySelector('label[for="uploadChat"]').className = "disabled";
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
      partySocket.send(JSON.stringify(["D"]));
    });
  }
}

function firstBinaryRecieved(message) {
  const headerLength = parseInt(message.slice(10, 18), 10);
  binaryHeader = JSON.parse(message.slice(18, 18 + headerLength));
  expectBinary = true;
}

function parseBinaryFile(blob) {
  const objectURL = URL.createObjectURL(blob);
  const paddedId = binaryHeader[1].toString()
  displayChatMessage({
    username: binaryHeader[0] + "#" + paddedId, 
    neo: binaryHeader[3], 
    imgURL: objectURL,
    realName: binaryHeader[2]
  });
  expectBinary = false;
}

function parseDescription(desc) {
  desc = stripHTML(desc);
  desc = desc.replaceAll("\n", "<br>");
  desc = desc.replaceAll("{{Rule}}", "<hr>");
  desc = desc.replaceAll(/{{Italic:([^{}]{1,100})}}/g, "<i>$1</i>");
  desc = desc.replaceAll(/{{Bold:([^{}]{1,100})}}/g, "<b>$1</b>");
  desc = desc.replace(/{{Link:(https?:\/\/[^{}]{1,50}),([^{}]{1,50})}}/g, (m, url, name) => {
    return "<a href='" + url + "'>" + name + "</a>";
  });
  return desc;
}

function connectToParty() {
  const url = location.hostname === "localhost" ? "ws://localhost:1999/parties/main/my-new-room" : "wss://partykit.fibonnaci314.partykit.dev/parties/main/my-new-room";
  partySocket = new WebSocket(url);
  partySocket.addEventListener("open", () => {
    if (savedCode) {
      partySocket.send(JSON.stringify(["C", savedCode]));
      elements.verifyStatus.innerText = "Reconnecting...";
      document.querySelector("#verificationInputs").hidden = false;
    }
  });
  partySocket.addEventListener("message", (message) => {
    if (message.data.slice(0, 10) === "BinaryFile") {
      return firstBinaryRecieved(message.data);
    }
    if (expectBinary) {
      return parseBinaryFile(message.data);
    }
    const data = JSON.parse(message.data);
    const [type, ...args] = data;
    if (type === "J") {
      displayChatMessage({ broadcast: true, message: args[0] + " joined the chat." });
    }
    if (type === "M") {
      if (args[3][0] === "/") {
        handleRecievedCommand(args[3]);
        return;
      }
      const paddedId = args[1].toString()
      displayChatMessage({ 
        username: args[0] + "#" + paddedId, 
        neo: args[3], 
        message: args[4], 
        realName: args[2], 
        direct: args[5],
        replyName: args[6],
        replyText: args[7],
        replyCount: args[8],
        id: args[1]
      });
    }
    if (type === "B") {
      displayChatMessage({ broadcast: true, message: args[0] });
    }
    if (type === "C") {
      console.log(args);
      handleCodePacket(...args);
      elements.descriptionInput.value = args[3];
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
    if (type === "b") {
      document.querySelector("#descriptionText").innerHTML = parseDescription(args[0]);
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
    if (data.realName === "Guest" && muteGuests) return;
    let outputHTML = "";
    outputHTML += "<div class='zeroHeightRow'>" + (new Date().toLocaleTimeString()) + "</div>";
    if (data.direct) outputHTML += "<div class='zeroHeightRow'>Direct Message</div>";
    if (data.replyCount > 3) outputHTML += "<div class='zeroHeightRow'>Chain length: " + data.replyCount + "</div>";
    if (data.replyCount) {
      outputHTML += "<span class='broadcast'>(Replying to " + data.replyName + ": " + data.replyText + ")</span><br>";
    }
    if (data.broadcast) {
      const message = data.message;
      const stripped = stripHTML(message);
      outputHTML += "<span class='broadcast'>" + stripped + "</span>";
    } else {
      const message = data.message ?? "";
      const username = data.username;
      const strippedMsg = addEmotes(stripHTML(message));
      const strippedUsr = stripHTML(username);
      const color = getUsernameColor(data.username);
      let stylingData = data.neo !== "default" ? "class='neo " + data.neo + "' style='cursor: pointer;'" : "style='color: " + color + "; cursor: pointer;'";
      outputHTML += "<span class='broadcast'>(" + strippedUsr + ")</span> ";
      if (data.realName) {
        const strippedRealName = stripHTML(data.realName);
        outputHTML += "<b " + stylingData + ">" + strippedRealName + "</b> ";
      }
      if (data.message) {
        outputHTML += "<br>" + strippedMsg;
      } else {
        outputHTML += "<br><img class=\"uploadImage\" src=\"" + data.imgURL + "\">";
      }
      outputHTML += "<br><button class=\"replyButton\"><i class=\"fas fa-reply\"></i> Reply</button>";
    }
    const messageElement = document.createElement("div");
    messageElement.className = "chatMessage";
    messageElement.innerHTML = outputHTML;
    elements.chatMessages.appendChild(messageElement);
    if (jump) elements.chatMessages.scroll({ top: elements.chatMessages.scrollHeight });
    const replyButton = messageElement.querySelector('.replyButton');
    if (replyButton) {
      replyButton.addEventListener("click", () => {
        chatReply = [data.username, data.message, (data.replyCount ?? 0) + 1];
        elements.replySection.hidden = false;
        elements.currentReply.innerText = "Replying to " + data.username + ": " + data.message;
      });
    }
    const nameElement = messageElement.querySelector('b');
    if (nameElement && data.id) {
      nameElement.addEventListener("click", async () => {
        partySocket.send(JSON.stringify(["b", data.id]));
        document.querySelector("#descriptionOverlay").hidden = false;
        await new Promise(requestAnimationFrame);
        document.querySelector("#descriptionDarken").className = "";
        document.querySelector("#descriptionContainer").className = "";
        document.querySelector("#descriptionUsername").innerText = data.realName;
        document.querySelector("#descriptionText").innerText = "Loading...";
      });
    }
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

function performFileUpload(file) {
  if (!partySocket || partySocket.readyState !== WebSocket.OPEN) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    partySocket.send("BinaryFile");
    partySocket.send(ev.target.result);
  };
  reader.readAsArrayBuffer(file);
}

function showFileConfirm(file) {
  elements.filePreviewImage.style.display = 'none';
  elements.filePreviewImage.src = '';
  elements.fileInfo.innerHTML = '';

  if (file.type.startsWith('image/')) {
    const url = URL.createObjectURL(file);
    elements.filePreviewImage.src = url;
    elements.filePreviewImage.style.display = 'block';
    elements.filePreviewImage.onload = () => URL.revokeObjectURL(url);
  } else {
    elements.fileInfo.innerHTML = `<i class="fas fa-file"></i> ${file.name} (${file.type || 'unknown'})`;
  }

  elements.fileConfirmOverlay.hidden = false;
  requestAnimationFrame(() => {
    elements.fileConfirmDarken.className = '';
    elements.fileConfirmContainer.className = '';
  });

  elements.fileConfirmContinue.onclick = () => {
    performFileUpload(file);
    closeFileConfirm();
    elements.uploadChat.value = '';
  };

  elements.fileConfirmDecline.onclick = () => {
    closeFileConfirm();
    elements.uploadChat.value = '';
  };
}

function closeFileConfirm() {
  elements.fileConfirmDarken.className = 'minimize';
  elements.fileConfirmContainer.className = 'minimize';
  setTimeout(() => {
    elements.fileConfirmOverlay.hidden = true;
  }, 500);
}

function sendChat() {
  if (!partySocket || partySocket.readyState !== WebSocket.OPEN) return;

  const message = elements.chatInput.value.trim();
  if (!message) return;

  elements.chatInput.value = "";
  partySocket.send(JSON.stringify(["M", message, ...(chatReply ?? [null, null, null])]));
  cancelReply();
}

// Modified uploadChat: now shows confirmation instead of uploading directly
function uploadChat() {
  if (!partySocket || partySocket.readyState !== WebSocket.OPEN) return;
  
  const file = elements.uploadChat.files[0];
  if (!file) return;

  // Show confirmation popup
  showFileConfirm(file);
}

function updateUsername() {
  const username = elements.usernameInput.value;
  partySocket.send(JSON.stringify(["N", username]));
  elements.usernameInput.disabled = true;
  elements.sendChat.disabled = false;
  elements.uploadChat.disabled = false;
  elements.chatInput.disabled = false;
  document.querySelector('label[for="uploadChat"]').className = "";
}

function submitNewCode() {
  partySocket.send(JSON.stringify([
    "W",
    elements.newCodeInput.value,
    elements.newNameInput.value,
    elements.newRankInput.value
  ]));
  partySocket.send(JSON.stringify(["D"]));
  elements.newCodeInput.value = "";
  elements.newNameInput.value = "";
  elements.newRankInput.value = "user";
}

function createHexColor(r, g, b) {
  return "#" +
    (r < 16 ? "0" : "") + r.toString(16) +
    (g < 16 ? "0" : "") + g.toString(16) +
    (b < 16 ? "0" : "") + b.toString(16);
}

function setTheme() {
  const styleRule = document.styleSheets[0].cssRules[0].style;
  if (elements.themeCustomColor.value !== "#fffffe") {
    styleRule.setProperty("--custom-red", parseInt(elements.themeCustomColor.value.slice(1, 3), 16));
    styleRule.setProperty("--custom-green", parseInt(elements.themeCustomColor.value.slice(3, 5), 16));
    styleRule.setProperty("--custom-blue", parseInt(elements.themeCustomColor.value.slice(5, 7), 16));
  }
  localStorage.setItem("arrasVerifyTheme", elements.themeSelect.value);
  localStorage.setItem("arrasVerifyCustomTheme", elements.themeCustomColor.value);
  document.documentElement.className = elements.themeSelect.value + "-theme";
  elements.themeCustomColor.style.display = elements.themeSelect.value === "custom" ? "block" : "none";
  elements.themeCustomColor.value = createHexColor(
    parseInt(styleRule.getPropertyValue("--custom-red")),
    parseInt(styleRule.getPropertyValue("--custom-green")),
    parseInt(styleRule.getPropertyValue("--custom-blue"))
  );
}

function cancelReply() {
  chatReply = null;
  elements.replySection.hidden = true;
}

function toggleGuestMute() {
  muteGuests = !muteGuests;
  elements.muteGuestsToggle.innerText = "Mute Guests: " + (muteGuests ? "On" : "Off");
  elements.muteGuestsToggle.className = muteGuests ? "" : "disabled";
}

function toggleJump() {
  jump = !jump;
  elements.jumpToggle.innerText = "Jump To Bottom: " + (jump ? "On" : "Off");
  elements.jumpToggle.className = jump ? "" : "disabled";
}

function uploadDescription() {
  const data = elements.descriptionInput.value;
  partySocket.send(JSON.stringify(["B", data]));
}

function closeDescription() {
  document.querySelector("#descriptionDarken").className = "minimize";
  document.querySelector("#descriptionContainer").className = "minimize";
  setTimeout(() => document.querySelector("#descriptionOverlay").hidden = true, 500);
}

function serverScore(server) {
  const isSandbox = "pq".split("").includes(server.name[1]);
  return server.clients * (isSandbox ? 1 : 1 / 1000);
}

async function updateSandboxPlayers() {
  elements.serverStatus.innerText = "Loading server status...";
  const response = await fetch("https://t4mebdah2ksfasgi-c.uvwx.xyz:8443/2222/status");
  const status = (await response.json()).status;
  const servers = Object.values(status).filter((s) => s.name.length === 3);
  elements.serverStatus.innerText = "There are " + (status.wpd?.clients ?? 0) + " players on #wpd.";
  servers.forEach((server) => {
    if (server.name !== "wpd" && server.clients >= 5) {
      elements.serverStatus.innerText += "\nThere are " + (server.clients ?? 0) + " players on #" + server.name + ".";
    }
  })
}

elements.themeSelect.value = localStorage.getItem("arrasVerifyTheme") ?? "blue";
elements.themeCustomColor.value = localStorage.getItem("arrasVerifyCustomTheme") ?? "#121e2c";
setTheme();

const savedFontSize = localStorage.getItem("arrasVerifyFontSize");
if (savedFontSize) {
  fontSize = parseInt(savedFontSize);
  fontSize = Math.max(12, Math.min(24, fontSize));
  document.documentElement.style.setProperty('--custom-font-size', fontSize + 'px');
  document.querySelector("#fontSizeValue").innerText = fontSize;
}
changeFontSize({ target: { dataset: { change: 0 } } });

elements.verifyCode.addEventListener("click", verifyCode);
elements.sendChat.addEventListener("click", sendChat);
elements.uploadChat.addEventListener("change", uploadChat);
elements.chatInput.addEventListener("keydown", checkIfEnterKey(sendChat));
elements.usernameInput.addEventListener("keydown", checkIfEnterKey(updateUsername));
elements.newCodeButton.addEventListener("click", submitNewCode);
elements.themeSelect.addEventListener("change", setTheme);
elements.cancelReply.addEventListener("click", cancelReply);
elements.muteGuestsToggle.addEventListener("click", toggleGuestMute);
elements.jumpToggle.addEventListener("click", toggleJump);
elements.descriptionInput.addEventListener("change", uploadDescription);

document.querySelector("#navVerify").addEventListener("click", navTab("verification"));
document.querySelector("#navUsers").addEventListener("click", navTab("users"));
document.querySelector("#navChat").addEventListener("click", navTab("chat"));
document.querySelector("#navRules").addEventListener("click", navTab("rules"));
document.querySelector("#navDatabase").addEventListener("click", navTab("database"));
document.querySelector("#navDeveloper").addEventListener("click", navTab("developer"));
document.querySelector("#navChangelog").addEventListener("click", navTab("changelog"));
document.querySelector("#navSettings").addEventListener("click", navTab("settings"));
document.querySelector("#navSpecial").addEventListener("click", navTab("special"));
document.querySelector("#clearStorage").addEventListener("click", () => { localStorage.clear(); location.reload(); });
document.querySelector("#closeDescription").addEventListener("click", closeDescription);
[...document.querySelectorAll(".fontSizeButton")].forEach((e) => e.addEventListener("click", changeFontSize));

setInterval(updateSandboxPlayers, 30000);
updateSandboxPlayers();

function frame() {
  requestAnimationFrame(frame);
  if (elements.themeSelect.value === "custom") {
    setTheme();
  }
}
requestAnimationFrame(frame);
