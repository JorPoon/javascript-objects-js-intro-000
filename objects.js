var playlist = {
  travisScott: 'Sicko Mode',
};

function updatePlaylist( obj, key, value) {
  return Object.assign( {}, obj, { [key]: value });
}
