import { TIcon } from '../../../data/types';

interface IIcon {
  name: TIcon;
  className?: string;
}

export default function Icon({ name, className = '' }: IIcon) {
  return (
    <img
      src={require(`./icons/${name}.svg`)}
      className={className}
      alt={name}
    />
  );
}
