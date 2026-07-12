/* ================================================================
   index.js  —  Dashboard page logic
   Rule: initialise mock data, call renderBaseLayout, then run UI.
   ================================================================ */

// ── 1. Seed mock data into localStorage (only if not already set) ──
(function seedDashboardData() {
    const DB_VERSION = 12;
    const storedVersion = parseInt(localStorage.getItem('rplms_db_version') || '0');
    if (storedVersion >= DB_VERSION) return; // global.js already seeded or newer

    // Helper: offset days from today
    function daysFromToday(n) {
        const d = new Date();
        d.setDate(d.getDate() + n);
        return d.toISOString().slice(0, 10);
    }

    const DEFAULT_DATABASE = {
        currentUser: {
            username: 'priya.sharma@rplms.com',
            name: 'Dr. Priya Sharma',
            role: 'Lab Incharge',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
            status: 'Online',
            location: 'Main Lab Complex',
            timezone: 'IST (UTC+5:30)',
            email: 'priya.sharma@rplms.com',
            phone: '+91 98765 43210'
        },

        notifications: [
            { id: 'NTF-001', icon: '📦', iconClass: 'notif-icon-request', body: 'TEAM-001 has submitted a new component request for Arduino Mega boards.', time: '2 min ago', unread: true },
            { id: 'NTF-002', icon: '⏰', iconClass: 'notif-icon-overdue', body: 'TEAM-006 has 1 overdue equipment return — Raspberry Pi 4 (EQ-011).', time: '18 min ago', unread: true },
            { id: 'NTF-003', icon: '🎫', iconClass: 'notif-icon-ticket', body: 'New damage ticket TKT-007 raised by TEAM-002 for Digital Oscilloscope.', time: '1 hr ago', unread: true },
            { id: 'NTF-004', icon: '✅', iconClass: 'notif-icon-info', body: 'Component request REQ-012 for resistors was approved and marked fulfilled.', time: '3 hrs ago', unread: false },
            { id: 'NTF-005', icon: '📋', iconClass: 'notif-icon-request', body: 'TEAM-005 submitted a material return for Soldering Station (EQ-012).', time: '5 hrs ago', unread: false },
            { id: 'NTF-006', icon: '⚠️', iconClass: 'notif-icon-overdue', body: 'Inventory alert: 3D Printer (EQ-001) maintenance is due this week.', time: 'Yesterday', unread: false }
        ],

        teams: [
            { id: 'TEAM-001', name: 'Solar Car Project', leader: 'Anil Mehta', membersCount: 8, activeProjects: 2, status: 'Active' },
            { id: 'TEAM-002', name: 'Drone Flight Tech', leader: 'Vikas Pillai', membersCount: 5, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-003', name: 'Bio-Sensor Systems', leader: 'Sarah Khan', membersCount: 6, activeProjects: 2, status: 'Active' },
            { id: 'TEAM-004', name: 'Haptic Arm Development', leader: 'John Doe', membersCount: 4, activeProjects: 1, status: 'Suspended' },
            { id: 'TEAM-005', name: 'Smart Irrigation System', leader: 'Rajesh Kumar', membersCount: 7, activeProjects: 2, status: 'Active' },
            { id: 'TEAM-006', name: 'Eco Waste sorter', leader: 'Deepa Nair', membersCount: 6, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-007', name: 'VTOL UAV Propulsion', leader: 'Karan Johar', membersCount: 9, activeProjects: 3, status: 'Active' },
            { id: 'TEAM-008', name: '3D Prosthetic Hand', leader: 'Aditi Rao', membersCount: 5, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-009', name: 'Autonomous AGV', leader: 'Sanjay Dutt', membersCount: 6, activeProjects: 2, status: 'Active' },
            { id: 'TEAM-010', name: 'Water Purifier IoT', leader: 'Rita Sen', membersCount: 4, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-011', name: 'Robotics Arm Team', leader: 'Preeti Zinta', membersCount: 7, activeProjects: 2, status: 'Active' },
            { id: 'TEAM-012', name: 'Smart Traffic Guard', leader: 'Amir Khan', membersCount: 5, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-013', name: 'Ocean Cleaner Probe', leader: 'Shruti Roy', membersCount: 8, activeProjects: 2, status: 'Active' },
            { id: 'TEAM-014', name: 'RFID Warehouse Robot', leader: 'Abhay Singh', membersCount: 6, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-015', name: 'Waste Management', leader: 'Nikhil Joshi', membersCount: 7, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-016', name: 'Exoskeleton Suit', leader: 'Meera Iyer', membersCount: 6, activeProjects: 2, status: 'Active' },
            { id: 'TEAM-017', name: 'Nano Filtration Unit', leader: 'Arjun Verma', membersCount: 5, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-018', name: 'AI Crop Monitor', leader: 'Pooja Reddy', membersCount: 7, activeProjects: 2, status: 'Active' },
            { id: 'TEAM-019', name: 'Swarm Robotics Lab', leader: 'Farhan Qureshi', membersCount: 8, activeProjects: 3, status: 'Active' },
            { id: 'TEAM-020', name: 'EV Charging Station', leader: 'Kavya Menon', membersCount: 6, activeProjects: 1, status: 'Active' },
            { id: 'TEAM-021', name: 'Underwater ROV', leader: 'Rohan Desai', membersCount: 5, activeProjects: 2, status: 'Active' }
        ],

        inventory: [
            { id: 'EQ-001', name: '3D Printer', type: 'Equipment', manufacturer: 'Creality', model: 'Ender-3 V2', serial: 'CRL-3DV2-2024-1125', location: 'Mechanical Lab', status: 'Available', dateAdded: '2025-06-15', description: 'FDM 3D printer used for rapid prototyping and model making.' },
            { id: 'EQ-002', name: 'Arduino Uno R3', type: 'Component', manufacturer: 'Arduino', model: 'Uno Rev 3', serial: 'ARD-UNO-99382', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-01-10', description: 'Microcontroller board based on the ATmega328P.' },
            { id: 'EQ-003', name: 'Ultrasonic Sensor', type: 'Component', manufacturer: 'Elegoo', model: 'HC-SR04', serial: 'EL-HC-2092', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-02-14', description: 'Ultrasonic distance sensor module.' },
            { id: 'EQ-004', name: 'Soil Moisture Sensor', type: 'Component', manufacturer: 'Generic', model: 'YL-69', serial: 'GEN-YL-77291', location: 'Bio Lab', status: 'Available', dateAdded: '2025-03-01', description: 'Resistance-based soil moisture measurement probe.' },
            { id: 'EQ-005', name: 'CNC Milling Machine', type: 'Equipment', manufacturer: 'SainSmart', model: 'Genmitsu 3018-PRO', serial: 'CNC-GEN-8827', location: 'Mechanical Lab', status: 'Maintenance', dateAdded: '2025-04-18', description: 'Desktop CNC router for wood, acrylic, and PCB engraving.' },
            { id: 'EQ-006', name: 'Digital Oscilloscope', type: 'Equipment', manufacturer: 'Rigol', model: 'DS1202Z-E', serial: 'RIG-DS-44932', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-02-28', description: '200 MHz, 2-channel digital storage oscilloscope.' },
            { id: 'EQ-007', name: 'DC Motor 12V', type: 'Component', manufacturer: 'Generic', model: 'RS-555', serial: 'GEN-DC-38291', location: 'Mechanical Lab', status: 'Available', dateAdded: '2025-05-02', description: 'High torque 12V DC motor.' },
            { id: 'EQ-008', name: '16x2 LCD Display', type: 'Component', manufacturer: 'Generic', model: 'HD44780', serial: 'GEN-LCD-10293', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-03-12', description: 'Alpha-numeric display module with purple backlight.' },
            { id: 'EQ-009', name: 'Li-ion Battery 18650', type: 'Component', manufacturer: 'Samsung', model: '25R 2500mAh', serial: 'SAM-186-8291', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-04-05', description: 'High-discharge rechargeable lithium-ion cell.' },
            { id: 'EQ-010', name: 'Laser Cutter', type: 'Equipment', manufacturer: 'Ortur', model: 'Laser Master 2 Pro', serial: 'ORT-LM2-88271', location: 'Mechanical Lab', status: 'Available', dateAdded: '2025-05-20', description: 'Diode laser engraving and cutting machine.' },
            { id: 'EQ-011', name: 'Raspberry Pi 4', type: 'Component', manufacturer: 'Raspberry Pi', model: 'Model B 8GB', serial: 'RPi4-8G-0029', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-01-16', description: 'Single board computer with 8GB RAM.' },
            { id: 'EQ-012', name: 'Soldering Station', type: 'Equipment', manufacturer: 'Hakko', model: 'FX-888D', serial: 'HAK-FX-2023', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-02-05', description: 'Digital soldering station with temperature control.' },
            { id: 'EQ-013', name: 'Bench Multimeter', type: 'Equipment', manufacturer: 'Fluke', model: '8808A', serial: 'FLU-88-82910', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-03-24', description: '5.5 digit precision benchtop digital multimeter.' },
            { id: 'EQ-014', name: 'Bipolar NEMA 17', type: 'Component', manufacturer: 'Stepperonline', model: '17HS19', serial: 'STEP-N17-3829', location: 'Mechanical Lab', status: 'Available', dateAdded: '2025-04-11', description: 'High-torque stepper motor for CNC/3D Printers.' },
            { id: 'EQ-015', name: 'LiPo Battery 11.1V', type: 'Component', manufacturer: 'Tattu', model: '2200mAh 3S 45C', serial: 'TAT-LIPO-223', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-05-30', description: 'Lithium polymer pack for drones and RC vehicles.' },
            { id: 'EQ-016', name: 'Hot Air Rework Station', type: 'Equipment', manufacturer: 'Quick', model: '861DW', serial: 'QUI-861-9021', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-02-12', description: '1000W professional lead-free hot air rework station.' },
            { id: 'EQ-017', name: 'PIR Motion Sensor', type: 'Component', manufacturer: 'Adafruit', model: 'HC-SR501', serial: 'ADA-PIR-3329', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-03-10', description: 'Pyroelectric infrared motion detection module.' },
            { id: 'EQ-018', name: 'Variable DC Power Supply', type: 'Equipment', manufacturer: 'Korado', model: 'KA3005D', serial: 'KOR-PWR-3829', location: 'Electronics Lab', status: 'Available', dateAdded: '2025-02-22', description: 'Precision programmable DC linear power supply, 30V/5A.' },
            { id: 'EQ-019', name: '3D Scanner', type: 'Equipment', manufacturer: 'EinScan', model: 'SE V2', serial: 'EIN-SCAN-4822', location: 'Mechanical Lab', status: 'Available', dateAdded: '2025-06-02', description: 'Desktop white light 3D scanner for modeling.' },
            { id: 'EQ-020', name: 'Co2 Laser Tube', type: 'Component', manufacturer: 'RECI', model: 'W2 90W', serial: 'REC-CO2-9902', location: 'Mechanical Lab', status: 'Repairing', dateAdded: '2025-05-15', description: 'CO2 glass laser tube replacement part.' }
        ],

        materialRequests: [
            { id: 'REQ-001', teamId: 'TEAM-001', teamName: 'Solar Car Project', item: 'Li-ion Battery 18650', avail: 30, qty: 24, status: 'Fully Issued', date: '2025-07-02', slot: '2.00-3.00' },
            { id: 'REQ-002', teamId: 'TEAM-005', teamName: 'Smart Irrigation System', item: 'Soil Moisture Sensor', avail: 30, qty: 5, status: 'Pending', date: '2025-07-03', slot: '2.00-3.00' },
            { id: 'REQ-003', teamId: 'TEAM-003', teamName: 'Bio-Sensor Systems', item: 'Arduino Uno R3', avail: 30, qty: 3, status: 'Fully Issued', date: '2025-07-01', slot: '2.00-3.00' },
            { id: 'REQ-004', teamId: 'TEAM-011', teamName: 'Robotics Arm Team', item: 'DC Motor 12V', avail: 30, qty: 6, status: 'Rejected', date: '2025-06-30', slot: '2.00-3.00' },
            { id: 'REQ-005', teamId: 'TEAM-002', teamName: 'Drone Flight Tech', item: 'LiPo Battery 11.1V', avail: 30, qty: 4, status: 'Pending', date: '2025-07-03', slot: '2.00-3.00' },
            { id: 'REQ-006', teamId: 'TEAM-008', teamName: '3D Prosthetic Hand', item: 'Bipolar NEMA 17', avail: 30, qty: 10, status: 'Fully Issued', date: '2025-06-28', slot: '2.00-3.00' },
            { id: 'REQ-007', teamId: 'TEAM-009', teamName: 'Autonomous AGV', item: 'Arduino Uno R3', avail: 30, qty: 2, status: 'Pending', date: '2025-07-04', slot: '2.00-3.00' },
            { id: 'REQ-008', teamId: 'TEAM-015', teamName: 'Waste Management', item: 'Ultrasonic Sensor', avail: 30, qty: 4, status: 'Fully Issued', date: '2025-06-27', slot: '2.00-3.00' },
            { id: 'REQ-009', teamId: 'TEAM-001', teamName: 'Solar Car Project', item: 'Raspberry Pi 4', avail: 30, qty: 2, status: 'Pending', date: '2025-07-05', slot: '2.00-3.00' },
            { id: 'REQ-010', teamId: 'TEAM-002', teamName: 'Drone Flight Tech', item: 'PIR Motion Sensor', avail: 30, qty: 6, status: 'Fully Issued', date: '2025-06-29', slot: '2.00-3.00' },
            { id: 'REQ-011', teamId: 'TEAM-003', teamName: 'Bio-Sensor Systems', item: '16x2 LCD Display', avail: 30, qty: 4, status: 'Pending', date: '2025-07-05', slot: '2.00-3.00' },
            { id: 'REQ-012', teamId: 'TEAM-004', teamName: 'Haptic Arm Development', item: 'Bipolar NEMA 17', avail: 30, qty: 3, status: 'Rejected', date: '2025-06-26', slot: '2.00-3.00' }
        ],

        materialReturns: (function () {
            function daysFromToday(n) {
                const d = new Date();
                d.setDate(d.getDate() + n);
                return d.toISOString().slice(0, 10);
            }
            return [
                { id: 'RET-001', teamId: 'TEAM-001', teamName: 'Solar Car Project', item: 'Digital Oscilloscope', qty: 1, status: 'Returned', date: daysFromToday(-4) },
                { id: 'RET-002', teamId: 'TEAM-003', teamName: 'Bio-Sensor Systems', item: 'Bench Multimeter', qty: 1, status: 'Overdue', date: daysFromToday(-10) },
                { id: 'RET-003', teamId: 'TEAM-005', teamName: 'Smart Irrigation System', item: 'Soldering Station', qty: 2, status: 'Assigned', date: daysFromToday(10) },
                { id: 'RET-004', teamId: 'TEAM-011', teamName: 'Robotics Arm Team', item: 'Variable DC Power Supply', qty: 1, status: 'Assigned', date: daysFromToday(7) },
                { id: 'RET-005', teamId: 'TEAM-002', teamName: 'Drone Flight Tech', item: 'Soldering Station', qty: 1, status: 'Returned', date: daysFromToday(-3) },
                { id: 'RET-006', teamId: 'TEAM-001', teamName: 'Solar Car Project', item: '3D Printer', qty: 1, status: 'Overdue', date: daysFromToday(-7) },
                { id: 'RET-007', teamId: 'TEAM-002', teamName: 'Drone Flight Tech', item: 'Hot Air Rework Station', qty: 1, status: 'Overdue', date: daysFromToday(-11) },
                { id: 'RET-008', teamId: 'TEAM-004', teamName: 'Haptic Arm Development', item: 'Bench Multimeter', qty: 1, status: 'Overdue', date: daysFromToday(-13) },
                { id: 'RET-009', teamId: 'TEAM-006', teamName: 'Eco Waste Sorter', item: 'Soldering Station', qty: 1, status: 'Overdue', date: daysFromToday(-9) }
            ];
        })(),

        tickets: [
            { id: 'TKT-001', type: 'Procurement', assignedTo: 'Administrator', subject: 'Low Stock Components', priority: 'High', date: '04 Jul 2025', status: 'Open', assigneeRole: 'System Admin', raisedBy: 'Dr. Priya Sharma', time: '10:15 AM', reason: 'Multiple inventory components have reached the minimum stock level.', items: [{ name: 'Arduino Uno R3', qty: '05', min: '10' }], adminResponse: '' },
            { id: 'TKT-002', type: 'Damage', assignedTo: 'TEAM-005', subject: 'Arduino Uno R3 Damaged', priority: 'Medium', date: '03 Jul 2025', status: 'Pending', teamName: 'Smart Irrigation System', equipmentName: 'Arduino Uno R3', raisedBy: 'Lab Incharge', time: '02:15 PM', damageDescription: 'USB port is physically damaged during project testing.', fineAmount: '500', dueDate: '10 Jul 2025', remarks: 'Fine to be paid before next material issue.', teamResponse: '', lastUpdated: '03 Jul 2025, 02:15 PM' },
            { id: 'TKT-003', type: 'Damage', assignedTo: 'TEAM-011', subject: 'DC Motor 12V Broken', priority: 'High', date: '02 Jul 2025', status: 'In Progress', teamName: 'Robotics Arm', equipmentName: 'DC Motor 12V', raisedBy: 'Lab Incharge', time: '11:30 AM', damageDescription: 'Motor coil burned out due to overloading.', fineAmount: '300', dueDate: '09 Jul 2025', remarks: 'Replacement motor cost.', teamResponse: 'Discussing with team leader.', lastUpdated: '02 Jul 2025, 03:00 PM' },
            { id: 'TKT-004', type: 'Procurement', assignedTo: 'Administrator', subject: 'Request for Additional Sensors', priority: 'Medium', date: '01 Jul 2025', status: 'In Progress', assigneeRole: 'System Admin', raisedBy: 'Dr. Priya Sharma', time: '09:45 AM', reason: 'Additional sensors needed for upcoming workshop.', items: [{ name: 'Ultrasonic Sensor', qty: '15', min: '05' }], adminResponse: 'Quotation requested from vendor.' },
            { id: 'TKT-005', type: 'Damage', assignedTo: 'TEAM-008', subject: '16x2 LCD Display Cracked', priority: 'Low', date: '30 Jun 2025', status: 'Resolved', teamName: '3D Prosthetic Hand', equipmentName: '16x2 LCD Display', raisedBy: 'Lab Incharge', time: '04:00 PM', damageDescription: 'Screen cracked during mechanical assembly mounting.', fineAmount: '150', dueDate: '07 Jul 2025', remarks: 'Standard replacement fine.', teamResponse: 'Fine paid. Receipt number #88271.', lastUpdated: '01 Jul 2025, 10:20 AM' },
            { id: 'TKT-006', type: 'Procurement', assignedTo: 'Administrator', subject: 'Low Stock - Batteries', priority: 'High', date: '29 Jun 2025', status: 'Resolved', assigneeRole: 'System Admin', raisedBy: 'Dr. Priya Sharma', time: '11:20 AM', reason: 'Li-ion Battery stock critically low.', items: [{ name: 'Li-ion Battery 18650', qty: '02', min: '10' }], adminResponse: 'PO Issued. Delivery expected by next week.' },
            { id: 'TKT-007', type: 'Damage', assignedTo: 'TEAM-015', subject: 'Soil Moisture Sensor Damaged', priority: 'Medium', date: '28 Jun 2025', status: 'Open', teamName: 'Waste Management', equipmentName: 'Soil Moisture Sensor', raisedBy: 'Lab Incharge', time: '10:00 AM', damageDescription: 'Corrosion due to extended water immersion test without waterproofing cover.', fineAmount: '200', dueDate: '05 Jul 2025', remarks: 'Cost of sensor replacement.', teamResponse: '', lastUpdated: '28 Jun 2025, 10:00 AM' }
        ],

        bookedEquipment: [],
        equipmentRequests: []
    };

    localStorage.setItem('rplms_db', JSON.stringify(DEFAULT_DATABASE));
    localStorage.setItem('rplms_db_version', String(DB_VERSION));
})();

// ── 2. Render the base layout (sidebar + header) ──────────────────
renderBaseLayout('dashboard');

// ── 3. Dashboard page logic ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const db = getDB();

    // ── Banner ─────────────────────────────────────────────────────
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    document.getElementById('bannerGreeting').textContent = greeting;
    document.getElementById('bannerName').textContent = db.currentUser.name;

    const activeTeams = db.teams.filter(t => t.status === 'Active').length;
    const pendingReqs = db.materialRequests.filter(r => r.status === 'Pending').length;
    const overdueRets = db.materialReturns.filter(r => r.status === 'Overdue').length;
    const openTickets = db.tickets.filter(t => t.status !== 'Resolved').length;

    document.getElementById('pillTeams').textContent   = activeTeams;
    document.getElementById('pillPending').textContent = pendingReqs;
    document.getElementById('pillOverdue').textContent = overdueRets;
    document.getElementById('pillTickets').textContent = openTickets;

    // ── KPI Cards ─────────────────────────────────────────────────
    const totalInventory  = db.inventory.length;
    const unavailable     = db.inventory.filter(i => i.status === 'Maintenance' || i.status === 'Repairing').length;
    const available       = db.inventory.filter(i => i.status === 'Available').length;
    const reqsThisMonth   = db.materialRequests.length;
    const approvedReqs    = db.materialRequests.filter(r => r.status === 'Approved').length;
    const resolvedTickets = db.tickets.filter(t => t.status === 'Resolved').length;
    const totalTickets    = db.tickets.length;

    document.getElementById('kpiInventory').textContent   = String(totalInventory).padStart(2, '0');
    document.getElementById('kpiUnavailable').textContent = String(unavailable).padStart(2, '0');
    document.getElementById('kpiReqMonth').textContent    = String(reqsThisMonth).padStart(2, '0');
    document.getElementById('kpiResolved').textContent    = String(resolvedTickets).padStart(2, '0');

    document.getElementById('kpiBadge1').textContent = `${available} Available`;
    document.getElementById('kpiBadge2').textContent = `${unavailable} Items`;
    document.getElementById('kpiBadge3').textContent = `${approvedReqs} Approved`;
    document.getElementById('kpiBadge4').textContent = `${totalTickets} Total`;

    // ── Charts Initialization ──────────────────────────────────────────
    if (typeof ApexCharts !== 'undefined') {
        // 1. Inventory Health Donut Chart
        const invAvailable = db.inventory.filter(i => i.status === 'Available').length;
        const invMaintenance = db.inventory.filter(i => i.status === 'Maintenance').length;
        const invRepairing = db.inventory.filter(i => i.status === 'Repairing').length;

        const donutOptions = {
            series: [invAvailable, invMaintenance, invRepairing],
            chart: {
                type: 'donut',
                height: 280,
                fontFamily: "'Plus Jakarta Sans', sans-serif"
            },
            labels: ['Available', 'Maintenance', 'Repairing'],
            colors: ['#16A34A', '#F59E0B', '#EF4444'],
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%',
                        labels: {
                            show: true,
                            name: { fontSize: '12px' },
                            value: { fontSize: '24px', fontWeight: 800, color: '#0F172A' },
                            total: {
                                show: true,
                                showAlways: true,
                                label: 'Total',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                                }
                            }
                        }
                    }
                }
            },
            dataLabels: { enabled: false },
            legend: { position: 'bottom', fontSize: '13px', markers: { radius: 12 } },
            stroke: { show: true, colors: ['transparent'] }
        };

        const donutChart = new ApexCharts(document.querySelector("#inventoryDonutChart"), donutOptions);
        donutChart.render();

        // 2. Timeline Area Chart (Mock data for past 7 days)
        // Group returns and tickets by day (just mocking a trend for now)
        const categories = [];
        const returnsData = [];
        const ticketsData = [];
        
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            categories.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            
            // Random mock trend data to make it look active
            returnsData.push(Math.floor(Math.random() * 8) + 2);
            ticketsData.push(Math.floor(Math.random() * 5));
        }

        const areaOptions = {
            series: [{
                name: 'Material Returns',
                data: returnsData
            }, {
                name: 'Tickets Raised',
                data: ticketsData
            }],
            chart: {
                type: 'area',
                height: 280,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                toolbar: { show: false },
                zoom: { enabled: false }
            },
            colors: ['#4F3CF5', '#F59E0B'],
            dataLabels: { enabled: false },
            stroke: { curve: 'smooth', width: 2 },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.05,
                    stops: [0, 90, 100]
                }
            },
            xaxis: {
                categories: categories,
                axisBorder: { show: false },
                axisTicks: { show: false }
            },
            yaxis: { show: false }, // Cleaner look for dashboard
            grid: {
                borderColor: 'rgba(0,0,0,0.05)',
                strokeDashArray: 4,
                yaxis: { lines: { show: true } }
            },
            legend: { position: 'top', horizontalAlign: 'right', fontSize: '12px' }
        };

        const areaChart = new ApexCharts(document.querySelector("#timelineAreaChart"), areaOptions);
        areaChart.render();
    }

    // ── Dynamic Tables ─────────────────────────────────────────────────
    
    // Helper to get CSS class for status
    function getStatusClass(status) {
        const s = status.toLowerCase().replace(' ', '-');
        return `status-badge ${s}`;
    }

    // 1. Recent Material Requests (Top 5)
    const recentRequestsTbody = document.querySelector('#recentRequestsTable tbody');
    if (recentRequestsTbody) {
        // Sort requests by date descending (mock data has dates as YYYY-MM-DD)
        const sortedReqs = [...db.materialRequests].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
        
        let reqHTML = '';
        sortedReqs.forEach(req => {
            reqHTML += `
                <tr>
                    <td style="font-weight:600; color:#4F3CF5">${req.id}</td>
                    <td>${req.teamName}</td>
                    <td>${req.item}</td>
                    <td><span class="${getStatusClass(req.status)}">${req.status}</span></td>
                </tr>
            `;
        });
        recentRequestsTbody.innerHTML = reqHTML || '<tr><td colspan="4" style="text-align:center">No recent requests</td></tr>';
    }

    // 2. Action Needed (Overdue Returns + Open Tickets)
    const actionNeededTbody = document.querySelector('#actionNeededTable tbody');
    if (actionNeededTbody) {
        const actions = [];
        
        // Add Overdue returns
        db.materialReturns.filter(r => r.status === 'Overdue').forEach(r => {
            actions.push({
                type: 'Return',
                typeLabel: '<span class="overdue-dot"></span> Overdue',
                subject: r.item,
                entity: r.teamName,
                date: r.date // For sorting if needed, but we just list them
            });
        });
        
        // Add Open/In-Progress Tickets
        db.tickets.filter(t => t.status !== 'Resolved').forEach(t => {
            actions.push({
                type: 'Ticket',
                typeLabel: `<span class="status-badge ${getStatusClass(t.status)}">${t.status}</span>`,
                subject: t.subject,
                entity: t.raisedBy || t.teamName,
                date: t.date
            });
        });
        
        // Sort conceptually (or just display top 5)
        const topActions = actions.slice(0, 6);
        
        let actHTML = '';
        topActions.forEach(act => {
            actHTML += `
                <tr>
                    <td>${act.typeLabel}</td>
                    <td style="font-weight:600">${act.subject}</td>
                    <td style="color:var(--text-secondary)">${act.entity}</td>
                </tr>
            `;
        });
        actionNeededTbody.innerHTML = actHTML || '<tr><td colspan="3" style="text-align:center">No urgent actions needed</td></tr>';
    }
});
