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
        { id: "NTF-001", icon: "📦", iconClass: "notif-icon-request", body: "TEAM-001 has submitted a new component request for Arduino Mega boards.", time: "2 min ago", unread: true },
        { id: "NTF-002", icon: "⏰", iconClass: "notif-icon-overdue", body: "TEAM-006 has 1 overdue equipment return — Raspberry Pi 4 (EQ-011).", time: "18 min ago", unread: true },
        { id: "NTF-003", icon: "🎫", iconClass: "notif-icon-ticket", body: "New damage ticket TKT-007 raised by TEAM-002 for Digital Oscilloscope.", time: "1 hr ago", unread: true },
        { id: "NTF-004", icon: "✅", iconClass: "notif-icon-info", body: "Component request REQ-012 for resistors was approved and marked fulfilled.", time: "3 hrs ago", unread: false },
        { id: "NTF-005", icon: "📋", iconClass: "notif-icon-request", body: "TEAM-005 submitted a material return for Soldering Station (EQ-012).", time: "5 hrs ago", unread: false },
        { id: "NTF-006", icon: "⚠️", iconClass: "notif-icon-overdue", body: "Inventory alert: 3D Printer (EQ-001) maintenance is due this week.", time: "Yesterday", unread: false }
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
document.addEventListener('DOMContentLoaded', () => { renderBaseLayout('low-stock'); });
document.addEventListener("DOMContentLoaded", () => {

    // Initialize Lucide Icons
    lucide.createIcons();

    // Elements
    const selectAllCheckbox =
        document.getElementById("select-all-critical");

    const rowCheckboxes =
        document.querySelectorAll(".row-checkbox");

    const floatingBar =
        document.getElementById("bottom-action-bar");

    const selectedCount =
        document.getElementById("selected-count");

    const btnCount =
        document.getElementById("btn-count");

    // ==========================
    // Update Floating Bar
    // ==========================
    function updateSelectionUI() {

        const checkedRows =
            document.querySelectorAll(
                ".row-checkbox:checked"
            ).length;

        if (checkedRows > 0) {

            floatingBar.style.display = "flex";

            selectedCount.textContent =
                checkedRows;

            btnCount.textContent =
                checkedRows;

        } else {

            floatingBar.style.display = "none";

            selectedCount.textContent = "0";
            btnCount.textContent = "0";

        }

        // Update Header Select All
        if (selectAllCheckbox) {

            selectAllCheckbox.checked =
                checkedRows === rowCheckboxes.length;

        }
    }

    // ==========================
    // Select All
    // ==========================
    if (selectAllCheckbox) {

        selectAllCheckbox.addEventListener(
            "change",
            function () {

                rowCheckboxes.forEach(row => {
                    row.checked = this.checked;
                });

                updateSelectionUI();
            }
        );

    }

    // ==========================
    // Individual Row Checkbox
    // ==========================
    rowCheckboxes.forEach(row => {

        row.addEventListener("change", () => {
            updateSelectionUI();
        });

    });

    // ==========================
    // Search Functionality
    // ==========================
    const searchInput =
        document.querySelector(".search-input");

    if (searchInput) {

        searchInput.addEventListener(
            "keyup",
            function () {

                const value =
                    this.value.toLowerCase();

                const rows =
                    document.querySelectorAll(
                        ".custom-table tbody tr"
                    );

                rows.forEach(row => {

                    const text =
                        row.innerText.toLowerCase();

                    row.style.display =
                        text.includes(value)
                            ? ""
                            : "none";
                });
            }
        );

    }

    // ==========================
    // View Buttons
    // ==========================
    const viewButtons =
        document.querySelectorAll(".btn-view");

    viewButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            const row =
                btn.closest("tr");

            const assetName =
                row.cells[1].innerText;

            alert(
                `Viewing details for: ${assetName}`
            );

        });

    });

    // ==========================
    // Procurement Request
    // ==========================
    const procurementButtons =
        document.querySelectorAll(
            ".btn-primary"
        );

    procurementButtons.forEach(btn => {

        if (
            btn.innerText.includes(
                "Create Procurement Request"
            )
        ) {

            btn.addEventListener("click", () => {

                const selectedAssets =
                    document.querySelectorAll(
                        ".row-checkbox:checked"
                    ).length;

                if (selectedAssets === 0) {

                    alert(
                        "Please select at least one asset."
                    );

                    return;
                }

                alert(
                    `Procurement Request Created for ${selectedAssets} asset(s).`
                );
            });

        }

    });

    // ==========================
    // Priority Filter
    // ==========================
    const priorityFilter =
        document.querySelectorAll(
            ".form-control"
        )[0];

    if (priorityFilter) {

        priorityFilter.addEventListener(
            "change",
            function () {

                const filterValue =
                    this.value.toLowerCase();

                const rows =
                    document.querySelectorAll(
                        ".custom-table tbody tr"
                    );

                rows.forEach(row => {

                    const priority =
                        row.querySelector(".badge")
                            ?.innerText
                            .toLowerCase();

                    if (
                        filterValue ===
                        "all priorities"
                    ) {

                        row.style.display = "";

                    } else {

                        row.style.display =
                            priority === filterValue
                                ? ""
                                : "none";
                    }
                });
            }
        );

    }

    // ==========================
    // Default State
    // ==========================
    updateSelectionUI();

});

        /* =========================================================
           DATA MODEL
           ========================================================= */
        function mulberry32(seed) {
            return function () {
                seed |= 0; seed = seed + 0x6D2B79F5 | 0;
                let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
                t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
                return ((t ^ t >>> 14) >>> 0) / 4294967296;
            };
        }
        const rnd = mulberry32(20260709);
        function pick(arr) { return arr[Math.floor(rnd() * arr.length)]; }
        function randInt(min, max) { return Math.floor(rnd() * (max - min + 1)) + min; }

        const LABS = ["Electronics Lab", "Mechanical Lab", "Robotics Lab", "Fabrication Lab", "IoT Lab"];
        const LOCATIONS = ["Rack A-1", "Rack A-3", "Cabinet B-1", "Cabinet B-4", "Shelf C-2", "Bin D-4", "Store Room E-1", "Drawer F-2"];

        const ITEM_TEMPLATES = [
            { name: "PLA Filament (Black) 1kg", cat: "3D Printing", unit: "spools" },
            { name: "PETG Filament (White) 1kg", cat: "3D Printing", unit: "spools" },
            { name: "Resin — Standard Clear 500ml", cat: "3D Printing", unit: "bottles" },
            { name: "3D Printer Nozzle 0.4mm Brass", cat: "3D Printing", unit: "pcs" },
            { name: "Build Plate Adhesive Spray", cat: "3D Printing", unit: "cans" },
            { name: "Arduino Uno R3", cat: "Electronics", unit: "pcs" },
            { name: "ESP32 DevKit V1", cat: "Electronics", unit: "pcs" },
            { name: "Raspberry Pi 4 (4GB)", cat: "Electronics", unit: "pcs" },
            { name: "Resistor Kit (1/4W Assorted)", cat: "Electronics", unit: "kits" },
            { name: "Jumper Wires (M-M) 40pc Pack", cat: "Electronics", unit: "packs" },
            { name: "Breadboard Full-size", cat: "Electronics", unit: "pcs" },
            { name: "Soldering Wire 60/40 100g", cat: "Electronics", unit: "rolls" },
            { name: "Ultrasonic Sensor (HC-SR04)", cat: "Sensors", unit: "pcs" },
            { name: "IR Proximity Sensor", cat: "Sensors", unit: "pcs" },
            { name: "Load Cell 5kg", cat: "Sensors", unit: "pcs" },
            { name: "IMU Module MPU6050", cat: "Sensors", unit: "pcs" },
            { name: "Servo Motor SG90", cat: "Mechanical", unit: "pcs" },
            { name: "M3 Hex Bolts (20mm) Pack", cat: "Mechanical", unit: "packs" },
            { name: "Ball Bearing 608ZZ", cat: "Mechanical", unit: "pcs" },
            { name: "Aluminium Extrusion 2020 (1m)", cat: "Mechanical", unit: "pcs" },
            { name: "Timing Belt GT2 (1m)", cat: "Mechanical", unit: "pcs" },
            { name: "Linear Rod 8mm (300mm)", cat: "Mechanical", unit: "pcs" },
            { name: "Nitrile Gloves (M) Box", cat: "Safety", unit: "boxes" },
            { name: "Safety Goggles", cat: "Safety", unit: "pcs" },
            { name: "First Aid Kit Refill", cat: "Safety", unit: "kits" },
            { name: "Hot Glue Sticks (7mm)", cat: "Consumables", unit: "packs" },
            { name: "Sandpaper 220 Grit Sheets", cat: "Consumables", unit: "sheets" },
            { name: "Craft Knife Blades (Pack of 10)", cat: "Consumables", unit: "packs" },
            { name: "Cutting Mat A3", cat: "Consumables", unit: "pcs" },
            { name: "Double-Sided Tape 18mm", cat: "Consumables", unit: "rolls" },
        ];

        let assets = [];
        let idCounter = 1;
        ITEM_TEMPLATES.forEach(t => {
            const labCount = randInt(2, 4);
            const shuffledLabs = [...LABS].sort(() => rnd() - 0.5).slice(0, labCount);
            shuffledLabs.forEach(lab => {
                const min = randInt(10, t.unit === "pcs" ? 60 : 30);
                const tier = rnd();
                let available, priority;
                if (tier < 0.22) { available = Math.round(min * rnd() * 0.3); priority = "critical"; }
                else if (tier < 0.52) { available = Math.round(min * (0.31 + rnd() * 0.29)); priority = "high"; }
                else { available = Math.round(min * (0.6 + rnd() * 0.38)); priority = "medium"; }
                if (available >= min) available = Math.max(0, min - 1); // ensure it stays "low stock"
                assets.push({
                    id: "AST-" + String(idCounter++).padStart(3, "0"),
                    name: t.name, category: t.cat, unit: t.unit, lab,
                    location: pick(LOCATIONS) + ", " + lab,
                    available, min, priority,
                    requestId: null,
                    supplier: pick(["TechSource Supplies", "MakerHub Distributors", "PrimeParts India", "CircuitBay Traders", "FabWorks Vendor Co."]),
                    lastRestocked: `${randInt(1, 28)} ${pick(["Jan", "Feb", "Mar", "Apr", "May", "Jun"])} 2026`
                });
            });
        });

        /* Seed a few active procurement requests so some rows show status instead of checkbox */
        let requests = [];
        let prCounter = 1;
        function newReqId() { return "PR-" + String(prCounter++).padStart(3, "0"); }

        function seedRequest(status, itemCount, priorityPref) {
            const pool = assets.filter(a => !a.requestId && (!priorityPref || a.priority === priorityPref));
            const chosen = pool.sort(() => rnd() - 0.5).slice(0, itemCount);
            if (!chosen.length) return;
            const id = newReqId();
            chosen.forEach(a => { a.requestId = id; });
            requests.push({
                id, status, createdDate: `${randInt(1, 8)} Jul 2026`,
                items: chosen.map(a => ({ assetId: a.id, orderQty: Math.max(a.min * 2 - a.available, a.min) })),
                notes: "Routine replenishment for active projects."
            });
        }
        seedRequest("Pending Approval", 3, "critical");
        seedRequest("Approved", 4, "high");
        seedRequest("Procured", 2, "high");
        seedRequest("Pending Approval", 2, "medium");

        /* =========================================================
           STATE
           ========================================================= */
        const state = {
            search: "", priority: "all", category: "all", lab: "all",
            expanded: { critical: true, high: false, medium: false },
            selected: new Set(),
        };

        const PRIORITY_META = {
            critical: { label: "Critical", dot: "var(--red)", badgeBg: "var(--red-bg)", badgeFg: "var(--red)", gauge: "var(--red)" },
            high: { label: "High Priority", dot: "var(--orange)", badgeBg: "var(--orange-bg)", badgeFg: "#B4600F", gauge: "var(--orange)" },
            medium: { label: "Medium Priority", dot: "var(--amber)", badgeBg: "var(--amber-bg)", badgeFg: "var(--amber)", gauge: "var(--amber)" },
        };
        const STATUS_META = {
            "Pending Approval": { bg: "var(--amber-bg)", fg: "var(--amber)" },
            "Approved": { bg: "var(--blue-bg)", fg: "var(--blue)" },
            "Procured": { bg: "var(--purple-bg)", fg: "var(--purple)" },
            "Restocked": { bg: "var(--green-bg)", fg: "var(--green)" },
        };
        const STATUS_ORDER = ["Pending Approval", "Approved", "Procured", "Restocked"];

        /* =========================================================
           POPULATE FILTER DROPDOWNS
           ========================================================= */
        function initFilters() {
            const cats = [...new Set(ITEM_TEMPLATES.map(t => t.cat))].sort();
            const catSel = document.getElementById('categoryFilter');
            cats.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; catSel.appendChild(o); });

            const labSel = document.getElementById('labFilter');
            LABS.forEach(l => { const o = document.createElement('option'); o.value = l; o.textContent = l; labSel.appendChild(o); });
        }

        /* =========================================================
           HELPERS
           ========================================================= */
        function requestById(id) { return requests.find(r => r.id === id); }
        function isLowStock(a) { return a.available < a.min; }
        function visibleAssets() {
            return assets.filter(a => {
                if (!isLowStock(a)) return false;
                if (state.search && !a.name.toLowerCase().includes(state.search.toLowerCase())) return false;
                if (state.priority !== "all" && a.priority !== state.priority) return false;
                if (state.category !== "all" && a.category !== state.category) return false;
                if (state.lab !== "all" && a.lab !== state.lab) return false;
                return true;
            });
        }

        /* =========================================================
           RENDER: KPIs
           ========================================================= */
        function renderKpis() {
            const low = assets.filter(isLowStock);
            document.getElementById('kpiTotal').textContent = low.length;
            document.getElementById('kpiCritical').textContent = low.filter(a => a.priority === "critical").length;
            document.getElementById('kpiHigh').textContent = low.filter(a => a.priority === "high").length;
            document.getElementById('kpiMedium').textContent = low.filter(a => a.priority === "medium").length;

            document.querySelectorAll('.kpi-card').forEach(c => {
                const k = c.dataset.kpi;
                const match = (k === "all" && state.priority === "all") || (k === state.priority);
                c.classList.toggle('active-filter', match);
            });
        }

        /* =========================================================
           RENDER: GROUPS
           ========================================================= */
        function gaugeHtml(a) {
            const meta = PRIORITY_META[a.priority];
            const scaleMax = Math.max(a.min * 1.3, a.available * 1.15, 1);
            const fillPct = Math.min(100, (a.available / scaleMax) * 100);
            const tickPct = Math.min(100, (a.min / scaleMax) * 100);
            return `
    <div class="gauge-wrap">
      <div class="gauge-nums"><span>${a.available} ${a.unit}</span><span class="min">min ${a.min}</span></div>
      <div class="gauge-track">
        <div class="gauge-fill" style="width:${fillPct}%;background:${meta.gauge};"></div>
        <div class="gauge-tick" style="left:calc(${tickPct}% - 1px);"></div>
      </div>
    </div>`;
        }

        function rowHtml(a) {
            const meta = PRIORITY_META[a.priority];
            const req = a.requestId ? requestById(a.requestId) : null;

            let leftCell, statusCell;
            if (req) {
                leftCell = `<div class="cb-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>`;
                const sm = STATUS_META[req.status];
                statusCell = `<div class="status-cell">
        <span class="badge" style="background:${sm.bg};color:${sm.fg};">${req.status}</span>
        <span class="pr-id">${req.id}</span>
      </div>`;
            } else {
                leftCell = `<input type="checkbox" class="cb" data-id="${a.id}" ${state.selected.has(a.id) ? 'checked' : ''}>`;
                statusCell = `<span class="badge" style="background:${meta.badgeBg};color:${meta.badgeFg};">${meta.label.replace(' Priority', '')}</span>`;
            }

            return `
    <div class="row" data-asset="${a.id}">
      ${leftCell}
      <div>
        <div class="r-name">${a.name}</div>
        <div class="r-meta">${a.category} • ${a.lab}</div>
      </div>
      <div>
        <div class="r-loc">${a.location.split(', ')[0]}</div>
        <div class="r-loc-tag">${a.lab}</div>
      </div>
      ${gaugeHtml(a)}
      <div class="badge-cell">${statusCell}</div>
      <button class="view-link" data-view="${a.id}">
        View <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </div>`;
        }

        function renderGroups() {
            const container = document.getElementById('groups');
            const list = visibleAssets();
            let order = ["critical", "high", "medium"];

if (state.priority !== "all") {
    order = [
        state.priority,
        ...order.filter(p => p !== state.priority)
    ];
}
            container.innerHTML = order.map(p => {
                const items = list.filter(a => a.priority === p).sort((a, b) => (a.available / a.min) - (b.available / b.min));
                const meta = PRIORITY_META[p];
                const selectableCount = items.filter(a => !a.requestId).length;
                const selectedInGroup = items.filter(a => state.selected.has(a.id)).length;
                return `
      <div class="group ${state.expanded[p] ? 'expanded' : ''}" data-group="${p}">
        <button class="group-header" data-toggle="${p}">
          <div class="gh-left">
            <span class="gh-dot" style="background:${meta.dot};"></span>
            <span class="gh-title">${meta.label}</span>
            <span class="gh-count" style="background:${meta.badgeBg};color:${meta.badgeFg};">${items.length}</span>
            ${selectedInGroup ? `<span class="gh-selected">${selectedInGroup} selected</span>` : ''}
          </div>
          <svg class="gh-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="group-body">
          ${items.length ? items.map(rowHtml).join('') : `<div class="empty-group">No ${meta.label.toLowerCase()} assets match your filters.</div>`}
        </div>
      </div>`;
            }).join('');

            container.querySelectorAll('[data-toggle]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const p = btn.dataset.toggle;
                    state.expanded[p] = !state.expanded[p];
                    renderGroups();
                });
            });
            container.querySelectorAll('.cb').forEach(cb => {
                cb.addEventListener('click', e => e.stopPropagation());
                cb.addEventListener('change', () => {
                    const id = cb.dataset.id;
                    if (cb.checked) state.selected.add(id); else state.selected.delete(id);
                    renderFooter();
                    renderGroups();
                });
            });
            container.querySelectorAll('[data-view]').forEach(btn => {
                btn.addEventListener('click', () => openDetail(btn.dataset.view));
            });
        }

        /* =========================================================
           FOOTER
           ========================================================= */
        function renderFooter() {
            const n = state.selected.size;
            const footer = document.getElementById('stickyFooter');
            footer.classList.toggle('show', n > 0);
            document.getElementById('sfCount').textContent = n;
            document.getElementById('sfCountText').textContent = `${n} asset${n === 1 ? '' : 's'}`;
        }

        /* =========================================================
           DETAIL MODAL
           ========================================================= */
        function openDetail(id) {
            const a = assets.find(x => x.id === id);
            if (!a) return;
            document.getElementById('detailName').textContent = a.name;
            document.getElementById('detailSub').textContent = `${a.category} · ${a.lab}`;
            const req = a.requestId ? requestById(a.requestId) : null;
            document.getElementById('detailGrid').innerHTML = `
    <div class="detail-item"><div class="k">Asset ID</div><div class="v">${a.id}</div></div>
    <div class="detail-item"><div class="k">Storage Location</div><div class="v">${a.location}</div></div>
    <div class="detail-item"><div class="k">Available Quantity</div><div class="v">${a.available} ${a.unit}</div></div>
    <div class="detail-item"><div class="k">Minimum Threshold</div><div class="v">${a.min} ${a.unit}</div></div>
    <div class="detail-item"><div class="k">Priority</div><div class="v">${PRIORITY_META[a.priority].label}</div></div>
    <div class="detail-item"><div class="k">Preferred Supplier</div><div class="v">${a.supplier}</div></div>
    <div class="detail-item"><div class="k">Last Restocked</div><div class="v">${a.lastRestocked}</div></div>
    <div class="detail-item"><div class="k">Procurement Status</div><div class="v">${req ? req.status + " (" + req.id + ")" : "Not requested yet"}</div></div>
  `;
            document.getElementById('detailModal').classList.add('show');
        }

        /* =========================================================
           CREATE REQUEST MODAL
           ========================================================= */
        function openCreateModal() {
            if (state.selected.size === 0) {
                showToast("Select at least one asset to create a request.", false);
                return;
            }
            const items = [...state.selected].map(id => assets.find(a => a.id === id));
            document.getElementById('createSubtitle').textContent = `${items.length} asset${items.length === 1 ? '' : 's'} selected for replenishment`;
            document.getElementById('createItemsList').innerHTML = items.map(a => {
                const suggested = Math.max(a.min * 2 - a.available, a.min);
                return `
      <div class="mini-row">
        <div>
          <div class="mini-name">${a.name}</div>
          <div class="mini-meta">${a.category} • ${a.lab} · Available ${a.available}/${a.min} ${a.unit}</div>
        </div>
        <div>
          <input type="number" class="qty-input" id="qty-${a.id}" value="${suggested}" min="1">
          <div class="qty-label">Order qty</div>
        </div>
      </div>`;
            }).join('');
            document.getElementById('createModal').classList.add('show');
        }

        document.getElementById('submitRequest').addEventListener('click', () => {
            const ids = [...state.selected];
            if (!ids.length) return;
            const id = newReqId();
            const items = ids.map(aid => {
                const qtyEl = document.getElementById('qty-' + aid);
                return { assetId: aid, orderQty: parseInt(qtyEl.value) || 1 };
            });
            requests.push({
                id, status: "Pending Approval", createdDate: "9 Jul 2026",
                items, notes: document.getElementById('requestNotes').value.trim()
            });
            ids.forEach(aid => { const a = assets.find(x => x.id === aid); a.requestId = id; });
            state.selected.clear();
            document.getElementById('requestNotes').value = "";

            document.getElementById('createModal').classList.remove('show');
            document.getElementById('successReqId').textContent = `${id} created`;
            document.getElementById('successDesc').textContent = `${items.length} asset${items.length === 1 ? '' : 's'} sent to Admin for approval. They're now marked as pending and won't create duplicate requests.`;
            document.getElementById('successModal').classList.add('show');
            document.getElementById('successModal').dataset.reqId = id;

            renderAll();
        });

        document.getElementById('exportExcelBtn').addEventListener('click', () => {
            const id = document.getElementById('successModal').dataset.reqId;
            exportRequestExcel(id);
        });

        function exportRequestExcel(reqId) {
            const req = requestById(reqId);
            if (!req) return;
            const rows = req.items.map(it => {
                const a = assets.find(x => x.id === it.assetId);
                return {
                    "Request ID": req.id,
                    "Asset ID": a.id,
                    "Asset Name": a.name,
                    "Category": a.category,
                    "Lab": a.lab,
                    "Storage Location": a.location,
                    "Available Qty": a.available,
                    "Min Threshold": a.min,
                    "Order Qty": it.orderQty,
                    "Unit": a.unit,
                    "Priority": PRIORITY_META[a.priority].label,
                    "Status": req.status,
                    "Preferred Supplier": a.supplier
                };
            });
            const ws = XLSX.utils.json_to_sheet(rows);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, req.id);
            XLSX.writeFile(wb, `${req.id}_procurement_request.xlsx`);
            showToast(`${req.id} exported to Excel.`, true);
        }

        /* =========================================================
           REQUESTS PANEL / LIFECYCLE
           ========================================================= */
        function renderPanel() {
            document.getElementById('reqBadge').textContent = requests.filter(r => r.status !== "Restocked").length;
            const body = document.getElementById('panelBody');
            if (!requests.length) {
                body.innerHTML = `<div class="empty-group">No procurement requests yet.</div>`;
                return;
            }
            body.innerHTML = [...requests].reverse().map(r => {
                const stepIdx = STATUS_ORDER.indexOf(r.status);
                const sm = STATUS_META[r.status];
                const stepsHtml = STATUS_ORDER.map((s, i) => `<div class="step ${i <= stepIdx ? 'done' : ''}"></div>`).join('');
                const itemNames = r.items.map(it => {
                    const a = assets.find(x => x.id === it.assetId);
                    return a ? a.name : it.assetId;
                }).join(', ');

                let actions = `<button class="btn btn-outline btn-sm" data-export="${r.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Excel
      </button>`;
                let demoNote = "";
                if (r.status === "Procured") {
                    actions += `<button class="btn btn-primary btn-sm" data-restock="${r.id}">Restock Now</button>`;
                } else if (r.status !== "Restocked") {
                    actions += `<button class="btn btn-outline btn-sm" data-advance="${r.id}">Advance Status →</button>`;
                    demoNote = `<div class="demo-note">Demo control — simulates Admin / Procurement team action</div>`;
                }

                return `
      <div class="req-card">
        <div class="req-top">
          <div><div class="req-id">${r.id}</div><div class="req-date">Created ${r.createdDate} · ${r.items.length} item${r.items.length === 1 ? '' : 's'}</div></div>
          <span class="badge" style="background:${sm.bg};color:${sm.fg};">${r.status}</span>
        </div>
        <div class="steps">${stepsHtml}</div>
        <div class="req-status-row">
          <span style="font-size:11px;color:var(--muted-2);font-weight:600;">Pending</span>
          <span style="font-size:11px;color:var(--muted-2);font-weight:600;">Approved</span>
          <span style="font-size:11px;color:var(--muted-2);font-weight:600;">Procured</span>
          <span style="font-size:11px;color:var(--muted-2);font-weight:600;">Restocked</span>
        </div>
        <div class="req-items">${itemNames}</div>
        <div class="req-actions">${actions}</div>
        ${demoNote}
      </div>`;
            }).join('');

            body.querySelectorAll('[data-advance]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const r = requestById(btn.dataset.advance);
                    const idx = STATUS_ORDER.indexOf(r.status);
                    if (idx < STATUS_ORDER.length - 2) { // stop before auto-jumping to Restocked; that's a real action
                        r.status = STATUS_ORDER[idx + 1];
                        showToast(`${r.id} moved to "${r.status}".`, true);
                        renderAll();
                    }
                });
            });
            body.querySelectorAll('[data-restock]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const r = requestById(btn.dataset.restock);
                    r.items.forEach(it => {
                        const a = assets.find(x => x.id === it.assetId);
                        if (a) {
                            a.available += it.orderQty;
                            if (a.available >= a.min) { a.requestId = null; }
                        }
                    });
                    r.status = "Restocked";
                    showToast(`${r.id} restocked — inventory updated.`, true);
                    renderAll();
                });
            });
            body.querySelectorAll('[data-export]').forEach(btn => {
                btn.addEventListener('click', () => exportRequestExcel(btn.dataset.export));
            });
        }

        /* =========================================================
           TOAST
           ========================================================= */
        let toastTimer;
        function showToast(msg, ok = true) {
            const t = document.getElementById('toast');
            document.getElementById('toastText').textContent = msg;
            t.querySelector('svg').style.color = ok ? '#4ADE80' : '#F87171';
            t.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
        }

        /* =========================================================
           EVENTS
           ========================================================= */
        document.getElementById('searchInput').addEventListener('input', e => {
            state.search = e.target.value;
            if (state.search) { state.expanded = { critical: true, high: true, medium: true }; }
            renderGroups();
        });
        // document.getElementById('priorityFilter').addEventListener('change', e => { state.priority = e.target.value; renderKpis(); renderGroups(); });
        document.getElementById('categoryFilter').addEventListener('change', e => { state.category = e.target.value; renderGroups(); });
        document.getElementById('labFilter').addEventListener('change', e => { state.lab = e.target.value; renderGroups(); });
        document.getElementById('clearFilters').addEventListener('click', () => {
            state.search = ""; state.priority = "all"; state.category = "all"; state.lab = "all";
            document.getElementById('searchInput').value = "";
            // document.getElementById('priorityFilter').value = "all";
            document.getElementById('categoryFilter').value = "all";
            document.getElementById('labFilter').value = "all";
            renderKpis(); renderGroups();
        });
        document.querySelectorAll('.kpi-card').forEach(c => {
    c.addEventListener('click', () => {
        const k = c.dataset.kpi;

        if (state.priority === k) {
            state.priority = "all";   // click again to reset
        } else {
            state.priority = k;
            state.expanded[k] = true;
        }

        renderKpis();
        renderGroups();
    });
});

        document.getElementById('headerCta').addEventListener('click', openCreateModal);
        document.getElementById('sfCreate').addEventListener('click', openCreateModal);
        document.getElementById('sfClear').addEventListener('click', () => { state.selected.clear(); renderFooter(); renderGroups(); });

        document.querySelectorAll('[data-close]').forEach(b => {
            b.addEventListener('click', () => b.closest('.overlay').classList.remove('show'));
        });
        document.querySelectorAll('.overlay').forEach(o => {
            o.addEventListener('click', e => { if (e.target === o) o.classList.remove('show'); });
        });

        document.getElementById('openRequestsPanel').addEventListener('click', () => {
            document.getElementById('requestsPanel').classList.add('show');
            document.getElementById('panelOverlay').classList.add('show');
        });
        document.getElementById('closePanel').addEventListener('click', closePanel);
        document.getElementById('panelOverlay').addEventListener('click', closePanel);
        function closePanel() {
            document.getElementById('requestsPanel').classList.remove('show');
            document.getElementById('panelOverlay').classList.remove('show');
        }

        document.addEventListener('keydown', e => {
            if (e.key === "Escape") {
                document.querySelectorAll('.overlay.show').forEach(o => o.classList.remove('show'));
                closePanel();
            }
        });

        /* =========================================================
           INIT
           ========================================================= */
        function renderAll() {
            renderKpis();
            renderGroups();
            renderFooter();
            renderPanel();
        }
        initFilters();
        renderAll();
    
