import './youtube.css'

export function YoutubeVideo({ videoId }) {
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

