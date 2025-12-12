export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Facebook_Icon_Green.png","Facebook_Icon_Grey.png","Footer_illu.png","Illu_Gemuese.png","Illustration_Calendar.png","Insta_Icon_Green.png","Insta_Icon_Grey.png","Mach_mit_Button.png","Pura_Verdura_Logo_Kopf.svg","admin/config.yaml","admin/index.html","bg-members/Carolin.jpg","bg-members/Christine.jpg","bg-members/Cristiana.jpg","bg-members/Harry.jpg","bg-members/Irina.jpg","bg-members/Isa.jpg","bg-members/Lino.jpeg","bg-members/Liv.png","bg-members/Noe.jpg","bg-members/Rose.jpg","bg-members/Silvia.jpg","bg-members/Tanja.jpg","carousel_next.svg","carousel_prev.svg","content/21-09-17 18-57-53-0322.jpeg","content/Abendstimmung-Bauwagen.jpeg","content/Betriebsgruppe_Pura_Verdura_2024.png","content/C051B60F-1201-4857-9223-219578F156D2.jpeg","content/Depotstandorte_Pura_Verdura.png","content/Feld.jpg","content/Foto-17-10-20.jpeg","content/Foto-21-08-20.jpeg","content/Foto_Ruebli.jpg","content/GV1.jpg","content/Gartenkind.jpg","content/IMG_1037.JPG","content/IMG_1046.jpeg","content/IMG_1444.JPG","content/IMG_8786.jpeg","content/KW_4_Jan 2_22.jpeg","content/Konzert_4.JPG","content/Lageplan_Pura_Verdura.png","content/image_1.jpg","favicon.png","fonts/Lora-Regular.ttf","fonts/Tahoma.ttf","robots.txt","sitemap.xml","w_teasers/Illu_Gute_Sache.png","w_teasers/Illu_Kosten.png","w_teasers/Illu_Mitmachen.png","w_teasers/Illu_Was_wir_tun.png","w_teasers/Illu_Wer_steht_dahinter.png","w_teasers/Illu_Wo_zu_Hause.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".yaml":"text/yaml",".html":"text/html",".jpg":"image/jpeg",".jpeg":"image/jpeg",".JPG":"image/jpeg",".ttf":"font/ttf",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CmRnPjF0.js",app:"_app/immutable/entry/app.B2jDF6ty.js",imports:["_app/immutable/entry/start.CmRnPjF0.js","_app/immutable/chunks/CqfhGKMG.js","_app/immutable/chunks/D-aOr4Q6.js","_app/immutable/chunks/W8xL2ztF.js","_app/immutable/entry/app.B2jDF6ty.js","_app/immutable/chunks/D-aOr4Q6.js","_app/immutable/chunks/y5iPpw-A.js","_app/immutable/chunks/14p3pRaA.js","_app/immutable/chunks/CkSWul6O.js","_app/immutable/chunks/xvoINzwe.js","_app/immutable/chunks/B7exuc5H.js","_app/immutable/chunks/MRQujorY.js","_app/immutable/chunks/W8xL2ztF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/agenda",
				pattern: /^\/agenda\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/netzwerk",
				pattern: /^\/netzwerk\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/site-not-found",
				pattern: /^\/site-not-found\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/sozial",
				pattern: /^\/sozial\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/warum-das-eine-gute-sache-ist",
				pattern: /^\/warum-das-eine-gute-sache-ist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/was-wir-tun",
				pattern: /^\/was-wir-tun\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/wer-dahinter-steht",
				pattern: /^\/wer-dahinter-steht\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/wie-du-mitmachen-kannst",
				pattern: /^\/wie-du-mitmachen-kannst\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/wieviel-es-kostet",
				pattern: /^\/wieviel-es-kostet\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/wo-wir-zu-hause-sind",
				pattern: /^\/wo-wir-zu-hause-sind\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
