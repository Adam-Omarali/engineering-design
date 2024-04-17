import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Adam's Engineering Handbook</title>
    </>
  ),
};

export default config;
