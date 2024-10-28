import Header from "@/components/Home/Header";
import MobileMenu from "../../header/MobileMenu";
import Link from "next/link";
import Disclaimer from "@/components/Home/Disclaimer";
import TypesOfCancers from "@/components/Home/TypesOfCancers";
import CallToAction from "@/components/Home/CallToAction";
import Image from "next/image";
import Faqs from "@/components/faqs/faqs";

const index = (props) => {
  const { cancers, faqs } = props;

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <Header />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}
      {/* <section className="cancer_wraper flex item-center">
        <div className="auto-container px-0">
          <section className="job-categories">
            <div className="auto-container">
              <div className=" custom-row flex flex-wrap justify-center ">
                <TypesOfCancers cancers={cancers} />
              </div>
            </div>
          </section>
        </div>
      </section> */}

      <section className="common-cancer-main">
        <h4>Most common Cancers in the United States</h4>
        <p>Cancer touches the lives of millions across the globe, with certain types being more prevalent than others. The positive news is that advancements in medical science have led to significant improvements in early detection and treatment of the most common cancers—including breast, prostate, lung, and colorectal cancers—resulting in higher survival rates and better quality of life for patients. Early screening programs and innovative therapies empower individuals to catch cancer at its most treatable stages. These developments offer hope and motivation, demonstrating that with top-quality care and timely intervention, beating cancer is more achievable than ever before.</p>
      </section>

      <section className="_progress">
        <div className="progress-wrapper auto-container">
          <div className="first">
            <div>
              <Image src="/images/dummy-image.jpg" alt="image" className="main" width={400} height={500}/>
              <div className="images-child">
                <Image src="/images/dummy-image.jpg" alt="image" width={200} height={200}/>
                <Image src="/images/dummy-image.jpg" alt="image" width={200} height={200}/>
                <Image src="/images/dummy-image.jpg" alt="image" width={200} height={200}/>
              </div>
            </div>
          </div>
          <div className="secound">
            <div>
              {
                first.map((item, idx) => (
                  <div className="progress-step" style={{ position: 'relative' }} key={idx}>
                    <div className="btn-outer">
                    <button>{idx + 1}</button>
                    </div>
                    {
                      first.length !== idx+1 && <div className="line"/>
                    }
                    <div>
                      <h5>{item?.title}</h5>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <CallToAction newsFeedSection={''} subTitle="find a doctor" />

      <section className="auto-container ">
        <div className="listing-2">
            {
              secound?.map((item,id)=>(
                <div key={id} className="list">
                  <button>{id + 1}</button>
                  <div className="content">
                    <h5>{item?.title}</h5>
                    <p>{item?.content}</p>
                  </div>
                </div>
              ))
            }
        </div>
      </section>

      <CallToAction newsFeedSection={''} />

      <section className="auto-container">
        <div className="listing-3">
            {
              third?.map((item,id)=>(
                <div key={id} className="list">
                  <button>{id + 1}</button>
                  <div className="content">
                    <h5>{item?.title}</h5>
                    <div className="border"/>
                    <p>{item?.content}</p>
                  </div>
                </div>
              ))
            }
        </div>
      </section>

      <section className="auto-container">
        <div className="_border"/>
      </section>

      <Faqs data={faqs} nobg/>

      <Disclaimer />
      {/* <!--End Listing Page Section --> */}
    </>
  );
};

export default index;



const first = [
  {
    title: "Bladder Cancer",
    content: "Bladder cancer originates in the tissues of the bladder, the organ that stores urine. The encouraging news is that when detected early, bladder cancer is highly treatable. Advances in medical technology, including minimally invasive surgeries and targeted therapies, have significantly improved patient outcomes. Regular check-ups and being attentive to urinary symptoms can lead to early diagnosis, increasing the chances of successful treatment and a return to a healthy, active life"
  },
  {
    title: "Brain Cancer",
    content: "Brain cancer involves the growth of abnormal cells within the brain tissue. Despite its challenges, remarkable strides have been made in treatment options. Early detection, coupled with innovative therapies like precision radiation and advanced surgical techniques, has improved survival rates. Access to specialized care and multidisciplinary teams ensures personalized treatment plans that enhance quality of life and offer hope to patients and their families"
  },
  {
    title: "Breast Cancer",
    content: "Breast cancer is one of the most common cancers among women but also one of the most treatable. Thanks to regular screenings and heightened awareness, many breast cancers are detected early when they are most manageable. Advances in treatment—including surgery, radiation, hormonal therapies, and targeted drugs—have led to survival rates exceeding 90% for early-stage breast cancer. This progress provides immense hope and underscores the importance of proactive healthcare"
  },
  {
    title: "Cervical Cancer",
    content: "Cervical cancer begins in the cells of the cervix and is largely preventable and highly treatable when found early. The widespread use of the HPV vaccine and regular Pap smear screenings have dramatically reduced the incidence and mortality rates. Early-stage cervical cancer has a high success rate with treatments that are often less invasive, allowing women to maintain their quality of life and reproductive health"
  },
  {
    title: "Colorectal Cancer",
    content: "Colorectal cancer affects the colon or rectum but is highly curable when caught early. Screening methods like colonoscopies not only detect cancer at its earliest stages but can also prevent it by removing precancerous polyps. With advances in surgical techniques and personalized therapies, patients are experiencing better outcomes and a significant increase in long-term survival rates"
  }
]

const secound = [
  {
    title: "Endometrial Cancer",
    content: "Endometrial cancer starts in the lining of the uterus and is the most common type of uterine cancer. The positive aspect is that it often presents early warning signs, such as abnormal bleeding, prompting timely medical attention. Early detection leads to highly effective treatments, often involving minimally invasive surgery, allowing many women to recover quickly and resume their normal lives"
  },
  {
    title: "Esophageal Cancer",
    content: "Esophageal cancer begins in the esophagus, the tube that carries food from the throat to the stomach. While historically challenging, significant improvements in treatment have emerged. Early detection through awareness of symptoms leads to better outcomes. Modern therapies, including advanced surgical procedures and targeted treatments, are enhancing survival rates and improving quality of life for patients"
  },
  {
    title: "Kidney Cancer",
    content: "Kidney cancer originates in the kidneys, vital organs that filter waste from the blood. Early-stage kidney cancer is often highly treatable. Advances in imaging have improved early detection, and minimally invasive surgical techniques have enhanced recovery times. Targeted therapies are also providing effective treatment options, allowing many individuals to maintain normal kidney function and enjoy healthy lives"
  },
  {
    title: "Laryngeal Cancer",
    content: "Laryngeal cancer affects the larynx or voice box, but early detection significantly increases the chances of successful treatment while preserving speech and breathing functions. Innovative treatments aim to eliminate cancer while maintaining quality of life. Rehabilitation services and modern surgical techniques contribute to positive outcomes, enabling patients to return to their daily activities with confidence"
  },
  {
    title: "Leukemia",
    content: "Leukemia is a cancer of the blood and bone marrow. Advances in medical research have transformed leukemia treatment, particularly in children, where survival rates have dramatically increased. Early diagnosis and new therapies, including targeted drugs and immunotherapies, have improved prognoses. Many patients achieve long-term remission and go on to lead full, healthy lives."
  },
  {
    title: "Liver Cancer",
    content: "Liver cancer starts in the liver cells. Early detection and new treatment options offer hope for effective management. Advances in surgical techniques, localized therapies, and liver transplantation have improved survival rates. Lifestyle changes and proactive medical care play significant roles in enhancing treatment success and overall well-being"
  },
]

const third = [
  {
    title: "Lung Cancer",
    content: "Lung cancer is one of the most common cancers, but there's promising news. Early detection through low-dose CT scans can find lung cancer at a more treatable stage. Innovations in targeted therapies and immunotherapies have significantly improved outcomes, even for advanced cases. Smoking cessation programs and increased awareness are contributing to a decline in lung cancer rates, offering hope for better futures"
  },
  {
    title: "Melanoma of the Skin",
    content: "Melanoma is the most serious type of skin cancer but is highly treatable when detected early. Regular skin examinations and awareness of changes in moles or skin lesions lead to early diagnosis. Treatment often involves simple surgical removal with excellent outcomes. Advances in immunotherapy have also improved survival rates for advanced melanoma, providing new avenues for successful treatment"
  },
  {
    title: "Non-Hodgkin Lymphoma",
    content: "Non-Hodgkin lymphoma is a cancer of the lymphatic system. Many types are highly treatable, especially when detected early. Advances in chemotherapy, targeted therapy, and immunotherapy have led to increased remission rates. Personalized treatment plans and supportive care contribute to better outcomes, allowing patients to enjoy a good quality of life during and after treatment"
  },
  {
    title: "Oral Cancer",
    content: "Oral cancer occurs in the mouth or throat, and early detection significantly increases the success of treatment. Advances in surgical techniques, radiation therapy, and reconstructive procedures have improved survival rates and functional outcomes. Increased public awareness about risk factors and symptoms is aiding in prevention and early diagnosis, empowering individuals to seek timely medical care"
  },
  {
    title: "Ovarian Cancer",
    content: "Ovarian cancer starts in the ovaries, and although it can be challenging to detect early, there is positive progress. Advances in chemotherapy, targeted therapies, and surgical techniques have improved survival rates. Genetic testing and personalized medicine are enabling more effective treatment strategies, offering hope and better outcomes for many women"
  },
  {
    title: "Pancreatic Cancer",
    content: "Pancreatic cancer presents challenges, but there are reasons for optimism. Early detection, although difficult, can lead to more effective surgical interventions. Advances in chemotherapy and participation in clinical trials are providing new treatment options. Ongoing research into early detection methods and innovative therapies continues to make significant strides forward"
  },
  {
    title: "Prostate Cancer",
    content: "Prostate cancer is one of the most common cancers in men but often grows slowly and is highly treatable. Early detection through PSA testing leads to excellent treatment outcomes. Many prostate cancers are managed effectively with active surveillance or minimally invasive treatments. Survival rates are high, and men can maintain a good quality of life post-treatment"
  },
  {
    title: "Stomach Cancer",
    content: "Stomach cancer, or gastric cancer, has seen improvements in outcomes due to early detection and advances in therapy. Awareness of symptoms leads to earlier diagnosis, making treatments more effective. Modern surgical techniques, along with chemotherapy and targeted therapies, have enhanced survival rates and quality of life for patients"
  },
  {
    title: "Thyroid Cancer",
    content: "Thyroid cancer occurs in the thyroid gland and is one of the most treatable cancers. The prognosis is excellent, especially for the most common types. Early detection and effective treatments, such as surgery and radioactive iodine therapy, lead to high survival rates. Most patients return to normal activities shortly after treatment, enjoying full and healthy lives"
  },
]