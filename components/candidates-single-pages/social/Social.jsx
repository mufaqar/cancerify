import Link from "next/link";

const Social = (props) => {
  const { socials } = props;


  return (
    
    <div className="social-links">
      {
        socials?.facebook && 
        <Link href={socials?.facebook || ''}>
        { <i className="fab fa-facebook-f"></i>}
      </Link>
      }
      {
        socials?.twitter && 
        <Link href={socials?.twitter || ''}>
        { <i className="fab fa-twitter"></i>}
      </Link>
      }
      {
        socials?.instagram && 
        <Link href={socials?.instagram || ''}>
        { <i className="fab fa-instagram"></i>}
      </Link>
      }
      {
        socials?.linkedin && 
        <Link href={socials?.linkedin || ''}>
        { <i className="fab fa-linkedin-in"></i>}
      </Link>
      }

 

    </div>
  );
};

export default Social;
