const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
       main:path.resolve(__dirname,'../','src/js/index.js'),
       //precios:path.resolve(__dirname,'../','src/js/precios.js'),
       //contactos:path.resolve(__dirname,'../','src/js/contactos.js')
    },
    output: {
        path: path.resolve(__dirname,'../','dist'),
        filename: 'js/bundle.js'
    },

    devServer:{
        //contentBase: path.join(__dirname,'../', "dist"), 
        open: true, 
        compress: true, // Comprime los archivos (gzip)
        //publicPath:  path.join(__dirname,'../', "src"),  
        stats: "errors-only", 
        port: 9000
    },
    
        module:{
            rules:[
            //AQUI VAN LOS LOADERS
            //test: que tipo de achivo quiero reconocer (CSS,JPG,STYL,SASS ETC)
            //use:que loaders se va encargar del archivo
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    //presets: ['@babel/preset-env']
                    presets: ['es2015']
                  }
                }
              },
           
            {
                test:/\.css$/,
                //use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                }),   
            }]
        },

        plugins:[
            new ExtractTextPlugin("css/[name].css")
        ],

       
        
}