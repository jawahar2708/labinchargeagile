// material-requests.js
// Component Requests page – mock data initialisation + full page logic

document.addEventListener("DOMContentLoaded", () => {

    // ── 1. Initialise / seed localStorage with mock data from DEFAULT_DATABASE ──
    (function seedData() {
        const db = getDB();

        // Seed materialRequests if not present or empty
        if (!db.materialRequests || db.materialRequests.length === 0) {
            const seed = [
                { id: "REQ-001", teamId: "TEAM-001", teamName: "Solar Car Project",           item: "Li-ion Battery 18650",       avail: 30, qty: 24, status: "Fully Issued",    date: "2025-07-02", slot: "2.00-3.00" },
                { id: "REQ-002", teamId: "TEAM-005", teamName: "Smart Irrigation System",     item: "Soil Moisture Sensor",       avail: 30, qty: 5,  status: "Pending",        date: "2025-07-03", slot: "2.00-3.00" },
                { id: "REQ-003", teamId: "TEAM-003", teamName: "Bio-Sensor Systems",          item: "Arduino Uno R3",             avail: 30, qty: 3,  status: "Fully Issued",   date: "2025-07-01", slot: "2.00-3.00" },
                { id: "REQ-004", teamId: "TEAM-011", teamName: "Robotics Arm Team",           item: "DC Motor 12V",               avail: 30, qty: 6,  status: "Rejected",       date: "2025-06-30", slot: "2.00-3.00" },
                { id: "REQ-005", teamId: "TEAM-002", teamName: "Drone Flight Tech",           item: "LiPo Battery 11.1V",         avail: 30, qty: 4,  status: "Pending",        date: "2025-07-03", slot: "2.00-3.00" },
                { id: "REQ-006", teamId: "TEAM-008", teamName: "3D Prosthetic Hand",          item: "Bipolar NEMA 17",            avail: 30, qty: 10, status: "Fully Issued",   date: "2025-06-28", slot: "2.00-3.00" },
                { id: "REQ-007", teamId: "TEAM-009", teamName: "Autonomous AGV",              item: "Arduino Uno R3",             avail: 30, qty: 2,  status: "Pending",        date: "2025-07-04", slot: "2.00-3.00" },
                { id: "REQ-008", teamId: "TEAM-015", teamName: "Waste Management",            item: "Ultrasonic Sensor",          avail: 30, qty: 4,  status: "Fully Issued",   date: "2025-06-27", slot: "2.00-3.00" },
                { id: "REQ-009", teamId: "TEAM-001", teamName: "Solar Car Project",           item: "Raspberry Pi 4",             avail: 30, qty: 2,  status: "Pending",        date: "2025-07-05", slot: "2.00-3.00" },
                { id: "REQ-010", teamId: "TEAM-002", teamName: "Drone Flight Tech",           item: "PIR Motion Sensor",          avail: 30, qty: 6,  status: "Fully Issued",   date: "2025-06-29", slot: "2.00-3.00" },
                { id: "REQ-011", teamId: "TEAM-003", teamName: "Bio-Sensor Systems",          item: "16x2 LCD Display",           avail: 30, qty: 4,  status: "Pending",        date: "2025-07-05", slot: "2.00-3.00" },
                { id: "REQ-012", teamId: "TEAM-004", teamName: "Haptic Arm Development",      item: "Bipolar NEMA 17",            avail: 30, qty: 3,  status: "Rejected",       date: "2025-06-26", slot: "2.00-3.00" },
                { id: "REQ-013", teamId: "TEAM-005", teamName: "Smart Irrigation System",     item: "Arduino Uno R3",             avail: 30, qty: 5,  status: "Fully Issued",   date: "2025-07-01", slot: "2.00-3.00" },
                { id: "REQ-014", teamId: "TEAM-006", teamName: "Eco Waste Sorter",            item: "Raspberry Pi 4",             avail: 30, qty: 1,  status: "Pending",        date: "2025-07-04", slot: "2.00-3.00" },
                { id: "REQ-015", teamId: "TEAM-006", teamName: "Eco Waste Sorter",            item: "Ultrasonic Sensor",          avail: 30, qty: 8,  status: "Fully Issued",   date: "2025-06-30", slot: "2.00-3.00" },
                { id: "REQ-016", teamId: "TEAM-007", teamName: "VTOL UAV Propulsion",         item: "LiPo Battery 11.1V",         avail: 30, qty: 6,  status: "Fully Issued",   date: "2025-07-02", slot: "2.00-3.00" },
                { id: "REQ-017", teamId: "TEAM-007", teamName: "VTOL UAV Propulsion",         item: "DC Motor 12V",               avail: 30, qty: 4,  status: "Pending",        date: "2025-07-05", slot: "2.00-3.00" },
                { id: "REQ-018", teamId: "TEAM-008", teamName: "3D Prosthetic Hand",          item: "Li-ion Battery 18650",       avail: 30, qty: 8,  status: "Pending",        date: "2025-07-04", slot: "2.00-3.00" },
                { id: "REQ-019", teamId: "TEAM-009", teamName: "Autonomous AGV",              item: "PIR Motion Sensor",          avail: 30, qty: 5,  status: "Fully Issued",   date: "2025-06-28", slot: "2.00-3.00" },
                { id: "REQ-020", teamId: "TEAM-010", teamName: "Water Purifier IoT",          item: "Soil Moisture Sensor",       avail: 30, qty: 6,  status: "Fully Issued",   date: "2025-07-01", slot: "2.00-3.00" },
                { id: "REQ-021", teamId: "TEAM-010", teamName: "Water Purifier IoT",          item: "Arduino Uno R3",             avail: 30, qty: 2,  status: "Pending",        date: "2025-07-05", slot: "2.00-3.00" },
                { id: "REQ-022", teamId: "TEAM-011", teamName: "Robotics Arm Team",           item: "Bipolar NEMA 17",            avail: 30, qty: 8,  status: "Fully Issued",   date: "2025-07-03", slot: "2.00-3.00" },
                { id: "REQ-023", teamId: "TEAM-012", teamName: "Smart Traffic Guard",         item: "Raspberry Pi 4",             avail: 30, qty: 2,  status: "Fully Issued",   date: "2025-06-29", slot: "2.00-3.00" },
                { id: "REQ-024", teamId: "TEAM-012", teamName: "Smart Traffic Guard",         item: "PIR Motion Sensor",          avail: 30, qty: 10, status: "Pending",        date: "2025-07-04", slot: "2.00-3.00" },
                { id: "REQ-025", teamId: "TEAM-013", teamName: "Ocean Cleaner Probe",         item: "DC Motor 12V",               avail: 30, qty: 3,  status: "Fully Issued",   date: "2025-07-02", slot: "2.00-3.00" },
                { id: "REQ-026", teamId: "TEAM-013", teamName: "Ocean Cleaner Probe",         item: "Li-ion Battery 18650",       avail: 30, qty: 12, status: "Pending",        date: "2025-07-05", slot: "2.00-3.00" },
                { id: "REQ-027", teamId: "TEAM-014", teamName: "RFID Warehouse Robot",        item: "Arduino Uno R3",             avail: 30, qty: 4,  status: "Fully Issued",   date: "2025-06-30", slot: "2.00-3.00" },
                { id: "REQ-028", teamId: "TEAM-014", teamName: "RFID Warehouse Robot",        item: "16x2 LCD Display",           avail: 30, qty: 6,  status: "Rejected",       date: "2025-06-27", slot: "2.00-3.00" },
                { id: "REQ-029", teamId: "TEAM-015", teamName: "Waste Management",            item: "Soil Moisture Sensor",       avail: 30, qty: 5,  status: "Pending",        date: "2025-07-03", slot: "2.00-3.00" },
                { id: "REQ-030", teamId: "TEAM-004", teamName: "Haptic Arm Development",      item: "16x2 LCD Display",           avail: 30, qty: 2,  status: "Pending",        date: "2025-07-05", slot: "2.00-3.00" },
                { id: "REQ-031", teamId: "TEAM-016", teamName: "Exoskeleton Suit",            item: "Bipolar NEMA 17",            avail: 30, qty: 6,  status: "Fully Issued",   date: "2025-07-03", slot: "2.00-3.00" },
                { id: "REQ-032", teamId: "TEAM-016", teamName: "Exoskeleton Suit",            item: "Arduino Uno R3",             avail: 30, qty: 3,  status: "Pending",        date: "2025-07-06", slot: "2.00-3.00" },
                { id: "REQ-033", teamId: "TEAM-017", teamName: "Nano Filtration Unit",        item: "Soil Moisture Sensor",       avail: 30, qty: 8,  status: "Fully Issued",   date: "2025-07-02", slot: "2.00-3.00" },
                { id: "REQ-034", teamId: "TEAM-017", teamName: "Nano Filtration Unit",        item: "DC Motor 12V",               avail: 30, qty: 2,  status: "Pending",        date: "2025-07-06", slot: "2.00-3.00" },
                { id: "REQ-035", teamId: "TEAM-018", teamName: "AI Crop Monitor",             item: "Raspberry Pi 4",             avail: 30, qty: 3,  status: "Fully Issued",   date: "2025-07-04", slot: "2.00-3.00" },
                { id: "REQ-036", teamId: "TEAM-018", teamName: "AI Crop Monitor",             item: "PIR Motion Sensor",          avail: 30, qty: 6,  status: "Pending",        date: "2025-07-06", slot: "2.00-3.00" },
                { id: "REQ-037", teamId: "TEAM-019", teamName: "Swarm Robotics Lab",          item: "Arduino Uno R3",             avail: 30, qty: 8,  status: "Fully Issued",   date: "2025-07-03", slot: "2.00-3.00" },
                { id: "REQ-038", teamId: "TEAM-019", teamName: "Swarm Robotics Lab",          item: "LiPo Battery 11.1V",         avail: 30, qty: 5,  status: "Pending",        date: "2025-07-06", slot: "2.00-3.00" },
                { id: "REQ-039", teamId: "TEAM-020", teamName: "EV Charging Station",         item: "Li-ion Battery 18650",       avail: 30, qty: 20, status: "Fully Issued",   date: "2025-07-04", slot: "2.00-3.00" },
                { id: "REQ-040", teamId: "TEAM-020", teamName: "EV Charging Station",         item: "Variable DC Power Supply",   avail: 30, qty: 1,  status: "Pending",        date: "2025-07-06", slot: "2.00-3.00" },
                { id: "REQ-041", teamId: "TEAM-021", teamName: "Underwater ROV",              item: "DC Motor 12V",               avail: 30, qty: 4,  status: "Fully Issued",   date: "2025-07-03", slot: "2.00-3.00" },
                { id: "REQ-042", teamId: "TEAM-021", teamName: "Underwater ROV",              item: "Raspberry Pi 4",             avail: 30, qty: 2,  status: "Pending",        date: "2025-07-06", slot: "2.00-3.00" }
            ];
            db.materialRequests = seed;
            setDB(db);
        }

        // Normalise any lingering "Approved" statuses (migration compat)
        let changed = false;
        db.materialRequests.forEach(req => {
            if (req.status === "Approved") { req.status = "Fully Issued"; changed = true; }
        });
        if (changed) setDB(db);
    })();

    // ── 2. Inject sidebar & header ──────────────────────────────────────────────
    renderBaseLayout("material-requests");

    // ── 3. Page state ───────────────────────────────────────────────────────────
    let db = getDB();

    let currentFilters = { status: "All", search: "" };
    let sortField = "id";
    let sortOrder = "asc";
    let currentPage = 1;
    const itemsPerPage = 20;

    // ── 4. DOM refs ─────────────────────────────────────────────────────────────
    const tableBody          = document.getElementById("requestsTableBody");
    const tableInfo          = document.getElementById("requestsTableInfo");
    const paginationContainer = document.getElementById("requestsPagination");
    const searchInput        = document.getElementById("searchRequestsInput");
    const filterTabs         = document.querySelectorAll(".filter-tab");

    const kpiTotal   = document.getElementById("kpiTotalRequests");
    const kpiPending = document.getElementById("kpiPendingRequests");
    const kpiApproved = document.getElementById("kpiApprovedRequests");

    // ── 5. KPI update ───────────────────────────────────────────────────────────
    function updateKPIs() {
        const list = getDB().materialRequests;
        kpiTotal.textContent   = String(list.length).padStart(2, "0");
        kpiPending.textContent = String(list.filter(r => r.status === "Partially Issued").length).padStart(2, "0");
        kpiApproved.textContent = String(list.filter(r => r.status === "Fully Issued").length).padStart(2, "0");
    }

    // ── 6. Table render ─────────────────────────────────────────────────────────
    function renderTable() {
        // Show skeleton while "loading"
        tableBody.innerHTML = `
            <tr>
                <td class="skeleton" style="height:48px;border-bottom:8px solid white;"></td>
                <td class="skeleton" style="height:48px;border-bottom:8px solid white;"></td>
                <td class="skeleton" style="height:48px;border-bottom:8px solid white;"></td>
                <td class="skeleton" style="height:48px;border-bottom:8px solid white;"></td>
                <td class="skeleton" style="height:48px;border-bottom:8px solid white;"></td>
                <td class="skeleton" style="height:48px;border-bottom:8px solid white;"></td>
                <td class="skeleton" style="height:48px;border-bottom:8px solid white;"></td>
                <td class="skeleton" style="height:48px;border-bottom:8px solid white;"></td>
            </tr>`;

        setTimeout(() => {
            db = getDB();
            // 1. Filter
            let filtered = db.materialRequests.filter(item => {
                const matchStatus = currentFilters.status === "All" || item.status === currentFilters.status;
                const s = currentFilters.search.toLowerCase();
                const matchSearch = !s ||
                    item.teamName.toLowerCase().includes(s) ||
                    item.id.toLowerCase().includes(s) ||
                    item.item.toLowerCase().includes(s) ||
                    item.teamId.toLowerCase().includes(s);
                return matchStatus && matchSearch;
            });

            // 2. Sort
            filtered.sort((a, b) => {
                let vA = sortField === "qty" ? Number(a[sortField]) : String(a[sortField]).toLowerCase();
                let vB = sortField === "qty" ? Number(b[sortField]) : String(b[sortField]).toLowerCase();
                if (vA < vB) return sortOrder === "asc" ? -1 : 1;
                if (vA > vB) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });

            // 3. Paginate
            const total      = filtered.length;
            const totalPages = Math.ceil(total / itemsPerPage) || 1;
            if (currentPage > totalPages) currentPage = totalPages;
            const start      = (currentPage - 1) * itemsPerPage;
            const end        = Math.min(start + itemsPerPage, total);
            const page       = filtered.slice(start, end);

            if (page.length === 0) {
                tableBody.innerHTML = `
                    <tr>
                        <td colspan="8" style="text-align:center;padding:48px 16px;">
                            <div class="empty-state">
                                <span class="empty-state-icon">&#9998;</span>
                                <span class="empty-state-title">No Requests Found</span>
                                <p class="empty-state-desc">No requests match the current filters.</p>
                            </div>
                        </td>
                    </tr>`;
                tableInfo.textContent = "Showing 0 to 0 of 0 entries";
                renderPagination(1, 1);
                return;
            }

            tableBody.innerHTML = page.map(req => {
                let badgeClass = "status-progress";
                if (req.status === "Fully Issued")      badgeClass = "status-resolved";
                else if (req.status === "Rejected")     badgeClass = "priority-high";
                else if (req.status === "Partially Issued") badgeClass = "status-progress";

                const isActionable = req.status !== "Fully Issued" && req.status !== "Rejected";
                const actionsHtml  = isActionable
                    ? `<div style="display:flex;gap:8px;">
                            <button class="btn-view" onclick="approveRequest('${req.id}','${escapeHtml(req.item)}')">Approve</button>
                            <button class="btn-view" style="color:#EF4444;border-color:var(--border-color);" onclick="rejectRequest('${req.id}','${escapeHtml(req.item)}')">Reject</button>
                        </div>`
                    : `<span style="color:var(--text-secondary);font-size:11px;font-weight:500;">No action required</span>`;

                const highPriorityHtml = (req.pendingQty > 0)
                    ? `<span class="priority-badge">HIGH PRIORITY</span>`
                    : "";

                return `
                    <tr>
                        <td style="font-weight:700;">${req.id}</td>
                        <td style="font-weight:700;">${req.teamId}</td>
                        <td><a href="teams.html" class="team-link">${req.teamName}</a></td>
                        <td style="font-weight:600;">${req.item}</td>
                        <td>
                            <div style="font-weight:600;">Requested : ${req.qty}</div>
                            <div style="font-size:11px;color:#16A34A;margin-top:4px;">Issued : ${req.issuedQty || 0}</div>
                            <div style="font-size:11px;color:#F59E0B;margin-top:4px;">Pending : ${req.pendingQty ?? req.qty}</div>
                            ${highPriorityHtml}
                        </td>
                        <td>${req.date}</td>
                        <td><span class="badge ${badgeClass}">${req.status}</span></td>
                        <td>${actionsHtml}</td>
                    </tr>`;
            }).join("");

            tableInfo.textContent = `Showing ${start + 1} to ${end} of ${total} entries`;
            renderPagination(currentPage, totalPages);
        }, 200);
    }

    // ── 7. Pagination ───────────────────────────────────────────────────────────
    function renderPagination(current, total) {
        paginationContainer.innerHTML = "";

        const prevLi = document.createElement("li");
        prevLi.className = `page-item ${current === 1 ? "disabled" : ""}`;
        prevLi.innerHTML = `<button class="page-link" ${current === 1 ? "disabled" : ""}>&lt;</button>`;
        if (current > 1) prevLi.querySelector("button").addEventListener("click", () => { currentPage--; renderTable(); });
        paginationContainer.appendChild(prevLi);

        for (let i = 1; i <= total; i++) {
            const li = document.createElement("li");
            li.className = `page-item ${current === i ? "active" : ""}`;
            li.innerHTML = `<button class="page-link">${i}</button>`;
            li.querySelector("button").addEventListener("click", () => { currentPage = i; renderTable(); });
            paginationContainer.appendChild(li);
        }

        const nextLi = document.createElement("li");
        nextLi.className = `page-item ${current === total ? "disabled" : ""}`;
        nextLi.innerHTML = `<button class="page-link" ${current === total ? "disabled" : ""}>&gt;</button>`;
        if (current < total) nextLi.querySelector("button").addEventListener("click", () => { currentPage++; renderTable(); });
        paginationContainer.appendChild(nextLi);
    }

    // ── 8. Actions ──────────────────────────────────────────────────────────────
    window.approveRequest = function (id, itemName) {
        db = getDB();
        const req = db.materialRequests.find(r => r.id === id);
        if (!req) return;

        if (!req.issuedQty) req.issuedQty = 0;
        if (req.pendingQty === undefined) req.pendingQty = req.qty;

        const modal = document.getElementById("issueModal");
        document.getElementById("issueItem").textContent      = itemName;
        document.getElementById("issueAvailable").textContent = req.avail;
        document.getElementById("issueRequested").textContent = req.qty;
        document.getElementById("issueIssued").textContent    = req.issuedQty;
        document.getElementById("issuePending").textContent   = req.pendingQty;
        document.getElementById("issueQtyInput").value        = "";

        modal.classList.add("show");

        document.getElementById("confirmIssueBtn").onclick = () => {
            const issueQty = Number(document.getElementById("issueQtyInput").value);
            if (isNaN(issueQty) || issueQty <= 0 || issueQty > req.pendingQty) {
                showToast(`Please enter quantity between 1 and ${req.pendingQty}`, "error");
                return;
            }
            req.issuedQty   += issueQty;
            req.pendingQty   = req.qty - req.issuedQty;
            req.status       = req.pendingQty > 0 ? "Partially Issued" : "Fully Issued";

            setDB(db);
            modal.classList.remove("show");
            updateKPIs();
            renderTable();
            showToast("Material issued successfully", "success");
        };
    };

    window.closeIssueModal = function () {
        document.getElementById("issueModal").classList.remove("show");
    };

    window.rejectRequest = function (id, itemName) {
        createConfirmationModal(
            "Reject Material Request",
            `Are you sure you want to reject <strong>${id}</strong> for <strong>${itemName}</strong>?`,
            () => {
                db = getDB();
                const req = db.materialRequests.find(r => r.id === id);
                if (!req) return;
                req.status = "Rejected";
                setDB(db);
                updateKPIs();
                renderTable();
                showToast(`Request ${id} rejected.`, "info");
            },
            "Reject Request",
            true
        );
    };

    // ── 9. Search & filter listeners ────────────────────────────────────────────
    searchInput.addEventListener("input", debounce(e => {
        currentFilters.search = e.target.value.trim();
        currentPage = 1;
        renderTable();
    }, 250));

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentFilters.status = tab.dataset.status;
            currentPage = 1;
            renderTable();
        });
    });

    document.querySelectorAll(".sortable").forEach(th => {
        th.addEventListener("click", () => {
            const field = th.dataset.sort;
            if (sortField === field) sortOrder = sortOrder === "asc" ? "desc" : "asc";
            else { sortField = field; sortOrder = "asc"; }
            renderTable();
        });
    });

    // ── 10. Initial render ──────────────────────────────────────────────────────
    updateKPIs();
    renderTable();
});
