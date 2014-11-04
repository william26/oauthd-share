module.exports = function(grunt) {
	grunt.initConfig({
		coffee: {
			backend: {
				expand: true,
				flatten: true,
				cwd: __dirname + '/src/backend',
				src: ['**.coffee'],
				dest: __dirname + '/bin',
				ext: '.js'
			},
			frontend: {
				expand: true,
				flatten: true,
				cwd: __dirname + '/src/frontend',
				src: ['**.coffee'],
				dest: __dirname + '/public',
				ext: '.js'
			}
		},
		copy: {

		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['coffee']);
};