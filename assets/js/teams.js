const DEFAULT_DATABASE = {
  currentUser: {
    username: "priya.sharma@rplms.com",
    name: "Dr. Priya Sharma",
    role: "Lab Incharge",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
    status: "Online",
    location: "Main Lab Complex",
    timezone: "IST (UTC+5:30)",
    email: "priya.sharma@rplms.com",
    phone: "+91 98765 43210",
  },

  notifications: [
    {
      id: "NTF-001",
      icon: "📦",
      iconClass: "notif-icon-request",
      body: "TEAM-001 has submitted a new component request for Arduino Mega boards.",
      time: "2 min ago",
      unread: true,
    },
    {
      id: "NTF-002",
      icon: "⏰",
      iconClass: "notif-icon-overdue",
      body: "TEAM-006 has 1 overdue equipment return — Raspberry Pi 4 (EQ-011).",
      time: "18 min ago",
      unread: true,
    },
    {
      id: "NTF-003",
      icon: "🎫",
      iconClass: "notif-icon-ticket",
      body: "New damage ticket TKT-007 raised by TEAM-002 for Digital Oscilloscope.",
      time: "1 hr ago",
      unread: true,
    },
    {
      id: "NTF-004",
      icon: "✅",
      iconClass: "notif-icon-info",
      body: "Component request REQ-012 for resistors was approved and marked fulfilled.",
      time: "3 hrs ago",
      unread: false,
    },
    {
      id: "NTF-005",
      icon: "📋",
      iconClass: "notif-icon-request",
      body: "TEAM-005 submitted a material return for Soldering Station (EQ-012).",
      time: "5 hrs ago",
      unread: false,
    },
    {
      id: "NTF-006",
      icon: "⚠️",
      iconClass: "notif-icon-overdue",
      body: "Inventory alert: 3D Printer (EQ-001) maintenance is due this week.",
      time: "Yesterday",
      unread: false,
    },
  ],

  teams: [
    {
      id: "TEAM-001",
      name: "Solar Car Project",
      leader: "Anil Mehta",
      membersCount: 8,
      activeProjects: 2,
      status: "Active",
    },
    {
      id: "TEAM-002",
      name: "Drone Flight Tech",
      leader: "Vikas Pillai",
      membersCount: 5,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-003",
      name: "Bio-Sensor Systems",
      leader: "Sarah Khan",
      membersCount: 6,
      activeProjects: 2,
      status: "Active",
    },
    {
      id: "TEAM-004",
      name: "Haptic Arm Development",
      leader: "John Doe",
      membersCount: 4,
      activeProjects: 1,
      status: "Suspended",
    },
    {
      id: "TEAM-005",
      name: "Smart Irrigation System",
      leader: "Rajesh Kumar",
      membersCount: 7,
      activeProjects: 2,
      status: "Active",
    },
    {
      id: "TEAM-006",
      name: "Eco Waste sorter",
      leader: "Deepa Nair",
      membersCount: 6,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-007",
      name: "VTOL UAV Propulsion",
      leader: "Karan Johar",
      membersCount: 9,
      activeProjects: 3,
      status: "Active",
    },
    {
      id: "TEAM-008",
      name: "3D Prosthetic Hand",
      leader: "Aditi Rao",
      membersCount: 5,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-009",
      name: "Autonomous AGV",
      leader: "Sanjay Dutt",
      membersCount: 6,
      activeProjects: 2,
      status: "Active",
    },
    {
      id: "TEAM-010",
      name: "Water Purifier IoT",
      leader: "Rita Sen",
      membersCount: 4,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-011",
      name: "Robotics Arm Team",
      leader: "Preeti Zinta",
      membersCount: 7,
      activeProjects: 2,
      status: "Active",
    },
    {
      id: "TEAM-012",
      name: "Smart Traffic Guard",
      leader: "Amir Khan",
      membersCount: 5,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-013",
      name: "Ocean Cleaner Probe",
      leader: "Shruti Roy",
      membersCount: 8,
      activeProjects: 2,
      status: "Active",
    },
    {
      id: "TEAM-014",
      name: "RFID Warehouse Robot",
      leader: "Abhay Singh",
      membersCount: 6,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-015",
      name: "Waste Management",
      leader: "Nikhil Joshi",
      membersCount: 7,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-016",
      name: "Exoskeleton Suit",
      leader: "Meera Iyer",
      membersCount: 6,
      activeProjects: 2,
      status: "Active",
    },
    {
      id: "TEAM-017",
      name: "Nano Filtration Unit",
      leader: "Arjun Verma",
      membersCount: 5,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-018",
      name: "AI Crop Monitor",
      leader: "Pooja Reddy",
      membersCount: 7,
      activeProjects: 2,
      status: "Active",
    },
    {
      id: "TEAM-019",
      name: "Swarm Robotics Lab",
      leader: "Farhan Qureshi",
      membersCount: 8,
      activeProjects: 3,
      status: "Active",
    },
    {
      id: "TEAM-020",
      name: "EV Charging Station",
      leader: "Kavya Menon",
      membersCount: 6,
      activeProjects: 1,
      status: "Active",
    },
    {
      id: "TEAM-021",
      name: "Underwater ROV",
      leader: "Rohan Desai",
      membersCount: 5,
      activeProjects: 2,
      status: "Active",
    },
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
      remarks: "Working Fine",
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
      remarks: "Service Due",
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
      remarks: "Operational",
    },
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
      comments: "Available",
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
      comments: "Limited",
    },
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
      comments: "Good Condition",
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
      comments: "Available",
    },
  ],

  inventory: [
    {
      id: "EQ-001",
      name: "3D Printer",
      type: "Equipment",
      manufacturer: "Creality",
      model: "Ender-3 V2",
      serial: "CRL-3DV2-2024-1125",
      location: "Mechanical Lab",
      status: "Available",
      dateAdded: "2025-06-15",
      description:
        "FDM 3D printer used for rapid prototyping and model making.",
    },
    {
      id: "EQ-002",
      name: "Arduino Uno R3",
      type: "Component",
      manufacturer: "Arduino",
      model: "Uno Rev 3",
      serial: "ARD-UNO-99382",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-01-10",
      description: "Microcontroller board based on the ATmega328P.",
    },
    {
      id: "EQ-003",
      name: "Ultrasonic Sensor",
      type: "Component",
      manufacturer: "Elegoo",
      model: "HC-SR04",
      serial: "EL-HC-2092",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-02-14",
      description: "Ultrasonic distance sensor module.",
    },
    {
      id: "EQ-004",
      name: "Soil Moisture Sensor",
      type: "Component",
      manufacturer: "Generic",
      model: "YL-69",
      serial: "GEN-YL-77291",
      location: "Bio Lab",
      status: "Available",
      dateAdded: "2025-03-01",
      description: "Resistance-based soil moisture measurement probe.",
    },
    {
      id: "EQ-005",
      name: "CNC Milling Machine",
      type: "Equipment",
      manufacturer: "SainSmart",
      model: "Genmitsu 3018-PRO",
      serial: "CNC-GEN-8827",
      location: "Mechanical Lab",
      status: "Maintenance",
      dateAdded: "2025-04-18",
      description: "Desktop CNC router for wood, acrylic, and PCB engraving.",
    },
    {
      id: "EQ-006",
      name: "Digital Oscilloscope",
      type: "Equipment",
      manufacturer: "Rigol",
      model: "DS1202Z-E",
      serial: "RIG-DS-44932",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-02-28",
      description: "200 MHz, 2-channel digital storage oscilloscope.",
    },
    {
      id: "EQ-007",
      name: "DC Motor 12V",
      type: "Component",
      manufacturer: "Generic",
      model: "RS-555",
      serial: "GEN-DC-38291",
      location: "Mechanical Lab",
      status: "Available",
      dateAdded: "2025-05-02",
      description: "High torque 12V DC motor.",
    },
    {
      id: "EQ-008",
      name: "16x2 LCD Display",
      type: "Component",
      manufacturer: "Generic",
      model: "HD44780",
      serial: "GEN-LCD-10293",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-03-12",
      description: "Alpha-numeric display module with purple backlight.",
    },
    {
      id: "EQ-009",
      name: "Li-ion Battery 18650",
      type: "Component",
      manufacturer: "Samsung",
      model: "25R 2500mAh",
      serial: "SAM-186-8291",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-04-05",
      description: "High-discharge rechargeable lithium-ion cell.",
    },
    {
      id: "EQ-010",
      name: "Laser Cutter",
      type: "Equipment",
      manufacturer: "Ortur",
      model: "Laser Master 2 Pro",
      serial: "ORT-LM2-88271",
      location: "Mechanical Lab",
      status: "Available",
      dateAdded: "2025-05-20",
      description: "Diode laser engraving and cutting machine.",
    },
    {
      id: "EQ-011",
      name: "Raspberry Pi 4",
      type: "Component",
      manufacturer: "Raspberry Pi",
      model: "Model B 8GB",
      serial: "RPi4-8G-0029",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-01-16",
      description: "Single board computer with 8GB RAM.",
    },
    {
      id: "EQ-012",
      name: "Soldering Station",
      type: "Equipment",
      manufacturer: "Hakko",
      model: "FX-888D",
      serial: "HAK-FX-2023",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-02-05",
      description: "Digital soldering station with temperature control.",
    },
    {
      id: "EQ-013",
      name: "Bench Multimeter",
      type: "Equipment",
      manufacturer: "Fluke",
      model: "8808A",
      serial: "FLU-88-82910",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-03-24",
      description: "5.5 digit precision benchtop digital multimeter.",
    },
    {
      id: "EQ-014",
      name: "Bipolar NEMA 17",
      type: "Component",
      manufacturer: "Stepperonline",
      model: "17HS19",
      serial: "STEP-N17-3829",
      location: "Mechanical Lab",
      status: "Available",
      dateAdded: "2025-04-11",
      description: "High-torque stepper motor for CNC/3D Printers.",
    },
    {
      id: "EQ-015",
      name: "LiPo Battery 11.1V",
      type: "Component",
      manufacturer: "Tattu",
      model: "2200mAh 3S 45C",
      serial: "TAT-LIPO-223",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-05-30",
      description: "Lithium polymer pack for drones and RC vehicles.",
    },
    {
      id: "EQ-016",
      name: "Hot Air Rework Station",
      type: "Equipment",
      manufacturer: "Quick",
      model: "861DW",
      serial: "QUI-861-9021",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-02-12",
      description: "1000W professional lead-free hot air rework station.",
    },
    {
      id: "EQ-017",
      name: "PIR Motion Sensor",
      type: "Component",
      manufacturer: "Adafruit",
      model: "HC-SR501",
      serial: "ADA-PIR-3329",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-03-10",
      description: "Pyroelectric infrared motion detection module.",
    },
    {
      id: "EQ-018",
      name: "Variable DC Power Supply",
      type: "Equipment",
      manufacturer: "Korado",
      model: "KA3005D",
      serial: "KOR-PWR-3829",
      location: "Electronics Lab",
      status: "Available",
      dateAdded: "2025-02-22",
      description: "Precision programmable DC linear power supply, 30V/5A.",
    },
    {
      id: "EQ-019",
      name: "3D Scanner",
      type: "Equipment",
      manufacturer: "EinScan",
      model: "SE V2",
      serial: "EIN-SCAN-4822",
      location: "Mechanical Lab",
      status: "Available",
      dateAdded: "2025-06-02",
      description: "Desktop white light 3D scanner for modeling.",
    },
    {
      id: "EQ-020",
      name: "Co2 Laser Tube",
      type: "Component",
      manufacturer: "RECI",
      model: "W2 90W",
      serial: "REC-CO2-9902",
      location: "Mechanical Lab",
      status: "Repairing",
      dateAdded: "2025-05-15",
      description: "CO2 glass laser tube replacement part.",
    },
  ],

  materialRequests: [
    {
      id: "REQ-001",
      teamId: "TEAM-001",
      teamName: "Solar Car Project",
      item: "Li-ion Battery 18650",
      avail: 30,
      qty: 24,
      status: "Fully Issued",
      date: "2025-07-02",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-002",
      teamId: "TEAM-005",
      teamName: "Smart Irrigation System",
      item: "Soil Moisture Sensor",
      avail: 30,
      qty: 5,
      status: "Pending",
      date: "2025-07-03",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-003",
      teamId: "TEAM-003",
      teamName: "Bio-Sensor Systems",
      item: "Arduino Uno R3",
      avail: 30,
      qty: 3,
      status: "Fully Issued",
      date: "2025-07-01",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-004",
      teamId: "TEAM-011",
      teamName: "Robotics Arm Team",
      item: "DC Motor 12V",
      avail: 30,
      qty: 6,
      status: "Rejected",
      date: "2025-06-30",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-005",
      teamId: "TEAM-002",
      teamName: "Drone Flight Tech",
      item: "LiPo Battery 11.1V",
      avail: 30,
      qty: 4,
      status: "Pending",
      date: "2025-07-03",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-006",
      teamId: "TEAM-008",
      teamName: "3D Prosthetic Hand",
      item: "Bipolar NEMA 17",
      avail: 30,
      qty: 10,
      status: "Fully Issued",
      date: "2025-06-28",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-007",
      teamId: "TEAM-009",
      teamName: "Autonomous AGV",
      item: "Arduino Uno R3",
      avail: 30,
      qty: 2,
      status: "Pending",
      date: "2025-07-04",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-008",
      teamId: "TEAM-015",
      teamName: "Waste Management",
      item: "Ultrasonic Sensor",
      avail: 30,
      qty: 4,
      status: "Fully Issued",
      date: "2025-06-27",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-009",
      teamId: "TEAM-001",
      teamName: "Solar Car Project",
      item: "Raspberry Pi 4",
      avail: 30,
      qty: 2,
      status: "Pending",
      date: "2025-07-05",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-010",
      teamId: "TEAM-002",
      teamName: "Drone Flight Tech",
      item: "PIR Motion Sensor",
      avail: 30,
      qty: 6,
      status: "Fully Issued",
      date: "2025-06-29",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-011",
      teamId: "TEAM-003",
      teamName: "Bio-Sensor Systems",
      item: "16x2 LCD Display",
      avail: 30,
      qty: 4,
      status: "Pending",
      date: "2025-07-05",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-012",
      teamId: "TEAM-004",
      teamName: "Haptic Arm Development",
      item: "Bipolar NEMA 17",
      avail: 30,
      qty: 3,
      status: "Rejected",
      date: "2025-06-26",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-013",
      teamId: "TEAM-005",
      teamName: "Smart Irrigation System",
      item: "Arduino Uno R3",
      avail: 30,
      qty: 5,
      status: "Fully Issued",
      date: "2025-07-01",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-014",
      teamId: "TEAM-006",
      teamName: "Eco Waste Sorter",
      item: "Raspberry Pi 4",
      avail: 30,
      qty: 1,
      status: "Pending",
      date: "2025-07-04",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-015",
      teamId: "TEAM-006",
      teamName: "Eco Waste Sorter",
      item: "Ultrasonic Sensor",
      avail: 30,
      qty: 8,
      status: "Fully Issued",
      date: "2025-06-30",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-016",
      teamId: "TEAM-007",
      teamName: "VTOL UAV Propulsion",
      item: "LiPo Battery 11.1V",
      avail: 30,
      qty: 6,
      status: "Fully Issued",
      date: "2025-07-02",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-017",
      teamId: "TEAM-007",
      teamName: "VTOL UAV Propulsion",
      item: "DC Motor 12V",
      avail: 30,
      qty: 4,
      status: "Pending",
      date: "2025-07-05",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-018",
      teamId: "TEAM-008",
      teamName: "3D Prosthetic Hand",
      item: "Li-ion Battery 18650",
      avail: 30,
      qty: 8,
      status: "Pending",
      date: "2025-07-04",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-019",
      teamId: "TEAM-009",
      teamName: "Autonomous AGV",
      item: "PIR Motion Sensor",
      avail: 30,
      qty: 5,
      status: "Fully Issued",
      date: "2025-06-28",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-020",
      teamId: "TEAM-010",
      teamName: "Water Purifier IoT",
      item: "Soil Moisture Sensor",
      avail: 30,
      qty: 6,
      status: "Fully Issued",
      date: "2025-07-01",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-021",
      teamId: "TEAM-010",
      teamName: "Water Purifier IoT",
      item: "Arduino Uno R3",
      avail: 30,
      qty: 2,
      status: "Pending",
      date: "2025-07-05",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-022",
      teamId: "TEAM-011",
      teamName: "Robotics Arm Team",
      item: "Bipolar NEMA 17",
      avail: 30,
      qty: 8,
      status: "Fully Issued",
      date: "2025-07-03",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-023",
      teamId: "TEAM-012",
      teamName: "Smart Traffic Guard",
      item: "Raspberry Pi 4",
      avail: 30,
      qty: 2,
      status: "Fully Issued",
      date: "2025-06-29",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-024",
      teamId: "TEAM-012",
      teamName: "Smart Traffic Guard",
      item: "PIR Motion Sensor",
      avail: 30,
      qty: 10,
      status: "Pending",
      date: "2025-07-04",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-025",
      teamId: "TEAM-013",
      teamName: "Ocean Cleaner Probe",
      item: "DC Motor 12V",
      avail: 30,
      qty: 3,
      status: "Fully Issued",
      date: "2025-07-02",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-026",
      teamId: "TEAM-013",
      teamName: "Ocean Cleaner Probe",
      item: "Li-ion Battery 18650",
      avail: 30,
      qty: 12,
      status: "Pending",
      date: "2025-07-05",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-027",
      teamId: "TEAM-014",
      teamName: "RFID Warehouse Robot",
      item: "Arduino Uno R3",
      avail: 30,
      qty: 4,
      status: "Fully Issued",
      date: "2025-06-30",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-028",
      teamId: "TEAM-014",
      teamName: "RFID Warehouse Robot",
      item: "16x2 LCD Display",
      avail: 30,
      qty: 6,
      status: "Rejected",
      date: "2025-06-27",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-029",
      teamId: "TEAM-015",
      teamName: "Waste Management",
      item: "Soil Moisture Sensor",
      avail: 30,
      qty: 5,
      status: "Pending",
      date: "2025-07-03",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-030",
      teamId: "TEAM-004",
      teamName: "Haptic Arm Development",
      item: "16x2 LCD Display",
      avail: 30,
      qty: 2,
      status: "Pending",
      date: "2025-07-05",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-031",
      teamId: "TEAM-016",
      teamName: "Exoskeleton Suit",
      item: "Bipolar NEMA 17",
      avail: 30,
      qty: 6,
      status: "Fully Issued",
      date: "2025-07-03",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-032",
      teamId: "TEAM-016",
      teamName: "Exoskeleton Suit",
      item: "Arduino Uno R3",
      avail: 30,
      qty: 3,
      status: "Pending",
      date: "2025-07-06",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-033",
      teamId: "TEAM-017",
      teamName: "Nano Filtration Unit",
      item: "Soil Moisture Sensor",
      avail: 30,
      qty: 8,
      status: "Fully Issued",
      date: "2025-07-02",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-034",
      teamId: "TEAM-017",
      teamName: "Nano Filtration Unit",
      item: "DC Motor 12V",
      avail: 30,
      qty: 2,
      status: "Pending",
      date: "2025-07-06",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-035",
      teamId: "TEAM-018",
      teamName: "AI Crop Monitor",
      item: "Raspberry Pi 4",
      avail: 30,
      qty: 3,
      status: "Fully Issued",
      date: "2025-07-04",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-036",
      teamId: "TEAM-018",
      teamName: "AI Crop Monitor",
      item: "PIR Motion Sensor",
      avail: 30,
      qty: 6,
      status: "Pending",
      date: "2025-07-06",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-037",
      teamId: "TEAM-019",
      teamName: "Swarm Robotics Lab",
      item: "Arduino Uno R3",
      avail: 30,
      qty: 8,
      status: "Fully Issued",
      date: "2025-07-03",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-038",
      teamId: "TEAM-019",
      teamName: "Swarm Robotics Lab",
      item: "LiPo Battery 11.1V",
      avail: 30,
      qty: 5,
      status: "Pending",
      date: "2025-07-06",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-039",
      teamId: "TEAM-020",
      teamName: "EV Charging Station",
      item: "Li-ion Battery 18650",
      avail: 30,
      qty: 20,
      status: "Fully Issued",
      date: "2025-07-04",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-040",
      teamId: "TEAM-020",
      teamName: "EV Charging Station",
      item: "Variable DC Power Supply",
      avail: 30,
      qty: 1,
      status: "Pending",
      date: "2025-07-06",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-041",
      teamId: "TEAM-021",
      teamName: "Underwater ROV",
      item: "DC Motor 12V",
      avail: 30,
      qty: 4,
      status: "Fully Issued",
      date: "2025-07-03",
      slot: "2.00-3.00",
    },
    {
      id: "REQ-042",
      teamId: "TEAM-021",
      teamName: "Underwater ROV",
      item: "Raspberry Pi 4",
      avail: 30,
      qty: 2,
      status: "Pending",
      date: "2025-07-06",
      slot: "2.00-3.00",
    },
  ],

  materialReturns: (function () {
    // Helper: offset days from today
    function daysFromToday(n) {
      const d = new Date();
      d.setDate(d.getDate() + n);
      return d.toISOString().slice(0, 10);
    }
    return [
      {
        id: "RET-001",
        teamId: "TEAM-001",
        teamName: "Solar Car Project",
        item: "Digital Oscilloscope",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-4),
      },
      {
        id: "RET-002",
        teamId: "TEAM-003",
        teamName: "Bio-Sensor Systems",
        item: "Bench Multimeter",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-10),
      },
      {
        id: "RET-003",
        teamId: "TEAM-005",
        teamName: "Smart Irrigation System",
        item: "Soldering Station",
        qty: 2,
        status: "Assigned",
        date: daysFromToday(10),
      },
      {
        id: "RET-004",
        teamId: "TEAM-011",
        teamName: "Robotics Arm Team",
        item: "Variable DC Power Supply",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(7),
      },
      {
        id: "RET-005",
        teamId: "TEAM-002",
        teamName: "Drone Flight Tech",
        item: "Soldering Station",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-3),
      },
      {
        id: "RET-006",
        teamId: "TEAM-013",
        teamName: "Ocean Cleaner Probe",
        item: "Bench Multimeter",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(9),
      },
      {
        id: "RET-007",
        teamId: "TEAM-001",
        teamName: "Solar Car Project",
        item: "Laser Cutter",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(8),
      },
      {
        id: "RET-008",
        teamId: "TEAM-001",
        teamName: "Solar Car Project",
        item: "3D Printer",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-7),
      },
      {
        id: "RET-009",
        teamId: "TEAM-002",
        teamName: "Drone Flight Tech",
        item: "Digital Oscilloscope",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(6),
      },
      {
        id: "RET-010",
        teamId: "TEAM-002",
        teamName: "Drone Flight Tech",
        item: "Hot Air Rework Station",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-11),
      },
      {
        id: "RET-011",
        teamId: "TEAM-003",
        teamName: "Bio-Sensor Systems",
        item: "Soldering Station",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(5),
      },
      {
        id: "RET-012",
        teamId: "TEAM-003",
        teamName: "Bio-Sensor Systems",
        item: "Variable DC Power Supply",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-2),
      },
      {
        id: "RET-013",
        teamId: "TEAM-004",
        teamName: "Haptic Arm Development",
        item: "Bench Multimeter",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-13),
      },
      {
        id: "RET-014",
        teamId: "TEAM-005",
        teamName: "Smart Irrigation System",
        item: "Digital Oscilloscope",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-1),
      },
      {
        id: "RET-015",
        teamId: "TEAM-005",
        teamName: "Smart Irrigation System",
        item: "3D Printer",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(11),
      },
      {
        id: "RET-016",
        teamId: "TEAM-006",
        teamName: "Eco Waste Sorter",
        item: "Laser Cutter",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(4),
      },
      {
        id: "RET-017",
        teamId: "TEAM-006",
        teamName: "Eco Waste Sorter",
        item: "Soldering Station",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-9),
      },
      {
        id: "RET-018",
        teamId: "TEAM-007",
        teamName: "VTOL UAV Propulsion",
        item: "CNC Milling Machine",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(13),
      },
      {
        id: "RET-019",
        teamId: "TEAM-007",
        teamName: "VTOL UAV Propulsion",
        item: "3D Scanner",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-5),
      },
      {
        id: "RET-020",
        teamId: "TEAM-007",
        teamName: "VTOL UAV Propulsion",
        item: "Hot Air Rework Station",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-12),
      },
      {
        id: "RET-021",
        teamId: "TEAM-008",
        teamName: "3D Prosthetic Hand",
        item: "3D Printer",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(5),
      },
      {
        id: "RET-022",
        teamId: "TEAM-008",
        teamName: "3D Prosthetic Hand",
        item: "Soldering Station",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-4),
      },
      {
        id: "RET-023",
        teamId: "TEAM-009",
        teamName: "Autonomous AGV",
        item: "Laser Cutter",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(7),
      },
      {
        id: "RET-024",
        teamId: "TEAM-009",
        teamName: "Autonomous AGV",
        item: "Variable DC Power Supply",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-8),
      },
      {
        id: "RET-025",
        teamId: "TEAM-010",
        teamName: "Water Purifier IoT",
        item: "Bench Multimeter",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(6),
      },
      {
        id: "RET-026",
        teamId: "TEAM-010",
        teamName: "Water Purifier IoT",
        item: "Soldering Station",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-3),
      },
      {
        id: "RET-027",
        teamId: "TEAM-011",
        teamName: "Robotics Arm Team",
        item: "Digital Oscilloscope",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-6),
      },
      {
        id: "RET-028",
        teamId: "TEAM-012",
        teamName: "Smart Traffic Guard",
        item: "3D Printer",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(9),
      },
      {
        id: "RET-029",
        teamId: "TEAM-012",
        teamName: "Smart Traffic Guard",
        item: "Bench Multimeter",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-2),
      },
      {
        id: "RET-030",
        teamId: "TEAM-013",
        teamName: "Ocean Cleaner Probe",
        item: "Laser Cutter",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-5),
      },
      {
        id: "RET-031",
        teamId: "TEAM-014",
        teamName: "RFID Warehouse Robot",
        item: "Variable DC Power Supply",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(8),
      },
      {
        id: "RET-032",
        teamId: "TEAM-014",
        teamName: "RFID Warehouse Robot",
        item: "Digital Oscilloscope",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-1),
      },
      {
        id: "RET-033",
        teamId: "TEAM-015",
        teamName: "Waste Management",
        item: "Soldering Station",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(10),
      },
      {
        id: "RET-034",
        teamId: "TEAM-015",
        teamName: "Waste Management",
        item: "Hot Air Rework Station",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-10),
      },
      {
        id: "RET-035",
        teamId: "TEAM-016",
        teamName: "Exoskeleton Suit",
        item: "Variable DC Power Supply",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(11),
      },
      {
        id: "RET-036",
        teamId: "TEAM-016",
        teamName: "Exoskeleton Suit",
        item: "Soldering Station",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-7),
      },
      {
        id: "RET-037",
        teamId: "TEAM-017",
        teamName: "Nano Filtration Unit",
        item: "Bench Multimeter",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(9),
      },
      {
        id: "RET-038",
        teamId: "TEAM-017",
        teamName: "Nano Filtration Unit",
        item: "Digital Oscilloscope",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-2),
      },
      {
        id: "RET-039",
        teamId: "TEAM-018",
        teamName: "AI Crop Monitor",
        item: "3D Printer",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(12),
      },
      {
        id: "RET-040",
        teamId: "TEAM-018",
        teamName: "AI Crop Monitor",
        item: "Laser Cutter",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-8),
      },
      {
        id: "RET-041",
        teamId: "TEAM-019",
        teamName: "Swarm Robotics Lab",
        item: "Soldering Station",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(10),
      },
      {
        id: "RET-042",
        teamId: "TEAM-019",
        teamName: "Swarm Robotics Lab",
        item: "Hot Air Rework Station",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-9),
      },
      {
        id: "RET-043",
        teamId: "TEAM-020",
        teamName: "EV Charging Station",
        item: "Variable DC Power Supply",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(8),
      },
      {
        id: "RET-044",
        teamId: "TEAM-020",
        teamName: "EV Charging Station",
        item: "Bench Multimeter",
        qty: 1,
        status: "Returned",
        date: daysFromToday(-1),
      },
      {
        id: "RET-045",
        teamId: "TEAM-021",
        teamName: "Underwater ROV",
        item: "Digital Oscilloscope",
        qty: 1,
        status: "Assigned",
        date: daysFromToday(11),
      },
      {
        id: "RET-046",
        teamId: "TEAM-021",
        teamName: "Underwater ROV",
        item: "Soldering Station",
        qty: 1,
        status: "Overdue",
        date: daysFromToday(-6),
      },
    ];
  })(),

  tickets: [
    {
      id: "TKT-001",
      type: "Procurement",
      assignedTo: "Administrator",
      subject: "Low Stock Components",
      priority: "High",
      date: "04 Jul 2025",
      status: "Open",
      assigneeRole: "System Admin",
      raisedBy: "Dr. Priya Sharma",
      time: "10:15 AM",
      reason:
        "Multiple inventory components have reached the minimum stock level. Procurement approval is requested to maintain smooth lab operations.",
      items: [
        { name: "Arduino Uno R3", qty: "05", min: "10" },
        { name: "Soil Moisture Sensor", qty: "02", min: "05" },
        { name: "16x2 LCD Display", qty: "03", min: "05" },
        { name: "DC Motor 12V", qty: "01", min: "03" },
        { name: "Li-ion Battery 18650", qty: "04", min: "10" },
      ],
      adminResponse: "",
    },

    {
      id: "TKT-002",
      type: "Damage",
      assignedTo: "TEAM-005",
      subject: "Arduino Uno R3 Damaged",
      priority: "Medium",
      date: "03 Jul 2025",
      status: "Pending",
      teamName: "Smart Irrigation System",
      equipmentName: "Arduino Uno R3",
      raisedBy: "Lab Incharge",
      time: "02:15 PM",
      damageDescription:
        "USB port is physically damaged during project testing.",
      fineAmount: "500",
      dueDate: "10 Jul 2025",
      remarks: "Fine to be paid by the team before next material issue.",
      teamResponse: "",
      lastUpdated: "03 Jul 2025, 02:15 PM",
    },

    {
      id: "TKT-003",
      type: "Damage",
      assignedTo: "TEAM-011",
      subject: "DC Motor 12V Broken",
      priority: "High",
      date: "02 Jul 2025",
      status: "In Progress",
      teamName: "Robotics Arm",
      equipmentName: "DC Motor 12V",
      raisedBy: "Lab Incharge",
      time: "11:30 AM",
      damageDescription: "Motor coil burned out due to overloading.",
      fineAmount: "300",
      dueDate: "09 Jul 2025",
      remarks: "Replacement motor cost.",
      teamResponse: "We have received the notice. Discussing with team leader.",
      lastUpdated: "02 Jul 2025, 03:00 PM",
    },

    {
      id: "TKT-004",
      type: "Procurement",
      assignedTo: "Administrator",
      subject: "Request for Additional Sensors",
      priority: "Medium",
      date: "01 Jul 2025",
      status: "In Progress",
      assigneeRole: "System Admin",
      raisedBy: "Dr. Priya Sharma",
      time: "09:45 AM",
      reason: "Additional sensors needed for upcoming workshop.",
      items: [
        { name: "Ultrasonic Sensor", qty: "15", min: "05" },
        { name: "PIR Motion Sensor", qty: "20", min: "05" },
      ],
      adminResponse: "Quotation requested from vendor.",
    },

    {
      id: "TKT-005",
      type: "Damage",
      assignedTo: "TEAM-008",
      subject: "16x2 LCD Display Cracked",
      priority: "Low",
      date: "30 Jun 2025",
      status: "Resolved",
      teamName: "3D Prosthetic Hand",
      equipmentName: "16x2 LCD Display",
      raisedBy: "Lab Incharge",
      time: "04:00 PM",
      damageDescription: "Screen cracked during mechanical assembly mounting.",
      fineAmount: "150",
      dueDate: "07 Jul 2025",
      remarks: "Standard replacement fine.",
      teamResponse: "Fine paid. Receipt number #88271.",
      lastUpdated: "01 Jul 2025, 10:20 AM",
    },

    {
      id: "TKT-006",
      type: "Procurement",
      assignedTo: "Administrator",
      subject: "Low Stock - Batteries",
      priority: "High",
      date: "29 Jun 2025",
      status: "Resolved",
      assigneeRole: "System Admin",
      raisedBy: "Dr. Priya Sharma",
      time: "11:20 AM",
      reason: "Li-ion Battery stock critically low.",
      items: [{ name: "Li-ion Battery 18650", qty: "02", min: "10" }],
      adminResponse: "PO Issued. Delivery expected by next week.",
    },

    {
      id: "TKT-007",
      type: "Damage",
      assignedTo: "TEAM-015",
      subject: "Soil Moisture Sensor Damaged",
      priority: "Medium",
      date: "28 Jun 2025",
      status: "Open",
      teamName: "Waste Management",
      equipmentName: "Soil Moisture Sensor",
      raisedBy: "Lab Incharge",
      time: "10:00 AM",
      damageDescription:
        "Corrosion due to extended water immersion test without waterproofing cover.",
      fineAmount: "200",
      dueDate: "05 Jul 2025",
      remarks: "Cost of sensor replacement.",
      teamResponse: "",
      lastUpdated: "28 Jun 2025, 10:00 AM",
    },
  ],
  bookedEquipment: [],
  equipmentRequests: [
    {
      teamId: "TEAM-001",
      teamName: "Solar Car Project",
      requests: [
        {
          id: "ER-101",
          equipmentType: "Manufacturing",
          equipmentId: "EQ-001",
          equipmentName: "3D Printer",
          timeSlot: "10:00 AM - 12:00 PM",
          status: "Pending",
          note: "",
        },
        {
          id: "ER-102",
          equipmentType: "Manufacturing",
          equipmentId: "EQ-005",
          equipmentName: "CNC Milling Machine",
          timeSlot: "02:00 PM - 04:00 PM",
          status: "Pending",
          note: "",
        },
      ],
    },
    {
      teamId: "TEAM-002",
      teamName: "Drone Flight Tech",
      requests: [
        {
          id: "ER-201",
          equipmentType: "Manufacturing",
          equipmentId: "EQ-010",
          equipmentName: "Laser Cutter",
          timeSlot: "11:00 AM - 01:00 PM",
          status: "Pending",
          note: "",
        },
      ],
    },
    {
      teamId: "TEAM-003",
      teamName: "Bio-Sensor Systems",
      requests: [
        {
          id: "ER-301",
          equipmentType: "Electronics",
          equipmentId: "EQ-006",
          equipmentName: "Digital Oscilloscope",
          timeSlot: "09:00 AM - 11:00 AM",
          status: "Approved",
          note: "",
        },
        {
          id: "ER-302",
          equipmentType: "Electronics",
          equipmentId: "EQ-018",
          equipmentName: "Variable DC Power Supply",
          timeSlot: "01:00 PM - 03:00 PM",
          status: "Approved",
          note: "",
        },
      ],
    },
    {
      teamId: "TEAM-005",
      teamName: "Smart Irrigation System",
      requests: [
        {
          id: "ER-501",
          equipmentType: "Electronics",
          equipmentId: "EQ-012",
          equipmentName: "Soldering Station",
          timeSlot: "02:00 PM - 04:00 PM",
          status: "Rejected",
          note: "Sent for Repair",
        },
      ],
    },
  ],
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
    { name: "TEAM-003", desc: "Bio-Sensor Systems" },
  ];
  const equipment = [
    "Arduino Uno R3",
    "3D Printer",
    "CNC Milling Machine",
    "Digital Oscilloscope",
    "Raspberry Pi 4",
  ];
  const dates = [
    "27 Jun 2025",
    "26 Jun 2025",
    "25 Jun 2025",
    "24 Jun 2025",
    "23 Jun 2025",
    "22 Jun 2025",
    "21 Jun 2025",
    "20 Jun 2025",
  ];

  let baseId = 8;
  while (DEFAULT_DATABASE.tickets.length < 32) {
    const type = types[Math.floor(Math.random() * types.length)];
    const priority = priorities[Math.floor(Math.random() * priorities.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const date = dates[Math.floor(Math.random() * dates.length)];
    const id = `TKT-${String(baseId).padStart(3, "0")}`;
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
        items: [{ name: "Item Replacements", qty: "02", min: "05" }],
        adminResponse: status === "Resolved" ? "Request processed." : "",
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
        lastUpdated: `${date}, 11:30 AM`,
      });
    }
  }
}
fillRemainingTickets();

