import React, { useEffect, useState } from 'react';
import { Button, Platform, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePicking = () => {
  const [img, setImg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,

      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImg(result.uri);
    }
  };

  return (
    <View>
      <View
        style={{
          display: 'flex',
          width: '70%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}>
        <Button title='Pick an image' onPress={pickImage} disabled={!!img} />
        <Button
          title='Analyze'
          onPress={pickImage}
          disabled={!img}
          color={'green'}
        />
      </View>

      {img && (
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 400, resizeMode: 'cover' }}
        />
      )}
    </View>
  );
};

export { ImagePicking };
