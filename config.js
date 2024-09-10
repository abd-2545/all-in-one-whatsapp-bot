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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_39_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgMjM1LFxuICAgICAgICA1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcxLFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDI0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICA1NixcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWTYxRXc5OS9UYUN6ck9aZ2V0SkJtWmFPcXlBUkxYTHpiRHh5OEhIWFkrRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ2Qzk2Q0EzQTI0Q0M0M0FGNTQ2NDQ1MTY1RjY4NzQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTkxNDM4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTcxNjEwOTk3NDY1QjY2RDQ4Q0JCQjdBMkQxQTk3RTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI1OTE0MzgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MUEyQjNERDFBNjcwQ0NEODU2ODFCNzQzMjM1RUFERFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjU5MTQzODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU2M0E3Mjk3NURFMzlGNkFDRkQ2Qzg2QTVBMERBOEZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTkxNDM4NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwVnZpbERCVVNtU2RpcjZZdUVjYXNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3ZmJhYjQzLWRlYjctNDAxMi1hMzU3LWMwNGExYjhlNGIyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAxOTcsXG4gICAgICAxNjgsXG4gICAgICAyMjQsXG4gICAgICAyMDUsXG4gICAgICAyMjYsXG4gICAgICA2NCxcbiAgICAgIDIyMyxcbiAgICAgIDI1MCxcbiAgICAgIDE2MixcbiAgICAgIDEwNyxcbiAgICAgIDE5MyxcbiAgICAgIDI0NCxcbiAgICAgIDIyNixcbiAgICAgIDY5LFxuICAgICAgNzAsXG4gICAgICAxMjUsXG4gICAgICAyMTcsXG4gICAgICA4OSxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDIwNCxcbiAgICAgIDEzNCxcbiAgICAgIDQ0LFxuICAgICAgODcsXG4gICAgICA2MCxcbiAgICAgIDE0MSxcbiAgICAgIDUsXG4gICAgICAxMTksXG4gICAgICA4NyxcbiAgICAgIDU4LFxuICAgICAgMTg0LFxuICAgICAgMTE4LFxuICAgICAgMTkzLFxuICAgICAgMzIsXG4gICAgICAyNDYsXG4gICAgICAxNDEsXG4gICAgICAxNDQsXG4gICAgICAyOCxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXVDVTQTZEWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxMDAzMDcxOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2K3aqduM2YVcIixcbiAgICBcImxpZFwiOiBcIjI0NDUyNTY5MTg3MTI1NzozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMmg2aGtRaXJyOXRnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNqN09BVHBFZ0lVYjZ1NHRwS1RrUEduTTJSTmpLaEtITjNXNjVmMnNMblU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieWRhSlM2S0liZ05CdmlvaFZBdlNLZVBvTzZCNjNYdW9hZDNFWVJVU21yc3R4ZjFHUk9DeWlHbzZKeXM0K1FUU3FpZSt4RDJybnNodXRqN0pMYWxMQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZG94RE5DQ2IrNEVhUVRiZHc5RTk2cGVWc2JveEVjSWI4akVPb1JjalU2YXkvcVdkZ0dsSWVId1FpVkliQkpGTS9vNHRWeE1BV1hZVU4xL3NMUjJ5RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxMDAzMDcxOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTkxNDM4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9MRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0xGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU2dOd1NBOVRocWhrU3JZRVlvUit6ZkM1S1Q1RXlBMmwraXlENTFpMmtQQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NDE2OTgyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI1OTE0MzgxNzExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


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
