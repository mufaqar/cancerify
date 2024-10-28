'use client';
import Header from './Header';
import Hero from '../Home/hero';
import CallToAction from '@/components/Home/CallToAction';
import OurMission from '@/components/Home/OurMission';
import TypesOfCancers from '@/components/Home/TypesOfCancers';
import MobileMenu from '../header/MobileMenu';
import Testimonials from './Testimonials';
import Disclaimer from '@/components/Home/Disclaimer';
import BlogSection from './BlogSection';
import Faqs from '../faqs/faqs';
import Link from 'next/link';
import { useState } from 'react';

const index = (props) => {
  const {
    testimonials,
    posts,
    page,
    cancers,
    mostsearcheds,
    ourMission,
    faqs,
  } = props;
  const {
    hero,
    cancersHeading,
    newsHeading,
    newsFeedSection,
    testimonialHeading,
  } = page?.homeOptions || {};
  const cleanMission = ourMission ? Object.values(ourMission) : [];
  const [visibleCount, setVisibleCount] = useState(10); // Initially show 10 items
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Increase count by 10
  };

  return (
    <>
      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero mostsearcheds={mostsearcheds} hero={hero} />
      {/* <!-- End Hero Section --> */}

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2 className="text_theme">
              {cancersHeading ? cancersHeading : 'Learn More About Cancer'}
            </h2>
          </div>
          {/* custom-row */}
          <div className=" custom-row flex flex-wrap justify-center ">
            {/* <!-- Category Block --> */}
            <TypesOfCancers cancers={cancers} />
          </div>
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <OurMission page={page} cleanMission={cleanMission} />
      {/* <!-- End Steps Section --> */}

      <CallToAction newsFeedSection={newsFeedSection} />
      {/* <!-- End Call To Action --> */}

      <section className="testimonial-section  style-two alternate bg-white">
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title dark text-center">
            <h2>
              {testimonialHeading
                ? testimonialHeading
                : 'What Our Community Is Saying'}
            </h2>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            {/* <!-- Testimonial Carousel --> */}
            <div className="testimonial-carousel-three gap-x25">
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
          {/* End .carousel-outer */}
        </div>
        {/* End auto-container */}
      </section>
      {/* <!-- End Testimonial Section --> */}
      <section className="types">
        <div className="types-wrapper auto-container">
          {listOfCancer?.slice(0, visibleCount).map((item, idx) => (
            <div
              className={`type ${
                listOfCancer?.slice(0, visibleCount).length <= idx + 2 &&
                'remove_border'
              }`}
              key={idx}
            >
              <h6>   <Link href={`/cancers/${item?.url}`}>{item?.title}</Link></h6>
              <p>{item?.info}</p>
            </div>
          ))}
        </div>
        {visibleCount < listOfCancer.length && ( // Show button only if there are more items
          <div className="loadmore-btn">
            <button onClick={handleShowMore}>Show More</button>
          </div>
        )}
      </section>

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>{newsHeading ? newsHeading : 'Recent News Articles'}</h2>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <BlogSection posts={posts} />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}
      <Faqs data={faqs} />
      <Disclaimer />
      {/* <!-- End Call To Action --> */}
      {/* Disclaimer */}
    </>
  );
};

export default index;

