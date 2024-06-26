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
    topLinks,
    metaSymptoms,
    metaRiskFactors,
  } = props;
  // console.log(mobileContent.splice(2, 0, {type: "button"}))

  const sceondBlock = mobileContent?.length ? mobileContent[0] : {};

  return (
    <div className="job-detail cancer_detail">
      <h1 className="pb-3">{title.replace(/(<([^>]+)>)/gi, "")}</h1>
      <div>{parseHtml(mobileInrtoduction || '')}</div>

      <div className="cancer_heading mb-hidden">
        <h2>{sceondBlock?.heading}</h2>
        <div>{parseHtml(sceondBlock?.content || '')}</div>
      </div>

      <div className="cus-btn-cancer pb-5 pt-3 mb-hidden">
        <FindDocButton title={title.replace(/(<([^>]+)>)/gi, "")} />
      </div>
      {mobileContent?.slice(1).map((block, index) => (
        <div key={index} className="cancer_heading mb-hidden">
          <h2>{block?.heading}</h2>
          <div>{parseHtml(block?.content || '')}</div>
        </div>
      ))}
      {blocks?.map((block, index) =>
        block.name === "core/heading" ? (
          <div className="cancer_heading desktop-hidden">
            <HeadingBlock
              key={index}
              content={block?.dynamicContent.replace(/(<([^>]+)>)/gi, "")}
              textAlign={block?.attributes?.textAlign}
              level={block?.attributes?.level}
            />
          </div>
        ) : block.name === "core/paragraph" ? (
          <div className="cancer_paragraph desktop-hidden">
            <ParagraphBlock
              key={index}
              content={block?.originalContent}
              textAlign={block?.attributes?.textAlign}
              dropCap={block?.attributes?.dropCap}
            />
          </div>
        ) : block.name === "core/image" ? (
          <div className="cancer_image desktop-hidden">
            <ImageBlock
              key={index}
              url={block?.attributes?.url}
              align={block?.attributes?.align}
              width={block?.attributes?.width}
              height={block?.attributes?.height}
              alt={block?.attributes?.alt}
            />
          </div>
        ) : block.name === "core/list" ? (
          <div className="cancer_list desktop-hidden">
            <ListsBlock
              key={index}
              align={block?.attributes?.align}
              innerBlocks={block?.innerBlocks}
            />
          </div>
        ) : block.name === "core/quote" ? (
          <div className="cancer_quote desktop-hidden">
            <QuoteBlock
              key={index}
              align={block?.attributes?.align}
              innerBlocks={block?.innerBlocks}
              textColor={block?.attributes?.textColor}
              backgroundColor={block?.attributes?.backgroundColor}
              citation={block?.originalContent.replace(/(<([^>]+)>)/gi, "")}
            />
          </div>
        ) : block.name === "core/embed" ? (
          <div className="cancer_embed desktop-hidden">
            <EmbedBlock
              key={index}
              url={block?.attributes?.url}
              caption={block?.attributes?.caption}
              content={block?.originalContent}
            />
          </div>
        ) : block.name === "core/table" ? (
          <div className="cancer_table desktop-hidden">
            <TableBlock key={index} content={block} />
          </div>
        ) : block.name === "core/gallery" ? (
          <div className="row images-outer desktop-hidden">
            <GalleryBox images={block?.innerBlocks} />
          </div>
        ) : block.name === "core/details" ? (
          <DetailsBlock
            key={index}
            title={block?.originalContent}
            blocks={block?.innerBlocks}
          />
        ) : null
      )}

      <SidebarDropdown title="Top Links" content={topLinks} />
      <SidebarDropdown title="Symptoms" content={metaSymptoms} />
      <SidebarDropdown title="Risk Factors" content={metaRiskFactors} />
    </div>
  );
};

export default Details;
