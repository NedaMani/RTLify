import { SVGProps } from "react";
import * as IconMap from "./icons";

export type IconNameType = keyof typeof IconMap;

type IconProps = SVGProps<SVGSVGElement> & {
	iconName: IconNameType;
	fallback?: React.ReactNode;
};

const Icon = ({ iconName, fallback = null, ...rest }: IconProps) => {
	const Component = IconMap[iconName];

	if (!Component) return fallback;

	return <Component {...rest} />;
};

export default Icon;
