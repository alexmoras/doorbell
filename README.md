# Doorbell
Doorbell is a very simple Vue.js 3 progressive web application that sends a post request to a webhook. That's literally all it does.

## Why?
Communal door entry is a pain. You need to get special keyfobs and issue them out, usually at a charge from the building management company.

This simple little web-app runs on a unique URL (kind of like a token URL) that can be shared with anyone. With that, they can access the page and send a request to the webhook.

## How?
The intercom in the flat has a [SwitchBot](https://switch-bot.com) stuck to it which presses the entry button when activated. The SwitchBot is connected to [Home Assistant](https://www.home-assistant.io/) over bluetooth. An automation is set up on Home Assistant to listen for a webhook and then activate the SwitchBot.

A user rings the intercom then opens the page on their phone, in turn activating the SwitchBot which presses the entry button.

## Ummm....
Yes, its quite a long-winded and hacky solution but its the easiest method without pulling things apart.

## Config
The web-app requires two environment variables to be set:
- `VITE_SECRET_PATH` is a unique URL which acts like a secret token. It must be prepended with `/`.
- `VITE_WEBHOOK` is the webhook URL, in my case it is a Home Assistant webhook.