// @ts-nocheck
const tsNode = require('ts-node'),
    path = require('path');

exports.config = {

    specs: ['./e2e/features/**/*.feature'],

    directConnect: true,                            // local (direct) webdriver connection or through a server
    seleniumAddress: 'http://selenium:4444/wd/hub', // selenium server address

    capabilities: {
        browserName: 'chrome',
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    ignoreUncaughtException: true,
    allScriptsTimeout: 30000,

    cucumberOpts: {
        format: 'json:results.json',
        require: [path.resolve(process.cwd(), 'e2e/**/*.ts')],
        strict: false,
        tags: 'not @WIP or not @Ignore'
    },

    onPrepare() {
        tsNode.register({
            project: path.join(__dirname, './tsconfig.json')
        });

        browser.waitForAngularEnabled(false);

        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().window().setPosition(0, 0);
        browser.manage().window().setSize(1600, 900);
    },
};
