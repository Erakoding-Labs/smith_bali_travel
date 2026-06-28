export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.ChRH_0Rf.js",app:"_app/immutable/entry/app.CM2csAEf.js",imports:["_app/immutable/entry/start.ChRH_0Rf.js","_app/immutable/chunks/DsReG2tO.js","_app/immutable/chunks/DSspXU3d.js","_app/immutable/chunks/CNhnieTO.js","_app/immutable/entry/app.CM2csAEf.js","_app/immutable/chunks/DSspXU3d.js","_app/immutable/chunks/DKLyjx-8.js","_app/immutable/chunks/CNhnieTO.js","_app/immutable/chunks/C6LE1lWd.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
