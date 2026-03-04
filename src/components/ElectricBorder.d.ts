// ElectricBorder.d.ts
import { CSSProperties, ReactNode } from "react";

export interface ElectricBorderProps {
  children?: ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  className?: string;
  style?: CSSProperties;
}

declare const ElectricBorder: React.FC<ElectricBorderProps>;
export default ElectricBorder;
