import Image from "next/image";

const imgLogoWhite1 = "/images/about-us/logo-white.png";
const imgMdiLinkedin = "/images/about-us/mdi-linkedin.svg";
const imgGroup2229 = "/images/about-us/group-2229.svg";
const imgGgFacebook = "/images/about-us/gg-facebook.svg";
const imgVector = "/images/about-us/vector.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c1c1c] text-white pt-[181px] pb-16 px-4 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[552px_228px_1fr] gap-x-12 gap-y-12 mb-12">
          <div>
            <h3 className="text-white/50 font-montserrat text-[16px] uppercase mb-6 tracking-[-0.48px]">About Us</h3>
            <p className="text-white font-montserrat text-[16px] leading-[26px] tracking-[-0.32px]">
              At NexiumTrio, we&apos;re more than just developers. we&apos;re collaborators, problem-solvers, and long-term partners.
              <br /><br />
              Whether you&apos;re scaling fast, replatforming, or building from scratch, we turn your requirements into high-performance platforms that reflect your vision and drive real results.
            </p>
          </div>

          <div>
            <h3 className="text-white/50 font-montserrat text-[16px] uppercase mb-6 tracking-[-0.48px]">Services</h3>
            <ul className="text-white font-montserrat text-[16px] tracking-[-0.32px] capitalize space-y-0" style={{ lineHeight: '37px' }}>
              <li>Shopify eCommerce</li>
              <li>WordPress Development</li>
              <li>Laravel Web Applications</li>
              <li>React.js Frontends</li>
            </ul>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-white/50 font-montserrat text-[16px] uppercase mb-6 tracking-[-0.48px]">Address</h3>
              <p className="text-white font-montserrat text-[16px] leading-[23.4px] tracking-[-0.32px]">
                Ranchview Dr. Richardson,<br />
                Sydney, Australia<br />
                27305
              </p>
            </div>

            <div>
              <h3 className="text-white/50 font-montserrat text-[16px] uppercase mb-6 tracking-[-0.48px]">Contact</h3>
              <p className="text-white font-montserrat text-[16px] leading-[23.4px] tracking-[-0.32px]">
                support@nexiumtrio.com<br />
                (047) 888 2359
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative">
              <Image alt="Twitter" src={imgGroup2229} fill className="object-contain" />
            </div>
            <div className="w-10 h-10 relative rounded-full border-1 border-[#666] p-1.5">
              <div className="relative w-full h-full">
                <Image alt="Facebook" src={imgGgFacebook} fill className="object-contain" />
              </div>
            </div>
            <div className="w-10 h-10 relative rounded-full border-1 border-[#666] p-1.5">
              <div className="relative w-full h-full">
                <Image alt="LinkedIn" src={imgMdiLinkedin} fill className="object-contain" />
              </div>
            </div>
            <div className="w-10 h-10 relative rounded-full border-1 border-[#666] p-1.5">
              <div className="relative w-full h-full">
                <Image alt="Instagram" src={imgVector} fill className="object-contain" />
              </div>
            </div>
          </div>
          <p className="text-white/60 font-montserrat text-[14px] tracking-[-0.32px]">© 2025 Copyright - Nexium Trio | License</p>
        </div>

        <div className="mt-[-20] flex justify-center relative">
          <div className="relative w-full max-w-[1082px] h-[429px] opacity-20">
            <Image alt="" src={imgLogoWhite1} fill className="object-cover" />
            <div className="absolute top-0 left-0 right-0 h-[274px] bg-gradient-to-b from-[#1c1c1c] to-[rgba(28,28,28,0)] pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
