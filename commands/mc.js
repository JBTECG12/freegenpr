const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function minecraft() {
    var rand = ['bosox11@earthlink.net:baseball9971',
'draven.welch111@gmail.com:pancake2',
'aitrus21@gmail.com:Sw1tchf00t',
'electrobrandino@gmail.com:Tangent1',
'Agrubbs20@gmail.com:Love6708',
'rdzischke@yahoo.com:zischke2',
'ryan-dutton@live.co.uk:lightning7',
'raulmorales817@gmail.com:OpTic2015',
'jasonrobsch@gmail.com:N0horizon',
'luigi_whitford@live.ca:lordmongoose001',
'nordryd13@gmail.com:mechagnome13',
'k.pritchjh@gmail.com:798977kp',
'rdboy357@yahoo.com:123abc10',
'bonzaiman@gmx.net:pepi0309pepi',
'nejhdw@gmail.com:Serenaty55',
'avnd@hotmail.co.uk:Cadovir1991',
'andrewshaw18@googlemail.com:kingfisher8',
'maxeythemaxey@gmail.com:cristy',
'tran.va.vn@gmail.com:Slad3d09',
'dtadevin77@hotmail.com:devina',
'skate645@gmail.com:sniper2222',
'imtkn11@gmail.com:donnie1029',
'vanekjessica@gmail.com:jv123456',
'travisthe2nd@aol.com:wildcat57',
'raggedybarley@gmail.com:techllama09',
'bpaoli@optonline.net:092197',
'bubba_949@hotmail.com:bajskorv123',
'cameron_rose5697@yahoo.com:coke2001',
'stephie_abney@yahoo.com:frankie1',
'Su.Edwin@hotmail.com:Edwin123',
'panol1969@yahoo.com:Remedios2409',
'rawr.major.pain@gmail.com:taek5won',
'mgold412@gmail.com:Momoman412',
'devosimms@gmail.com:lol123jfk',
'gaia.clymenus@gmail.com:persona3',
'gavset99@gmail.com:blackcat99',
'lolkiddy99@gmail.com:lolzack123',
'moi-c-toumi@live.fr:toumi14',
'brianacooper@yahoo.com:bvm013106',
'hoa3@msn.com:danang07',
'dreierletsplay@gmail.com:LukPhiJog',
'kimmermudaolsson@gmail.com:whatdoilivefor96',
'isak.holmer@gmail.com:lur9ng10',
'coledebardelaben@gmail.com:booklove1',
'ugoman96@Comcast.net:bucky500',
'tom.davi@orange.fr:Mimine12',
'allan.meggiorin@gmail.com:aenima79',
'exilgaming22@gmail.com:Frankfurt1889',
'caspervoges@hotmail.com:repsac18',
'ltsmith86@gmail.com:orst3426212',
'tylerd.chesney@gmail.com:28sharkrobot99',
'will.ac.masters@gmail.com:william10',
'akmontgomery@att.net:cole3008',
'michaelcrowther20@hotmail.com:As118977',
'jaminoussalah@gmx.de:RockLee92',
'bliss.morgan@gmail.com:slithy1981',
'deholexp@gmail.com:ncityexp0',
'kieronkieronkieron@hotmail.co.uk:kxdrjj89db',
'lilou05200@hotmail.com:tachot03021989',
'michael.ogorman@gmail.com:ka1tl1nemma',
'tvwhip@gmail.com:02lancer',
'xd-----@hotmail.com:tropica1',
'sara_isa_muffin@hotmail.co.uk:hohoho',
'mantheship@gmail.com:Ipod93lamp',
'Snakeman561@gmail.com:Kitkat56',
'aspiregamingexp@gmail.com:Cojo170223',
'enigma_tkl@hotmail.com:lagarto',
'tho.overeem@hotmail.com:wf1907v',
'josephgkim1221@gmail.com:9918703',
'singingtear@gmail.com:undertaker!1',
'stevenm0912@hotmail.co.uk:Pinkfish1993',
'isaac.mack@aol.com:GeorgiaPat0',
'colinbailey1988@gmail.com:Md2bntht',
'joshdjones@charter.net:Zxyte206',
'atrikones@gmail.com:Annika1429',
'pierre-alban-69@hotmail.fr:11021998pad',

        ];

    return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["@everyone"].includes(r.name))) {
        message.channel.send(`:tada:You Just Generated a Minecraft Account:tada:`)
        const embed = new RichEmbed()
            .setColor(0x00ff40)
            .setTimestamp()
            .setTitle("Sucefully Generated a Minecraft Account!")
            .addField("Your Minecraft Account", (minecraft()), true)
            .setFooter(`Made by JBTech`)
            .addField("Important", `\nThis is a 30% Working Alt because you are a User!`, true)
            .setURL("https://discord.gg/tHhQcfT")
        return message.author.send({ embed });
    } else {
        message.channel.send(`:x:You can't use That Command,Get VIP to use it ;):x:`);
        message.author.send(`You cannot Use That Command because You aren't a VIP Member,To get VIP Invite 40 Peoples or Just Buy it :) ;),
For more Infos contact a Support Team, Thank you;)`);
    }
}

module.exports.help = {
    name: ">mc"
}
