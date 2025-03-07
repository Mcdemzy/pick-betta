"use client";

import Image from "next/image";

const OfferCard = ({
  iconSrc,
  title,
  description,
}: {
  iconSrc: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col p-6 bg-[#ECFDF3] rounded-lg border border-[#E4E7EC]">
    <div className="mb-4">
      <Image src={iconSrc} width={48} height={48} alt={title} />
    </div>
    <h3 className="text-lg leading-6 text-[#1D2939] font-semibold mb-2">
      {title}
    </h3>
    <p className="text-[#667085] leading-6 md:text-[16px] text-sm ">
      {description}
    </p>
  </div>
);

export default function Offers() {
  const offerCards = [
    {
      iconSrc: "/icons/business.svg",
      title: "Fact-Checked Insights",
      description:
        "Every stat, trend, and piece of data is rigorously verified to ensure accuracy.",
    },
    {
      iconSrc: "/icons/profile.svg",
      title: "Customizable Tools",
      description:
        "Tailor your experience with personalized dashboards, real-time alerts, and interactive features.",
    },
    {
      iconSrc: "/icons/data.svg",
      title: "Comprehensive Coverage",
      description:
        "Whether you’re into NFL, NHL, NCAAF, NCAAB, or NBA, we’ve got you covered with detailed analysis and timely data.",
    },
  ];

  return (
    <main>
      {/* Offers Section */}
      <section className="bg-[#FCFCFD] py-20 px-4 sm:px-8 lg:px-20">
        {/* Offers Text */}
        <div className="text-center mb-16">
          <h1 className="md:text-5xl text-2xl md:leading-14 md:tracking-[-2%] font-bold mb-4 gilroy-bold text-[#101828]">
            What Do <span className="text-[#06543C]">We Offer</span>
          </h1>
          <p className="md:leading-6 font-medium mx-auto text-[#667085]">
            PickBetta is your go-to source for trustworthy sports betting data.
            With nearly a century of sports data at your fingertips, our
            platform provides:
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {offerCards.map((card, index) => (
            <OfferCard
              key={index}
              iconSrc={card.iconSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      {/* How We Deliver Value Section */}
      <section className="md:py-20 pb-7.5 md:pb-none px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 order-2">
            <Image
              src="/images/deliverValueImage.svg"
              width={480}
              height={480}
              alt="How We Deliver Value"
              className="w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 md:order-2">
            <h1 className="md:text-5xl text-2xl gilroy-bold leading-7 text-[#101828] font-bold mb-6">
              How We <span className="text-[#06543C]">Deliver Value</span>
            </h1>
            <p className="text-lg text-[#667085] font-medium mb-6">
              We deliver unparalleled data through a cutting-edge online mobile
              portal designed for ease of use and accessibility. Our platform is
              built to reach the entire betting community through the power of
              word-of-mouth. We know that once you experience the value
              PickBetta offers, you’ll spread the word—because, like us, you
              recognize the difference that accurate, unbiased data makes.
            </p>
            <p className="text-lg font-medium text-[#667085]">
              <span className="font-semibold text-[#101828]">
                Join us at PickBetta
              </span>
              —where we don’t advise you to pick, we advise you to pick better.
              This is more than just a product; it’s a movement for a smarter,
              more informed betting community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
