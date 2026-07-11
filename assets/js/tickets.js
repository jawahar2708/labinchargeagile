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
document.addEventListener('DOMContentLoaded', () => { renderBaseLayout('tickets'); });
// Ticket Management Controller
document.addEventListener("DOMContentLoaded", () => {
  const activeTableBody = document.getElementById("activeTicketsTableBody");

  // Utilities to convert between ticket dates ("DD Mmm YYYY") and HTML input dates ("YYYY-MM-DD")
  function parseDBDateToInputDate(dbDateStr) {
    if (!dbDateStr) return "";
    const parts = dbDateStr.trim().split(/\s+/);
    if (parts.length < 3) return "";
    const day = parts[0].padStart(2, "0");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIdx = monthNames.indexOf(parts[1]);
    if (monthIdx === -1) return "";
    const month = String(monthIdx + 1).padStart(2, "0");
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }

  function formatInputDateToDBDate(inputDateStr) {
    if (!inputDateStr) return "";
    const parts = inputDateStr.split("-");
    if (parts.length < 3) return "";
    const year = parts[0];
    const monthIdx = parseInt(parts[1]) - 1;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[monthIdx];
    const day = String(parseInt(parts[2])).padStart(2, "0");
    return `${day} ${month} ${year}`;
  }

  function getEnquiryRequiredItems(db) {
    const list = [];
    const costMap = {
      "3d printer": 25000,
      "cnc milling machine": 32000,
      "cnc machine": 32000,
      "laser cutter": 18000,
      "3d scanner": 35000,
      "digital oscilloscope": 15000,
      "bench multimeter": 12000,
      "soldering station": 8500,
      "hot air rework station": 14000,
      "variable dc power supply": 6500,
      "arduino uno": 850,
      "arduino uno r3": 850,
      "raspberry pi 4": 7000,
      "ultrasonic sensor": 250,
      "soil moisture sensor": 150,
      "dc motor 12v": 350,
      "16x2 lcd display": 250,
      "li-ion battery 18650": 300,
      "bipolar nema 17": 1250,
      "lipo battery 11.1v": 2200,
      "pir motion sensor": 180,
      "co2 laser tube": 9500,
      "screw driver set": 2500,
      "soldering iron": 3200
    };

    function getItemCost(name) {
      const cleanName = name.toLowerCase().trim();
      if (costMap[cleanName]) return costMap[cleanName];

      const comp = db.components.find(c => c.componentName.toLowerCase() === cleanName);
      if (comp && comp.cost) return comp.cost;

      const tool = db.tools.find(t => t.componentName.toLowerCase() === cleanName);
      if (tool && tool.cost) return tool.cost;

      return 500;
    }

    function getItemIdAndType(name) {
      const cleanName = name.toLowerCase().trim();
      let inv = db.inventory.find(i => i.name.toLowerCase() === cleanName);
      if (inv) {
        return { id: inv.id, type: inv.type };
      }
      let comp = db.components.find(c => c.componentName.toLowerCase() === cleanName);
      if (comp) {
        return { id: comp.cid, type: "Component" };
      }
      let tool = db.tools.find(t => t.componentName.toLowerCase() === cleanName);
      if (tool) {
        return { id: tool.toolid, type: "Tool" };
      }
      let eqp = db.equipment.find(e => (e.name || e.componentName || "").toLowerCase() === cleanName);
      if (eqp) {
        return { id: eqp.eqpid, type: "Equipment" };
      }
      return { id: "EQ-N/A", type: "Component" };
    }

    // 1. Sourcing from materialReturns (items not returned or damaged)
    (db.materialReturns || []).forEach(r => {
      const isNotReturned = r.status !== "Returned";
      const isDamaged = r.isGood === false;

      if (isNotReturned || isDamaged) {
        const { id: itemId, type: itemType } = getItemIdAndType(r.item);
        const amount = getItemCost(r.item);

        list.push({
          source: "return",
          refId: r.id,
          teamId: r.teamId,
          teamName: r.teamName,
          itemType: itemType,
          itemId: itemId,
          itemName: r.item,
          amount: amount,
          ticketRaised: r.ticketRaised || false,
          timeSlot: "" // returns don't strictly bind slots
        });
      }
    });

    // 2. Sourcing from equipmentRequests (rejected equipment requests)
    (db.equipmentRequests || []).forEach(team => {
      (team.requests || []).forEach(req => {
        if (req.status === "Rejected") {
          const amount = getItemCost(req.equipmentName);

          list.push({
            source: "equipment_request",
            refId: req.id,
            teamId: team.teamId,
            teamName: team.teamName,
            itemType: "Equipment",
            itemId: req.equipmentId,
            itemName: req.equipmentName,
            amount: amount,
            ticketRaised: req.ticketRaised || false,
            timeSlot: req.timeSlot || "" // Retain slot timing
          });
        }
      });
    });

    return list;
  }

  function renderActiveTickets() {
    const db = getDB();
    // Exclude Procurement category tickets (like TKT-001) from matches
    const tickets = (db.tickets || []).filter(t => t.type !== "Procurement");

    if (tickets.length === 0) {
      activeTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 48px 16px; color: var(--text-secondary); font-weight: 500;">
            No active tickets recorded at this time.
          </td>
        </tr>
      `;
      return;
    }

    const sortedTickets = [...tickets].sort((a, b) => b.id.localeCompare(a.id));

    activeTableBody.innerHTML = sortedTickets.map(t => {
      let badgeClass = "status-pending";
      if (t.status === "Resolved") badgeClass = "badge status-resolved";
      else if (t.status === "In Progress") badgeClass = "badge status-in-progress";
      else badgeClass = "badge status-open";

      // Parse details
      const details = t.damageDescription || t.reason || "No details provided.";
      const cleanSubject = t.subject || "Asset Issue";
      const slotHtml = t.timeSlot ? `<br><span style="font-size:11px;color:#6B7280;font-weight:normal;">Slot: ${t.timeSlot}</span>` : "";

      return `
        <tr>
          <td style="font-weight: 700; color: var(--text-secondary);">${t.id}</td>
          <td style="font-weight: 600; color: var(--text-primary);">${t.teamName} (${t.assignedTo})</td>
          <td style="font-weight: 600; color: var(--text-primary);">${t.equipmentName || 'N/A'}${slotHtml}</td>
          <td style="font-weight: 600; color: var(--text-secondary);">${cleanSubject}</td>
          <td style="max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${escapeHtml(details)}">
            ${escapeHtml(details)}
          </td>
          <td><span class="${badgeClass}">${t.status}</span></td>
          <td style="text-align: center;">
            <button class="btn btn-secondary" onclick="viewTicket('${t.id}')" style="padding: 6px 12px; font-size: 12px;">View & Track</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  function renderFlaggedItems() {
    const db = getDB();
    const items = getEnquiryRequiredItems(db);

    if (items.length === 0) {
      flaggedTableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 48px 16px; color: var(--text-secondary); font-weight: 500;">
            No items require manual tickets at this time. All caught up!
          </td>
        </tr>
      `;
      return;
    }

    flaggedTableBody.innerHTML = items.map(item => {
      const slotHtml = item.timeSlot ? `<br><span style="font-size:11px;color:#6B7280;font-weight:normal;">Slot: ${item.timeSlot}</span>` : "";
      const actionButton = item.ticketRaised
        ? `<button class="btn btn-disabled" disabled style="padding: 6px 12px; font-size:12px;">Ticket Raised</button>`
        : `<button class="btn btn-primary" onclick="openRaiseModal('${item.source}', '${item.refId}', '${item.teamId}', '${item.itemId}', '${escapeHtml(item.itemName)}', '${item.timeSlot || ''}')" style="padding: 6px 12px; font-size:12px;">Raise Ticket</button>`;

      return `
        <tr>
          <td style="font-weight: 700; color: var(--text-secondary);">${item.teamId}</td>
          <td style="font-weight: 600; color: var(--text-primary);">${item.teamName}</td>
          <td>${item.itemType}</td>
          <td style="font-family: monospace; font-weight: 700; color: var(--text-secondary);">${item.itemId || 'N/A'}</td>
          <td style="font-weight: 600; color: var(--text-primary);">${item.itemName}${slotHtml}</td>
          <td style="font-weight: 700; color: #10B981;">&#8377; ${item.amount.toLocaleString()}</td>
          <td style="text-align: center;">${actionButton}</td>
        </tr>
      `;
    }).join("");
  }

  // --- Raise Ticket System ---
  let activeRaise = null;

  window.openRaiseModal = function (source, refId, teamId, assetId, assetName, timeSlot) {
    activeRaise = { source, refId, teamId, assetId, assetName, timeSlot };
    const db = getDB();
    const teamName = db.teams.find(t => t.id === teamId)?.name || teamId;

    document.getElementById("modalTeamId").textContent = teamId;
    document.getElementById("modalTeamName").textContent = teamName;
    document.getElementById("modalAssetId").textContent = `${assetId || 'N/A'}`;
    document.getElementById("modalAssetName").textContent = assetName;

    const timeSlotCont = document.getElementById("modalTimeSlotContainer");
    const timeSlotVal = document.getElementById("modalTimeSlot");
    if (timeSlot) {
      timeSlotCont.style.display = "block";
      timeSlotVal.textContent = timeSlot;
    } else {
      timeSlotCont.style.display = "none";
    }

    document.getElementById("modalDamageType").value = "Damaged";
    document.getElementById("modalDamageDetails").value = "";

    document.getElementById("raiseTicketModal").style.display = "flex";
  };

  window.closeRaiseModal = function () {
    document.getElementById("raiseTicketModal").style.display = "none";
    activeRaise = null;
  };

  document.getElementById("raiseTicketForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeRaise) return;

    const damageType = document.getElementById("modalDamageType").value;
    const details = document.getElementById("modalDamageDetails").value.trim();

    if (!details) {
      showToast("Please enter damage details.", "error");
      return;
    }

    let db = getDB();

    // 1. Set ticket marker on source item
    if (activeRaise.source === "return") {
      const idx = db.materialReturns.findIndex(r => r.id === activeRaise.refId);
      if (idx > -1) db.materialReturns[idx].ticketRaised = true;
    } else if (activeRaise.source === "equipment_request") {
      db.equipmentRequests.forEach(team => {
        const req = team.requests.find(r => r.id === activeRaise.refId);
        if (req) req.ticketRaised = true;
      });
    }

    // 2. Add new ticket records
    const nextNum = db.tickets.length + 1;
    const newId = `TKT-${String(nextNum).padStart(3, "0")}`;
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateStr = `${String(today.getDate()).padStart(2, "0")} ${months[today.getMonth()]} ${today.getFullYear()}`;
    const timeStr = today.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    const teamName = db.teams.find(t => t.id === activeRaise.teamId)?.name || activeRaise.teamId;

    const newTicket = {
      id: newId,
      type: "Damage",
      assignedTo: activeRaise.teamId,
      subject: `${activeRaise.assetName} ${damageType}`,
      priority: "High",
      date: dateStr,
      status: "Open",
      teamName: teamName,
      equipmentName: activeRaise.assetName,
      raisedBy: "Lab Incharge",
      time: timeStr,
      damageDescription: details,
      fineAmount: "500",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      remarks: `Manual ticket raised: ${damageType}.`,
      teamResponse: "",
      lastUpdated: `${dateStr}, ${timeStr}`,
      timeSlot: activeRaise.timeSlot || ""
    };

    db.tickets.push(newTicket);

    // Write notifications
    const newNotif = {
      id: `NTF-${String(db.notifications.length + 1).padStart(3, "0")}`,
      icon: "🎫",
      iconClass: "notif-icon-ticket",
      body: `New damage ticket ${newId} raised against ${activeRaise.teamId} for ${activeRaise.assetName}.`,
      time: "Just now",
      unread: true
    };
    db.notifications.unshift(newNotif);

    // Mark as Repairing if applicable
    if (activeRaise.assetId) {
      const invItem = db.inventory.find(i => i.id === activeRaise.assetId);
      if (invItem && (damageType === "Damaged" || damageType === "Unusable")) {
        invItem.status = "Repairing";
      }
    }

    setDB(db);
    showToast(`Ticket ${newId} raised against team successfully!`, "success");
    closeRaiseModal();
    renderFlaggedItems();
    renderActiveTickets();
  });

  // --- Manual Create Ticket Modal (From Scratch) ---
  window.openManualCreateModal = function () {
    const db = getDB();
    const teamSelect = document.getElementById("createTicketTeam");
    teamSelect.innerHTML = '<option value="">-- Choose Team --</option>';

    (db.teams || []).forEach(team => {
      const opt = document.createElement("option");
      opt.value = team.id;
      opt.textContent = `${team.id} - ${team.name}`;
      teamSelect.appendChild(opt);
    });

    document.getElementById("createTicketAsset").innerHTML = '<option value="">-- Choose Asset --</option>';
    document.getElementById("createTicketType").value = "Damaged";
    document.getElementById("createTicketFine").value = "500";
    document.getElementById("createTicketDescription").value = "";

    // Default due date to 7 days from now
    const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const dd = String(nextWeek.getDate()).padStart(2, '0');
    const mm = String(nextWeek.getMonth() + 1).padStart(2, '0');
    const yyyy = nextWeek.getFullYear();
    document.getElementById("createTicketDueDate").value = `${yyyy}-${mm}-${dd}`;

    document.getElementById("createTicketModal").style.display = "flex";
  };

  window.closeManualCreateModal = function () {
    document.getElementById("createTicketModal").style.display = "none";
  };

  window.populateCreateTicketAssets = function (teamId) {
    const assetSelect = document.getElementById("createTicketAsset");
    assetSelect.innerHTML = '<option value="">-- Choose Asset --</option>';
    if (!teamId) return;

    const db = getDB();
    (db.inventory || []).forEach(item => {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = `${item.id} - ${item.name} (${item.type})`;
      assetSelect.appendChild(opt);
    });
  };

  document.getElementById("createTicketForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const teamId = document.getElementById("createTicketTeam").value;
    const assetId = document.getElementById("createTicketAsset").value;
    const type = document.getElementById("createTicketType").value;
    const fineVal = document.getElementById("createTicketFine").value;
    const dueDate = document.getElementById("createTicketDueDate").value;
    const desc = document.getElementById("createTicketDescription").value.trim();

    if (!teamId || !assetId || !desc) {
      showToast("Please fill in all details.", "error");
      return;
    }

    const db = getDB();
    const teamName = db.teams.find(t => t.id === teamId)?.name || teamId;
    const assetItem = db.inventory.find(i => i.id === assetId);
    const assetName = assetItem ? assetItem.name : assetId;

    const nextNum = db.tickets.length + 1;
    const newId = `TKT-${String(nextNum).padStart(3, "0")}`;
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateStr = `${String(today.getDate()).padStart(2, "0")} ${months[today.getMonth()]} ${today.getFullYear()}`;
    const timeStr = today.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    const newTicket = {
      id: newId,
      type: "Damage",
      assignedTo: teamId,
      subject: `${assetName} ${type}`,
      priority: "High",
      date: dateStr,
      status: "Open",
      teamName: teamName,
      equipmentName: assetName,
      raisedBy: "Lab Incharge",
      time: timeStr,
      damageDescription: desc,
      fineAmount: String(fineVal),
      dueDate: formatInputDateToDBDate(dueDate),
      remarks: `Manually raised ticket. Type: ${type}.`,
      teamResponse: "",
      lastUpdated: `${dateStr}, ${timeStr}`,
      timeSlot: "" // manual ticket has no booking slot
    };

    db.tickets.push(newTicket);

    const newNotif = {
      id: `NTF-${String(db.notifications.length + 1).padStart(3, "0")}`,
      icon: "🎫",
      iconClass: "notif-icon-ticket",
      body: `New damage ticket ${newId} raised against ${teamId} for ${assetName}.`,
      time: "Just now",
      unread: true
    };
    db.notifications.unshift(newNotif);

    if (assetItem && (type === "Damaged" || type === "Unusable")) {
      assetItem.status = "Repairing";
    }

    setDB(db);
    showToast(`Ticket ${newId} raised successfully!`, "success");
    closeManualCreateModal();
    renderActiveTickets();
  });

  // --- View & Track Ticket System ---
  let activeViewTicketId = null;

  window.viewTicket = function (ticketId) {
    activeViewTicketId = ticketId;
    const db = getDB();
    const t = db.tickets.find(tk => tk.id === ticketId);
    if (!t) return;

    const contentDiv = document.getElementById("viewTicketContent");
    const isDamage = t.type === "Damage";

    let dateVal = "";
    if (t.dueDate) {
      dateVal = parseDBDateToInputDate(t.dueDate);
    }

    let formHtml = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size:13px; color: #4B5563; margin-bottom:12px;">
        <div><strong>Ticket ID:</strong> <span style="font-weight:700;">${t.id}</span></div>
        <div><strong>Type:</strong> <span style="font-weight:600;">${t.type}</span></div>
        <div><strong>Team:</strong> <span>${t.teamName || t.assignedTo} (${t.assignedTo})</span></div>
        <div><strong>Asset:</strong> <span>${t.equipmentName || "N/A"}</span></div>
        ${t.timeSlot ? `<div style="grid-column: span 2;"><strong>Booking Slot:</strong> <span style="font-weight:600; color:#5C59F2;">${t.timeSlot}</span></div>` : ''}
        <div style="grid-column: span 2;"><strong>Subject:</strong> <span>${t.subject}</span></div>
        <div style="grid-column: span 2; background:#F8FAFC; padding:12px; border-radius:8px; border:1px solid var(--border-color);">
          <strong>Issue Details:</strong>
          <p style="margin:4px 0 0 0; color:var(--text-primary); line-height:1.4;">${escapeHtml(t.damageDescription || t.reason || "No details provided.")}</p>
        </div>
      </div>
      
      <div style="margin-top:16px;">
        <label style="font-size:12px; font-weight:700; color:#374151; display:block; margin-bottom:4px;">Ticket Status</label>
        <select id="detailStatus" style="width:100%; padding:10px; border:1.5px solid var(--border-color); border-radius:8px; outline:none; font-family:inherit; font-size:13px; color:var(--text-primary);">
          <option value="Open" ${t.status === 'Open' ? 'selected' : ''}>Open</option>
          <option value="Pending" ${t.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="In Progress" ${t.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
          <option value="Resolved" ${t.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
        </select>
      </div>
    `;

    if (isDamage) {
      formHtml += `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px;">
          
          <div>
            <label style="font-size:12px; font-weight:700; color:#374151; display:block; margin-bottom:4px;">Due Date</label>
            <input type="date" id="detailDueDate" value="${dateVal}" style="width:100%; padding:10px; border:1.5px solid var(--border-color); border-radius:8px; outline:none; font-family:inherit; font-size:13px; color:var(--text-primary);">
          </div>
        </div>
      `;
    }

    formHtml += `
      <div style="margin-top:12px;">
        <label style="font-size:12px; font-weight:700; color:#374151; display:block; margin-bottom:4px;">Remarks / Resolution Notes</label>
        <textarea id="detailRemarks" style="width:100%; height:75px; padding:10px; border:1.5px solid var(--border-color); border-radius:8px; outline:none; resize:vertical; font-family:inherit; font-size:13px; color:var(--text-primary);">${t.remarks || ''}</textarea>
      </div>
    `;

    contentDiv.innerHTML = formHtml;
    document.getElementById("viewTicketModal").style.display = "flex";
  };

  window.closeViewModal = function () {
    document.getElementById("viewTicketModal").style.display = "none";
    activeViewTicketId = null;
  };

  document.getElementById("viewTicketForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeViewTicketId) return;

    let db = getDB();
    const idx = db.tickets.findIndex(tk => tk.id === activeViewTicketId);
    if (idx === -1) return;

    const status = document.getElementById("detailStatus").value;
    const remarks = document.getElementById("detailRemarks").value.trim();

    const t = db.tickets[idx];
    t.status = status;
    t.remarks = remarks;

    const fineInput = document.getElementById("detailFineAmount");
    if (fineInput) {
      t.fineAmount = fineInput.value;
    }

    const dateInput = document.getElementById("detailDueDate");
    if (dateInput) {
      t.dueDate = formatInputDateToDBDate(dateInput.value);
    }

    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateStr = `${String(today.getDate()).padStart(2, "0")} ${months[today.getMonth()]} ${today.getFullYear()}`;
    const timeStr = today.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    t.lastUpdated = `${dateStr}, ${timeStr}`;

    setDB(db);
    showToast(`Ticket ${activeViewTicketId} updated successfully.`, "success");
    closeViewModal();
    renderActiveTickets();
  });

  // Initial runs
  renderActiveTickets();
});


        renderBaseLayout("tickets");
    
