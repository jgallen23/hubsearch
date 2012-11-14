module.exports = function(grunt) {
  grunt.initConfig({
    output: 'ui/_dist',
    clientside: {
      app: {
        main: 'app/main.js',
        output: '_dist/app.js'
      }
    },
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
        'app/**/*.js'
      ]
    },
    concat: {
      styles: {
        src: [
          'ui/vendor/bootstrap/css/bootstrap.css',
          'ui/stylesheets/common.css'
        ],
        dest: '<%= output %>/app.css'
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
    watch: {
      view: {
        files: '<config:template.main.src>',
        tasks: 'template'
      },
      styles: {
        files: '<config:concat.styles.src>',
        tasks: 'concat.styles'
      },
      scripts: {
        files: '<config:lint.scripts>', 
        tasks: 'lint clientside' 
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
  grunt.loadNpmTasks('grunt-clientside');

  grunt.registerTask('default', 'template clientside lint concat');
  grunt.registerTask('prod', 'default min');
  grunt.registerTask('dev', 'default server watch');
};
