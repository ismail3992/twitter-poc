module.exports = {
    "parser": "babel-eslint",
    "plugins": ["react"],
    "ecmaFeatures": {
      "jsx": true,
    },
    "env": {
      "browser": true,
      "node": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "extends": "airbnb",
};

