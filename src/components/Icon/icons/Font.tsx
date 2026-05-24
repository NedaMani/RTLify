import { forwardRef, SVGProps } from "react";

const SVGIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(({ ...rest }, ref) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 24 24"
		ref={ref}
		{...rest}
	>
		<path
			fill="currentColor"
			d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154zm-.8-2L8 6.885L5.554 13zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93M19 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
		/>
	</svg>
));

SVGIcon.displayName = "Font Icon";
export default SVGIcon;
