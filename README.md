# Tracker-Extension
This project is a browser extension for Chrome, developed to track user activities on the domain: http://stackoverflow.com/*
This is an unpacked extension and is suitable for a developmental environment only. It is not ready for production(yet).
You can see you data logs of your interaction on this site: https://adaptive-web-bora.herokuapp.com

### Installation instructions
1. Download this repository.
2. On your Chrome browser address bar, type 'chrome://extensions' and hit enter.
3. Turn on 'Developer mode' if not already swtiched on.
4. Go to Load Unpacked.
5. Select the downloaded folder. You should be able to see it on the Load Unpacked section.
6. Toggle it on to start the extension.

### What does it track?
This extension tracks a host of user activities/information on StackOverflow.com:
1. Tags related to the page the user is currently on.
2. url of the current page.
3. url of the page the user is navigating to from the current page.
4. Text content if user has copied any content.
5. Content of user's seach query.
6. Scroll activity of the user for a page.
7. Favorite questions of the user.

### Why is it tracking?
The ultimate purpose of this project is to study user behaviour over a course of time on StackOverflow.
The data tracked through this extension is sent to a database from where will be retrieved and analysed 
for insights into the user's behaviour.
