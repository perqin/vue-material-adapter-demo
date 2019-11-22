module.exports = {
    chainWebpack: config => {
        const ofs = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        const cssRules = config.module.rule('css');
        const postRules = config.module.rule('postcss');
 
        const addSassResourcesLoader = (rules, type) => {
            rules.oneOf(type).use('sass-resoureces-loader').loader('sass-resources-loader').options({
                resources: './src/theme.scss'
            });
        };
        ofs.forEach(type => { addSassResourcesLoader(cssRules, type); addSassResourcesLoader(postRules, type) });
        return config;
    }
}

