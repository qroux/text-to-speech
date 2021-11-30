import * as Speech from "expo-speech";

export function speak(word: any) {
  Speech.VoiceQuality.Enhanced;
  Speech.speak(word, { language: "en-USA", rate: 0.7 });
}
