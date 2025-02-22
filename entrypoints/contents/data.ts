import type { SearchPlatformItem } from "../global/types/type";
import i18n from "../global/locale";

export const addSearchPlatform: SearchPlatformItem = {
  label: i18n.global.t('button.add'),
  value: 'add',
  url: '',
}

export const defaultSearchPlatforms = [
  {
    label: i18n.global.t('platforms.baidu'),
    value: 'baidu',
    url: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd={keyword}',
    icon: 'https://www.baidu.com/favicon.ico'
  },
  {
    label: 'Google',
    value: 'google',
    url: 'https://google.com/search?q={keyword}',
    isDefault: true,
    icon: 'https://www.google.com/favicon.ico'
  },
  {
    label: 'Stack Overflow',
    value: 'stackoverflow',
    url: 'https://stackoverflow.com/search?q={keyword}',
    icon: 'https://stackoverflow.com/favicon.ico'
  },
  {
    label: 'Github',
    value: 'github',
    url: 'https://github.com/search?q={keyword}',
    icon: 'https://github.com/favicon.ico'
  },
  {
    label: 'NPM',
    value: 'npm',
    url: 'https://npmjs.com/search?q={keyword}',
    icon: 'https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png'
  },
  {
    label: 'Bing',
    value: 'bing',
    url: 'https://bing.com/search?q={keyword}',
    icon: 'https://www.bing.com/favicon.ico'
  },
  {
    label: 'Bing 国内版',
    value: 'bing-cn',
    url: 'https://www.bing.com?mkt=zh-CN&q={keyword}',
    icon: 'https://www.bing.com/favicon.ico'
  },
  {
    label: 'Go',
    value: 'go',
    url: 'https://pkg.go.dev/search?q={keyword}',
    icon: 'https://pkg.go.dev/favicon.ico'
  }
];

export const addSearchRules = {
  label: [{ required: true, message: i18n.global.t('addForm.placeholder.name'), trigger: 'blur' }],
  url: [{ required: true, message: i18n.global.t('addForm.placeholder.url'), trigger: 'blur' }],
};
