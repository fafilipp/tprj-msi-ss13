/**
 */
package org.eclipselabs.spray.shapes.shape;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Rounded Rectangle</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * <ul>
 *   <li>{@link org.eclipselabs.spray.shapes.shape.RoundedRectangle#getLayout <em>Layout</em>}</li>
 *   <li>{@link org.eclipselabs.spray.shapes.shape.RoundedRectangle#getShape <em>Shape</em>}</li>
 * </ul>
 * </p>
 *
 * @see org.eclipselabs.spray.shapes.shape.ShapePackage#getRoundedRectangle()
 * @model
 * @generated
 */
public interface RoundedRectangle extends Shape
{
  /**
   * Returns the value of the '<em><b>Layout</b></em>' containment reference.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Layout</em>' containment reference isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Layout</em>' containment reference.
   * @see #setLayout(RoundedRectangleLayout)
   * @see org.eclipselabs.spray.shapes.shape.ShapePackage#getRoundedRectangle_Layout()
   * @model containment="true"
   * @generated
   */
  RoundedRectangleLayout getLayout();

  /**
   * Sets the value of the '{@link org.eclipselabs.spray.shapes.shape.RoundedRectangle#getLayout <em>Layout</em>}' containment reference.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @param value the new value of the '<em>Layout</em>' containment reference.
   * @see #getLayout()
   * @generated
   */
  void setLayout(RoundedRectangleLayout value);

  /**
   * Returns the value of the '<em><b>Shape</b></em>' containment reference list.
   * The list contents are of type {@link org.eclipselabs.spray.shapes.shape.Shape}.
   * <!-- begin-user-doc -->
   * <p>
   * If the meaning of the '<em>Shape</em>' containment reference list isn't clear,
   * there really should be more of a description here...
   * </p>
   * <!-- end-user-doc -->
   * @return the value of the '<em>Shape</em>' containment reference list.
   * @see org.eclipselabs.spray.shapes.shape.ShapePackage#getRoundedRectangle_Shape()
   * @model containment="true"
   * @generated
   */
  EList<Shape> getShape();

} // RoundedRectangle
