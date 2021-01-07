module.exports = {
  plugins: [
    
    require('postcss-import'),

    require('postcss-preset-env')( {
      
      // Options
      // browsers: 'last 2 versions' , 
      browsers: [ 
        'last 2 versions' , 
        // 'last 2 iOS major versions' , 
        'iOS >= 8' , 
      ] , 

      stage: 3 , 

      features: {
        'nesting-rules' : true ,         // STAGE 1
        'custom-media-queries': true,    // STAGE 1
        'custom-selectors': true,        // STAGE 1
        'system-ui-font-family' : true , // STAGE 2
        'rebeccapurple-color' : true ,   // STAGE 2
        'overflow-wrap-property': true , // STAGE 2
        'matches-pseudo-class': true ,   // STAGE 2
        'image-set-function': true ,     // STAGE 2
        'gray-function': true ,          // STAGE 2
        // 'color-mod-function': true,   // REMOVED FROM SPEC... https://github.com/jonathantneal/postcss-color-mod-function

      } , 
      
    } ),
    
    require('postcss-nested'),

    require('autoprefixer'),
  ]
};