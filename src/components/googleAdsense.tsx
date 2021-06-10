import React from "react";

const HorizontalBarAd: React.FC = () => {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      if (window) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.log(error, "adsenese error");
        }
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3835939635569436"
      data-ad-slot="1367382719"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default HorizontalBarAd;
