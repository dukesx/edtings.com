import { MediaOutlet, MediaPIPButton, MediaPlayer } from "@vidstack/react";
import "vidstack/styles/defaults.css";
const EdtingsPlayer = () => {
  return (
    <MediaPlayer
      controls
      aspectRatio={9 / 16}
      src="https://vz-0776d443-c4b.b-cdn.net/35995471-db0b-45b0-8ed7-39e096a61f51/playlist.m3u8"
      poster="https://vz-0776d443-c4b.b-cdn.net/35995471-db0b-45b0-8ed7-39e096a61f51/thumbnail.jpg"
    >
      {/* ^ remove `controls` attribute if you're designing a custom UI */}
      <MediaOutlet />
    </MediaPlayer>
  );
};

export default EdtingsPlayer;
