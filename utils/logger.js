const fs = require('fs');
const path = require('path');

const userAgentFile = path.join(__dirname,'../userAgents.json');

const saveUserAgent = (agentString)=>{

    let data = [];
    if(fs.existsSync(userAgentFile)){
        const raw = fs.readFileSync(userAgentFile);
        data = JSON.parse(raw);
    }
    data.push(agentString);
    fs.writeFileSync(userAgentFile,JSON.stringify(data,null,2));

    
}

module.exports= saveUserAgent;


