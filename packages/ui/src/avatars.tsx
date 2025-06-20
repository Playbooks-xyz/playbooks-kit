import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Font, P } from 'src/fonts';
import { Div, Img } from 'src/html';

export const Avatar = ({ name = 'Avatar', tailwind, className, children, ...props }: types.AvatarProps) => {
	const base = theme.avatar();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarBadge = ({
	name = 'AvatarBadge',
	size = 'sm',
	tailwind,
	className,
	children,
	...props
}: types.AvatarBadgeProps) => {
	const base = theme.avatarBadge({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarImg = ({
	name = 'AvatarImg',
	alt = '',
	size = 'md',
	tailwind,
	className,
	...props
}: types.AvatarImgProps) => {
	const base = theme.avatarImg({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	return <Img alt={alt} {...computed} />;
};

export const AvatarBody = ({ name = 'AvatarBody', tailwind, className, children, ...props }: types.AvatarBodyProps) => {
	const base = theme.avatarBody();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

export const AvatarTitle = ({
	name = 'AvatarTitle',
	size = 'h6',
	tailwind,
	className,
	children,
	...props
}: types.AvatarTitleProps) => {
	const base = theme.avatarTitle();
	const computed = { ...base, ...props, tailwind, className, name };

	return (
		<Font size={size} {...computed}>
			{children}
		</Font>
	);
};

export const AvatarText = ({ name = 'AvatarText', tailwind, className, children, ...props }: types.AvatarTextProps) => {
	const base = theme.avatarText();
	const computed = { ...base, ...props, tailwind, className, name };

	return <P {...computed}>{children}</P>;
};

export const AvatarActions = ({
	name = 'AvatarActions',
	tailwind,
	className,
	children,
	...props
}: types.AvatarActionsProps) => {
	const base = theme.avatarActions();
	const computed = { ...base, ...props, tailwind, className, name };

	return <Div {...computed}>{children}</Div>;
};

// Docs:
// https://tailwindui.com/src/application-ui/elements/avatars
