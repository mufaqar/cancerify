'use client';
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Blog6 = (props) => {
  const { posts } = props;
  const [filteredPosts, setFilteredPosts] = useState([...posts]);
  const searchParams = useSearchParams()

  const search = searchParams.get("search");
  
  useEffect(() => {
    if (search) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [search, posts]);


  return (
    <>
      {filteredPosts?.map((item) => (
        <div className="news-block col-lg-6 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <div className="image-box">
              {
                item.featuredImage?.node?.sourceUrl ? (
                  <figure className="image">
                    <Image
                      width={389}
                      height={258}
                      src={item.featuredImage?.node?.sourceUrl}
                      alt={item.title}
                    />
                  </figure>
                ) : (
                  <figure className="image">
                    <Image
                      width={389}
                      height={258}
                      src="https://placehold.co/389x258.png"
                      alt={item.title}
                    />
                  </figure>
                )
                //
              }
            </div>
            {/* End image-box */}

            <div className="lower-content">
              <ul className="post-meta">
                <li>
                  <a href="#">{moment(item?.date).format('MMMM DD, YYYY')}</a>
                </li>
                <li>
                  <a href="#">{item?.commentCount || 0} Comment</a>
                </li>
              </ul>
              {/* End post meta */}

              <h3>
                <Link href={`/blog/${item?.slug}`}>{item.title}</Link>
              </h3>

              <div
                className="text line-clamp-3"
                dangerouslySetInnerHTML={{ __html: item.excerpt }}
              />
              <Link href={`/blog/${item.slug}`} className="read-more ">
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
