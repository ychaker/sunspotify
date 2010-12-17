require 'rake'
require 'rake/testtask'
require 'rake/rdoctask'
require 'rake/gempackagetask'

desc 'Default: run unit tests.'
task :default => :test

desc 'Test the sunspotify plugin.'
Rake::TestTask.new(:test) do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/**/*_test.rb'
  t.verbose = true
end

desc 'Generate documentation for the sunspotify plugin.'
Rake::RDocTask.new(:rdoc) do |rdoc|
  rdoc.rdoc_dir = 'rdoc'
  rdoc.title    = 'Sunspotify'
  rdoc.options << '--line-numbers' << '--inline-source'
  rdoc.rdoc_files.include('README')
  rdoc.rdoc_files.include('lib/**/*.rb')
end

PKG_FILES = FileList[
  '[a-zA-Z]*',
  'app/**/*',
  'config/**/*',
  'db/**/*',
  'lib/**/*',
  'public/**/*',
  'rails/**/*'
]
 
spec = Gem::Specification.new do |s|
  s.name = "sunspotify"
  s.version = "0.0.1"
  s.author = "Youssef Chaker"
  s.email = "youssef.chaker@gmail.com"
  s.homepage = "http://sunspotify.github.com/"
  s.platform = Gem::Platform::RUBY
  s.summary = "Sunspot/Solr admin panel"
  s.description = "Add a Sunspot/Solr admin panel to your rails app"
  s.files = PKG_FILES.to_a
  s.require_path = "lib"
  s.has_rdoc = false
  s.extra_rdoc_files = ["README"]
end
 
desc 'Turn this plugin into a gem.'
Rake::GemPackageTask.new(spec) do |pkg|
  pkg.gem_spec = spec
end