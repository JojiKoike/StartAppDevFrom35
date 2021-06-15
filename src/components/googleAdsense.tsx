import React, { useEffect } from "react";

const clientCode = "ca-pub-3835939635569436";

export const GoogleAdsense_Display: React.FC = () => {
  useEffect(() => {
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
      data-ad-client={clientCode}
      data-ad-slot="1367382719"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export const GoogleAdsense_InArticle: React.FC = () => {
  useEffect(() => {
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
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client={clientCode}
      data-ad-slot="7062756043"
    ></ins>
  );
};

export const GoogleAdsense_Infeed: React.FC = () => {
  useEffect(() => {
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
      data-ad-format="fluid"
      data-ad-layout-key="-6l+cq-v-57+na"
      data-ad-client={clientCode}
      data-ad-slot="2200052429"
    ></ins>
  );
};
