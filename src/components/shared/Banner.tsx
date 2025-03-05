"use client";

export default function Home() {
  return (
    <>
      <main className="bg-[#FFFFFF] md:px-20 md:py-25 py-7.5 px-5">
        <section className="rounded-[32px] bg-[#06543C] md:min-h-[400px] text-white md:py-[95px] md:pl-16.5 py-17.5 px-5 min-h-[326px]">
          <div className="flex flex-col gap-y-[15px]">
            <h1 className="md:text-[3rem] text-[1.625rem] font-bold md:leading-13 leading-8">
              Get PickBetta FREE for 7 days
            </h1>
            <h3 className="text-[1.5rem] md:leading-8 leading-6">
              Your first week is always free. Start your trial now and see the
              difference!
            </h3>
          </div>
          <button className="mt-7.5 text-[#06543C] bg-white py-4 px-7 rounded-[12px] text-[1.75rem] font-semibold leading-9">
            Start now!
          </button>
        </section>
      </main>
    </>
  );
}
