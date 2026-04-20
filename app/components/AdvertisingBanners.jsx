import SmallBaner from "./SmallBaner";
import BigBanner from "./BigBanner";

const AdvertisingBanners = () => {
  return (
    <div className="flex flex-col gap-3 p-5 mt-14">
      <SmallBaner />
      <BigBanner />
    </div>
  );
};

export default AdvertisingBanners;
