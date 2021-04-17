import Vue from 'vue';

var dialogs = {};

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context('.', false, /[\w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {
    var requiredComponent = require(`${fileName}`),
        component;

    const componentName = fileName
        //Remove the "./" from the beginning
        .replace(/^\.\//, '')
        //Remove the file extension from the end
        .replace(/\.\w+$/, '');

    function createComponent() {
        const component = new Vue(requiredComponent.default);
        document.body.appendChild(component.$mount().$el);
        return component;
    }

    function getComponent() {
        if (!component) {
            component = createComponent();
        }

        return component;
    }

    dialogs[componentName] = {
        show() {
            getComponent().show();
        },
        close() {
            getComponent().close();
        },
        isOpen() {
            return getComponent().isOpen();
        }
    };
});

export default dialogs;