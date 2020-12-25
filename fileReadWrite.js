const fs = require('fs');

const previousIPFile = './previousip.txt';

readPreviousIP = function() {
    if (fs.existsSync(previousIPFile))
        return fs.readFileSync(previousIPFile);
    return '';
}

writePreviousIP = function(currentIP) {
    fs.writeFile(previousIPFile, currentIP, (err) => {
        if (err)
            throw err;
    });
}

exports.readPreviousIP = readPreviousIP;
exports.writePreviousIP = writePreviousIP;
