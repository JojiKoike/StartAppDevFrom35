import React, { useEffect } from "react";

interface GoogleAdsenseProps {
  type: "display" | "inArticle" | "infeed";
  slot: string;
  layoutKey?: string;
  client?: string;
}

const clientCode = "ca-pub-3835939635569436";

const GoogleAdsense: React.FC<GoogleAdsenseProps> = ({
  client = "ca-pub-3835939635569436",
  ...props
}) => {
  const { type, slot, layoutKey } = props;

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

  switch (type) {
    case "display":
      return (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      );
    case "inArticle":
      return (
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client={client}
          data-ad-slot={slot}
        ></ins>
      );
    case "infeed":
      return (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key={layoutKey}
          data-ad-client={client}
          data-ad-slot={slot}
        ></ins>
      );
  }
};

export default GoogleAdsense;

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
