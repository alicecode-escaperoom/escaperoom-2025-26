(function () {
  // Derive the project root from this script's own URL so links work
  // regardless of which room folder the page lives in.
  const root = (document.currentScript || {}).src
    ? document.currentScript.src.replace(/devmenu\.js.*$/, '')
    : '';

  const pages = [
    ['🏠 Start',           'index.html'],
    ['🎈 Room 1 — Balloons', 'room1-balloons/fiveBalloonsStart.html'],
    ['👻 Room 2 — Horror',   'room2-horror/findakey.html'],
    ['📚 Room 3 — Book',     'room3-book/mainRoom.html'],
    ['💍 Room 4 — Wedding',  'room4-wedding/index.html'],
    ['🎉 Finish',            'escapeRoomFinish.html'],
  ];

  const panel = document.createElement('div');
  panel.style.cssText = [
    'display:none', 'position:fixed', 'bottom:52px', 'right:12px', 'z-index:2147483647',
    'background:rgba(20,20,20,0.92)', 'color:#e8e8e8', 'padding:12px 16px',
    'border-radius:10px', 'font:13px/1.7 monospace', 'min-width:230px',
    'box-shadow:0 4px 24px rgba(0,0,0,0.6)', 'backdrop-filter:blur(4px)',
  ].join(';');

  panel.innerHTML =
    '<div style="font-size:11px;opacity:.55;margin-bottom:6px;border-bottom:1px solid #444;padding-bottom:5px">' +
    '⚡ DEV — skip to room &nbsp;<span style="opacity:.6">(` to toggle)</span></div>' +
    pages.map(([label, path]) =>
      `<a href="${root}${path}" style="display:block;color:#6cf;text-decoration:none;padding:1px 0">${label}</a>`
    ).join('');

  const btn = document.createElement('button');
  btn.textContent = '⚡';
  btn.title = 'Dev menu  (` to toggle)';
  btn.style.cssText = [
    'position:fixed', 'bottom:12px', 'right:12px', 'z-index:2147483647',
    'width:30px', 'height:30px', 'border-radius:50%', 'border:none',
    'background:rgba(0,0,0,0.3)', 'color:#fff', 'font-size:14px',
    'cursor:pointer', 'opacity:0.35', 'transition:opacity .2s', 'line-height:1',
  ].join(';');

  function show(visible) {
    panel.style.display = visible ? 'block' : 'none';
    btn.style.opacity   = visible ? '1' : '0.35';
  }

  btn.addEventListener('mouseenter', () => btn.style.opacity = '1');
  btn.addEventListener('mouseleave', () => { if (panel.style.display === 'none') btn.style.opacity = '0.35'; });
  btn.addEventListener('click', (e) => { e.stopPropagation(); show(panel.style.display === 'none'); });

  document.addEventListener('keydown', (e) => { if (e.key === '`') show(panel.style.display === 'none'); });
  document.addEventListener('click',   (e) => { if (!panel.contains(e.target) && e.target !== btn) show(false); });

  function mount() {
    document.body.appendChild(panel);
    document.body.appendChild(btn);
  }
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', mount)
    : mount();
})();
