//
// RawShaderMaterial
//

// ShaderMaterialでは自動挿入される。
// uniform mat4 viewMatrix;
// uniform vec3 cameraPosition;

void main() {
	// すべて同じ色を出力する。
	gl_FragColor = vec4(0.8, 1.0, 0.5, 1.0);  // (r, g, b, a)、値の範囲は0.0-1.0
}
