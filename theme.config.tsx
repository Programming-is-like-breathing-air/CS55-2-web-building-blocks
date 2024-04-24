"use client";

import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "@/src/admin/logo";
import Seo from "@/src/admin/seo";
import UrlDropdown from "@/src/admin/VersionSwitcher";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: { link: "https://github.com/Web-Building-Blocks/blocks" },
  useNextSeoProps() {
    return { titleTemplate: "%s - USYD Blocks" };
  },
  docsRepositoryBase: "https://github.com/Web-Building-Blocks/blocks",
  head:<Seo />,
  navbar: {
    extraContent: <UrlDropdown />
  },
  darkMode: false,
  nextThemes: { defaultTheme: "light" },
  footer: { text: "Blocks - The University of Sydney" },
  primaryHue: { dark: 10, light: 10 },
};

export default config;
