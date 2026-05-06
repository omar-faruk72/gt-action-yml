import PortfolioDetailsHero from "./PorfolioDetailsHero";




export const PortFolioHero = ({ project }) => {
  if (!project) return null;

  return (
    <PortfolioDetailsHero
      project={project} 
      badgeIcon="/image/heroBridgeIcons/Award.svg" 
    />
  );
};