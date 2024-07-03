"use client";
import GalleryBox from "./GalleryBox";
import HeadingBlock from "@/components/BlogPage/Blocks/HeadingBlock";
import ParagraphBlock from "@/components/BlogPage/Blocks/ParagraphBlock";
import ImageBlock from "@/components/BlogPage/Blocks/ImageBlock";
import ListsBlock from "@/components/BlogPage/Blocks/ListsBlock";
import QuoteBlock from "@/components/BlogPage/Blocks/QuoteBlock";
import EmbedBlock from "@/components/BlogPage/Blocks/EmbedBlock";
import TableBlock from "@/components/BlogPage/Blocks/TableBlock";
import DetailsBlock from "@/components/common/wp-blocks/DetailsBlock";
import FindDocButton from "@/components/Cancers-listing/FindDocButton";
import parseHtml from "@/lib/Parser";
import SidebarDropdown from "@/components/common/wp-blocks/SidebarDropdown";
const Details = (props) => {
  const {
    blocks,
    title,
    mobileInrtoduction,
    mobileContent,
    supportGroups,
    trustedInstitutions,
    financialSupportOrganizations,
  } = props;
  // console.log(mobileContent.splice(2, 0, {type: "button"}))

  const sceondBlock = mobileContent?.length ? mobileContent[0] : {};



  return (
    <div className="job-detail cancer_detail">
   
        <h3 className="pb-3">{title.replace(/(<([^>]+)>)/gi, "")}</h3>
        {/* <div className="mb-hidden">{parseHtml(mobileInrtoduction || '')}</div> */}


      {/* <div className="cancer_heading mb-hidden">
        <h3>{sceondBlock?.heading}</h3>
        <div>{parseHtml(sceondBlock?.content || '')}</div>
      </div>

      <div className="cus-btn-cancer pb-5 pt-3 mb-hidden">
        <FindDocButton title={title.replace(/(<([^>]+)>)/gi, "")} />
      </div> */}

      {/* {mobileContent?.slice(1).map((block, index) => (
        <div key={index} className="cancer_heading mb-hidden">
          <h3>{block?.heading}</h3>
          <div>{parseHtml(block?.content || '')}</div>
        </div>
      ))} */}

      {blocks?.map((block, index) =>
        block.name === "core/paragraph" ? (
          <div className="cancer_paragraph">
            <ParagraphBlock
              key={index}
              content={block?.originalContent}
              textAlign={block?.attributes?.textAlign}
              dropCap={block?.attributes?.dropCap}
            />
          </div>
        ) :
        block.name === "core/buttons" ?(
          <div className="cus-btn-cancer pb-5 pt-3 mb-hidden">
          <FindDocButton title={title.replace(/(<([^>]+)>)/gi, "")} />
        </div> 
        )
        : block.name === "core/details" ? (
          <DetailsBlock
            key={index}
            title={block?.originalContent}
            blocks={block?.innerBlocks}
          />
        ) : null
      )}

      <SidebarDropdown title="Support Groups" content={supportGroups} />
      <SidebarDropdown title="Financial support organisations" content={financialSupportOrganizations} />
      <SidebarDropdown title="Trusted institutions" content={trustedInstitutions} />
    </div>
  );
};

export default Details;
