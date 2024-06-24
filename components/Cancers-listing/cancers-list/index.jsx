import Header from "@/components/Home/Header";
import MobileMenu from "../../header/MobileMenu";
import Link from "next/link";

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
          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <>
              {cancers?.length ? (
                cancers
                  ?.sort((a, b) => a.title.localeCompare(b.title))
                  ?.map((item) => (
                    !item?.cancersOptions?.disableFromUser &&
                    <div
                      className="category-block col-lg-3 col-w-20 col-md-3 col-sm-3 col-xs-4 col-xss-6"
                      key={item.id}
                    >
                      <Link
                        href={`/cancers/${item?.slug}`}
                        className="inner-box flex items-center"
                      >
                        {item?.cancersOptions?.cancerIcon?.sourceUrl && (
                          <div className="cancer_icons ">
                            <Image
                              width={50}
                              height={50}
                              src={item?.cancersOptions?.cancerIcon?.sourceUrl}
                              alt="item brand"
                            />
                          </div>
                        )}

                        <h4 className="cancer_text">{item?.title.replace(/(<([^>]+)>)/gi, "")}</h4>
                      </Link>
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
