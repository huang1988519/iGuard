# iOS SDK 源码加固宣传页面

这是一个针对 iOS SDK 源码加固的宣传静态网页，参考了阿里云和顶象的 iOS 加固产品页面设计。

## 文件结构

```
GuardHtml/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 功能特性

1. **响应式设计** - 支持桌面和移动设备
2. **交互式标签页** - 效果对比部分支持切换不同视图
3. **平滑滚动** - 导航链接平滑滚动到对应章节
4. **图片占位符** - 预留了 IDA Pro 截图位置，方便后续添加

## 需要添加的图片

以下位置需要手动添加 IDA Pro 反编译截图：

### 控制流图对比
- `comparison-item` 中的 `image-placeholder`（加固前）
- `comparison-item` 中的 `image-placeholder`（加固后）

### 反编译代码对比
- 切换到"反编译代码对比"标签页，添加对应的截图

### 字符串对比
- 切换到"字符串对比"标签页，添加对应的截图

### VMP 架构示意图
- `principle-diagram` 中的 `diagram-placeholder`

## 使用方法

1. 直接在浏览器中打开 `index.html` 即可查看
2. 将 IDA Pro 截图保存为 PNG 格式，建议尺寸 800x600px
3. 在 HTML 中找到对应的 `image-placeholder` div，替换为 `<img>` 标签

示例：
```html
<!-- 替换前 -->
<div class="image-placeholder">
    <p>请在此处放置 IDA Pro 控制流图截图（加固前）</p>
</div>

<!-- 替换后 -->
<img src="images/before-cfg.png" alt="加固前控制流图" style="width: 100%; border-radius: 8px;">
```

## 自定义样式

所有样式都在 `styles.css` 中，可以通过修改 CSS 变量来调整主题颜色：

```css
:root {
    --primary-color: #1890ff;  /* 主色调 */
    --secondary-color: #52c41a; /* 次要颜色 */
    --text-color: #333;         /* 文字颜色 */
    --bg-color: #fff;           /* 背景颜色 */
}
```

## 浏览器兼容性

- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- 移动端浏览器

## 注意事项

1. 所有图片路径使用相对路径
2. 建议将图片放在 `images/` 子目录中
3. 保持图片文件名清晰易懂
4. 确保图片大小适中，避免页面加载过慢
