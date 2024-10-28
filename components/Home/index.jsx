import Header from "./Header";
import Hero from "../Home/hero";
import CallToAction from "@/components/Home/CallToAction";
import OurMission from "@/components/Home/OurMission";
import TypesOfCancers from "@/components/Home/TypesOfCancers";
import MobileMenu from "../header/MobileMenu";
import Testimonials from "./Testimonials";
import Disclaimer from "@/components/Home/Disclaimer";
import BlogSection from "./BlogSection";
import Faqs from "../faqs/faqs";
import Link from "next/link";

const index = (props) => {
  const { testimonials, posts, page, cancers,mostsearcheds,ourMission, faqs } = props;

  const {hero, cancersHeading,newsHeading, newsFeedSection, testimonialHeading} = page?.homeOptions || {};


  const cleanMission = ourMission ? Object.values(ourMission) : [];
  

  return (
    <>
      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero mostsearcheds={mostsearcheds} hero={hero} />
      {/* <!-- End Hero Section --> */}

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 className="text_theme">{cancersHeading ? cancersHeading : 'Learn More About Cancer'}</h2>
          </div>
          {/* custom-row */}
          <div className=" custom-row flex flex-wrap justify-center ">
            {/* <!-- Category Block --> */}
            <TypesOfCancers cancers={cancers} />
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <OurMission page={page} cleanMission={cleanMission} />
      {/* <!-- End Steps Section --> */}

      <CallToAction newsFeedSection={newsFeedSection} />
      {/* <!-- End Call To Action --> */}

      <section className="testimonial-section  style-two alternate bg-white">
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title dark text-center">
            <h2>{testimonialHeading ? testimonialHeading : 'What Our Community Is Saying'}</h2>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            {/* <!-- Testimonial Carousel --> */}
            <div className="testimonial-carousel-three gap-x25">
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
          {/* End .carousel-outer */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Testimonial Section --> */}
      <section className="types">
        <div className="types-wrapper auto-container">
          {
            listOfCancer?.map((item, idx)=>(
              <div className={`type ${listOfCancer.length <= idx+2 &&  "remove_border"}`} key={idx}>
                <h6>{item?.title}</h6>
                <p>{item?.info}</p>
              </div>
            ))
          }
        </div>
        <div className="loadmore-btn">
          <button><Link href="/cancers">Show More</Link></button>
        </div>
      </section>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>{newsHeading ? newsHeading : 'Recent News Articles'}</h2>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <BlogSection posts={posts} />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}
      <Faqs data={faqs} />
      <Disclaimer />
      {/* <!-- End Call To Action --> */}
      {/* Disclaimer */}
    </>
  );
};

export default index;




const listOfCancer = [
  {
    "title": "Bladder Cancer",
    "info": "Early detection of bladder cancer significantly improves treatment success rates and long-term outcomes. With advancements in medical technology, minimally invasive procedures and targeted therapies are enhancing patient recovery. Top-quality care ensures personalized treatment plans that lead to better quality of life for bladder cancer survivors."
  },
  {
    "title": "Brain Cancer",
    "info": "Innovative treatments and cutting-edge research are transforming brain cancer care. Early diagnosis allows for more effective interventions, increasing survival rates and preserving neurological functions. Access to specialized neuro-oncologists and state-of-the-art facilities makes a substantial difference in patient outcomes."
  },
  {
    "title": "Breast Cancer",
    "info": "Breast cancer survival rates have dramatically improved thanks to early detection and advanced therapies. Regular screenings and awareness lead to prompt treatment, resulting in a growing number of survivors living healthy, fulfilling lives. Top breast cancer centers offer comprehensive care that addresses both physical and emotional well-being."
  },
  {
    "title": "Cervical Cancer",
    "info": "The fight against cervical cancer has seen remarkable progress due to preventive measures like the HPV vaccine and regular Pap tests. Early-stage cervical cancer is highly treatable, with many patients achieving complete remission. Quality care includes personalized treatment and support services that empower women throughout their journey."
  },
  {
    "title": "Colorectal Cancer",
    "info": "Colorectal cancer, when found early through screenings like colonoscopies, is often curable. Advances in surgical techniques and chemotherapy have improved survival rates significantly. Patients receiving top-notch care benefit from multidisciplinary teams that tailor treatments to individual needs, enhancing recovery and long-term health."
  },
  {
    "title": "Endometrial Cancer",
    "info": "Early-stage endometrial cancer has a high success rate with appropriate treatment. Minimally invasive surgical options and targeted therapies have improved patient experiences and outcomes. Expert gynecologic oncologists provide compassionate care that focuses on preserving fertility and quality of life."
  }
]
