"use client";
import GalleryBox from "./GalleryBox";
import HeadingBlock from "@/components/BlogPage/Blocks/HeadingBlock";
import ParagraphBlock from "@/components/BlogPage/Blocks/ParagraphBlock";
import ImageBlock from "@/components/BlogPage/Blocks/ImageBlock";
import ListsBlock from "@/components/BlogPage/Blocks/ListsBlock";
import QuoteBlock from "@/components/BlogPage/Blocks/QuoteBlock";
import EmbedBlock from "@/components/BlogPage/Blocks/EmbedBlock";
import TableBlock from "@/components/BlogPage/Blocks/TableBlock";

const Details = (props) => {
  const { blocks } = props;

  return (
    <div className="job-detail">
      {blocks?.map((block, index) =>
        block.name === "core/heading" ? (
          <HeadingBlock
            key={index}
            content={block?.dynamicContent.replace(/(<([^>]+)>)/gi, "")}
            textAlign={block?.attributes?.textAlign}
            level={block?.attributes?.level}
          />
        ) : block.name === "core/paragraph" ? (
          <ParagraphBlock
            key={index}
            content={block?.originalContent}
            textAlign={block?.attributes?.textAlign}
            dropCap={block?.attributes?.dropCap}
          />
        ) : block.name === "core/image" ? (
          <ImageBlock
            key={index}
            url={block?.attributes?.url}
            align={block?.attributes?.align}
            width={block?.attributes?.width}
            height={block?.attributes?.height}
            alt={block?.attributes?.alt}
          />
        ) : block.name === "core/list" ? (
          <ListsBlock
            key={index}
            align={block?.attributes?.align}
            innerBlocks={block?.innerBlocks}
          />
        ) : block.name === "core/quote" ? (
          <QuoteBlock
            key={index}
            align={block?.attributes?.align}
            innerBlocks={block?.innerBlocks}
            textColor={block?.attributes?.textColor}
            backgroundColor={block?.attributes?.backgroundColor}
            citation={block?.originalContent.replace(/(<([^>]+)>)/gi, "")}
          />
        ) : block.name === "core/embed" ? (
          <EmbedBlock
            key={index}
            url={block?.attributes?.url}
            caption={block?.attributes?.caption}
            content={block?.originalContent}
          />
        ) : block.name === "core/table" ? (
          <TableBlock key={index} content={block} />
        ) : block.name === "core/gallery" ? (
          <div className="row images-outer">
            <GalleryBox images={block?.innerBlocks} />
          </div>
        ) : null
      )}
    </div>
  );
};

export default Details;
