import { type ReactNode } from 'react';
import { normalizeImagePath } from '@rspress/core/runtime';
import './figures.css';

interface FiguresProps {
  figure: string;
  children?: ReactNode;
}

/**
 * 章节插图组件，用法：<Figures figure="1-1">插图标题</Figures>
 * 图片从 public/figures 目录读取，路径规则：/figures/ch{章}/fg{编号}.jpg
 */
export default function Figures({ figure, children }: FiguresProps) {
  const chapter = figure.split('-')[0];
  const src = normalizeImagePath(`/figures/ch${chapter}/fg${figure}.jpg`);
  return (
    <div className="figure">
      <div className="fg">
        <div className="fgimg">
          <img src={src} alt={`图 ${figure}`} />
        </div>
      </div>
      <div className="fgtitle">
        <p>
          图 {figure}：
          {children}
        </p>
      </div>
    </div>
  );
}
