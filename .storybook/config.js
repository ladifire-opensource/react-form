import * as React from 'react';
import 'chromatic';
import {configure, addDecorator, addParameters} from '@storybook/react';
import {configureActions} from '@storybook/addon-actions';
import {VerticalCenter} from './layout';
import { withA11y } from '@storybook/addon-a11y';

configureActions({
    depth: 1
});

addParameters({
    options: {
        storySort: (a, b) => a[1].kind.localeCompare(b[1].kind),
        enableShortcuts: false
    }
});

addDecorator(withA11y);

addDecorator(story => (
    <VerticalCenter style={{textAlign: 'left', boxSizing: 'border-box', display: 'flex'}}>
{story()}
</VerticalCenter>
));


function loadStories() {
    document.body.style.overflowY = 'scroll';
    document.body.style.overflowX = 'hidden';
    let storiesContext = require.context('../packages', true, /^(.*\/stories\/.*?\.(js|jsx|ts|tsx))$/);
    storiesContext.keys().forEach(storiesContext);
}

configure(loadStories, module);
