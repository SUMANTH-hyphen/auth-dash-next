type breeds = {
    name: string;
    value: object;
  };
  
  type bargraph = {
    labels: string[];
    data: number[][];
  };
  
  type piechart = {
    labels: string[];
    data: number[];
  };
  
  interface APIData {
    breeds: breeds;
    subbreeds: string[];
    bargraph: bargraph;
    piechart: piechart;
  }
  
  interface ProfileData {
    name: string;
    email: string;
    phone: number;
    instagram: string;
    youtube: string
  }

  interface ProfileFormProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    profile: ProfileData
    setProfile : React.Dispatch<React.SetStateAction<ProfileData>>
  }