const DB_VERSION = 12;
function initLocalStorageDB() {
  const storedVersion = parseInt(
    localStorage.getItem("rplms_db_version") || "0",
  );
  if (storedVersion < DB_VERSION) {
    localStorage.setItem("rplms_db", JSON.stringify(DEFAULT_DATABASE));
    localStorage.setItem("rplms_db_version", String(DB_VERSION));
  }
}
initLocalStorageDB();

// Call renderBaseLayout
// Team Workspace - Full Logic

document.addEventListener("DOMContentLoaded", () => {
  renderBaseLayout("teams");

  // Helper: offset days from today as YYYY-MM-DD
  function daysFromToday(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  }

  // ── Extended dummy data per team ──────────────────────────────────────────
  const TEAM_EXTRA = {
    "TEAM-001": {
      project: "Solar EV Prototype 2025",
      bookings: [
        {
          eq: "3D Printer",
          eqId: "EQ-001",
          date: daysFromToday(5),
          slot: "09:00–11:00",
          purpose: "Chassis part printing",
        },
        {
          eq: "Laser Cutter",
          eqId: "EQ-010",
          date: daysFromToday(7),
          slot: "14:00–16:00",
          purpose: "Panel cutting",
        },
      ],
    },
    "TEAM-002": {
      project: "Autonomous Drone v3",
      bookings: [
        {
          eq: "Digital Oscilloscope",
          eqId: "EQ-006",
          date: daysFromToday(4),
          slot: "10:00–12:00",
          purpose: "Signal testing",
        },
      ],
    },
    "TEAM-003": {
      project: "Wearable Bio Monitor",
      bookings: [
        {
          eq: "Soldering Station",
          eqId: "EQ-012",
          date: daysFromToday(3),
          slot: "13:00–15:00",
          purpose: "PCB assembly",
        },
        {
          eq: "Bench Multimeter",
          eqId: "EQ-013",
          date: daysFromToday(6),
          slot: "09:00–10:00",
          purpose: "Resistance check",
        },
      ],
    },
    "TEAM-004": { project: "Haptic Feedback Glove", bookings: [] },
    "TEAM-005": {
      project: "Smart Farm IoT System",
      bookings: [
        {
          eq: "3D Printer",
          eqId: "EQ-001",
          date: daysFromToday(8),
          slot: "11:00–13:00",
          purpose: "Sensor housing",
        },
      ],
    },
    "TEAM-006": {
      project: "Eco Waste Classifier",
      bookings: [
        {
          eq: "Raspberry Pi 4",
          eqId: "EQ-011",
          date: daysFromToday(4),
          slot: "15:00–17:00",
          purpose: "ML model testing",
        },
      ],
    },
    "TEAM-007": {
      project: "VTOL UAV Mk-II",
      bookings: [
        {
          eq: "CNC Milling Machine",
          eqId: "EQ-005",
          date: daysFromToday(9),
          slot: "09:00–12:00",
          purpose: "Frame milling",
        },
        {
          eq: "3D Scanner",
          eqId: "EQ-019",
          date: daysFromToday(10),
          slot: "13:00–14:00",
          purpose: "Part inspection",
        },
      ],
    },
    "TEAM-008": {
      project: "Prosthetic Hand v2",
      bookings: [
        {
          eq: "3D Printer",
          eqId: "EQ-001",
          date: daysFromToday(5),
          slot: "13:00–15:00",
          purpose: "Finger joint print",
        },
      ],
    },
    "TEAM-009": {
      project: "AGV Navigation System",
      bookings: [
        {
          eq: "Laser Cutter",
          eqId: "EQ-010",
          date: daysFromToday(6),
          slot: "10:00–12:00",
          purpose: "Chassis cutting",
        },
      ],
    },
    "TEAM-010": {
      project: "IoT Water Purifier",
      bookings: [
        {
          eq: "Soldering Station",
          eqId: "EQ-012",
          date: daysFromToday(3),
          slot: "09:00–11:00",
          purpose: "Sensor wiring",
        },
      ],
    },
    "TEAM-011": {
      project: "6-DOF Robotic Arm",
      bookings: [
        {
          eq: "Variable DC Power Supply",
          eqId: "EQ-018",
          date: daysFromToday(4),
          slot: "14:00–16:00",
          purpose: "Motor calibration",
        },
      ],
    },
    "TEAM-012": {
      project: "AI Traffic Controller",
      bookings: [
        {
          eq: "Raspberry Pi 4",
          eqId: "EQ-011",
          date: daysFromToday(7),
          slot: "10:00–12:00",
          purpose: "Camera feed test",
        },
      ],
    },
    "TEAM-013": {
      project: "Ocean Debris Collector",
      bookings: [
        {
          eq: "3D Printer",
          eqId: "EQ-001",
          date: daysFromToday(8),
          slot: "09:00–11:00",
          purpose: "Hull prototype",
        },
      ],
    },
    "TEAM-014": {
      project: "RFID Smart Warehouse",
      bookings: [
        {
          eq: "Bench Multimeter",
          eqId: "EQ-013",
          date: daysFromToday(5),
          slot: "11:00–12:00",
          purpose: "Circuit testing",
        },
      ],
    },
    "TEAM-015": {
      project: "Smart Waste Sorter",
      bookings: [
        {
          eq: "Soldering Station",
          eqId: "EQ-012",
          date: daysFromToday(6),
          slot: "13:00–15:00",
          purpose: "Sensor integration",
        },
      ],
    },
    "TEAM-016": {
      project: "Exoskeleton Mk-I",
      bookings: [
        {
          eq: "Variable DC Power Supply",
          eqId: "EQ-018",
          date: daysFromToday(5),
          slot: "09:00–11:00",
          purpose: "Actuator testing",
        },
        {
          eq: "3D Printer",
          eqId: "EQ-001",
          date: daysFromToday(9),
          slot: "13:00–15:00",
          purpose: "Joint bracket print",
        },
      ],
    },
    "TEAM-017": {
      project: "Nano Filter Prototype",
      bookings: [
        {
          eq: "Bench Multimeter",
          eqId: "EQ-013",
          date: daysFromToday(4),
          slot: "10:00–12:00",
          purpose: "Conductivity check",
        },
      ],
    },
    "TEAM-018": {
      project: "Smart Crop AI v2",
      bookings: [
        {
          eq: "Raspberry Pi 4",
          eqId: "EQ-011",
          date: daysFromToday(6),
          slot: "14:00–16:00",
          purpose: "Model inference test",
        },
        {
          eq: "3D Printer",
          eqId: "EQ-001",
          date: daysFromToday(10),
          slot: "09:00–11:00",
          purpose: "Enclosure print",
        },
      ],
    },
    "TEAM-019": {
      project: "Swarm Bot Fleet",
      bookings: [
        {
          eq: "Soldering Station",
          eqId: "EQ-012",
          date: daysFromToday(5),
          slot: "11:00–13:00",
          purpose: "PCB soldering",
        },
        {
          eq: "Laser Cutter",
          eqId: "EQ-010",
          date: daysFromToday(8),
          slot: "14:00–16:00",
          purpose: "Chassis cutting",
        },
      ],
    },
    "TEAM-020": {
      project: "EV Fast Charger",
      bookings: [
        {
          eq: "Variable DC Power Supply",
          eqId: "EQ-018",
          date: daysFromToday(7),
          slot: "09:00–11:00",
          purpose: "Charging curve test",
        },
      ],
    },
    "TEAM-021": {
      project: "Deep Sea ROV v1",
      bookings: [
        {
          eq: "Digital Oscilloscope",
          eqId: "EQ-006",
          date: daysFromToday(4),
          slot: "13:00–15:00",
          purpose: "Motor driver signal check",
        },
        {
          eq: "3D Printer",
          eqId: "EQ-001",
          date: daysFromToday(9),
          slot: "10:00–12:00",
          purpose: "Thruster housing print",
        },
      ],
    },
  };

  // Extended material returns with bookDate + slot (dynamic dates relative to today)
  const EQ_EXTENDED = {
    "RET-001": {
      bookDate: daysFromToday(-8),
      slot: "09:00–11:00",
      eqId: "EQ-006",
    },
    "RET-002": {
      bookDate: daysFromToday(-15),
      slot: "14:00–16:00",
      eqId: "EQ-013",
    },
    "RET-003": {
      bookDate: daysFromToday(-4),
      slot: "10:00–12:00",
      eqId: "EQ-012",
    },
    "RET-004": {
      bookDate: daysFromToday(-3),
      slot: "13:00–15:00",
      eqId: "EQ-018",
    },
    "RET-005": {
      bookDate: daysFromToday(-6),
      slot: "09:00–11:00",
      eqId: "EQ-012",
    },
    "RET-006": {
      bookDate: daysFromToday(-5),
      slot: "11:00–13:00",
      eqId: "EQ-013",
    },
    "RET-007": {
      bookDate: daysFromToday(-2),
      slot: "14:00–16:00",
      eqId: "EQ-010",
    },
    "RET-008": {
      bookDate: daysFromToday(-14),
      slot: "09:00–11:00",
      eqId: "EQ-001",
    },
    "RET-009": {
      bookDate: daysFromToday(-3),
      slot: "10:00–12:00",
      eqId: "EQ-006",
    },
    "RET-010": {
      bookDate: daysFromToday(-17),
      slot: "13:00–15:00",
      eqId: "EQ-016",
    },
    "RET-011": {
      bookDate: daysFromToday(-4),
      slot: "09:00–11:00",
      eqId: "EQ-012",
    },
    "RET-012": {
      bookDate: daysFromToday(-9),
      slot: "14:00–16:00",
      eqId: "EQ-018",
    },
    "RET-013": {
      bookDate: daysFromToday(-20),
      slot: "10:00–12:00",
      eqId: "EQ-013",
    },
    "RET-014": {
      bookDate: daysFromToday(-7),
      slot: "11:00–13:00",
      eqId: "EQ-006",
    },
    "RET-015": {
      bookDate: daysFromToday(-3),
      slot: "09:00–11:00",
      eqId: "EQ-001",
    },
    "RET-016": {
      bookDate: daysFromToday(-6),
      slot: "14:00–16:00",
      eqId: "EQ-010",
    },
    "RET-017": {
      bookDate: daysFromToday(-16),
      slot: "10:00–12:00",
      eqId: "EQ-012",
    },
    "RET-018": {
      bookDate: daysFromToday(-2),
      slot: "09:00–12:00",
      eqId: "EQ-005",
    },
    "RET-019": {
      bookDate: daysFromToday(-8),
      slot: "13:00–14:00",
      eqId: "EQ-019",
    },
    "RET-020": {
      bookDate: daysFromToday(-19),
      slot: "14:00–16:00",
      eqId: "EQ-016",
    },
    "RET-021": {
      bookDate: daysFromToday(-5),
      slot: "13:00–15:00",
      eqId: "EQ-001",
    },
    "RET-022": {
      bookDate: daysFromToday(-9),
      slot: "09:00–11:00",
      eqId: "EQ-012",
    },
    "RET-023": {
      bookDate: daysFromToday(-4),
      slot: "10:00–12:00",
      eqId: "EQ-010",
    },
    "RET-024": {
      bookDate: daysFromToday(-14),
      slot: "13:00–15:00",
      eqId: "EQ-018",
    },
    "RET-025": {
      bookDate: daysFromToday(-5),
      slot: "09:00–11:00",
      eqId: "EQ-013",
    },
    "RET-026": {
      bookDate: daysFromToday(-9),
      slot: "14:00–16:00",
      eqId: "EQ-012",
    },
    "RET-027": {
      bookDate: daysFromToday(-12),
      slot: "10:00–12:00",
      eqId: "EQ-006",
    },
    "RET-028": {
      bookDate: daysFromToday(-3),
      slot: "09:00–11:00",
      eqId: "EQ-001",
    },
    "RET-029": {
      bookDate: daysFromToday(-8),
      slot: "11:00–13:00",
      eqId: "EQ-013",
    },
    "RET-030": {
      bookDate: daysFromToday(-11),
      slot: "14:00–16:00",
      eqId: "EQ-010",
    },
    "RET-031": {
      bookDate: daysFromToday(-4),
      slot: "10:00–12:00",
      eqId: "EQ-018",
    },
    "RET-032": {
      bookDate: daysFromToday(-7),
      slot: "13:00–15:00",
      eqId: "EQ-006",
    },
    "RET-033": {
      bookDate: daysFromToday(-2),
      slot: "09:00–11:00",
      eqId: "EQ-012",
    },
    "RET-034": {
      bookDate: daysFromToday(-17),
      slot: "14:00–16:00",
      eqId: "EQ-016",
    },
    "RET-035": {
      bookDate: daysFromToday(-3),
      slot: "09:00–11:00",
      eqId: "EQ-018",
    },
    "RET-036": {
      bookDate: daysFromToday(-13),
      slot: "13:00–15:00",
      eqId: "EQ-012",
    },
    "RET-037": {
      bookDate: daysFromToday(-4),
      slot: "10:00–12:00",
      eqId: "EQ-013",
    },
    "RET-038": {
      bookDate: daysFromToday(-8),
      slot: "14:00–16:00",
      eqId: "EQ-006",
    },
    "RET-039": {
      bookDate: daysFromToday(-2),
      slot: "09:00–11:00",
      eqId: "EQ-001",
    },
    "RET-040": {
      bookDate: daysFromToday(-14),
      slot: "14:00–16:00",
      eqId: "EQ-010",
    },
    "RET-041": {
      bookDate: daysFromToday(-3),
      slot: "11:00–13:00",
      eqId: "EQ-012",
    },
    "RET-042": {
      bookDate: daysFromToday(-15),
      slot: "09:00–11:00",
      eqId: "EQ-016",
    },
    "RET-043": {
      bookDate: daysFromToday(-4),
      slot: "09:00–11:00",
      eqId: "EQ-018",
    },
    "RET-044": {
      bookDate: daysFromToday(-7),
      slot: "13:00–15:00",
      eqId: "EQ-013",
    },
    "RET-045": {
      bookDate: daysFromToday(-5),
      slot: "13:00–15:00",
      eqId: "EQ-006",
    },
    "RET-046": {
      bookDate: daysFromToday(-12),
      slot: "10:00–12:00",
      eqId: "EQ-012",
    },
  };

  // ── State ─────────────────────────────────────────────────────────────────
  let currentTeamId = null;
  let lastSearchId = null;

  let eqData = [],
    eqFiltered = [],
    eqPage = 1,
    eqSort = { field: "returnDate", dir: "asc" };
  let reqData = [],
    reqFiltered = [],
    reqPage = 1;
  const PER_PAGE = 5;

  // ── DOM refs ──────────────────────────────────────────────────────────────
  const searchInput = document.getElementById("teamSearchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resetBtn = document.getElementById("resetBtn");
  const searchError = document.getElementById("searchError");
  const emptyState = document.getElementById("emptyState");
  const workspace = document.getElementById("workspaceContent");

  // ── Quick Access Table ─────────────────────────────────────────────────
  let quickPage = 1;
  const QUICK_PER_PAGE = 5;

  function renderQuickTable() {
    let db =
      getDB() ||
      (typeof DEFAULT_DATABASE !== "undefined" ? DEFAULT_DATABASE : null);
    if (!db || !Array.isArray(db.teams) || db.teams.length === 0) {
      console.warn("RPLMS: local DB has no teams — restoring default data.");
      if (typeof DEFAULT_DATABASE !== "undefined") {
        setDB(DEFAULT_DATABASE);
        db = getDB();
      }
    }

    const active = (db.teams || []).filter((t) => t.status === "Active");
    const activeCountEl = document.getElementById("activeTeamCount");
    if (activeCountEl) activeCountEl.textContent = active.length + " Active";

    const total = active.length;
    const pages = Math.ceil(total / QUICK_PER_PAGE) || 1;
    if (quickPage > pages) quickPage = pages;
    const start = (quickPage - 1) * QUICK_PER_PAGE;
    const slice = active.slice(start, start + QUICK_PER_PAGE);

    const tbody = document.getElementById("quickTeamsBody");
    tbody.innerHTML = slice
      .map((t) => {
        const overdue = db.materialReturns.filter(
          (r) => r.teamId === t.id && r.status === "Overdue",
        ).length;
        const overdueTag =
          overdue > 0
            ? `<span class="teams-style-2314da">${overdue} Overdue</span>`
            : "";
        return `<tr>
                <td class="teams-style-8744e4">${t.id}</td>
                <td class="teams-style-a5d2ba">${t.name}</td>
                <td class="teams-style-a5d2ba">${String(t.activeProjects).padStart(2, "0")}</td>
                <td><span class="badge status-resolved">Active</span></td>
                <td><button class="btn-view" data-action="quickLoad" data-id="${t.id}">View</button></td>
            </tr>`;
      })
      .join("");

    document.getElementById("quickTableInfo").textContent =
      `Showing ${start + 1}–${Math.min(start + QUICK_PER_PAGE, total)} of ${total} teams`;
    renderPagination("quickPagination", quickPage, pages, (p) => {
      quickPage = p;
      renderQuickTable();
    });
  }

  window.quickLoad = function (teamId) {
    searchInput.value = teamId;
    clearError();
    lastSearchId = null; // allow reload
    const db = getDB();
    const team = db.teams.find((t) => t.id === teamId);
    if (!team) return;
    lastSearchId = teamId;
    currentTeamId = teamId;
    loadWorkspace(team, db);
    showToast(`Workspace loaded for ${team.name}`, "success");
    workspace.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function validateInput(val) {
    val = val.trim();
    if (!val) return "Team ID is required.";
    if (!/^[A-Za-z0-9\-]+$/.test(val))
      return "Only alphanumeric characters and hyphens allowed.";
    if (val.length > 20) return "Team ID too long (max 20 characters).";
    return null;
  }

  function showError(msg) {
    searchInput.classList.add("is-invalid");
    searchError.textContent = msg;
    searchError.style.display = "block";
  }

  function clearError() {
    searchInput.classList.remove("is-invalid");
    searchError.style.display = "none";
  }

  // ── Search ────────────────────────────────────────────────────────────────
  function doSearch() {
    const raw = searchInput.value.trim().toUpperCase();
    const err = validateInput(raw);
    if (err) {
      showError(err);
      return;
    }
    clearError();

    if (raw === lastSearchId) {
      showToast("Already viewing this team workspace.", "info");
      return;
    }

    // Spinner
    searchBtn.disabled = true;
    searchBtn.innerHTML = "Searching...";

    setTimeout(() => {
      searchBtn.disabled = false;
      searchBtn.innerHTML = "Search";

      const db = getDB();
      const team = db.teams.find(
        (t) =>
          t.id.toUpperCase() === raw ||
          t.id.toUpperCase().includes(raw) ||
          t.name.toUpperCase().includes(raw),
      );

      if (!team) {
        showError(`Team "${raw}" not found. Please check the ID.`);
        showToast(`Team "${raw}" not found.`, "error");
        return;
      }

      lastSearchId = raw;
      currentTeamId = raw;
      loadWorkspace(team, db);
      showToast(`Workspace loaded for ${team.name}`, "success");
    }, 400);
  }

  searchBtn.addEventListener("click", doSearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
  });
  searchInput.addEventListener(
    "input",
    debounce(() => {
      if (searchInput.classList.contains("is-invalid")) clearError();
    }, 200),
  );

  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearError();
    lastSearchId = null;
    currentTeamId = null;
    workspace.style.display = "none";
    emptyState.style.display = "";
  });

  // ── Load full workspace ───────────────────────────────────────────────────
  function loadWorkspace(team, db) {
    window._currentTeamIdGlobal = team.id;
    emptyState.style.display = "none";
    workspace.style.display = "flex";

    const extra = TEAM_EXTRA[team.id] || {
      project: team.name + " Project",
      bookings: [],
    };

    // Team info
    document.getElementById("wsTeamName").textContent = team.name;
    document.getElementById("wsTeamId").textContent = team.id;
    document.getElementById("wsProject").textContent = extra.project;

    const badge = document.getElementById("wsStatusBadge");
    const approvalStatus = team.status === "Active" ? "Approved" : "Pending";
    badge.textContent = approvalStatus;
    badge.className =
      "badge " +
      (approvalStatus === "Approved" ? "status-resolved" : "status-pending");

    // KPIs
    const returns = db.materialReturns.filter((r) => r.teamId === team.id);
    const requests = db.materialRequests.filter((r) => r.teamId === team.id);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const in7 = new Date(today);
    in7.setDate(in7.getDate() + 7);

    const borrowed = returns.filter((r) => r.status === "Assigned").length;
    const pending = requests.filter((r) => r.status === "Pending").length;
    const overdue = returns.filter((r) => r.status === "Overdue").length;
    const dueSoon = returns.filter((r) => {
      if (r.status !== "Assigned") return false;
      const d = new Date(r.date);
      d.setHours(0, 0, 0, 0);
      return d >= today && d <= in7;
    }).length;

    document.getElementById("kpiBorrowed").textContent = String(
      borrowed,
    ).padStart(2, "0");
    document.getElementById("kpiPending").textContent = String(
      pending,
    ).padStart(2, "0");
    document.getElementById("kpiDueSoon").textContent = String(
      dueSoon,
    ).padStart(2, "0");
    document.getElementById("kpiOverdue").textContent = String(
      overdue,
    ).padStart(2, "0");

    // Tables
    eqData = returns.map((r) => ({
      ...r,
      ...(EQ_EXTENDED[r.id] || {
        bookDate: "2025-06-01",
        slot: "09:00–11:00",
        eqId: "EQ-001",
      }),
    }));
    reqData = requests;

    eqPage = 1;
    reqPage = 1;
    document.getElementById("eqStatusFilter").value = "All";
    document.getElementById("eqSearch").value = "";
    document.getElementById("reqStatusFilter").value = "All";

    applyEqFilters();
    applyReqFilters();
    renderTimeline(team.id, db, extra.project);
  }

  // ── Borrowed Equipment Table ──────────────────────────────────────────────
  function applyEqFilters() {
    const status = document.getElementById("eqStatusFilter").value;
    const q = document.getElementById("eqSearch").value.toLowerCase().trim();

    eqFiltered = eqData.filter((r) => {
      const matchStatus = status === "All" || r.status === status;
      const matchQ =
        !q ||
        r.item.toLowerCase().includes(q) ||
        r.id.toLowerCase().includes(q);
      return matchStatus && matchQ;
    });

    eqFiltered.sort((a, b) => {
      const vA = a[eqSort.field === "bookDate" ? "bookDate" : "date"] || "";
      const vB = b[eqSort.field === "bookDate" ? "bookDate" : "date"] || "";
      return eqSort.dir === "asc" ? vA.localeCompare(vB) : vB.localeCompare(vA);
    });

    eqPage = 1;
    renderEqTable();
  }

  function renderEqTable() {
    const tbody = document.getElementById("eqTableBody");
    const total = eqFiltered.length;
    const pages = Math.ceil(total / PER_PAGE) || 1;
    if (eqPage > pages) eqPage = pages;
    const start = (eqPage - 1) * PER_PAGE;
    const slice = eqFiltered.slice(start, start + PER_PAGE);

    if (!slice.length) {
      tbody.innerHTML = `<tr><td colspan="6" class="teams-style-cce6b7">No records found</td></tr>`;
      document.getElementById("eqInfo").textContent = "Showing 0 entries";
      renderPagination("eqPagination", eqPage, pages, (p) => {
        eqPage = p;
        renderEqTable();
      });
      return;
    }

    const statusMap = {
      Assigned: { cls: "status-in-progress", label: "With Team" },
      Overdue: { cls: "status-open", label: "Overdue" },
      Returned: { cls: "status-resolved", label: "Returned" },
    };

    tbody.innerHTML = slice
      .map((r) => {
        const s = statusMap[r.status] || {
          cls: "status-pending",
          label: r.status,
        };
        const row = r.status === "Overdue" ? 'class="bg-red-50"' : "";
        return `<tr ${row}>
                <td class="teams-style-8744e4">${r.eqId}</td>
                <td class="teams-style-a5d2ba">${r.item}</td>
                <td>${r.bookDate}</td>
                
                <td class="teams-style-c16bed">${r.slot}</td>
                <td><span class="badge ${s.cls}">${s.label}</span></td>
            </tr>`;
      })
      .join("");

    document.getElementById("eqInfo").textContent =
      `Showing ${start + 1}–${Math.min(start + PER_PAGE, total)} of ${total} entries`;
    renderPagination("eqPagination", eqPage, pages, (p) => {
      eqPage = p;
      renderEqTable();
    });
  }

  document
    .getElementById("eqStatusFilter")
    .addEventListener("change", applyEqFilters);
  document
    .getElementById("eqSearch")
    .addEventListener("input", debounce(applyEqFilters, 300));

  document.querySelectorAll("[data-eq-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const f = th.dataset.eqSort;
      eqSort.dir =
        eqSort.field === f ? (eqSort.dir === "asc" ? "desc" : "asc") : "asc";
      eqSort.field = f;
      renderEqTable();
    });
  });

  // ── Material Requests Table ───────────────────────────────────────────────
  function applyReqFilters() {
    const status = document.getElementById("reqStatusFilter").value;
    reqFiltered = reqData.filter(
      (r) => status === "All" || r.status === status,
    );
    reqPage = 1;
    renderReqTable();
  }

  function renderReqTable() {
    const tbody = document.getElementById("reqTableBody");
    const total = reqFiltered.length;
    const pages = Math.ceil(total / PER_PAGE) || 1;
    if (reqPage > pages) reqPage = pages;
    const start = (reqPage - 1) * PER_PAGE;
    const slice = reqFiltered.slice(start, start + PER_PAGE);

    if (!slice.length) {
      tbody.innerHTML = `<tr><td colspan="5" class="teams-style-cce6b7">No requests found</td></tr>`;
      document.getElementById("reqInfo").textContent = "Showing 0 entries";
      renderPagination("reqPagination", reqPage, pages, (p) => {
        reqPage = p;
        renderReqTable();
      });
      return;
    }

    const statusMap = {
      Pending: "status-pending",
      Approved: "status-resolved",
      Rejected: "status-open",
      Issued: "status-in-progress",
      Returned: "status-resolved",
    };

    tbody.innerHTML = slice
      .map(
        (r) => `
            <tr>
                <td class="teams-style-8744e4">${r.id}</td>
                <td class="teams-style-a5d2ba">${r.item}</td>
                <td class="teams-style-a5d2ba">${r.qty}</td>
                <td>${r.date}</td>
                <td><span class="badge ${statusMap[r.status] || "status-pending"}">${r.status}</span></td>
            </tr>`,
      )
      .join("");

    document.getElementById("reqInfo").textContent =
      `Showing ${start + 1}–${Math.min(start + PER_PAGE, total)} of ${total} entries`;
    renderPagination("reqPagination", reqPage, pages, (p) => {
      reqPage = p;
      renderReqTable();
    });
  }

  document
    .getElementById("reqStatusFilter")
    .addEventListener("change", applyReqFilters);

  // ── Activity Timeline ─────────────────────────────────────────────────────
  function renderTimeline(teamId, db, project) {
    const container = document.getElementById("timelineContainer");
    const events = [];

    db.materialReturns
      .filter((r) => r.teamId === teamId)
      .forEach((r) => {
        const icons = {
          Returned: { icon: "&#10003;", color: "#16A34A", bg: "#DCFCE7" },
          Overdue: { icon: "&#9888;", color: "#DC2626", bg: "#FEE2E2" },
          Assigned: { icon: "&#128230;", color: "#2563EB", bg: "#DBEAFE" },
        };
        const s = icons[r.status] || {
          icon: "&#8635;",
          color: "#64748B",
          bg: "#F1F5F9",
        };
        const labels = {
          Returned: "Equipment Returned",
          Overdue: "Return Overdue",
          Assigned: "Equipment Borrowed",
        };
        events.push({
          date: r.date,
          icon: s.icon,
          color: s.color,
          bg: s.bg,
          title: labels[r.status] || r.status,
          desc: r.item,
        });
      });

    db.materialRequests
      .filter((r) => r.teamId === teamId)
      .forEach((r) => {
        const icons = {
          Approved: { icon: "&#10003;", color: "#16A34A", bg: "#DCFCE7" },
          Pending: { icon: "&#9998;", color: "#D97706", bg: "#FEF3C7" },
          Rejected: { icon: "&#10005;", color: "#EF4444", bg: "#FEE2E2" },
        };
        const s = icons[r.status] || {
          icon: "&#9998;",
          color: "#64748B",
          bg: "#F1F5F9",
        };
        events.push({
          date: r.date,
          icon: s.icon,
          color: s.color,
          bg: s.bg,
          title: "Component Requested",
          desc: `${r.item} × ${r.qty} — ${r.status}`,
        });
      });

    db.tickets
      .filter((t) => t.assignedTo === teamId)
      .forEach((t) => {
        events.push({
          date: t.date.replace(/ /g, "-"),
          icon: "&#9993;",
          color: "#7C3AED",
          bg: "#EDE9FE",
          title: "Ticket Raised",
          desc: t.subject,
        });
      });

    // Sort newest first
    events.sort((a, b) => b.date.localeCompare(a.date));

    if (!events.length) {
      container.innerHTML = `<div class="teams-style-65dd0a">No activity recorded yet.</div>`;
      return;
    }

    container.innerHTML = events
      .map(
        (e, i) => `
            <div class="teams-style-a39ef9"16px" : "0"};">
                <div class="teams-style-64b8a6">
                    <div class="teams-style-42031d">${e.icon}</div>
                    ${i < events.length - 1 ? `<div class="teams-style-3cd439"></div>` : ""}
                </div>
                <div class="teams-style-e9cfa2"0" : "0"};">
                    <div class="teams-style-18f3d6">${e.title}</div>
                    <div class="teams-style-4b3267">${e.desc}</div>
                    <div class="teams-style-93ac84">&#128197; ${e.date}</div>
                </div>
            </div>`,
      )
      .join("");
  }

  // ── Pagination helper ─────────────────────────────────────────────────────
  function renderPagination(containerId, current, total, onPage) {
    const ul = document.getElementById(containerId);
    ul.innerHTML = "";

    const prev = document.createElement("li");
    prev.className = `page-item ${current === 1 ? "disabled" : ""}`;
    prev.innerHTML = `<button class="page-link" ${current === 1 ? "disabled" : ""}>&lt;</button>`;
    if (current > 1)
      prev
        .querySelector("button")
        .addEventListener("click", () => onPage(current - 1));
    ul.appendChild(prev);

    for (let i = 1; i <= total; i++) {
      const li = document.createElement("li");
      li.className = `page-item ${i === current ? "active" : ""}`;
      li.innerHTML = `<button class="page-link">${i}</button>`;
      li.querySelector("button").addEventListener("click", () => onPage(i));
      ul.appendChild(li);
    }

    const next = document.createElement("li");
    next.className = `page-item ${current === total ? "disabled" : ""}`;
    next.innerHTML = `<button class="page-link" ${current === total ? "disabled" : ""}>&gt;</button>`;
    if (current < total)
      next
        .querySelector("button")
        .addEventListener("click", () => onPage(current + 1));
    ul.appendChild(next);
  }

  renderQuickTable();

  // ── Quick Actions ─────────────────────────────────────────────────────────
  document.getElementById("btnRaiseTicket").addEventListener("click", () => {
    if (!currentTeamId) return;
    createConfirmationModal(
      "Raise Ticket",
      `Raise a new damage/issue ticket for team <strong>${currentTeamId}</strong>. You will be redirected to the Ticket Management page.`,
      () => {
        window.location.href = "tickets.html";
      },
      "Go to Ticket Management",
      false,
    );
  });

  document.getElementById("btnPrint").addEventListener("click", () => {
    if (!currentTeamId) return;
    createConfirmationModal(
      "Print Team Summary",
      `Print the full workspace summary for team <strong>${currentTeamId}</strong>?`,
      () => {
        window.print();
      },
      "Print",
      false,
    );
  });

  // Add Request button
  document.getElementById("btnAddRequest").addEventListener("click", () => {
    if (!currentTeamId) {
      showToast("Load a team workspace first.", "warn");
      return;
    }
    if (typeof window.openAddRequestModal === "function") {
      window.openAddRequestModal();
    }
  });

  // Expose loadWorkspace for external reload (from the modal form)
  window.loadWorkspaceGlobal = loadWorkspace;
});

