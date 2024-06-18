import Image from "next/image";

const OurMission = () => {
  const blockContent = {
    title: "Our Mission",
    descriptions: ` Cancerify's mission is to make the world's top cancer doctors more accessible and keep you updated with the latest science-backed cancer research.`,
    list: [
      {
        count: "1",
        text: `Don't worry We did the research for you! Search through only the top cancer doctors!`,
      },
      {
        count: "2",
        text: `There's a lot of misinformation out there stay up to date to the latest science backed  research!`,
      },
      {
        count: "3",
        text: `Trust and community. We do not monitize our platform this information is for the people!`,
      },
    ],
  };
  return (
    <section className="steps-section pt-0">
      <div className="auto-container">
        <div className="row">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <Image
                  width={608}
                  height={600}
                  src="/images/resource/steps-img.png"
                  alt="resource"
                />
              </figure>
              {/* <!-- Count Employers --> */}
              <div className="count-employers" data-aos="fade-up">
                <span className="title">300k+ Employers</span>
                <figure className="image">
                  <Image
                    width={209}
                    height={54}
                    src="/images/resource/multi-peoples.png"
                    alt="resource"
                  />
                </figure>
              </div>
            </div>
          </div>
          {/* End image-column */}

          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up">
              <div className="sec-title">
                <h2>{blockContent.title}</h2>
                <div className="text">{blockContent.descriptions}</div>
                <ul className="steps-list">
                  {blockContent.list.map((list, i) => (
                    <li key={i}>
                      <span className="count">{list.count}</span> {list.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* End .content-column */}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
