var resolution = 1024; // We're assuming a square aspect ratio

var pixelSize = 2/resolution;

// Render scale is the percentage of the viewport that will be filled by
// the coordinate range [-1, 1].
// The scaling is done in the shaders, but is has to be taking into account
// in obtaining coordinates from the mouse position.
var renderScale = 0.9;
var maxCoord = 1/renderScale;

// A square this big in our [-1, 1] coordinate system will be roughly
// the size of a pixel
var pixelSize = 2*maxCoord/resolution;

var markerRadius = 3*pixelSize;
var lineThickness = 2*pixelSize;

// Percentage of adjacent corners that need to be in water for the
// cell to be water, too.
var waterThreshold = 0.3;

var circularIslandRadius = 0.9;
var perlinWorldOctaves = 5;

var CellColor = {
    Land: jQuery.Color('#9E9A80'),
    Ocean: jQuery.Color('#384773'),
    Lake: jQuery.Color('#7491E8'),
};