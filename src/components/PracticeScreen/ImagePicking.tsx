import React, { useEffect, useState } from "react";
import { Platform, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import type { Blocks, Response } from "../../helpers/mlkit";
import CustomFab from "./CustomFab";
import ImagePreview from "./ImagePreview";
import { useNavigation } from "@react-navigation/native";
import ArrowAnimation from "./ArrowAnimation";

const ImagePicking = ({
  result,
  setResult,
  setError,
  recognizeImage,
}: {
  result: Blocks;
  setError: React.Dispatch<any>;
  setResult: React.Dispatch<any>;
  recognizeImage: (url: string) => Promise<Response>;
}) => {
  const [img, setImg] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomFab
          img={img}
          loading={loading}
          firstAction={pickImage}
          secondAction={processImage}
        />
      ),
    });
  }, [img, loading]);

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
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.cancelled) setImg(result.uri);
  };

  const processImage = async () => {
    setLoading(true);
    try {
      const res = await recognizeImage(img);
      setResult(res.blocks);
    } catch (err) {
      setError(err);
    }

    setImg("");
    setLoading(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          // borderColor: "blue",
          // borderWidth: 1,
        }}
      >
        <ArrowAnimation hidden={img || result.length > 0} />
        <ImagePreview img={img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    // borderColor: "red",
    // borderWidth: 1,
  },
});

export { ImagePicking };
