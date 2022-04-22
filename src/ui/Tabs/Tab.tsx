export interface ITab<T> {
  value: T;
  title: string;
  disabled?: boolean;
}

export default function Tab<T = string>({ title }: ITab<T>) {
  return <div>{title}</div>;
}
