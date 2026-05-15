import { CategoryMenu, Hero, Incentives, IntroducingSection, Newsletter, ProductsSection } from "@/components";
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default function Home() {
  return (
    <>
    <Hero />
    <IntroducingSection />
    <CategoryMenu />
    <ProductsSection />
    </>
  );
}
