module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // presets: [["es2015", { "modules": false }, '@vue/cli-plugin-babel/preset']],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
