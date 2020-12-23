const cs = require("currency-system")
exports.run = async (client, message, args) => {

    let money = args.join(" ");
    if (!money) return message.channel.send("Enter the amount you want to deposite.");

    let result = await cs.deposite(settings = {
        user: message.author,
        guild: message.guild,
        amount: money
    });
    message.channel.send(result);
}

exports.help = {
    name: "deposite",
    description: "A way to get money in of the bank.",
    usage: "deposite <amount>",
    example: "deposite 500"
}

exports.conf = {
    aliases: ["dep"],
    cooldown: 5
}