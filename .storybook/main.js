module.exports = {
    stories: ['../guides/**/*.stories.@(js|mdx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-actions/register'
    ],
    //tweak build for local packages
    webpackFinal: (config) => {
        config.module.rules[0].use[0].options.plugins.push(require.resolve("@babel/plugin-transform-modules-commonjs"));
        return config;
    }
};
