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


if(document.getElementById("subInputText").getAttribute("data-name")==''){
    var subInput = document.getElementById("subInputList").getAttribute("data-name");
}
else{
    var subInput = document.getElementById("subInputText").getAttribute("data-name");
}

var timeInput = document.getElementById("timeInput").getAttribute("data-name");

function doThingsWithImgLinks(imgLinks){
        console.log(imgLinks);
        
        var imgLinksArray = Array.from(imgLinks);
        document.getElementById('photoGrid').innerHTML ="";
        for(i=0;i<imgLinks.length;i++){
            var workingImgLink = imgLinksArray[i]
            if(workingImgLink.search("ww.img")>=0){
                workingImgLink = workingImgLink.replace("www.img","i.img");
                workingImgLink += '.jpg'
            }
            if(workingImgLink.search("/imgur")>=0){
                workingImgLink = workingImgLink.replace("/imgur","/i.imgur");
                workingImgLink += '.jpg'
            }
            if(workingImgLink.search("gifv")>=0){
                workingImgLink = workingImgLink.replace("gifv","gif");
            }
            if(workingImgLink.search("/gfy")>=0){
                workingImgLink = workingImgLink.replace("/gfy","/zippy.gfy");
                workingImgLink += '.webm'
            }
            
             var img = new Image;
            img.src = workingImgLink;
            var bgImgWidth = img.width;
            var bgImgHeight = img.height;
             if(workingImgLink.search("webm")>=0){
            document.getElementById('photoGrid').innerHTML += '<video autoplay loop class="box-wrapper"> <source  type="video/webm" src= "' + workingImgLink + '" data-url= "' + workingImgLink + '" class="box" style=background-image:url("' + workingImgLink + '")></video>';
            }
            // if(workingImgLink.search("webm")>=0){
            //     <blockquote class="imgur-embed-pub" lang="en" data-id="a/Hlxpp"><a href="//imgur.com/Hlxpp"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
            // }
            else{
            document.getElementById('photoGrid').innerHTML += '<div class="box-wrapper"> <div  data-url= "' + workingImgLink + '" class="box" style=background-image:url("' + workingImgLink + '")></div></div>';

            }
        }
        $('.box-wrapper')
        .on('mouseover', function(){
          $(this).children('.box').css({'transform': 'scale(1.05)','z-index':'2'});
        })
        .on('mouseout', function(){
          $(this).children('.box').css({'transform': 'scale(1)','z-index':'1'});
        })
        var imgToggle=false;
        $('.box').on('click', function() {
            var img = $('<img />', {src    : this.getAttribute("data-url"), 'class': 'fullScreenimg'});

            if(imgToggle==true){
                $('.showimagediv').html(img).hide();
                imgToggle=false;
            }
            if(imgToggle==false){
                $('.showimagediv').html(img).show();
                imgToggle=true;
            }

        })
        $('.showimagediv').on('click', function() {
            var img = $('<img />', {src    : this.getAttribute("data-url"), 'class': 'fullScreenimg'});
            if(imgToggle==true){
                $('.showimagediv').html(img).hide();
                imgToggle=false;
            }
        })

    }
    
   async function getPosts() {
        const imgLinks = await r.getSubreddit(subInput).getTop({time: timeInput}).map(post => post.url);
        doThingsWithImgLinks(imgLinks);
    };
    
    getPosts();

}



/*
var subInput = document.getElementById("subInput").getAttribute("data-name");
var timeInput = document.getElementById("timeInput").getAttribute("data-name");

function doThingsWithImgLinks(imgLinks){
        console.log(imgLinks);
        
        var imgLinksArray = Array.from(imgLinks);
        document.getElementById('photoGrid').innerHTML ="";
        for(i=0;i<imgLinks.length;i++){
            var workingImgLink = imgLinksArray[i]
            if(workingImgLink.search("/imgur")>=0){
                // console.log('true');
                workingImgLink.replace("/imgur","/i.imgur");
                workingImgLink += '.jpg'
            }
            // console.log(workingImgLink);
            var scaleDimension = (workingImgLink.width/workingImgLink.height);
            console.log(scaleDimension);
            var img = new Image;
            img.src = workingImgLink;
            var bgImgWidth = img.width;
            var bgImgHeight = img.height;
            if(bgImgHeight>bgImgWidth){
                var imgRatio = bgImgHeight/bgImgWidth;
                var widthLonger = false;
            }
            else{
                var imgRatio = bgImgWidth/bgImgHeight;
                var widthLonger = true;
            }
            console.log(bgImgHeight);
            document.getElementById('photoGrid').innerHTML += '<div class="tile" data-height="' + bgImgHeight  +'" data-width="' + bgImgWidth  +'" data-width-longer="' + widthLonger + '" data-scale="' + imgRatio + '" data-image="' + workingImgLink + '"></div>';
        }
        $('.tile')
        // tile mouse actions
        .on('mouseover', function(){
          $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
        })
        .on('mouseout', function(){
          $(this).children('.photo').css({'transform': 'scale(1)'});
        })
        .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});

     })
        */