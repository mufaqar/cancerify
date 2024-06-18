import Link from "next/link";
import jobCatContent from "@/data/job-catergories";

const TypesOfCancers = () => {
  return (
    <>
      {jobCatContent.map((item) => (
        <div
          className="category-block col-lg-3 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <span className={`icon ${item.icon}`}></span>
              <h4>
                <Link href="/cancers">{item.catTitle}</Link>
              </h4>
              <p>({item.jobNumber} open positions)</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TypesOfCancers;
