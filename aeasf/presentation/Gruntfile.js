module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			index: {
				files: ['source/index.html'],
				tasks: ['copy:index']
			},
			partials: {
				files: ['source/partials/*.html'],
				tasks: ['copy:partials']
			},
			sass: {
				files: ['source/sass/**/*.sass'],
				tasks: ['sass']
			},
			babel: {
				files: ['source/js/**/*.js'],
				tasks: ['babel','webpack']
			}
		},
		copy: {
			index: {
				files: [{
					expand: true,
					cwd: 'source',
					src: ['index.html'],
					dest: './',
					ext: '.html'
				}]
			},
			partials: {
				files: [{
					expand: true,
					cwd: 'source/partials',
					src: ['*.partial.html'],
					dest: './slides',
					ext: '.html'
				}]
			}
		},
		sass: {
			all: {
				files: [{
					expand: true,
					cwd: 'source/sass',
					src: ['main.sass'],
					dest: './assets/css',
					ext: '.css'
				}]
			}
		},
		babel: {
			options: {
				presets: ['es2015','react']
			},
			all: {
				files: [{
					expand: true,
					cwd: 'source/js',
					src: ['**/*.js'],
					dest: './.temp',
					ext: '.js'
				}]
			}
		},
		webpack: {
			all: {
				entry: './.temp/index.js',
				output: {
					path: 'assets/js',
					filename: 'index.js'
				}
			}
		},
		uglify: {
			options: {
				mangle: true,
				compress: true
			},
			all: {
				files: [{
					expand: true,
					cwd: 'assets/js',
					src: ['index.js'],
					dest: 'assets/js',
					ext: '.js'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('default', ['watch']);
};