import Image from "next/image";

const OurMission = (props) => {
  const { page } = props;
  const ourMission = page?.homeOptions?.ourMission || {};
  
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
              
            </div>
          </div>
          {/* End image-column */}

          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up">
              <div className="sec-title">
                <h2>{ourMission?.heading}</h2>
                <div className="text">{ourMission?.description}</div>
                <ul className="steps-list">
                  {/* {Object.values(ourMission.lists) || [].map((list, i) => (
                    <li key={i}>
                      <span className="count">{ i + 1}</span> {list}
                    </li>
                  ))} */}
                  <li>
                    <span className="count">1</span> 
                    <div>
                    {ourMission.lists.itemOne}
                      <p className="text">{ourMission.lists.descriptionOne}</p>  
                    </div>
                  </li>
                  <li>
                    <span className="count">2</span> 
                    <div>
                    {ourMission.lists.itemTwo}
                      <p className="text">{ourMission.lists.descriptionTwo}</p>  
                    </div>
                  </li>
                  <li>
                    <span className="count">3</span> 
                    <div>
                    {ourMission.lists.itemThree}
                      <p className="text">{ourMission.lists.descriptionThree}</p>  
                    </div>
                  </li>
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
