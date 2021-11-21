import React, { useEffect, useState } from "react";
import { Button, Platform, Image, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImagePicking = ({
  setResult,
  setError,
  recognizeImage,
}: {
  setError: React.Dispatch<any>;
  setResult: React.Dispatch<any>;
  recognizeImage: (url: string) => void;
}) => {
  const [img, setImg] = useState<any>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
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
          display: "flex",
          width: "70%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <Button title="Pick an img" onPress={pickImage} disabled={!!img} />
        <Button
          title="Analyze"
          onPress={async () => {
            try {
              const res: any = await recognizeImage(img);
              setResult(res.blocks);
            } catch (err) {
              setError(err);
            }

            setImg("");
          }}
          disabled={!img}
          color={"green"}
        />
      </View>

      {img ? (
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 400, resizeMode: "cover" }}
        />
      ) : null}
    </View>
  );
};

export { ImagePicking };
