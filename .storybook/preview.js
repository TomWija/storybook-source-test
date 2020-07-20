import { addParameters } from '@storybook/react';
import React from "react";

const withThemeWrapper = (Story, context) => <div className="ax-theme--day">
    <Story { ...context } />
</div>;

export const decorators = [withThemeWrapper]

addParameters({
    controls: { expanded: true }
});
