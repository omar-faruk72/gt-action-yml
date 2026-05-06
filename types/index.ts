export interface KeyPoint {
  label: string;
  content: string;
}

export interface CaseStudy {
  userProblem: string;
  ourGoal: string;
  ourSolution: string;
  result: string;
}

export interface Portfolio {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  thumbnail_image: string;
  gallery_images: string[];
  description?: string; 
  screensDesigned?: string; 
  usabilityIncrease?: string; 
  liveLink?: string;
  caseStudy?: CaseStudy; 
  key_points?: KeyPoint[];

}