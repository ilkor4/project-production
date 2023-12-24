import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybok/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybok/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProviders';
import { RouterDecorator } from '../../src/shared/config/storybok/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
