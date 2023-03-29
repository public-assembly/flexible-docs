import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXEmbedProvider } from "mdx-embed";

type VimeoEmbedProps = {
  videoId: string;
};

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId }) => (
  <div style={{ position: "relative", paddingBottom: "56.25%" }}>
    <iframe
      src={`https://player.vimeo.com/video/${videoId}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  </div>
);

const components = {
  VimeoEmbed,
};

type MyMDXComponentProps = {
  mdxContent: string;
};

const Vimeo: React.FC<MyMDXComponentProps> = ({ mdxContent }) => (
  <MDXEmbedProvider>
    <MDXProvider components={components}>{mdxContent}</MDXProvider>
  </MDXEmbedProvider>
);

export default Vimeo;
