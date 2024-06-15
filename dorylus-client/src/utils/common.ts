
/**
 * 日期格式化/获取当前时间
 * @param {String} fmt 日期格式 如：YYYY-mm-dd HH:MM:SS
 * @param {Date} miTime 毫秒数 不传则自动获取当前时间  如：195674674646 
 * @param {Boolean} isGetObJ 是否返回obj对象
 * @return 当前的时间如：2020-09-20 14:18:05
 */
export function getNowTimes(fmt = 'YYYY-mm-dd', miTime?: Date, isGetObJ?: boolean) {
    let ret;
    const date = miTime ? new Date(miTime) : new Date();
    const opt: { [key: string]: string | number } = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    if (isGetObJ) {
        let res: { [key: string]: string | number } = {}
        for (const item in opt) {
            res[item.replace('+', '')] = (<number>opt[item]) >= 10 ? opt[item] : '0' + opt[item];
        }
        return res;
    }
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            // @ts-ignore
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
};

import { useClipboard } from '@vueuse/core';
import { ElMessage } from 'element-plus';
import type { Ref } from 'vue';
import {  ref } from 'vue';

export function handleCopy  (Key: string)  {
    const source: Ref<string> = ref(Key)
    const { copy, copied, isSupported } = useClipboard({ source })
    if (!isSupported) return ElMessage.error('browser does not support')
    copy(Key)
    if (copied) {
      ElMessage.success('copy success')
    }
  }