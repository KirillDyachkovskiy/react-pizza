import { useTitle } from '../../hooks';
import { TPage } from '../../types/page';

export default function Catalog({ title }: TPage) {
  useTitle(title);

  return <p>Something</p>;
}
