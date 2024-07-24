const path = require('path');

module.exports = {
    entry: './src/index.js', // punto de entrada de tu aplicacion
    output:{
        filename: 'bundle.js', //Nombre del archivo de salidas
        path: path.resolve(__dirname, 'dist'), // carpeta de salida 
    },
    module:{
        rules:[
            {
                test: /\.css$/, // Regex para identificar archivos css
                use:['style-loader', 'css-loader'], // Loaders para procesar archivos CSS
            },
            {
              test: /\.js$/, //Regex para identificar archivos JS
              exclude: /node_modules/, //Excluir la carpeta node_modules
              use:{
                loader:'babel-loader', // Loader para convertir JS moderno al JS compatible a mas navegadores
                options: {
                    presets:['@babel/preset-env'],
                },
            },
        },
    ] ,
 },
            devtool:'source-map', // Genera source maps para facilitar la depuracion
            devserver:{
                contentBase: path.resolve(__dirname,'dist'),// carpeta del que correra el servidor
                compress: true, // Habilitar compresion gzip
                port:9000, // Puerto del servidor de desarrollo
            },
};      