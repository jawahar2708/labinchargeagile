/**
 * global.js — RPLMS Lab In-Charge Portal
 * SCOPE: Sidebar rendering, Topbar rendering, shared utility functions.
 * NO mock data lives here — data belongs in each page's own JS file.
 */

// ── LocalStorage DB helpers ──────────────────────────────────────────────────
function getDB() {
    try {
        return JSON.parse(localStorage.getItem('rplms_db')) || {};
    } catch (e) {
        return {};
    }
}

function setDB(db) {
    localStorage.setItem('rplms_db', JSON.stringify(db));
}

// ── Sidebar & Topbar Layout Renderer ────────────────────────────────────────
function renderBaseLayout(activeMenu) {
    const db = getDB();
    const user = (db && db.currentUser) ? db.currentUser : { name: 'Lab Incharge', role: 'Lab Incharge' };

    // Calculate user initials
    const nameWithoutTitle = user.name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, '');
    const nameParts = nameWithoutTitle.split(/\s+/).filter(Boolean);
    let userInitials = 'LI';
    if (nameParts.length > 0) {
        userInitials = nameParts.map(p => p[0]).join('').substring(0, 2).toUpperCase();
    }

    // ── Render Sidebar ──────────────────────────────────────────────────────
    const sidebarEl = document.querySelector('.sidebar');
    if (sidebarEl) {
        sidebarEl.innerHTML = `
      <div class="sidebar-top">
        <div class="logo-container">
          <span class="logo-title">Prototrack</span>
          <span class="logo-subtitle">Rapid Prototyping Lab</span>
        </div>
        <div class="sidebar-category">Lab In-charge Portal</div>
        <ul class="nav-links">
          <li class="nav-item ${activeMenu === 'dashboard' ? 'active' : ''}">
            <a href="index.html">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
              Dashboard
            </a>
          </li>
          <li class="nav-item ${activeMenu === 'teams' ? 'active' : ''}">
            <a href="teams.html">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Team Workspace
            </a>
          </li>
          <li class="nav-item ${activeMenu === 'inventory' ? 'active' : ''}">
            <a href="inventory.html">
              <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              Lab Asset Management
            </a>
          </li>
          <li class="nav-item ${activeMenu === 'material-requests' ? 'active' : ''}">
            <a href="material-requests.html">
              <svg viewBox="0 0 24 24"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
              Component Requests
            </a>
          </li>
          <li class="nav-item ${activeMenu === 'material-returns' ? 'active' : ''}">
            <a href="material-returns.html">
              <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="9 15 11 17 15 13"></polyline></svg>
              Component Returns
            </a>
          </li>
          <li class="nav-item ${activeMenu === 'equipment-tracking' ? 'active' : ''}">
            <a href="equipment-tracking.html">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Equipment Tracking
            </a>
          </li>
          <li class="nav-item ${activeMenu === 'low-stock' ? 'active' : ''}">
            <a href="low-stock.html">
              <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              Low Stock Alerts
            </a>
          </li>
          <li class="nav-item ${activeMenu === 'tickets' ? 'active' : ''}">
            <a href="tickets.html">
              <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Ticket Management
            </a>
          </li>
          <li class="nav-item ${activeMenu === 'profile' ? 'active' : ''}">
            <a href="myprofile.html">
              <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Profile
            </a>
          </li>
        </ul>
      </div>
      <div class="sidebar-bottom">
        <ul class="logout-nav">
          <li class="nav-item">
            <a href="#" id="sidebarLogoutLink">
              <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Logout
            </a>
          </li>
        </ul>
      </div>
    `;

        // Attach logout click
        const logoutBtn = document.getElementById('sidebarLogoutLink');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function (e) {
                e.preventDefault();
                showLogoutConfirmation();
            });
        }
    }

    // ── Render Header / Topbar ──────────────────────────────────────────────
    const headerEl = document.querySelector('.header');
    if (headerEl) {
        const pageTitleEl = headerEl.querySelector('.page-title');
        const pageTitle = pageTitleEl ? pageTitleEl.textContent.trim() : 'Dashboard';

        const badgeEl = headerEl.querySelector('.icon-badge');
        const badgeCount = badgeEl ? badgeEl.textContent.trim() : '0';

        headerEl.innerHTML = `
      <div class="header-left">
        <h1 class="page-title">${pageTitle}</h1>
      </div>
      <div class="header-right">
        <div class="notif-wrapper">
          <button class="header-icon-btn" id="notifBellBtn">
            <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            <span class="icon-badge">${badgeCount}</span>
          </button>
          <div class="notifications-dropdown"></div>
        </div>
        <div class="header-user-profile">
          <div class="header-avatar">${userInitials}</div>
          <div class="header-user-info">
            <span class="header-user-name">${user.name}</span>
            <span class="header-user-role">LAB IN-CHARGE</span>
          </div>
        </div>
      </div>
    `;

        // ── Notifications Dropdown ──────────────────────────────────────────
        function buildNotificationsDropdown() {
            const dbNow = getDB();
            const notifs = (dbNow && dbNow.notifications) ? dbNow.notifications : [];
            const unreadCount = notifs.filter(n => n.unread).length;

            const badge = document.querySelector('.notif-wrapper .icon-badge');
            if (badge) {
                badge.textContent = unreadCount;
                badge.style.display = unreadCount > 0 ? '' : 'none';
            }

            const dropdown = document.querySelector('.notifications-dropdown');
            if (!dropdown) return;

            const listHtml = notifs.length === 0
                ? `<div class="notif-empty"><span class="notif-empty-icon"><i data-lucide=\"bell\"></i></span>No notifications yet</div>`
                : notifs.map(n => `
                    <div class="notif-item ${n.unread ? 'unread' : ''}" data-notif-id="${n.id}">
                        <div class="notif-icon-wrapper ${n.iconClass}">${n.icon}</div>
                        <div class="notif-content">
                            <div class="notif-body">${n.body}</div>
                            <div class="notif-time">${n.time}</div>
                        </div>
                    </div>`).join('');

            dropdown.innerHTML = `
                <div class="notif-header">
                    <div class="notif-header-title">
                        Notifications
                        ${unreadCount > 0 ? `<span class="notif-count-badge">${unreadCount}</span>` : ''}
                    </div>
                    ${unreadCount > 0 ? '<button class="notif-header-action" id="markAllReadBtn">Mark all read</button>' : ''}
                </div>
                <div class="notif-list">${listHtml}</div>
            `;

            const markAllBtn = dropdown.querySelector('#markAllReadBtn');
            if (markAllBtn) {
                markAllBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const db2 = getDB();
                    if (db2.notifications) db2.notifications.forEach(n => n.unread = false);
                    setDB(db2);
                    buildNotificationsDropdown();
                });
            }

            dropdown.querySelectorAll('.notif-item').forEach(el => {
                el.addEventListener('click', () => {
                    const id = el.dataset.notifId;
                    const db2 = getDB();
                    if (db2.notifications) {
                        const notif = db2.notifications.find(n => n.id === id);
                        if (notif) { notif.unread = false; setDB(db2); }
                    }
                    buildNotificationsDropdown();
                });
            });
        }

        const bellBtn = document.querySelector('.notif-wrapper .header-icon-btn');
        const notifDropdown = document.querySelector('.notifications-dropdown');
        if (bellBtn && notifDropdown) {
            bellBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = notifDropdown.classList.toggle('open');
                if (isOpen) buildNotificationsDropdown();
            });

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.notif-wrapper')) {
                    notifDropdown.classList.remove('open');
                }
            });

            buildNotificationsDropdown();
        }
    }

    // ── Lucide Icons ─────────────────────────────────────────────────────────
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ── Toast notification ───────────────────────────────────────────────────────
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = '<i data-lucide=\"check\"></i>';
    if (type === 'error') icon = '<i data-lucide=\"triangle-alert\"></i>';
    if (type === 'warn')  icon = '<i data-lucide=\"info\"></i>';
    if (type === 'info')  icon = '<i data-lucide=\"info\"></i>';

    toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close">&times;</button>
  `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    const autoClose = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);

    toast.querySelector('.toast-close').addEventListener('click', () => {
        clearTimeout(autoClose);
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    });
}

// ── Confirmation Modal ───────────────────────────────────────────────────────
function createConfirmationModal(title, bodyText, confirmCallback, confirmText = 'Confirm', isDanger = false) {
    let backdrop = document.getElementById('confirmModalBackdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'confirmModalBackdrop';
        backdrop.className = 'modal-backdrop';
        document.body.appendChild(backdrop);
    }

    backdrop.innerHTML = `
    <div class="modal-container global-style-df925c">
      <div class="modal-header global-style-5c52b3">
        <div class="modal-header-left">
          <div class="circle-icon-wrapper ${isDanger ? 'red-alert' : 'blue-info'} global-style-26ebab">
            ${isDanger ? '<i data-lucide=\"triangle-alert\"></i>' : '<i data-lucide=\"info\"></i>'}
          </div>
          <div class="card-header-text">
            <span class="card-title">${title}</span>
          </div>
        </div>
        <button class="modal-close-btn" id="confirmModalClose">&times;</button>
      </div>
      <div class="modal-body global-style-1479c4">
        ${bodyText}
      </div>
      <div class="modal-footer global-style-2df922">
        <button class="btn btn-secondary" id="confirmCancelBtn" class="global-style-af56eb">Cancel</button>
        <button class="btn ${isDanger ? 'btn-danger' : 'btn-primary'}" id="confirmConfirmBtn" class="global-style-af56eb">${confirmText}</button>
      </div>
    </div>
  `;

    const escapeHandler = (e) => { if (e.key === 'Escape') closeConfirm(); };

    function openConfirm() {
        backdrop.classList.add('show');
        document.addEventListener('keydown', escapeHandler);
    }

    function closeConfirm() {
        backdrop.classList.remove('show');
        document.removeEventListener('keydown', escapeHandler);
        setTimeout(() => backdrop.remove(), 300);
    }

    backdrop.querySelector('#confirmModalClose').addEventListener('click', closeConfirm);
    backdrop.querySelector('#confirmCancelBtn').addEventListener('click', closeConfirm);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeConfirm(); });
    backdrop.querySelector('#confirmConfirmBtn').addEventListener('click', () => {
        confirmCallback();
        closeConfirm();
    });

    openConfirm();
}

// ── Logout confirmation ──────────────────────────────────────────────────────
function showLogoutConfirmation() {
    createConfirmationModal(
        'Confirm Logout',
        'Are you sure you want to sign out of the system?',
        () => {
            localStorage.removeItem('rplms_logged_in');
            showToast('Logged out successfully.', 'success');
            setTimeout(() => { window.location.href = 'index.html'; }, 1000);
        },
        'Logout',
        true
    );
}

// ── Utility helpers ──────────────────────────────────────────────────────────
function debounce(func, delay = 300) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, function (match) {
        switch (match) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case "'": return '&#39;';
        }
    });
}

function hasSqlInfectionRisk(str) {
    if (typeof str !== 'string') return false;
    const sqlRegex = /\b(select|insert|update|delete|drop|alter|union|where|exec|truncate)\b/gi;
    return sqlRegex.test(str);
}

// ── MutationObserver for dynamically added Lucide Icons ──────────────────────
document.addEventListener("DOMContentLoaded", () => {
    if (typeof lucide !== 'undefined') {
        let timeout;
        const observer = new MutationObserver((mutations) => {
            let shouldUpdate = false;
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    shouldUpdate = true;
                    break;
                }
            }
            if (shouldUpdate) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    observer.disconnect();
                    lucide.createIcons();
                    observer.observe(document.body, { childList: true, subtree: true });
                }, 50);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
});
