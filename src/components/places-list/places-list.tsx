import PlaceCard from '../place-card/place-card';
import type { Offers } from '../../mocks/offers';

type PlacesListProps = {
  offersMocks: Offers[];
}

function PlacesList({offersMocks}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersMocks.map((value) => <PlaceCard key={value.id} offer={value}/>)}
    </div>
  );
}

export default PlacesList;
