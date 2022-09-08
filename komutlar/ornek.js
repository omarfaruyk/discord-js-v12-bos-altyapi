const Discord = require('discord.js')

module.exports = {                                
    name: ['test', 'test1'],                        //Komut İsmini Belirtiyor
    yetki: 'MANAGE_MESSAGES',                       //Kullanıcının Hangi Yetkiye Sahip Olması Gerektiğini Gösteriyor
    botyetki: 'MANAGE_MESSAGES',                    //Botun Hangi Yetkiye Sahip Olması Gerektiğini Gösteriyor
    cooldown: 10,                                   //Komutun CoolDown Süresini(Saniye) Gösteriyor

    async execute(client, message, args) {          //Komut Handlerına Göre Tanımlama Yeri. Burayı Ellemeyin

        message.channel.send('Test Başarılı')

    }
}