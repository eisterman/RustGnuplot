var N = null;var searchIndex = {};

searchIndex["gnuplot"]={"doc":"A simple gnuplot controller.","items":[[3,"Axes2D","gnuplot","2D axes that is used for drawing 2D plots",N,N],[3,"Axes3D","","3D axes that is used for drawing 3D plots",N,N],[3,"Figure","","A figure that may contain multiple axes",N,N],[4,"Coordinate","","Specifies how to interpret the coordinate passed to a plotting command",N,N],[13,"Graph","","Coordinates are done relative to a graph (i.e. an axis set). (0, 0) is the bottom left corner and (1, 1) is the top right corner. You'd use this to place labels and other objects so that they remain in the same place relative to the graph no matter what you have plotted.",0,N],[13,"Axis","","Coordinates match those on the axes. You'd use this to place labels and other objects relative to regions of interest in the graph (e.g. labeling the peak of a function)",0,N],[4,"PlotOption","","An enumeration of plot options you can supply to plotting commands, governing things like line width, color and others",N,N],[13,"PointSymbol","","Sets the symbol used for points. The valid characters are as follows:",1,N],[13,"PointSize","","Sets the size of the points. The size acts as a multiplier, with 1.0 being the default.",1,N],[13,"Caption","","Sets the caption of the plot element. Set to empty to hide it from the legend.",1,N],[13,"LineWidth","","Sets the width of lines.",1,N],[13,"Color","","Sets the color of the plot element. The passed string can be a color name (e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white). This specifies the fill color of a filled plot.",1,N],[13,"BorderColor","","Sets the color of the border of a filled plot (if it has one). The passed string can be a color name (e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white).",1,N],[13,"LineStyle","","Sets the style of the line. Note that not all gnuplot terminals support dashed lines. See DashType for the available styles.",1,N],[13,"FillAlpha","","Sets the transparency of a filled plot. `0.0` - fully transparent, `1.0` - fully opaque",1,N],[13,"FillRegion","","Sets the fill region. See FillRegion for the available regions.",1,N],[13,"ArrowType","","Sets what an arrowhead looks like",1,N],[13,"ArrowSize","","Sets the size of the arrowhead. This is specified in the units of graph (i.e. `1.0` would make the arrow as big as the graph).",1,N],[13,"WhiskerBars","","Width of the whisker bars (as a fraction of the box width) for box and whisker plots.",1,N],[4,"FillRegionType","","An enumeration of possible fill regions",N,N],[13,"Above","","",2,N],[13,"Below","","",2,N],[13,"Between","","",2,N],[4,"AlignType","","An enumeration of possible text and label alignments",N,N],[13,"AlignLeft","","",3,N],[13,"AlignRight","","",3,N],[13,"AlignCenter","","",3,N],[13,"AlignTop","","",3,N],[13,"AlignBottom","","",3,N],[4,"DashType","","An enumeration of possible dash styles",N,N],[13,"Solid","","",4,N],[13,"SmallDot","","",4,N],[13,"Dot","","",4,N],[13,"Dash","","",4,N],[13,"DotDash","","",4,N],[13,"DotDotDash","","",4,N],[4,"ArrowheadType","","An enumeration of possible arrow head styles",N,N],[13,"Open","","An arrow head shaped like a 'V'",5,N],[13,"Closed","","An arrow head shaped like an outlined triangle",5,N],[13,"Filled","","An arrow head shaped like a filled triangle",5,N],[13,"NoArrow","","No arrow head",5,N],[4,"AutoOption","","An enumeration of something that can either be fixed (e.g. the maximum of X values), or automatically determined",N,N],[13,"Fix","","Fixes the value to a specific value",6,N],[13,"Auto","","Lets the value scale automatically",6,N],[4,"LabelOption","","An enumeration of label options that control label attributes",N,N],[13,"TextOffset","","Sets the offset of the label in characters",7,N],[13,"Font","","Sets the font of the label. The string specifies the font type (e.g. \"Arial\") and the number specifies the size (the units are terminal dependent, but are often points)",7,N],[13,"TextColor","","Sets the color of the label text. The passed string can be a color name (e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",7,N],[13,"Rotate","","Rotates the label by a certain number of degrees",7,N],[13,"TextAlign","","Sets the horizontal alignment of the label text (default is left alignment). See AlignType.",7,N],[13,"MarkerSymbol","","Sets a marker for the label. By default no marker is drawn. The valid characters are as follows:",7,N],[13,"MarkerColor","","Sets the color of the marker. The passed string can be a color name (e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",7,N],[13,"MarkerSize","","Sets the size of the marker. The size acts as a multiplier, with 1.0 being the default.",7,N],[4,"TickOption","","An enumeration of axis tick options",N,N],[13,"OnAxis","","Specifies whether the ticks are drawn at the borders of the plot, or on the axis",8,N],[13,"Mirror","","If the axes are drawn on the border, this specifies whether to draw the ticks on the opposite border as well",8,N],[13,"Inward","","If the axes are drawn on the border, this specifies whether to draw the ticks pointing inward or outward",8,N],[13,"MinorScale","","Sets the scale of the minor ticks",8,N],[13,"MajorScale","","Sets the scale of the major ticks",8,N],[13,"Format","","Format of the tick labels, e.g. \"%.1f ms\" will produces labels with \"1 ms, 2 ms\" etc.",8,N],[4,"Tick","","Specifies a type of axis tick",N,N],[13,"Major","","Major ticks have position and an optional label. The label may have a single C-style format specifier which will be replaced by the location of the tick",9,N],[13,"Minor","","Minor ticks only have position",9,N],[4,"BorderLocation2D","","Plot border locations",N,N],[13,"Bottom","","",10,N],[13,"Left","","",10,N],[13,"Top","","",10,N],[13,"Right","","",10,N],[4,"LegendOption","","Legend options",N,N],[13,"Reverse","","Puts curve samples to the left of the label",11,N],[13,"Invert","","Displays legend entries in opposite order",11,N],[13,"Horizontal","","Makes the legend horizontal (default is vertical)",11,N],[13,"Placement","","Specifies the location of the legend. The first argument specifies the horizontal placement with respect to its position, and the second argument specifies the vertical placement",11,N],[13,"Title","","Title of the legend",11,N],[13,"MaxRows","","Specifies the maximum number of rows, when the legend is vertical",11,N],[13,"MaxCols","","Specifies the maximum number of columns, when the legend is horizontal",11,N],[4,"ContourStyle","","Specifies how the contours are drawn",N,N],[13,"Linear","","Draw lines between points of equal value",12,N],[13,"Cubic","","Draw somewhat smoother curves between points with equal value.",12,N],[13,"Spline","","Draw an even smoother curve, this time approximating the locations of points with equal value (clamped to range from 2 to 100).",12,N],[4,"PaletteType","","Specifies what sort of palette to use",N,N],[13,"Gray","","Use a gray palette with a specified gamma",13,N],[13,"Formula","","Use a palette with that uses a predefined formula for each color component. Each formula is identified by an integer between [-36, 36]. See gnuplot documentation, or use the pre-defined constants.",13,N],[13,"CubeHelix","","Use a cube helix palette, with a certain start (in radians), cycles, saturation and gamma.",13,N],[11,"set_border","","Sets the properties of the plot border",14,N],[11,"set_x_axis","","Sets the properties of x axis.",14,N],[11,"set_y_axis","","Like `set_x_axis` but for the y axis.",14,N],[11,"arrow","","Adds an arrow to the plot. The arrow is drawn from `(x1, y1)` to `(x2, y2)` with the arrow point towards `(x2, y2)`. # Arguments * `x1` - X coordinate of the arrow start * `y1` - Y coordinate of the arrow start * `x2` - X coordinate of the arrow end * `y2` - Y coordinate of the arrow end * `options` - Array of PlotOption<&str> controlling the appearance of the arrowhead and arrow shaft. Relevant options are:      * `ArrowType` - Specifies the style of the arrow head (or an option to omit it)      * `ArrowSize` - Sets the size of the arrow head (in graph units)      * `Color` - Specifies the color of the arrow      * `LineStyle` - Specifies the style of the arrow shaft      * `LineWidth` - Specifies the width of the arrow shaft",14,N],[11,"set_legend","","Specifies the location and other properties of the legend # Arguments * `x` - X coordinate of the legend * `y` - Y coordinate of the legend * `label_options` - Array of LegendOption options * `text_options` - Array of LabelOption options specifying the appearance of the plot titles. Valid options are:     * `Font`     * `TextColor`     * `TextAlign(AlignLeft)`     * `TextAlign(AlignRight)`",14,N],[11,"lines","","Plot a 2D scatter-plot with lines connecting each data point # Arguments * `x` - x values * `y` - y values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `LineWidth` - Sets the width of the line     * `LineStyle` - Sets the style of the line     * `Color` - Sets the color",14,N],[11,"points","","Plot a 2D scatter-plot with a point standing in for each data point # Arguments * `x` - x values * `y` - y values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `PointSymbol` - Sets symbol for each point     * `PointSize` - Sets the size of each point     * `Color` - Sets the color",14,N],[11,"lines_points","","A combination of lines and points methods (drawn in that order). # Arguments * `x` - x values * `y` - y values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element",14,N],[11,"x_error_bars","","Plot a 2D scatter-plot with a point standing in for each data point. Additionally, error bars are attached to each data point in the X direction. # Arguments * `x` - x values * `y` - y valuess * `x_error` - Errors associated with the x value * `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `PointSymbol` - Sets symbol for each point     * `PointSize` - Sets the size of each point     * `Color` - Sets the color",14,N],[11,"y_error_bars","","Plot a 2D scatter-plot with a point standing in for each data point. Additionally, error bars are attached to each data point in the Y direction. # Arguments * `x` - x values * `y` - y values * `y_error` - Errors associated with the y values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `PointSymbol` - Sets symbol for each point     * `PointSize` - Sets the size of each point     * `Color` - Sets the color",14,N],[11,"x_error_lines","","Plot a 2D scatter-plot with a point standing in for each data point and lines connecting each data point. Additionally, error bars are attached to each data point in the X direction. # Arguments * `x` - x values * `y` - y valuess * `x_error` - Errors associated with the x value * `options` - Array of PlotOption controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `PointSymbol` - Sets symbol for each point     * `PointSize` - Sets the size of each point     * `LineWidth` - Sets the width of the line     * `LineStyle` - Sets the style of the line     * `Color` - Sets the color",14,N],[11,"y_error_lines","","Plot a 2D scatter-plot with a point standing in for each data point and lines connecting each data point. Additionally, error bars are attached to each data point in the Y direction. # Arguments * `x` - x values * `y` - y values * `y_error` - Errors associated with the y values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `PointSymbol` - Sets symbol for each point     * `PointSize` - Sets the size of each point     * `LineWidth` - Sets the width of the line     * `LineStyle` - Sets the style of the line     * `Color` - Sets the color",14,N],[11,"fill_between","","Plot a 2D scatter-plot of two curves (bound by `y_lo` and `y_hi`) with a filled region between them. `FillRegion` plot option can be used to control what happens when the curves intersect. If set to Above, then the `y_lo < y_hi` region is filled. If set to Below, then the `y_lo > y_hi` region is filled. Otherwise both regions are filled. # Arguments * `x` - x values * `y_lo` - Bottom y values * `y_hi` - Top y values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `FillRegion` - Specifies the region between the two curves to fill     * `Color` - Sets the color of the filled region     * `FillAlpha` - Sets the transparency of the filled region",14,N],[11,"boxes","","Plot a 2D scatter-plot using boxes of automatic width. Box widths are set so that there are no gaps between successive boxes (i.e. each box may have a different width). Boxes start at the x-axis and go towards the y value of the datapoint. # Arguments * `x` - x values (center of the box) * `y` - y values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `LineWidth` - Sets the width of the border     * `LineStyle` - Sets the style of the border     * `BorderColor` - Sets the color of the border     * `Color` - Sets the color of the box fill     * `FillAlpha` - Sets the transparency of the box fill",14,N],[11,"boxes_set_width","","Plot a 2D scatter-plot using boxes of set (per box) width. Boxes start at the x-axis and go towards the y value of the datapoint. # Arguments * `x` - x values (center of the box) * `y` - y values * `w` - Box width values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `LineWidth` - Sets the width of the border     * `LineStyle` - Sets the style of the border     * `BorderColor` - Sets the color of the border     * `Color` - Sets the color of the box fill     * `FillAlpha` - Sets the transparency of the box fill",14,N],[11,"box_and_whisker","","Plot a 2D box-and-whisker plot using boxes of automatic width.",14,N],[11,"box_and_whisker_set_width","","Plot a 2D box-and-whisker plot using boxes of set width.",14,N],[11,"image","","Draws an image from a rectangular array of data by connecting the individual datapoints with polygons.",14,N],[11,"surface","","Draws a 3D surface from a rectangular array of data by connecting the individual datapoints with polygons.",15,N],[11,"points","","Plot a 3D scatter-plot with a point standing in for each data point # Arguments * `x` - x values * `y` - y values * `z` - z values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `PointSymbol` - Sets symbol for each point     * `PointSize` - Sets the size of each point     * `Color` - Sets the color",15,N],[11,"lines","","Plot a 3D scatter-plot with lines connecting each data point # Arguments * `x` - x values * `y` - y values * `z` - z values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element. The relevant options are:     * `Caption` - Specifies the caption for this dataset. Use an empty string to hide it (default).     * `PointSymbol` - Sets symbol for each point     * `PointSize` - Sets the size of each point     * `Color` - Sets the color",15,N],[11,"lines_points","","A combination of lines and points methods (drawn in that order). # Arguments * `x` - x values * `y` - y values * `z` - z values * `options` - Array of PlotOption<&str> controlling the appearance of the plot element",15,N],[11,"set_view","","Sets the 3D view.",15,[[["self"],["f64"],["f64"]],["self"]]],[11,"set_view_map","","Sets the view to be a map. Useful for images and contour plots.",15,[[["self"]],["self"]]],[11,"set_z_label","","Set the label for the Z axis",15,N],[11,"set_z_ticks","","Like `set_x_ticks` but for the Z axis.",15,N],[11,"set_z_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",15,N],[11,"set_z_range","","Set the range of values for the Z axis",15,[[["self"],["autooption",["f64"]],["autooption",["f64"]]],["self"]]],[11,"set_z_reverse","","Sets z axis to reverse.",15,[[["self"],["bool"]],["self"]]],[11,"set_z_log","","Sets the Z axis be logarithmic. Note that the range must be non-negative for this to be valid.",15,[[["self"],["option",["f64"]]],["self"]]],[11,"set_z_grid","","Shows the grid on the Z axis.",15,[[["self"],["bool"]],["self"]]],[11,"show_contours","","Show contours (lines of equal Z value) at automatically determined levels.",15,[[["self"],["bool"],["bool"],["contourstyle"],["autooption",["str"]],["autooption",["u32"]]],["self"]]],[11,"show_contours_custom","","Show contours (lines of equal Z value) at specific levels.",15,[[["self"],["bool"],["bool"],["contourstyle"],["autooption",["str"]],["tc"]],["self"]]],[11,"clone","","",0,[[["self"]],["coordinate"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"new","","Creates a new figure",16,[[],["figure"]]],[11,"set_terminal","","Sets the terminal for gnuplot to use, as well as the file to output the figure to. Terminals that spawn a GUI don't need an output file, so pass an empty string for those.",16,[[["self"],["str"],["str"]],["figure"]]],[11,"axes2d","","Creates a set of 2D axes",16,[[["self"]],["axes2d"]]],[11,"axes3d","","Creates a set of 3D axes",16,[[["self"]],["axes3d"]]],[11,"show","","Launch a gnuplot process, if it hasn't been spawned already by a call to this function, and display the figure on it.",16,[[["self"]],["figure"]]],[11,"clear_axes","","Clears all axes on this figure.",16,[[["self"]],["figure"]]],[11,"echo","","Echo the commands that if piped to a gnuplot process would display the figure # Arguments * `writer` - A function pointer that will be called multiple times with the command text and data",16,[[["self"],["t"]],["figure"]]],[11,"echo_to_file","","Save to a file the the commands that if piped to a gnuplot process would display the figure # Arguments * `filename` - Name of the file",16,[[["self"],["str"]],["figure"]]],[11,"clone","","",1,[[["self"]],["plotoption"]]],[11,"clone","","",2,[[["self"]],["fillregiontype"]]],[11,"clone","","",3,[[["self"]],["aligntype"]]],[11,"clone","","",4,[[["self"]],["dashtype"]]],[11,"to_int","","",4,[[["self"]],["i32"]]],[11,"clone","","",5,[[["self"]],["arrowheadtype"]]],[11,"clone","","",6,[[["self"]],["autooption"]]],[11,"map","","Same as `Option::map`",6,[[["self"],["f"]],["autooption"]]],[11,"clone","","",7,[[["self"]],["labeloption"]]],[11,"clone","","",8,[[["self"]],["tickoption"]]],[11,"clone","","",10,[[["self"]],["borderlocation2d"]]],[11,"clone","","",11,[[["self"]],["legendoption"]]],[11,"clone","","",12,[[["self"]],["contourstyle"]]],[11,"clone","","",13,[[["self"]],["palettetype"]]],[17,"GRAY","","A gray palette",N,N],[17,"COLOR","","Default Gnuplot palette",N,N],[17,"RAINBOW","","Classic rainbow palette with terrible perceptual properties",N,N],[17,"HOT","","A black body palette",N,N],[17,"HELIX","","A nice default for a cube helix",N,N],[8,"AxesCommon","","",N,N],[11,"set_pos_grid","","Set the position of the axes on the figure using grid coordinates. # Arguments * `nrow` - Number of rows in the grid. Must be greater than 0. * `ncol` - Number of columns in the grid. Must be greater than 0. * `pos` - Which grid cell to place this axes in, counting from top-left corner,           going left and then down, starting at 0.",17,[[["self"],["u32"],["u32"],["u32"]],["self"]]],[11,"set_pos","","Set the position of the axes on the figure using screen coordinates. The coordinates refer to the bottom-left corner of the axes # Arguments * `x` - X position. Ranges from 0 to 1 * `y` - Y position. Ranges from 0 to 1",17,[[["self"],["f64"],["f64"]],["self"]]],[11,"set_size","","Set the size of the axes # Arguments * `w` - Width. Ranges from 0 to 1 * `h` - Height. Ranges from 0 to 1",17,[[["self"],["f64"],["f64"]],["self"]]],[11,"set_aspect_ratio","","Set the aspect ratio of the axes # Arguments * `ratio` - The aspect ratio. Set to Auto to return the ratio to default",17,[[["self"],["autooption",["f64"]]],["self"]]],[11,"set_x_label","","Set the label for the X axis # Arguments * `text` - Text of the label. Pass an empty string to hide the label * `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:      * `Offset` - Specifies the offset of the label      * `Font` - Specifies the font of the label      * `TextColor` - Specifies the color of the label      * `Rotate` - Specifies the rotation of the label      * `Align` - Specifies how to align the label",17,N],[11,"set_y_label","","Like `set_x_label`, but for the Y axis",17,N],[11,"set_cb_label","","Like `set_x_label`, but for the color bar",17,N],[11,"set_title","","Set the title for the axes # Arguments * `text` - Text of the title. Pass an empty string to hide the title * `options` - Array of LabelOption<&str> controlling the appearance of the title. Relevant options are:      * `Offset` - Specifies the offset of the label      * `Font` - Specifies the font of the label      * `TextColor` - Specifies the color of the label      * `Rotate` - Specifies the rotation of the label      * `Align` - Specifies how to align the label",17,N],[11,"label","","Adds a label to the plot, with an optional marker. # Arguments * `text` - Text of the label * `x` - X coordinate of the label * `y` - Y coordinate of the label * `options` - Array of LabelOption<&str> controlling the appearance of the label. Relevant options are:      * `Offset` - Specifies the offset of the label      * `Font` - Specifies the font of the label      * `TextColor` - Specifies the color of the label      * `Rotate` - Specifies the rotation of the label      * `Align` - Specifies how to align the label      * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker      * `MarkerSize` - Specifies the size for the marker      * `MarkerColor` - Specifies the color for the marker",17,N],[11,"set_x_ticks","","Sets the properties of the ticks on the X axis.",17,N],[11,"set_y_ticks","","Like `set_x_ticks` but for the Y axis.",17,N],[11,"set_cb_ticks","","Like `set_x_ticks` but for the color bar axis.",17,N],[11,"set_x_ticks_custom","","Sets ticks on the X axis with specified labels at specified positions.",17,N],[11,"set_y_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",17,N],[11,"set_cb_ticks_custom","","Like `set_x_ticks_custom` but for the the color bar axis.",17,N],[11,"set_x_range","","Set the range of values for the X axis.",17,[[["self"],["autooption",["f64"]],["autooption",["f64"]]],["self"]]],[11,"set_y_range","","Set the range of values for the Y axis.",17,[[["self"],["autooption",["f64"]],["autooption",["f64"]]],["self"]]],[11,"set_x_reverse","","Sets X axis to reverse. # Arguments * `reverse` - Boolean, true to reverse axis, false will not reverse",17,[[["self"],["bool"]],["self"]]],[11,"set_y_reverse","","Sets Y axis to reverse. # Arguments * `reverse` - Boolean, true to reverse axis, false will not reverse",17,[[["self"],["bool"]],["self"]]],[11,"set_cb_range","","Set the range of values for the color bar axis.",17,[[["self"],["autooption",["f64"]],["autooption",["f64"]]],["self"]]],[11,"set_x_log","","Sets the X axis be logarithmic. Note that the range must be non-negative for this to be valid.",17,[[["self"],["option",["f64"]]],["self"]]],[11,"set_y_log","","Sets the Y axis be logarithmic. Note that the range must be non-negative for this to be valid.",17,[[["self"],["option",["f64"]]],["self"]]],[11,"set_cb_log","","Sets the color bar axis be logarithmic. Note that the range must be non-negative for this to be valid.",17,[[["self"],["option",["f64"]]],["self"]]],[11,"set_x_grid","","Shows the grid on the X axis.",17,[[["self"],["bool"]],["self"]]],[11,"set_y_grid","","Shows the grid on the Y axis.",17,[[["self"],["bool"]],["self"]]],[11,"set_cb_grid","","Shows the grid on the color bar axis.",17,[[["self"],["bool"]],["self"]]],[11,"set_grid_options","","Set the grid options.",17,N],[11,"set_palette","","Sets the palette used for 3D surface and image plots",17,[[["self"],["palettetype"]],["self"]]],[11,"set_custom_palette","","Sets a custom palette used for 3D surface and image plots. A custom palette is specified by a sequence of 4-tuples (with at least one element). The first element is the grayscale value that is mapped to the remaining three elements which specify the red, green and blue components of the color. The grayscale values must be non-decreasing. All values must range from 0 to 1.",17,[[["self"],["t"]],["self"]]],[8,"DataType","","",N,N],[10,"get","","",18,[[["self"]],["f64"]]],[11,"into","","",14,[[["self"]],["u"]]],[11,"from","","",14,[[["t"]],["t"]]],[11,"try_from","","",14,[[["u"]],["result"]]],[11,"borrow","","",14,[[["self"]],["t"]]],[11,"get_type_id","","",14,[[["self"]],["typeid"]]],[11,"try_into","","",14,[[["self"]],["result"]]],[11,"borrow_mut","","",14,[[["self"]],["t"]]],[11,"into","","",15,[[["self"]],["u"]]],[11,"from","","",15,[[["t"]],["t"]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"get_type_id","","",15,[[["self"]],["typeid"]]],[11,"try_into","","",15,[[["self"]],["result"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_string","","",0,[[["self"]],["string"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,N],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"to_owned","","",7,[[["self"]],["t"]]],[11,"clone_into","","",7,N],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,N],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,N],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,N],[11,"from","","",12,[[["t"]],["t"]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"into","","",13,[[["self"]],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,N],[11,"from","","",13,[[["t"]],["t"]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"get_type_id","","",13,[[["self"]],["typeid"]]],[11,"try_into","","",13,[[["self"]],["result"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"set_pos_grid","","Set the position of the axes on the figure using grid coordinates. # Arguments * `nrow` - Number of rows in the grid. Must be greater than 0. * `ncol` - Number of columns in the grid. Must be greater than 0. * `pos` - Which grid cell to place this axes in, counting from top-left corner,           going left and then down, starting at 0.",17,[[["self"],["u32"],["u32"],["u32"]],["self"]]],[11,"set_pos","","Set the position of the axes on the figure using screen coordinates. The coordinates refer to the bottom-left corner of the axes # Arguments * `x` - X position. Ranges from 0 to 1 * `y` - Y position. Ranges from 0 to 1",17,[[["self"],["f64"],["f64"]],["self"]]],[11,"set_size","","Set the size of the axes # Arguments * `w` - Width. Ranges from 0 to 1 * `h` - Height. Ranges from 0 to 1",17,[[["self"],["f64"],["f64"]],["self"]]],[11,"set_aspect_ratio","","Set the aspect ratio of the axes # Arguments * `ratio` - The aspect ratio. Set to Auto to return the ratio to default",17,[[["self"],["autooption",["f64"]]],["self"]]],[11,"set_x_label","","Set the label for the X axis # Arguments * `text` - Text of the label. Pass an empty string to hide the label * `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:      * `Offset` - Specifies the offset of the label      * `Font` - Specifies the font of the label      * `TextColor` - Specifies the color of the label      * `Rotate` - Specifies the rotation of the label      * `Align` - Specifies how to align the label",17,N],[11,"set_y_label","","Like `set_x_label`, but for the Y axis",17,N],[11,"set_cb_label","","Like `set_x_label`, but for the color bar",17,N],[11,"set_title","","Set the title for the axes # Arguments * `text` - Text of the title. Pass an empty string to hide the title * `options` - Array of LabelOption<&str> controlling the appearance of the title. Relevant options are:      * `Offset` - Specifies the offset of the label      * `Font` - Specifies the font of the label      * `TextColor` - Specifies the color of the label      * `Rotate` - Specifies the rotation of the label      * `Align` - Specifies how to align the label",17,N],[11,"label","","Adds a label to the plot, with an optional marker. # Arguments * `text` - Text of the label * `x` - X coordinate of the label * `y` - Y coordinate of the label * `options` - Array of LabelOption<&str> controlling the appearance of the label. Relevant options are:      * `Offset` - Specifies the offset of the label      * `Font` - Specifies the font of the label      * `TextColor` - Specifies the color of the label      * `Rotate` - Specifies the rotation of the label      * `Align` - Specifies how to align the label      * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker      * `MarkerSize` - Specifies the size for the marker      * `MarkerColor` - Specifies the color for the marker",17,N],[11,"set_x_ticks","","Sets the properties of the ticks on the X axis.",17,N],[11,"set_y_ticks","","Like `set_x_ticks` but for the Y axis.",17,N],[11,"set_cb_ticks","","Like `set_x_ticks` but for the color bar axis.",17,N],[11,"set_x_ticks_custom","","Sets ticks on the X axis with specified labels at specified positions.",17,N],[11,"set_y_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",17,N],[11,"set_cb_ticks_custom","","Like `set_x_ticks_custom` but for the the color bar axis.",17,N],[11,"set_x_range","","Set the range of values for the X axis.",17,[[["self"],["autooption",["f64"]],["autooption",["f64"]]],["self"]]],[11,"set_y_range","","Set the range of values for the Y axis.",17,[[["self"],["autooption",["f64"]],["autooption",["f64"]]],["self"]]],[11,"set_x_reverse","","Sets X axis to reverse. # Arguments * `reverse` - Boolean, true to reverse axis, false will not reverse",17,[[["self"],["bool"]],["self"]]],[11,"set_y_reverse","","Sets Y axis to reverse. # Arguments * `reverse` - Boolean, true to reverse axis, false will not reverse",17,[[["self"],["bool"]],["self"]]],[11,"set_cb_range","","Set the range of values for the color bar axis.",17,[[["self"],["autooption",["f64"]],["autooption",["f64"]]],["self"]]],[11,"set_x_log","","Sets the X axis be logarithmic. Note that the range must be non-negative for this to be valid.",17,[[["self"],["option",["f64"]]],["self"]]],[11,"set_y_log","","Sets the Y axis be logarithmic. Note that the range must be non-negative for this to be valid.",17,[[["self"],["option",["f64"]]],["self"]]],[11,"set_cb_log","","Sets the color bar axis be logarithmic. Note that the range must be non-negative for this to be valid.",17,[[["self"],["option",["f64"]]],["self"]]],[11,"set_x_grid","","Shows the grid on the X axis.",17,[[["self"],["bool"]],["self"]]],[11,"set_y_grid","","Shows the grid on the Y axis.",17,[[["self"],["bool"]],["self"]]],[11,"set_cb_grid","","Shows the grid on the color bar axis.",17,[[["self"],["bool"]],["self"]]],[11,"set_grid_options","","Set the grid options.",17,N],[11,"set_palette","","Sets the palette used for 3D surface and image plots",17,[[["self"],["palettetype"]],["self"]]],[11,"set_custom_palette","","Sets a custom palette used for 3D surface and image plots. A custom palette is specified by a sequence of 4-tuples (with at least one element). The first element is the grayscale value that is mapped to the remaining three elements which specify the red, green and blue components of the color. The grayscale values must be non-decreasing. All values must range from 0 to 1.",17,[[["self"],["t"]],["self"]]]],"paths":[[4,"Coordinate"],[4,"PlotOption"],[4,"FillRegionType"],[4,"AlignType"],[4,"DashType"],[4,"ArrowheadType"],[4,"AutoOption"],[4,"LabelOption"],[4,"TickOption"],[4,"Tick"],[4,"BorderLocation2D"],[4,"LegendOption"],[4,"ContourStyle"],[4,"PaletteType"],[3,"Axes2D"],[3,"Axes3D"],[3,"Figure"],[8,"AxesCommon"],[8,"DataType"]]};
initSearch(searchIndex);
