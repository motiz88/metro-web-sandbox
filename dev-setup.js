if (__DEV__) {
  const HMRClient = require('metro-runtime/src/modules/HMRClient');
  const client = new HMRClient(`wss://${location.host}`);
  client.enable();
  console.log('HMRClient enabled');
}
