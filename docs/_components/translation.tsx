import { useEffect } from 'react';
import './translation.css';

/**
 * 中英对照切换（配合 rehype-translation 插件使用）：
 * 点击中文片段（.zh-trans）时，切换其前面英文原文（.en-source）的显示。
 * 采用 document 级事件委托，SPA 路由切换后依然有效。
 */
export default function TranslationToggle() {
  useEffect(() => {
    const toggle = (zh: Element) => {
      // 向前收集连续的英文源块（段落 / 列表 / 分隔线）
      const sources: Element[] = [];
      let prev = zh.previousElementSibling;
      while (prev?.classList.contains('en-source')) {
        sources.unshift(prev);
        prev = prev.previousElementSibling;
      }
      if (sources.length === 0) return;
      const expanded = zh.classList.toggle('zh-expanded');
      for (const el of sources) {
        el.classList.toggle('en-visible', expanded);
      }
    };

    const onClick = (e: MouseEvent) => {
      const zh = (e.target as HTMLElement).closest?.('.zh-trans');
      if (zh) toggle(zh);
    };

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const zh = (e.target as HTMLElement).closest?.('.zh-trans');
      if (zh) {
        e.preventDefault();
        toggle(zh);
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeydown);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeydown);
    };
  }, []);

  return null;
}
