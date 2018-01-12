const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

console.log('el config esta en >>>',path.resolve(__dirname))
module.exports = {
    /*
    entry: {
       main:path.resolve(__dirname,'../','src/js/index.js'),
       //precios:path.resolve(__dirname,'../','src/js/precios.js'),
       //contactos:path.resolve(__dirname,'../','src/js/contactos.js')
    },*/
    entry:path.resolve(__dirname,'src/js/index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js',
        publicPath: './dist/'
    },

    devServer:{
        //contentBase: path.join(__dirname,'../', "/"), 
        //host: '0.0.0.0',
        //open: true,
        //hot:true,
        //inline:true, 
        //compress: true, // Comprime los archivos (gzip)
        //publicPath: "http://0.0.0.0:9000/assets/",
        //publicPath:  "assets",  
        //stats: "errors-only", 
        //port: 9000
    },
    
        module:{
            rules:[
            //AQUI VAN LOS LOADERS
            //test: que tipo de achivo quiero reconocer (CSS,JPG,STYL,SASS ETC)
            //use:que loaders se va encargar del archivo
            
            //soporte para javascript (babel)
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    //presets: ['@babel/preset-env']
                    presets: ['es2016','react']
                  }
                }
              },
             
              //soporte para css

            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
             //soporte para sass
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader",'sass-loader']
                })
            },

               //soporte para stylus
               {
                test:/\.styl$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader",
                    {
                        loader:'stylus-loader',
                        options:{
                            use:[
                                require('nib'),
                                require('rupture')
                            ],
                            import:[
                                '~nib/lib/nib/index.styl',
                                '~rupture/rupture/index.styl'
                            ]
                        }
                    }]
                })
            },

            //soporte para imagenes

             {
                test:/\.(jpg|png|gif|eot|svg|ttf|woff)$/,
                use:{
                   loader:'url-loader',
                   options:{
                       limit:100000,
                   } 
                }

             },

              //soporte para videos

              {
                test:/\.(mp4|webm)$/,
                use:{
                   loader:'url-loader',
                   options:{
                       limit:100000,
                       name:'videos/[name].[hash].[ext]'
                   } 
                }

             },

              //soporte para json

              {
                test:/\.json$/,
                use:'json-loader'

             }
        
           ]
        },

        plugins:[
            new ExtractTextPlugin("css/[name].css")
        ],

       
        
}