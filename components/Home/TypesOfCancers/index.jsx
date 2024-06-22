"use client";
import Link from "next/link";
import Image from "next/image";

const TypesOfCancers = (props) => {
  const { cancers } = props;

  return (
    <>
      {cancers?.length ? (
        cancers
          ?.sort((a, b) => a.title.localeCompare(b.title))
          ?.map((item) => (
            // sort the cancers by alphabetical order
            <div
              className="category-block custom-category-block col-lg-3 col-w-20 col-md-3 col-sm-3 col-xs-4 col-xss-6"
              key={item.id}
            >
              {/* inner-box  */}
              <Link
                href={`/cancers/${item?.slug}`}
                className="cancer_item flex items-center justify-center"
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

                {/* <h4 className="cancer_text"><strong >{item?.title}</strong> <span className="pl-1">Cancer</span></h4> */}
                <h4 className="cancer_text" dangerouslySetInnerHTML={{__html: `${item?.title}`}} />
              </Link>
            </div>
          ))
      ) : (
        <p>No cancers found!</p>
      )}
    </>
  );
};

export default TypesOfCancers;
