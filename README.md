# TacClaw-Infinity 项目页

这是一套可直接部署到 GitHub Pages 的静态网站，无需安装依赖或构建。

网页源码仓库：`daimon-robotics/tacclaw-infinity-page`

论文代码仓库：[daimon-robotics/TacClaw-Infinity](https://github.com/daimon-robotics/TacClaw-Infinity)。本仓库仅用于项目主页及配套素材。

项目页地址：`https://daimon-robotics.github.io/tacclaw-infinity-page/`

本仓库托管论文项目页及配套素材，使用 GitHub Pages 从 `main` 分支根目录发布。无需单独创建 `daimon-robotics.github.io` 仓库。

## 本地查看

用浏览器打开 `index.html`。也可以在此文件夹运行 `python3 -m http.server 8000`，然后访问 `http://localhost:8000/`。

## 发布到组织的 GitHub Pages

1. 使用可以在 `daimon-robotics` 组织中创建仓库的 GitHub 账号登录。
2. 新建仓库，Owner 选 `daimon-robotics`，Repository name 填 `tacclaw-infinity-page`。使用 GitHub Free 时需选择 Public。
3. 将本文件夹里面的内容放到仓库 `main` 分支的根目录。`index.html` 应直接位于仓库根目录，不要多套一层文件夹；同时保留 `assets` 文件夹与 `.nojekyll` 文件。
4. 打开仓库 `Settings → Pages`，Source 选择 `Deploy from a branch`，Branch 选择 `main`，Folder 选择 `/(root)`，保存。
5. 等待 GitHub 完成部署，在 Pages 设置中打开 `Visit site`，检查网页、图片和 Paper 按钮。

配置 Pages 需要仓库的管理或维护权限。发布会使网页及 `assets/paper.pdf` 中的当前论文公开可访问。

官方说明：
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 补充资源链接

编辑 `site-config.js`，填入 `github`、`modelscope`、`huggingface` 对应的网址。空字符串会显示 Coming soon；填入有效的 HTTPS 网址后，按钮自动变为可跳转链接。

`project` 已填写确认的项目页地址。论文首页中的 Project URL 可以在网站正式发布后使用该地址。

Paper 按钮使用本地的 `assets/paper.pdf`。以后替换同名文件即可更新论文。

## 更新内容

- `index.html`：标题、26 位作者、16 个机构、摘要、介绍和实验结果。
- `styles.css`：颜色、字体、间距及手机布局。
- `site.js`：资源入口和 BibTeX 复制。
- `citation.bib`：当前按 2026 年 manuscript 整理的引用。取得正式 arXiv 编号或出版信息后，应同步更新网页 Citation 和此文件。
- `assets/`：数据集统计、接触标注流程、任务序列、触觉实验图片、视频及论文 PDF。teaser 原图保留为素材，主页不再展示。

全部科研图和数字来自提供的 TacClaw-Infinity 论文材料。布局与内容组织参考 PaLM-E 项目页，未复制其代码、研究内容或媒体资源。

## 视频与图标

当前视频为 2026-10-14 更新的 `TacClaw_Infinity_video_v7_13_1.1x.mp4`，位于作者、机构和资源入口之后、摘要之前。视频为 1920×1080、30 fps、H.264、无声，精确时长 135.467 秒（页面显示 2 分 15 秒），约 80.63 MB。`assets/overview-video.mp4` 与提供的原文件逐字节一致，没有再次编码或降低画质；原文件已将 MP4 索引放在文件开头，支持渐进播放。页面继续使用手动播放和 `preload="metadata"`。`assets/video-poster.jpg` 取自新版视频第 1.5 秒。视频与封面链接加入 `v=20261014-v7-13` 以更新浏览器缓存。

16 个机构图标沿用论文中的编号顺序；桌面端显示为一排，小屏幕可横向滚动，图标下不显示序号。NTU、UCL、NUS 的显示裁切与论文相同，原图保留。素材来源见 `assets/institutions/sources.txt`。

Paper、GitHub、ModelScope、Hugging Face 按钮都加入本地 SVG 图标。素材来源见 `assets/icons/sources.txt`。链接配置方式保持不变。
