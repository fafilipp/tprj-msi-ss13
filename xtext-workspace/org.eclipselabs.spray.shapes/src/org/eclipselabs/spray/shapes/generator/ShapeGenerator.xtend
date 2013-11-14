/*
 * generated by Xtext
 */
package org.eclipselabs.spray.shapes.generator

import org.eclipse.emf.ecore.resource.Resource
import org.eclipse.xtext.generator.IGenerator
import org.eclipse.xtext.generator.IFileSystemAccess
import org.eclipselabs.spray.shapes.shape.ShapeDefinition
import org.eclipselabs.spray.shapes.shape.Shape
import org.eclipselabs.spray.shapes.shape.Line
import org.eclipselabs.spray.shapes.shape.RoundedRectangle
import org.eclipselabs.spray.shapes.shape.Polyline
import org.eclipselabs.spray.shapes.shape.Rectangle
import org.eclipselabs.spray.shapes.shape.Polygon
import org.eclipselabs.spray.shapes.shape.Ellipse
import org.eclipselabs.spray.shapes.shape.Text
import org.eclipselabs.spray.shapes.shape.AnchorPredefinied
import org.eclipselabs.spray.shapes.shape.AnchorManual
import org.eclipselabs.spray.shapes.shape.AnchorRelativePosition
import org.eclipselabs.spray.shapes.shape.AnchorFixPointPosition

/**
 * Generates code from your model files on save.
 * 
 * see http://www.eclipse.org/Xtext/documentation.html#TutorialCodeGeneration
 */
class ShapeGenerator implements IGenerator {
	
	override void doGenerate(Resource resource, IFileSystemAccess fsa) {
		val e = resource.allContents.toIterable.filter(ShapeDefinition);
		fsa.generateFile('genshapes.js', e.compile)
	}
	
	def compile(Iterable<ShapeDefinition> d_s) '''
	var shapedefs = [
		«FOR d: d_s»
			«outerShape(d)»,
		«ENDFOR»
	]
	'''
	
	def outerShape(ShapeDefinition d) '''
	{
		name: "«d.name»",
		params: {
			minwidth: «d.shapeLayout.minwidth»,
			minheight: «d.shapeLayout.minheight»,
			maxwidth: «d.shapeLayout.maxwidth»,
			maxheight: «d.shapeLayout.maxheight»,
			«IF d.shapeLayout.stretchH != null»
			stretchH: «d.shapeLayout.stretchH»,
			«ENDIF»
			«IF d.shapeLayout.stretchV != null»
			stretchV: «d.shapeLayout.stretchV»,
			«ENDIF»
			«IF d.shapeLayout.proportional != null»
			proportional: «d.shapeLayout.proportional»
			«ENDIF»
		},
		anchors: [
			«IF d.anchor != null»
				«IF d.anchor.type.eClass.name == "AnchorPredefinied"»
					{type: "«(d.anchor.type as AnchorPredefinied).value»"},
				«ELSE»
					«val anchor = d.anchor.type as AnchorManual»
					«FOR manualAnchor: anchor.position»
						«IF manualAnchor.pos.eClass.name == "AnchorRelativePosition"»
							«val relativeAnchor = manualAnchor.pos as AnchorRelativePosition»
							{type: "relative", x: «relativeAnchor.xoffset», y: «relativeAnchor.yoffset»},
						«ELSE»
							«val fixpointAnchor = manualAnchor.pos as AnchorFixPointPosition»
							{type: "fixpoint", x: «fixpointAnchor.xcor», y: «fixpointAnchor.ycor»},
						«ENDIF»
					«ENDFOR»
				«ENDIF»
			«ENDIF»
		],
		shapes: [
			«FOR s: d.shape»
				«switchShape(s)»,
			«ENDFOR»
		]
	}
	'''
	
