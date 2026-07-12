const DEFAULT_DATABASE = {
    currentUser: {
        username: "priya.sharma@rplms.com",
        name: "Dr. Priya Sharma",
        role: "Lab Incharge",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
        status: "Online",
        location: "Main Lab Complex",
        timezone: "IST (UTC+5:30)",
        email: "priya.sharma@rplms.com",
        phone: "+91 98765 43210"
    },

    notifications: [
        { id: "NTF-001", icon: "<i data-lucide=\"package\"></i>", iconClass: "notif-icon-request", body: "TEAM-001 has submitted a new component request for Arduino Mega boards.", time: "2 min ago", unread: true },
        { id: "NTF-002", icon: "<i data-lucide=\"alarm-clock\"></i>", iconClass: "notif-icon-overdue", body: "TEAM-006 has 1 overdue equipment return — Raspberry Pi 4 (EQ-011).", time: "18 min ago", unread: true },
        { id: "NTF-003", icon: "<i data-lucide=\"ticket\"></i>", iconClass: "notif-icon-ticket", body: "New damage ticket TKT-007 raised by TEAM-002 for Digital Oscilloscope.", time: "1 hr ago", unread: true },
        { id: "NTF-004", icon: "<i data-lucide=\"check-circle\"></i>", iconClass: "notif-icon-info", body: "Component request REQ-012 for resistors was approved and marked fulfilled.", time: "3 hrs ago", unread: false },
        { id: "NTF-005", icon: "<i data-lucide=\"clipboard-list\"></i>", iconClass: "notif-icon-request", body: "TEAM-005 submitted a material return for Soldering Station (EQ-012).", time: "5 hrs ago", unread: false },
        { id: "NTF-006", icon: "<i data-lucide=\"triangle-alert\"></i>", iconClass: "notif-icon-overdue", body: "Inventory alert: 3D Printer (EQ-001) maintenance is due this week.", time: "Yesterday", unread: false }
    ],

    teams: [
        { id: "TEAM-001", name: "Solar Car Project", leader: "Anil Mehta", membersCount: 8, activeProjects: 2, status: "Active" },
        { id: "TEAM-002", name: "Drone Flight Tech", leader: "Vikas Pillai", membersCount: 5, activeProjects: 1, status: "Active" },
        { id: "TEAM-003", name: "Bio-Sensor Systems", leader: "Sarah Khan", membersCount: 6, activeProjects: 2, status: "Active" },
        { id: "TEAM-004", name: "Haptic Arm Development", leader: "John Doe", membersCount: 4, activeProjects: 1, status: "Suspended" },
        { id: "TEAM-005", name: "Smart Irrigation System", leader: "Rajesh Kumar", membersCount: 7, activeProjects: 2, status: "Active" },
        { id: "TEAM-006", name: "Eco Waste sorter", leader: "Deepa Nair", membersCount: 6, activeProjects: 1, status: "Active" },
        { id: "TEAM-007", name: "VTOL UAV Propulsion", leader: "Karan Johar", membersCount: 9, activeProjects: 3, status: "Active" },
        { id: "TEAM-008", name: "3D Prosthetic Hand", leader: "Aditi Rao", membersCount: 5, activeProjects: 1, status: "Active" },
        { id: "TEAM-009", name: "Autonomous AGV", leader: "Sanjay Dutt", membersCount: 6, activeProjects: 2, status: "Active" },
        { id: "TEAM-010", name: "Water Purifier IoT", leader: "Rita Sen", membersCount: 4, activeProjects: 1, status: "Active" },
        { id: "TEAM-011", name: "Robotics Arm Team", leader: "Preeti Zinta", membersCount: 7, activeProjects: 2, status: "Active" },
        { id: "TEAM-012", name: "Smart Traffic Guard", leader: "Amir Khan", membersCount: 5, activeProjects: 1, status: "Active" },
        { id: "TEAM-013", name: "Ocean Cleaner Probe", leader: "Shruti Roy", membersCount: 8, activeProjects: 2, status: "Active" },
        { id: "TEAM-014", name: "RFID Warehouse Robot", leader: "Abhay Singh", membersCount: 6, activeProjects: 1, status: "Active" },
        { id: "TEAM-015", name: "Waste Management", leader: "Nikhil Joshi", membersCount: 7, activeProjects: 1, status: "Active" },
        { id: "TEAM-016", name: "Exoskeleton Suit", leader: "Meera Iyer", membersCount: 6, activeProjects: 2, status: "Active" },
        { id: "TEAM-017", name: "Nano Filtration Unit", leader: "Arjun Verma", membersCount: 5, activeProjects: 1, status: "Active" },
        { id: "TEAM-018", name: "AI Crop Monitor", leader: "Pooja Reddy", membersCount: 7, activeProjects: 2, status: "Active" },
        { id: "TEAM-019", name: "Swarm Robotics Lab", leader: "Farhan Qureshi", membersCount: 8, activeProjects: 3, status: "Active" },
        { id: "TEAM-020", name: "EV Charging Station", leader: "Kavya Menon", membersCount: 6, activeProjects: 1, status: "Active" },
        { id: "TEAM-021", name: "Underwater ROV", leader: "Rohan Desai", membersCount: 5, activeProjects: 2, status: "Active" }
    ],
    equipment: [
        {
            sno: 1,
            eqpid: "EQP001",
            componentName: "3D Printer",
            make: "Creality",
            specification: "Ender 3 V2",
            totalCount: 3,
            componentType: "Manufacturing Equipment",
            lab: "Mechanical Lab",
            remarks: "Working Fine"
        },
        {
            sno: 2,
            eqpid: "EQP002",
            componentName: "Laser Cutter",
            make: "Ortur",
            specification: "Laser Master 2",
            totalCount: 10,
            componentType: "Manufacturing Equipment",
            lab: "Mechanical Lab",
            remarks: "Service Due"
        },
        {
            sno: 3,
            eqpid: "EQP003",
            componentName: "CNC Machine",
            make: "Genmitsu",
            specification: "3018-PRO",
            totalCount: 5,
            componentType: "Manufacturing Equipment",
            lab: "Manufacturing Lab",
            remarks: "Operational"
        }
    ],

    components: [
        {
            sno: 1,
            cid: "CID001",
            componentName: "Arduino Uno",
            make: "Arduino",
            specification: "ATmega328P",
            cost: 850,
            returnTimeline: "Project Completion",
            totalCount: 40,
            componentType: "Electronics",
            lab: "Embedded Lab",
            cupboard: "CUP-1",
            shelf1: "A1",
            count1: 20,
            shelf2: "A2",
            count2: 20,
            purpose: "Student Projects",
            comments: "Available"
        },
        {
            sno: 2,
            cid: "CID002",
            componentName: "Raspberry Pi 4",
            make: "Raspberry",
            specification: "8GB RAM",
            cost: 7000,
            returnTimeline: "Project Completion",
            totalCount: 15,
            componentType: "Embedded",
            lab: "IoT Lab",
            cupboard: "CUP-2",
            shelf1: "B1",
            count1: 8,
            shelf2: "B2",
            count2: 7,
            purpose: "Research",
            comments: "Limited"
        }
    ],

    tools: [
        {
            sno: 1,
            toolid: "T001",
            componentName: "Screw Driver Set",
            make: "Bosch",
            specification: "Professional Kit",
            cost: 2500,
            returnTimeline: "Daily",
            totalCount: 10,
            componentType: "Hand Tool",
            lab: "Mechanical Lab",
            cupboard: "CUP-5",
            shelf1: "A1",
            count1: 5,
            shelf2: "A2",
            count2: 5,
            purpose: "Maintenance",
            comments: "Good Condition"
        },
        {
            sno: 2,
            toolid: "T002",
            componentName: "Soldering Iron",
            make: "Hakko",
            specification: "60W",
            cost: 3200,
            returnTimeline: "Daily",
            totalCount: 12,
            componentType: "Electronic Tool",
            lab: "Embedded Lab",
            cupboard: "CUP-6",
            shelf1: "B1",
            count1: 6,
            shelf2: "B2",
            count2: 6,
            purpose: "PCB Assembly",
            comments: "Available"
        }
    ],

    inventory: [
        { id: "EQ-001", name: "3D Printer", type: "Equipment", manufacturer: "Creality", model: "Ender-3 V2", serial: "CRL-3DV2-2024-1125", location: "Mechanical Lab", status: "Available", dateAdded: "2025-06-15", description: "FDM 3D printer used for rapid prototyping and model making." },
        { id: "EQ-002", name: "Arduino Uno R3", type: "Component", manufacturer: "Arduino", model: "Uno Rev 3", serial: "ARD-UNO-99382", location: "Electronics Lab", status: "Available", dateAdded: "2025-01-10", description: "Microcontroller board based on the ATmega328P." },
        { id: "EQ-003", name: "Ultrasonic Sensor", type: "Component", manufacturer: "Elegoo", model: "HC-SR04", serial: "EL-HC-2092", location: "Electronics Lab", status: "Available", dateAdded: "2025-02-14", description: "Ultrasonic distance sensor module." },
        { id: "EQ-004", name: "Soil Moisture Sensor", type: "Component", manufacturer: "Generic", model: "YL-69", serial: "GEN-YL-77291", location: "Bio Lab", status: "Available", dateAdded: "2025-03-01", description: "Resistance-based soil moisture measurement probe." },
        { id: "EQ-005", name: "CNC Milling Machine", type: "Equipment", manufacturer: "SainSmart", model: "Genmitsu 3018-PRO", serial: "CNC-GEN-8827", location: "Mechanical Lab", status: "Maintenance", dateAdded: "2025-04-18", description: "Desktop CNC router for wood, acrylic, and PCB engraving." },
        { id: "EQ-006", name: "Digital Oscilloscope", type: "Equipment", manufacturer: "Rigol", model: "DS1202Z-E", serial: "RIG-DS-44932", location: "Electronics Lab", status: "Available", dateAdded: "2025-02-28", description: "200 MHz, 2-channel digital storage oscilloscope." },
        { id: "EQ-007", name: "DC Motor 12V", type: "Component", manufacturer: "Generic", model: "RS-555", serial: "GEN-DC-38291", location: "Mechanical Lab", status: "Available", dateAdded: "2025-05-02", description: "High torque 12V DC motor." },
        { id: "EQ-008", name: "16x2 LCD Display", type: "Component", manufacturer: "Generic", model: "HD44780", serial: "GEN-LCD-10293", location: "Electronics Lab", status: "Available", dateAdded: "2025-03-12", description: "Alpha-numeric display module with purple backlight." },
        { id: "EQ-009", name: "Li-ion Battery 18650", type: "Component", manufacturer: "Samsung", model: "25R 2500mAh", serial: "SAM-186-8291", location: "Electronics Lab", status: "Available", dateAdded: "2025-04-05", description: "High-discharge rechargeable lithium-ion cell." },
        { id: "EQ-010", name: "Laser Cutter", type: "Equipment", manufacturer: "Ortur", model: "Laser Master 2 Pro", serial: "ORT-LM2-88271", location: "Mechanical Lab", status: "Available", dateAdded: "2025-05-20", description: "Diode laser engraving and cutting machine." },
        { id: "EQ-011", name: "Raspberry Pi 4", type: "Component", manufacturer: "Raspberry Pi", model: "Model B 8GB", serial: "RPi4-8G-0029", location: "Electronics Lab", status: "Available", dateAdded: "2025-01-16", description: "Single board computer with 8GB RAM." },
        { id: "EQ-012", name: "Soldering Station", type: "Equipment", manufacturer: "Hakko", model: "FX-888D", serial: "HAK-FX-2023", location: "Electronics Lab", status: "Available", dateAdded: "2025-02-05", description: "Digital soldering station with temperature control." },
        { id: "EQ-013", name: "Bench Multimeter", type: "Equipment", manufacturer: "Fluke", model: "8808A", serial: "FLU-88-82910", location: "Electronics Lab", status: "Available", dateAdded: "2025-03-24", description: "5.5 digit precision benchtop digital multimeter." },
        { id: "EQ-014", name: "Bipolar NEMA 17", type: "Component", manufacturer: "Stepperonline", model: "17HS19", serial: "STEP-N17-3829", location: "Mechanical Lab", status: "Available", dateAdded: "2025-04-11", description: "High-torque stepper motor for CNC/3D Printers." },
        { id: "EQ-015", name: "LiPo Battery 11.1V", type: "Component", manufacturer: "Tattu", model: "2200mAh 3S 45C", serial: "TAT-LIPO-223", location: "Electronics Lab", status: "Available", dateAdded: "2025-05-30", description: "Lithium polymer pack for drones and RC vehicles." },
        { id: "EQ-016", name: "Hot Air Rework Station", type: "Equipment", manufacturer: "Quick", model: "861DW", serial: "QUI-861-9021", location: "Electronics Lab", status: "Available", dateAdded: "2025-02-12", description: "1000W professional lead-free hot air rework station." },
        { id: "EQ-017", name: "PIR Motion Sensor", type: "Component", manufacturer: "Adafruit", model: "HC-SR501", serial: "ADA-PIR-3329", location: "Electronics Lab", status: "Available", dateAdded: "2025-03-10", description: "Pyroelectric infrared motion detection module." },
        { id: "EQ-018", name: "Variable DC Power Supply", type: "Equipment", manufacturer: "Korado", model: "KA3005D", serial: "KOR-PWR-3829", location: "Electronics Lab", status: "Available", dateAdded: "2025-02-22", description: "Precision programmable DC linear power supply, 30V/5A." },
        { id: "EQ-019", name: "3D Scanner", type: "Equipment", manufacturer: "EinScan", model: "SE V2", serial: "EIN-SCAN-4822", location: "Mechanical Lab", status: "Available", dateAdded: "2025-06-02", description: "Desktop white light 3D scanner for modeling." },
        { id: "EQ-020", name: "Co2 Laser Tube", type: "Component", manufacturer: "RECI", model: "W2 90W", serial: "REC-CO2-9902", location: "Mechanical Lab", status: "Repairing", dateAdded: "2025-05-15", description: "CO2 glass laser tube replacement part." }
    ],

    materialRequests: [
        { id: "REQ-001", teamId: "TEAM-001", teamName: "Solar Car Project", item: "Li-ion Battery 18650", avail: 30, qty: 24, status: "Fully Issued", date: "2025-07-02", slot: "2.00-3.00" },
        { id: "REQ-002", teamId: "TEAM-005", teamName: "Smart Irrigation System", item: "Soil Moisture Sensor", avail: 30, qty: 5, status: "Pending", date: "2025-07-03", slot: "2.00-3.00" },
        { id: "REQ-003", teamId: "TEAM-003", teamName: "Bio-Sensor Systems", item: "Arduino Uno R3", avail: 30, qty: 3, status: "Fully Issued", date: "2025-07-01", slot: "2.00-3.00" },
        { id: "REQ-004", teamId: "TEAM-011", teamName: "Robotics Arm Team", item: "DC Motor 12V", avail: 30, qty: 6, status: "Rejected", date: "2025-06-30", slot: "2.00-3.00" },
        { id: "REQ-005", teamId: "TEAM-002", teamName: "Drone Flight Tech", item: "LiPo Battery 11.1V", avail: 30, qty: 4, status: "Pending", date: "2025-07-03", slot: "2.00-3.00" },
        { id: "REQ-006", teamId: "TEAM-008", teamName: "3D Prosthetic Hand", item: "Bipolar NEMA 17", avail: 30, qty: 10, status: "Fully Issued", date: "2025-06-28", slot: "2.00-3.00" },
        { id: "REQ-007", teamId: "TEAM-009", teamName: "Autonomous AGV", item: "Arduino Uno R3", avail: 30, qty: 2, status: "Pending", date: "2025-07-04", slot: "2.00-3.00" },
        { id: "REQ-008", teamId: "TEAM-015", teamName: "Waste Management", item: "Ultrasonic Sensor", avail: 30, qty: 4, status: "Fully Issued", date: "2025-06-27", slot: "2.00-3.00" },
        { id: "REQ-009", teamId: "TEAM-001", teamName: "Solar Car Project", item: "Raspberry Pi 4", avail: 30, qty: 2, status: "Pending", date: "2025-07-05", slot: "2.00-3.00" },
        { id: "REQ-010", teamId: "TEAM-002", teamName: "Drone Flight Tech", item: "PIR Motion Sensor", avail: 30, qty: 6, status: "Fully Issued", date: "2025-06-29", slot: "2.00-3.00" },
        { id: "REQ-011", teamId: "TEAM-003", teamName: "Bio-Sensor Systems", item: "16x2 LCD Display", avail: 30, qty: 4, status: "Pending", date: "2025-07-05", slot: "2.00-3.00" },
        { id: "REQ-012", teamId: "TEAM-004", teamName: "Haptic Arm Development", item: "Bipolar NEMA 17", avail: 30, qty: 3, status: "Rejected", date: "2025-06-26", slot: "2.00-3.00" },
        { id: "REQ-013", teamId: "TEAM-005", teamName: "Smart Irrigation System", item: "Arduino Uno R3", avail: 30, qty: 5, status: "Fully Issued", date: "2025-07-01", slot: "2.00-3.00" },
        { id: "REQ-014", teamId: "TEAM-006", teamName: "Eco Waste Sorter", item: "Raspberry Pi 4", avail: 30, qty: 1, status: "Pending", date: "2025-07-04", slot: "2.00-3.00" },
        { id: "REQ-015", teamId: "TEAM-006", teamName: "Eco Waste Sorter", item: "Ultrasonic Sensor", avail: 30, qty: 8, status: "Fully Issued", date: "2025-06-30", slot: "2.00-3.00" },
        { id: "REQ-016", teamId: "TEAM-007", teamName: "VTOL UAV Propulsion", item: "LiPo Battery 11.1V", avail: 30, qty: 6, status: "Fully Issued", date: "2025-07-02", slot: "2.00-3.00" },
        { id: "REQ-017", teamId: "TEAM-007", teamName: "VTOL UAV Propulsion", item: "DC Motor 12V", avail: 30, qty: 4, status: "Pending", date: "2025-07-05", slot: "2.00-3.00" },
        { id: "REQ-018", teamId: "TEAM-008", teamName: "3D Prosthetic Hand", item: "Li-ion Battery 18650", avail: 30, qty: 8, status: "Pending", date: "2025-07-04", slot: "2.00-3.00" },
        { id: "REQ-019", teamId: "TEAM-009", teamName: "Autonomous AGV", item: "PIR Motion Sensor", avail: 30, qty: 5, status: "Fully Issued", date: "2025-06-28", slot: "2.00-3.00" },
        { id: "REQ-020", teamId: "TEAM-010", teamName: "Water Purifier IoT", item: "Soil Moisture Sensor", avail: 30, qty: 6, status: "Fully Issued", date: "2025-07-01", slot: "2.00-3.00" },
        { id: "REQ-021", teamId: "TEAM-010", teamName: "Water Purifier IoT", item: "Arduino Uno R3", avail: 30, qty: 2, status: "Pending", date: "2025-07-05", slot: "2.00-3.00" },
        { id: "REQ-022", teamId: "TEAM-011", teamName: "Robotics Arm Team", item: "Bipolar NEMA 17", avail: 30, qty: 8, status: "Fully Issued", date: "2025-07-03", slot: "2.00-3.00" },
        { id: "REQ-023", teamId: "TEAM-012", teamName: "Smart Traffic Guard", item: "Raspberry Pi 4", avail: 30, qty: 2, status: "Fully Issued", date: "2025-06-29", slot: "2.00-3.00" },
        { id: "REQ-024", teamId: "TEAM-012", teamName: "Smart Traffic Guard", item: "PIR Motion Sensor", avail: 30, qty: 10, status: "Pending", date: "2025-07-04", slot: "2.00-3.00" },
        { id: "REQ-025", teamId: "TEAM-013", teamName: "Ocean Cleaner Probe", item: "DC Motor 12V", avail: 30, qty: 3, status: "Fully Issued", date: "2025-07-02", slot: "2.00-3.00" },
        { id: "REQ-026", teamId: "TEAM-013", teamName: "Ocean Cleaner Probe", item: "Li-ion Battery 18650", avail: 30, qty: 12, status: "Pending", date: "2025-07-05", slot: "2.00-3.00" },
        { id: "REQ-027", teamId: "TEAM-014", teamName: "RFID Warehouse Robot", item: "Arduino Uno R3", avail: 30, qty: 4, status: "Fully Issued", date: "2025-06-30", slot: "2.00-3.00" },
        { id: "REQ-028", teamId: "TEAM-014", teamName: "RFID Warehouse Robot", item: "16x2 LCD Display", avail: 30, qty: 6, status: "Rejected", date: "2025-06-27", slot: "2.00-3.00" },
        { id: "REQ-029", teamId: "TEAM-015", teamName: "Waste Management", item: "Soil Moisture Sensor", avail: 30, qty: 5, status: "Pending", date: "2025-07-03", slot: "2.00-3.00" },
        { id: "REQ-030", teamId: "TEAM-004", teamName: "Haptic Arm Development", item: "16x2 LCD Display", avail: 30, qty: 2, status: "Pending", date: "2025-07-05", slot: "2.00-3.00" },
        { id: "REQ-031", teamId: "TEAM-016", teamName: "Exoskeleton Suit", item: "Bipolar NEMA 17", avail: 30, qty: 6, status: "Fully Issued", date: "2025-07-03", slot: "2.00-3.00" },
        { id: "REQ-032", teamId: "TEAM-016", teamName: "Exoskeleton Suit", item: "Arduino Uno R3", avail: 30, qty: 3, status: "Pending", date: "2025-07-06", slot: "2.00-3.00" },
        { id: "REQ-033", teamId: "TEAM-017", teamName: "Nano Filtration Unit", item: "Soil Moisture Sensor", avail: 30, qty: 8, status: "Fully Issued", date: "2025-07-02", slot: "2.00-3.00" },
        { id: "REQ-034", teamId: "TEAM-017", teamName: "Nano Filtration Unit", item: "DC Motor 12V", avail: 30, qty: 2, status: "Pending", date: "2025-07-06", slot: "2.00-3.00" },
        { id: "REQ-035", teamId: "TEAM-018", teamName: "AI Crop Monitor", item: "Raspberry Pi 4", avail: 30, qty: 3, status: "Fully Issued", date: "2025-07-04", slot: "2.00-3.00" },
        { id: "REQ-036", teamId: "TEAM-018", teamName: "AI Crop Monitor", item: "PIR Motion Sensor", avail: 30, qty: 6, status: "Pending", date: "2025-07-06", slot: "2.00-3.00" },
        { id: "REQ-037", teamId: "TEAM-019", teamName: "Swarm Robotics Lab", item: "Arduino Uno R3", avail: 30, qty: 8, status: "Fully Issued", date: "2025-07-03", slot: "2.00-3.00" },
        { id: "REQ-038", teamId: "TEAM-019", teamName: "Swarm Robotics Lab", item: "LiPo Battery 11.1V", avail: 30, qty: 5, status: "Pending", date: "2025-07-06", slot: "2.00-3.00" },
        { id: "REQ-039", teamId: "TEAM-020", teamName: "EV Charging Station", item: "Li-ion Battery 18650", avail: 30, qty: 20, status: "Fully Issued", date: "2025-07-04", slot: "2.00-3.00" },
        { id: "REQ-040", teamId: "TEAM-020", teamName: "EV Charging Station", item: "Variable DC Power Supply", avail: 30, qty: 1, status: "Pending", date: "2025-07-06", slot: "2.00-3.00" },
        { id: "REQ-041", teamId: "TEAM-021", teamName: "Underwater ROV", item: "DC Motor 12V", avail: 30, qty: 4, status: "Fully Issued", date: "2025-07-03", slot: "2.00-3.00" },
        { id: "REQ-042", teamId: "TEAM-021", teamName: "Underwater ROV", item: "Raspberry Pi 4", avail: 30, qty: 2, status: "Pending", date: "2025-07-06", slot: "2.00-3.00" }
    ],

    materialReturns: (function () {
        // Helper: offset days from today
        function daysFromToday(n) {
            const d = new Date();
            d.setDate(d.getDate() + n);
            return d.toISOString().slice(0, 10);
        }
        return [
            { id: "RET-001", teamId: "TEAM-001", teamName: "Solar Car Project", item: "Digital Oscilloscope", qty: 1, status: "Returned", date: daysFromToday(-4) },
            { id: "RET-002", teamId: "TEAM-003", teamName: "Bio-Sensor Systems", item: "Bench Multimeter", qty: 1, status: "Overdue", date: daysFromToday(-10) },
            { id: "RET-003", teamId: "TEAM-005", teamName: "Smart Irrigation System", item: "Soldering Station", qty: 2, status: "Assigned", date: daysFromToday(10) },
            { id: "RET-004", teamId: "TEAM-011", teamName: "Robotics Arm Team", item: "Variable DC Power Supply", qty: 1, status: "Assigned", date: daysFromToday(7) },
            { id: "RET-005", teamId: "TEAM-002", teamName: "Drone Flight Tech", item: "Soldering Station", qty: 1, status: "Returned", date: daysFromToday(-3) },
            { id: "RET-006", teamId: "TEAM-013", teamName: "Ocean Cleaner Probe", item: "Bench Multimeter", qty: 1, status: "Assigned", date: daysFromToday(9) },
            { id: "RET-007", teamId: "TEAM-001", teamName: "Solar Car Project", item: "Laser Cutter", qty: 1, status: "Assigned", date: daysFromToday(8) },
            { id: "RET-008", teamId: "TEAM-001", teamName: "Solar Car Project", item: "3D Printer", qty: 1, status: "Overdue", date: daysFromToday(-7) },
            { id: "RET-009", teamId: "TEAM-002", teamName: "Drone Flight Tech", item: "Digital Oscilloscope", qty: 1, status: "Assigned", date: daysFromToday(6) },
            { id: "RET-010", teamId: "TEAM-002", teamName: "Drone Flight Tech", item: "Hot Air Rework Station", qty: 1, status: "Overdue", date: daysFromToday(-11) },
            { id: "RET-011", teamId: "TEAM-003", teamName: "Bio-Sensor Systems", item: "Soldering Station", qty: 1, status: "Assigned", date: daysFromToday(5) },
            { id: "RET-012", teamId: "TEAM-003", teamName: "Bio-Sensor Systems", item: "Variable DC Power Supply", qty: 1, status: "Returned", date: daysFromToday(-2) },
            { id: "RET-013", teamId: "TEAM-004", teamName: "Haptic Arm Development", item: "Bench Multimeter", qty: 1, status: "Overdue", date: daysFromToday(-13) },
            { id: "RET-014", teamId: "TEAM-005", teamName: "Smart Irrigation System", item: "Digital Oscilloscope", qty: 1, status: "Returned", date: daysFromToday(-1) },
            { id: "RET-015", teamId: "TEAM-005", teamName: "Smart Irrigation System", item: "3D Printer", qty: 1, status: "Assigned", date: daysFromToday(11) },
            { id: "RET-016", teamId: "TEAM-006", teamName: "Eco Waste Sorter", item: "Laser Cutter", qty: 1, status: "Assigned", date: daysFromToday(4) },
            { id: "RET-017", teamId: "TEAM-006", teamName: "Eco Waste Sorter", item: "Soldering Station", qty: 1, status: "Overdue", date: daysFromToday(-9) },
            { id: "RET-018", teamId: "TEAM-007", teamName: "VTOL UAV Propulsion", item: "CNC Milling Machine", qty: 1, status: "Assigned", date: daysFromToday(13) },
            { id: "RET-019", teamId: "TEAM-007", teamName: "VTOL UAV Propulsion", item: "3D Scanner", qty: 1, status: "Returned", date: daysFromToday(-5) },
            { id: "RET-020", teamId: "TEAM-007", teamName: "VTOL UAV Propulsion", item: "Hot Air Rework Station", qty: 1, status: "Overdue", date: daysFromToday(-12) },
            { id: "RET-021", teamId: "TEAM-008", teamName: "3D Prosthetic Hand", item: "3D Printer", qty: 1, status: "Assigned", date: daysFromToday(5) },
            { id: "RET-022", teamId: "TEAM-008", teamName: "3D Prosthetic Hand", item: "Soldering Station", qty: 1, status: "Returned", date: daysFromToday(-4) },
            { id: "RET-023", teamId: "TEAM-009", teamName: "Autonomous AGV", item: "Laser Cutter", qty: 1, status: "Assigned", date: daysFromToday(7) },
            { id: "RET-024", teamId: "TEAM-009", teamName: "Autonomous AGV", item: "Variable DC Power Supply", qty: 1, status: "Overdue", date: daysFromToday(-8) },
            { id: "RET-025", teamId: "TEAM-010", teamName: "Water Purifier IoT", item: "Bench Multimeter", qty: 1, status: "Assigned", date: daysFromToday(6) },
            { id: "RET-026", teamId: "TEAM-010", teamName: "Water Purifier IoT", item: "Soldering Station", qty: 1, status: "Returned", date: daysFromToday(-3) },
            { id: "RET-027", teamId: "TEAM-011", teamName: "Robotics Arm Team", item: "Digital Oscilloscope", qty: 1, status: "Overdue", date: daysFromToday(-6) },
            { id: "RET-028", teamId: "TEAM-012", teamName: "Smart Traffic Guard", item: "3D Printer", qty: 1, status: "Assigned", date: daysFromToday(9) },
            { id: "RET-029", teamId: "TEAM-012", teamName: "Smart Traffic Guard", item: "Bench Multimeter", qty: 1, status: "Returned", date: daysFromToday(-2) },
            { id: "RET-030", teamId: "TEAM-013", teamName: "Ocean Cleaner Probe", item: "Laser Cutter", qty: 1, status: "Overdue", date: daysFromToday(-5) },
            { id: "RET-031", teamId: "TEAM-014", teamName: "RFID Warehouse Robot", item: "Variable DC Power Supply", qty: 1, status: "Assigned", date: daysFromToday(8) },
            { id: "RET-032", teamId: "TEAM-014", teamName: "RFID Warehouse Robot", item: "Digital Oscilloscope", qty: 1, status: "Returned", date: daysFromToday(-1) },
            { id: "RET-033", teamId: "TEAM-015", teamName: "Waste Management", item: "Soldering Station", qty: 1, status: "Assigned", date: daysFromToday(10) },
            { id: "RET-034", teamId: "TEAM-015", teamName: "Waste Management", item: "Hot Air Rework Station", qty: 1, status: "Overdue", date: daysFromToday(-10) },
            { id: "RET-035", teamId: "TEAM-016", teamName: "Exoskeleton Suit", item: "Variable DC Power Supply", qty: 1, status: "Assigned", date: daysFromToday(11) },
            { id: "RET-036", teamId: "TEAM-016", teamName: "Exoskeleton Suit", item: "Soldering Station", qty: 1, status: "Overdue", date: daysFromToday(-7) },
            { id: "RET-037", teamId: "TEAM-017", teamName: "Nano Filtration Unit", item: "Bench Multimeter", qty: 1, status: "Assigned", date: daysFromToday(9) },
            { id: "RET-038", teamId: "TEAM-017", teamName: "Nano Filtration Unit", item: "Digital Oscilloscope", qty: 1, status: "Returned", date: daysFromToday(-2) },
            { id: "RET-039", teamId: "TEAM-018", teamName: "AI Crop Monitor", item: "3D Printer", qty: 1, status: "Assigned", date: daysFromToday(12) },
            { id: "RET-040", teamId: "TEAM-018", teamName: "AI Crop Monitor", item: "Laser Cutter", qty: 1, status: "Overdue", date: daysFromToday(-8) },
            { id: "RET-041", teamId: "TEAM-019", teamName: "Swarm Robotics Lab", item: "Soldering Station", qty: 1, status: "Assigned", date: daysFromToday(10) },
            { id: "RET-042", teamId: "TEAM-019", teamName: "Swarm Robotics Lab", item: "Hot Air Rework Station", qty: 1, status: "Overdue", date: daysFromToday(-9) },
            { id: "RET-043", teamId: "TEAM-020", teamName: "EV Charging Station", item: "Variable DC Power Supply", qty: 1, status: "Assigned", date: daysFromToday(8) },
            { id: "RET-044", teamId: "TEAM-020", teamName: "EV Charging Station", item: "Bench Multimeter", qty: 1, status: "Returned", date: daysFromToday(-1) },
            { id: "RET-045", teamId: "TEAM-021", teamName: "Underwater ROV", item: "Digital Oscilloscope", qty: 1, status: "Assigned", date: daysFromToday(11) },
            { id: "RET-046", teamId: "TEAM-021", teamName: "Underwater ROV", item: "Soldering Station", qty: 1, status: "Overdue", date: daysFromToday(-6) }
        ];
    })(),

    tickets: [
        {
            id: "TKT-001", type: "Procurement", assignedTo: "Administrator", subject: "Low Stock Components", priority: "High", date: "04 Jul 2025", status: "Open", assigneeRole: "System Admin", raisedBy: "Dr. Priya Sharma", time: "10:15 AM", reason: "Multiple inventory components have reached the minimum stock level. Procurement approval is requested to maintain smooth lab operations.", items: [
                { name: "Arduino Uno R3", qty: "05", min: "10" },
                { name: "Soil Moisture Sensor", qty: "02", min: "05" },
                { name: "16x2 LCD Display", qty: "03", min: "05" },
                { name: "DC Motor 12V", qty: "01", min: "03" },
                { name: "Li-ion Battery 18650", qty: "04", min: "10" }
            ], adminResponse: ""
        },

        { id: "TKT-002", type: "Damage", assignedTo: "TEAM-005", subject: "Arduino Uno R3 Damaged", priority: "Medium", date: "03 Jul 2025", status: "Pending", teamName: "Smart Irrigation System", equipmentName: "Arduino Uno R3", raisedBy: "Lab Incharge", time: "02:15 PM", damageDescription: "USB port is physically damaged during project testing.", fineAmount: "500", dueDate: "10 Jul 2025", remarks: "Fine to be paid by the team before next material issue.", teamResponse: "", lastUpdated: "03 Jul 2025, 02:15 PM" },

        { id: "TKT-003", type: "Damage", assignedTo: "TEAM-011", subject: "DC Motor 12V Broken", priority: "High", date: "02 Jul 2025", status: "In Progress", teamName: "Robotics Arm", equipmentName: "DC Motor 12V", raisedBy: "Lab Incharge", time: "11:30 AM", damageDescription: "Motor coil burned out due to overloading.", fineAmount: "300", dueDate: "09 Jul 2025", remarks: "Replacement motor cost.", teamResponse: "We have received the notice. Discussing with team leader.", lastUpdated: "02 Jul 2025, 03:00 PM" },

        {
            id: "TKT-004", type: "Procurement", assignedTo: "Administrator", subject: "Request for Additional Sensors", priority: "Medium", date: "01 Jul 2025", status: "In Progress", assigneeRole: "System Admin", raisedBy: "Dr. Priya Sharma", time: "09:45 AM", reason: "Additional sensors needed for upcoming workshop.", items: [
                { name: "Ultrasonic Sensor", qty: "15", min: "05" },
                { name: "PIR Motion Sensor", qty: "20", min: "05" }
            ], adminResponse: "Quotation requested from vendor."
        },

        { id: "TKT-005", type: "Damage", assignedTo: "TEAM-008", subject: "16x2 LCD Display Cracked", priority: "Low", date: "30 Jun 2025", status: "Resolved", teamName: "3D Prosthetic Hand", equipmentName: "16x2 LCD Display", raisedBy: "Lab Incharge", time: "04:00 PM", damageDescription: "Screen cracked during mechanical assembly mounting.", fineAmount: "150", dueDate: "07 Jul 2025", remarks: "Standard replacement fine.", teamResponse: "Fine paid. Receipt number #88271.", lastUpdated: "01 Jul 2025, 10:20 AM" },

        {
            id: "TKT-006", type: "Procurement", assignedTo: "Administrator", subject: "Low Stock - Batteries", priority: "High", date: "29 Jun 2025", status: "Resolved", assigneeRole: "System Admin", raisedBy: "Dr. Priya Sharma", time: "11:20 AM", reason: "Li-ion Battery stock critically low.", items: [
                { name: "Li-ion Battery 18650", qty: "02", min: "10" }
            ], adminResponse: "PO Issued. Delivery expected by next week."
        },

        { id: "TKT-007", type: "Damage", assignedTo: "TEAM-015", subject: "Soil Moisture Sensor Damaged", priority: "Medium", date: "28 Jun 2025", status: "Open", teamName: "Waste Management", equipmentName: "Soil Moisture Sensor", raisedBy: "Lab Incharge", time: "10:00 AM", damageDescription: "Corrosion due to extended water immersion test without waterproofing cover.", fineAmount: "200", dueDate: "05 Jul 2025", remarks: "Cost of sensor replacement.", teamResponse: "", lastUpdated: "28 Jun 2025, 10:00 AM" }
    ],
    bookedEquipment: [],
    equipmentRequests: [
        {
            teamId: "TEAM-001",
            teamName: "Solar Car Project",
            requests: [
                { id: "ER-101", equipmentType: "Manufacturing", equipmentId: "EQ-001", equipmentName: "3D Printer", timeSlot: "10:00 AM - 12:00 PM", status: "Pending", note: "" },
                { id: "ER-102", equipmentType: "Manufacturing", equipmentId: "EQ-005", equipmentName: "CNC Milling Machine", timeSlot: "02:00 PM - 04:00 PM", status: "Pending", note: "" }
            ]
        },
        {
            teamId: "TEAM-002",
            teamName: "Drone Flight Tech",
            requests: [
                { id: "ER-201", equipmentType: "Manufacturing", equipmentId: "EQ-010", equipmentName: "Laser Cutter", timeSlot: "11:00 AM - 01:00 PM", status: "Pending", note: "" }
            ]
        },
        {
            teamId: "TEAM-003",
            teamName: "Bio-Sensor Systems",
            requests: [
                { id: "ER-301", equipmentType: "Electronics", equipmentId: "EQ-006", equipmentName: "Digital Oscilloscope", timeSlot: "09:00 AM - 11:00 AM", status: "Approved", note: "" },
                { id: "ER-302", equipmentType: "Electronics", equipmentId: "EQ-018", equipmentName: "Variable DC Power Supply", timeSlot: "01:00 PM - 03:00 PM", status: "Approved", note: "" }
            ]
        },
        {
            teamId: "TEAM-005",
            teamName: "Smart Irrigation System",
            requests: [
                { id: "ER-501", equipmentType: "Electronics", equipmentId: "EQ-012", equipmentName: "Soldering Station", timeSlot: "02:00 PM - 04:00 PM", status: "Rejected", note: "Sent for Repair" }
            ]
        }
    ]
};
function fillRemainingTickets() {
    const types = ["Procurement", "Damage"];
    const priorities = ["High", "Medium", "Low"];
    const statuses = ["Open", "Pending", "In Progress", "Resolved"];
    const asignees = [
        { name: "TEAM-006", desc: "Eco Waste sorter" },
        { name: "TEAM-001", desc: "Solar Car Project" },
        { name: "Administrator", desc: "System Admin" },
        { name: "TEAM-002", desc: "Drone Flight Tech" },
        { name: "TEAM-003", desc: "Bio-Sensor Systems" }
    ];
    const equipment = ["Arduino Uno R3", "3D Printer", "CNC Milling Machine", "Digital Oscilloscope", "Raspberry Pi 4"];
    const dates = ["27 Jun 2025", "26 Jun 2025", "25 Jun 2025", "24 Jun 2025", "23 Jun 2025", "22 Jun 2025", "21 Jun 2025", "20 Jun 2025"];

    let baseId = 8;
    while (DEFAULT_DATABASE.tickets.length < 32) {
        const type = types[Math.floor(Math.random() * types.length)];
        const priority = priorities[Math.floor(Math.random() * priorities.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const date = dates[Math.floor(Math.random() * dates.length)];
        const id = `TKT-${String(baseId).padStart(3, '0')}`;
        baseId++;

        if (type === "Procurement") {
            DEFAULT_DATABASE.tickets.push({
                id,
                type,
                assignedTo: "Administrator",
                subject: `Refocking ${equipment[Math.floor(Math.random() * equipment.length)]}s`,
                priority,
                date,
                status,
                assigneeRole: "System Admin",
                raisedBy: "Dr. Priya Sharma",
                time: "02:00 PM",
                reason: "Stock replenishment request.",
                items: [
                    { name: "Item Replacements", qty: "02", min: "05" }
                ],
                adminResponse: status === "Resolved" ? "Request processed." : ""
            });
        } else {
            const teamIdx = Math.floor(Math.random() * asignees.length);
            DEFAULT_DATABASE.tickets.push({
                id,
                type,
                assignedTo: asignees[teamIdx].name,
                subject: `${equipment[Math.floor(Math.random() * equipment.length)]} Damaged`,
                priority,
                date,
                status,
                teamName: asignees[teamIdx].desc,
                equipmentName: equipment[Math.floor(Math.random() * equipment.length)],
                raisedBy: "Lab Incharge",
                time: "11:00 AM",
                damageDescription: "Physical structural damage observed post usage.",
                fineAmount: "450",
                dueDate: "12 Jul 2025",
                remarks: "Please deposit the replacement fine.",
                teamResponse: status === "Resolved" ? "Fine cleared." : "",
                lastUpdated: `${date}, 11:30 AM`
            });
        }
    }
}
fillRemainingTickets();

const DB_VERSION = 12;
function initLocalStorageDB() {
    const storedVersion = parseInt(localStorage.getItem("rplms_db_version") || "0");
    if (storedVersion < DB_VERSION) {
        localStorage.setItem("rplms_db", JSON.stringify(DEFAULT_DATABASE));
        localStorage.setItem("rplms_db_version", String(DB_VERSION));
    }
}
initLocalStorageDB();


// Call renderBaseLayout
document.addEventListener('DOMContentLoaded', () => { renderBaseLayout('inventory'); });
// Inventory Page Logic (pagination, filtering, sorting, delete)

document.addEventListener("DOMContentLoaded", () => {
    let db = getDB();
    // State
    let currentFilters = {
        type: "All",
        search: ""
    };
    let sortField = "id";
    let sortOrder = "asc";
    let currentPage = 1;
    let currentView = "equipment";

    const itemsPerPage = 20;

    // DOM Elements
    const TABLE_SCHEMAS = {

        equipment: [
            "Sl No",
            "Component Name",
            "Make",
            "Specification/Version",
            "Total Count",
            "Component Type",
            "Lab",
            "Remarks",
            "Actions"
        ],

        components: [
            "Sl No",
            "Component Name",
            "Make",
            "Specification/Version",
            "Cost",
            "Return Timeline",
            "Total Count",
            "Component Type",
            "Lab",
            "Cupboard Stored in",
            "Shelf1",
            "Count 1",
            "Shelf2",
            "Count 2",
            "Purpose",
            "Comments",
            "Actions"
        ],

        tools: [
            "Sl No",
            "Component Name",
            "Make",
            "Specification/Version",
            "Cost",
            "Return Timeline",
            "Total Count",
            "Component Type",
            "Lab",
            "Cupboard Stored in",
            "Shelf1",
            "Count 1",
            "Shelf2",
            "Count 2",
            "Purpose",
            "Comments",
            "Actions"
        ]

    };
    const tableBody = document.getElementById("inventoryTableBody");
    const tableInfo = document.getElementById("inventoryTableInfo");
    const paginationContainer = document.getElementById("inventoryPagination");
    const searchInput = document.getElementById("searchInventoryInput");

    const excelUpload =
        document.getElementById("inventoryExcelUpload");

    // KPI Elements
    const kpiTotal = document.getElementById("kpiTotalInventory");
    const kpiAvailable = document.getElementById("kpiAvailableInventory");
    const kpiMaintenance = document.getElementById("kpiMaintenanceInventory");

    function updateKPIs() {
        const list = db[currentView] || [];
        kpiTotal.textContent = String(list.length).padStart(2, '0');
        kpiAvailable.textContent = String(list.filter(item => item.status === "Available").length).padStart(2, '0');
        kpiMaintenance.textContent = String(list.filter(item => item.status === "Maintenance" || item.status === "Repairing").length).padStart(2, '0');
    }
    function renderHeader() {

        const head =
            document.getElementById("inventoryTableHead");

        head.innerHTML =
            `<tr>${TABLE_SCHEMAS[currentView]
                .map(col => `<th>${col}</th>`)
                .join("")
            }</tr>`;

    }

    document
        .querySelectorAll(".view-btn")
        .forEach(btn => {

            btn.addEventListener("click", () => {
                document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                currentView =
                    btn.dataset.view;

                renderHeader();
                renderTable();

            });

        });


    function renderTable() {
        tableBody.innerHTML = `
      <tr>
        <td class="skeleton inventory-style-37b663"></td>
        <td class="skeleton inventory-style-37b663"></td>
        <td class="skeleton inventory-style-37b663"></td>
        <td class="skeleton inventory-style-37b663"></td>
        <td class="skeleton inventory-style-37b663"></td>
        <td class="skeleton inventory-style-37b663"></td>
        <td class="skeleton inventory-style-37b663"></td>
      </tr>
    `;

        setTimeout(() => {
            console.log(currentView);
            console.log(db[currentView]);
            // 1. FILTERING
            let filteredData = (db[currentView] || []).filter(item => {

                const searchText =
                    currentFilters.search.toLowerCase();

                return Object.values(item)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchText);

            });

            // 2. SORTING
            // filteredData.sort((a, b) => {
            //     let valA = String(a[sortField]).toLowerCase();
            //     let valB = String(b[sortField]).toLowerCase();

            //     if (valA < valB) return sortOrder === "asc" ? -1 : 1;
            //     if (valA > valB) return sortOrder === "asc" ? 1 : -1;
            //     return 0;
            // });

            // 3. PAGINATION
            const totalItems = filteredData.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

            if (currentPage > totalPages) currentPage = totalPages;
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
            const paginatedData = filteredData.slice(startIndex, endIndex);

            // Render Rows
            console.log("Filtered Data", filteredData);
            console.log("Paginated Data", paginatedData);
            if (paginatedData.length === 0) {
                tableBody.innerHTML = `
          <tr>
            <td colspan="7" class="inventory-style-8e8f43">
              <div class="empty-state">
                <span class="empty-state-icon"><i data-lucide="box-select"></i></span>
                <span class="empty-state-title">No Inventory Items Found</span>
                <p class="empty-state-desc">Try widening your search query or choosing a different filter tab.</p>
              </div>
            </td>
          </tr>
        `;
                tableInfo.textContent = "Showing 0 to 0 of 0 entries";
                renderPagination(1, 1);
                return;
            }

            if (currentView === "equipment") {
                tableBody.innerHTML = paginatedData.map(item => `
                    <tr>
                        <td>${item.sno}</td>
                        <td>${item.name || item.componentName || ""}</td>
                        <td>${item.make}</td>
                        <td>${item.specification || ""}</td>
                        <td>${item.totalCount || item.avail || ""}</td>
                        <td>${item.componentType || ""}</td>
                        <td>${item.lab}</td>
                        <td>${item.remarks || ""}</td>
                        <td>
    <a href="#" data-action="editEquipment" data-id="${item.eqpid}" class="inventory-style-5a2edf">
        <i data-lucide="pencil" style="width: 16px; height: 16px;"></i>
    </a>

    <a href="#"
       data-action="deleteEquipment" data-id="${item.eqpid}" data-name="${item.name || item.componentName}"
       class="inventory-style-eadcd3">
        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
    </a>
</td>
                    </tr>
                `).join("");
            } else if (currentView === "components") {
                tableBody.innerHTML = paginatedData.map(item => `
                    <tr>
                        <td>${item.sno}</td>
                        <td>${item.componentName}</td>
                        <td>${item.make}</td>
                        <td>${item.specification || ""}</td>
                        <td>${item.cost || ""}</td>
                        <td>${item.returnTimeline || ""}</td>
                        <td>${item.totalCount || ""}</td>
                        <td>${item.componentType || ""}</td>
                        <td>${item.lab || ""}</td>
                        <td>${item.cupboard || ""}</td>
                        <td>${item.shelf1 || ""}</td>
                        <td>${item.count1 || ""}</td>
                        <td>${item.shelf2 || ""}</td>
                        <td>${item.count2 || ""}</td>
                        <td>${item.purpose || ""}</td>
                        <td>${item.comments || ""}</td>
                        <td>
    <a href="#" data-action="editComponent" data-id="${item.cid}" class="inventory-style-5a2edf">
        <i data-lucide="pencil" style="width: 16px; height: 16px;"></i>
    </a>

    <a href="#"
       data-action="deleteComponent" data-id="${item.cid}" data-name="${item.componentName}"
       class="inventory-style-eadcd3">
        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
    </a>
</td>
                    </tr>
                `).join("");
            } else if (currentView === "tools") {
                tableBody.innerHTML = paginatedData.map(item => `
                    <tr>
                        <td>${item.sno}</td>
                        <td>${item.componentName}</td>
                        <td>${item.make}</td>
                        <td>${item.specification || ""}</td>
                        <td>${item.cost || ""}</td>
                        <td>${item.returnTimeline || ""}</td>
                        <td>${item.totalCount || ""}</td>
                        <td>${item.componentType || ""}</td>
                        <td>${item.lab || ""}</td>
                        <td>${item.cupboard || ""}</td>
                        <td>${item.shelf1 || ""}</td>
                        <td>${item.count1 || ""}</td>
                        <td>${item.shelf2 || ""}</td>
                        <td>${item.count2 || ""}</td>
                        <td>${item.purpose || ""}</td>
                        <td>${item.comments || ""}</td>
                        <td>
    <a href="#" data-action="editTool" data-id="${item.toolid}" class="inventory-style-5a2edf">
        <i data-lucide="pencil" style="width: 16px; height: 16px;"></i>
    </a>

    <a href="#"
       data-action="deleteTool" data-id="${item.toolid}" data-name="${item.componentName}"
       class="inventory-style-eadcd3">
        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
    </a>
</td>
                    </tr>
                `).join("");
            }

            tableInfo.textContent = `Showing ${totalItems === 0 ? 0 : startIndex + 1} to ${endIndex} of ${totalItems} entries`;
            renderPagination(currentPage, totalPages);
        }, 200);
    }
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".view-btn").forEach(b => {
                b.classList.remove("btn-primary");
                b.classList.add("btn-secondary");
            });

            btn.classList.remove("btn-secondary");
            btn.classList.add("btn-primary");

            currentView = btn.dataset.view;
            currentPage = 1;

            // Toggle active action groups
            const actEq = document.getElementById("actionsEquipment");
            const actCp = document.getElementById("actionsComponents");
            const actTl = document.getElementById("actionsTools");
            if (actEq) actEq.style.display = currentView === "equipment" ? "" : "none";
            if (actCp) actCp.style.display = currentView === "components" ? "" : "none";
            if (actTl) actTl.style.display = currentView === "tools" ? "" : "none";

            renderHeader();
            renderTable();
            updateKPIs();
        });
    });

    function renderPagination(current, total) {
        paginationContainer.innerHTML = "";

        // Prev
        const prevItem = document.createElement("li");
        prevItem.className = `page-item ${current === 1 ? 'disabled' : ''}`;
        prevItem.innerHTML = `<button class="page-link" ${current === 1 ? 'disabled' : ''}>&lt;</button>`;
        if (current > 1) {
            prevItem.querySelector("button").addEventListener("click", () => {
                currentPage--;
                renderTable();
            });
        }
        paginationContainer.appendChild(prevItem);

        // Pages
        for (let i = 1; i <= total; i++) {
            const pageItem = document.createElement("li");
            pageItem.className = `page-item ${current === i ? 'active' : ''}`;
            pageItem.innerHTML = `<button class="page-link">${i}</button>`;
            pageItem.querySelector("button").addEventListener("click", () => {
                currentPage = i;
                renderTable();
            });
            paginationContainer.appendChild(pageItem);
        }

        // Next
        const nextItem = document.createElement("li");
        nextItem.className = `page-item ${current === total ? 'disabled' : ''}`;
        nextItem.innerHTML = `<button class="page-link" ${current === total ? 'disabled' : ''}>&gt;</button>`;
        if (current < total) {
            nextItem.querySelector("button").addEventListener("click", () => {
                currentPage++;
                renderTable();
            });
        }
        paginationContainer.appendChild(nextItem);
    }

    // --- Deletion Dialog ---
    window.deleteEquipment = function (id, name) {
        createConfirmationModal(
            "Confirm Equipment Deletion",
            `Are you sure you want to delete <strong>${name} (${id})</strong> from the inventory system? This action is permanent and cannot be undone.`,
            () => {
                db.equipment = db.equipment.filter(item => item.id !== id);
                setDB(db); // Save to LocalStorage
                showToast(`Item ${id} deleted successfully`, "success");
                updateKPIs();
                renderTable();
            },
            "Delete Item",
            true
        );
    };
    window.deleteComponent = function (id, name) {
    createConfirmationModal(
        "Confirm Component Deletion",
        `Are you sure you want to delete <strong>${name} (${id})</strong>? This action cannot be undone.`,
        () => {
            db.components = db.components.filter(item => item.cid !== id);
            setDB(db);

            showToast(`Component ${id} deleted successfully`, "success");
            updateKPIs();
            renderTable();
        },
        "Delete Component",
        true
    );
};
window.deleteTool = function (id, name) {
    createConfirmationModal(
        "Confirm Tool Deletion",
        `Are you sure you want to delete <strong>${name} (${id})</strong>? This action cannot be undone.`,
        () => {
            db.tools = db.tools.filter(item => item.toolid !== id);
            setDB(db);

            showToast(`Tool ${id} deleted successfully`, "success");
            updateKPIs();
            renderTable();
        },
        "Delete Tool",
        true
    );
};

