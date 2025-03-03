import { iconType } from "../types";
import {
  JavascriptSVG,
  TypescriptSVG,
  VueSVG,
  ReactSVG,
  TailwindSVG,
  ExpressSVG,
  NextUISVG,
  PrimeReactSVG,
  PrimeVueSVG,
  QuasarSVG,
  MongoDBSVG,
  ShadcnSVG,
  PythonSVG,
  JavaSVG,
  CloudSVG,
  AISVG
} from "../components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "JavaScript",
    icon: (
      <JavascriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <TypescriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <PythonSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <ReactSVG
        color={color}
        size={35}
      />
    ),
  },

  {
    name: "Java",
    icon: (
      <JavaSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <TailwindSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Cloud AWS",
    icon: (
      <CloudSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "NextUI",
    icon: (
      <NextUISVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Express",
    icon: (
      <ExpressSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <MongoDBSVG
        color={color}
        size={35}
      />
    ),
  },
];
