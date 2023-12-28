import { getHeroesByPublisher } from "../helpers/getHeroesbyPublisher"
import { HeroItem } from "./HeroItem";

export const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map((heroe)=>(
              <HeroItem key={heroe.id} {...heroe}></HeroItem>
            ))
        }
    </div>
  )
}
