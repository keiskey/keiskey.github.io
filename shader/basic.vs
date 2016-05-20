// ※three.jsでは以下の記述が自動で挿入される。
/*
precision highp int;

#define VERTEX_TEXTURES

#define MAX_DIR_LIGHTS 0
#define MAX_POINT_LIGHTS 0
#define MAX_SPOT_LIGHTS 0
#define MAX_HEMI_LIGHTS 0
#define MAX_SHADOWS 0
#define MAX_BONES 251

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec2 uv2;
#ifdef USE_COLOR
	attribute vec3 color;
#endif
#ifdef USE_MORPHTARGETS
	attribute vec3 morphTarget0;
	attribute vec3 morphTarget1;
	attribute vec3 morphTarget2;
	attribute vec3 morphTarget3;
	#ifdef USE_MORPHNORMALS
		attribute vec3 morphNormal0;
		attribute vec3 morphNormal1;
		attribute vec3 morphNormal2;
		attribute vec3 morphNormal3;
	#else
		attribute vec3 morphTarget4;
		attribute vec3 morphTarget5;
		attribute vec3 morphTarget6;
		attribute vec3 morphTarget7;
	#endif
#endif
#ifdef USE_SKINNING
	attribute vec4 skinIndex;
	attribute vec4 skinWeight;
#endif
*/

//#version 120
// 自動挿入分があるため、version directiveが有効にならない。（version directiveは一行目に記述しなければならない）

//invariant gl_Position;  // invariantを指定すると、異なるvertex shader間でgl_Positionを共有する。※three.jsではエラーになる。（Safariのみ？）

void main() {
	// 入力で受け取った座標を、拡大率1.0でそのままgl_Positionに格納する。
	gl_Position = vec4(position, 1.0);  // (x, y, z, w)、wは同次系。視錐台の拡大率をあらわす。
}

// 現時点（2015/03/01）での対応バージョンは、GLSL 1.20
// Vendor: WebKit
// Renderer: WebKit WebGL
// Renderer Version: WebGL 1.0 (2.1 INTEL-10.2.46)
// Shading Language Version: WebGL GLSL ES 1.0 (1.20)
// バージョンの確認方法は、renderer.context（canvas.context）のgetParameterの引数にcontext内の定数を渡す。
// var gl = renderer.context;
// gl.getParameter(gl.VERSION);
// gl.getParameter(gl.SHADING_LANGUAGE_VERSION);

// # version 1.2（OpenGL 2.1）
// 頂点情報は、入力情報としてattribute変数に格納される。
// 座標変換や陰影計算などを行い、クリッピング座標系に変換して出力変数gl_Positionに格納する。
// テクスチャ座標や頂点の色はvarying変数に格納する。
// >> ラスタライズ >> fragment shaderへ
//
// # version 1.3（OpenGL 3.0）
// 頂点情報は、入力情報としてin変数へ格納される。（attributeは廃止）
// 計算結果は、次のステージ（fragment shader）へ出力するout変数へ格納する。（varyingは廃止）
//
// #version 130
// in vec3 position;
// void main() {
// 	gl_Position = vec4(position, 1.0);
// }
//
// # OpenGL 4.0からversionは400になり、バージョン名が統一される。
