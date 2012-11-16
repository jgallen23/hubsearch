module.exports = function(grunt) {
  grunt.initConfig({
    dist: {
      script: '_dist/app.js',
      style: '_dist/app.css'
    },
    files: {
      vendor: [
        'components/angular/angular.js',
        'components/debug/debug.js'
      ],
      app: [
        'app/main.js',
        'app/controllers/*.js',
        'app/filters/*.js',
        'app/services/*.js'
      ]
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
      scripts: '<config:files.app>'
    },
    concat: {
      styles: {
        src: [
          'ui/vendor/bootstrap/css/bootstrap.css',
          'ui/stylesheets/common.css'
        ],
        dest: '<config:dist.style>'
      },
      scripts: {
        src: [
          '<config:files.vendor>',
          '<config:files.app>'
        ],
        dest: '<config:dist.script>'
      }
    },
    min: {
      scripts: {
        src: '<config:dist.script>',
        dest: '<config:dist.script>'
      }
    },
    mincss: {
      compress: {
        files: {
          '<config:dist.style>': '<config:dist.style>'
        }
      }
    },
    watch: {
      view: {
        files: '<config:template.main.src>',
        tasks: 'template'
      },
      styles: {
        files: '<config:concat.styles.src>',
        tasks: 'concat:styles'
      },
      scripts: {
        files: '<config:files.app>', 
        tasks: 'lint concat:scripts' 
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
    },
    bootstrap: {
      dest: 'ui/vendor/bootstrap',
      css: [
        "reset.less",
        "type.less",
        "tables.less",
        "buttons.less",
        "forms.less",
        "navs.less",
        "navbar.less",
        "scaffolding.less",
        "grid.less",
        "layouts.less",
        "wells.less",
        "dropdowns.less"
      ],
      js: [
        "bootstrap-typeahead.js"
      ]
    }
  });
  grunt.loadNpmTasks('grunt-bootstrap');
  grunt.loadNpmTasks('grunt-growl');
  grunt.loadNpmTasks('grunt-hash');
  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.loadNpmTasks('grunt-templater');

  grunt.registerTask('default', 'template lint concat');
  grunt.registerTask('prod', 'default min mincss');
  grunt.registerTask('dev', 'default server watch');
};
