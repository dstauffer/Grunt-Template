module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask("default", ["build", "watch"]);

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    ['clean:build', 'copy', 'styles', 'scripts', 'markup']
  );
  grunt.registerTask(
    'styles',
    'Compiles the stylesheets',
    ['compass', 'clean']
  );
  grunt.registerTask(
    'scripts',
    'Compiles the JavaScript files.',
    ['coffeelint', 'coffee', 'jshint', 'uglify', 'clean']
  );
  grunt.registerTask(
    'markup',
    'Compiles the markup',
    ['jade']
  );

  grunt.initConfig({
    jade: {
      build: {
        options: {
          pretty: true
        },
        files: {
            "bin/index.html": "src/index.jade"
        }
      }
    },
    compass: {
      options: {
        config: "config.rb",
        outputStyle: 'compressed'
      },
      css: {
        options: {
          sassDir: "src/styles/",
          cssDir: "bin/css/"
        }
      }
    },
    coffee: {
      build: {
        options: {
            bare: true
        },
        expand: true,
        cwd: "src/javascripts/",
        src: "**/*.coffee",
        dest: "_temp/js/",
        ext: ".js"
      }
    },
    uglify: {
      build: {
        options: {
        },
        expand: true,
        cwd: "_temp/js/",
        src: "**/*.js",
        dest: "bin/javascripts/",
        ext: ".min.js"
      }
    },
    clean: {
      build: {
        src: "_temp/"
      }
    },
    copy: {
      build: {
        cwd: 'src/',
        src: ["**/*.png", "**/*.jpg", "**/*.js"],
        dest: 'bin/',
        expand: true
      }
    },
    jshint: {
      lint: "_temp/js/**/*.js"
    },
    coffeelint: {
      options: {
        arrow_spacing: {
          level: "warn"
        },
        camel_case_classes: {
          level: "warn"
        },
        coffeescript_error: {
          level: "error"
        },
        cyclomatic_complexity: {
          level: "ignore"
        },
        duplicate_key: {
          level: "warn"
        },
        empty_constructor_needs_parens: {
          level: "warn"
        },
        indentation: {
          level: "warn"
        },
        line_endings: {
          level: "warn"
        },
        max_line_length: {
          level: "ignore"
        },
        newlines_after_classes: {
          level: "ignore"
        },
        no_backticks: {
          level: "error"
        },
        no_empty_param_list: {
          level: "ignore"
        },
        no_implicit_braces: {
          level: "ignore"
        },
        no_plusplus: {
          level: "ignore"
        },
        no_stand_alone_at: {
          level: "ignore"
        },
        no_tabs: {
          level: "warn"
        },
        no_throwing_strings: {
          level: "warn"
        },
        no_trailing_semicolons: {
          level: "warn"
        },
        no_trailing_whitespace: {
          level: "warn"
        },
        non_empty_constructor_needs_parens: {
          level: "warn"
        },
        space_operators: {
          level: "ignore"
        }
      },
      lint: "src/javascripts/**/*.coffee"
    },
    watch: {
      options: {
        npspawn: true
      },
      styles: {
        files: 'src/styles/**/*.scss',
        tasks: ['compass', 'clean']
      },
      scripts: {
        files: 'src/javascripts/**/*.coffee',
        tasks: ['coffeelint', 'coffee', 'jshint', 'uglify', 'clean']
      },
      markup: {
        files: 'src/*.jade',
        tasks: 'jade'
      }
    }
  });
};
