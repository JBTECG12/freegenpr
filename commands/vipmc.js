const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function minecraft() {
    var rand = ['carolee.shepard@yahoo.com:jackrox1234',
'rosannaltrausch@gmail.com:Jan31994',
'jeffrey_2001@live.nl:Chipsoor8',
'118giggles@gmail.com:tanyasuwan135',
'rdtooker@live.com:ronald1200',
'mantheship@gmail.com:Ipod93lamp',
'melcaldeira@hotmail.com:r5jtov9x',
'keegan.mulcahy@yahoo.com:Keeg9811',
'noesalomoncastrejon@gmail.com:Salomon2002',
'nooochthespdooch@gmail.com:Nooch6632',
'wryyy@naver.com:qwaszx50',
'dan1978iel@yahoo.com:rachel0',
'yuk7on@gmail.com:olenparas1',
'blomst123456789@gmail.com:Maja2003',
'aitrus21@gmail.com:Sw1tchf00t',
'bladedtcl@gmail.com:wertywert',
'electrobrandino@gmail.com:Tangent1',
'lecoyote_1987@hotmail.com:creative87',
'natob03@gmail.com:Milkycow1',
'mineralaccident@hotmail.com:forsythe963',
'jordancraft88@gmail.com:j0rdan0420',
'philippe.poilvez@laposte.net:mouavoua27',
'godzilla2342@gmail.com:godzilla2342',
'punguawud1@gmail.com:stuman01',
'marioelvira_2000@yahoo.es:iobl2005',
'martinlecraft@hotmail.fr:57630mat',
'martinroujolle@free.fr:martin45',
'tigrafeed@yandex.ru:zrhbgth1',
'varat.bisalbutr@vanderbilt.edu:welcome8',
'saraproska17@hotmail.com:Emogal14',
'nanobots2@arcor.de:dresas666',
'esmeraldamcardenas@gmail.com:Cantarella9',
'tnewby8827@aol.com:pobox5881',
'oivindjahre@hotmail.com:halvor99',
       ];

    return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["VIP"].includes(r.name))) {
        message.channel.send(`:tada"You Just Generated a Minecraft Account:tada:`)
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle("Sucefully Generated a Minecraft Account!")
            .addField("Your Minecraft Account", (minecraft()), true)
            .setFooter(`Made by JBTech`)
            .setURL("https://discord.gg/tHhQcfT")
        return message.author.send({ embed });
    } else {
        message.channel.send(`:x:Get VIP to use this Command:x:`);
        message.author.send(`You cannot Use That Command because You aren't a VIP Member,To get VIP Invite 40 Peoples or Just Buy it :) ;),
For more Infos contact a Support Team, Thank you;)`);
    }
}

module.exports.help = {
    name: ">vipmc"
}
