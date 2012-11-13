module.exports = function(grunt) {
  grunt.initConfig({
    output: 'ui/_dist',
    template: {
      main: {
        src: 'views/main.ejs',
        dest: 'index.html',
        variables: '<json:data.json>'
      }
    },
    lint: {
      grunt: 'grunt.js',
      scripts: [
        'ui/scripts/plugins/fidel-underscore.js',
        'ui/scripts/plugins/relative-time.js',
        'ui/scripts/utils/score.js',
        'ui/scripts/services/github-search.js',
        'ui/scripts/modules/search-box.js',
        'ui/scripts/modules/search-results.js',
        'ui/scripts/app.js'
      ]
    },
    concat: {
      styles: {
        src: [
          'ui/vendor/bootstrap/css/bootstrap.css',
          'ui/stylesheets/common.css'
        ],
        dest: '<%= output %>/app.css'
      },
      scripts: {
        src: [
          'ui/vendor/jquery/jquery-1.7.2.min.js',
          'ui/vendor/underscore/underscore-min.js',
          'ui/vendor/bootstrap/js/bootstrap.js',
          'ui/vendor/fidel/fidel.js',
          'ui/vendor/fidel-routes/fidel.routes.js',
          '<config:lint.scripts>'
        ],
        dest: '<%= output %>/app.js'
      }
    },
    min: {
      styles: {
        src: '<config:concat.styles.dest>',
        dest: '<config:concat.styles.dest>'
      },
      scripts: {
        src: '<config:concat.scripts.dest>',
        dest: '<config:concat.scripts.dest>'
      }
    },
    hash: {
      src: [
        '<%= output %>/app.css',
        '<%= output %>/app.js'
      ],
      dest: '<%= output %>',
      mapping: 'assets.json'
    },
    watch: {
      styles: {
        files: '<config:concat.styles.src>',
        tasks: 'concat.styles'
      },
      scripts: {
        files: '<config:lint.scripts>', 
        tasks: 'lint concat' 
      },
      grunt: {
        files: 'grunt.js',
        tasks: 'default'
      },
      vendor: {
        files: 'ui/vendor/**/*',
        tasks: 'default'
      }
    },
    server: {
    }
  });
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-hash');
  grunt.loadNpmTasks('grunt-templater');

  grunt.registerTask('default', 'lint concat');
  grunt.registerTask('prod', 'default min');
  grunt.registerTask('dev', 'default server watch');
};
