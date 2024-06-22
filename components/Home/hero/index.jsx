import SearchForm from "@/components/Home/SearchForm";


const index = (props) => {
  const { cancers } = props;
  return (
    <section
      className="banner-section-nine bg-theme-color"
      // style={{ backgroundImage: "url(/images/background/7.jpg)" }}
    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="0" data-aos="fade-up">
            <h3>Find Top Cancer Doctors</h3>
            <div className="text">
             We've researched and selected only the world's best oncologists!
            </div>
          </div>

          {/* <!-- Job Search Form --> */}
          <div
            className="job-search-form rounded-50"
            data-aos-delay="0"
            data-aos="fade-up"
          >
            <SearchForm cancers={cancers} />
          </div>
        </div>
        {/* <!-- Job Search Form --> */}


      </div>
    </section>
  );
};

export default index;