// ── Add Component Request Modal ─────────────────────────────────────────
const addModal = document.getElementById("addRequestModal");
const addForm = document.getElementById("addRequestForm");

function openAddRequestModal() {
  if (!window._currentTeamIdGlobal) {
    showToast("Please load a team workspace first.", "warn");
    return;
  }
  // Set min date to today
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById("reqDate").min = today;
  document.getElementById("reqDate").value = "";
  document.getElementById("reqItemName").value = "";
  document.getElementById("reqQty").value = "";
  document.getElementById("reqPurpose").value = "";
  // Clear errors
  ["reqItemErr", "reqQtyErr", "reqDateErr", "reqPurposeErr"].forEach((id) => {
    const el = document.getElementById(id);
    el.textContent = "";
    el.style.display = "none";
  });
  ["reqItemName", "reqQty", "reqDate", "reqPurpose"].forEach((id) => {
    document.getElementById(id).classList.remove("is-invalid");
  });
  addModal.style.display = "flex";
}

function closeAddRequestModal() {
  addModal.style.display = "none";
}

document
  .getElementById("closeAddRequestModal")
  .addEventListener("click", closeAddRequestModal);
document
  .getElementById("cancelAddRequest")
  .addEventListener("click", closeAddRequestModal);
addModal.addEventListener("click", (e) => {
  if (e.target === addModal) closeAddRequestModal();
});

