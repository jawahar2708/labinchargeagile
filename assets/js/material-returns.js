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
document.addEventListener('DOMContentLoaded', () => { renderBaseLayout('material-returns'); });
// Material Return Page Logic — Components & Tools Returns (shared drawer pattern)

document.addEventListener("DOMContentLoaded", () => {
    let db = getDB();

    // ── Seed toolReturns if not present ──────────────────────────────────────
    if (!db.toolReturns || db.toolReturns.length === 0) {
        function daysOffset(n) {
            const d = new Date();
            d.setDate(d.getDate() + n);
            return d.toISOString().slice(0, 10);
        }
        const statuses  = ["Assigned","Returned","Overdue","Assigned","Overdue","Returned","Assigned","Overdue","Returned","Assigned","Assigned","Overdue"];
        const teamIds   = ["TEAM-001","TEAM-002","TEAM-003","TEAM-004","TEAM-005","TEAM-006","TEAM-007","TEAM-008","TEAM-009","TEAM-010","TEAM-011","TEAM-012"];
        const teamNames = ["Solar Car Project","Drone Flight Tech","Bio-Sensor Systems","Haptic Arm Development","Smart Irrigation System","Eco Waste Sorter","VTOL UAV Propulsion","3D Prosthetic Hand","Autonomous AGV","Water Purifier IoT","Robotics Arm Team","Smart Traffic Guard"];
        const toolItems = ["Screw Driver Set","Soldering Iron","Digital Multimeter","Wire Stripper","Hot Air Gun","Crimping Tool","Oscilloscope Probe","Allen Key Set","Plier Set","Torque Wrench"];
        db.toolReturns = teamIds.map((tid, i) => ({
            id: `TRET-${String(i + 1).padStart(3, "0")}`,
            teamId: tid,
            teamName: teamNames[i],
            item: toolItems[i % toolItems.length],
            qty: (i % 3) + 1,
            status: statuses[i],
            date: daysOffset(statuses[i] === "Overdue" ? -(i + 3) : statuses[i] === "Returned" ? -(i + 1) : (i + 4))
        }));
        setDB(db);
    }

    // ── State ─────────────────────────────────────────────────────────────────
    let currentView = "components"; // "components" | "tools"
    let currentFilters = { status: "All", search: "" };
    let currentPage = 1;
    const itemsPerPage = 20;

    // Active drawer state
    let activeTeamId = null;
    let activeTeamItems = [];

    // ── DOM refs ──────────────────────────────────────────────────────────────
    const searchInput       = document.getElementById("searchReturnsInput");
    const filterTabs        = document.querySelectorAll(".filter-tab");
    const kpiTotal          = document.getElementById("kpiTotalReturns");
    const kpiOverdue        = document.getElementById("kpiOverdueReturns");
    const kpiReturned       = document.getElementById("kpiReturnedCount");
    const tabComponents     = document.getElementById("tabComponents");
    const tabTools          = document.getElementById("tabTools");

    // ── View tab switching ────────────────────────────────────────────────────
    tabComponents.addEventListener("click", () => switchView("components"));
    tabTools.addEventListener("click",      () => switchView("tools"));

    function switchView(view) {
        currentView = view;
        currentPage = 1;
        currentFilters.status = "All";
        currentFilters.search = "";
        if (searchInput) searchInput.value = "";
        filterTabs.forEach(t => t.classList.toggle("active", t.dataset.status === "All"));

        tabComponents.classList.toggle("active", view === "components");
        tabTools.classList.toggle("active",      view === "tools");

        updateKPIs();
        renderCards();
    }

    // ── KPIs ──────────────────────────────────────────────────────────────────
    function updateKPIs() {
        const list = activeList();
        kpiTotal.textContent   = String(list.filter(r => r.status !== "Returned").length).padStart(2, "0");
        kpiOverdue.textContent = String(list.filter(r => r.status === "Overdue").length).padStart(2, "0");
        kpiReturned.textContent = String(list.filter(r => r.status === "Returned").length).padStart(2, "0");
    }

    // ── Helpers ───────────────────────────────────────────────────────────────
    function activeList() {
        return currentView === "components" ? db.materialReturns : db.toolReturns;
    }

    function getGrouped(list) {
        const grouped = {};
        list.forEach(r => {
            if (!grouped[r.teamId]) grouped[r.teamId] = { teamId: r.teamId, teamName: r.teamName, items: [] };
            grouped[r.teamId].items.push(r);
        });
        return Object.values(grouped);
    }

    function resolveItemId(itemName) {
        if (currentView === "components") {
            const found = db.inventory.find(i => i.name === itemName);
            return found ? found.id : "EQ-???";
        } else {
            const found = db.tools.find(t => t.componentName === itemName);
            return found ? found.toolid : "T-???";
        }
    }

    // ── Render cards grid ─────────────────────────────────────────────────────
    function renderCards() {
        const container = document.getElementById("returnsGridContainer");
        if (!container) return;

        let grouped = getGrouped(activeList());

        // Filter by status
        grouped = grouped.filter(team => {
            const statuses = team.items.map(i => i.status);
            const allReturned = statuses.every(s => s === "Returned");
            const hasOverdue  = statuses.includes("Overdue");
            const hasOut      = statuses.includes("Assigned") || statuses.includes("Pending");

            let statusMatch = true;
            if (currentFilters.status === "Assigned") statusMatch = hasOut;
            else if (currentFilters.status === "Returned") statusMatch = allReturned;
            else if (currentFilters.status === "Overdue")  statusMatch = hasOverdue;

            // Filter by search
            const s = currentFilters.search.toLowerCase();
            const searchMatch = !s ||
                team.teamName.toLowerCase().includes(s) ||
                team.teamId.toLowerCase().includes(s) ||
                team.items.some(i => i.item.toLowerCase().includes(s));

            return statusMatch && searchMatch;
        });

        // Sort by teamId
        grouped.sort((a, b) => a.teamId < b.teamId ? -1 : a.teamId > b.teamId ? 1 : 0);

        // Paginate
        const total = grouped.length;
        const totalPages = Math.ceil(total / itemsPerPage) || 1;
        if (currentPage > totalPages) currentPage = totalPages;
        const start = (currentPage - 1) * itemsPerPage;
        const page  = grouped.slice(start, start + itemsPerPage);

        if (page.length === 0) {
            container.innerHTML = `
                <div style="grid-column:1/-1;padding:48px 16px;text-align:center;">
                    <div class="empty-state">
                        <span class="empty-state-icon">&#8617;</span>
                        <span class="empty-state-title">No Return Items Found</span>
                        <p class="empty-state-desc">No active team returns match your current filter.</p>
                    </div>
                </div>`;
            return;
        }

        container.innerHTML = page.map(team => {
            const statuses    = team.items.map(i => i.status);
            const allReturned = statuses.every(s => s === "Returned");
            const badgeClass  = allReturned ? "status-resolved" : "status-pending";
            const cardStatus  = allReturned ? "Returned" : "Pending";
            const ids         = team.items.map(i => i.id).join(", ");
            const btnLabel    = allReturned ? "View Return Details" : "Process Return";
            return `
                <div class="req-card" onclick="openReturnDrawer('${team.teamId}')"
                     style="cursor:pointer;display:flex;flex-direction:column;justify-content:space-between;min-height:180px;">
                    <div>
                        <div class="card-header">
                            <span class="badge ${badgeClass}">${cardStatus}</span>
                            <span style="font-size:11px;color:var(--text-secondary);font-weight:700;">${ids}</span>
                        </div>
                        <div class="card-body" style="margin-bottom:0;">
                            <div><strong>Team Name</strong>${team.teamName}</div>
                            <div><strong>Team ID</strong>${team.teamId}</div>
                            <div><strong>Items</strong>${team.items.map(i => i.item).join(", ")}</div>
                        </div>
                    </div>
                    <div style="display:flex;justify-content:flex-end;margin-top:16px;">
                        <button class="btn ${allReturned ? 'btn-secondary' : 'btn-primary'}"
                                style="width:auto;min-width:150px;font-size:12.5px;padding:8px 16px;"
                                onclick="event.stopPropagation();openReturnDrawer('${team.teamId}')">
                            ${btnLabel}
                        </button>
                    </div>
                </div>`;
        }).join("");
    }

    // ── Shared drawer open ────────────────────────────────────────────────────
    window.openReturnDrawer = function (teamId) {
        db = getDB();
        const team = getGrouped(activeList()).find(t => t.teamId === teamId);
        if (!team) return;

        activeTeamId    = teamId;
        activeTeamItems = team.items;

        // Header
        document.getElementById("drawerTeamName").textContent = team.teamName;
        document.getElementById("drawerTeamId").textContent   = team.teamId;
        document.getElementById("metaActiveReturns").textContent =
            team.items.filter(i => i.status !== "Returned").length;
        document.getElementById("metaOverdueCount").textContent =
            team.items.filter(i => i.status === "Overdue").length;

        // Adapt column labels and section title to current view
        const isTools = currentView === "tools";
        document.getElementById("drawerTableTitle").textContent =
            isTools ? "Issued Tools for Return" : "Issued Items for Return";
        document.getElementById("drawerColId").textContent   = isTools ? "Tool ID"   : "Item ID";
        document.getElementById("drawerColName").textContent = isTools ? "Tool Name" : "Item Name";
        document.getElementById("labelIssued").textContent   = isTools ? "Total Tools Issued"    : "Total Items Issued";
        document.getElementById("labelReturned").textContent = isTools ? "Total Tools Returned"  : "Total Items Returned";

        // Render rows
        const tbody = document.getElementById("bodyReturns");
        tbody.innerHTML = "";
        team.items.forEach(item => {
            const itemId = resolveItemId(item.item);
            const isGood = item.status === "Returned" || item.isGood === undefined ? "checked" : (item.isGood ? "checked" : "");
            const retQty = item.status === "Returned" ? item.qty : (item.returnedQty !== undefined ? item.returnedQty : item.qty);
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${itemId}</strong></td>
                <td style="max-width:140px;overflow:hidden;text-overflow:ellipsis;">${item.item}</td>
                <td>${item.qty}</td>
                <td>
                    <input type="number" class="qty-input"
                           id="qty-return-${item.id}"
                           min="0" max="${item.qty}" value="${retQty}"
                           oninput="validateAndRecalculate('${item.id}',${item.qty})">
                </td>
                <td style="text-align:center;">
                    <input type="checkbox"
                           style="width:16px;height:16px;transform:scale(1.1);accent-color:var(--primary-color);cursor:pointer;"
                           id="chk-return-${item.id}" ${isGood}
                           onchange="recalculateReturnSummary()">
                </td>`;
            tbody.appendChild(tr);
        });

        document.getElementById("drawerOverlay").classList.add("show");
        document.getElementById("returnReviewDrawer").classList.add("show");
        recalculateReturnSummary();
    };

    // ── Drawer close ──────────────────────────────────────────────────────────
    window.closeDrawer = function () {
        document.getElementById("drawerOverlay").classList.remove("show");
        document.getElementById("returnReviewDrawer").classList.remove("show");
        activeTeamId    = null;
        activeTeamItems = [];
    };

    // ── Qty validation ────────────────────────────────────────────────────────
    window.validateAndRecalculate = function (id, maxQty) {
        const input = document.getElementById(`qty-return-${id}`);
        if (input) {
            let val = parseInt(input.value);
            if (isNaN(val) || val < 0) input.value = 0;
            else if (val > maxQty)     input.value = maxQty;
        }
        recalculateReturnSummary();
    };

    // ── Summary recalculation ─────────────────────────────────────────────────
    window.recalculateReturnSummary = function () {
        if (!activeTeamId || !activeTeamItems.length) return;
        let totalIssued = 0, totalReturned = 0, totalDamaged = 0, allOk = true;

        activeTeamItems.forEach(item => {
            const qtyEl = document.getElementById(`qty-return-${item.id}`);
            const chkEl = document.getElementById(`chk-return-${item.id}`);
            if (qtyEl && chkEl) {
                const qty = parseInt(qtyEl.value) || 0;
                totalIssued   += item.qty;
                totalReturned += qty;
                if (!chkEl.checked) totalDamaged++;
                if (!chkEl.checked || qty !== item.qty) allOk = false;
            }
        });

        document.getElementById("sumIssued").textContent   = totalIssued;
        document.getElementById("sumReturned").textContent = totalReturned;
        document.getElementById("sumDamaged").textContent  = totalDamaged;

        const status = allOk ? "Returned" : "Pending";
        document.getElementById("sumStatus").textContent = status;
        const badge = document.getElementById("drawerStatusBadge");
        badge.textContent = status;
        badge.className   = `badge ${allOk ? "status-resolved" : "status-pending"}`;
    };

    // ── Submit return ─────────────────────────────────────────────────────────
    window.submitReturn = function () {
        if (!activeTeamId || !activeTeamItems.length) return;
        let dbNow = getDB();
        let ticketsAdded = 0;
        const listKey = currentView === "components" ? "materialReturns" : "toolReturns";

        activeTeamItems.forEach(item => {
            const qtyEl = document.getElementById(`qty-return-${item.id}`);
            const chkEl = document.getElementById(`chk-return-${item.id}`);
            if (!qtyEl || !chkEl) return;

            const returnedQty = parseInt(qtyEl.value) || 0;
            const isGood      = chkEl.checked;
            const idx         = dbNow[listKey].findIndex(r => r.id === item.id);

            if (idx > -1) {
                dbNow[listKey][idx].returnedQty = returnedQty;
                dbNow[listKey][idx].isGood      = isGood;
                dbNow[listKey][idx].status      = (isGood && returnedQty === item.qty) ? "Returned" : "Pending";

                if (!isGood) {
                    dbNow[listKey][idx].ticketRaised = true;
                    ticketsAdded++;
                    dbNow.tickets.push(buildDamageTicket(dbNow, activeTeamId, item, returnedQty));
                }
            }
        });

        setDB(dbNow);
        db = dbNow;

        const msg = ticketsAdded > 0
            ? `Return submitted: ${ticketsAdded} item(s) flagged for Damage Ticket.`
            : "Returns submitted and verified successfully!";
        showToast(msg, ticketsAdded > 0 ? "warn" : "success");

        closeDrawer();
        updateKPIs();
        renderCards();
    };

    // ── Damage ticket builder ─────────────────────────────────────────────────
    function buildDamageTicket(dbNow, teamId, item, returnedQty) {
        const last    = dbNow.tickets.length > 0 ? dbNow.tickets[dbNow.tickets.length - 1] : { id: "TKT-000" };
        const nextNum = (parseInt(last.id.split("-")[1]) || 0) + 1;
        const nextId  = "TKT-" + String(nextNum).padStart(3, "0");
        const today   = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
        const due     = new Date(Date.now() + 7 * 86400000).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
        const time    = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
        return {
            id: nextId, type: "Damage", assignedTo: teamId,
            subject: `${item.item} Damaged`, priority: "High",
            date: today, status: "Pending",
            teamName: item.teamName, equipmentName: item.item,
            raisedBy: "Lab Incharge", time,
            damageDescription: `Item returned in damaged/faulty condition. Returned: ${returnedQty}/${item.qty} units.`,
            fineAmount: "500", dueDate: due,
            remarks: "Auto-generated upon material return check-in — flagged for inspection.",
            teamResponse: "", lastUpdated: `${today}, ${time}`
        };
    }

    // ── Search & filter listeners ─────────────────────────────────────────────
    if (searchInput) {
        searchInput.addEventListener("input", debounce(e => {
            currentFilters.search = e.target.value.trim();
            currentPage = 1;
            renderCards();
        }, 250));
    }

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentFilters.status = tab.dataset.status;
            currentPage = 1;
            renderCards();
        });
    });

    // ── Initial load ──────────────────────────────────────────────────────────
    updateKPIs();
    renderCards();
});


        renderBaseLayout("material-returns");
    