	def switchShape(Shape s) {
		switch s {
			case s.eClass.name == "Line" : innerShape(s.eClass.name, (s as Line))
			case s.eClass.name == "PolyLine" : innerShape(s.eClass.name, (s as Polyline))
			case s.eClass.name == "Rectangle" : innerShape(s.eClass.name, (s as Rectangle))
			case s.eClass.name == "RoundedRectangle" : innerShape(s.eClass.name, (s as RoundedRectangle))
			case s.eClass.name == "Polygon" : innerShape(s.eClass.name, (s as Polygon))
			case s.eClass.name == "Ellipse" : innerShape(s.eClass.name, (s as Ellipse))
			case s.eClass.name == "Text" : innerShape(s.eClass.name, (s as Text))
			default : "undefined"
		}
	}

	def innerShape(String name, Line d) '''
	{
		name: "«name»",
		params: {
			points: [
				«FOR point: d.layout.point»
				{
					x: «point.xcor»,
					y: «point.ycor»,
					curveBefore: «point.curveBefore»,
					curveAfter: «point.curveAfter»
				},
				«ENDFOR»
			]
		},
		shapes: []
	}
	'''

	def innerShape(String name, Polyline d) '''
	{
		name: "«name»",
		params: {
			points: [
				«FOR point: d.layout.point»
				{
					x: «point.xcor»,
					y: «point.ycor»,
					curveBefore: «point.curveBefore»,
					curveAfter: «point.curveAfter»
				},
				«ENDFOR»
			]
		},
		shapes: []
	}
	'''

	def innerShape(String name, Text d) '''
	{
		name: "«name»",
		params: {
			«IF d.layout.common.xcor != null && d.layout.common.ycor != null»
			position: {x: «d.layout.common.xcor», y: «d.layout.common.ycor»},
			«ENDIF»
			size: {width: «d.layout.common.width», height: «d.layout.common.heigth»},
			align: {
				horizontal: "«d.layout.HAlign»",
				vertical: "«d.layout.VAlign»"
			},
		},
		shapes: []
	}
	'''

	def innerShape(String name, Rectangle d) '''
	{
		name: "«name»",
		params: {
			«IF d.layout.common.xcor != null && d.layout.common.ycor != null»
			position: {x: «d.layout.common.xcor», y: «d.layout.common.ycor»},
			«ENDIF»
			size: {width: «d.layout.common.width», height: «d.layout.common.heigth»},
		},
		shapes: [
			«FOR s: d.shape»
				«switchShape(s)»,
			«ENDFOR»
		]
	}
	'''

	def innerShape(String name, RoundedRectangle d) '''
	{
		name: "«name»",
		params: {
			«IF d.layout.common.xcor != null && d.layout.common.ycor != null»
			position: {x: «d.layout.common.xcor», y: «d.layout.common.ycor»},
			«ENDIF»
			size: {width: «d.layout.common.width», height: «d.layout.common.heigth»},
			curve: {width: «d.layout.curveWidth», height: «d.layout.curveHeight»}
		},
		shapes: [
			«FOR s: d.shape»
				«switchShape(s)»,
			«ENDFOR»
		]
	}
	'''

	def innerShape(String name, Polygon d) '''
	{
		name: "«name»",
		params: {
			points: [
				«FOR point: d.layout.point»
				{
					x: «point.xcor»,
					y: «point.ycor»,
					curveBefore: «point.curveBefore»,
					curveAfter: «point.curveAfter»
				},
				«ENDFOR»
			]
		},
		shapes: [
			«FOR s: d.shape»
				«switchShape(s)»,
			«ENDFOR»
		]
	}
	'''

	def innerShape(String name, Ellipse d) '''
	{
		name: "«name»",
		params: {
			«IF d.layout.common.xcor != null && d.layout.common.ycor != null»
			position: {x: «d.layout.common.xcor», y: «d.layout.common.ycor»},
			«ENDIF»
			size: {width: «d.layout.common.width», height: «d.layout.common.heigth»},
		},
		shapes: [
			«FOR s: d.shape»
				«switchShape(s)»,
			«ENDFOR»
		]
	}
	'''

}