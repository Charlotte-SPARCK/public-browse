const solutions = [
  {
    id: 'S100000-001',
    name: 'Write on Time',
    summary: 'Write on Time is a Citizen-facing Appointments Management system specifically designed to reduce the number of DNAs in your practice.',
    organisation: {
      id: '1000000',
      name: 'Really Kool Corporation',
    },
    capabilities: [
      {
        id: 'E4D22F8A-0F5F-43D5-A8E4-60F1365E968A',
        name: 'Appointments Management - Citizen',
      },
    ],
  },
  {
    id: 'S1000005-001',
    name: 'Document Wizard',
    summary: 'Document Wizard is the UK industry-leader for clinical document management software due to our patented lightweight interface and interoperability.',
    organisation: {
      id: '1000005',
      name: 'Curtis Systems',
    },
    capabilities: [
      {
        id: '25C81932-23B7-4407-A00E-8EFDD1EEA90D',
        name: 'Document Management',
      },
      {
        id: 'C2E2117B-3603-42A2-81C2-A94B3BE793EF',
        name: 'Unstructured Data Extraction',
      },
    ],
  },
  {
    id: 'S1000006-001',
    name: 'Paperlite',
    summary: 'Paperlite utilises new OCR technology to seamlessly transfer written notes to digital patient records.',
    organisation: {
      id: '1000006',
      name: 'Clinical Raptor',
    },
    capabilities: [
      {
        id: 'BB6F4DC1-C54E-4485-97AE-4BB73AD8EC2E',
        name: 'Scanning',
      },
      {
        id: '25C81932-23B7-4407-A00E-8EFDD1EEA90D',
        name: 'Document Management',
      },
    ],
  },
  {
    id: 'S1000007-001',
    name: 'Medsort',
    summary: 'Medsort enhances your medicine optimisation process and introduces new, more customisable tools that can be adapted to your local environment.',
    organisation: {
      id: '1000007',
      name: 'Doc Lightning',
    },
    capabilities: [
      {
        id: '3B4B1FC3-720D-4814-A91D-6BB47EFAD393',
        name: 'Medicines Optimisation',
      },
    ],
  },
  {
    id: 'S1000008-001',
    name: 'InfoSource',
    summary: 'Infosource is an extremly lightweight and intuitive information maintenance system that puts data quality and user-friendly interfaces above all else. ',
    organisation: {
      id: '1000008',
      name: 'Docability Software',
    },
    capabilities: [
      {
        id: '9F71BD15-E4BF-460C-9C2C-4C141B5B0727',
        name: 'Patient Information Maintenance',
      },
    ],
  },
  {
    id: 'S1000009-001',
    name: 'Scripter V2',
    summary: 'Scripter V2 is the next revolution in prescribing software. It is widely used by medical professionals in both the US and UK.',
    organisation: {
      id: '1000008',
      name: 'Docability Software',
    },
    capabilities: [
      {
        id: '669A02BE-BE1A-417D-8528-43C113C6E5E6',
        name: 'Prescribing',
      },
    ],
  },
  {
    id: 'S100001-001',
    name: 'Appointment Gateway',
    summary: 'Appointment Gateway is a complete appointment management suite that has been fully integrated with all major clinical systems throughout both the UK and Europe.',
    organisation: {
      id: '1000001',
      name: 'Remedical Software',
    },
    capabilities: [
      {
        id: '9302758D-CC42-47A7-8F66-0E009008E507',
        name: 'Appointments Management - GP',
      },
      {
        id: 'E4D22F8A-0F5F-43D5-A8E4-60F1365E968A',
        name: 'Appointments Management - Citizen',
      },
    ],
  },
  {
    id: 'S1000010-001',
    name: 'Productivity Booster',
    summary: 'Productivity Booster relies on patented technology to discover & recommend optimisations to a wide range of common tasks and processes.',
    organisation: {
      id: '1000010',
      name: 'Cure Forward',
    },
    capabilities: [
      {
        id: '943AF712-5E13-4D33-BB93-807C06E9C988',
        name: 'Productivity',
      },
    ],
  },
  {
    id: 'S1000011-001',
    name: 'Connect All',
    summary: 'Connect All is the next evolution in GP referral management that greatly improves upon current methods of monitoring referral pathways.',
    organisation: {
      id: '1000011',
      name: 'Hansa Healthcare',
    },
    capabilities: [
      {
        id: 'F6D02574-7232-48BD-8D45-7C145D47B4C7',
        name: 'Referral Management',
      },
    ],
  },
  {
    id: 'S1000012-001',
    name: 'Healthbank BI',
    summary: 'Healthbank BI is one of the world leaders in clinical reporting due to our unmatched data structuring and customisation options.',
    organisation: {
      id: '1000012',
      name: 'Moonlight Intercare',
    },
    capabilities: [
      {
        id: '3B6976A5-5532-41C6-89BF-92948BF238EF',
        name: 'Reporting',
      },
    ],
  },
  {
    id: 'S1000013-001',
    name: 'Poptomiser',
    summary: "Dr Nick's Poptomiser combines our popoular risk & resource management tools in one convenient package.",
    organisation: {
      id: '1000013',
      name: 'eHealth Development',
    },
    capabilities: [
      {
        id: 'BDF84761-FB3D-4548-A9DC-E06965C1375A',
        name: 'Resource Management',
      },
      {
        id: '04F54A70-2640-4350-A22A-E7CF448A6A80',
        name: 'Risk Stratification',
      },
    ],
  },
  {
    id: 'S1000014-001',
    name: 'Quickflow',
    summary: 'Quickflow is known worldwide as one of the most user-friendly and adaptable workflow management solutions.',
    organisation: {
      id: '1000014',
      name: 'Dr. Nick',
    },
    capabilities: [
      {
        id: '0FC6D728-8BC8-4D6F-B606-038B15040BF9',
        name: 'Workflow',
      },
    ],
  },
  {
    id: 'S1000015-001',
    name: 'Rising Sun',
    summary: "Rising Sun is a total practice management solution built with interoperability in mind. We take pride in our product's ability to deliver the results that are specifically needed for your practice.",
    organisation: {
      id: '1000015',
      name: 'Testproof Technology',
    },
    capabilities: [
      {
        id: '9302758D-CC42-47A7-8F66-0E009008E507',
        name: 'Appointments Management - GP',
      },
      {
        id: '669A02BE-BE1A-417D-8528-43C113C6E5E6',
        name: 'Prescribing',
      },
      {
        id: '9F71BD15-E4BF-460C-9C2C-4C141B5B0727',
        name: 'Patient Information Maintenance',
      },
      {
        id: 'A66C2751-72C1-4E9B-A504-51792EEE083E',
        name: 'Recording Consultations',
      },
      {
        id: 'F6D02574-7232-48BD-8D45-7C145D47B4C7',
        name: 'Referral Management',
      },
      {
        id: 'BDF84761-FB3D-4548-A9DC-E06965C1375A',
        name: 'Resource Management',
      },
    ],
  },
  {
    id: 'S1000016-001',
    name: 'Health Guardian',
    summary: "Health Guardian is the backbone of your practice's IT landscape due to its reliability and stability. Our system will help you ensure that IT never gets in the way of good patient care.",
    organisation: {
      id: '1000016',
      name: 'Hojo Health',
    },
    capabilities: [
      {
        id: '9302758D-CC42-47A7-8F66-0E009008E507',
        name: 'Appointments Management - GP',
      },
      {
        id: '669A02BE-BE1A-417D-8528-43C113C6E5E6',
        name: 'Prescribing',
      },
      {
        id: '9F71BD15-E4BF-460C-9C2C-4C141B5B0727',
        name: 'Patient Information Maintenance',
      },
      {
        id: 'A66C2751-72C1-4E9B-A504-51792EEE083E',
        name: 'Recording Consultations',
      },
      {
        id: 'F6D02574-7232-48BD-8D45-7C145D47B4C7',
        name: 'Referral Management',
      },
      {
        id: 'BDF84761-FB3D-4548-A9DC-E06965C1375A',
        name: 'Resource Management',
      },
    ],
  },
  {
    id: 'S1000017-001',
    name: 'Cure One',
    summary: 'Cure One gives you absolute control over all PC-based care processes in your practice, and our web-based interface allows every practice employee to work remotely from anywhere in the world.',
    organisation: {
      id: '1000017',
      name: 'Jericho Healthcare',
    },
    capabilities: [
      {
        id: '9302758D-CC42-47A7-8F66-0E009008E507',
        name: 'Appointments Management - GP',
      },
      {
        id: '669A02BE-BE1A-417D-8528-43C113C6E5E6',
        name: 'Prescribing',
      },
      {
        id: '9F71BD15-E4BF-460C-9C2C-4C141B5B0727',
        name: 'Patient Information Maintenance',
      },
      {
        id: 'A66C2751-72C1-4E9B-A504-51792EEE083E',
        name: 'Recording Consultations',
      },
      {
        id: 'F6D02574-7232-48BD-8D45-7C145D47B4C7',
        name: 'Referral Management',
      },
      {
        id: 'BDF84761-FB3D-4548-A9DC-E06965C1375A',
        name: 'Resource Management',
      },
    ],
  },
  {
    id: 'S1000018-001',
    name: 'Nano+',
    summary: 'Nano+ is the quickest, most streamlined foundation system available in the UK GP market. Our software does more with less and allows you to focus on delivering patient care rather than ticking boxes.',
    organisation: {
      id: '1000018',
      name: 'Mana Systems',
    },
    capabilities: [
      {
        id: '9302758D-CC42-47A7-8F66-0E009008E507',
        name: 'Appointments Management - GP',
      },
      {
        id: '669A02BE-BE1A-417D-8528-43C113C6E5E6',
        name: 'Prescribing',
      },
      {
        id: '9F71BD15-E4BF-460C-9C2C-4C141B5B0727',
        name: 'Patient Information Maintenance',
      },
      {
        id: 'A66C2751-72C1-4E9B-A504-51792EEE083E',
        name: 'Recording Consultations',
      },
      {
        id: 'F6D02574-7232-48BD-8D45-7C145D47B4C7',
        name: 'Referral Management',
      },
      {
        id: 'BDF84761-FB3D-4548-A9DC-E06965C1375A',
        name: 'Resource Management',
      },
    ],
  },
  {
    id: 'S1000019-001',
    name: 'Oakwood Health',
    summary: 'Oakwood Health is internationally recognised as one of the most efficient clinical software suites ever created. It utilises an advanced neural net to learn and improve processes based on usage.',
    organisation: {
      id: '1000019',
      name: 'Sunhealth Nanosystems',
    },
    capabilities: [
      {
        id: '9302758D-CC42-47A7-8F66-0E009008E507',
        name: 'Appointments Management - GP',
      },
      {
        id: '669A02BE-BE1A-417D-8528-43C113C6E5E6',
        name: 'Prescribing',
      },
      {
        id: '9F71BD15-E4BF-460C-9C2C-4C141B5B0727',
        name: 'Patient Information Maintenance',
      },
      {
        id: 'A66C2751-72C1-4E9B-A504-51792EEE083E',
        name: 'Recording Consultations',
      },
      {
        id: 'F6D02574-7232-48BD-8D45-7C145D47B4C7',
        name: 'Referral Management',
      },
      {
        id: 'BDF84761-FB3D-4548-A9DC-E06965C1375A',
        name: 'Resource Management',
      },
    ],
  },
  {
    id: 'S100002-001',
    name: 'Zen Guidance',
    summary: 'Zen Guidance utilizes an advanced AI framework to provide clinicians with highly accurate data to support sound decision-making.',
    organisation: {
      id: '1000002',
      name: 'CareShare',
    },
    capabilities: [
      {
        id: '83276C23-7564-4037-8EB0-7B87D5185AD2',
        name: 'Clinical Decision Support',
      },
    ],
  },
  {
    id: 'S100003-001',
    name: 'Intellidoc Comms',
    summary: 'Intellidoc Comms empowers all practice staff to record & send communications in an extremely streamlined and time-efficient manner.',
    organisation: {
      id: '1000003',
      name: 'Avatar Solutions',
    },
    capabilities: [
      {
        id: 'A66C2751-72C1-4E9B-A504-51792EEE083E',
        name: 'Recording Consultations',
      },
      {
        id: '79519E22-E16F-47D8-B934-DD850D191CFF',
        name: 'Communication Management',
      },
    ],
  },
  {
    id: 'S100004-001',
    name: 'Diagnostics XYZ',
    summary: 'Diagnostics XYZ introduces new diagnostic tools not currently provided by the leading clinical software suppliers.',
    organisation: {
      id: '1000004',
      name: 'Catterpillar Medworks',
    },
    capabilities: [
      {
        id: '3CE48C13-820B-411F-9671-88EA379BFBC8',
        name: 'Digital Diagnostics',
      },
    ],
  },
];

export default solutions;
