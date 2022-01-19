var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\Good bot$/;
  name1 = /^\Dye #$/;
  name2 = /^\Dimeo #$/;
  name3 = /^\Maj #$/;
  name4 = /^\Roster #$/;
  name5 = /^\LDP #$/;
  name6 = /^\Flip #$/;
  name7 = /^\Roll #$/;
  name8 = /^\Dean #$/;
  name9 = /^\Gray #$/;
  name10 = /^\Clayton #$/;
  name11 = /^\Ach #$/;
  name12 = /^\Moniot #$/;
  name13 = /^\Stackhouse #$/;
  name14 = /^\Senz #$/;
  name15 = /^\Roberts #$/;
  name16 = /^\Gnio #$/;
  name17 = /^\Supply #$/;
  name18 = /^\Lloyd #$/;
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(99);
    this.res.end();
  } else if (request.text && name1.test(request.text)) {
    this.res.writeHead(200);
    postMessage(1);
    this.res.end();
  } else if (request.text && name2.test(request.text)) {
    this.res.writeHead(200);
    postMessage(2);
    this.res.end();
  } else if (request.text && name3.test(request.text)) {
    this.res.writeHead(200);
    postMessage(3);
    this.res.end();
  } else if (request.text && name4.test(request.text)) {
    this.res.writeHead(200);
    postMessage(4);
    this.res.end();
  } else if (request.text && name5.test(request.text)) {
    this.res.writeHead(200);
    postMessage(5);
    this.res.end();
  } else if (request.text && name6.test(request.text)) {
    this.res.writeHead(200);
    postMessage(6);
    this.res.end();
  } else if (request.text && name7.test(request.text)) {
    this.res.writeHead(200);
    postMessage(7);
    this.res.end();
  } else if (request.text && name8.test(request.text)) {
    this.res.writeHead(200);
    postMessage(8);
    this.res.end();
  } else if (request.text && name9.test(request.text)) {
    this.res.writeHead(200);
    postMessage(9);
    this.res.end();
  } else if (request.text && name10.test(request.text)) {
    this.res.writeHead(200);
    postMessage(10);
    this.res.end();
  } else if (request.text && name11.test(request.text)) {
    this.res.writeHead(200);
    postMessage(11);
    this.res.end();
  } else if (request.text && name12.test(request.text)) {
    this.res.writeHead(200);
    postMessage(12);
    this.res.end();
  } else if (request.text && name13.test(request.text)) {
    this.res.writeHead(200);
    postMessage(13);
    this.res.end();   
  } else if (request.text && name14.test(request.text)) {
    this.res.writeHead(200);
    postMessage(14);
    this.res.end();   
  } else if (request.text && name15.test(request.text)) {
    this.res.writeHead(200);
    postMessage(15);
    this.res.end();   
  } else if (request.text && name16.test(request.text)) {
    this.res.writeHead(200);
    postMessage(16);
    this.res.end();   
  } else if (request.text && name17.test(request.text)) {
    this.res.writeHead(200);
    postMessage(17);
    this.res.end();   
  } else if (request.text && name18.test(request.text)) {
    this.res.writeHead(200);
    postMessage(18);
    this.res.end();   
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(num) {
  var botResponse, options, body, botReq;
  
  if(num == 99)
    botResponse = cool();
  else if(num == 1)
    botResponse = 'Dye: \n 702-497-4714 \n cdye@nevada.unr.edu';
  else if(num == 2)
    botResponse = 'CPT DiMeo: \n 401-641-1415 \n mdimeo@unr.edu';
  else if(num == 3)
    botResponse = 'Maj Bauleke: \n rbauleke@unr.edu';
  else if(num == 4)
    botResponse = 'https://docs.google.com/spreadsheets/u/1/d/1wXzUxQz4r6D9RKLqjOOedD4Be2oVIBNc/edit#gid=789864109';
  else if(num == 5)
    botResponse = 'https://docs.google.com/spreadsheets/d/18fM5bohd8KJ9lc5FpKRMLWFHbjM6aIGX/edit#gid=634745477';
  else if(num == 6)
  {
    if(Math.floor(Math.random() * 2) == 0)
      botResponse = 'Heads';
    else
      botResponse = 'Tails'
  }
  else if(num == 7)
    botResponse = String(Math.floor(Math.random() * 6) + 1);
  else if(num == 8)
    botResponse = 'Dean: \n 916-276-3815 \n zpdean08@gmail.com';
  else if(num == 9)
    botResponse = 'Gray: \n 775-720-9151 \n hannah.gray1200@gmail.com';
  else if(num == 10)
    botResponse = 'Clayton: \n 808-482-9181 \n lclayton@nevada.unr.edu';
  else if(num == 11)
    botResponse = 'Mrs. Beach: \n 775-682-7473 \n lharris@unr.edu';
  else if(num == 12)
    botResponse = 'LTC Moniot: \n 775-682-7471 \n dmoniot@unr.edu';
  else if(num == 13)
    botResponse = 'CPT Stackhouse: \n  775-682-7468 \n  astackhouse@unr.edu';
  else if(num == 14)
    botResponse = 'MSG Senz: \n  240-217-8343  \n bsenz@unr.edu';
  else if(num == 15)
    botResponse = 'SSG Roberts: \n  775-682-7476  \n  blakeroberts@unr.edu';
  else if(num == 16)
    botResponse = 'Mr. Gnio: \n 775-682-7472  \n  tgniotczynski@unr.edu';
  else if(num == 17)
    botResponse = 'Mrs. Beach: \n 775-682-7473 \n lharris@unr.edu';
  else if(num == 18)
    botResponse = 'Mr. Lloyd: \n  775-682-7470 \n jameslloyd@unr.edu';
  
  botResponse += '\n\n*beep boop*';
    
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };


  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
