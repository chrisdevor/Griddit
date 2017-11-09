


    var async = require('async');
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


var http = require('http');
http.createServer(function(req,res){
    
    function doThingsWithImgLinks(imgLinks){
        console.log(imgLinks);
        
        var imgLinksArray = Array.from(imgLinks);
        console.log(imgLinksArray[0]);
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.write(imgLinksArray[0]);  
        res.end();
    }
    
   async function getPosts() {
       
         const imgLinks = await r.getSubreddit('earthporn').getTop({time: 'all'}).map(post => post.url);
         doThingsWithImgLinks(imgLinks);
    };
    
    getPosts();
    
}).listen(process.env.PORT,process.env.IP);
console.log('Server running!');