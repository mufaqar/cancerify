import Link from "next/link";
import Image from "next/image";

const Blog6 = (props) => {
  const { posts,pageInfo } = props;
  return (
    <>
      {posts?.map((item) => (
        <div className="news-block col-lg-6 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Image
                  width={389}
                  height={258}
                  src={item.featuredImage?.node?.sourceUrl}
                  alt="blog post"
                />
              </figure>
            </div>
            {/* End image-box */}

            <div className="lower-content">
              <ul className="post-meta">
                <li>
                  <a href="#">August 31, 2021</a>
                </li>
                <li>
                  <a href="#">{item?.commentCount} Comment</a>
                </li>
              </ul>
              {/* End post meta */}

              <h3>
                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
              </h3>

              <div className="text" dangerouslySetInnerHTML={{__html:item.excerpt}} />
              <Link href={`/blog/${item.slug}`} className="read-more">
                Read More <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog6;
