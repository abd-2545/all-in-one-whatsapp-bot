const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Vu Study Solution" 


global.devs = "923071003071" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071003071";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_55_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDUxLFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicyszT2xlSmpsbExqR0R3QmNjMlNqMmxPYkFvdWE3VVRpVHlHNHBMM0dBaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMxQjcwQzIyREE3NTM2QzQ2MzVEOTkzNjFEOEI4NkU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzI2MTczOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTBGN0UwRjUyRUIxNDM5REEzMjQ4MTkyMzMyRDI5QzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3MjYxNzQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMTE1NEYwMjMzNDg2OEQxNTE4OUYyNjAzQTM0QkZDN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjcyNjE3NDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4RTU3QzVFNzM4MTM3M0M5MUUwNkZCMkJGNDk0RTFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzI2MTc0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2cjlCSmVJdVFyV2lNWTFxSHNoUTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4YWY3ZWI0LTRiOWQtNDQ1Mi1hMzhmLWFmMGU5YzZlN2QwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDkwLFxuICAgICAgMTU0LFxuICAgICAgMTM4LFxuICAgICAgMTM1LFxuICAgICAgMTE5LFxuICAgICAgMjE2LFxuICAgICAgMTAwLFxuICAgICAgMjE0LFxuICAgICAgMTIwLFxuICAgICAgMTYxLFxuICAgICAgMjQ5LFxuICAgICAgMTY4LFxuICAgICAgMzksXG4gICAgICAxMzksXG4gICAgICAyMjUsXG4gICAgICAxOSxcbiAgICAgIDIxOSxcbiAgICAgIDE5NyxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDQ3LFxuICAgICAgMyxcbiAgICAgIDI0MyxcbiAgICAgIDkwLFxuICAgICAgNzEsXG4gICAgICA4LFxuICAgICAgMjE0LFxuICAgICAgMTM1LFxuICAgICAgMTc5LFxuICAgICAgMTk2LFxuICAgICAgMTE4LFxuICAgICAgMjE2LFxuICAgICAgNSxcbiAgICAgIDMwLFxuICAgICAgMjE0LFxuICAgICAgMTk1LFxuICAgICAgNTEsXG4gICAgICAyNDAsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTE5GNTkxUVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTAwMzA3MTo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhBS0VFTVwiLFxuICAgIFwibGlkXCI6IFwiMjQ0NTI1NjkxODcxMjU3OjQzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xlV3l2QUNFS1hZejdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTkZYRElXRVhDYm5RTlpIK1k1THB5c3YrQ3NMWXdrS2Ixc0pLV0pOQXAzTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTcHpiOE5ud1ZHRkE0dWpHVk90VzM0ZlVrVzVwemRrcWZLL0MwZ01vdDNwMW93eUx3RUIxYUpNOHBxNHFBdlZ6K1FvTlFQbW9EOFVrMUdCKzlTMDVBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3ZWlGL1NHYTVJNCs4NUttL0Z4OG02SVpLc2txT2dvL1B4U1ljREt4OFdMR1F3NGdDR1BEWUhkTzlRdnBaOXhQQVpXS1ZQaTNYZ0J0VHRSQjMvT3dDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzEwMDMwNzE6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MjYxNzM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGgvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMaC8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "HAKEEM",
  ownername:process.env.OWNER_NAME|| "U S A M A",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
