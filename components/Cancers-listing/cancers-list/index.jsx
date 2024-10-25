import Header from "@/components/Home/Header";
import MobileMenu from "../../header/MobileMenu";
import Link from "next/link";
import Disclaimer from "@/components/Home/Disclaimer";
import TypesOfCancers from "@/components/Home/TypesOfCancers";
import CallToAction from "@/components/Home/CallToAction";
import Image from "next/image";

const index = (props) => {
  const { cancers } = props;
  const data = [1, 2, 3, 4, 5];

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Header />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}
      {/* <section className="cancer_wraper flex item-center">
        <div className="auto-container px-0">
          <section className="job-categories">
            <div className="auto-container">
              <div className=" custom-row flex flex-wrap justify-center ">
                <TypesOfCancers cancers={cancers} />
              </div>
            </div>
          </section>
        </div>
      </section> */}

      <section className="common-cancer-main">
        <h4>Most common Cancers in the United States</h4>
        <p>Cancer touches the lives of millions across the globe, with certain types being more prevalent than others. The positive news is that advancements in medical science have led to significant improvements in early detection and treatment of the most common cancers—including breast, prostate, lung, and colorectal cancers—resulting in higher survival rates and better quality of life for patients. Early screening programs and innovative therapies empower individuals to catch cancer at its most treatable stages. These developments offer hope and motivation, demonstrating that with top-quality care and timely intervention, beating cancer is more achievable than ever before.</p>
      </section>

      <section className="_progress">
        <div className="progress-wrapper auto-container">
          <div className="first">
            <div>
              <Image src="/images/dummy-image.jpg" alt="image" className="main" width={400} height={500}/>
              <div className="images-child">
                <Image src="/images/dummy-image.jpg" alt="image" width={200} height={200}/>
                <Image src="/images/dummy-image.jpg" alt="image" width={200} height={200}/>
                <Image src="/images/dummy-image.jpg" alt="image" width={200} height={200}/>
              </div>
            </div>
          </div>
          <div className="secound">
            <div>
              {
                data.map((item, idx) => (
                  <div className="progress-step" style={{ position: 'relative' }} key={idx}>
                    <button>{idx + 1}</button>
                    {
                      data.length !== idx+1 && <div className="line"/>
                    }
                    <div>
                      <h5>Breast cancer</h5>
                      <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* <CallToAction newsFeedSection={''} /> */}

      <Disclaimer />
      {/* <!--End Listing Page Section --> */}
    </>
  );
};

export default index;
