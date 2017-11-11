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



window.init = function(){


var subInput = document.getElementById("subInput").getAttribute("data-name");
var timeInput = document.getElementById("timeInput").getAttribute("data-name");

function doThingsWithImgLinks(imgLinks){
        console.log(imgLinks);
        
        var imgLinksArray = Array.from(imgLinks);
        document.getElementById('photoGrid').innerHTML ="";
        for(i=0;i<imgLinks.length;i++){
            document.getElementById('photoGrid').innerHTML += '<img src="' + imgLinksArray[i] + '">';
      
        }
    }
    
   async function getPosts() {
        const imgLinks = await r.getSubreddit(subInput).getTop({time: timeInput}).map(post => post.url);
        doThingsWithImgLinks(imgLinks);
    };
    
    getPosts();

}

