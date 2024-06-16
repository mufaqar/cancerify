import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home-9";


export const metadata = {
  title: "Home || Find Cancer doctors",
  description: "Superio - Job Borad React NextJS Template",
};

export default async function page() {



  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
