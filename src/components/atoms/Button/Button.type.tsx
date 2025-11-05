export type ElementSize = 's' | 'm';

export interface ButtonProps {
  icon: string;
  size: ElementSize;
  active: boolean;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
