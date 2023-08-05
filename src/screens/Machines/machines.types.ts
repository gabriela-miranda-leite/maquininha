interface BenefitsProps {
  type: string;
  description: string;
}

export interface DataProps {
  name: string;
  description: string;
  image: string;
  id: string;
  benefits: BenefitsProps[];
}
