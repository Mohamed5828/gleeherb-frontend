import ReactPlayer from "react-player";
import React, { useRef, useState } from "react";
const VIDEO_PATH =
  "https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2FBrown%20Modern%20Aesthetic%20Beauty%20Salon%20Presentation.mp4?alt=media&token=56280d05-172d-4054-b3d4-6f60166d78c7";
function PlayerComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="">
      {!isLoading && (
        <img src="https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/Glee%2FScreenshot%202024-02-28%20134824.jpg?alt=media&token=950b4cae-aa7e-4766-bf26-0bc12619770f" />
      )}
      <video autoPlay loop muted>
        <source
          src={VIDEO_PATH}
          type="video/mp4"
          onLoadedData={handleVideoLoad}
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
export default PlayerComponent;
