console.log('Node is installed!');

require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
const client = new Snoostorm(r);

// Configure options for stream: subreddit & results per query
const streamOpts = {
    subreddit: 'EarthPorn',
    results: 1
};

// Create a Snoostorm CommentStream with the specified options
const comments = client.CommentStream(streamOpts);



//const submission = r.getSubreddit('earthporn').getTop({time: 'all'}).then(console.log);

var imgArray = [];

var imgString = r.getSubreddit('earthporn').getTop({time: 'all'}).map(post => post.url).then(console.log);





// console.log(submission);

// On comment, perform whatever logic you want to do
// comments.on('comment', (comment) => {
//     // console.log(comment);
// });


