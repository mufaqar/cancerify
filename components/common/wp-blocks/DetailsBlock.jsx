"use client";
import { useState } from "react";
import HeadingBlock from "@/components/BlogPage/Blocks/HeadingBlock";
import ParagraphBlock from "@/components/BlogPage/Blocks/ParagraphBlock";
import ImageBlock from "@/components/BlogPage/Blocks/ImageBlock";
import ListsBlock from "@/components/BlogPage/Blocks/ListsBlock";

export default function DetailsBlock({ title, blocks }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb_details_block mb-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="mb_details_block_title flex items-center justify-between w-full "
      >
        <h4>{title.replace(/(<([^>]+)>)/gi, "")}</h4>
        {open ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="25"
              height="25"
            >
              <rect x="6" y="11" width="12" height="2" rx="1" />
            </svg>
          </span>
        ) : (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="25"
              height="25"
            >
              <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
            </svg>
          </span>
        )}
      </button>

      <div className="px-3 py-2">
        {open &&
          blocks.map((block, index) => {
            return block.name === "core/heading" ? (
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
            ) : null;
          })}
      </div>
      
    </div>
  );
}
