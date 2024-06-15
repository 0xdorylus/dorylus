import { defineStore } from 'pinia';

interface AuthProps {
	token: string | null;
	account: string | null;
	app: string | null;
}
interface MenuRouterProps {
	title: string;
	icon: string;
	router: string;
	name: string;
	needAuth: boolean;
}
interface CommonProps {
	showMobileMenu: boolean;
	showMobileChat: boolean;
	menuRouter: MenuRouterProps[];
	APP_NAME: string;
	// 自定义状态栏安全高度
	headerHeight: number;
	userInfo: {};
	assistant_id: number;
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthProps => ({
		token: null,
		account: null,
		app: null
	}),
	actions: {
		setToken(token: string | null) {
			this.token = token;
		},
		clearToken() {
			this.token = null;
		},
		setAccount(account: string | null) {
			this.account = account;
		},
		clearAccount() {
			this.account = null;
		},
		setApp(app: string | null) {
			this.app = app;
		},
		clearApp() {
			this.app = null;
		}
	},
	// 插件添加属性
	persist: {
		key: 'store-auth' // 本地存储key名称
		// paths:['token', 'account', 'app'] // 本地存储的属性
	}
});

export const useCommonStore = defineStore('counter', {
	state: (): CommonProps => ({
		showMobileMenu: false,
		showMobileChat: false,
		menuRouter: [
		
			// {
			// 	title: 'Yes sir',
			// 	icon: 'Service',
			// 	router: '/entry',
			// 	name: 'commands',
			// 	needAuth: false
			// },
			{
				title: 'Hub',
				icon: 'View',
				router: '/home',
				name: 'home',
				needAuth: false
			},
			{
				title: 'Mint',
				icon: 'Plus',
				router: '/mybots',
				name: 'createAgent',
				needAuth: false
			},
			
			{
				title: 'Store',
				icon: 'Compass',
				router: '/store',
				name: 'home',
				needAuth: false
			},
			{
				title: 'Me',
				icon: 'User',
				router: '/wallet',
				name: 'settings',
				needAuth: true
			}
		],
		APP_NAME: 'dorylus',
		// 自定义状态栏安全高度
		headerHeight: 0,
		userInfo: {},
		assistant_id: 1
	}),

	actions: {
		setHeaderHeight(headerHeight: number) {
			this.headerHeight = headerHeight;
		},
		setUserInfo(user: {}) {
			this.userInfo = user;
		}
	}
});