import React from "react";
import Adsense from "react-adsense";

const HorizontalBarAd: React.FC = () => (
  <ins className="adsbygoogle">
    <Adsense.Google
      style={{ display: "block" }}
      client="ca-pub-3835939635569436"
      slot="1367382719"
      format="auto"
      responsive="true"
    />
  </ins>
);

export default HorizontalBarAd;
