module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "rules": {
    "no-unused-expressions": 0,
    "no-underscore-dangle": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "react/prefer-stateless-function": 0
  },
  "globals": {
    sysPath: 1,
    packageJSON: 1,
    log: 1
  }
}
