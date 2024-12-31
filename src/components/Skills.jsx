 

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Cloud configuration
export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Custom render function for icons
export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

// Icon cloud component
export function IconCloud({ iconSlugs = [], imageArray = [] }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <>
        {renderedIcons}
        {imageArray &&
          imageArray?.map((image, index) => (
            <a key={index} href="#">
              <img height="42" width="42" alt="icon" src={image}  />
            </a>
          ))}
      </>
    </Cloud>
  );
}

// Skills section
const Skills = () => {
  const defaultImageArray = [
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png", // HTML
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png", // CSS
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/less/less.png", // LESS
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png", // SASS
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png", // TailwindCSS
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png", // JavaScript
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", // React
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", // TypeScript
    "https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg", // Next.js
    "https://cdn.worldvectorlogo.com/logos/remix.svg", // Remix
    "https://raw.githubusercontent.com/github/explore/01ea2a586e5da744792d0ccfce2f68b861f29301/topics/vue/vue.png", // Vue.js
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png", // Node.js
    "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", // Git
    "https://img.icons8.com/?size=100&id=yWJYgFcO1O8q&format=png&color=000000", // Bun
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png", // Express.js
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png", // PostgreSQL
    "https://raw.githubusercontent.com/github/explore/379d49236d826364be968345e0a085d044108cff/topics/mysql/mysql.png", // MySQL
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png", // MongoDB
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png", // Firebase
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png", // Docker
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png", // AWS
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png", // React Native
    "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000", // HAGPT
    "https://img.icons8.com/?size=100&id=CE7FtcjlPLrE&format=png&color=000000", // ML
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg", // Redis
    "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" ,// Kafka    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
  ];

  return (
    <div>
      <IconCloud  imageArray={defaultImageArray} />
    </div>
  );
};

export default Skills;
