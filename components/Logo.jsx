import Image from "next/image";

export default function Logo(props) {
  const {width, height} = props;
  return (
    <>
        <Image src="/logo.png" alt="logo" width={width || 160} height={height || 60} />
    </>
  );
}
