// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue';

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context('.', false, /[\w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName =
        'prefix-goes-here-' +
        fileName
            //Remove the “./” from the beginning
            .replace(/^\.\//, '')
            //Remove the file extension from the end
            .replace(/\.\w+$/, '')
            //Convert camelcase to dashes
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase();

    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig);
});