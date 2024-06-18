import Link from "next/link";

const CallToAction = () => {
  return (
    <section
      className="call-to-action-two bg-theme-color"
    //   style={{ backgroundImage: "url(/images/background/8.png)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>A news feed like no other!</h2>
          <div className="text">
            Check out the latest science back cancer news.
          </div>
        </div>
        {/* End sec-title */}

        <div className="btn-box">
          <Link href="/" className="theme-btn btn-style-three">
            Watch Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
