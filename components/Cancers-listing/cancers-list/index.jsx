import Header from "@/components/Home/Header";
import MobileMenu from "../../header/MobileMenu";
import Link from "next/link";
import Disclaimer from "@/components/Home/Disclaimer";
import TypesOfCancers from "@/components/Home/TypesOfCancers";

const index = (props) => {
  const { cancers } = props;
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Header />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}
      <section className="cancer_wraper flex item-center">
        <div className="auto-container">
        <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            {/* <h2 className="text_theme">Learn More About Cancer</h2> */}
          </div>
          {/* custom-row */}
          <div className=" custom-row flex flex-wrap justify-center ">
            {/* <!-- Category Block --> */}
            <TypesOfCancers cancers={cancers} />
          </div>
        </div>
      </section>
        </div>
      </section>
      <Disclaimer />
      {/* <!--End Listing Page Section --> */}
    </>
  );
};

export default index;
