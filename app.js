const reddit = require('./reddit');

/* -------------------- Reddit Scraper -------------------- */

(async () => {
	await reddit.initialize('BELGICA');

	let results = await reddit.getResults(30);

	debugger;
})();
