import React, { useState } from "react";
import { Container } from "reactstrap";
import { getTokenOrRefresh } from "../utils/token_util";
import { useRef } from "react";
import "./Custom.css";
const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

export default function SpeechText() {
  const [displayText, setDisplayText] = useState(
    "INITIALIZED: ready to test speech..."
  );

  const rec = useRef(null);

  async function sttFromMic() {
    const tokenObj = await getTokenOrRefresh();
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(
      tokenObj.authToken,
      tokenObj.region
    );
    speechConfig.speechRecognitionLanguage = "en-IN";

    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();

    rec.current = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

    setDisplayText("speak into your microphone...");

    rec.current.startContinuousRecognitionAsync();

    rec.current.recognized = (s, event) => {
      if (event.result.reason === speechsdk.ResultReason.RecognizedSpeech) {
        setDisplayText(event.result.text);
      } else if (event.result.reason === speechsdk.ResultReason.NoMatch) {
        console.log("NOMATCH: Speech could not be recognized.");
      }
    };
  }

  const stopRecording = () => {
    console.log("Recording Stopped");
    rec.current.stopContinuousRecognitionAsync();
  };

  return (
    <Container className="app-container">

      <div className="row main-container">
        <div className="col-6">
          <button
            
            onClick={() => {
              sttFromMic();
            }}
          >Start Recording</button>{" "}
        </div>
        <div className="col-6">
          <button
            
            onClick={() => {
              stopRecording();
            }}
          >Stop Recording</button>{" "}
        </div>
        <div className="col-6 output-display rounded">
          <code>{displayText}</code>
        </div>
      </div>
    </Container>
  );
}