const listOfCancer = [
  {
    title: 'Bladder Cancer',
    info: 'Early detection of bladder cancer significantly improves treatment success rates and long-term outcomes. With advancements in medical technology, minimally invasive procedures and targeted therapies are enhancing patient recovery. Top-quality care ensures personalized treatment plans that lead to better quality of life for bladder cancer survivors.',
    url: 'bladder-cancer',
  },
  {
    title: 'Brain Cancer',
    info: 'Innovative treatments and cutting-edge research are transforming brain cancer care. Early diagnosis allows for more effective interventions, increasing survival rates and preserving neurological functions. Access to specialized neuro-oncologists and state-of-the-art facilities makes a substantial difference in patient outcomes.',
    url: 'brain-cancer'
  },
  {
    title: 'Breast Cancer',
    info: 'Breast cancer survival rates have dramatically improved thanks to early detection and advanced therapies. Regular screenings and awareness lead to prompt treatment, resulting in a growing number of survivors living healthy, fulfilling lives. Top breast cancer centers offer comprehensive care that addresses both physical and emotional well-being.',
    url: 'breast-cancer',
  },
  {
    title: 'Cervical Cancer',
    info: 'The fight against cervical cancer has seen remarkable progress due to preventive measures like the HPV vaccine and regular Pap tests. Early-stage cervical cancer is highly treatable, with many patients achieving complete remission. Quality care includes personalized treatment and support services that empower women throughout their journey.',
    url: 'cervical-cancer',
  },
  {
    title: 'Colorectal Cancer',
    info: 'Colorectal cancer, when found early through screenings like colonoscopies, is often curable. Advances in surgical techniques and chemotherapy have improved survival rates significantly. Patients receiving top-notch care benefit from multidisciplinary teams that tailor treatments to individual needs, enhancing recovery and long-term health.',
    url: 'colorectal-cancer',
  },
  {
    title: 'Endometrial Cancer',
    info: 'Early-stage endometrial cancer has a high success rate with appropriate treatment. Minimally invasive surgical options and targeted therapies have improved patient experiences and outcomes. Expert gynecologic oncologists provide compassionate care that focuses on preserving fertility and quality of life.',
    url: 'endometrial-cancer',
  },
  {
    title: 'Esophageal Cancer',
    info: 'Advancements in esophageal cancer treatment have led to better prognosis and increased survival rates, especially when detected early. Innovative therapies and precision medicine offer hope to patients. Receiving care from specialists in top cancer centers ensures access to the latest treatment options and supportive care services.',
    url: 'endometrial-cancer',
  },
  {
    title: 'Kidney Cancer',
    info: 'Early detection of kidney cancer often leads to successful treatment outcomes. Modern surgical techniques, such as robotic-assisted surgery, minimize recovery time and improve quality of life. Expert care teams provide personalized approaches that enhance survival rates and patient satisfaction.',
    url: 'kidney-cancer',
  },
  {
    title: 'Laryngeal Cancer',
    info: 'With early diagnosis, laryngeal cancer patients have a higher chance of preserving their voice and normal breathing. Advanced treatments aim to eliminate cancer while maintaining laryngeal functions. Access to skilled specialists and rehabilitation services contributes to positive long-term outcomes.',
    url: 'laryngeal-cancer',
  },
  {
    title: 'Leukemia',
    info: 'Innovative therapies have revolutionized leukemia treatment, leading to increased remission rates and extended survival. Early detection and prompt treatment are critical. Patients under the care of leading hematologists benefit from cutting-edge research and clinical trials that offer new hope.',
    url: 'leukemia',
  },
  {
    title: 'Liver Cancer',
    info: 'Early-stage liver cancer treatments have become more effective, with options like localized therapies and liver transplantation improving survival. Top-quality care involves a multidisciplinary approach, ensuring patients receive comprehensive treatment plans tailored to their specific needs.',
    url: 'liver-cancer',
  },
  {
    title: 'Lung Cancer',
    info: 'Significant advancements in lung cancer screening and targeted therapies have improved early detection and treatment success. Patients diagnosed at an early stage have a much better prognosis. Access to leading oncologists and personalized care plans enhances the likelihood of positive outcomes.',
    url: 'lung',
  },
  {
    title: 'Melanoma of the Skin',
    info: 'Early detection of melanoma leads to highly effective treatment and a high cure rate. Regular skin checks and awareness of skin changes are vital. Top dermatologists and oncologists provide advanced treatments that not only remove cancer but also focus on aesthetic outcomes.',
    url: 'melanoma-of-the-skin',
  },
  {
    title: 'Non-Hodgkin Lymphoma',
    info: 'Treatment advancements in non-Hodgkin lymphoma have led to higher remission rates and improved quality of life. Early diagnosis allows for more effective use of targeted therapies and immunotherapies. Specialized care from experienced oncologists contributes to successful patient experiences.',
    url: 'non_hodgkin-lymphoma',
  },
  {
    title: 'Oral Cancer',
    info: 'When detected early, oral cancer treatment can be less invasive and more successful. Advances in reconstructive surgery and rehabilitation help patients maintain speech and swallowing functions. Quality care includes a focus on both cancer eradication and the preservation of essential life activities.',
    url: 'oral-cancer',
  },
  {
    title: 'Ovarian Cancer',
    info: 'Early-stage ovarian cancer treatment has a significantly higher success rate. Awareness of symptoms and risk factors leads to prompt medical attention. Top gynecologic oncologists provide advanced surgical options and chemotherapy regimens that improve survival and preserve fertility when possible.',
    url: 'ovarian-cancer',
  },
  {
    title: 'Pancreatic Cancer',
    info: 'While pancreatic cancer is challenging, early detection and innovative treatments are improving outcomes. Participation in clinical trials and access to specialized care centers offer patients additional options. Comprehensive care teams focus on aggressive treatment and supportive care to enhance quality of life.',
    url: 'pancreatic-cancer',
  },
  {
    title: 'Prostate Cancer',
    info: "Prostate cancer detected early often requires minimal intervention, with options like active surveillance or targeted therapies. Advances in treatment have led to high survival rates and preservation of urinary and sexual functions. Top urologists provide personalized care that aligns with patients' lifestyles and preferences.",
    url: 'prostate-cancer',
  },
  {
    title: 'Stomach Cancer',
    info: 'Early-stage stomach cancer treatment has become more effective with minimally invasive surgeries and tailored chemotherapy. Early detection significantly increases the chances of successful treatment. Expert care ensures patients receive the most advanced therapies available.',
    url: 'stomach-cancer',
  },
  {
    title: 'Thyroid Cancer',
    info: 'Thyroid cancer has one of the highest treatment success rates, especially when found early. Most patients achieve full remission with appropriate surgical and radioactive treatments. Specialized endocrine surgeons and oncologists provide care that minimizes side effects and supports hormonal balance.',
    url: 'thyroid-cancer',
  },
];
