import SearchForm from "@/components/Home/SearchForm";

const index = (props) => {
  const { locations } = props;
  return (
    <section
      className="banner-section-nine bg-theme-color"
      // style={{ backgroundImage: "url(/images/background/7.jpg)" }}
    >
      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box">
            <h3>Find Top Cancer Doctors</h3>
            <div className="text">
              We've researched and selected only the world's best oncologists!
            </div>
          </div>

          {/* <!-- Job Search Form --> */}
          <div className="job-search-form max-w-70 rounded-50">
            <SearchForm locations={locations} />
          </div>


        </div>
        {/* <!-- Job Search Form --> */}
      </div>
    </section>
  );
};

export default index;
