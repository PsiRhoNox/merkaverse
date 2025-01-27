import type { HydrogenThemeSchema, SwatchesConfigs } from "@weaverse/hydrogen";
import { COUNTRIES } from "~/utils/const";
import pkg from "../../package.json";

let swatchesConfigs: SwatchesConfigs = {
  options: [
    {
      id: "1",
      name: "Color",
      displayName: "Select color",
      type: "color",
      size: "md",
      shape: "circle",
    },
    {
      id: "2",
      name: "Size",
      displayName: "Select size",
      type: "button",
      size: "md",
      shape: "round",
    },
  ],
  swatches: {
    colors: [
      { id: "1", name: "Red", value: "#ff0000" },
      { id: "2", name: "Yellow", value: "#ffff00" },
      { id: "3", name: "Black", value: "#000000" },
      { id: "4", name: "Blue", value: "#0000FF" },
      { id: "5", name: "Green", value: "#00ff00" },
      { id: "6", name: "Purple", value: "#800080" },
      { id: "7", name: "Silver", value: "#c0c0c0" },
      { id: "8", name: "White", value: "#ffffff" },
      { id: "9", name: "Brown", value: "#7B3F00" },
      { id: "10", name: "Light-brown", value: "#feb035" },
      { id: "11", name: "Dark-turquoise", value: "#23cddc" },
      { id: "12", name: "Orange", value: "#fe9001" },
      { id: "13", name: "Tan", value: "#eacea7" },
      { id: "14", name: "Violet", value: "#EE82EE" },
      { id: "15", name: "Pink", value: "#FFC0CB" },
      { id: "16", name: "Grey", value: "#808080" },
    ],
    images: [
      {
        id: "1",
        name: "Dark blue",
        value:
          "https://cdn.shopify.com/s/files/1/0838/0052/3057/files/swatch_pattern_2.png",
      },
      {
        id: "2",
        name: "Light orange",
        value:
          "https://cdn.shopify.com/s/files/1/0838/0052/3057/files/swatch_pattern_3.png",
      },
      {
        id: "3",
        name: "Dark red",
        value:
          "https://cdn.shopify.com/s/files/1/0838/0052/3057/files/swatch_pattern_4.png",
      },
      {
        id: "4",
        name: "Light brown",
        value:
          "https://cdn.shopify.com/s/files/1/0838/0052/3057/files/swatch_pattern_5.png",
      },
      {
        id: "5",
        name: "Dark brown",
        value:
          "https://cdn.shopify.com/s/files/1/0838/0052/3057/files/swatch_pattern_6.png",
      },
    ],
  },
};

