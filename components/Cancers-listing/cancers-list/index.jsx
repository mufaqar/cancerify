import Header from "@/components/Home/Header";
import DefaulHeader2 from "../../header/DefaulHeader2";
import MobileMenu from "../../header/MobileMenu";
import Link from "next/link";

const index = (props) => {
  const { cancers } = props;
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Header   />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}
      <section className="cancer_wraper flex item-center">
        <div className="auto-container">
          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <>
              {cancers?.length ? (
                cancers?.map((item) => (
                  <div
                    className="category-block col-lg-3 col-w-20 col-md-3 col-sm-3 col-xs-4 col-xss-6"
                    key={item.id}
                  >
                    <div className="inner-box">
                      <Link
                        href={`/cancers/${item?.slug}`}
                        className="content cancers "
                      >
                        <h4>{item?.title}</h4>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No cancers found!</p>
              )}
            </>
          </div>
        </div>
      </section>

      {/* <!--End Listing Page Section --> */}
    </>
  );
};

export default index;
