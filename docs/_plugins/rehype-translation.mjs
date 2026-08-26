const CJK_RE = /[\u4e00-\u9fff]/;

function hasCJK(node) {
  if (!node) return false;
  if (node.type === 'text') return CJK_RE.test(node.value);
  if (Array.isArray(node.children)) return node.children.some(hasCJK);
  return false;
}

function addClass(node, cls) {
  const props = node.properties || (node.properties = {});
  const list = Array.isArray(props.className)
    ? props.className
    : props.className
      ? [props.className]
      : [];
  list.push(cls);
  props.className = list;
}

function hasText(node) {
  if (!node) return false;
  if (node.type === 'text') return node.value.trim().length > 0;
  if (Array.isArray(node.children)) return node.children.some(hasText);
  return false;
}

function containsImg(node) {
  if (!node) return false;
  if (node.type === 'element' && node.tagName === 'img') return true;
  if (Array.isArray(node.children)) return node.children.some(containsImg);
  return false;
}

const isBlankText = node => node.type === 'text' && !node.value.trim();
const isHr = node => node.type === 'element' && node.tagName === 'hr';
// 英文文本块：有文字内容且无中文；纯图片段落（如章首漫画）不参与中英配对，直接展示
const isEnglishBlock = node =>
  node.type === 'element' &&
  ['p', 'ul', 'ol'].includes(node.tagName) &&
  !hasCJK(node) &&
  hasText(node);
// 纯图片段落（无文字），如各章开头的漫画插图
const isImageOnly = node =>
  node.type === 'element' &&
  node.tagName === 'p' &&
  !hasText(node) &&
  containsImg(node);

/**
 * 将「英文原文 + 中文引用」配对，实现点击中文切换英文显示：
 * - 英文块（p / ul / ol）及其中间的分隔线加 .en-source，默认隐藏
 * - 中文 blockquote 转为 div.zh-trans，运行时点击切换其前面的 .en-source
 *
 * MDX 编译后顶层元素之间夹杂空白 text 节点（\n），向前遍历时需跳过。
 * 支持的结构（源自本书翻译约定）：
 *   <p>English</p>                    <blockquote>中文</blockquote>
 *   <p>EN-a</p> <p>EN-b</p>           <blockquote>中文</blockquote>
 *   <ul>English list</ul> <hr>        <blockquote>中文列表</blockquote>
 */
export default function rehypeTranslation() {
  return tree => {
    const kids = tree.children || [];
    for (let i = 0; i < kids.length; i++) {
      const node = kids[i];

      // 章首漫画等纯图片段落：直接展示，加类控制样式
      if (isImageOnly(node)) {
        addClass(node, 'chapter-fig');
        continue;
      }

      if (
        node.type !== 'element' ||
        node.tagName !== 'blockquote' ||
        !hasCJK(node)
      ) {
        continue;
      }

      // 向前收集连续的英文源块：跳过空白 text 与分隔线，
      // 遇到中文块 / 标题 / 代码块等任何其他节点即停止
      const sources = [];
      let j = i - 1;
      while (j >= 0) {
        const prev = kids[j];
        if (isBlankText(prev) || isHr(prev)) {
          if (isHr(prev)) sources.unshift(prev);
          j -= 1;
          continue;
        }
        if (isEnglishBlock(prev)) {
          sources.unshift(prev);
          j -= 1;
          continue;
        }
        break;
      }

      if (sources.length === 0) {
        continue;
      }

      for (const src of sources) {
        addClass(src, 'en-source');
      }

      // 中文引用转为普通块，作为可点击的翻译正文
      node.tagName = 'div';
      addClass(node, 'zh-trans');
      node.properties.title = '点击显示 / 隐藏英文原文';
    }
  };
}
