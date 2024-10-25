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
            [1,2,3,4].map((item, idx)=>(
              <div className="type" key={idx}>
                <h6>Breast Cancer</h6>
                <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Read More</p>
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
      <Faqs data={faqs}/>
      <Disclaimer />
      {/* <!-- End Call To Action --> */}
      {/* Disclaimer */}
    </>
  );
};

export default index;
