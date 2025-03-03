import {
  AntdSVG,
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  PrimeReactSVG,
  ReactHookFormSVG,
  ReactSVG,
  SassSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG,
  Sk8terSVG,
  SwaggerSVG,
  TailwindSVG,
  TypescriptSVG,
  CloudSVG,
  VueSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <ShadcnLandingSVG />,
    title: "MockerView",
    subtitle: "mock interview with AI",
    technologies: [
      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "AWS Cloud",
        icon: (
          <CloudSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
    ],
    description:
      "MockerView is a powerful AI based Interview Prep platform, where user's get feedback on their answers as well as presentation.",
    imgUrl:
      "https://res.cloudinary.com/dwi27ks8b/image/upload/v1740989121/Screenshot_2025-03-03_at_12.04.51_AM_en3nt3.png",
    videoUrl: "https://res.cloudinary.com/dwi27ks8b/video/upload/v1740995744/Demo_MView_fdwre8.mov",
    githubUrl: "https://github.com/divikshrivastava/mockerview",
    websiteUrl: "https://www.mockerview.io",
  },
  {
    icon: <ShadcnLandingSVG />,
    title: "MeetScan.pro",
    subtitle: "Your networking companion",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },

      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
    ],
    description:
      "MeetScan.pro is your perfect companion to supercharge your networking at any event, using tagging based QR code scans",
    imgUrl: "https://res.cloudinary.com/dwi27ks8b/image/upload/v1740989379/1_Ldba3cDRSebN3gOJKRSAkg_mwfotl.webp",
    videoUrl: "",
    githubUrl: "https://github.com/divikshrivastava/MeetScan",
    websiteUrl: "https://www.meetscan.pro",
  },
  {
    icon: <ShadcnLandingSVG />,
    title: "Multiversity",
    subtitle: "Unlock your imagination with never before multiversal possibilities!",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "Next js",
        icon: (
          <NextSVG
            color="#000"
            size={16}
          />
        ),
      },
      {
        name: "CSS Modules",
        icon: (
          <CSSSVG
            color="#1572B6"
            size={16}
          />
        ),
      },
    ],
    description:
      "Based on the popular Netflix show, Love Death and Robots, Multiversity is an app with which you can unlock vast new unimaginable possibilities, powered by advanced LLM inferencing",
    imgUrl: "https://res.cloudinary.com/dwi27ks8b/image/upload/v1740989718/Screenshot_2025-03-03_at_12.14.47_AM_lze1ap.png",
    videoUrl: "",
    githubUrl: "https://github.com/divikshrivastava/multiversity-app",
    websiteUrl: "https://multiversity.vercel.app/",
  },
  // {
  //   icon: <Sk8terSVG />,
  //   title: "Sk8ter",
  //   subtitle: "E-commerce",
  //   technologies: [
  //     {
  //       name: "JavaScript",
  //       icon: (
  //         <JavascriptSVG
  //           color="#F7DF1E"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "React",
  //       icon: (
  //         <ReactSVG
  //           color="#61DAFB"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: (
  //         <TypescriptSVG
  //           color="#3178C6"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Sass",
  //       icon: (
  //         <SassSVG
  //           color="#CC6699"
  //           size={16}
  //         />
  //       ),
  //     },

  //     {
  //       name: "Prime React",
  //       icon: (
  //         <PrimeReactSVG
  //           color="#06B6D4"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "React Hook Form",
  //       icon: (
  //         <ReactHookFormSVG
  //           color="#EC5990"
  //           size={16}
  //         />
  //       ),
  //     },
  //   ],
  //   description:
  //     "Dynamic e-commerce web system selling skateboards in a friendly and intuitive interface. The system has authentication, a dashboard and also dark mode.",
  //   imgUrl: "/videos/sk8ter.webp",
  //   videoUrl: "/videos/sk8ter.mp4",
  //   githubUrl: "https://github.com/leoMirandaa/sk8ter-shop",
  //   websiteUrl: "",
  // },
  // {
  //   icon: <ShopApiSVG />,
  //   title: "Shop API",
  //   subtitle: "E-commerse back-end",
  //   technologies: [
  //     {
  //       name: "JavaScript",
  //       icon: (
  //         <JavascriptSVG
  //           color="#F7DF1E"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: (
  //         <TypescriptSVG
  //           color="#3178C6"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Express",
  //       icon: (
  //         <ExpressSVG
  //           color="#000000"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: (
  //         <MongoDBSVG
  //           color="#47A248"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Mongoose",
  //       icon: (
  //         <MongooseSVG
  //           color="#880000"
  //           size={16}
  //         />
  //       ),
  //     },
  //     {
  //       name: "Swagger",
  //       icon: (
  //         <SwaggerSVG
  //           color="#85EA2D"
  //           size={16}
  //         />
  //       ),
  //     },
  //   ],
  //   description:
  //     "Backed e-commerce project that allows to manage users, categories, coupons and products with the endpoints ready to play with. Includes swagger docs.",
  //   imgUrl: "/videos/shop-api.webp",
  //   videoUrl: "",
  //   githubUrl: "https://github.com/leomirandaa/shop-API.git",
  //   websiteUrl: "NONE",
  // },
];
