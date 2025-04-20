const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/requests.json');

const auditLogger = (req, res, next) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    headers: {
      'user-agent': req.headers['user-agent'] || '',
      'authorization': req.headers['authorization'] || '',
      'referer': req.headers['referer'] || '',
      'origin': req.headers['origin'] || '',
      'accept-language': req.headers['accept-language'] || '',
      'content-type': req.headers['content-type'] || ''
    }
  };

  let data = [];

  // Handle empty or invalid file
  if (fs.existsSync(logFilePath)) {
    try {
      const raw = fs.readFileSync(logFilePath, 'utf-8');
      data = raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Invalid JSON in log file. Resetting log file.');
      data = [];
    }
  }

  data.push(logEntry);

  fs.writeFileSync(logFilePath, JSON.stringify(data, null, 2));

  next();
};

module.exports = auditLogger;
