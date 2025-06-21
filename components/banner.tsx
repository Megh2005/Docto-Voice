import { StickyBanner } from "@/components/ui/sticky-banner";

export default function Banner() {
  return (
    <div className="relative flex w-full capitalize flex-col">
      <StickyBanner
        hideOnScroll={true}
        className="bg-gradient-to-b from-[#0f0c29]  to-[#24243e]"
      >
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Production grade application for this website is coming soon
        </p>
      </StickyBanner>
    </div>
  );
}
