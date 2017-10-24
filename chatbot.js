/* chatbot.js */

'use strict';
const Botkit = require('botkit');

const slack_token = xoxp-240978436997-241929367975-260891916900-28fdb99258c90d9eea9e4eff0d49b114;
const slack_outh = xoxb-260186484480-gMMNsiojEHcVgK1WIUgkpbr2;

exports.fn = {
    //start slackbot
    slackBot() {
        // initialisation
		const slackController = Botkit.slackbot({
			// optional: wait for a confirmation events for each outgoing message before continuing to the next message in a conversation
			require_delivery: true
		});
		const slackBot = slackController.spawn({
			token: slack_token
		});
		// create rtm connection
		slackBot.startRTM((err, bot, payload) => {
			if (err) {
				throw new Error('Could not connect to Slack');
			}
			slackController.log('Slack connection established.');
		});
		// listener that handles incoming messages
		slackController.hears(['.*'], ['direct_message', 'direct_mention'], (bot, message) => {
			slackController.log('Slack message received');
			bot.reply('I have received your message!')
		});
    }
};