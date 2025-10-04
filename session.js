//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZEQmNVajdvcUlIcEplQitEZ0ZNR21LVDZSeW0wMVJGWEZuS3ZYN0gzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2hSSHQ5Zkd3YkJldWJnaTBLbEJ3WWFRdGNFcU9ERzVnZDVPNk5hdVIzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSjErb1pJa1YzSkpZYjFDODI1d3E1L0kvaXhiSko2MVZ6THpKcFFKTVhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWUmwvZkJMaC9SNnZZVzBmMFh6ZklrZTNqeHVObURPQTV5b3ROOGg5YVVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCQURPSGx2Uzd4Uy9sK0dYWTN2bXEvNW5BU0REUEtyd01aNVYvS0k0MmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQvL0RYS3VTMFg5YjhBbEw0dUdZSVl3UmdBOVM5bmRxRyt5cS95QlNoWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VzN05RT0luZGUwRmJLZVJiY0JqUFgyY1VrY3daalpjQWJMS0VFd1owVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemhkWDhiTGZCbEJ3dFl5bk41dHl4RE4zNUxmREV0WURiS1hCMWNtYzNWZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklTUzFsS0ttWm4yN0lpZEJYY05jWUs3YUNvazZuWllsQ3hZbDBxd3ZBQjZZOTlZc1oyTU1hWGtveWxDSWF0aStNeGpacWxmYTVNbDJVUUlHU1BNZWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiIwOG5SdVRTMHBnbVJENVJQdTVoV0lUNmszSGJvKzRvaUhtNUJoMXIrMk9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1dEFEb1BCQ1R0T240bHM5ZC02ZEtnIiwicGhvbmVJZCI6IjBhNjI2OWEzLTNlZmMtNDMzMi1hMDc0LTg5ZTUzMDgwNTFiNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUUVtMU1tSW9IUFkzQkdWdmFPdVJLNC9nZGs9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik93WUpFWGlKT3ROa3N6WDZTQ3hEVU01T1ltTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BtYjdLUUdFTS83Z2NjR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjExUTNnM0hrRGVBNklsSWpUV28zejBqeVZRZzJ5QTdUdCs2UTlzVE5MSEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkQzTU5HWFFFa2U3VFlxd1ROZ1Vhdk9raVM4Z1d0Q2RMR04xVk92WmxnSDNLdlJ0U0tlditoc1FSbGdZOWk2Y0ZFbFdKVWtqYTFBeE9tbmRCTHl3QkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDN1ZNUWNWMEJxQlk3c25WaThTNXhrTXJjU2FyNmVWSU1lbTZxa3RQM2RSNzdzYWlOQWFpQ1ZRaUkya3dydUlYWVZrU0R1UUlkWkRrc2psT0ZPTmtqQT09In0sIm1lIjp7ImlkIjoiOTQ3ODc3NTE5MDE6MzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic2VudXJhIiwibGlkIjoiMTQ2MjU3MTkyNDY0NDY1OjM5QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4Nzc1MTkwMTozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZFVONE54NUEzZ09pSlNJMDFxTjg5SThsVUlOc2dPMDdmdWtQYkV6U3h3In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk1NDI3MzgsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFDUUFBQWIvIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0778587324",
  PASSWORD: 
    process.env.PASSWORD || "senura#@123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
