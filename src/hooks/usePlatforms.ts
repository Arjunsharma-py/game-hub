import useData from "./useData";

interface Plateform {
  id: number;
  name: string;
  slug: string;
}

const usePlatfroms = () => useData<Plateform>("/platforms/lists/parents");

export default usePlatfroms;
