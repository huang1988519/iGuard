function getQueryLang() {
  const u = new URL(window.location.href);
  const q = u.searchParams.get('lang');
  if (q === 'en' || q === 'zh') return q;
  return null;
}

function setQueryLang(lang) {
  const u = new URL(window.location.href);
  u.searchParams.set('lang', lang);
  // keep hash
  const hash = window.location.hash;
  const next = u.pathname + u.search + (hash || '');
  window.history.replaceState({}, '', next);
}

const I18N = {
  zh: {
    "nav.title": "概览",
    "nav.note": "面向 iOS SDK 源码的编译期保护",
    "nav.overview": "概览",
    "nav.features": "功能",
    "nav.workflow": "流程",
    "nav.requirements": "要求",
    "nav.effects": "效果展示",
    "nav.faq": "常见问题",
    "nav.contact": "联系",
    "pill.manual": "手动加固",
    "pill.source": "需提供源码",
    "hero.kicker": "iOS SDK 源码加固",
    "hero.title": "保护最关键的：你的 SDK 核心逻辑",
    "hero.desc": "iGuard 为 iOS Framework 源码提供编译期保护。我们提供手动加固服务，在不改变运行时行为的前提下，提高逆向分析成本。",
    "callouts.c1t": "源码优先",
    "callouts.c1d": "基于源码进行保护，不支持仅二进制加固。",
    "callouts.c2t": "聚焦核心",
    "callouts.c2d": "建议只加固核心 Framework，降低接入风险。",
    "callouts.c3t": "可验收",
    "callouts.c3d": "提供效果截图与验证说明，便于验收。",
    "hero.primary": "联系",
    "hero.secondary": "查看功能",
    "features.title": "功能",
    "features.desc": "多层保护组合，可按你的 SDK 与风险模型定制。",
    "features.f1t": "控制流加固",
    "features.f1d": "通过控制流变换提高静态分析复杂度。",
    "features.f2t": "字符串保护",
    "features.f2d": "降低敏感常量的明文暴露风险。",
    "features.f3t": "兼容性优先",
    "features.f3d": "尽量保持 ABI 与运行时行为稳定。",
    "workflow.title": "流程",
    "workflow.s1t": "准备源码",
    "workflow.s1d": "将 SDK 整理成可独立构建的 Framework 工程。",
    "workflow.s2t": "确认范围",
    "workflow.s2d": "标注敏感模块/函数与性能约束。",
    "workflow.s3t": "加固处理",
    "workflow.s3d": "执行保护策略并验证构建产物。",
    "workflow.s4t": "交付验收",
    "workflow.s4d": "交付加固后的 Framework + 验证截图。",
    "req.title": "要求",
    "req.noticeTitle": "重要提示",
    "req.noticeDesc": "本服务为手动加固：必须提供源码。不支持仅提供二进制产物进行加固。",
    "req.xcodeTitle": "支持的 Xcode 版本",
    "req.xcodeLatest": "(最新版)",
    "req.r1": "提供完整源码与可编译工程。",
    "req.r2": "建议只加固核心 Framework，而不是整个 App。",
    "req.r3": "构建路径避免空格/中文等特殊字符。",
    "req.r4": "建议使用 New Build System。",
    "req.r5": "支持 Intel (x86_64) / ARM 架构 Mac。",
    "req.r6": "建议使用 C/C++ 编写核心代码。",
    "req.sampleTitle": "邮件内容建议",
    "effects.title": "效果展示",
    "effects.desc": "示例截图（可替换为最新报告）。",
    "effects.i1": "控制流",
    "effects.i2": "反编译",
    "effects.i3": "字符串",
    "effects.i4": "原始 Mach-O",
    "effects.i5": "VMP",
    "faq.title": "常见问题",
    "faq.q1": "支持只给二进制加固吗？",
    "faq.a1": "不支持。我们需要源码进行编译期保护。",
    "faq.q2": "能加固整个 App 吗？",
    "faq.a2": "建议只加固核心 Framework 以降低集成风险。",
    "faq.q3": "交付内容是什么？",
    "faq.a3": "加固后的 Framework、接入说明与效果截图。",
    "contact.title": "联系",
    "contact.emailLabel": "邮箱",
    "contact.hint": "请提供项目范围与 Xcode 版本信息，我们会在 24 小时内回复。",
    "footer.back": "返回经典页面"
  },
  en: {
    "nav.title": "Overview",
    "nav.note": "Compile-time protection for iOS SDK source",
    "nav.overview": "Overview",
    "nav.features": "Features",
    "nav.workflow": "Workflow",
    "nav.requirements": "Requirements",
    "nav.effects": "Protection effects",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "pill.manual": "Manual service",
    "pill.source": "Source required",
    "hero.kicker": "iOS SDK Source Protection",
    "hero.title": "Protect what matters: your SDK logic",
    "hero.desc": "iGuard provides compile-time protection for iOS framework source code. We offer a manual hardening service to increase reverse engineering cost while keeping runtime behavior unchanged.",
    "callouts.c1t": "Source-first",
    "callouts.c1d": "Works on source code. No binary-only hardening.",
    "callouts.c2t": "Targeted",
    "callouts.c2d": "Focus on core frameworks, minimize integration risk.",
    "callouts.c3t": "Report",
    "callouts.c3d": "Provide effect screenshots and verification notes.",
    "hero.primary": "Contact",
    "hero.secondary": "See features",
    "features.title": "Features",
    "features.desc": "Multiple layers of protection. Choose what you need for your SDK and threat model.",
    "features.f1t": "Control-flow hardening",
    "features.f1d": "Increase analysis complexity via control-flow transformations.",
    "features.f2t": "String protection",
    "features.f2d": "Reduce plaintext exposure of sensitive constants.",
    "features.f3t": "Compatibility-focused",
    "features.f3d": "Designed to keep ABI and runtime behavior stable.",
    "workflow.title": "Workflow",
    "workflow.s1t": "Prepare source",
    "workflow.s1d": "Package your SDK as a standalone framework project.",
    "workflow.s2t": "Define scope",
    "workflow.s2d": "Mark sensitive modules/functions and performance constraints.",
    "workflow.s3t": "Hardening",
    "workflow.s3d": "Apply protection strategy and validate build output.",
    "workflow.s4t": "Delivery",
    "workflow.s4d": "Ship hardened framework + verification screenshots.",
    "req.title": "Requirements",
    "req.noticeTitle": "Important",
    "req.noticeDesc": "This is a manual service. You must provide source code. We do not harden binary-only artifacts.",
    "req.xcodeTitle": "Supported Xcode versions",
    "req.xcodeLatest": "(Latest)",
    "req.r1": "Provide full source code and buildable project.",
    "req.r2": "Prefer protecting core frameworks, not the whole app.",
    "req.r3": "Avoid spaces / non-ASCII characters in build paths.",
    "req.r4": "New Build System recommended.",
    "req.r5": "Support Intel (x86_64) / ARM architecture Mac.",
    "req.r6": "Recommend using C/C++ for core code.",
    "req.sampleTitle": "What to send",
    "effects.title": "Protection effects",
    "effects.desc": "Example screenshots (replace with your latest).",
    "effects.i1": "Control-flow",
    "effects.i2": "Decompile",
    "effects.i3": "Strings",
    "effects.i4": "Original Mach-O",
    "effects.i5": "VMP",
    "faq.title": "FAQ",
    "faq.q1": "Do you support binary-only protection?",
    "faq.a1": "No. We require source code to apply compile-time protection.",
    "faq.q2": "Can you protect the whole app?",
    "faq.a2": "We recommend protecting core frameworks to reduce integration risk.",
    "faq.q3": "What do I receive?",
    "faq.a3": "A hardened framework, integration notes, and effect screenshots.",
    "contact.title": "Contact",
    "contact.emailLabel": "Email",
    "contact.hint": "Share your project scope and Xcode version. We’ll reply within 24 hours.",
    "footer.back": "Back to classic page"
  }
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    if (k && dict[k] != null) el.textContent = dict[k];
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
}

