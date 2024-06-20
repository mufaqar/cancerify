"use client";
import Link from "next/link";

const TypesOfCancers = (props) => {
  const { cancers } = props;

  return (
    <>
      {cancers?.length ? (
        cancers?.map((item) => (
          <div
            className="category-block col-lg-3 col-md-3 col-sm-3 col-xs-4 col-xss-6"
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
  );
};

export default TypesOfCancers;
