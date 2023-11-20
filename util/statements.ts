
interface Statements{
  missionStatement:string
  creonStatement:string
  creonTitle:string
  missionSubStatement:string
}
export const writeUpsFromDb
: Statements ={
  missionStatement:'our mission is to provide unique, confidential AI-based tools, to which you will gain ',
  missionSubStatement:'lifetime access through NFT tokens and our CREON token.',
  creonStatement:'The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools',
  creonTitle:'creon pass nft'
}
export const listItems:string[] = [
  'Pre-launch investment opportunities for upcoming AI projects ',
  'Free and early access to Creon built AI projects',
  'Higher allocation limits on the Creon AI Launchpad',
  'Revenue share distribution from Creon built AI projects'
]

type Title = "Profit" | "Engagement" | "Limitless" | "Transparent"
type TitleLogo = Record<Title, boolean>

export const accordionStatements:{title:string, summary:string,logoTitle:Title}[] = [
  {
    title:"Profitability and Growth",
    logoTitle:"Profit",
    summary:" At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    title: "Transparent & Fair Decentralized Earnings",
    logoTitle:"Transparent",
    summary:" At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    title:"Early Engagement in Tokenized AI Projects",
    logoTitle:"Engagement",
    summary:"    At Creon, we handpick cutting-edge Al projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success."
  },
  {
    title:"Limitless Possibilities of AI & Crypto",
    logoTitle:"Limitless",
    summary:" At Creon, we handpick cutting-edge Al prinjects and offer our community and token holders early access and investment opportunities. Our community"
  }
]