function initLang() {
  const fromQuery = getQueryLang();
  const fromStorage = localStorage.getItem('iguard_lang');
  const lang = fromQuery || (fromStorage === 'zh' || fromStorage === 'en' ? fromStorage : 'zh');

  localStorage.setItem('iguard_lang', lang);
  setQueryLang(lang);
  applyLang(lang);
}

function initMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const btn = document.getElementById('mobileMenuBtn');
  if (!sidebar || !btn) return;

  const close = () => sidebar.classList.remove('is-open');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('is-open');
  });
  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('is-open') && !sidebar.contains(e.target) && e.target !== btn) close();
  });
  // 点击导航项后延迟关闭，让滚动动画先执行
  sidebar.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => {
      setTimeout(close, 150);
    });
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 960) close(); });
}

function initScrollSpy() {
  const navItems = Array.from(document.querySelectorAll('.nav-item'));
  const sections = navItems
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (sections.length === 0) return;

  const setActive = (id) => {
    navItems.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
  };

  const obs = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible && visible.target && visible.target.id) setActive(visible.target.id);
  }, { rootMargin: "-20% 0px -70% 0px", threshold: [0.05, 0.2, 0.4] });

  sections.forEach((s) => obs.observe(s));
  setActive(sections[0].id);
}

function initImageModal() {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.img-modal-close');
  const images = document.querySelectorAll('.img-card img');

  if (!modal || !modalImg || !closeBtn) return;

  images.forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      modal.classList.add('show');
      modalImg.src = this.src;
      const figcaption = this.closest('.img-card')?.querySelector('figcaption');
      modalCaption.textContent = figcaption?.textContent || this.alt || 'Image';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initMobileSidebar();
  initScrollSpy();
  initImageModal();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang === 'en' ? 'en' : 'zh';
      localStorage.setItem('iguard_lang', lang);
      setQueryLang(lang);
      applyLang(lang);
    });
  });
});

