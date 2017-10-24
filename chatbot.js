/* chatbot.js */

'use strict';
const Botkit = require('botkit');

const slack_token = xxx;
const slack_outh = xxx;

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