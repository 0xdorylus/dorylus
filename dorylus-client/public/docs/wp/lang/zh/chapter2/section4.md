# LLM

LLM是大语言模型，典型代表就是ChatGPT系列，OpenAI就是ChatGPT的模型供应商。目前平台已支持主流的模型供应商，除了 OpenAI 的 GPT 系列、还有Anthropic 的 Claude 系列，https://console.anthropic.com/account/keys、https://www.xfyun.cn/solutions/xinghuoAPI、https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application、https://dashscope.console.aliyun.com/api-key_management?spm=a2c4g.11186623.0.0.3bbc424dxZms9k等。不同模型的能力表现、参数类型会不一样，你可以根据不同情景的应用需求选择你喜欢的模型供应商。
模型类型
我们按模型的使用场景将模型分为以下 4 类：
1.系统推理模型。 在创建的应用中，用的是该类型的模型。智聊、对话名称生成、下一步问题建议用的也是推理模型。已支持的系统推理模型供应商：https://platform.openai.com/account/api-keys、https://azure.microsoft.com/en-us/products/ai-services/openai-service/、https://console.anthropic.com/account/keys、Hugging Face Hub、Replicate、Xinference、OpenLLM、https://www.xfyun.cn/solutions/xinghuoAPI、https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application、https://dashscope.console.aliyun.com/api-key_management?spm=a2c4g.11186623.0.0.3bbc424dxZms9k、https://api.minimax.chat/user-center/basic-information/interface-key、ZHIPU(ChatGLM)
2.Embedding 模型。在数据集中，将分段过的文档做 Embedding 用的是该类型的模型。在使用了数据集的应用中，将用户的提问做 Embedding 处理也是用的该类型的模型。已支持的 Embedding 模型供应商：OpenAI、ZHIPU(ChatGLM)、JinaAI
3.https://docs.dify.ai/v/zh-hans/advanced/retrieval-augment/rerank。Rerank 模型用于增强检索能力，改善 LLM 的搜索结果。已支持的 Rerank 模型供应商：Cohere
4.语音转文字模型。将对话型应用中，将语音转文字用的是该类型的模型。已支持的语音转文字模型供应商：OpenAI
根据技术变化和用户需求，我们将陆续支持更多 LLM 供应商。
配置模型
请您先前往模型厂商的官方网站购买不同大预言模型的AI算力 。如果您已经购买完成，就可以将模型的API key配置到平台对应的大预言模型下，就可以使用该模型创建智能体（Agent）了。

在设置 > 模型供应商 中设置要接入的模型。
模型供应商分为两种：
1.自有模型。该类型的模型供应商提供的是自己开发的模型。如 OpenAI，Anthropic 等。
2.托管模型。该类型的模型供应商提供的是第三方模型。如 Hugging Face，Replicate 等。

接入不同类型的模型供应商的方式稍有不同。
接入自有模型的模型供应商
接入自有模型的供应商后，会自动接入该供应商下的所有模型。
在中设置对应模型供应商的 API key，即可接入该模型供应商。
来加密存储用户托管的 API 密钥，每个租户均使用了独立的密钥对进行加密，确保你的 API 密钥不被泄漏。
接入托管模型的模型供应商
托管类型的供应商上面有很多第三方模型。接入模型需要一个个的添加。具体接入方式如下：
●Hugging Face
●Replicate
●Xinference
●OpenLLM
配置默认模型
在需要模型时，会根据使用场景来选择设置过的默认模型。在 设置 > 模型供应商 中设置默认模型。
使用模型
配置完模型后，就可以在应用中使用这些模型了：