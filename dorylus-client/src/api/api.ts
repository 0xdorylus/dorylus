import { request } from "./axios";
import { useAuthStore } from "@/store/common";

import { generateUniqueString } from "@/utils/str";
interface GeneralsResponse {
  code: number;
  msg: string;
  result: any;
}

/**
 * @description -封装User类型的接口方法
 */
export class UserService {
  // 模块一
  /**
   * @description 用户登录
   * @param {string} username - 用户名
   * @return {HttpResponse} result
   */
  static async loginwithsign(params: {} | undefined) {
    // 接口一
    return request("/apis/auth/loginwithsign", params, "post");
  }
  static async loginwithGuest(params: {} | undefined) {
    // 接口二
    let deviceId;
    if (localStorage.xdeviceId) {
      deviceId = localStorage.xdeviceId;
    } else {
      deviceId = generateUniqueString();
      localStorage.setItem("xdeviceId", deviceId);
    }
    let r = {
      device_id: deviceId,
    };

    return request("/apis/User/Api/Passport/loginWithDeviceId", r, "post");
  }

  static async logout(params: {} | undefined) {
    // 接口一

    await request("/apis/auth/logout", params, "post");
    const authStore = useAuthStore();
    authStore.clearAccount();
    authStore.clearApp();
    authStore.clearToken();
  }

  static async setLang(params: {} | undefined) {
    // 接口一
    return request("/apis/User/Api/Index/setDefaultLang", params, "post");
  }

  static async searchUser(params: {} | undefined) {
    // 接口一
    return request("/apis/User/Api/Index/searchUser", params, "post");
  }

  static async createServer(params: {} | undefined) {
    // 接口一
    return request("/apis/Social/Api/Server/create", params, "post");
  }

  static async listServers(params: {} | undefined) {
    // 接口一
    return request("/apis/Social/Api/Common/listservers", params, "post");
  }

  static async listMyServers(params: {} | undefined) {
    // 接口一
    return request("/apis/Social/Api/Server/listMyServers", params, "post");
  }
  static async listChannel(params: {} | undefined) {
    // 接口一
    return request("/apis/Social/Api/Server/listChannel", params, "post");
  }

  static async sendMsg(params: {} | undefined) {
    // 接口一

    return request("/apis/Social/Api/Channel/sendMsg", params, "post");
  }

  static async getHistoryMsg(params: {} | undefined) {
    // 接口一

    return request("/apis/Social/Api/Channel/getHistoryMsg", params, "post");
  }

  static async getChannelPrompt(params: {} | undefined) {
    // 接口一

    return request("/apis/Social/Api/Channel/getChannelPrompt", params, "post");
  }

  static async getDepositAddress(
    params: {} | undefined = { mainchain: "BSC" }
  ) {
    // 接口一

    return request("/apis/asset/get_deposit_address", params, "post");
  }

  static async getMyWallet(params: {} | undefined = { mainchain: "BSC" }) {
    // 接口一

    return request("/apis/asset/get_user_asset_list", params, "get");
  }

  static async getUserinfo(params: {} | undefined = { mainchain: "BSC" }) {
    // 接口一

    return request("/apis/User/Api/Index/getUserinfo", params, "post");
  }

  static async getLatestConversation(
    params: {} | undefined = { mainchain: "BSC" }
  ) {
    // 接口一

    return request(
      "/apis/Social/Api/Index/getLatestConversation",
      params,
      "post"
    );
  }

  static async listMyFriends(params: {} | undefined) {
    // 接口一
    return request("/apis/Social/Api/Friend/listMyFriends", params, "post");
  }

  static async listHello(params: {} | undefined) {
    // 接口一
    return request("/apis/Social/Api/Friend/listHello", params, "post");
  }
}
export class ChatService {
  static async listAllChats(params: {} | undefined) {
    return request("/apis/Social/Api/Server/listChannel", params, "post");
  }
}

export class BotService {
  // 模块一

  static async getMyBots(params: {} | undefined) {
    // 接口一
    return request("/apis/AI/Api/Index/mybots", params, "post");
  }

  static async createAssistant(params: {} | undefined) {
    // 接口一
    return request("/apis/AI/Api/Index/createAssistant", params, "post");
  }

  static async sendMsg(params: {} | undefined) {
    // 接口一

    return request("/apis/AI/Chat/send", params, "post");
  }

  static async startConversation(params: {} | undefined) {
    // 接口一

    return request("/apis/AI/Chat/startConversation", params, "post");
  }

  static async getHistoryMsg(params: {} | undefined = {}) {
    return request("/apis/AI/Chat/history", params, "post");
  }
  // 获取App当前聊天助理ID等配置
  static async getConfig(params: {} | undefined = {}) {
    return request("/apis/AI/Chat/getConfig", params, "post");
  }

  static async getUserInfo(params: {} | undefined = {}) {
    return request("/apis/User/Api/Index/info", params, "post");
  }

  static async listConversation(params: {} | undefined = {}) {
    return request("/apis/Social/Api/Session/listConversation", params, "post");
  }

  static async getHomeBotList(params: {} | undefined = {}) {
    return request("/apis/Social/Api/Common/getHomeBotList", params, "post");
  }
  static async getHomeClubList(params: {} | undefined = {}) {
    return request("/apis/Social/Api/Common/getHomeClubList", params, "post");
  }
  static async getHomePromptList(params: {} | undefined = {}) {
    return request("/apis/Social/Api/Common/getHomePromptList", params, "post");
  }
  static async getHomeSlogonList(params: {} | undefined = {}) {
    return request("/apis/Social/Api/Common/getHomeSlogonList", params, "post");
  }

  static async toggleBotVisiablity(params: {} | undefined = {}) {
    return request("/apis/AI/Api/Index/toggleBotVisiablity", params, "post");
  }

  static async getCopilot(params: {} | undefined = {}) {
    return request("/apis/agent/detail", params, "post");
  }
  static async agentSaveBase(params: {} | undefined = {}) {
    return request("/apis/agent/save_base", params, "post");
  }

  static async agentSaveLLM(params: {} | undefined = {}) {
    return request("/apis/agent/save_llm", params, "post");
  }
  static async agentSaveHub(params: {} | undefined = {}) {
    return request("/apis/agent/save_hub", params, "post");
  }

  static async saveCopilot(params: {} | undefined = {}) {
    return request("/apis/AI/Api/Index/saveCopilot", params, "post");
  }

  static async dealUrl(params: {} | undefined = {}) {
    return request("/apis/agent/deal_kb_url", params, "post");
  }

  static async registerAgent(params: {} | undefined = {}) {
    return request("/apis/agent/register_agent", params, "post");
  }

  static async chat(params: {} | undefined = {}) {
    return request("/apis/agent/chat", params, "post");
  }
  static async audio_chat(params: {} | undefined = {}) {
    return request("/apis/agent/audio_chat", params, "post");
  }
  

}


export class landRelevant {
  // 模块二
  /**
   * @description 获取地列表
   * @return {HttpResponse} result
   */
  static async landList(params: {} | undefined) {
    return request("/land_list_info", params, "get");
  }
}