function showFieldErr(inputId, errId, msg) {
  const inp = document.getElementById(inputId);
  const err = document.getElementById(errId);
  inp.classList.add("is-invalid");
  err.textContent = msg;
  err.style.display = "block";
  return false;
}
function clearFieldErr(inputId, errId) {
  document.getElementById(inputId).classList.remove("is-invalid");
  const err = document.getElementById(errId);
  err.textContent = "";
  err.style.display = "none";
}

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const item = document.getElementById("reqItemName").value.trim();
  const qty = parseInt(document.getElementById("reqQty").value, 10);
  const date = document.getElementById("reqDate").value;
  const purpose = document.getElementById("reqPurpose").value.trim();
  const today = new Date().toISOString().slice(0, 10);

  clearFieldErr("reqItemName", "reqItemErr");
  clearFieldErr("reqQty", "reqQtyErr");
  clearFieldErr("reqDate", "reqDateErr");
  clearFieldErr("reqPurpose", "reqPurposeErr");

  if (!item)
    valid = showFieldErr("reqItemName", "reqItemErr", "Item name is required.");
  else if (item.length < 3)
    valid = showFieldErr(
      "reqItemName",
      "reqItemErr",
      "Must be at least 3 characters.",
    );
  if (isNaN(qty) || qty < 1)
    valid = showFieldErr(
      "reqQty",
      "reqQtyErr",
      "Enter a valid quantity (min 1).",
    );
  else if (qty > 999)
    valid = showFieldErr("reqQty", "reqQtyErr", "Quantity cannot exceed 999.");
  if (!date)
    valid = showFieldErr(
      "reqDate",
      "reqDateErr",
      "Required by date is required.",
    );
  else if (date < today)
    valid = showFieldErr(
      "reqDate",
      "reqDateErr",
      "Date must be today or in the future.",
    );
  if (!purpose)
    valid = showFieldErr(
      "reqPurpose",
      "reqPurposeErr",
      "Purpose / notes is required.",
    );
  else if (purpose.length < 10)
    valid = showFieldErr(
      "reqPurpose",
      "reqPurposeErr",
      "Please provide at least 10 characters.",
    );

  if (!valid) return;

  // Save to DB
  const db = getDB();
  const teamId = window._currentTeamIdGlobal;
  const team = db.teams.find((t) => t.id === teamId);
  const nextNum = db.materialRequests.length + 1;
  const newReq = {
    id: `REQ-${String(nextNum).padStart(3, "0")}`,
    teamId: teamId,
    teamName: team ? team.name : teamId,
    item: item,
    qty: qty,
    status: "Pending",
    date: date,
    purpose: purpose,
  };
  db.materialRequests.push(newReq);
  setDB(db);

  closeAddRequestModal();
  showToast(`Request for "${item}" submitted successfully!`, "success");

  // Reload workspace to reflect new request
  const updatedDb = getDB();
  const updatedTeam = updatedDb.teams.find((t) => t.id === teamId);
  if (updatedTeam && typeof loadWorkspaceGlobal === "function") {
    loadWorkspaceGlobal(updatedTeam, updatedDb);
  }
});

// Expose openAddRequestModal for the button in teams.js
window.openAddRequestModal = openAddRequestModal;

document.addEventListener("click", function (e) {
  let target = e.target.closest("[data-action]");
  if (!target) return;
  let action = target.getAttribute("data-action");
  if (action === "quickLoad") {
    e.preventDefault();
    quickLoad(target.getAttribute("data-id"));
  }
});
