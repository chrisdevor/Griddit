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

function doThingsWithImgLinks(imgLinks,permaLink){
        console.log(imgLinks);
        
        var imgLinksArray = Array.from(imgLinks);
        var imgPermaLinksArray = Array.from(permaLink);
        document.getElementById('photoGrid').innerHTML ="";
        for (i = 0; i < imgLinks.length; i++) {
                  var workingImgLink = imgLinksArray[i]
                  var workingPermaLink= imgPermaLinksArray[i]
                  var img = new Image();
                  
                  img.src = workingImgLink;
                  img.permaLink = workingPermaLink;
                  var bgImgWidth = img.width;
                  var bgImgHeight = img.height;

                  img.onload = function() {

                        console.log(this.permaLink);
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

                      if (this.width > 0) {
                        console.log(this.src + " has a width of " + this.width);
                        if (this.src.search("webm") >= 0) {
                          document.getElementById('photoGrid').innerHTML += '<video autoplay loop class="box-wrapper"> <source  type="video/webm" src= "' + this.src + '" data-url= "' + this.src + '" class="box" style=background-image:url("' + this.src + '")></video>';
                        } else {
                          document.getElementById('photoGrid').innerHTML += '<div class="box-wrapper"> <div  data-permaLink = "https://www.reddit.com' + this.permaLink  +'" data-url= "' + this.src + '" class="box" style=background-image:url("' + this.src + '")></div></div>';

                        }
                      }

                      $('.box-wrapper')
                      .on('mouseover', function(){
                        $(this).children('.box').css({'transform': 'scale(1.05)','z-index':'2'});
                      })
                      .on('mouseout', function(){
                        $(this).children('.box').css({'transform': 'scale(1)','z-index':'1'});
                      })

                      //                          var div = $('<a />', {href    : this.getAttribute("data-permaLink"), 'class': 'permaLinkDiv'});
                     

                      var imgToggle=false;
                      $('.box').on('click', function() {
                          $('.fullScreenimg').attr('src', this.getAttribute("data-url") );
                          $('.permaLinkDiv').attr('href', this.getAttribute("data-permaLink") );



                          if(imgToggle==true){
                            $('.showimagediv').addClass('hide');
                              imgToggle=false;
                          }
                          if(imgToggle==false){
                             $('.showimagediv').removeClass('hide'); 
                              imgToggle=true;
                          }

                      })
                      $('.showimagediv').on('click', function() {
                          var img = $('<img />', {src    : this.getAttribute("data-url"), 'class': 'fullScreenimg'});
                          var div = $('<a />', {href    : this.getAttribute("data-permaLink"), 'class': 'permaLinkDiv'});
                          if(imgToggle==true){
                            $('.showimagediv').addClass('hide');
                              divToggle=false;
                          }

                      })

                  }
                }
        

    }
    
   async function getPosts() {
        const imgLinks = await r.getSubreddit(subInput).getTop({time: timeInput}).map(post => post.url);
        const permaLink = await r.getSubreddit(subInput).getTop({time: timeInput}).map(post => post.permalink);
        // const permaLink = r.getSubreddit(subInput).getTop({time: timeInput}).map(post => post.permalink).then(console.log);
        doThingsWithImgLinks(imgLinks,permaLink);
    };
    
    getPosts();

}



/*        for (i = 0; i < imgLinks.length; i++) {
          var workingImgLink = imgLinksArray[i]

          var img = new Image();
          
          img.src = workingImgLink;
          var bgImgWidth = img.width;
          var bgImgHeight = img.height;
          img.onload = async function() {
            console.log(this);
            console.log(this.src + " Width: " + this.width);

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

              if (this.width > 0) {
                console.log(this.width);
                if (this.src.search("webm") >= 0) {
                  document.getElementById('photoGrid').innerHTML += '<video autoplay loop class="box-wrapper"> <source  type="video/webm" src= "' + this.src + '" data-url= "' + this.src + '" class="box" style=background-image:url("' + this.src + '")></video>';
                } else {
                  document.getElementById('photoGrid').innerHTML += '<div class="box-wrapper"> <div  data-url= "' + this.src + '" class="box" style=background-image:url("' + this.src + '")></div></div>';

                }
              }

          }
        }
    } */