window.editEquipment = function (id) {
    const item = db.equipment.find(e => e.eqpid === id);
    if (!item) return;
    document.getElementById("eqName").value = item.componentName || item.name || '';
    document.getElementById("eqMake").value = item.make || '';
    document.getElementById("eqSpec").value = item.specification || '';
    document.getElementById("eqCount").value = item.totalCount || item.avail || 0;
    document.getElementById("eqType").value = item.componentType || '';
    document.getElementById("eqLab").value = item.lab || '';
    document.getElementById("eqRemarks").value = item.remarks || '';
    
    const form = document.getElementById("addEquipmentForm");
    form.dataset.editId = id;
    document.getElementById("addEquipmentModal").querySelector('h2').textContent = 'Edit Equipment';
    
    document.getElementById("addEquipmentModal").classList.add("show");
    document.getElementById("addEquipmentModalOverlay").classList.add("show");
};

window.editComponent = function (id) {
    const item = db.components.find(c => c.cid === id);
    if (!item) return;
    document.getElementById("compName").value = item.componentName || '';
    document.getElementById("compMake").value = item.make || '';
    document.getElementById("compSpec").value = item.specification || '';
    document.getElementById("compCost").value = item.cost || '';
    document.getElementById("compReturnTimeline").value = item.returnTimeline || '';
    document.getElementById("compCount").value = item.totalCount || '';
    document.getElementById("compType").value = item.componentType || '';
    document.getElementById("compLab").value = item.lab || '';
    document.getElementById("compCupboard").value = item.cupboard || '';
    document.getElementById("compShelf1").value = item.shelf1 || '';
    document.getElementById("compCount1").value = item.count1 || '';
    document.getElementById("compShelf2").value = item.shelf2 || '';
    document.getElementById("compCount2").value = item.count2 || '';
    document.getElementById("compPurpose").value = item.purpose || '';
    document.getElementById("compComments").value = item.comments || '';

    const form = document.getElementById("addComponentForm");
    form.dataset.editId = id;
    document.getElementById("addComponentModal").querySelector('h2').textContent = 'Edit Component';

    document.getElementById("addComponentModal").classList.add("show");
    document.getElementById("addComponentModalOverlay").classList.add("show");
};

