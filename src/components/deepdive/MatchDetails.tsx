// components/deepdive/MatchDetails.tsx
import Image from "next/image";

interface MatchDetailsProps {
  isDesktop: boolean;
}

export default function MatchDetails({ isDesktop }: MatchDetailsProps) {
  return (
    <section className="w-full">
      <section
        className={`min-h-[104px] w-full bg-[#F2F4F7] flex ${
          isDesktop ? "justify-end gap-x-10" : "justify-evenly gap-x-2.5"
        } rounded-t-[12px] pt-2.5 pb-0.5`}
      >
        <div className="text-center flex flex-col gap-y-1">
          <h2 className="text-[#101828] text-[0.75rem] leading-[18px] font-medium">
            Maple Leafs
          </h2>
          <p className="text-[#667085] text-[0.75rem] leading-[18px] font-medium">
            0-0
          </p>
        </div>
        <p className="text-[#101828] font-medium text-sm leading-[22px]">@</p>
        <div
          className={`text-center flex flex-col gap-y-1 ${
            isDesktop ? "items-center mr-31.5" : "items-center"
          }`}
        >
          <h2 className="text-[#101828] text-[0.75rem] leading-[18px] font-medium">
            Canadians
          </h2>
          <p className="text-[#667085] text-[0.75rem] leading-[18px] font-medium">
            0-0
          </p>
          <div className="flex items-center text-center gap-x-2">
            <Image
              src="/icons/weather.svg"
              width={16}
              height={16}
              alt="weather icon"
            />
            <p className="text-[#101828] text-[0.75rem] leading-[18px] font-medium">
              49'
            </p>
          </div>
          <p className="text-[#101828] text-[0.75rem] leading-[18px] font-medium">
            Arrow Arena
          </p>
        </div>
      </section>
    </section>
  );
}
