/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************//**
 * @class draw2d.layout.locator.LocatorA
 * 
 * Controls the location of an IFigure. 
 *
 * @author Andreas Herz
 */
draw2d.layout.locator.LocatorLine = draw2d.layout.locator.Locator.extend({
    NAME : "draw2d.layout.locator.LocatorLine",
	
	x : 0,
	y : 0,
	x2: 0,
	y2: 0,

    setPos:function(parent, _x, _y, _x2, _y2) {
        //console.log("total x:" + _x);
        //console.log("total y:" + _y);
        x = _x - parent.getX( );
        y = _y - parent.getY();
		x2 = _x2 - parent.getX();
        y2 = _y2 - parent.getY();
		//console.log("relativ x:" + x);
        //console.log("relativ y:" + y);
        //console.log("Relativ startX:" + x + " startY:" + y + " endX" + x2 + " endY" + y2);
    },

    init: function(parent) {
        this._super(parent);
    },

    relocate: function(index, target) {
        //console.log("x:" + x);
        //console.log("y:" + y);
        //console.log(this.NAME + " x:" + this.x + " y:" + this.y + "  target: " + target.startX + "  targetA: " + targetA.startX);
		//console.log(this.NAME + " x: " + x + this.getParent().getX());
        //console.log(this.NAME + " target x" + target.startX + "  target height: " + target.getWidth());

        target.startX = this.getParent().getX() + x;
	    target.startY = this.getParent().getY() + y;
		target.endX = this.getParent().getX() + x2;
		target.endY = this.getParent().getY() + y2;
        target.repaint();

        /*console.log("startX:" + target.startX + " startY:" + target.startY + " endX" + target.endX + " endY" + target.endY);
        var output = '';
        for (property in target) {
            output += property + ': ' + target[property]+'; ';
        }
        console.log(output);*/
    }
});
