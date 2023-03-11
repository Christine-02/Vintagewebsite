import './Vid.css';

function Vid() {
  return (
    <section className="par">
      <video
        className="vid"
        src="https://videos.ctfassets.net/bdvz0u6oqffk/54rQSqwZvom9QIgOyXdgl0/623e6c0d17db25d687220a304fa9ce33/_DESKTOP_GRAILED-BRAND-REEL-1280x720px.mp4"
        type="video/mp4"
        muted
        autoPlay={'autoplay'}
        loop
        playsInline
      ></video>
      <div>
        <h1 className="header-style">THE PLATFORM FOR PERSONAL STYLE</h1>
        <p className="p-style">
          <button onClick={window.scrollTo(500, 0)} className="custombtn">
            Shop Now
          </button>
          Buy & discover authenticated pieces from the world's top brands.
        </p>
      </div>
    </section>
  );
}

export default Vid;
