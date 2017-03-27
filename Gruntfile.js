'use strict';

const distDir = subDirName => `./docs/${subDirName}`

module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			reactHOC: {
				files: ['react-hoc/build/*'],
				tasks: ['copy:reactHOC'] 
			}
		},
		copy: {
			reactHOC: {
				files: [
					{
						expand: true,
						cwd: './react-hoc/build',
						src: ['*'],
						dest: distDir('react-hoc'),
					}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['copy']);
	
}