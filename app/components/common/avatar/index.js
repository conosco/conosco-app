import React from 'react';
import { TouchableOpacity, View, ActivityIndicator, Image } from 'react-native';

import style from './style';

const cam = require('../../../../assets/img/cam.png');

const Avatar = ({ size, progress, loading, uploaded, uri, onPress, callback }) => (
  <View style={[style.shadow, style.bg, { width: size, height: size, borderRadius: size / 2 }]}>
    {loading || (uploaded !== null && !uploaded) ? <ActivityIndicator style={[style.image]} color={'white'} size='small' /> : null}
    <TouchableOpacity
      onPress={!loading && uri === '' ? onPress : () => { }}
      style={[style.shadow, style.bg, { width: size, height: size, borderRadius: size / 2 }]}
    >
      {!loading && uri === '' ? <Image source={cam} style={{ width: size / 2, height: size / 2 }} /> : null}
      {loading || (uploaded !== null && !uploaded) ? <View style={[style.progress, { width: size, height: progress }]} /> : null}
      {progress === 100 && !loading && uri !== '' ?
        <Image
          onLoadStart={() => callback(false)}
          onLoadEnd={() => callback(true)}
          resizeMode='cover'
          source={{ uri }}
          style={{ width: size, height: progress }}
        />
        : null}
    </TouchableOpacity>
  </View>
);

export default Avatar;