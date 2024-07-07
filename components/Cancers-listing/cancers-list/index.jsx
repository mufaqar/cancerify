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
        <div className="auto-container px-0">
        <section className="job-categories">
        <div className="auto-container">
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
