const crypto = require('crypto');

function getRandomUUID() {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  } else {
    return crypto.randomBytes(16).toString('hex');
  }
}

export const generateAgentId = () => {
  return getRandomUUID().toString();
}
