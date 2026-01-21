// 标签页切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 效果对比标签页
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 添加当前活动状态
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 代码展示标签页
    const codeTabButtons = document.querySelectorAll('.code-tab-btn');
    const codeContents = document.querySelectorAll('.code-content');

    codeTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCode = button.getAttribute('data-code');

            // 移除所有活动状态
            codeTabButtons.forEach(btn => btn.classList.remove('active'));
            codeContents.forEach(content => content.classList.remove('active'));

            // 添加当前活动状态
            button.classList.add('active');
            document.getElementById('code-' + targetCode).classList.add('active');
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 移动端导航折叠
    const navToggle = document.querySelector('.nav-toggle');
    const navbarEl = document.querySelector('.navbar');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navbarEl && navMenu) {
        const closeMenu = () => {
            navbarEl.classList.remove('nav-open');
            navToggle.setAttribute('aria-expanded', 'false');
        };

        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navbarEl.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // 点击菜单项后自动收起
        navMenu.querySelectorAll('a[href^=\"#\"]').forEach(a => {
            a.addEventListener('click', () => closeMenu());
        });

        // 点击页面空白处收起
        document.addEventListener('click', (e) => {
            if (navbarEl.classList.contains('nav-open') && !navbarEl.contains(e.target)) {
                closeMenu();
            }
        });

        // 旋转/变宽后自动收起，避免布局错乱
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeMenu();
        });
    }

    // 导航栏滚动效果
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // 图片占位符点击提示
    const placeholders = document.querySelectorAll('.image-placeholder, .diagram-placeholder');
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            const text = this.querySelector('p')?.textContent;
            if (text) {
                console.log('请在此处添加图片:', text);
            }
        });
    });

    // 图片点击放大功能
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.image-modal-close');
    const images = document.querySelectorAll('.comparison-image');

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('show');
            modalImg.src = this.src;
            modalCaption.textContent = this.alt || '图片';
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        });
    });

    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // ESC 键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});

// 代码展开/收起功能
function toggleCode(btn) {
    const wrapper = btn.parentElement;
    const codeBlock = btn.nextElementSibling;
    if (codeBlock && codeBlock.classList.contains('code-block-collapsible')) {
        if (codeBlock.classList.contains('expanded')) {
            codeBlock.classList.remove('expanded');
            wrapper.classList.remove('expanded');
            btn.textContent = '查看源码';
        } else {
            codeBlock.classList.add('expanded');
            wrapper.classList.add('expanded');
            btn.textContent = '隐藏源码';
        }
    }
}
