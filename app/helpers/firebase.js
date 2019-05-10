import uuid from 'uuid';

import firebase from '../../firebase';

uploadImage = async (uri, callback) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ext = uri.split('.').pop();
  const filename = `${uuid()}.${ext}`;
  const uploadTask = firebase
    .storage()
    .ref(`images/${filename}`)
    .put(blob);

  uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        callback({ progress });
      },
      error => {
        unsubscribe();
        callback({ loading: false });
        console.log('error storage: ', error);
      },
      () => {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(downloadURL => callback({ picture: downloadURL, loading: false }));
      },
    );
};

export default uploadImage;
