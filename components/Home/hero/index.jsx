import SearchForm from "@/components/Home/SearchForm";
// import Funfact2 from "../../fun-fact-counter/Funfact2";

const index = () => {
  return (
    <section
      className="banner-section-nine bg-theme-color"
      // style={{ backgroundImage: "url(/images/background/7.jpg)" }}
    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="0" data-aos="fade-up">
            <h3>Find a Top Cancer Doctor</h3>
            <div className="text">
              Stay up to dated with the latest science back research
            </div>
          </div>

          {/* <!-- Job Search Form --> */}
          <div
            className="job-search-form rounded-50"
            data-aos-delay="0"
            data-aos="fade-up"
          >
            <SearchForm />
          </div>
        </div>
        {/* <!-- Job Search Form --> */}


      </div>
    </section>
  );
};

export default index;
