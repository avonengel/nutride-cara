import * as React from "react"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import AboutMDX from "../sections/about.mdx"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="avocado" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        {/* <Svg icon="pepper" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" /> */}
        <Svg icon="lettuce" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <Svg icon="lemon" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="eggplant" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <Svg icon="chili" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <Svg icon="strawberry" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="garlic" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="garlic" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="garlic" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="kiwi" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="peas" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg icon="onion" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
