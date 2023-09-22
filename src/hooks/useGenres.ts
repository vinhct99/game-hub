
import useData from "./useData";
import genres from "../data/genres";
export interface Genre{
    id: number;
    name: string;
    image_background:string;
}

 const useGenres = () => useData<Genre>('/genres');
//shipping data
//const useGenres = () => ({data:genres,isLoading :false,error :null});
export default useGenres;