window.editTool = function (id) {
    const item = db.tools.find(t => t.toolid === id);
    if (!item) return;
    document.getElementById("toolName").value = item.componentName || '';
    document.getElementById("toolMake").value = item.make || '';
    document.getElementById("toolSpec").value = item.specification || '';
    document.getElementById("toolCost").value = item.cost || '';
    document.getElementById("toolReturnTimeline").value = item.returnTimeline || '';
    document.getElementById("toolCount").value = item.totalCount || '';
    document.getElementById("toolType").value = item.componentType || '';
    document.getElementById("toolLab").value = item.lab || '';
    document.getElementById("toolCupboard").value = item.cupboard || '';
    document.getElementById("toolShelf1").value = item.shelf1 || '';
    document.getElementById("toolCount1").value = item.count1 || '';
    document.getElementById("toolShelf2").value = item.shelf2 || '';
    document.getElementById("toolCount2").value = item.count2 || '';
    document.getElementById("toolPurpose").value = item.purpose || '';
    document.getElementById("toolComments").value = item.comments || '';

    const form = document.getElementById("addToolForm");
    form.dataset.editId = id;
    document.getElementById("addToolModal").querySelector('h2').textContent = 'Edit Tool';

    document.getElementById("addToolModal").classList.add("show");
    document.getElementById("addToolModalOverlay").classList.add("show");
};

    // --- Search input listener ---
    searchInput.addEventListener("input", debounce((e) => {
        currentFilters.search = e.target.value.trim();
        currentPage = 1;
        renderTable();
    }, 250));

    // --- Tabs filters selection ---


    // --- Sorting headers setup ---
    document.querySelectorAll(".sortable").forEach(header => {
        header.addEventListener("click", () => {
            const field = header.dataset.sort;
            if (sortField === field) {
                sortOrder = (sortOrder === "asc") ? "desc" : "asc";
            } else {
                sortField = field;
                sortOrder = "asc";
            }
            renderTable();
        });
    });
    // Trigger file uploads on click
    document.querySelectorAll(".btn-upload").forEach(btn => {
        btn.addEventListener("click", () => {
            const input = document.getElementById("bulkUploadFileInput");
            if (input) {
                input.value = ""; // clear previous
                input.dataset.uploadType = btn.dataset.type; // target type (equipment, components, tools)
                input.click();
            }
        });
    });

    // Trigger templates download on click
    document.querySelectorAll(".btn-download").forEach(btn => {
        btn.addEventListener("click", () => {
            downloadTemplate(btn.dataset.type);
        });
    });

    // ================================================================
    //  BULK UPLOAD MODAL — 3-Stage Flow
    // ================================================================

    let bumCurrentType = "equipment"; // Track which tab triggered the modal
    let bumSelectedFile = null;       // Track the chosen file

    const bumOverlay    = document.getElementById("bulkUploadModalOverlay");
    const bumModal      = document.getElementById("bulkUploadModal");
    const bumCloseBtn   = document.getElementById("bulkUploadCloseBtn");
    const bumCancelBtn  = document.getElementById("bumCancelBtn");
    const bumUploadBtn  = document.getElementById("bumUploadBtn");
    const bumDoneBtn    = document.getElementById("bumDoneBtn");
    const bumUploadAnotherBtn = document.getElementById("bumUploadAnotherBtn");
    const bumDropzone   = document.getElementById("bumDropzone");
    const bumBrowseBtn  = document.getElementById("bumBrowseBtn");
    const bumFilePreview = document.getElementById("bumFilePreview");
    const bumFpName     = document.getElementById("bumFpName");
    const bumFpSize     = document.getElementById("bumFpSize");
    const bumFpRemove   = document.getElementById("bumFpRemove");
    const bumFpIcon     = document.getElementById("bumFpIcon");
    const fileInput     = document.getElementById("bulkUploadFileInput");

    // — Open modal
    function openBulkUploadModal(type) {
        bumCurrentType = type;
        // Update subtitle
        const typeLabels = { equipment: "Equipment", components: "Components", tools: "Tools" };
        document.getElementById("bulkUploadSubtitle").textContent =
            `Import ${typeLabels[type] || "items"} via CSV or Excel file`;
        // Reset to Stage 1
        resetBumToStage1();
        bumOverlay.classList.add("show");
        bumModal.classList.add("show");
    }

    // — Close modal
    function closeBulkUploadModal() {
        bumOverlay.classList.remove("show");
        bumModal.classList.remove("show");
        // Small delay to allow close animation before reset
        setTimeout(resetBumToStage1, 350);
    }

    // — Reset to Stage 1
    function resetBumToStage1() {
        bumSelectedFile = null;
        if (fileInput) fileInput.value = "";
        bumFilePreview.style.display = "none";
        bumDropzone.style.display = "";
        bumUploadBtn.disabled = true;
        setStage(1);
        // Clear progress state
        const pb = document.getElementById("bumProgressBar");
        const pl = document.getElementById("bumProgressLabel");
        const pi = document.getElementById("bumProcessingIcon");
        if (pb) { pb.style.width = "0%"; pb.classList.remove("complete"); }
        if (pl) pl.textContent = "0%";
        if (pi) { pi.classList.remove("success-state", "error-state"); }
        const bumLog = document.getElementById("bumLog");
        if (bumLog) bumLog.innerHTML = "";
    }

    // — Switch between stages with step indicator animation
    function setStage(stage) {
        const stages = ["bumStage1", "bumStage2", "bumStage3"];
        const footers = ["bumFooter1", "bumFooter2", "bumFooter3"];
        const steps = ["bum-step-1", "bum-step-2", "bum-step-3"];
        const lines = document.querySelectorAll(".bum-step-line");

        stages.forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) el.style.display = (i === stage - 1) ? "" : "none";
        });
        footers.forEach((id, i) => {
            const el = document.getElementById(id);
            if (el) el.style.display = (i === stage - 1) ? "" : "none";
        });
        steps.forEach((id, i) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.classList.remove("active", "done");
            if (i + 1 === stage) el.classList.add("active");
            else if (i + 1 < stage) el.classList.add("done");
        });
        lines.forEach((line, i) => {
            line.classList.remove("active", "done");
            if (i + 1 < stage) line.classList.add("done");
            else if (i + 1 === stage) line.classList.add("active");
        });
    }

    // — File selection helpers
    function applyFile(file) {
        if (!file) return;
        const ext = file.name.split(".").pop().toLowerCase();
        if (ext !== "csv" && ext !== "xlsx" && ext !== "xls") {
            showToast("Please upload a valid .csv or .xlsx file", "error");
            return;
        }
        bumSelectedFile = file;
        bumFpName.textContent = file.name;
        bumFpSize.textContent = (file.size / 1024).toFixed(1) + " KB";
        bumFpIcon.innerHTML = ext === "csv" ? "<i data-lucide=\"file-text\"></i>" : "<i data-lucide=\"file-spreadsheet\"></i>";
        
        // Ensure dynamically added icons are converted
        if (typeof lucide !== 'undefined') lucide.createIcons();
        bumFilePreview.style.display = "flex";
        bumDropzone.style.display = "none";
        bumUploadBtn.disabled = false;
    }

    function removeFile() {
        bumSelectedFile = null;
        if (fileInput) fileInput.value = "";
        bumFilePreview.style.display = "none";
        bumDropzone.style.display = "";
        bumUploadBtn.disabled = true;
    }

    // — Open modal from Bulk Upload buttons
    document.querySelectorAll(".btn-upload-trigger").forEach(btn => {
        btn.addEventListener("click", () => {
            openBulkUploadModal(btn.dataset.type);
        });
    });

    // — Close triggers
    if (bumCloseBtn) bumCloseBtn.addEventListener("click", closeBulkUploadModal);
    if (bumCancelBtn) bumCancelBtn.addEventListener("click", closeBulkUploadModal);
    bumOverlay.addEventListener("click", closeBulkUploadModal);
    if (bumDoneBtn) bumDoneBtn.addEventListener("click", closeBulkUploadModal);
    if (bumUploadAnotherBtn) bumUploadAnotherBtn.addEventListener("click", () => {
        resetBumToStage1();
    });

    // — Browse button triggers hidden file input
    if (bumBrowseBtn) bumBrowseBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (fileInput) {
            fileInput.dataset.uploadType = bumCurrentType;
            fileInput.value = "";
            fileInput.click();
        }
    });

    // — File input change
    if (fileInput) {
        fileInput.addEventListener("change", function () {
            const file = this.files[0];
            if (file) applyFile(file);
        });
    }

    // — Dropzone click (whole zone acts as browse)
    if (bumDropzone) {
        bumDropzone.addEventListener("click", () => {
            if (fileInput) {
                fileInput.dataset.uploadType = bumCurrentType;
                fileInput.value = "";
                fileInput.click();
            }
        });
        bumDropzone.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                bumDropzone.click();
            }
        });
    }

    // — Drag & Drop events
    ["dragenter", "dragover"].forEach(evtName => {
        document.addEventListener(evtName, (e) => {
            if (bumModal.classList.contains("show")) e.preventDefault();
        });
    });

    if (bumDropzone) {
        bumDropzone.addEventListener("dragenter", (e) => {
            e.preventDefault(); e.stopPropagation();
            bumDropzone.classList.add("drag-over");
        });
        bumDropzone.addEventListener("dragover", (e) => {
            e.preventDefault(); e.stopPropagation();
            bumDropzone.classList.add("drag-over");
        });
        bumDropzone.addEventListener("dragleave", (e) => {
            bumDropzone.classList.remove("drag-over");
        });
        bumDropzone.addEventListener("drop", (e) => {
            e.preventDefault(); e.stopPropagation();
            bumDropzone.classList.remove("drag-over");
            const file = e.dataTransfer.files[0];
            if (file) applyFile(file);
        });
    }

    // — Remove file
    if (bumFpRemove) bumFpRemove.addEventListener("click", (e) => {
        e.stopPropagation();
        removeFile();
    });

    // — Upload & Import (Stage 1 → 2 → 3)
    if (bumUploadBtn) {
        bumUploadBtn.addEventListener("click", () => {
            if (!bumSelectedFile) return;
            runBulkUploadFlow(bumSelectedFile, bumCurrentType);
        });
    }

    function runBulkUploadFlow(file, type) {
        const updateDuplicates = document.getElementById("bumUpdateDuplicates")?.checked || false;

        setStage(2);

        const progressBar   = document.getElementById("bumProgressBar");
        const progressLabel = document.getElementById("bumProgressLabel");
        const procTitle     = document.getElementById("bumProcessingTitle");
        const procSub       = document.getElementById("bumProcessingSub");
        const procIcon      = document.getElementById("bumProcessingIcon");
        const bumLog        = document.getElementById("bumLog");
        bumLog.innerHTML    = "";

        function addLog(msg, cls = "log-info") {
            const div = document.createElement("div");
            div.className = "bum-log-entry";
            div.innerHTML = `<span class="${cls}">${cls === 'log-ok' ? '✓' : cls === 'log-fail' ? '✗' : '›'}</span><span>${msg}</span>`;
            bumLog.appendChild(div);
            bumLog.scrollTop = bumLog.scrollHeight;
        }

        function setProgress(pct, label) {
            progressBar.style.width = pct + "%";
            progressLabel.textContent = (label || pct) + "%";
        }

        // Stage 2 simulation messages
        addLog("Opening file: " + file.name, "log-info");

        const reader = new FileReader();
        reader.onload = function (evt) {
            let rows = [];
            let parseError = false;

            // Simulate read delay
            setTimeout(() => {
                setProgress(20);
                addLog("Parsing file structure…", "log-info");
            }, 200);

            try {
                const data = new Uint8Array(evt.target.result);
                const workbook = XLSX.read(data, { type: "array" });
                const firstSheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[firstSheetName];
                rows = XLSX.utils.sheet_to_json(sheet);
            } catch (err) {
                parseError = true;
            }

            setTimeout(() => {
                if (parseError || !rows || rows.length === 0) {
                    setProgress(100);
                    addLog(parseError ? "Parse error: invalid file format." : "File is empty — no rows found.", "log-fail");
                    procTitle.textContent = "Upload Failed";
                    procSub.textContent   = parseError ? "Invalid file format" : "Empty file — no data rows";
                    procIcon.classList.add("error-state");
                    progressBar.style.background = "linear-gradient(90deg,#dc2626,#ef4444)";
                    progressBar.classList.add("complete");
                    progressLabel.textContent = "Failed";
                    progressLabel.style.color = "#dc2626";
                    setTimeout(() => setStage(3), 1200);
                    renderResultsStage(rows || [], 0, rows ? rows.length : 0, []);
                    return;
                }

                addLog(`Found ${rows.length} data row(s) to process`, "log-info");
                setProgress(40);
            }, 600);

            setTimeout(() => {
                if (parseError) return;
                addLog("Validating column headers…", "log-info");
                setProgress(55);
            }, 900);

            setTimeout(() => {
                if (parseError) return;
                addLog("Processing rows…", "log-info");
                setProgress(70);
            }, 1200);

            setTimeout(() => {
                if (parseError) return;
                // Actual processing happens here
                const result = processImportData(rows, type, updateDuplicates);

                // Log results per-row feedback (show first 5)
                const preview = result.details.slice(0, 5);
                preview.forEach(d => {
                    if (d.status === "Created" || d.status === "Updated") {
                        addLog(`Row ${d.row}: ${d.id} — ${d.status}`, "log-ok");
                    } else {
                        addLog(`Row ${d.row}: ${d.id} — ${d.status}: ${d.reason}`, "log-fail");
                    }
                });
                if (result.details.length > 5) {
                    addLog(`… and ${result.details.length - 5} more row(s)`, "log-info");
                }

                setProgress(90);
                addLog("Saving to database…", "log-info");

                setTimeout(() => {
                    setProgress(100);
                    progressBar.classList.add("complete");
                    progressLabel.textContent = "100%";

                    const allSuccess = result.failCount === 0;
                    const allFail = result.successCount === 0;

                    if (allSuccess) {
                        procTitle.textContent = "Import Complete!";
                        procSub.textContent   = `${result.successCount} item(s) successfully imported`;
                        procIcon.classList.add("success-state");
                        addLog(`Import complete — ${result.successCount} item(s) added/updated`, "log-ok");
                    } else if (allFail) {
                        procTitle.textContent = "Import Failed";
                        procSub.textContent   = "No items could be imported — check column format";
                        procIcon.classList.add("error-state");
                        progressBar.style.background = "linear-gradient(90deg,#dc2626,#ef4444)";
                        progressLabel.style.color = "#dc2626";
                        addLog("No items imported — validation failures", "log-fail");
                    } else {
                        procTitle.textContent = "Import Partially Complete";
                        procSub.textContent   = `${result.successCount} imported, ${result.failCount} skipped`;
                        progressBar.style.background = "linear-gradient(90deg,#d97706,#f59e0b)";
                        addLog(`Partial import — ${result.successCount} OK, ${result.failCount} skipped`, "log-info");
                    }

                    renderResultsStage(rows, result.successCount, result.failCount, result.details);

                    // Update table & KPIs
                    db = getDB();
                    renderTable();
                    updateKPIs();

                    setTimeout(() => setStage(3), 1400);

                }, 400);
            }, 1600);
        };

        reader.onerror = function () {
            addLog("File read error", "log-fail");
            procTitle.textContent = "Read Error";
            procIcon.classList.add("error-state");
        };

        reader.readAsArrayBuffer(file);
    }

    // — Render Stage 3 results (no DOM switch; just populates content)
    function renderResultsStage(rows, successCount, failCount, details) {
        document.getElementById("summaryTotalRows").textContent  = rows.length;
        document.getElementById("summarySuccessRows").textContent = successCount;
        document.getElementById("summaryFailedRows").textContent  = failCount;

        const badge = document.getElementById("bumDetailsBadge");
        if (badge) badge.textContent = details.length + " row(s)";

        // Result header
        const header = document.getElementById("bumResultsHeader");
        const allSuccess = failCount === 0 && successCount > 0;
        const allFail    = successCount === 0;
        const iconClass  = allSuccess ? "success" : allFail ? "error" : "partial";
        const iconChar   = allSuccess ? "<i data-lucide=\"check-circle\"></i>" : allFail ? "<i data-lucide=\"x-circle\"></i>" : "<i data-lucide=\"triangle-alert\"></i>";
        const titleText  = allSuccess ? "All Items Imported Successfully" : allFail ? "Import Failed" : "Partially Imported";
        const subText    = allSuccess ? `${successCount} item(s) added to inventory` :
                          allFail    ? "No items imported — check your file format" :
                                      `${successCount} imported, ${failCount} failed or skipped`;
        header.innerHTML = `
            <div class="bum-result-icon ${iconClass}">${iconChar}</div>
            <h3 class="bum-result-title">${titleText}</h3>
            <p class="bum-result-sub">${subText}</p>
        `;

        // Details table
        const tbody = document.getElementById("uploadSummaryTableBody");
        if (details.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#94a3b8;padding:20px;">No details available</td></tr>`;
        } else {
            tbody.innerHTML = details.map(d => {
                const statusClass = (d.status === "Created" || d.status === "Updated") ? d.status.toLowerCase() :
                                     d.status === "Skipped" ? "skipped" : "failed";
                return `<tr>
                    <td style="color:#64748b;">#${d.row}</td>
                    <td><strong>${d.id}</strong></td>
                    <td style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${d.name || "—"}</td>
                    <td><span class="bum-status-badge ${statusClass}">${d.status}</span><span style="font-size:11px;color:#94a3b8;margin-left:6px;">${d.reason ? d.reason : ""}</span></td>
                </tr>`;
            }).join("");
        }
    }

    // ================================================================
    //  processImportData — Core data parser and validator
    //  Returns { successCount, failCount, details }
    // ================================================================
    function processImportData(rows, type, updateDuplicates) {
        const freshDb = getDB();
        let successCount = 0;
        let failCount = 0;
        const details = [];

        // Determine list and properties mappings
        let listArr = [];
        let idKey = "";
        let altIdKeys = [];
        let altNameKeys = [];

        if (type === "equipment") {
            listArr = freshDb.equipment || [];
            idKey = "eqpid";
            altIdKeys = ["Equipment ID", "eqpid", "id"];
            altNameKeys = ["Equipment Name", "name", "componentName"];
        } else if (type === "components") {
            listArr = freshDb.components || [];
            idKey = "cid";
            altIdKeys = ["Component ID", "cid", "id"];
            altNameKeys = ["Component Name", "name", "componentName"];
        } else if (type === "tools") {
            listArr = freshDb.tools || [];
            idKey = "toolid";
            altIdKeys = ["Tool ID", "toolid", "id"];
            altNameKeys = ["Tool Name", "name", "componentName"];
        }

        // Helper to extract properties cleanly
        const getProp = (row, alternativeKeys) => {
            for (const k of alternativeKeys) {
                if (row[k] !== undefined) return String(row[k]).trim();
                const foundKey = Object.keys(row).find(rk => rk.toLowerCase().trim() === k.toLowerCase().trim());
                if (foundKey && row[foundKey] !== undefined) return String(row[foundKey]).trim();
            }
            return "";
        };

        rows.forEach((row, idx) => {
            const sheetRowIndex = idx + 2; // Row #1 is headers

            // Extract item ID & name
            const itemId   = getProp(row, altIdKeys);
            const itemName = getProp(row, altNameKeys);
            const make     = getProp(row, ["Make", "manufacturer"]);
            const lab      = getProp(row, ["Lab", "location"]);

            // Required validations
            if (!itemId) {
                failCount++;
                details.push({ row: sheetRowIndex, id: "N/A", name: itemName || "—", status: "Failed", reason: "Missing unique Item ID." });
                return;
            }
            if (!itemName) {
                failCount++;
                details.push({ row: sheetRowIndex, id: itemId, name: "—", status: "Failed", reason: "Missing Item Name." });
                return;
            }
            if (!make) {
                failCount++;
                details.push({ row: sheetRowIndex, id: itemId, name: itemName, status: "Failed", reason: "Missing Make." });
                return;
            }
            if (!lab) {
                failCount++;
                details.push({ row: sheetRowIndex, id: itemId, name: itemName, status: "Failed", reason: "Missing Lab." });
                return;
            }

            // Check duplicate ID
            const existingIdx = listArr.findIndex(item =>
                String(item[idKey]).trim().toLowerCase() === itemId.toLowerCase()
            );

            if (existingIdx > -1) {
                if (updateDuplicates) {
                    // Update existing item
                    if (type === "equipment") {
                        listArr[existingIdx] = {
                            ...listArr[existingIdx],
                            name: itemName, componentName: itemName, make,
                            specification: getProp(row, ["Specification", "model"]),
                            totalCount: parseInt(getProp(row, ["Total Count", "qty"])) || listArr[existingIdx].totalCount || 1,
                            componentType: getProp(row, ["Component Type", "type"]) || listArr[existingIdx].componentType || "Equipment",
                            lab,
                            remarks: getProp(row, ["Remarks", "description"]) || listArr[existingIdx].remarks || "Working Fine"
                        };
                    } else {
                        listArr[existingIdx] = {
                            ...listArr[existingIdx],
                            componentName: itemName, make,
                            specification: getProp(row, ["Specification", "model"]),
                            cost: parseFloat(getProp(row, ["Cost"])) || listArr[existingIdx].cost || 0,
                            returnTimeline: getProp(row, ["Return Timeline"]) || listArr[existingIdx].returnTimeline || "Daily",
                            totalCount: parseInt(getProp(row, ["Total Count", "qty"])) || listArr[existingIdx].totalCount || 1,
                            componentType: getProp(row, ["Component Type", "Tool Type", "type"]) || listArr[existingIdx].componentType || "Electronics",
                            lab,
                            cupboard: getProp(row, ["Cupboard", "cupboard"]) || listArr[existingIdx].cupboard || "",
                            shelf1: getProp(row, ["Shelf 1", "shelf1"]) || listArr[existingIdx].shelf1 || "",
                            count1: parseInt(getProp(row, ["Count 1", "count1"])) || listArr[existingIdx].count1 || 0,
                            shelf2: getProp(row, ["Shelf 2", "shelf2"]) || listArr[existingIdx].shelf2 || "",
                            count2: parseInt(getProp(row, ["Count 2", "count2"])) || listArr[existingIdx].count2 || 0,
                            purpose: getProp(row, ["Purpose"]) || listArr[existingIdx].purpose || "Student Projects",
                            comments: getProp(row, ["Comments"]) || listArr[existingIdx].comments || ""
                        };
                    }
                    successCount++;
                    details.push({ row: sheetRowIndex, id: itemId, name: itemName, status: "Updated", reason: "Record updated." });
                } else {
                    failCount++;
                    details.push({ row: sheetRowIndex, id: itemId, name: itemName, status: "Skipped", reason: "ID already exists (update duplicates off)." });
                }
            } else {
                // Add new item
                let newItem = {};
                if (type === "equipment") {
                    newItem = {
                        sno: listArr.length + 1,
                        eqpid: itemId, name: itemName, componentName: itemName, make,
                        specification: getProp(row, ["Specification", "model"]),
                        totalCount: parseInt(getProp(row, ["Total Count", "qty"])) || 1,
                        componentType: getProp(row, ["Component Type", "type"]) || "Equipment",
                        lab,
                        remarks: getProp(row, ["Remarks", "description"]) || "Working Fine"
                    };
                } else {
                    newItem = {
                        sno: listArr.length + 1,
                        [idKey]: itemId, componentName: itemName, make,
                        specification: getProp(row, ["Specification", "model"]),
                        cost: parseFloat(getProp(row, ["Cost"])) || 0,
                        returnTimeline: getProp(row, ["Return Timeline"]) || "Daily",
                        totalCount: parseInt(getProp(row, ["Total Count", "qty"])) || 1,
                        componentType: getProp(row, ["Component Type", "Tool Type", "type"]) || "Electronics",
                        lab,
                        cupboard: getProp(row, ["Cupboard", "cupboard"]) || "",
                        shelf1: getProp(row, ["Shelf 1", "shelf1"]) || "",
                        count1: parseInt(getProp(row, ["Count 1", "count1"])) || 0,
                        shelf2: getProp(row, ["Shelf 2", "shelf2"]) || "",
                        count2: parseInt(getProp(row, ["Count 2", "count2"])) || 0,
                        purpose: getProp(row, ["Purpose"]) || "Student Projects",
                        comments: getProp(row, ["Comments"]) || ""
                    };
                }
                listArr.push(newItem);
                successCount++;
                details.push({ row: sheetRowIndex, id: itemId, name: itemName, status: "Created", reason: "Successfully imported." });
            }
        });

        // Persist to DB
        if (type === "equipment")  freshDb.equipment  = listArr;
        else if (type === "components") freshDb.components = listArr;
        else if (type === "tools") freshDb.tools      = listArr;
        setDB(freshDb);
        db = freshDb; // sync local state

        return { successCount, failCount, details };
    }


    window.downloadTemplate = function (type) {
        let headers = "";
        let filename = "";
        if (type === "equipment") {
            headers = "Equipment ID,Equipment Name,Make,Specification,Total Count,Component Type,Lab,Remarks\nEQP201,3D Printer Pro,Creality,Ender 5,3,Manufacturing Equipment,Mechanical Lab,Working Fine";
            filename = "equipment_template.csv";
        } else if (type === "components") {
            headers = "Component ID,Component Name,Make,Specification,Cost,Return Timeline,Total Count,Component Type,Lab,Cupboard,Shelf 1,Count 1,Shelf 2,Count 2,Purpose,Comments\nCID201,Arduino Uno R4,Arduino,Uno R4 Minima,1200,Project Completion,20,Electronics,Embedded Lab,CUP-1,A1,10,A2,10,Workshop,New Stock";
            filename = "components_template.csv";
        } else if (type === "tools") {
            headers = "Tool ID,Tool Name,Make,Specification,Cost,Return Timeline,Total Count,Tool Type,Lab,Cupboard,Shelf 1,Count 1,Shelf 2,Count 2,Purpose,Comments\nT201,Digital Multimeter,Fluke,Model 115,4500,Daily,5,Electronics Tool,Embedded Lab,CUP-5,A1,2,A2,3,Lab Testing,Calibrated";
            filename = "tools_template.csv";
        }

        const blob = new Blob([headers], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // --- Add Equipment Modal Logic ---
    const addEquipmentBtn = document.getElementById("addEquipmentBtn");
    const addEqModal = document.getElementById("addEquipmentModal");
    const addEqOverlay = document.getElementById("addEquipmentModalOverlay");

    if (addEquipmentBtn) {
        addEquipmentBtn.addEventListener("click", (e) => {
            e.preventDefault();
            addEqModal.classList.add("show");
            addEqOverlay.classList.add("show");
        });
    }

    window.closeAddEquipmentModal = function () {
        addEqModal.classList.remove("show");
        addEqOverlay.classList.remove("show");
        const form = document.getElementById("addEquipmentForm");
        form.reset();
        delete form.dataset.editId;
        addEqModal.querySelector('h2').textContent = 'Add Equipment';
    };

    const saveEquipmentBtn = document.getElementById("saveEquipmentBtn");
    if (saveEquipmentBtn) {
        saveEquipmentBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const form = document.getElementById("addEquipmentForm");
            if (!form.reportValidity()) {
                return;
            }

            const name = document.getElementById("eqName").value;
            const make = document.getElementById("eqMake").value;
            const spec = document.getElementById("eqSpec").value;
            const count = parseInt(document.getElementById("eqCount").value);
            const type = document.getElementById("eqType").value;
            const lab = document.getElementById("eqLab").value;
            const remarks = document.getElementById("eqRemarks").value;

            const editId = form.dataset.editId;
            if (editId) {
                const index = db.equipment.findIndex(e => e.eqpid === editId);
                if (index !== -1) {
                    db.equipment[index] = {
                        ...db.equipment[index],
                        componentName: name,
                        name: name,
                        make: make,
                        specification: spec,
                        totalCount: count,
                        componentType: type,
                        lab: lab,
                        remarks: remarks
                    };
                }
                setDB(db);
                closeAddEquipmentModal();
                if(typeof showToast === 'function') {
                    showToast("Equipment updated successfully", "success");
                } else {
                    alert("Equipment updated successfully");
                }
            } else {
                const maxSno = db.equipment.length > 0 ? Math.max(...db.equipment.map(e => e.sno || 0)) : 0;
                let maxEqpId = 0;
                db.equipment.forEach(e => {
                    if (e.eqpid) {
                        const idNum = parseInt(e.eqpid.replace("EQP", ""));
                        if (!isNaN(idNum) && idNum > maxEqpId) maxEqpId = idNum;
                    }
                });

                const newEq = {
                    sno: maxSno + 1,
                    eqpid: `EQP${String(maxEqpId + 1).padStart(3, '0')}`,
                    componentName: name,
                    make: make,
                    specification: spec,
                    totalCount: count,
                    componentType: type,
                    lab: lab,
                    remarks: remarks
                };

                db.equipment.push(newEq);
                setDB(db);
                closeAddEquipmentModal();
                if(typeof showToast === 'function') {
                    showToast("Equipment added successfully", "success");
                } else {
                    alert("Equipment added successfully");
                }
            }
            updateKPIs();
            renderTable();
        });
    }

    // Initial load
    renderHeader();
    updateKPIs();
    renderTable();

    // --- Add Component Modal Logic ---
    const addComponentBtn = document.getElementById("addComponentBtn");
    const addCompModal = document.getElementById("addComponentModal");
    const addCompOverlay = document.getElementById("addComponentModalOverlay");

    if (addComponentBtn) {
        addComponentBtn.addEventListener("click", (e) => {
            e.preventDefault();
            addCompModal.classList.add("show");
            addCompOverlay.classList.add("show");
        });
    }

    window.closeAddComponentModal = function () {
        if (addCompModal) addCompModal.classList.remove("show");
        if (addCompOverlay) addCompOverlay.classList.remove("show");
        const form = document.getElementById("addComponentForm");
        if (form) {
            form.reset();
            delete form.dataset.editId;
        }
        if (addCompModal) addCompModal.querySelector('h2').textContent = 'Add Component';
    };

    const saveComponentBtn = document.getElementById("saveComponentBtn");
    if (saveComponentBtn) {
        saveComponentBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const form = document.getElementById("addComponentForm");
            if (!form.reportValidity()) return;

            const editId = form.dataset.editId;
            if (editId) {
                const index = db.components.findIndex(c => c.cid === editId);
                if (index !== -1) {
                    db.components[index] = {
                        ...db.components[index],
                        componentName: document.getElementById("compName").value,
                        make: document.getElementById("compMake").value,
                        specification: document.getElementById("compSpec").value,
                        cost: parseFloat(document.getElementById("compCost").value) || 0,
                        returnTimeline: document.getElementById("compReturnTimeline").value,
                        totalCount: parseInt(document.getElementById("compCount").value) || 0,
                        componentType: document.getElementById("compType").value,
                        lab: document.getElementById("compLab").value,
                        cupboard: document.getElementById("compCupboard").value,
                        shelf1: document.getElementById("compShelf1").value,
                        count1: parseInt(document.getElementById("compCount1").value) || 0,
                        shelf2: document.getElementById("compShelf2").value,
                        count2: parseInt(document.getElementById("compCount2").value) || 0,
                        purpose: document.getElementById("compPurpose").value,
                        comments: document.getElementById("compComments").value
                    };
                }
                setDB(db);
                closeAddComponentModal();
                if (typeof showToast === 'function') {
                    showToast("Component updated successfully", "success");
                } else {
                    alert("Component updated successfully");
                }
            } else {
                const maxSno = db.components.length > 0 ? Math.max(...db.components.map(c => c.sno || 0)) : 0;
                let maxCid = 0;
                db.components.forEach(c => {
                    if (c.cid) {
                        const idNum = parseInt(c.cid.replace("CID", ""));
                        if (!isNaN(idNum) && idNum > maxCid) maxCid = idNum;
                    }
                });

                const newComp = {
                    sno: maxSno + 1,
                    cid: `CID${String(maxCid + 1).padStart(3, '0')}`,
                    componentName: document.getElementById("compName").value,
                    make: document.getElementById("compMake").value,
                    specification: document.getElementById("compSpec").value,
                    cost: parseFloat(document.getElementById("compCost").value) || 0,
                    returnTimeline: document.getElementById("compReturnTimeline").value,
                    totalCount: parseInt(document.getElementById("compCount").value) || 0,
                    componentType: document.getElementById("compType").value,
                    lab: document.getElementById("compLab").value,
                    cupboard: document.getElementById("compCupboard").value,
                    shelf1: document.getElementById("compShelf1").value,
                    count1: parseInt(document.getElementById("compCount1").value) || 0,
                    shelf2: document.getElementById("compShelf2").value,
                    count2: parseInt(document.getElementById("compCount2").value) || 0,
                    purpose: document.getElementById("compPurpose").value,
                    comments: document.getElementById("compComments").value
                };

                db.components.push(newComp);
                setDB(db);
                closeAddComponentModal();
                if (typeof showToast === 'function') {
                    showToast("Component added successfully", "success");
                } else {
                    alert("Component added successfully");
                }
            }
            updateKPIs();
            renderTable();
        });
    }

    // --- Add Tool Modal Logic ---
    const addToolBtn = document.getElementById("addToolBtn");
    const addToolModal = document.getElementById("addToolModal");
    const addToolOverlay = document.getElementById("addToolModalOverlay");

    if (addToolBtn) {
        addToolBtn.addEventListener("click", (e) => {
            e.preventDefault();
            addToolModal.classList.add("show");
            addToolOverlay.classList.add("show");
        });
    }

    window.closeAddToolModal = function () {
        if (addToolModal) addToolModal.classList.remove("show");
        if (addToolOverlay) addToolOverlay.classList.remove("show");
        const form = document.getElementById("addToolForm");
        if (form) {
            form.reset();
            delete form.dataset.editId;
        }
        if (addToolModal) addToolModal.querySelector('h2').textContent = 'Add Tool';
    };

    const saveToolBtn = document.getElementById("saveToolBtn");
    if (saveToolBtn) {
        saveToolBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const form = document.getElementById("addToolForm");
            if (!form.reportValidity()) return;

            const editId = form.dataset.editId;
            if (editId) {
                const index = db.tools.findIndex(t => t.toolid === editId);
                if (index !== -1) {
                    db.tools[index] = {
                        ...db.tools[index],
                        componentName: document.getElementById("toolName").value,
                        make: document.getElementById("toolMake").value,
                        specification: document.getElementById("toolSpec").value,
                        cost: parseFloat(document.getElementById("toolCost").value) || 0,
                        returnTimeline: document.getElementById("toolReturnTimeline").value,
                        totalCount: parseInt(document.getElementById("toolCount").value) || 0,
                        componentType: document.getElementById("toolType").value,
                        lab: document.getElementById("toolLab").value,
                        cupboard: document.getElementById("toolCupboard").value,
                        shelf1: document.getElementById("toolShelf1").value,
                        count1: parseInt(document.getElementById("toolCount1").value) || 0,
                        shelf2: document.getElementById("toolShelf2").value,
                        count2: parseInt(document.getElementById("toolCount2").value) || 0,
                        purpose: document.getElementById("toolPurpose").value,
                        comments: document.getElementById("toolComments").value
                    };
                }
                setDB(db);
                closeAddToolModal();
                if (typeof showToast === 'function') {
                    showToast("Tool updated successfully", "success");
                } else {
                    alert("Tool updated successfully");
                }
            } else {
                const maxSno = db.tools.length > 0 ? Math.max(...db.tools.map(t => t.sno || 0)) : 0;
                let maxTid = 0;
                db.tools.forEach(t => {
                    if (t.toolid) {
                        const idNum = parseInt(t.toolid.replace("T", ""));
                        if (!isNaN(idNum) && idNum > maxTid) maxTid = idNum;
                    }
                });

                const newTool = {
                    sno: maxSno + 1,
                    toolid: `T${String(maxTid + 1).padStart(3, '0')}`,
                    componentName: document.getElementById("toolName").value,
                    make: document.getElementById("toolMake").value,
                    specification: document.getElementById("toolSpec").value,
                    cost: parseFloat(document.getElementById("toolCost").value) || 0,
                    returnTimeline: document.getElementById("toolReturnTimeline").value,
                    totalCount: parseInt(document.getElementById("toolCount").value) || 0,
                    componentType: document.getElementById("toolType").value,
                    lab: document.getElementById("toolLab").value,
                    cupboard: document.getElementById("toolCupboard").value,
                    shelf1: document.getElementById("toolShelf1").value,
                    count1: parseInt(document.getElementById("toolCount1").value) || 0,
                    shelf2: document.getElementById("toolShelf2").value,
                    count2: parseInt(document.getElementById("toolCount2").value) || 0,
                    purpose: document.getElementById("toolPurpose").value,
                    comments: document.getElementById("toolComments").value
                };

                db.tools.push(newTool);
                setDB(db);
                closeAddToolModal();
                if (typeof showToast === 'function') {
                    showToast("Tool added successfully", "success");
                } else {
                    alert("Tool added successfully");
                }
            }
            updateKPIs();
            renderTable();
        });
    }
});


        renderBaseLayout("inventory");
    

