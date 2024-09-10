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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_31_09_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDgyLFxuICAgICAgICA5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODksXG4gICAgICAgIDUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTcwLFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1Z1BYaHB0UkRVUlVuOFpRNkVtVlZ2cVpqdjdWcTJ3NHBqMDgwbGFmczdZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDcxRkIyNzU2NEUxRjNCNDMzMjAzMTAwRjg5N0I5MUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MDAwMzA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MEEyQjAxRjc0RjNFMDBCODcwMDVCRDAwNjAzMTZEQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjYwMDAzMDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBMDRDODM5MzY1NDg1ODg1Mjg2QTEwREY1MTJGQTQyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjAwMDMxMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0NGNDlEM0Y3N0ZBQ0Q2MUY5Nzk4OEZFRUJEQzgxOEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MDAwMzExXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxnRXhtUEp1UkllTWxETHBLNEZRTEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjMzZTgxM2MtMTAwMS00MTE5LWIyYjEtNDNiZmVjNGIyZjk2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDkzLFxuICAgICAgMTk3LFxuICAgICAgNDgsXG4gICAgICA4NSxcbiAgICAgIDE0OSxcbiAgICAgIDgzLFxuICAgICAgMjM5LFxuICAgICAgMTgwLFxuICAgICAgMTA3LFxuICAgICAgMjE3LFxuICAgICAgNzAsXG4gICAgICAxMzEsXG4gICAgICAxMyxcbiAgICAgIDY2LFxuICAgICAgMTYsXG4gICAgICA4NyxcbiAgICAgIDE1MSxcbiAgICAgIDI0LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDg5LFxuICAgICAgMTgsXG4gICAgICAxMzcsXG4gICAgICAxOTcsXG4gICAgICAyNTIsXG4gICAgICAxMzcsXG4gICAgICA1MyxcbiAgICAgIDQwLFxuICAgICAgMTQzLFxuICAgICAgMTc4LFxuICAgICAgMTgxLFxuICAgICAgOTYsXG4gICAgICAxODAsXG4gICAgICAxMzksXG4gICAgICAxNjEsXG4gICAgICAyNTUsXG4gICAgICA2MCxcbiAgICAgIDQ2LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzNDNUNRWjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTAwMzA3MTo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItit2qnbjNmFXCIsXG4gICAgXCJsaWRcIjogXCIyNDQ1MjU2OTE4NzEyNTc6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjZoNmhrUXJkbUN0d1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjajdPQVRwRWdJVWI2dTR0cEtUa1BHbk0yUk5qS2hLSE4zVzY1ZjJzTG5VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktSL1Y2VnFFd0I1Q3Awc1dBeEJBRzFGaXg5Mmd0MnhGdzMyUzBGRWxJVzFyWmhtZC9UekZxTWY2emxNeGkzSzBOMW11NkdsTWZvUm8xaW1lcEc2YkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJwNmkvY2pWMGRRYWUvVUJTeWIwL2ZXN1M0Njhyc1BGVVM4aTUyRk5WVEdFUCs0WTUrMlBEazhKYi9GMWdkODBhRHZKQTZJMVJpN0R6RzZoOU9hMGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTAwMzA3MTo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYwMDAzMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPTEdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9MRy5qc29uIjogIntcImtleURhdGFcIjpcIm5rTVZGYmYrM1BqaDNJQVlWKzZQR2xkTEtXNGVnL0M3TFd5WndDTVZFZnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTQxNjk4MjEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ="  // PUT your SESSION_ID 


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
