export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [];

export const dictionary = {
		"/": [~2],
		"/agenda": [~4],
		"/netzwerk": [5],
		"/site-not-found": [6],
		"/warum-das-eine-gute-sache-ist": [7],
		"/was-wir-tun": [8],
		"/wer-dahinter-steht": [9],
		"/wie-du-mitmachen-kannst": [10],
		"/wieviel-es-kostet": [11],
		"/wo-wir-zu-hause-sind": [12],
		"/[slug]": [~3]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';