import Arab from "./superwin_ar";
import En from "./superwin_en";

export const language = {
    ar: Arab,
    en: En,
}

//将翻译挂载到全局变量
globalThis.alloTranslation = language;