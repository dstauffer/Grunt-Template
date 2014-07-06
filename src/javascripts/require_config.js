require.config({
  paths: {
    "jquery": "javascripts/vendor/jquery/dist/jquery.min",
    "transit": "javascripts/vendor/jquery.transit/jquery.transit",
    "browserDetect": "javascripts/vendor/lib/browserDetection.min"
  },
  shim: {
    "transit": {
      "deps": ["jquery"],
      "exports": "$.transit"
    },
    "browserDetect": {
      "deps": ["jquery"]
    }
  }
});
