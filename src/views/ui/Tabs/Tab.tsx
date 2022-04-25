export interface ITab<T> {
  value: T;
  label: string;
  disabled?: boolean;
}

export default function Tab<T = string>({ label }: ITab<T>) {
  return <div>{label}</div>;
}
