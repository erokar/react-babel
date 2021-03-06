module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { 
             test: /\.jsx?$/,
             exclude: /node_modules/, 
             loader: "babel",
             query: {
                 presets: ['es2015', 'react']
             }
            }
        ]
    },
  
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    //"react": "React",
    //"react-dom": "ReactDOM"
    
    externals: {

    },
};