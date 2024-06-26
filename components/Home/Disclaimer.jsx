'use client'
import Link from "next/link";
const socialContent = [
  { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
  { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
  { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
  { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
];

const Disclaimer = () => {
  return (
    <footer className="call-to-action-three style-two">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title light">
            <h2>Disclaimer</h2>
            <div className="text">
            All information on this website is sourced from publicly available records and reputable sources. This listing does not imply endorsement by the listed professionals. We welcome corrections or updates to ensure the accuracy of the information.
            </div>
          </div>
          {/* End sec-title */}

         
        </div>
        {/* End outer-box */}
        <div className="social-links pl-2 flex justify-center ">
          {socialContent.map((item) => (
            <Link
              className="text-white px-3"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <i className={`fab ${item.icon}`}></i>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Disclaimer;
