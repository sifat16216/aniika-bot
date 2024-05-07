module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
        {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://telegra.ph/file/134aa0794eb61c9c8fdb9.jpg", 
            
            "https://telegra.ph/file/480f341ab86adfefea332.jpg", 
            
"https://telegra.ph/file/f4bcd1d69989d695701a1.jpg",
            
            "https://telegra.ph/file/735999ddb32ef9b1f65be.jpg"];
  
var callback = () => api.sendMessage({body:`........\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝐓𝐨𝐡𝐢𝐝𝐮𝐥 𝐈𝐬𝐥𝐚𝐦 𝐒𝐢𝐟𝐚𝐭\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝐓𝐨𝐡𝐢𝐝𝐮𝐥 𝐈𝐬𝐥𝐚𝐦 𝐒𝐢𝐟𝐚𝐭\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝐊𝐡𝐚𝐠𝐫𝐚𝐜𝐡𝐡𝐫𝐢)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 :𝐅𝐞𝐧𝐢, 𝘽𝙖𝙣𝙜𝙡𝙖𝙙𝙚𝙨𝙝\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (𝟏𝟖+)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝙎𝙩𝙪𝙙𝙮\n𝗚𝗺𝗮𝗶𝗹        :  tohidulislamsifat1@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+8801*5*7*7*3*\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : t.me/Roboinhood\n𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/tohidul.islam.sifat.xyz
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };