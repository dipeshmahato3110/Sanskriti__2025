import React from "react";
import sanityConfig from "../../sanity";
import { PortableText } from "@portabletext/react";
import serializers from "../shared/serializers";

const RichText = ({ blocks }) => {
  return (
    <PortableText
      value={blocks}
      components={serializers}
      {...sanityConfig}
      className='break-words zinc-200space-pre-line'
    />
  );
};

export default RichText;
