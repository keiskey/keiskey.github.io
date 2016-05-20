// ※three.jsでは以下の記述が自動で挿入される。
/*
precision highp int;

#define MAX_DIR_LIGHTS 0
#define MAX_POINT_LIGHTS 0
#define MAX_SPOT_LIGHTS 0
#define MAX_HEMI_LIGHTS 0
#define MAX_SHADOWS 0

uniform mat4 viewMatrix;
uniform vec3 cameraPosition;
*/

//#version 120
// 自動挿入分があるため、version directiveが有効にならない。（version directiveは一行目に記述しなければならない）

void main() {
	// すべて同じ色を出力する。
	gl_FragColor = vec4(1.0, 0.9, 0.0, 1.0);  // (r, g, b, a)、値の範囲は0.0-1.0
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

// # version 1.2
// 図形要素を画素に展開し、画素一つごとにfragment shaderを起動する。
// varying変数に格納された補間値をもとに画素の色決定やテクスチャのサンプリングを行い、最終的な色情報を出力変数gl_FragColorに格納する。
// 画素を画面に描画しない場合は、その画素でdiscardを実行する。
//
// # version 1.3（GLSL ES 3.00）以降
// vertex shaderのout変数がfragment shaderのin変数に格納される。
// 出力する画素の色はout変数に格納する。（gl_FragColorは廃止）
//
// #version 130
// out color;
// void main() {
// 	color = vec4(1.0, 0.0, 0.0, 1.0);
// }

// gl_FragCoordにはディスプレイ全体の座標が入る。
