import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariants = 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: ButtonVariants;
  type?: string;
};
