//Note these are mocked data from a database to make most component reusable and dynamic on prod
interface Statements{
  missionStatement:string
  creonStatement:string
  creonTitle:string
  missionSubStatement:string
}
export const writeUpsFromDb
: Statements ={
  missionStatement:"our mission is to provide unique, confidential AI-based tools, to which you will gain ",
  missionSubStatement:"lifetime access through NFT tokens and our CREON token.",
  creonStatement:"The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools",
  creonTitle:"creon pass nft"
}
export const listItems:string[] = [
  "Pre-launch investment opportunities for upcoming AI projects ",
  "Free and early access to Creon built AI projects",
  "Higher allocation limits on the Creon AI Launchpad",
  "Revenue share distribution from Creon built AI projects"
]

type Title = "Profit" | "Engagement" | "Limitless" | "Transparent"
type TitleLogo = Record<Title, boolean>

export const accordionStatements:{id:number,title:string, summary:string,logoTitle:Title}[] = [
  {
    id:1,
    title:"Profitability and Growth",
    logoTitle:"Profit",
    summary:" At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    id:2,
    title: "Transparent & Fair Decentralized Earnings",
    logoTitle:"Transparent",
    summary:" At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    id:3,
    title:"Early Engagement in Tokenized AI Projects",
    logoTitle:"Engagement",
    summary:"    At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    id:4,
    title:"Limitless Possibilities of AI & Crypto",
    logoTitle:"Limitless",
    summary:" At Creon, we handpick cutting-edge Al prinjects and offer our community and token holders early access and investment opportunities. Our community"
  }
]

export const ProfitThroughStatement:{title:string, summary:string} ={
  title:"The dynamic community driven business model of the future.",
  summary:("At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.")
}

 export const CardInformation:{id:number,title:string,summary:string,writeup:string,imageSource:string,comingSoon:boolean}[] = [
  {
    id:1,
    comingSoon:true,
    title:"token",
    imageSource:"Token.png",
    summary:"The Gateway token to the world of AI",
    writeup:"Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive"
  },
  {
    id:2,
    comingSoon:true,
    title: "revenue",
    imageSource: "Revenue.png",
    summary:"Driving income and growth through ",
    writeup:"CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
  },
  {
    id:3,
    comingSoon:true,
    title:"launchpad",
    imageSource:"launchpad.png",
    summary:"Driving the future of AI Innovation",
    writeup:"The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON."
  }

]
