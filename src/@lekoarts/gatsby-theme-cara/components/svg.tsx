/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"
import { hidden } from "@lekoarts/gatsby-theme-cara/src/styles/utils"

type IconType = "tomato" | "strawberry" | "raspberry" | "pepper" | "peas" | "orange" | "onion" | "lettuce" | "lemon" | "kiwi" | "eggplant" | "garlic" | "coconut" | "avocado" | "chili" | "cucumber" | "apple" | "watermelon"

type SVGProps = {
    stroke?: boolean
    color?: string | number | any
    width: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | string
    icon: IconType
    left: string
    top: string
    hiddenMobile?: boolean
}

const viewBox = {
    tomato: `0 0 213 204`,
    strawberry: `0 0 145 195`,
    raspberry: `0 0 144 156`,
    pepper: `0 0 190 209`,
    peas: `0 0 161 204`,
    orange: `0 0 202 242`,
    onion: `0 0 189 270`,
    lettuce: `0 0 239 211`,
    lemon: `0 0 189 225`,
    kiwi: `0 0 172 180`,
    eggplant: `0 0 123 270`,
    garlic: `0 0 166 177`,
    coconut: `0 0 217 217`,
    avocado: `0 0 136 230`,
    chili: `0 0 280 97`,
    cucumber: `0 0 105 272`,
    apple: `0 0 219 211`,
    watermelon: `0 0 270 141`,
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
    <svg
        sx={{
            position: `absolute`,
            stroke: stroke ? `currentColor` : `none`,
            fill: stroke ? `none` : `currentColor`,
            display: hiddenMobile ? hidden : `block`,
            color,
            width,
            left,
            top,
        }}
        viewBox={viewBox[icon]}
    >
        <use href={withPrefix(`/icons.svg#${icon}`)} />
    </svg>
)

export default Svg
