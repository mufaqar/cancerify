import Header from "./Header";
import Hero from "../Home/hero";
import CallToAction from "@/components/Home/CallToAction";
import Candidates from "../candidates/Candidates";
import Blog from "../blog/Blog";
import CallToAction6 from "../call-to-action/CallToAction6";
import Footer from "./Footer";
import Funfact from "../fun-fact-counter/Funfact";
import Testimonia4 from "../testimonial/Testimonial4";
import JobCategorie1 from "../job-categories/JobCategorie1";
import OurMission from '@/components/Home/OurMission';
import TypesOfCancers from "@/components/Home/TypesOfCancers";
import MobileMenu from "../header/MobileMenu";

const index = () => {
  return (
    <>

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero />
      {/* <!-- End Hero Section --> */}

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Types of Cancers</h2>
            {/* <div className="text">2020 jobs live - 293 added today.</div> */}
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <TypesOfCancers />
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <OurMission />
      {/* <!-- End Steps Section --> */}

      <CallToAction />
      {/* <!-- End Call To Action --> */}


      <section
        className="testimonial-section style-two alternate"
        style={{ backgroundImage: "url(/images/background/9.png)" }}
      >
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title light text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            {/* <!-- Testimonial Carousel --> */}
            <div className="testimonial-carousel-three gap-x25">
              <Testimonia4 />
            </div>
          </div>
          {/* End .carousel-outer */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Testimonial Section --> */}

      {/* <!-- Fun Fact Section --> */}
      <div className="fun-fact-section style-two">
        <div className="auto-container">
          <div className="row" data-aos="fade-in">
            <Funfact />
          </div>
        </div>
      </div>
      {/* <!-- Fun Fact Section --> */}

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <CallToAction6 />
      {/* <!-- End Call To Action --> */}

    </>
  );
};

export default index;
