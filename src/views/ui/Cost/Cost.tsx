import s from './cost.module.scss';

interface IButton {
  value: number;
  prefix?: string;
  color?: 'black' | 'orange';
}

export default function Cost({ value, prefix = '', color = 'black' }: IButton) {
  return (
    <span className={`${s.cost} ${s[`cost_color_${color}`]}`}>
      {prefix}
      {value} ₽
    </span>
  );
}