document.addEventListener('click', function(e) {
    let target = e.target.closest('[data-action]');
    if (!target) return;
    
    let action = target.getAttribute('data-action');
    if (action === 'deleteEquipment') {
        e.preventDefault();
        deleteEquipment(target.getAttribute('data-id'), target.getAttribute('data-name'));
    } else if (action === 'deleteComponent') {
        e.preventDefault();
        deleteComponent(target.getAttribute('data-id'), target.getAttribute('data-name'));
    } else if (action === 'deleteTool') {
        e.preventDefault();
        deleteTool(target.getAttribute('data-id'), target.getAttribute('data-name'));
    } else if (action === 'editEquipment') {
        e.preventDefault();
        editEquipment(target.getAttribute('data-id'));
    } else if (action === 'editComponent') {
        e.preventDefault();
        editComponent(target.getAttribute('data-id'));
    } else if (action === 'editTool') {
        e.preventDefault();
        editTool(target.getAttribute('data-id'));
    }
});


document.addEventListener('click', function(e) {
    let target = e.target.closest('[data-action]');
    if (!target) return;
    let action = target.getAttribute('data-action');
    if (action === 'closeAddEquipmentModal') {
        e.preventDefault();
        if (typeof closeAddEquipmentModal === 'function') {
            closeAddEquipmentModal();
        }
    } else if (action === 'closeAddComponentModal') {
        e.preventDefault();
        if (typeof closeAddComponentModal === 'function') {
            closeAddComponentModal();
        }
    } else if (action === 'closeAddToolModal') {
        e.preventDefault();
        if (typeof closeAddToolModal === 'function') {
            closeAddToolModal();
        }
    }
});
