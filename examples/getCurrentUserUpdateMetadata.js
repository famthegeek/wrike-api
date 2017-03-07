const Wrike = require('../lib/wrike');
var client = new Wrike({
  bearer_token: process.env.WRIKE_BEARER_TOKEN
});

client.get('contacts',{me: true}, function(error,data,response){
  client.put('contacts/'+data.data[0].id,{metadata: [{key:"testMetaKey",value:"testMetaValue"}]}, function(error2,data2,response2){
    console.log(data2);
  });
});
