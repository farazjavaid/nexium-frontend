export default function ContactFormSection() {
  return (
    <section className="w-full pt-20 lg:pt-28 mb-[-140] px-4 lg:px-20 bg-[#e7e5e5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="flex flex-col justify-start pt-4">
            <p className="text-[#353638] font-montserrat font-semibold text-[22px] lg:text-[28px] mb-10">Collaborate with us</p>
            <h2 className="text-[56px] lg:text-[80px] text-[#353638] font-montserrat font-normal capitalize mb-8 leading-[1.15] tracking-[-0.8px]">
              Let&apos;s Build <br /> Something <br /> Great
            </h2>
            <p className="text-[#353638] text-[18px] lg:text-[22px] leading-[1.6] max-w-lg">
              Have a project in mind or need product support? Reach out and our experts will respond shortly.
            </p>
          </div>

          <div className="bg-white px-10 pt-[60px] pb-[80px] mt-40 z-9">
            <form className="space-y-10">
              <div className="border-b-2 border-[#e4e4e4] pb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full font-montserrat text-[22px] text-[#a2a2a2] bg-transparent border-none outline-none placeholder:text-[#a2a2a2]"
                />
              </div>
              <div className="border-b-2 border-[#e4e4e4] pb-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full font-montserrat text-[22px] text-[#a2a2a2] bg-transparent border-none outline-none placeholder:text-[#a2a2a2]"
                />
              </div>
              <div className="border-b-2 border-[#e4e4e4] pb-3">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full text-[22px] text-[#a2a2a2] bg-transparent border-none outline-none resize-none placeholder:text-[#a2a2a2]"
                />
              </div>
              <div className="flex items-center gap-4 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-[13px] h-[13px] rounded border-[#767676]"
                />
                <label htmlFor="terms" className="text-[#353638] text-[13px]">
                  I agree with <span className="underline font-semibold">Terms & Conditions</span>
                </label>
              </div>

              <div className="pt-20">
              <button
                type="submit"
                className="bg-[#267275] text-white px-16 py-5 text-[14px] tracking-[4.2px] uppercase font-montserrat font-bold hover:bg-[#1e5a5d] transition-colors w-full"
              >
                Send
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