export let themeSchema: HydrogenThemeSchema = {
  info: {
    version: pkg.version,
    author: "Weaverse",
    name: "Pilot",
    authorProfilePhoto:
      "https://cdn.shopify.com/s/files/1/0838/0052/3057/files/Weaverse_logo_-_3000x_e2fa8c13-dac2-4dcb-a2c2-f7aaf7a58169.png?v=1698245759",
    documentationUrl: "https://weaverse.io/docs",
    supportUrl: "https://weaverse.io/contact",
  },
  i18n: Object.values(COUNTRIES).map((i) => {
    return {
      language: i.language,
      country: i.country,
      label: i.label,
    };
  }),
  defaultLocale: "en-us",
  inspector: [
    {
      group: "Layout",
      inputs: [
        {
          type: "range",
          label: "Page width",
          name: "pageWidth",
          configs: {
            min: 1000,
            max: 1600,
            step: 10,
            unit: "px",
          },
          defaultValue: 1280,
        },
        {
          type: "range",
          label: "Nav height (mobile)",
          name: "navHeightMobile",
          configs: {
            min: 2,
            max: 8,
            step: 1,
            unit: "rem",
          },
          defaultValue: 3,
        },
        {
          type: "range",
          label: "Nav height (tablet)",
          name: "navHeightTablet",
          configs: {
            min: 2,
            max: 8,
            step: 1,
            unit: "rem",
          },
          defaultValue: 4,
        },
        {
          type: "range",
          label: "Nav height (desktop)",
          name: "navHeightDesktop",
          configs: {
            min: 2,
            max: 8,
            step: 1,
            unit: "rem",
          },
          defaultValue: 6,
        },
      ],
    },
    {
      group: "Scrolling announcements",
      inputs: [
        {
          type: "richtext",
          name: "topbarText",
          label: "Content",
          defaultValue: "",
        },
        {
          type: "range",
          label: "Content gap",
          name: "topbarScrollingGap",
          configs: {
            min: 0,
            max: 100,
            step: 1,
            unit: "px",
          },
          defaultValue: 44,
        },
        {
          type: "range",
          label: "Height",
          name: "topbarHeight",
          configs: {
            min: 10,
            max: 100,
            step: 1,
            unit: "px",
          },
          defaultValue: 36,
        },
        {
          type: "range",
          label: "Scrolling speed",
          name: "topbarScrollingSpeed",
          configs: {
            min: 1,
            max: 20,
            step: 1,
            unit: "x",
          },
          defaultValue: 5,
        },
      ],
    },
    {
      group: "Header",
      inputs: [
        {
          type: "select",
          name: "headerWidth",
          label: "Header width",
          configs: {
            options: [
              { value: "full", label: "Full page" },
              { value: "stretch", label: "Stretch" },
              { value: "fixed", label: "Fixed" },
            ],
          },
          defaultValue: "fixed",
        },
        {
          type: "switch",
          label: "Enable transparent header",
          name: "enableTransparentHeader",
          defaultValue: true,
          helpText: "Header is transparent in home page only.",
        },
        {
          type: "image",
          name: "logoData",
          label: "Logo",
          defaultValue: {
            id: "gid://shopify/MediaImage/34144817938616",
            altText: "Logo",
            url: "https://cdn.shopify.com/s/files/1/0623/5095/0584/files/Pilot_logo_b04f1938-06e5-414d-8a47-d5fcca424000.png?v=1697101908",
            width: 320,
            height: 116,
          },
        },
        {
          type: "image",
          name: "transparentLogoData",
          label: "Logo on transparent header",
          defaultValue: {
            id: "gid://shopify/MediaImage/34144817938616",
            altText: "Logo",
            url: "https://cdn.shopify.com/s/files/1/0838/0052/3057/files/transparent_Pilot_logo.png?v=1718763594",
            width: 320,
            height: 116,
          },
          condition: "enableTransparentHeader.eq.true",
        },
        {
          type: "range",
          name: "logoWidth",
          label: "Logo width",
          configs: {
            min: 50,
            max: 500,
            step: 1,
            unit: "px",
          },
          defaultValue: 150,
        },
        {
          type: "heading",
          label: "Menu",
        },
        {
          type: "select",
          name: "openMenuBy",
          label: "Open menu by",
          configs: {
            options: [
              { value: "hover", label: "Mouse hover" },
              { value: "click", label: "Mouse click" },
            ],
          },
          defaultValue: "click",
        },
      ],
    },
    {
      group: "Colors",
      inputs: [
        {
          type: "heading",
          label: "General",
        },
        {
          type: "color",
          label: "Background",
          name: "colorBackground",
          defaultValue: "#ffffff",
        },
        {
          type: "color",
          label: "Text",
          name: "colorText",
          defaultValue: "#0F0F0F",
        },
        {
          type: "color",
          label: "Text (subtle)",
          name: "colorTextSubtle",
          defaultValue: "#88847F",
        },
        {
          type: "color",
          label: "Text (inverse)",
          name: "colorTextInverse",
          defaultValue: "#fff",
        },
        {
          type: "color",
          label: "Borders",
          name: "colorLine",
          defaultValue: "#3B352C",
        },
        {
          type: "color",
          label: "Borders (subtle)",
          name: "colorLineSubtle",
          defaultValue: "#A19B91",
        },
        {
          type: "heading",
          label: "Announcement bar",
        },
        {
          type: "color",
          label: "Announcement text",
          name: "topbarTextColor",
          defaultValue: "#ffffff",
        },
        {
          type: "color",
          label: "Announcement background",
          name: "topbarBgColor",
          defaultValue: "#000000",
        },
        {
          type: "heading",
          label: "Header",
        },
        {
          type: "color",
          label: "Header background",
          name: "headerBgColor",
          defaultValue: "#ffffff",
        },
        {
          type: "color",
          label: "Header text",
          name: "headerText",
          defaultValue: "#000000",
        },
        {
          type: "color",
          label: "Transparent header text",
          name: "transparentHeaderText",
          defaultValue: "#ffffff",
        },
        {
          type: "heading",
          label: "Footer",
        },
        {
          type: "color",
          label: "Footer background",
          name: "footerBgColor",
          defaultValue: "#000000",
        },
        {
          type: "color",
          label: "Footer text",
          name: "footerText",
          defaultValue: "#ffffff",
        },
        {
          type: "heading",
          label: "Button (primary)",
        },
        {
          type: "color",
          label: "Background color",
          name: "buttonPrimaryBg",
          defaultValue: "#000000",
        },
        {
          type: "color",
          label: "Text color",
          name: "buttonPrimaryColor",
          defaultValue: "#ffffff",
        },
        {
          type: "heading",
          label: "Button (secondary)",
        },
        {
          type: "color",
          label: "Background color",
          name: "buttonSecondaryBg",
          defaultValue: "#ffffff",
        },
        {
          type: "color",
          label: "Text color",
          name: "buttonSecondaryColor",
          defaultValue: "#000000",
        },
        {
          type: "heading",
          label: "Button (outline)",
        },
        {
          type: "color",
          label: "Text and border",
          name: "buttonOutlineTextAndBorder",
          defaultValue: "#000000",
        },
        {
          type: "heading",
          label: "Badges / labels / tags",
        },
        {
          type: "color",
          label: "Discounts",
          name: "saleBadgeColor",
          defaultValue: "#c6512c",
        },
        {
          type: "color",
          label: "New",
          name: "newBadgeColor",
          defaultValue: "#67785d",
        },
        {
          type: "color",
          label: "Best seller / Hot",
          name: "bestSellerBadgeColor",
          defaultValue: "#000000",
        },
        {
          type: "color",
          label: "Sold out & unavailable",
          name: "soldOutBadgeColor",
          defaultValue: "#d4d4d4",
        },
        {
          type: "heading",
          label: "Others",
        },
        {
          type: "color",
          label: "Compare price text",
          name: "comparePriceTextColor",
          defaultValue: "#84807B",
        },
        {
          type: "color",
          label: "Star rating",
          name: "starRatingColor",
          defaultValue: "#fde047",
        },
      ],
    },
    {
      group: "Typography",
      inputs: [
        {
          type: "heading",
          label: "Headings",
        },
        {
          type: "select",
          label: "Letter spacing",
          name: "headingBaseSpacing",
          configs: {
            options: [
              { label: "-75", value: "-0.075em" },
              { label: "-50", value: "-0.05em" },
              { label: "-25", value: "-0.025em" },
              { label: "0", value: "0em" },
              { label: "25", value: "0.025em" },
              { label: "50", value: "0.05em" },
              { label: "75", value: "0.075em" },
              { label: "100", value: "0.1em" },
              { label: "150", value: "0.15em" },
              { label: "200", value: "0.2em" },
              { label: "250", value: "0.25em" },
            ],
          },
          defaultValue: "0.025em",
        },
        {
          type: "range",
          label: "Font size",
          name: "h1BaseSize",
          configs: {
            min: 48,
            max: 92,
            step: 1,
            unit: "px",
          },
          defaultValue: 60,
        },
        {
          type: "range",
          label: "Line height",
          name: "headingBaseLineHeight",
          configs: {
            min: 0.8,
            max: 2,
            step: 0.1,
          },
          defaultValue: 1.2,
        },
        {
          type: "heading",
          label: "Body text",
        },
        {
          type: "select",
          label: "Letter spacing",
          name: "bodyBaseSpacing",
          configs: {
            options: [
              { label: "-75", value: "-0.075em" },
              { label: "-50", value: "-0.05em" },
              { label: "-25", value: "-0.025em" },
              { label: "0", value: "0em" },
              { label: "25", value: "0.025em" },
              { label: "50", value: "0.05em" },
              { label: "75", value: "0.075em" },
              { label: "100", value: "0.1em" },
              { label: "150", value: "0.15em" },
              { label: "200", value: "0.2em" },
              { label: "250", value: "0.25em" },
            ],
          },
          defaultValue: "0.025em",
        },
        {
          type: "range",
          label: "Font size",
          name: "bodyBaseSize",
          configs: {
            min: 12,
            max: 48,
            step: 1,
            unit: "px",
          },
          defaultValue: 14,
        },
        {
          type: "range",
          label: "Line height",
          name: "bodyBaseLineHeight",
          configs: {
            min: 0.8,
            max: 2,
            step: 0.1,
          },
          defaultValue: 1.5,
        },
      ],
    },
    {
      group: "Product swatches & badges",
      inputs: [
        {
          type: "swatches",
          name: "productSwatches",
          label: "Configs",
          defaultValue: swatchesConfigs,
          helpText:
            "Product swatches configs are applied to product page, filters and product cards.",
        },
        {
          type: "heading",
          label: "Badges",
        },
        {
          type: "range",
          label: "Border radius",
          name: "badgeBorderRadius",
          configs: {
            min: 0,
            max: 10,
            step: 2,
            unit: "px",
          },
          defaultValue: 0,
        },
        {
          type: "select",
          label: "Text transform",
          name: "badgeTextTransform",
          configs: {
            options: [
              { value: "none", label: "None" },
              { value: "uppercase", label: "Uppercase" },
              { value: "lowercase", label: "Lowercase" },
              { value: "capitalize", label: "Capitalize" },
            ],
          },
          defaultValue: "Uppercase",
        },
        {
          type: "text",
          label: "Best Seller / Hot text",
          name: "bestSellerBadgeText",
          defaultValue: "Best Seller",
          placeholder: "Best Seller",
        },
        {
          type: "text",
          label: "New text",
          name: "newBadgeText",
          defaultValue: "New",
          placeholder: "New",
        },
        {
          type: "range",
          label: "Days old",
          name: "newBadgeDaysOld",
          configs: {
            min: 0,
            max: 365,
            step: 1,
          },
          defaultValue: 30,
          helpText:
            "The <strong>New</strong> badge will be shown if the product is published within the last days.",
        },
        {
          type: "text",
          label: "Sold out text",
          name: "soldOutBadgeText",
          defaultValue: "Sold out",
          placeholder: "Sold out",
        },
        {
          type: "textarea",
          label: "Sale badge text",
          name: "saleBadgeText",
          defaultValue: "-[percentage]% Off",
          placeholder: "-[percentage]% Off, Saved [amount], or Sale",
          helpText: [
            "<p class='mb-1'>- Use <strong>[percentage]</strong> to display the discount percentage.</p>",
            "<p class='mb-1'>- Use <strong>[amount]</strong> to display the discount amount.</p>",
            "<p>E.g. <strong>-[percentage]% Off</strong>, <strong>Saved [amount]</strong>, or <strong>Sale</strong>.</p>",
          ].join(""),
        },
      ],
    },
    {
      group: "Product cards",
      inputs: [
        {
          type: "color",
          name: "pcardBackgroundColor",
          label: "Background color",
          defaultValue: "",
        },
        {
          type: "range",
          name: "pcardBorderRadius",
          label: "Border radius",
          configs: {
            min: 0,
            max: 40,
            step: 2,
            unit: "px",
          },
          defaultValue: 0,
        },
        {
          type: "heading",
          label: "Image",
        },
        {
          type: "switch",
          name: "pcardShowImageOnHover",
          label: "Show second image on hover",
          defaultValue: true,
        },
        {
          type: "select",
          name: "pcardImageRatio",
          label: "Image aspect ratio",
          defaultValue: "adapt",
          configs: {
            options: [
              { value: "adapt", label: "Adapt to image" },
              { value: "1/1", label: "Square (1/1)" },
              { value: "3/4", label: "Portrait (3/4)" },
              { value: "4/3", label: "Landscape (4/3)" },
              { value: "16/9", label: "Widescreen (16/9)" },
            ],
          },
          helpText:
            'Learn more about image <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio" target="_blank" rel="noopener noreferrer">aspect ratio</a> property.',
        },
        {
          type: "heading",
          label: "Content",
        },
        {
          type: "select",
          label: "Title & prices alignment",
          name: "pcardTitlePricesAlignment",
          configs: {
            options: [
              { value: "horizontal", label: "Horizontal" },
              { value: "vertical", label: "Vertical" },
            ],
          },
          defaultValue: "horizontal",
        },
        {
          type: "toggle-group",
          name: "pcardAlignment",
          label: "Content alignment",
          configs: {
            options: [
              { value: "left", label: "Left", icon: "align-start-vertical" },
              {
                value: "center",
                label: "Center",
                icon: "align-center-vertical",
              },
              { value: "right", label: "Right", icon: "align-end-vertical" },
            ],
          },
          defaultValue: "center",
          condition: "pcardTitlePricesAlignment.eq.vertical",
        },
        {
          type: "switch",
          label: "Show vendor",
          name: "pcardShowVendor",
          defaultValue: true,
        },
        {
          type: "switch",
          label: "Show SKU",
          name: "pcardShowSku",
          defaultValue: false,
        },
        {
          type: "switch",
          label: "Show lowest price",
          name: "pcardShowLowestPrice",
          defaultValue: false,
        },
        {
          type: "switch",
          label: "Show sale price",
          name: "pcardShowSalePrice",
          defaultValue: true,
          condition: "pcardShowLowestPrice.ne.true",
        },
        {
          type: "switch",
          label: "Show option swatches",
          name: "pcardShowOptionSwatches",
          defaultValue: true,
        },
        {
          type: "text",
          label: "Option to show",
          name: "pcardOptionToShow",
          defaultValue: "Color",
          placeholder: "Color",
          condition: "pcardShowOptionSwatches.eq.true",
        },
        {
          type: "range",
          label: "Max options",
          name: "pcardMaxOptions",
          configs: {
            min: 2,
            max: 10,
          },
          defaultValue: 5,
          condition: "pcardShowOptionSwatches.eq.true",
        },
        {
          type: "heading",
          label: "Quick shop",
        },
        {
          type: "switch",
          label: "Enable quick shop",
          name: "pcardEnableQuickShop",
          defaultValue: true,
        },
        {
          type: "select",
          label: "Quick shop button type",
          name: "pcardQuickShopButtonType",
          configs: {
            options: [
              { value: "icon", label: "Icon button" },
              { value: "text", label: "Text button" },
            ],
          },
          defaultValue: "icon",
          condition: "pcardEnableQuickShop.eq.true",
        },
        {
          type: "text",
          label: "Quick shop button text",
          name: "pcardQuickShopButtonText",
          defaultValue: "Quick shop",
          placeholder: "Quick shop",
          condition: "pcardQuickShopButtonType.eq.text",
        },
        {
          type: "select",
          label: "Quick shop action",
          name: "pcardQuickShopAction",
          configs: {
            options: [
              { value: "go-to-page", label: "Go to product page" },
              { value: "open-quick-shop", label: "Open quick shop panel" },
            ],
          },
          defaultValue: "open-quick-shop",
          condition: "pcardEnableQuickShop.eq.true",
        },
        {
          type: "select",
          label: "Quick shop panel type",
          name: "pcardQuickShopPanelType",
          configs: {
            options: [
              { value: "modal", label: "Modal" },
              { value: "drawer", label: "Drawer" },
            ],
          },
          defaultValue: "modal",
          condition: "pcardQuickShopAction.eq.open-quick-shop",
        },
        {
          type: "heading",
          label: "Badges",
        },
        {
          type: "switch",
          label: "Show sale badges",
          name: "pcardShowSaleBadges",
          defaultValue: true,
        },
        {
          type: "switch",
          label: "Show Hot / Best Seller badges",
          name: "pcardShowBestSellerBadges",
          defaultValue: true,
        },
        {
          type: "switch",
          label: "Show New badges",
          name: "pcardShowNewBadges",
          defaultValue: true,
        },
        {
          type: "switch",
          label: "Show Out of stock badges",
          name: "pcardShowOutOfStockBadges",
          defaultValue: false,
        },
      ],
    },
    {
      group: "Animations and effects",
      inputs: [
        {
          type: "switch",
          label: "Enable view transition",
          name: "enableViewTransition",
          defaultValue: true,
          helpText:
            'Learn more about how <a href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API" target="_blank" rel="noreferrer">View Transitions API</a> work.',
        },
        {
          type: "switch",
          label: "Reveal elements on scroll",
          name: "revealElementsOnScroll",
          defaultValue: true,
        },
      ],
    },
    {
      group: "Footer",
      inputs: [
        {
          type: "select",
          name: "footerWidth",
          label: "Footer width",
          configs: {
            options: [
              { value: "full", label: "Full page" },
              { value: "stretch", label: "Stretch" },
              { value: "fixed", label: "Fixed" },
            ],
          },
          defaultValue: "fixed",
        },
        {
          type: "image",
          name: "footerLogoData",
          label: "Logo",
          defaultValue: "",
        },
        {
          type: "range",
          name: "footerLogoWidth",
          label: "Logo width",
          configs: {
            min: 20,
            max: 200,
            step: 1,
            unit: "px",
          },
          defaultValue: 80,
        },
        {
          type: "richtext",
          name: "bio",
          label: "Store bio",
          defaultValue:
            "<p>We are a team of designers, developers, and creatives who are passionate about creating beautiful and functional products.</p>",
        },
        {
          type: "heading",
          label: "Social links",
        },
        {
          type: "text",
          name: "socialInstagram",
          label: "Instagram",
          defaultValue: "https://www.instagram.com/",
        },
        {
          type: "text",
          name: "socialX",
          label: "X (formerly Twitter)",
          defaultValue: "https://x.com/i/communities/1636383560197373952",
        },
        {
          type: "text",
          name: "socialLinkedIn",
          label: "LinkedIn",
          defaultValue: "https://www.linkedin.com/company/weaverseio",
        },
        {
          type: "text",
          name: "socialFacebook",
          label: "Facebook",
          defaultValue: "https://www.facebook.com/weaverse",
        },
        {
          type: "heading",
          label: "Store information",
        },
        {
          type: "text",
          name: "addressTitle",
          label: "Title",
          defaultValue: "OUR SHOP",
          placeholder: "Our shop",
        },
        {
          type: "text",
          name: "storeAddress",
          label: "Address",
          defaultValue: "301 Front St W, Toronto, ON M5V 2T6, Canada",
          placeholder: "301 Front St W, Toronto, ON M5V 2T6, Canada",
        },
        {
          type: "text",
          name: "storeEmail",
          label: "Email",
          defaultValue: "contact@my-store.com",
          placeholder: "contact@my-store.com",
        },
        {
          type: "heading",
          label: "Newsletter",
        },
        {
          type: "text",
          name: "newsletterTitle",
          label: "Title",
          defaultValue: "STAY IN TOUCH",
          placeholder: "Stay in touch",
        },
        {
          type: "text",
          name: "newsletterDescription",
          label: "Description",
          defaultValue: "News and inspiration in your inbox, every week.",
        },
        {
          type: "text",
          name: "newsletterPlaceholder",
          label: "Input placeholder",
          defaultValue: "Please enter your email",
          placeholder: "Please enter your email",
        },
        {
          type: "text",
          name: "newsletterButtonText",
          label: "Button text",
          defaultValue: "Send",
          placeholder: "Send",
        },
        {
          type: "richtext",
          name: "copyright",
          label: "Copyright text",
          defaultValue: "© 2024 Weaverse. All rights reserved.",
        },
      ],
    },
  ],
};
