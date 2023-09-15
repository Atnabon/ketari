import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div
      id="companies"
      style={{ scrollBehavior: "smooth" }}
      className="my-12 py-12"
    >
      <div className="text-3xl text-center font-bold pb-8 text-primary">
        Companies
      </div>
      <Marquee pauseOnHover={true}>
        <div className="flex gap-x-4 gap-y-2 lg:gap-2 xl:gap-8 sm:flex-row flex-wrap flex-row sm:justify-center lg:justify-between items-center mx-[5vw] py-5">
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/elst.jpeg"
            alt="elst"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/safaricom.png"
            alt="Safaricom"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/chapa.jpeg"
            alt="chapa"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/tele.png"
            alt="ethio tele"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/et.png"
            alt="ethio airlines"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/ride.jpeg"
            alt="ethio airlines"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/awash.png"
            alt="Awash bank"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/abysinia.png"
            alt="abysinia bank"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/amhara_auto_x2.jpg"
            alt="amahra bank"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/coop.png"
            alt="Coop"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/dashen.jpg"
            alt="Dashen bank"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/wegagen.png"
            alt="Wegagen bank"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/oromiabank.png"
            alt="Oromia bank"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/zemen.png"
            alt="zemen bank"
          />

          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/unicief.jpg"
            alt="unicief "
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/uniliver.jpg"
            alt="unilever "
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/heineken.jpeg"
            alt="heineken"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] h-[auto]"
            src="/amref.png"
            alt="amref"
          />

          <img
            className="cursor-pointer object-contain max-w-[120px] max-h-[135px]"
            src="/cocacola.jpg"
            alt="cocca"
          />
          <img
            className="cursor-pointer object-contain max-w-[120px] max-h-[135px]"
            src="/mastercard.jpg"
            alt="mastercard"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Companies;
