import { useTitle } from '../../../data/hooks';
import { TPage } from '../../../data/types/page';

export default function Catalog({ title }: TPage) {
  useTitle(title);

  return <p>Something</p>;
}
