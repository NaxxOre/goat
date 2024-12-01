'use client'; // Next.js 13+ for client-side rendering

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const LiveVideo = () => {
  const videoRef = useRef(null);

  const videoSrc = 'https://pull.niues.live/live/stream-304148_lhd.m3u8?auth_key=1733065830-0-0-afc8cf91a54ed6020ad511537e47a88d';

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    } else {
      console.error('HLS is not supported in this browser.');
      alert('Your browser does not support HLS playback.');
    }
  }, [videoSrc]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Live Video Stream</h1>
      <video
        id="my-video_html5_api"
        ref={videoRef}
        className="vjs-tech"
        controls
        preload="auto"
        style={{
          width: '100%',
          maxWidth: '800px',
          border: '2px solid #333',
          borderRadius: '5px',
        }}
      >
        <source src={videoSrc} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

export default LiveVideo;
