const {Client, Intents, DiscordAPIError} = require('discord.js');
const dovtenv = require('dotenv')

dovtenv.config();

const client = new Client(
    {
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

client.on('ready', ()=>{
    console.log('your bot is ready')
})


client.on('messageCreate', msg=>{
    if (msg.content == 'ถ้าเศรษฐกิจซบเซา'){
        msg.reply('หันมาซบเราได้นะ')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'การบ้านเราส่งครู'){
        msg.reply('ส่วนมิสยูเราส่งให้เธอ')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'แม้ทะเลจะมีคลื่น'){
        msg.reply('แต่ก็คงไม่สดชื่นเท่ามีเธอ')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'ฝนตกให้หาที่พัก'){
        msg.reply('ถ้าอยากได้ที่รัก ไห้ทักมาหาเรา')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'แม้ทะเลจะมีคลื่น'){
        msg.reply('แต่ก็คงไม่สดชื่นเท่ามีเธอ')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'online'){
        msg.reply('กลับมา online แล้วค้าบบ')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'อยากมีผัว'){
        msg.reply('ไปเรียนให้จบก่อนมั้ย')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'เรียนแพทย์ได้เป็นหมอ'){
        msg.reply('เรียนให้จบก่อนนะไอสัส!!')
    }
})

client.on('messageCreate', msg=>{
    if (msg.content == 'ทำไมนอนดึกจัง'){
        msg.reply('เสือก')
    }
})


client.on('messageCreate', msg=>{
    if (msg.content == 'test'){
        msg.reply('online success')
    }
})

const random_num = () =>{
    return Math.floor(Math.random() * '8','10','5','4','3');
}

client.on('messageCreate', msg=>{
    let moods = ['อย่าๆๆ','แบบนี้ต้องเราแล้วป่ะ','อยู่คนเดียวก็ดีแล้ว','อย่าเข้าไปเป็นภาระเขาเลยะ','ป่าวแค่คุย','แค่เพื่อนก็ดีอยู่แล้ว','แค่เพื่อนไม่ร้องน้าาTT','welcome to friend zone','ดูแลตัวเองให้ได้ก่อนนะ']
    if (msg.content == 'อยากมีหวานใจ'){
        msg.reply(moods[random_num()])
    }
})

client.on('messageCreate', msg=>{
    let foods = ['ราดหน้า','สุกกี้','แฮมเบอร์เกอร์','ยำไก่เเซ่บ','ไก่ทอด','ยำวุ้นเส้น','กินเราสิ','เกี๊ยวกุ้ง','กินตีนไหม','กระเพาเผ็ดๆหรือบอทเด็ดๆอย่างฉัน']
    if (msg.content == 'หิวข้าว'){
        msg.reply(foods[random_num()])
    }
})

client.on('messageCreate', msg=>{
    let waters = ['น้ำส้ม','น้ำเปล่า','น้ำอัดลม','น้ำแร่','น้ำปั่น']
    if (msg.content == 'กินน้ำอะไรดี'){
        msg.reply(waters[random_num()])
    }
})

client.on('messageCreate', msg=>{
    let moods = ['จริงป่าว?','คิดถึงเหมือนกัน','คิดถึงเราหรอ','แต่เราไม่คิดถึงแกเลย -_-']
    if (msg.content == 'คิดถึง'){
        msg.reply(moods[random_num()])
    }
})

client.on('messageCreate', msg=>{
    let moods = ['ใจเย็นๆน้าค้าบบ','มีอะไรค่อยๆคุยกันน้าา','งุ้ยหยาบคายอ่าา']
    if (msg.content == 'หิวตีน'){
        msg.reply(moods[random_num()])
    }

})

client.login(process.env.TOKEN)


