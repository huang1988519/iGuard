# GuardMarkdown 使用说明

本目录包含适合在 GitHub 上展示的 Markdown 格式页面。

## 文件结构

```
GuardMarkdown/
├── README.md          # 主页面（GitHub 会自动显示）
├── _config.yml        # GitHub Pages 配置文件（可选）
├── images/            # 图片资源目录
│   ├── README.md      # 图片说明
│   ├── 控制流-后.png
│   ├── 反编译-后.png
│   ├── 字符串-后.png
│   ├── vmp.png
│   └── 原始macho.png
└── .gitignore         # Git 忽略文件
```

## 在 GitHub 上使用

### 方法 1：直接使用 README.md

1. 将 `GuardMarkdown` 目录推送到 GitHub 仓库
2. GitHub 会自动将 `README.md` 显示为仓库主页
3. 图片路径使用相对路径 `images/xxx.png`

### 方法 2：使用 GitHub Pages

1. 在仓库设置中启用 GitHub Pages
2. 选择 `main` 分支的 `/docs` 或根目录
3. 如果使用 `/docs`，将 `GuardMarkdown` 内容放到 `docs/` 目录
4. 访问 `https://yourusername.github.io/repository-name/` 查看页面

### 方法 3：使用 Jekyll 主题

1. 在 `_config.yml` 中配置主题
2. GitHub Pages 会自动使用 Jekyll 渲染
3. 支持更丰富的页面布局和样式

## 注意事项

- 图片路径使用相对路径：`images/文件名.png`
- Markdown 中的代码块使用三个反引号包裹
- 表格、列表等 Markdown 语法都会被正确渲染
- 中文字符在 GitHub 上显示正常

## 预览

在本地可以使用 Markdown 编辑器预览，或推送到 GitHub 后在线查看效果。
