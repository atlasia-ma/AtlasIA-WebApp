import YouTube, { YouTubePlayer } from "react-youtube";
import TitleSectionNonGlowing from "../../molecules/TitleSectionNonGlowing";
import { useState, useEffect } from "react";

export default function App() {
  let videoElement: YouTubePlayer = null;
  let checkEndTimeInterval = 1000; // Check every second

  let transcriptDuration = 5;
  let startTime = 100;
  let endTime = startTime + transcriptDuration;

  let currentVideoId = "C6xlYezjEgE";

  const [transcript, setTranscript] = useState("كذب ويلز علينا بشكل أساسي من الأول. أولاً منين تصرف بحال يلا كان هاذشي لأسباب قانونية. ومن بعد حيث تظاهر بأنه كان كيسمع لينا، وحتى الحذف دياله الفني.");
  const [textInput, setTextInput] = useState("");

  const nextVideo = () => {
    if (videoElement) {
      videoElement.target.pauseVideo();
    }
  };

  const togglePause = () => {
    if (videoElement) {
      videoElement.target.pauseVideo();
    }
  };

  const togglePlay = () => {
    if (videoElement) {
      videoElement.target.playVideo();
    }
  };

  const replayVideo = () => {
    if (videoElement) {
      videoElement.target.seekTo(startTime);
      videoElement.target.playVideo();
    }
  };

  const checkEndTime = () => {
    if (videoElement) {
      const currentTime = videoElement.target.getCurrentTime();
      if (currentTime >= endTime) {
        replayVideo();
      }
    }
  };

  useEffect(() => {
    const resizeListener = () => {
      const videoContainer = document.querySelector(".video-container");
      if (videoContainer) {
        const width = videoContainer.clientWidth;
        opts.width = width.toString();
      }
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const opts = {
    height: "450px",
    width: "650px", // Change to auto adjust width
    playerVars: {
      autoplay: 1
    }
  };

  const _onReady = (event: YouTubePlayer) => {
    videoElement = event;
    videoElement.target.seekTo(startTime);
    setInterval(checkEndTime, checkEndTimeInterval); // Check every second
  };

  return (
    <div className="max-w-2/3 mx-auto mt-8 p-6">
      <TitleSectionNonGlowing
        title=""
        subtitle="Aji nvalidiw 📜"
        classes="mb-4"
      />
      <div className="lb-4 mx-auto text-center">
        <div className="video-container">
          <YouTube videoId={currentVideoId} opts={opts} onReady={_onReady} />
        </div>
        <div className="p-10">
          <button onClick={nextVideo} className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold py-3 px-6 rounded mr-4">Previous Video</button>
          <button onClick={togglePlay} className="bg-green-100 hover:bg-green-200 text-green-900 font-bold py-3 px-6 rounded mr-4">Play</button>
          <button onClick={togglePause} className="bg-red-100 hover:bg-red-200 text-red-900 font-bold py-3 px-6 rounded mr-4">Pause</button>
          <button onClick={replayVideo} className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold py-3 px-6 rounded mr-4">Replay</button>
          <button onClick={nextVideo} className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold py-3 px-6 rounded mr-4">Next Video</button>
        </div>
      </div>

      <div>
        <div className="text-center">
          <h3 className="text-lg text-md font-medium mb-2">Transcript:</h3>
          <textarea
            rows={5}
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder=""
            className="mt-1 block mx-auto text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            style={{ width: '90%', maxWidth: '860px'}}
          />
        </div>
      </div>

      <button  className="bg-green-100 hover:bg-green-200 text-green-900 font-bold py-3 px-6 rounded mt-4 block mx-auto">Submit</button>
    </div>
  );
}
