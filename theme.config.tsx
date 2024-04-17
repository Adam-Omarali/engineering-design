import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Adam's Engineering Handbook</span>,
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  darkMode: false,
  footer: {
    text: <span>Adam Omarali {new Date().getFullYear()}.</span>,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  search: {
    placeholder: "Seach Handbook",
  },
  nextThemes: {
    defaultTheme: "light",
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://adamsengineeringhandbook.vercel.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "Engineering Handbook"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "An engineering handbook"}
        />
      </>
    );
  },
};

export default config;
