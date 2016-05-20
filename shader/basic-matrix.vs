// Matrixを変更することでcontrols（カメラ移動）に対応できる。

// threejsで変数設定。
// vec3 position = gl_Vertex;
// mat4 modelViewMatrix = gl_ModelViewMatrix;
// mat4 projectionMatrix = gl_ProjectionMatrix;
// その他：https://github.com/mrdoob/three.js/blob/eee231960882f6f3b6113405f524956145148146/src/renderers/webgl/WebGLProgram.js
// modelViewProjectionMatrixは未定義なので、自前で計算する。`projection * modelView (or view * model)`

void main() {
	// gl_Position = vec4(position, 1.0);  // controls非対応。
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
