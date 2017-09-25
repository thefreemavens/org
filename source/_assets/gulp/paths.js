// paths.js file

var paths = {};


// Directory locations.
paths.assetsDir       = 'source/_assets/';      // The files Gulp will handle.
paths.jekyllDir       = 'source/';              // The files Jekyll will handle.
paths.jekyllAssetsDir = 'source/assets/';       // The asset files Jekyll will handle.
paths.siteDir         = 'docs/';                // The resulting static site.
paths.siteAssetsDir   = 'docs/assets/';         // The resulting static site's assets.

// Folder naming conventions.
paths.postFolderName    = '_posts';
paths.draftFolderName   = '_drafts';
paths.fontFolderName    = 'fonts';
paths.imageFolderName   = 'images';
paths.scriptFolderName  = 'js';
paths.scriptMainName    = '/main';
paths.scriptSoloName    = '/solo';
paths.stylesFolderName  = 'styles';

// Asset files locations.
paths.sassFiles       = paths.assetsDir + paths.stylesFolderName;
paths.jsMainFiles     = paths.assetsDir + paths.scriptFolderName + paths.scriptMainName;
paths.jsSoloFiles     = paths.assetsDir + paths.scriptFolderName + paths.scriptSoloName;
paths.imageFiles      = paths.assetsDir + paths.imageFolderName;
paths.fontFiles       = paths.assetsDir + paths.fontFolderName;
// paths.jquery      = './node_modules/jquery/dist/jquery.js';         // jQuery via node npm.
// paths.normalize   = 'node_modules/normalize.css/normalize.css';      // Normalize.css via node npm.


// Jekyll files locations.
paths.jekyllPostFiles  = paths.jekyllDir       + paths.postFolderName;
paths.jekyllDraftFiles = paths.jekyllDir       + paths.draftFolderName;
paths.jekyllCssFiles   = paths.jekyllAssetsDir + paths.stylesFolderName;
paths.jekyllJsFiles    = paths.jekyllAssetsDir + paths.scriptFolderName;
paths.jekyllImageFiles = paths.jekyllAssetsDir + paths.imageFolderName;
paths.jekyllFontFiles  = paths.jekyllAssetsDir + paths.fontFolderName;

// Site files locations.
paths.siteCssFiles   = paths.siteAssetsDir + paths.stylesFolderName;
paths.siteJsFiles    = paths.siteAssetsDir + paths.scriptFolderName;
paths.siteImageFiles = paths.siteAssetsDir + paths.imageFolderName;
paths.siteFontFiles  = paths.siteAssetsDir + paths.fontFolderName;

// Glob patterns by file type.
paths.sassPattern     = '/**/*.scss';
paths.jsPattern       = '/**/*.js';
paths.imagePattern    = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.markdownPattern = '/**/*.+(md|MD|markdown|MARKDOWN)';
paths.htmlPattern     = '/**/*.html';
paths.xmlPattern      = '/**/*.xml';

// Asset files globs
paths.sassFilesGlob  = paths.sassFiles  + paths.sassPattern;
paths.jsFilesGlob    = paths.jsFiles    + paths.jsPattern;
paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;

// Jekyll files globs
paths.jekyllPostFilesGlob  = paths.jekyllPostFiles  + paths.markdownPattern;
paths.jekyllDraftFilesGlob = paths.jekyllDraftFiles + paths.markdownPattern;
paths.jekyllHtmlFilesGlob  = paths.jekyllDir        + paths.htmlPattern;
paths.jekyllXmlFilesGlob   = paths.jekyllDir        + paths.xmlPattern;
paths.jekyllImageFilesGlob = paths.jekyllImageFiles + paths.imagePattern;

// Site files globs
paths.siteHtmlFilesGlob = paths.siteDir + paths.htmlPattern;

module.exports = paths;