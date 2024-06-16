function getClassName(align) {
  if (align === "center" || align === "right") {
    return `text-${align}`;
  }

  return "text-left ";
}

export default function ListsBlock({
  align,
  anchor,
  backgroundColor,
  className,
  content,
  dropCap,
  style,
  textColor,
  innerBlocks,
}) {
  return (
    <ul className={`${getClassName(align)} block-list`}>
      {innerBlocks.map((block, index) => (
        <li key={index}>{block?.originalContent?.replace(/(<([^>]+)>)/gi, "")}</li>
      ))}
    </ul>
  );
}
