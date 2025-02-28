"use client";

import Image from "next/image";

export default function Offers() {
  return (
    <>
      <main>
        {/* Offers Text */}
        <div>
          <h1>
            What Do <span>We Offer</span>
          </h1>
          <p>
            PickBetta is your go-to source for trustworthy sports betting data.
            With nearly a century of sports data at your fingertips, our
            platform provides:
          </p>
        </div>

        {/* Offer Cards */}
        <section>
          <div>
            <div>
              <Image
                src="/icons/business.svg"
                width={48}
                height={48}
                alt="hero section image"
              />
            </div>
            <h3>Fact-Checked Insights</h3>
            <p>
              Every stat, trend, and piece of data is rigorously verified to
              ensure accuracy.
            </p>
          </div>
          <div>
            <div>
              <Image
                src="/icons/profile.svg"
                width={48}
                height={48}
                alt="hero section image"
              />
            </div>
            <h3>Customizable Tools</h3>
            <p>
              Tailor your experience with personalized dashboards, real-time
              alerts, and interactive features.
            </p>
          </div>
          <div>
            <div>
              <Image
                src="/icons/data.svg"
                width={48}
                height={48}
                alt="hero section image"
              />
            </div>
            <h3>Comprehensive Coverage</h3>
            <p>
              Whether you’re into NFL, NHL, NCAAF, NCAAB, or NBA, we’ve got you
              covered with detailed analysis and timely data.
            </p>
          </div>
        </section>

        {/* How We Deliver Value Section */}
        <section>
          <div>
            <Image
              src="/images/deliverValueImage.svg"
              width={480}
              height={480}
              alt="hero section image"
            />
          </div>

          <div>
            <h1>
              How We <span>Deliver Value</span>
            </h1>

            <p>
              We deliver unparalleled data through a cutting-edge online mobile
              portal designed for ease of use and accessibility. Our platform is
              built to reach the entire betting community through the power of
              word-of-mouth. We know that once you experience the value
              PickBetta offers, you’ll spread the word—because, like us, you
              recognize the difference that accurate, unbiased data makes.
              <span>Join us at PickBetta</span>—where we don’t advise you to
              pick, we advise you to pick better. This is more than just a
              product; it’s a movement for a smarter, more informed betting
              community.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
