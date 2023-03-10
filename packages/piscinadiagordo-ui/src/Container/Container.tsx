import cn from "classnames";
import { ReactNode } from "react";

export interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
	return (
		<div className={cn("mx-auto w-full max-w-[1240px]", className)}>
			{children}
		</div>
	);
};
