import Header from "./Header";
import Hero from "../Home/hero";
import CallToAction from "@/components/Home/CallToAction";
import OurMission from '@/components/Home/OurMission';
import TypesOfCancers from "@/components/Home/TypesOfCancers";
import MobileMenu from "../header/MobileMenu";
import Testimonials from "./Testimonials";
import Disclaimer from "./Disclaimer";
import BlogSection from "./BlogSection";


const index = (props) => {
  const {locations,testimonials, posts, page,cancers} = props
  
  return (
    <>

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero locations={locations}/>
      {/* <!-- End Hero Section --> */}

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 className="text_theme mx-5">Learn more about these cancers</h2>
            
          </div>

          <div
            className="row custom-row"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            
            {/* <!-- Category Block --> */}
            <TypesOfCancers cancers={cancers} />
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <OurMission page={page} />
      {/* <!-- End Steps Section --> */}

      <CallToAction />
      {/* <!-- End Call To Action --> */}


      <section
        className="testimonial-section  style-two alternate bg-white"
      >
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title dark text-center">
            <h2>Testimonials From Our Customers</h2>
            {/* <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div> */}
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

    

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            {/* <div className="text">
              Fresh job related news content posted each day.
            </div> */}
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <BlogSection posts={posts} />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <Disclaimer />
      {/* <!-- End Call To Action --> */}
      {/* Disclaimer */}
    </>
  );
};

export default index;
