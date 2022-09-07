const YoutubeEmbed = ({ embedId }) => {
   return(
      <div className="video-responsive">
         <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            loading="lazy"
         />
      </div>
   )
}

export default YoutubeEmbed;